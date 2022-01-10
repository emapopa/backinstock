import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import {Link} from 'react-router-dom';


export default function CreateAlert() {


const [body, setBody] = useState({
    alert_min_stock: 16,
    alerts_per_stock: 23
});
//const [isPending, setIsPending] = useState(false)


const handleSubmit = (e) => {
 e.preventDefault(); 
 //const alert =  {body} ;

 

 //setIsPending(true);
console.log()
 fetch('https://integrations.rule.io/productalert/settings', {
  method: 'PUT',
  headers: { 
    'Authorization': 'Bearer 6d26ae87-a1dd6ac-a03ed97-46afd52-68e10dd16ab', 
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
                  <textarea  value={JSON.stringify(body, undefined, 4)}  onChange={(e) => setBody(JSON.parse(e.target.value))} className="form-control shadow p-3 mb-5 bg-body rounded" placeholder="" id="floatingTextarea2" style={{height: 200}}>
                 
                  </textarea>
                  <button className="btn btn-primary mt-4" >Update Settings </button>

                 </form>
                
          </div>
          
          </div>
          </div>
    </>
    )

} 




