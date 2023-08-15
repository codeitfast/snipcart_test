import {useState} from 'react'

export default function Card(props){
  const [image, setImage] = useState(props.src)
  let blankPrice = props.price
  try{
    if(blankPrice.startsWith('$')){
      blankPrice = blankPrice.substring(1)
    }
  }catch(err){}
  return(
    <div className="card card-compact inline-block bg-base-100 shadow-xl mb-1 grow sm:max-w-11/12"
    
    onMouseEnter={() => setImage(props.image.back)}
    onMouseLeave={() => setImage(props.src)}
    >
      <figure><img src={image} alt={props.image.alt} /></figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <div className="card-actions justify-end">
          <button class="snipcart-add-item btn btn-primary"
  data-item-id={props.id}
  data-item-price={blankPrice}
  data-item-description={props.description}
  data-item-image={props.src}
  data-item-name={props.name}>
  Add to cart
</button>
        </div>
      </div>
    </div>
    
  )
}