import { ReactElement } from "react";

export function SidebarItem({text, icon}:{
    text:string;
    icon:ReactElement;
}){ 
    return <div className="flex">
        <div className="flex  py-2 pl-4 justify-start items-center gap-2 text-gray-700 fill-gray-700 hover:bg-gray-200 w-full">
            <div>{icon}</div>
            <div>{text}</div>
        </div>
    </div>
}