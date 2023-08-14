import { useState, useEffect } from "react"
import SimpleSlider from "./musicNoUseState"

export default function UseStateHolder(props){
    //song playing can be 0,1,2,3. 0 is used if no song is playing
    const [songNum, setSongNum] = useState(0)
    return (
        <>
        <SimpleSlider whichIsLong={songNum} setIsLong={setSongNum} thisNum={1} text={props.args.songs[0]}/>
        <SimpleSlider whichIsLong={songNum} setIsLong={setSongNum} thisNum={2} text={props.args.songs[1]}/>
        <SimpleSlider whichIsLong={songNum} setIsLong={setSongNum} thisNum={3} text={props.args.songs[2]}/>
        </>
    )
}