import {motion, useMotionValue, animate, useTransform} from 'framer-motion'
import { getIndex, useFlubber } from "../../public/paths/use-flubber";
import {paths} from '../../public/paths/paths.js'
import { useState, useEffect } from "react"


export default function SimpleSlider(props){

  const [pathIndex, setPathIndex] = useState(1);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), ['#000000', '#000000']); //this is redundant, please change
  const path = useFlubber(progress, paths);

  console.log(props)
  
  useEffect(()=>{
    if(props.whichIsLong == props.thisNum){
      const animation = animate(progress, 0, {
        duration: .3,
        ease: "easeInOut",
        onComplete: () => {
          progress.set(0);
          setPathIndex(1);
        }
      })
      return () => animation.stop()
    }else{
      const animation = animate(progress, 1, {
        duration: .3,
        ease: "easeInOut",
        onComplete: () => {
          progress.set(1);
        }
      })
      return () => animation.stop()
    }
  }, [props.whichIsLong])

   
    return(
    <motion.div className="justify-center mx-auto">
        <motion.svg
          width="250"
          height="60"
          viewBox="0 0 250 60"
          initial="hidden"
          animate="visible"
          className="justify-center mx-auto">
          
          <motion.line 
          x1 = "50"
          y1 = "30"
          x2 ="50"
          y2 = "30"
          stroke="#570df8"
          variants={{
            short: {
              x2: 50
            },
            long: {
              x2: 200
            }
          }}
          animate={props.thisNum==props.whichIsLong ? "long" : "short"}
            />
    
          <motion.g
            transform="translate(40 18)"
          clip-path="url(#_clipPath_rwZJXlpW1ubtVOGd58AkztYmsTFUvvCx)"
            >
          <motion.path
           d={path}
            stroke="none"
            fill="black"
            />
          </motion.g>
          
          <motion.text
            x={76}
            y={36}
            fontSize={18}
            fill={fill}
            animate={props.thisNum==props.whichIsLong ? "black" : "white"}
            
            
          >
            {props.text}
          </motion.text>
          <motion.line 
          x1 = "50"
          y1 = "30"
          x2 ="50"
          y2 = "30"
          stroke="black"
          opacity="0"
          
          onClick={() => {
            //maybe make this code cleaner?
            if(props.whichIsLong == props.thisNum){
              props.setIsLong(0)
              console.log(`Runs: ${props.whichIsLong}`)
            }else{
              props.setIsLong(props.thisNum)
            }            
          }}
            />
        </motion.svg>
    </motion.div>
    )
}