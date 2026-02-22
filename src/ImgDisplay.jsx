
import InfoOverlay from './InfoOverlay';

function ImgDisplay({ activatePopup, image }) {

    if (!image)
        return null;

    const imageLink = image.image_link;




    return(
        <div onClick={ activatePopup  } className={"  cursor-pointer break-inside-avoid w-full  bg-rose-950/30 mb-2 rounded-xl relative group"}>
            <InfoOverlay/>
            <img src={imageLink} alt={image.image_title} className={"rounded-xl w-full h-full"} />


        </div>
    )


}

export default ImgDisplay;