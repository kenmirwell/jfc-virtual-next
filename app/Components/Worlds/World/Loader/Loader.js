const Loader = ({ model3d }) => {
  if (model3d) {
    return (
      null
    )
  }

  return (
    <div
      className="z-10 absolute overflow-hidden pointer-events-none w-full aspect-video transition-all duration-[0.5s] ease-out 
    flex items-center justify-center"
    >
      <video autoPlay loop muted className="w-auto h-[80%]">
        <source
          src={
            "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/Jollibee_Loading_Icon%20(1).webm"
          }
          type='video/webm'
        />
      </video>
    </div>
  );
};

export default Loader;
