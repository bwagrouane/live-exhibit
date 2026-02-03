
import imgDisplay from "./ImgDisplay.jsx";
import ImgDisplay from "./ImgDisplay.jsx";
function MasonryGrid() {



    return (
        <div className={"bg-pink-300/30 w-6/7 h-13/16 lg:h-3/4  columns-2 lg:columns-5 gap-2 mt-4 mx-auto"}>
            <ImgDisplay/>
            <ImgDisplay/>
            <ImgDisplay/>
            <ImgDisplay/>
            <ImgDisplay/>
            <ImgDisplay/>
            <ImgDisplay/>
            <ImgDisplay/>
            <ImgDisplay/>
        </div>
    )
}

export default MasonryGrid;