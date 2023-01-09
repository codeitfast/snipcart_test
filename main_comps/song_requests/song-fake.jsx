import {motion} from 'framer-motion'
import * as React from 'react'



export default function FakeBar(props){

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
        />

      <motion.g
        transform="translate(40 18)"
      clip-path="url(#_clipPath_rwZJXlpW1ubtVOGd58AkztYmsTFUvvCx)"
        >
      <motion.path
       d='M 20.023 13.48 L 11.194 18.667 L 2.366 23.855 C 1.063 24.62 0.006 24.015 0.006 22.504 L 0.006 12.093 L 0.006 1.682 C 0.006 0.171 1.063 -0.434 2.366 0.331 L 11.194 5.519 L 20.023 10.707 C 21.326 11.472 21.326 12.714 20.023 13.48 Z'
      fill='black'
        stroke="none"
        />
      </motion.g>
      
      <motion.text
        x={76}
        y={39}
        fontSize={24}
        fill='black'       
      >
      </motion.text>
    </motion.svg>
    </motion.div>
  )
 
}