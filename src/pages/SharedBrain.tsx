import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardProps } from "../components/Card";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function SharedBrain() {
    const { hash } = useParams();  // Get hash from URL
    const [contents, setContents] = useState<CardProps[]>([]);

    useEffect(() => {
        console.log("Shared hash:---------", hash);
        async function fetchSharedBrain() {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/brain/${hash}`);
                console.log("APi---------",response.data);

                if (response.data && Array.isArray(response.data.content)) {
                    setContents(response.data.content);
                    console.log("Setting contents:", response.data.content);
                } else {
                    console.error("Invalid response structure:", response.data);
                }

            } catch (error) {
                console.error("Error fetching shared dashboard:", error);
            }
        }
        if (hash) fetchSharedBrain();
    }, [hash]);

    return (
        <div className="bg-gray-200 flex flex-col items-center min-h-screen">
            <h1 className="text-xl font-bold mt-4">Shared Dashboard</h1>
            <div className="flex flex-wrap p-2 pt-0 gap-2 pr-2">
                {contents.length > 0 ? (
                    contents.map(({ type, link, title }: CardProps, index) => (
                        <Card key={`${link}-${index}`} type={type} link={link} title={title} id={""} />  
                    ))
                ):""}

            </div>
        </div>
    );
}
