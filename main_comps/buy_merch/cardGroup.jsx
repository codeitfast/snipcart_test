import Card from './card.jsx'
import panda from '../../public/images/panda_3d.png'

export default function CardGroup(props){
  return (
<div className="bg-gray-900 pb-16" id="shop">
  <div className="text-center place-content-center pt-16 pb-8">
    <h1 className="text-4xl text-white">Merch</h1>
    <div className="text-white flex mx-auto w-fit">5% of profits go to the
    
    <div className="execute-hover ml-1 cursor-pointer w-fit h-fit pb-none">
      <a className="cool-hover font-bold" href="https://www.worldwildlife.org/about/" target="_blank"><span>World Wildlife Fund <img src={panda.src} className="h-6 mb-2 w-auto inline-block"/></span><span className="btnBig -translate-y-1"></span></a>
    </div>
  </div>
  </div>
    <div className='card-holder mx-auto justify-center w-10/12'>
    {
      (props.products != null) ?
      props.products.map(product => {
      return (
        <Card image={{src:product.image,alt:`Preview of ${product.title}`, back:product.back}} name={product.title} description={product.description} price={product.price} id={product.id} src={product.image}/>
      )})
      : <p>ERR</p>
    }
      
    <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
    <div hidden id="snipcart" data-config-modal-style="side" data-api-key="ZjE0ZDk2ZDItOTk4NC00Y2RjLWFiOWQtYTVmMmRkMTU5MzY3NjM4MDgyMDE5NzQxNTY1MTUx" />  
    </div>
    </div>
  )
}