import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';

function Home(){

    const url = `https://5f64c824fb1b5700169c9479.mockapi.io/products/products?page=1&limit=10`
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setProducts({
                loading: false,
                data: response.data,
                error: false
            })    
        })
        .catch(() => {
            setProducts({
                loading:false,
                data: null,
                error: true
            })
        }
        )
    }, [url])

    let content = null

    if(products.error){
        content = <p>
            An error was encountered while getting the product. 
        </p>
    }

    if(products.loading){
        content = <Loader />
    }

    if(products.data){
        content =
            products.data.map((product, key) =>
                <div key={key}>
                    <ProductCard 
                        product = {product}
                    />
                </div>    
            )
    }

    return(
        <div className="font-bold text-2xl mb-3 p-5">
            <h1>Best Seller</h1>
            {content}
        </div>
    )
}

export default Home