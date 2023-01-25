import { useState, useEffect } from "react"
import SimpleSlider from "./musicNoUseState"

export default function UseStateHolder(){
    //song playing can be 0,1,2,3. 0 is used if no song is playing
    const [songNum, setSongNum] = useState(0)
    return (
        <>
        <br /><br /><br />
        <SimpleSlider whichIsLong={songNum} setIsLong={setSongNum} thisNum={1} text="song"/>
        <SimpleSlider whichIsLong={songNum} setIsLong={setSongNum} thisNum={2} text="song"/>
        <SimpleSlider whichIsLong={songNum} setIsLong={setSongNum} thisNum={3} text="song"/>
        </>
    )
}