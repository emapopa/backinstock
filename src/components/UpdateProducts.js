import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import {Link} from 'react-router-dom';


export default function CreateAlert() {

const key = JSON.parse(localStorage.getItem('key'));
const [body, setBody] = useState({
    product_id: "ABCD1234-56",
    fields: [
        {
           key: "name",
            value: "product1"
        },{
           key: "url",
            value: "https://example.com/product1"
        },{
            key: "color",
            value: "blue"
        }
    ],
    alert_tags: ["Custom Alert Triggered"],
    stock: '8',
});
//const [isPending, setIsPending] = useState(false)


const handleSubmit = (e) => {
 e.preventDefault(); 
 //const alert =  {body} ;

 

 //setIsPending(true);
console.log()
 fetch('https://integrations.rule.io/productalert/products', {
  method: 'PUT',
  headers: { 
    'Authorization': `Bearer ${key}`, 
    'Content-Type': 'application/json'
  },
  
  body: JSON.stringify(body)
 }).then(response => {
    if (response.ok) {
      response.json().then(json => {
        alert(json.message);
      })
    }else{
        response.json().then(json => {
          alert(json.message);
        })
    }
  });
}
   

    return (
    <>

            <Link to="/menu">
            <Header/>
            </Link>
        <div className="body">
            <div className="pt-5 mb-5 d-flex justify-content-center">
                <h4>Update Products</h4>
            </div>

            <div className="container">
                 <div className="form-floating">
                  <form onSubmit={handleSubmit} >
                  <textarea  value={JSON.stringify(body, undefined, 4)}  onChange={(e) => setBody(JSON.parse(e.target.value))} className="form-control shadow p-3 mb-5 bg-body rounded" placeholder="" id="floatingTextarea2" style={{height: 500}}>
                 
                  </textarea>
                  <button className="btn btn-primary mt-4" >Update</button>

                 </form>
                
          </div>
          
          </div>
          </div>
    </>
    )

} 



