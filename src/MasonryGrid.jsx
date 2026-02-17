import {useState} from "react";
import ImgPopupBox from "./ImgPopupBox.jsx";
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
        <div  className={" bg-pink-300/30 w-6/7 min-h-160 lg:min-h-170  columns-2 lg:columns-5 gap-1 mt-4 mx-auto"}>
            <ImgDisplay activatePopup={activatePopup}/>
            <ImgDisplay activatePopup={activatePopup}/>
            <ImgDisplay activatePopup={activatePopup}/>
            <ImgDisplay activatePopup={activatePopup}/>
            <ImgDisplay activatePopup={activatePopup}/>
            <ImgDisplay activatePopup={activatePopup}/>
            <ImgDisplay activatePopup={activatePopup}/>
            <ImgDisplay activatePopup={activatePopup}/>
            <ImgPopupBox isOpen={isOpen} deactivatePopup={deactivatePopup} />

        </div>
    )
}

export default MasonryGrid;