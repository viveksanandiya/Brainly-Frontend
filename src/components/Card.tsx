import { useEffect } from "react";
import { DeleteIcon } from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface CardProps{
    id:string
    title: string,
    link: string,
    type: "youtube" | "twitter",
    // type: "youtube" | "twitter" | "chatgpt",
}

const TypeClass ={
    "youtube": <YoutubeIcon/>,
    "twitter": <TwitterIcon/>,
    // "chatgpt":"chatgpt"
}

{/* store ids of yt , tweet in database -> figure it youself */}

export function Card({id, title, link, type}: CardProps){
    
    const handleDelete = async function(){
        
        await axios.delete(`${BACKEND_URL}/api/v1/content`,{
            data: {contentId:id},
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        })
        
    }


    // React does not re-run scripts dynamically,
    // so the Twitter embed might not load correctly when the component re-renders
    //hence used 
    useEffect(() => {
        if (type === "twitter" && link) {
          const script = document.createElement("script");
          script.src = "https://platform.twitter.com/widgets.js";
          script.async = true;
          script.charset = "utf-8";
          document.body.appendChild(script);

          return () => {
            document.body.removeChild(script);
        };
        }
      }, [type, link]);

    return <div className="rounded-md border-gray-300 border bg-white max-w-80 min-w-80 max-h-max">
        <div className="flex justify-between p-2 pb-0 ">
            <div className="flex items-center gap-2 pl-1">
                <div className={TypeClass[type] +" fill-gray-700 text-gray-700"}>
                   {TypeClass[type]} 
                </div>
                <div>
                    {title}
                </div>
            </div>
            <div className="flex items-center">
                <div className="pr-2 text-gray-700">
                    <ShareIcon/>
                </div>
                <div className="pr-1 fill-gray-700 text-gray-700" onClick={handleDelete}>
                    <DeleteIcon />
                    </div>
            </div>
        </div>
        <div className="pt-1 ">
            {/* store ids of yt , tweet in database -> figure it youself */}
            {type=== "youtube" && link && (
                <iframe className="w-full p-2 rounded-xl" src={link?.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
            )}
            {type === "twitter" && link && (
            <div>
            <blockquote className="twitter-tweet">
                <a href={link.replace("x.com","twitter.com")}></a>
            </blockquote>
            </div>
            )}
            {/* {type === "chatgpt" && link &&(
                <iframe src="https://chatgpt.com/share/67cad977-8d30-8005-b1d0-6f3aba3cf176"></iframe>
                
            )} */}
        </div>
    </div>
}
