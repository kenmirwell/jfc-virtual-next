import World from './Components/Worlds/World1/World1';

export default function Home() {
    return (
        <div className="w-full h-screen p-8 overflow-hidden flex items-center justify-center box-border">
            <div id='canvasWrapper' className="aspect-video w-full overflow-hidden bg-blue-500 rounded-[3rem]">
                <World />
            </div>
        </div>
    )
}
