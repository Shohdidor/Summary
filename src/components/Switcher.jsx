import useDarkSide from "../hooks/useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";

export default function Switcher () {
    const [ colorTheme , setTheme ] = useDarkSide ()
    const [ darkSide ,setDarkSide ] = useState (
        colorTheme === "light" ? true : false 
    )
    const toggleDarkMode = ( checked ) => {
        setTheme ( colorTheme )
        setDarkSide ( checked )
    }
    return (
        <>
        <div>
            <DarkModeSwitch 
            className="dark:text-[#F7BB0E] text-[#29282C] mt-[5px]"
            checked = { darkSide }
            onChange = { toggleDarkMode }
            size = { 30 }
            />
        </div>
        </>
    )
}