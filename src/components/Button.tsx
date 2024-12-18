import {ReactElement} from "react";
export interface ButtonProps{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon ?: ReactElement;
    endIcon ?: ReactElement;
    onClick ?: ()=>void;
}

const variantStyles = {
    "primary" :"bg-black text-white",
    "secondary" : "bg-purple-300 text-purple-600" 
}

const defaultStyles = "rounded-md p-4 flex font-normal flex items-center"
const sizeStyles = {
    "sm":'py-1 px-2',
    "md":'py-2 px-5',
    "lg":'py-3 px-4'
}


export const Button = (props: ButtonProps )=>{
    const { variant, size, text, startIcon, endIcon, onClick } = props;

    return <button onClick = { onClick } className = {
        `${variantStyles[variant]} ${sizeStyles[size]} ${defaultStyles} `
    } >
        { startIcon ? <div className="pr-2">{startIcon}</div> : null } {text} {endIcon}    
    </button>
}



