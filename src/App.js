import "./App.css";
import Logo from "./images/image-header-mobile.jpg";
import Logos from "./images/image-header-desktop.jpg";
import { useEffect, useState } from "react";

function App() {
  const Size = () => {
    const [Sized, setSized] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    useEffect(() => {
      function handleResize() {
        setSized({ width: window.innerWidth, height: window.innerHeight });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return Sized;
  };
  return (
    <div className="App relative">
      <main className=" text-white px-3 lg:px-6 py-10 lg:py-20">
        <div className="bg-[#1b1938] rounded-md lg:flex lg:flex-row-reverse lg:w-3/4 lg:ml-28">
          {Size().width < 375 ? (
            <div className="relative lg:w-full lg:h-full p-0 m-0">
              <div className="bg-[#aa5cdb] rounded-tl-md rounded-tr-md lg:rounded-tl-none lg:rounded-br-md w-full h-full absolute opacity-70 brightness-50"></div>
              <img
                className="rounded-tl-md rounded-tr-md lg:rounded-tl-none lg:rounded-br-md"
                src={Logo}
                alt="logo"
              />
            </div>
          ) : (
            <div className="relative lg:w-full lg:h-full p-0 m-0">
              <div className="bg-[#aa5cdb] rounded-tl-md rounded-tr-md lg:rounded-tl-none lg:rounded-br-md w-full h-full absolute opacity-70 brightness-50"></div>
              <img
                className="rounded-tl-md rounded-tr-md lg:rounded-tl-none lg:rounded-br-md"
                src={Logos}
                alt="logo"
              />
            </div>
          )}
          <div className="p-10">
            <h1 className="text-3xl text-center lg:text-left lg:text-4xl">
              Get <span className="text-fuchsia-700">insights</span> that help your business grow.
            </h1>
            <p className="pt-4 pb-6 lg:pb-5 lg:text-left lg:text-lg">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <div className="lg:flex lg:justify-evenly">
              <p className="flex flex-col pt-3 text-3xl">
                <h1 className="text-white">10k+</h1> <span className="text-lg">Companies</span>
              </p>
              <p className="flex flex-col pt-3 text-3xl">
                <h1 className="text-white">314</h1> <span className="text-lg">Templates</span>
              </p>
              <p className="flex flex-col pt-3 text-3xl">
                <h1 className="text-white">12m+</h1> <span className="text-lg">Queries</span>
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-[11px] absolute bottom-0 lg:left-1/3 left-10 text-white">
        Challenge by{" "}
        <a className="text-cyan-900" href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Rizki Putra Julianto</a>.
      </footer>
    </div>
  );
}

export default App;
