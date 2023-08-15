import AnimationBar from './song-animation.jsx'
import FakeBar from './song-fake.jsx'
import {motion, AnimatePresence} from 'framer-motion'
import {useState, useEffect} from 'react'
import {CgArrowLeftR,CgArrowRightR} from "react-icons/cg"
import UseStateHolder from './useStateHolder.jsx'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaDotCircle} from 'react-icons/fa'
import {BsDot} from 'react-icons/bs'

import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

//special mod function
//https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers

//
//
//TODO: MAKE A FASTER CAROUSEL
//
//
function mod(n, m) {
  return ((n % m) + m) % m;
}

function CardBody(args){
  return (
    <motion.div className="card-body">
      <h1 className="card-title text-center mx-auto text-4xl text-black">{args.genre}</h1>
      <UseStateHolder args={args} className="justify-center"/>

    </motion.div>
  )
}

function VideoCardBody(args){
  return(
    <iframe src={args.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" className="overflow-hidden rounded-2xl" width="500" height="280" allowfullscreen></iframe>
  )
}

function FakeCard(args){
  return (
    <motion.div className="card-body">
      <h1 className="card-title text-center mx-auto text-4xl text-black">{args.genre}</h1>
      {args.songs.map((song) => {
        //make playable and unplayable version of animationBar  
        return <FakeBar text={song} className="justify-center"/> //add url arg too
      })}
    </motion.div>
  )
}

//add input soon
export default function SongBox(){
  const fakeFile = [
    {'genre': 'Dubby',
    'songs': ['Euphoria', 'Aurora', 'Always']},
    {'genre': '222222222',
    'songs': ['Different Song', 'Sweet Caroline', 'Think Different']},
    {'genre': '333333333',
    'songs': ['Free Falling', 'Sweet Caroline', 'Always']},
    {'genre': '444444444',
    'songs': ['Free Falling', 'Sweet Caroline', 'Always']},
    {'genre': '555555555',
    'songs': ['Free Falling', 'Sweet Caroline', 'Always']},
    {'genre': '666666666',
    'songs': ['Free Falling', 'Sweet Caroline', 'Always']},
  ]

  const videos = [
    'https://www.youtube.com/embed/Y3MqM7nIwbs',
    'https://www.youtube.com/embed/TAPdIAL3OjI',
    'https://www.youtube.com/embed/yrLT0NGUCT4',
    'https://www.youtube.com/embed/sXnK2MyK0aQ'
  ]
  
  const [FlowDirection, setFlowDirection] = useState(true)
  const [CenterId, setCenterId] = useState(0)
  const [LeftId, setLeftId] = useState(videos.length - 1)
  const [RightId, setRightId] = useState(1)

  //https://github.com/NishantEC/ncompx/blob/main/src/components/Carousal/Carousel.jsx
    const nextBtn = () => {
      if (LeftId === videos.length - 1) {
        setLeftId(0)
      } else {
        setLeftId(LeftId + 1)
      }
      if (CenterId === videos.length - 1) {
        setCenterId(0)
      } else {
        setCenterId(CenterId + 1)
      }
  
      if (RightId === videos.length - 1) {
        setRightId(0)
      } else {
        setRightId(RightId + 1)
      }
      setFlowDirection(true)
  }
  const prevBtn = () => {
    setFlowDirection(false)
    if (LeftId === 0) {
      setLeftId(videos.length - 1)
    } else {
      setLeftId(LeftId - 1)
    }
    if (CenterId === 0) {
      setCenterId(videos.length - 1)
    } else {
      setCenterId(CenterId - 1)
    }
    if (RightId === 0) {
      setRightId(videos.length - 1)
    } else {
      setRightId(RightId - 1)
    }
  }

  const variants = {
    center: {
      y:'4rem',
      x: '-50%',
      opacity: 1,
      scale: 1.1,
      zIndex: '5',
      filter: "blur(0px)",
      boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.3)',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    left: {
      y:'4rem',
      x: 'calc(-12rem - 50%)',
      opacity: 1,
      scale: 1.1,
      opacity: .4,
      zIndex: '4',
      filter: 'blur(2px)',
      boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.1)',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    right: {
      y:'4rem',
      x: 'calc(12rem - 50%)', //50% is the width of the card, since they have the absolute trait they need this as well
      opacity: 1,
      filter: 'blur(2px)',
      scale: 1.1,
      opacity: .4,
      boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.1)',
      zIndex: '3',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    rightHidden: {
      y:'-2rem',
      x: '8rem',
      filter:'blur(4px)',
      scale: 0,
      opacity: 0,
    },
    leftHidden: {
      y:'-2rem',
      x: '-8rem',
      filter:'blur(4px)',
      scale: 0,
      opacity: 0,

    },
  }
  
  return (
    <div className="flex h-screen bg-gray-700 place-content-center justify-center items-center text-white" id="songs">
    <div className="my-auto align-middle w-screen">
     <motion.div className="carousel-wrapper grid place-items-center overflow-hidden align-middle">
      <h1 className="text-4xl text-white text-center">Some Songs You Might Like:</h1>
      <motion.div className="carousel-content relative h-96 align-middle">
        
        <AnimatePresence initial={false}>
          <motion.div
            key={LeftId}
            variants={variants}
            initial={FlowDirection ? 'center' : 'leftHidden'}
            animate="left"
            exit={'leftHidden'}
            className="card card-compact w-fit bg-base-100 shadow-xl my-auto absolute"
          >
            <motion.div className="relative">
            <VideoCardBody src={videos[LeftId] + '?enablejsapi=0&autoplay=0&mute=1&controls=0'} />
            <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50 disabled"></motion.div>
            </motion.div>
            
            </motion.div>
          <motion.div
            drag="x"

            onDragEnd={
              (event, info) => {
               console.log(`${window.innerWidth/2}, ${info.point.x}`)
               if(window.innerWidth/2 - info.point.x < 0){
                 prevBtn()
               }else{
                 nextBtn()
               }
              }
            }
            
            variants={variants}
            key={CenterId}
            initial={FlowDirection ? 'right' : 'left'}
            animate="center"
            className="card card-compact w-fit bg-base-100 shadow-xl my-auto absolute"
          ><VideoCardBody src={videos[CenterId]}/></motion.div>
          <motion.div
            key={RightId}
            variants={variants}
            initial={FlowDirection ? 'rightHidden' : 'center'}
            animate="right"
            exit={'rightHidden'}
            className="card card-compact w-fit bg-base-100 shadow-xl my-auto absolute"
          >
            <VideoCardBody src={videos[RightId] + '?enablejsapi=0&autoplay=0&mute=1&controls=0'} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
      <motion.div className="flex mx-auto justify-center">
        

        <motion.button className="p-0 group" onClick={prevBtn}><AiOutlineArrowLeft className="text-5xl transition-all group-hover:scale-x-110 group-hover:scale-y-90 group-hover:-translate-x-3"/></motion.button>
        <motion.div className="w-20"></motion.div>
        <motion.button className="p-0 group" onClick={nextBtn}><AiOutlineArrowRight className="text-5xl transition-all group-hover:scale-x-110 group-hover:scale-y-90 group-hover:translate-x-3"/></motion.button>
      </motion.div>
    </div>
    </div>
  )
}

/*
return (
    <motion.div className="card card-compact w-fit bg-base-100 shadow-xl mx-auto mb-4">
      <motion.div className="card-body">
        <h1 className="card-title text-center mx-auto text-4xl">{props.genre}</h1>
        {props.songs.map((song) => {
          return <AnimationBar text={song.text} className="justify-center"/> //add url arg too
        })}
      </motion.div>
    </motion.div>
  )
*/