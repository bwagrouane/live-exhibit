import {useEffect, useState} from "react";
import ImgPopupBox from "./ImgPopupBox.jsx";
import ImgDisplay from "./ImgDisplay.jsx";
import supabase from "./supabaseclient.js";

/**
 * MasonryGrid Component
 * Serves as the primary image feed, rendering a responsive CSS-based masonry layout.
 * Handles asynchronous data fetching from Supabase on initial mount and manages
 * the localized state for expanding individual images into a modal view.
 */
function MasonryGrid() {

   const [isOpen,setIsOpen] = useState(false);

   const [selectedImg, setSelectedImg] = useState(null);

   const [images, setImages] = useState([]);

   const activatePopup = (image) => {
       setIsOpen(true);
       setSelectedImg(image);

   }

   const deactivatePopup = () => {
       setIsOpen(false);
       setSelectedImg(null);
   }


   useEffect(() => {

       async function fetchData(){
       const { data, error } = await supabase
           .from('Images')
           .select()
           .order('id', { ascending: false })
           .limit(25)


            if(error){
                console.log(error)
            }
            else setImages(data);


       }

       fetchData();


   }, []);









    return (
        <div  className={"  w-6/7 min-h-160 lg:min-h-170  columns-2 lg:columns-5 gap-1 mt-4 mx-auto"}>
            {images.map((image, i) => (
                <ImgDisplay key={i} activatePopup={activatePopup} image={image} />
            ))}


            <ImgPopupBox isOpen={isOpen} selectedImg = {selectedImg} deactivatePopup={deactivatePopup} />

        </div>
    )
}

export default MasonryGrid;