import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className="min-h-screen left-0 top-0 bg-white position-fixed md:w-56 lg:w-44 border-r border-gray-300 rounded-r ">
       <div className="py-3 px-3 text-2xl font-medium flex gap-2 text-purple-600 fill-purple-600 items-center">
        <Logo/>
        Brainly
       </div> 
        <div>
            <SidebarItem  text="Twitter" icon={<TwitterIcon/>}></SidebarItem>
            <SidebarItem  text="Youtube" icon={<YoutubeIcon/>}></SidebarItem>
        </div>
    </div>
}