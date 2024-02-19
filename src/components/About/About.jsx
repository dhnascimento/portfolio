import Logos from "./Logos";
import logos from "../../assets/logosList";

export default function About() {
  return (
    <section>
      <div className="hero-section bg-gray-900 h-screen w-full flex flex-col items-center justify-start overflow-hidden">
        <div className="content text-center w-full mt-6 z-10">
          <h1 className="text-4xl text-white font-bold mb-4">
            Daniel Nascimento
          </h1>
          <p className="text-lg text-white mb-8">
            Web Developer and Enthusiast
          </p>
        </div>
        <div className="pong-container relative w-2/4 h-2/4 mx-auto">
          <div className="stick left bg-white absolute left-0 top-10"></div>
          <div className="stick right bg-white absolute right-0 top-50"></div>
          <div className="ball bg-white absolute left-0 top-20">
            <Logos logosList={logos}/>
          </div>
        </div>
      </div>
    </section>
  );
}
