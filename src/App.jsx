import {useState} from "react";
import MasonryGrid from "./MasonryGrid.jsx";
import UploadPopupbox from "./UploadPopupbox.jsx";

function App() {


    const [isOpen, setIsOpen] = useState(false);


    const activatePopup = () => {
        setIsOpen(true);
    }

    const deactivatePopup = () => {
        setIsOpen(false);
    }

    return (
      <div className={"backdrop-blur-md h-screen bg-pink-300/15  w-full lg:w-3/4  border border-white/20  mx-auto"} >
          <div className={" grid  grid-cols-[1fr_auto_1fr] gap-2 mt-6 h-1/8 lg:h-1/6 "}>
             <div className={"w-10 h-10"}>

             </div>

              <div className={"w-full col-start-2  pl-4 pr-4 justify-self-center h-full shadow-2xl/10  rounded-2xl ml- flex justify-center flex-col items-center border border-white/20"} >
                  <h1 className={" text-3xl lg:text-5xl text-center font-mono text-gray-200 "}>Live Exhibit</h1>
                  <p className={"text-xl text-center font-mono text-gray-200 "}>Made by Bilal Agrouane</p>
              </div>

              <div  onClick={activatePopup} className={"  col-start-3 justify-self-center self-center w-12 h-12  shadow-2xl/10  rounded-2xl  flex justify-center flex-col items-center border border-white/20"} >
                  +
              </div>
          </div>
          <MasonryGrid />
          <UploadPopupbox isOpen={isOpen} deactivatePopup={deactivatePopup} />
      </div>
  )
}

export default App