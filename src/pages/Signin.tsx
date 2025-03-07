import axios from "axios";
import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import {BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { Logo } from "../icons/Logo";
import { showSuccessAlert } from "../components/SweetAlert";

export function Signin(){
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(BACKEND_URL + "/api/v1/signin",{
                username,
                password
        })

        const jwt = response.data.token;
        localStorage.setItem("token",jwt);

        showSuccessAlert("Signin Successful");

        navigate("/dashboard");
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-md border min-w-48 p-2 ">
            <div className="py-3 px-3 text-2xl font-medium flex gap-2 text-purple-600 fill-purple-600 items-center justify-center">
                <Logo/>
                Brainly
            </div>
            <div>
                <Input reference={usernameRef} placeholder="Username" />
                <Input reference={passwordRef} placeholder="Password" />
            </div>
            <div className="flex items-center justify-center pt-2 ">
                <Button onClick={signin} variant="primary" text="Signin" fullWidth={true} loading={false}/>
            </div>
        </div> 
    </div>
}