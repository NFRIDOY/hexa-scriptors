import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AboutButton from "./Components/Rean/AboutButton";
import Myself from "./Components/Ariful/Myself";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-8xl">Hexa Scriptors</h1>
      {/* Add Your Button Here */}
      <section className="my-52 flex flex-col gap-5 justify-center items-center w-fit mx-auto">
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="btn btn-primary text-xl"
        >
          Muztafiz
        </button>
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="btn btn-primary text-xl"
        >
          RADIAT RIDOY
        </button>

        <AboutButton/>
        <div>
        <Myself></Myself>
        </div>
        <div>
          this is noman main branch 
        </div>
      </section>

      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-4xl">Md Mustafiz Rahman</h3>
            <p className="py-4">
              A student on an intellectual journey, painting the canvas of
              learning with strokes of curiosity and imagination.
            </p>
            <div className="modal-action justify-center">
              <form className="justify-center" method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-outline">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-4xl">MD Radiat Hossain Ridoy</h3>
            <p className="py-4">
              A frontend focused Junior Mern-stack Developer.
            </p>
            <div className="modal-action justify-center">
              <form className="justify-center" method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-outline text-3xl">X</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default App;
