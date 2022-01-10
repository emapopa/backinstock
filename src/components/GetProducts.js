import React, { useState, useEffect} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import {Link} from 'react-router-dom';


export default function GetProducts() {
    const key = JSON.parse(localStorage.getItem('key'));
    const url = "https://integrations.rule.io/productalert";
    const [products, setProducts] = useState('');
    const [loading, setLoading] =  useState(false);

    const headers = {
        'Authorization': `Bearer ${key}`, 
        'Content-Type': 'application/json'
      }


    useEffect(() => {
        productsFunction();
    },[])
 
    const productsFunction = async () => {
        try {
            const res = await axios.get(`${url}/products`, 
            { headers : headers
            })
            setProducts(res.data.products)
            setLoading(true)
           //console.log(res.data)
        } catch (err) {
           alert(err.message); 
        }
    };
 
   
    return (
        <>
        <Link to="/menu">
            <Header/>
         </Link>
         <div className="pt-5 mb-5 d-flex justify-content-center">
                <h4>Get Products</h4>
            </div>
        <div className="container form-floating">
                 <textarea key={loading && products.product_id} className="form-control shadow p-3 mb-5 bg-body rounded" placeholder="" id="floatingTextarea2" style={{height: 300}}>
                {JSON.stringify(products, undefined, 4)}
                 </textarea>
            
          </div>
          
       
    </>
    )
 
}

