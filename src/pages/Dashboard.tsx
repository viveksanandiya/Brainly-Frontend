import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card, CardProps } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { showConfirmAlert } from "../components/SweetAlert";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();
  const [isShared, setIsShared] = useState(false);

  useEffect(()=>{
    refresh();
  },[modalOpen])

  async function shareBrain(){
    const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
      share: !isShared
    },{
      headers:{
        "Authorization": localStorage.getItem("token")
      }
    });

    setIsShared(!isShared)

    const shareUrl = `http://localhost:5173/share/${response.data.hash}`
    
    if(!isShared){
      const copyLink = await showConfirmAlert("Copy Brain link to CLipboard ?");
      if(copyLink.isConfirmed){
        //copy to clipboard 
        navigator.clipboard.writeText(shareUrl)
      }
    }else{
      const copyLink = await showConfirmAlert("Stop Brain share ?");
      if(copyLink.isConfirmed){
        //copy to clipboard 
        navigator.clipboard.writeText(shareUrl)
      }
    }
  }

  return (
    <div className="bg-gray-200 flex ">
      <Sidebar></Sidebar>
      
      <CreateContentModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
      </CreateContentModal>
      
      <div className="w-screen">
      <div className="flex justify-end gap-2 p-2 h-max">
        <Button onClick={shareBrain} 
          variant={isShared?"stop":"secondary"}
          text={isShared?"Stop Share":"Share Brain"}
          startIcon={<ShareIcon />}>
        </Button>
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
          variant="primary"
          text="Add Content"
          startIcon={<PlusIcon />}>
        </Button>
      </div>
      <div className="flex flex-wrap p-2 pt-0 gap-2 pr-2">
        {contents.map(({id, type, link, title}:CardProps) => <Card 
            key={id}
            id={id}
            type={type}
            link={link}
            title={title}
        />)}
        
      </div>
      </div>
    </div>
  );
}

