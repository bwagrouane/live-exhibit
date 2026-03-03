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
      <div className={"backdrop-blur-md   min-h-screen bg-pink-300/15  w-full lg:w-3/4  border border-white/20  mx-auto"} >
          <div className={" grid  grid-cols-[1fr_auto_1fr] gap-2 mt-6 min-h-28 "}>
             <div className={" justify-self-center self-center col-start-1 "}>
                 <iframe

                     src="https://ghbtns.com/github-btn.html?user=bwagrouane&repo=live-exhibit&type=star&count=false&size=large"
                     frameBorder="0"
                     scrolling="0"
                     width="70"
                     height="30"
                     title="github-star"
                 ></iframe>
             </div>

              <div className={"w-full col-start-2  pl-4 pr-4 justify-self-center h-full shadow-2xl/10  rounded-2xl ml- flex justify-center flex-col items-center border border-white/20"} >
                  <h1 className={" text-3xl lg:text-5xl text-center font-mono text-gray-200 "}>Live Exhibit</h1>
                  <p className={"text-xl text-center font-mono text-gray-200 "}>Made by Bilal Agrouane</p>
              </div>

              <div  onClick={activatePopup} className={"  col-start-3 justify-self-center self-center w-12 h-12  shadow-2xl  rounded-2xl  flex justify-center flex-col items-center border border-white/20"} >
                  <svg className={"w-7 h-7 fill-gray-200 "} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM296 408L296 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296L296 296L296 232C296 218.7 306.7 208 320 208C333.3 208 344 218.7 344 232L344 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L344 344L344 408C344 421.3 333.3 432 320 432C306.7 432 296 421.3 296 408z"/></svg>

              </div>
          </div>
          <MasonryGrid />
          <UploadPopupbox isOpen={isOpen} deactivatePopup={deactivatePopup} />
      </div>
  )
}

export default App