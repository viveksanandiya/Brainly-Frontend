interface InputProps{
    reference?: any
    placeholder: string;
}

export function Input({reference, placeholder}:InputProps){
    return <div className="px-4 py-2">
        <input ref={reference} placeholder={placeholder} type={"text"} className="px-4 py-2" ></input>
    </div>
}

// onClick={onChange}