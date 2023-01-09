import {motion, useMotionValue, animate, useTransform} from 'framer-motion'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { getIndex, useFlubber } from "../../public/paths/use-flubber";
import {paths} from '../../public/paths/paths.js'


const colors = [
  '#ffffff',
  '#000000'
]

export default function AnimationBar(props){
  const [isLong, setIsLong] = useState(false)
  const [color, setColor] = useState('black')
  
  const [pathIndex, setPathIndex] = useState(1);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

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
      animate={isLong ? "long" : "short"}
        />

      <motion.g
        transform="translate(40 18)"
      clip-path="url(#_clipPath_rwZJXlpW1ubtVOGd58AkztYmsTFUvvCx)"
        >
      <motion.path
       d={path}
      fill={fill}
        stroke="none"
        />
      </motion.g>
      
      <motion.text
        x={76}
        y={36}
        fontSize={18}
        fill={fill}
        animate={isLong ? "black" : "white"}
        
        
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
        setIsLong(!isLong)

        const animation = animate(progress, pathIndex, {
          duration: 0.3,
          ease: "easeInOut",
          onComplete: () => {
            if (isLong == false) {
              progress.set(0);
              setPathIndex(1);
            } else {
              console.log('also runs')
              setPathIndex(0);
            }
          }
        });
    
        return () => animation.stop();
        
      }}
        />
    </motion.svg>
    </motion.div>
  )
  //fill={isLong ? "white" : "black"}
}