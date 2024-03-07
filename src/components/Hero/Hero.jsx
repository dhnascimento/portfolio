import Logos from "./Logos";
import logos from "../../assets/logosList";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px]">
      <div className="hero-section w-full flex flex-col items-center justify-start overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-h-[220px]">
        <div className="content text-center h-2/4 min-h-1/2 w-4/5 mt-6 z-10">
          <h1 className="text-6xl text-white font-bold mb-4">
            Hello, I'm Daniel Nascimento
          </h1>
          <p className="text-lg text-white my-0 mx-auto">
           A curious and and dedicated web developer who takes pleasure on creating and maintaining user-friendly and performant Web Applications 
          </p>
        </div>
        {/* <div className="pong-container relative w-2/4 h-80 mx-auto">
          <div className="stick left flex items-center  justify-center bg-transparent border-4 border-transparent absolute left-0 top-10"></div>
          <div className="stick right flex items-center  justify-center bg-transparent border-4 border-transparent absolute right-0 top-50"></div>
          <div className="ball bg-white absolute left-0 top-20">
            <Logos logosList={logos}/>
          </div>
        </div> */}
      </div>
    </section>
  );
}
