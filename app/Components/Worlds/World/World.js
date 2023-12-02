"use client";

import React from "react";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap, Bounce, Power3, Expo } from "gsap";
import Clouds from "./Clouds/Clouds";
import Flats from "./Flats/Flats";
import Background from "./Background/Background";
import Loader from "./Loader/Loader";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Prompt from "./Prompt/Prompt";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import Joy from "./Joy/Joy";
import PopupsA from "./Popups/PopupsA";
import PopupsB from "./Popups/PopupsB";
import { getCookie, setCookie } from "cookies-next";

let hovered = null;
let disableFunctionality = false;
var clock = new THREE.Clock();

const World = ({
  world,
  title,
  year,
  color,
  contents,
  flats,
  model,
  background,
  objects = {},
  flow,
  audioEnding,
  zoomMultiplier = 1,
}) => {
  const [components, setComponents] = useState({
    renderer: null,
    scene: null,
    pointer: null,
    raycaster: null,
    axesHelper: null,
    lights: {
      ambient: null,
      directional: null,
      directionalHelper: null,
    },
    camera: null,
    orbit: null,
  });

  const [loaded, setLoaded] = useState(false);
  const [mixer, setMixer] = useState(null);
  const [gltfLoaded, setGltfLoaded] = useState(null);
  const [model3d, setModel3d] = useState(null);
  const [modelObjs, setModelObjs] = useState(null);
  const [objSelected, setObjSelected] = useState(null);
  const [initialAnimate, setInitialAnimate] = useState(false);
  const [finishAnimate, setFinishAnimate] = useState(false);
  const [audio, setAudio] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
  const [currentFlow, setCurrentFlow] = useState({});
  const [showJoy, setShowJoy] = useState(false);
  const [videoPlayed, setVideoPlayed] = useState(false);

  const ref = useRef(false);

  /* Load all components */
  useEffect(() => {
    if (!loaded) {
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
      });
      renderer.shadows = true;
      renderer.shadowType = 1;
      renderer.shadowMap.enabled = true;
      renderer.toneMapping = 0;
      renderer.toneMappingExposure = 1;
      renderer.toneMapping = THREE.NoToneMapping;
      renderer.setClearColor(0xffffff, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      const scene = new THREE.Scene();
      const pointer = new THREE.Vector2();
      const raycaster = new THREE.Raycaster();
      const axesHelper = new THREE.AxesHelper(5);
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
      const directionalLight = new THREE.DirectionalLight(0xbebebe, 6);
      const dLightHelper = new THREE.DirectionalLightHelper(
        directionalLight,
        3
      );
      const aspect = window.innerWidth / window.innerHeight;
      const camera = new THREE.PerspectiveCamera(30, aspect, 1, 2000);

      const orbit = new OrbitControls(camera, renderer.domElement);
      orbit.enableRotate = false;
      orbit.enableZoom = false;
      orbit.enablePan = false;
      orbit.update();

      setComponents({
        renderer,
        scene,
        pointer,
        raycaster,
        axesHelper,
        lights: {
          ambient: ambientLight,
          directional: directionalLight,
          directionalHelper: dLightHelper,
        },
        camera,
        orbit,
      });

      setLoaded(true);
    }
  }, []);

  /* @TODO: Handle translation for cookie */
  useEffect(() => {
    if (!getCookie("lang")) {
      setCookie("lang", "en");
    }
  }, []);



  /* Initialize Scene */
  useEffect(() => {
    const canvasWrapper = document.getElementById('world1');
    if (!model3d && loaded) {
      components.renderer.setSize(canvasWrapper.clientWidth, canvasWrapper.clientHeight);
      components.camera.aspect = 16 / 9;
      components.camera.updateProjectionMatrix()
      // components.renderer.setSize(window.innerWidth, window.innerHeight);
      components.camera.position.set(0, 20, 17);
      components.lights.directional.position.set(0, 11.19, 12.133);
      components.lights.directional.castShadow = true;
      components.lights.directional.shadow.bias = -0.001;
      components.lights.directional.shadowMapWidth = 2048; // default is 512
      components.lights.directional.shadowMapHeight = 2048;
      components.lights.directional.shadow.mapSize.width = 2048;
      components.lights.directional.shadow.mapSize.height = 2048;

      components.scene.add(components.lights.directional);
      components.scene.add(components.lights.ambient);
      components.camera.position.set(0, 10, 17);
      components.lights.directional.position.set(0, 10, 30);

      onLoad();

      document.getElementById("world1").appendChild(components.renderer.domElement);
      window.addEventListener("resize", onWindowResize, false);
    }
  }, [model3d, loaded]);

  /* Setup scene */
  useEffect(() => {
    if (modelObjs) {
      setInitialAnimate(true);

      window.requestAnimationFrame(animate);

      const interactables = modelObjs.children.filter(
        (obj) => Object.keys(contents).indexOf(obj.name) > -1
      );
      const trees = modelObjs.children.filter(
        (obj) => obj.name.indexOf(objects.tree ? objects.tree : "Tree") > -1
      );
      const joys = modelObjs.children.filter(
        (obj) => obj.name.indexOf(objects.joy ? objects.joy : "Joy-") > -1
      );
      const lights = modelObjs.children.filter(
        (obj) =>
          obj.name.indexOf(objects.light ? objects.light : "Light-Rays") > -1
      );
      const clouds = modelObjs.children.filter(
        (obj) => obj.name.indexOf(objects.cloud ? objects.cloud : "Cloud") > -1
      );

      for (const obj of interactables) {
        obj.position.y += 5;
        obj.visible = false;
      }

      for (const obj of joys) {
        obj.visible = false;
      }

      for (const obj of lights) {
        obj.scale.x = 0;
        obj.scale.y = 0;
        obj.material = new THREE.MeshLambertMaterial({ map: obj.material.map });
        obj.material.color = new THREE.Color(0xe7e7e7);
        obj.material.emissive = new THREE.Color(0xffd700);
        obj.material.emissiveIntensity = 4.34;
        // obj.material.depthTest = false;
        obj.material.transparent = true;
        obj.receiveShadow = false;
        obj.castShadow = false;
      }

      for (const obj of trees) {
        const scale = obj.scale.clone();

        obj.originalScale = scale;

        setTimeout(() => {
          obj.scale.x = 0;
          obj.scale.y = 0;
        }, 500);
      }

      for (const [i, obj] of clouds.entries()) {
        const tl = gsap.timeline({
          repeat: -1,
          defaults: { ease: "sine.inOut", duration: 4 },
        });

        tl.to(obj.position, {
          x: obj.position.x + 0.2,
          y: obj.position.y + 0.2,
          delay: i * 0.5,
        });
        tl.to(obj.position, {
          x: obj.position.x + 0.2,
          y: obj.position.y - 0.2,
          delay: i * 0.5,
        });
        tl.to(obj.position, {
          x: obj.position.x - 0.2,
          y: obj.position.y + 0.2,
          delay: i * 0.5,
        });
        tl.to(obj.position, {
          x: obj.position.x - 0.2,
          y: obj.position.y - 0.2,
          delay: i * 0.5,
        });
        tl.to(obj.position, {
          x: obj.position.x,
          y: obj.position.y,
          delay: i * 0.5,
        });
      }
    }
  }, [modelObjs]);

  /* Initial animate */
  useEffect(() => {
    if (modelObjs && initialAnimate) {
      const clips = gltfLoaded.animations;
      const clip =
        world === 2
          ? THREE.AnimationClip.findByName(clips, "AllAnim")
          : THREE.AnimationClip.findByName(clips, "AnimAll");
      const action = mixer.clipAction(clip);

      if (action) {
        action.setLoop(THREE.LoopRepeat);
        action.play();
      }

      const interactables = modelObjs.children.filter(
        (obj) => Object.keys(contents).indexOf(obj.name) > -1
      );
      const trees = modelObjs.children.filter(
        (obj) => obj.name.indexOf(objects.tree ? objects.tree : "Tree") > -1
      );

      gsap.timeline().to(components.camera.position, 2, {
        y: 3,
        ease: Power3.easeInOut,
        delay: 2,
      });

      gsap.timeline().to(["#clogo", "#cicons", "#cchapter", "#cheader"], 0.5, {
        y: 0,
        x: 0,
        opacity: 1,
        ease: Power3.easeInOut,
        delay: 3.5,
      });

      for (const [i, obj] of trees.entries()) {
        gsap.timeline().to(obj.rotation, 3, {
          z: obj.rotation.z + 0.3,
          ease: Power3.easeInOut,
          delay: 3.5 + i * 0.5,
          repeat: -1,
          yoyo: true,
        });

        gsap.timeline().to(obj.scale, 0.5, {
          x: obj.originalScale.x,
          y: obj.originalScale.y,
          ease: Power3.easeOut,
          delay: 4 + i * 0.03,
        });
      }

      setTimeout(() => {
        for (const [i, obj] of interactables.entries()) {
          obj.visible = true;
          gsap.timeline().to(obj.position, 1, {
            y: obj.position.y - 5,
            ease: Bounce.easeOut,
            delay: i * 0.05,
          });
        }
      }, 4500);

      setTimeout(() => {
        setFinishAnimate(true);
      }, 5300);
    }
  }, [modelObjs, initialAnimate]);

  /* Finish animate */
  useEffect(() => {
    if (finishAnimate) {
      document.addEventListener("pointermove", onPointerMove, false);

      if (flow && flow.length > 0 && !currentFlow.action) {
        setShowJoy(true);

        setTimeout(() => {
          setCurrentFlow(flow[0]);
        }, 700);
      }
    }
  }, [finishAnimate, disableFunctionality]);

  /* Apply click animation */
  useEffect(() => {
    bgAudioRef.current.play();
    bgAudioRef.current.volume = 0;
    if (currentFlow.action === "GOTO") {
      document.addEventListener("click", onClickObject);

      const light = modelObjs.children.find(
        (c) => c.name === currentFlow.light
      );
      const interactables = modelObjs.children[0].children.find(
        (c) => c.name === currentFlow.target
      );

      if (light) {
        gsap.timeline().to(light.scale, 0.5, {
          x: 10,
          y: 10,
          z: 10,
          ease: Power3.easeInOut,
        });
      }

      if (interactables) {
        interactables.renderOrder = 20;

        for (const obj of interactables.children) {
          obj.renderOrder = 20;
        }
      }
    }
  }, [currentFlow]);

  const onLoad = () => {
    const assetLoader = new GLTFLoader();
    const dLoader = new DRACOLoader();
    dLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
    );
    dLoader.setDecoderConfig({ type: "js" });
    assetLoader.setDRACOLoader(dLoader);

    assetLoader.load(
      model,
      async function (gltf) {
        const mixer = new THREE.AnimationMixer(gltf.scene);

        setMixer(mixer);
        setModel3d(gltf.scene);
        setModelObjs(world !== 1 ? gltf.scene.children[0] : gltf.scene);
        setGltfLoaded(gltf);

        gltf.scene.traverse(function (child) {
          child.castShadow = true;
          child.receiveShadow = true;

          for (const c of child.children) {
            c.castShadow = true;
            c.receiveShadow = true;

            for (const d of c.children) {
              d.castShadow = true;
              d.receiveShadow = true;

              for (const e of d.children) {
                e.castShadow = true;
                e.receiveShadow = true;
              }
            }
          }
        });

        components.scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.log(error);
      }
    );
  };

  const animate = () => {
    window.requestAnimationFrame(animate);

    mixer.update(clock.getDelta());

    components.renderer.render(components.scene, components.camera);

    const lights = modelObjs.children.filter(
      (obj) =>
        obj.name.indexOf(objects.light ? objects.light : "Light-Rays") > -1
    );

    for (const light of lights) {
      light.rotation.y += 0.01;
    }
  };

  const onHover = () => {
    if (!disableFunctionality) {
      if (model3d) {
        components.raycaster.setFromCamera(
          components.pointer,
          components.camera
        );

        const objects = components.raycaster.intersectObjects(model3d.children);
        const raycasted = Object.keys(contents);

        const setTransition = (object) => {
          if (hovered === null) {
            let step = 0.3;
            let speed = 0.1;
            step += speed;

            hovered = object.name;

            const position = object.position;

            gsap
              .timeline()
              .to(object.position, 0.4, {
                y: position.y + 0.5,
                ease: Power3.easeOut,
              })
              .to(object.position, 0.2, {
                y: position.y,
                ease: Power3.easeOut,
              });

            setTimeout(() => {
              hovered = null;
            }, 600);
          }
        };

        if (objects.length < 11) {
          for (let i = 0; i < objects.length; i++) {
            if (raycasted.indexOf(objects[i].object.name) > -1) {
              setTransition(objects[i].object);
            } else if (
              objects[i].object.parent &&
              raycasted.indexOf(objects[i].object.parent.name) > -1
            ) {
              setTransition(objects[i].object.parent);
            } else if (
              objects[i].object.parent.parent &&
              raycasted.indexOf(objects[i].object.parent.parent.name) > -1
            ) {
              setTransition(objects[i].object.parent.parent);
            } else if (
              objects[i].object.parent.parent.parent &&
              raycasted.indexOf(objects[i].object.parent.parent.parent.name) >
              -1
            ) {
              setTransition(objects[i].object.parent.parent.parent);
            }
          }
        }
      }
    }
  };

  const onClickwhiteButton = (index) => {
    setActiveVideo(index);
  };

  const onClickObject = (action) => {
    if (!disableFunctionality) {
      if (modelObjs) {
        const target = modelObjs.children.find(
          (c) => c.name === currentFlow.target
        );
        const joy = modelObjs.children.find((c) => c.name === currentFlow.joy);

        const onSelect = () => {
          disableFunctionality = true;

          document.removeEventListener("click", onClickObject);

          components.orbit.target.x = 0;
          components.orbit.target.y = 3;
          components.orbit.target.z = target.position.z;

          gsap.timeline().to(components.orbit.target, 2, {
            x: target.position.x * zoomMultiplier,
            y:
              (target.position.y + 1 + (currentFlow.zoomOffset?.y || 0)) *
              zoomMultiplier,
            z: target.position.z * zoomMultiplier,
            onUpdate: function () {
              components.orbit.update();
            },
            ease: Power3.easeInOut,
          });

          gsap.timeline().to(components.camera, 2, {
            zoom: currentFlow.zoom ? currentFlow.zoom : 3.5,
            onUpdate: function () {
              components.camera.updateProjectionMatrix();

              setActiveVideo(0);
              setAudio(true);
            },
            ease: Power3.easeInOut,
          });

          setTimeout(() => {
            setShowJoy(false);
          }, 200);

          setTimeout(() => {
            if (joy) {
              joy.visible = true;

              const clips = gltfLoaded.animations;
              const clip =
                world === 2
                  ? THREE.AnimationClip.findByName(clips, "AllAnim")
                  : THREE.AnimationClip.findByName(clips, "AnimAll");
              const action = mixer.clipAction(clip);

              if (action) {
                action.reset().play();
              }
            }
          }, 1500);

          setTimeout(() => {
            gsap
              .timeline()
              .to(target.position, 0.4, {
                y: target.position.y + 0.5,
                ease: Power3.easeOut,
              })
              .to(target.position, 0.2, {
                y: target.position.y,
                ease: Power3.easeOut,
              });
          }, 2200);

          setTimeout(() => {
            setObjSelected(target.name);
          }, 3000);
        };

        if (action === "BUTTON") {
          onSelect(target);
        }
      }
    }
  };

  const onDeselect = () => {
    setShowJoy(true);
    disableFunctionality = false;

    const joys = modelObjs.children.filter(
      (obj) => obj.name.indexOf(objects.joy ? objects.joy : "Joy-") > -1
    );

    for (const obj of joys) {
      obj.visible = false;
    }

    const light = modelObjs.children.find((c) => c.name === currentFlow.light);

    if (light) {
      light.visible = false;
    }

    setObjSelected(null);
    setCurrentFlow(flow.find((f) => f.step === currentFlow.step + 1));
    setVideoPlayed(false);

    gsap.timeline().to(components.orbit.target, 0.7, {
      x: 0,
      y: 3,
      onUpdate: function () {
        components.orbit.update();
      },
      ease: Power3.easeInOut,
    });

    gsap.timeline().to(components.camera, 0.7, {
      zoom: 1,
      onUpdate: function () {
        components.camera.updateProjectionMatrix();
      },
      ease: Power3.easeInOut,
    });
  };

  const onPointerMove = (event) => {
    if (!disableFunctionality) {
      components.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      components.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      const from = {
        x: model3d.rotation.x,
        y: model3d.rotation.y,
      };

      let to = {
        x: 0.5 * (components.pointer.y * 0.2),
        y: 0.5 * (components.pointer.x * 0.2),
      };

      gsap
        .timeline()
        .fromTo(
          model3d.rotation,
          1.5,
          { y: from.y, x: from.x },
          { y: to.y, x: to.x, ease: Power3.easeOut }
        );
    }
  };

  const onWindowResize = () => {
    components.camera.aspect = canvasWrapper.clientWidth / canvasWrapper.clientHeight;
    components.camera.updateProjectionMatrix();
    components.renderer.setSize(canvasWrapper.clientWidth, canvasWrapper.clientHeight);
  };

  const onNext = () => {
    setActiveVideo(activeVideo + 1);
  };

  const onPrev = () => {
    if (activeVideo > 0) {
      setActiveVideo(activeVideo - 1);
    } else {
      return null;
    }
  };

  const handleStartVideo = () => {
    setVideoPlayed(true);

    // if (ref.current) {
    //   ref.current.play();
    // }
  };

  const bgAudioRef = useRef(null);
  const [flatIconsIndex, setFlatIconsIndex] = useState(0);

  useEffect(() => {
    if (objSelected === "Empty001") setFlatIconsIndex((prev) => prev + 1);
    if (objSelected === "Empty002") setFlatIconsIndex((prev) => prev + 1);
  }, [objSelected]);
  return (
    <>
      <div id='worldcomp' className='w-full relative'>
        <audio ref={bgAudioRef}>
          <source src='/assets/bgAudio.wav' />
        </audio>
        <Clouds
          title={title}
          animate={initialAnimate}
          delay={0.5}
          color={color}
        />
        <Flats
          flats={{ ...flats, icons: flats.icons[flatIconsIndex] }}
          title={title}
          year={year}
          color={color}
        />
        <Prompt
          world={world}
          audioEnding={audioEnding}
          showJoy={showJoy}
          flow={flow}
          currentFlow={{ get: currentFlow, set: setCurrentFlow }}
          onClickInteractables={onClickObject}
        />
        {/* <Joy /> */}
        <div
          id='world1'
          className={`overflow-hidden w-full aspect-video transition-all duration-[0.5s] ease-out ${objSelected ? "blur-[50px]" : ""
            }`}
        >

          {/* <Loader model3d={model3d} />
          <Background background={background} /> */}
        </div>
        {world === 1 || world == 3 || world === 5 ? (
          <PopupsA
            objSelected={objSelected}
            contents={contents}
            onClickwhiteButton={onClickwhiteButton}
            activeVideo={activeVideo}
            audio={audio}
            onPrev={onPrev}
            onNext={onNext}
            handleStartVideo={handleStartVideo}
            onDeselect={onDeselect}
            onClickObject={onClickObject}
            videoPlayed={videoPlayed}
          />
        ) : (
          <PopupsB
            objSelected={objSelected}
            contents={contents}
            onClickwhiteButton={onClickwhiteButton}
            activeVideo={activeVideo}
            audio={audio}
            onPrev={onPrev}
            onNext={onNext}
            handleStartVideo={handleStartVideo}
            onDeselect={onDeselect}
            onClickObject={onClickObject}
            videoPlayed={videoPlayed}
          />
        )}
      </div>
    </>
  );
};

export default World;
