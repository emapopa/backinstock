import React, {useEffect, useState} from 'react'
import Header from './Header';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ApyKey() {


    const [key, setKey] = useState("")

    useEffect(() => {
        // storing input name
        localStorage.setItem("key", JSON.stringify(key));

      }, [key]);
     
     



    return (
        <>
        <Header/>
        
        <div className="container ">
        <form >
        <div className="col pt-5 d-flex justify-content-center">
            <h4>Insert your Api key from Rule</h4>
        </div>
        <div className="col pt-1 px-4 ">
        <div className="input-group mt-5 d-flex justify-content-center">
          <form>
          <input type="text" value={key} onChange={(e) => setKey(e.target.value)} className="form-control" placeholder="API_KEY" />
          <Link to="/menu">
          <button type="submit" value="Submit" className="btn btn-primary mt-4 " >Update Settings </button>
         </Link>
         </form>
        </div>
        </div>
        </form>
        </div>
        
        </>
    )
}
