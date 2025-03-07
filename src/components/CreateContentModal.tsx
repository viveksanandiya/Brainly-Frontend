import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { showSuccessAlert } from "./SweetAlert";

interface ModalProps{
    open: Boolean,
    onClose: ()=>void,
    children?:any
}

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModal({open, onClose}: ModalProps){
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type ,setType] = useState(ContentType.Youtube);
    
    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            type,
            title
        },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        
        onClose();
        showSuccessAlert("Added content !")

    }

    return <div> 
        {open && <div className="w-screen h-screen top-0 left-0 fixed flex justify-center items-center bg-gray-500 bg-opacity-75" >
                <div className="absolute opacity-100 bg-white rounded">
                    <div className="flex justify-end p-1">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon/>
                        </div>
                    </div>
                    <div>
                        <Input reference={titleRef} placeholder={"Title"}></Input>
                        <Input reference={linkRef} placeholder={"Link"}></Input> 
                    </div>
                    <div className="flex justify-evenly p-2">
                        <Button text="Youtube" variant={type === ContentType.Youtube ? "primary":"secondary"} onClick={()=>{setType(ContentType.Youtube)}}></Button>
                        <Button text="Twitter" variant={type === ContentType.Twitter ? "primary":"secondary"} onClick={()=>{setType(ContentType.Twitter)}}></Button>
                    </div>
                    <div className="flex justify-center p-2"> 
                        <Button onClick={addContent} variant="primary" text="Submit"></Button>
                    </div>
                </div>
        </div>}
    </div>
}
