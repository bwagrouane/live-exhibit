
import InfoOverlay from './InfoOverlay';

function imgDisplay({ activatePopup }){






    return(
        <div onClick={ activatePopup  } className={"  cursor-pointer break-inside-avoid w-full h-30 bg-rose-950/30 mb-2 rounded-xl relative group"}>
            <InfoOverlay/>
        </div>
    )


}

export default imgDisplay;