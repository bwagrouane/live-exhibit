

import {useState} from "react";
import supabase from "./supabaseclient.js";

function UploadPopupbox({isOpen, deactivatePopup}) {


    const [fileLabel, setFileLabel] = useState("Click to Browse..");

    if (isOpen !== true) {
        return null;
    }



    const fileLabelChange = (e) => {
        setFileLabel(e.target.files[0].name);
    }



    const formSubmitHandler = (e) => {
        e.preventDefault();


        let file = e.target.elements.image.files[0];

        async function uploadImage() {

            const { data:signedData, error: signedError } = await supabase.functions.invoke('ImageUpload', {
                body: { filename: `${file.name}` }
            })

            if (signedError) {
                setFileLabel("Upload Failed 1st Try Again");
                console.log(signedError);
                return;
            }

            const { data, error } = await supabase
                .storage
                .from('Images')
                .uploadToSignedUrl(`${signedData.path}`, `${signedData.token}`, file);

            if(error){
                setFileLabel("Upload Failed Try Again");

            }
            else{
                setFileLabel("Click to Browse..");
            }

        }

        uploadImage();


    }





return(
    <div  className={"  backdrop-blur-3xl  text-center fixed w-10/11 shadow-2xl/10 h-13/16 lg:h-3/4 bg-pink-300/40  border border-white/20 inset-0 m-auto rounded-4xl z-50 "}>

        <form onSubmit={formSubmitHandler} className={" w-full h-full"}>

            <button onClick={deactivatePopup} className={" cursor-pointer w-10 h-10 absolute top-4 right-4 text-pink-500  bg-pink-300/45 border border-white/20 rounded-full "}>X</button>
            <h1 className={"font-mono  mt-13 text-4xl text-gray-200 text-center"}>Upload your Art!</h1>

            <input type="file" onChange={fileLabelChange}  className={"hidden"} name={"image"} id="fileUpload"/>
            <label className={" flex flex-col justify-center items-center  text-2xl font-sans text-gray-400  text-center bg-slate-900/50 rounded-2xl border-dashed  mt-12  mx-auto w-3/4 h-2/3 border-3 border-gray-700 "} htmlFor="fileUpload">
                <svg className={"w-20 h-20 fill-gray-900 "} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM296 408L296 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296L296 296L296 232C296 218.7 306.7 208 320 208C333.3 208 344 218.7 344 232L344 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L344 344L344 408C344 421.3 333.3 432 320 432C306.7 432 296 421.3 296 408z"/></svg>
                <h1 className={"font-mono   text-2xl text-gray-200 text-center"}>{fileLabel}</h1>
            </label>
            <button className={"w-20 h-10 mt-5 border shadow-2xl rounded-2xl border-white/20 bg-slate-900/50 "} type="submit">Submit</button>

        </form>
    </div>

)

}

export default UploadPopupbox;
