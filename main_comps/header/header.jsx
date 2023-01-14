import pandaLogo1 from './panda_eyes_text_transparent.png'
import pandaLogo2 from './panda_eyes_black.png'
import {FaShoppingCart} from 'react-icons/fa'
import {useSnipcart} from 'use-snipcart'

export default function Header(props){
  const { cart = {} } = useSnipcart()
  
    /*<div className="navbar backdrop-blur-sm bg-red-500/25 text-primary-content sticky top-0">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>*/

  return(
    <div className="navbar bg-base-100/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl"><img src={pandaLogo2.src} className="h-full"/></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><div className="execute-hover"><a className="snipcart-checkout cool-hover"><span><FaShoppingCart className="inline pr-1"/>${cart.subtotal?.toFixed(2)}</span><span className="btnBefore"></span></a></div></li>
          {props.items.map((item)=>{
//todo: get item.src and href to work
            return (
              <li>
                <div className="execute-hover"><a
                href={item.src} className="cool-hover px-0"><span className="px-0">{item.name}</span><span className="btnBefore"></span></a></div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )   
}