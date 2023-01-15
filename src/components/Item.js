import React,{useState} from "react";

function Item({ name, category }) {

  const [cartStatus, setcartStatus] = useState('Add to Cart')
  const [className, setclassName] = useState("")

  function handleClick(){
        if(cartStatus === 'Add to Cart'){
             setcartStatus('Remove from Cart')
        }else{
          setcartStatus('Add to Cart')
        }

        if(className === ""){
          setclassName("in-cart")
        }else{
          setclassName("")
        }
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{cartStatus}</button>
    </li>
  );
}

export default Item;
