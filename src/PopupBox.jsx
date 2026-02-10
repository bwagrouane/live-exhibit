


function PopupBox({isOpen}) {

    if (isOpen !== true) {
        return null;
    }

    return (

        <div className={"fixed w-7/8 h-13/16 lg:h-3/4 bg-pink-300/45 border-white/20 inset-0 m-auto rounded-4xl z-50 "}>

        </div>

    )
}

export default PopupBox;