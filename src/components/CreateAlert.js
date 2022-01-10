import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import {Link} from 'react-router-dom';


export default function CreateAlert() {

const key = JSON.parse(localStorage.getItem('key'));
//const [isPending, setIsPending] = useState(false)
//const [errors, setError] = useState(null)

const [body, setBody] = useState({
  email: "example@email.com",
  product_id: "ABCD1234-56",
  tags: ["Newsletter"],
  language: "en"
});



const handleSubmit = (e) => {
 e.preventDefault(); 
 //const alert =  {body} ;

 

 //setIsPending(true);
console.log()
 fetch('https://integrations.rule.io/productalert/alerts', {
  method: 'POST',
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
            <div>
           
            </div>
        <div className="body">
            <div className="pt-5 mb-5 d-flex justify-content-center">
                <h4>Create Alert</h4>
            </div>

            <div className="container">
                 <div className="form-floating">
                  <form onSubmit={handleSubmit} >
                  
                  <textarea  value={JSON.stringify(body, undefined, 4)}  onChange={(e) => setBody(JSON.parse(e.target.value))} className="form-control shadow p-3 mb-5 bg-body rounded" placeholder="" id="floatingTextarea2" style={{height: 300}}>
                  </textarea>
                
                  <button className="btn btn-primary mt-4" >Send</button>

                 </form>
                
          </div>
         
          </div>
    
          </div>

    </>
    )

} 



