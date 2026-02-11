import {useState} from "react";
import PopupBox from "./PopupBox.jsx";
import ImgDisplay from "./ImgDisplay.jsx";
function MasonryGrid() {

   const [isOpen,setIsOpen] = useState(false);

   const [selectedImg, setSelectedImg] = useState(null);

   const activatePopup = () => {
       setIsOpen(true);
       setSelectedImg(null);
   }

   const deactivatePopup = () => {
       setIsOpen(false);
       setSelectedImg(null);
   }

    return (
        <div  className={"bg-pink-300/30 w-6/7 h-13/16 lg:h-3/4  columns-2 lg:columns-5 gap-1 mt-4 mx-auto"}>
            <ImgDisplay activatePopup={activatePopup}/>
            <ImgDisplay activatePopup={activatePopup}/>
            <ImgDisplay activatePopup={activatePopup}/>
            <ImgDisplay activatePopup={activatePopup}/>
            <ImgDisplay activatePopup={activatePopup}/>
            <ImgDisplay activatePopup={activatePopup}/>
            <ImgDisplay activatePopup={activatePopup}/>
            <ImgDisplay activatePopup={activatePopup}/>
            <PopupBox isOpen={isOpen} deactivatePopup={deactivatePopup} />

        </div>
    )
}

export default MasonryGrid;