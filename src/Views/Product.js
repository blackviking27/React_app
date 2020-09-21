import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';

function Product(){
    
    const { id } = useParams()
    const url = `https://5f64c824fb1b5700169c9479.mockapi.io/products/products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setProduct({
                loading: false,
                data: response.data,
                error: false
            })    
        })
        .catch(() => {
            setProduct({
                loading:false,
                data: null,
                error: true
            })
        }
        )
    }, [url])

    if(product.error){
        content = <p>
            An error was encountered while getting the product. 
        </p>
    }

    if(product.loading){
        content = <Loader />
    }

   if(product.data){
        content =
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img
                    src={product.data.image}
                    alt={product.data.image}
                ></img>
            </div>
            <div className="text-2xl font-bold mb-3">
                $ {product.data.price}
            </div>
            <div className="mb-3">
                {product.data.description}
            </div>

        </div>
   }

   return(
       <div className="p-3 font-l font-color-blue">
       {content}
       </div>
   )

}

export default Product