import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "../appi/axio";
import "./Product.css"

const Product = () => {
    const [product, setProduct] = useState(null);
    const {id} =useParams();
    
    useEffect(() => {

        axios(`https://dummyjson.com/products/${id}`)
        .then(response => setProduct(response.data))

    }, [])

  return (
    <div className="cvbnm">
        {
            product && <div className="dfghj">
                <img className="rdvjhfcg" src={product.thumbnail} alt="" />
                <h2 className="hbszxbxs">{product.title}</h2>
                <p className="foxy">{product.description}</p>
                <h3 className="class">{product.price}</h3>
                <h1 className="nike">{product.rating}</h1>
                <h2 className="loris">{product.brand}</h2>
            </div>
        }
    </div>
  )
}

export default Product