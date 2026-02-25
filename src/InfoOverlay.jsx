

function infoOverlay({image}){





    return(

        <div className={"bg-gray-900/60 absolute h-full w-full hidden rounded-xl group-hover:block"}>
            <p className={"font-mono text-amber-50 p-1 wrap-break-word"}> {image.image_title}</p>
            <p className={"font-mono text-amber-50 p-1 wrap-break-word"}> {image.created_at}</p>
        </div>
    )

}

export default infoOverlay;