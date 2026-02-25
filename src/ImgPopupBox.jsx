


function ImgPopupBox({isOpen, selectedImg, deactivatePopup}) {

    if (isOpen !== true) {
        return null;
    }



    return (

        <div className={"fixed w-10/11 shadow-2xl/10 h-13/16 lg:h-3/4 bg-pink-300/40 backdrop-blur-3xl  border border-white/20 inset-0 m-auto rounded-4xl z-50  "}>
            <button onClick={deactivatePopup} className={" cursor-pointer w-10 h-10 absolute top-4 right-4 text-pink-500  bg-pink-300/45 border border-white/20 rounded-full "}>X</button>
            <div className={"w-full h-full flex flex-col lg:flex-row "}>
                <img src = {selectedImg.image_link} className={"rounded-4xl shrink-0  w-full h-1/2  lg:h-full lg:w-1/2 "} />
                <ul className={"  font-mono lg:self-center  list-disc wrap-break-word pl-7 space-y-4 text-2xl text-gray-200"}>
                    <li>Image Title: {selectedImg.image_title}</li>
                    <li>Image TimeStamp: {selectedImg.created_at}</li>

                </ul>
            </div>

        </div>

    )
}

export default ImgPopupBox;