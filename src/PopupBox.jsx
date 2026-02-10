


function PopupBox({isOpen}) {

    if (isOpen !== true) {
        return null;
    }

    return (

        <div className={"fixed w-10/11 shadow-2xl/10 h-13/16 lg:h-3/4 bg-pink-300/15  border border-white/20 inset-0 m-auto rounded-4xl z-50 "}>
            <button className={" w-10 h-10 absolute top-4 right-4 text-pink-500  bg-pink-300/45 border border-white/20 rounded-full "}>X</button>
        </div>

    )
}

export default PopupBox;