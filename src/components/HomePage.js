import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import {Link} from 'react-router-dom';
import Header from './Header';




export default function HomePage() {

    
    return (
        <>
        <Header/>

        <div className="col p-3 mt-5 mb-5 bg-body rounded text-center">
            <h3>Product Alerts and Back In Stock Alerts</h3>
        </div>
    <div className="body">
       
        <div className="container px-4 mt-5">
            
            
                 <div className="row">
                 <div className="col shadow p-3 mb-5 bg-body rounded text-center">
                     <p>Alerts</p>
                 </div>

                 <div className="col ">
                 <Link to="/create-alert">
                 <button className="btn btn-warning mt-3 " type="button" id="button-addon2">Create</button>
                 </Link>
                 </div>
                 </div>


                 <div className="row">
                 <div className="col shadow p-3 mb-5 bg-body rounded text-center">
                     <p>Products</p>
                 </div>

                 <div className="col ">
                 <Link to="/get-products">
                 <button className="btn btn-success mt-3 me-2" type="button" id="button-addon2">Get</button>
                 </Link>
                 <Link to="/update-products">
                 <button className="btn btn-primary mt-3 me-2" type="button" id="button-addon2">Update</button>
                 </Link>
                 <Link to="/delete-products">
                 <button className="btn btn-danger mt-3" type="button" id="button-addon2">Delete</button>
                 </Link>
                 </div>
                 </div>
                 

                 <div className="row">
                 <div className="col shadow p-3 mb-5 bg-body rounded text-center">
                     <p>Settings</p>
                 </div>

                 <div className="col-6">
                 <Link to="/get-alert-settings">
                 <button className="btn btn-success mt-3 me-2" type="button" id="button-addon2">Get</button>
                 </Link>
                 <Link to="/update-alert-settings">
                 <button className="btn btn-primary mt-3" type="button" id="button-addon2">Update</button>
                 </Link>
                 </div>
              </div>
                <Link to="/home">
                <div>To Api Settings</div>
                </Link>
         </div>
            
         </div>
    
        </>
    )

 
}
