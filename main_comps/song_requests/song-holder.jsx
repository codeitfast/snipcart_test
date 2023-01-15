import AnimationBar from './song-animation.jsx'
import FakeBar from './song-fake.jsx'
import {motion, AnimatePresence} from 'framer-motion'
import {useState, useEffect} from 'react'
import {CgArrowLeftR,CgArrowRightR} from "react-icons/cg"

//special mod function
//https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
function mod(n, m) {
  return ((n % m) + m) % m;
}

function CardBody(args){
  return (
    <motion.div className="card-body">
      <h1 className="card-title text-center mx-auto text-4xl text-black">{args.genre}</h1>
      {args.songs.map((song) => {
        //make playable and unplayable version of animationBar  
        return <AnimationBar text={song} className="justify-center"/> //add url arg too
      })}
    </motion.div>
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
  
  const [FlowDirection, setFlowDirection] = useState(true)
  const [CenterId, setCenterId] = useState(0)
  const [LeftId, setLeftId] = useState(fakeFile.length - 1)
  const [RightId, setRightId] = useState(1)

  //https://github.com/NishantEC/ncompx/blob/main/src/components/Carousal/Carousel.jsx
    const nextBtn = () => {
      if (LeftId === fakeFile.length - 1) {
        setLeftId(0)
      } else {
        setLeftId(LeftId + 1)
      }
      if (CenterId === fakeFile.length - 1) {
        setCenterId(0)
      } else {
        setCenterId(CenterId + 1)
      }
  
      if (RightId === fakeFile.length - 1) {
        setRightId(0)
      } else {
        setRightId(RightId + 1)
      }
      setFlowDirection(true)
  }
  const prevBtn = () => {
    setFlowDirection(false)
    if (LeftId === 0) {
      setLeftId(fakeFile.length - 1)
    } else {
      setLeftId(LeftId - 1)
    }
    if (CenterId === 0) {
      setCenterId(fakeFile.length - 1)
    } else {
      setCenterId(CenterId - 1)
    }
    if (RightId === 0) {
      setRightId(fakeFile.length - 1)
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
      scale: 1,
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
      scale: 1,
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
    <div className="flex h-screen bg-slate-700 place-content-center justify-center items-center text-white" id="songs">
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
            <FakeCard genre={fakeFile[mod((CenterId - 1), fakeFile.length)].genre} songs={fakeFile[mod((CenterId - 1), fakeFile.length)].songs}/>
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
          ><CardBody genre={fakeFile[CenterId].genre} songs={fakeFile[CenterId].songs}/></motion.div>
          <motion.div
            key={RightId}
            variants={variants}
            initial={FlowDirection ? 'rightHidden' : 'center'}
            animate="right"
            exit={'rightHidden'}
            className="card card-compact w-fit bg-base-100 shadow-xl my-auto absolute"
          >
            <FakeCard genre={fakeFile[mod((CenterId + 1), fakeFile.length)].genre} songs={fakeFile[mod((CenterId + 1), fakeFile.length)].songs}/>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
      <motion.div className="flex mx-auto justify-center">
        <motion.button className="btn btn-ghost p-0" onClick={prevBtn}><CgArrowLeftR className="text-5xl"/></motion.button>
        <motion.button className="btn btn-ghost p-0" onClick={nextBtn}><CgArrowRightR className="text-5xl"/></motion.button>
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