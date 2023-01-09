import Card from './card.jsx'
export default function CardGroup(props){
  return (
    <div className='card-holder mx-auto justify-center w-10/12'>
    {
      (props.products != null) ?
      props.products.map(product => {
      return (
        <Card image={{src:product.image,alt:`Preview of ${product.title}`}} name={product.title} description={product.description} price={product.price} id={product.id} src={product.image}/>
      )})
      : <p>ERR</p>
    }
      
    <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
    <div hidden id="snipcart" data-config-modal-style="side" data-api-key="ZjE0ZDk2ZDItOTk4NC00Y2RjLWFiOWQtYTVmMmRkMTU5MzY3NjM4MDgyMDE5NzQxNTY1MTUx" />  
    </div>
  )
}