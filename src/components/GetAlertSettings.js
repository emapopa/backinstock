import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default function GetAlertSettings() {


    const key = JSON.parse(localStorage.getItem('key'));
    const url = "https://integrations.rule.io/productalert";
    const [alert_settings, setAlert_Settings] = useState('');
    const [loading, setLoading] =  useState(false);


    useEffect(() => {
        settingsFunction();
    },[])
   

    const settingsFunction = async () => {
        try {
            const res = await axios.get(`${url}/settings`, { headers: {"Authorization": `Bearer ${key}`} })
             setAlert_Settings(res.data.alert_settings)
             setLoading(true)
             //console.log(res.data)
            
        } catch (err) {
            alert(err.message)
        }
    };
   
    
    return (
        <>
       <Link to="/menu">
            <Header/>
            </Link>
        <div className="body">
            <div className="pt-5 mb-5 d-flex justify-content-center">
                <h4>Get Alerts</h4>
            </div>

            <div className="container">
                 <div className="form-floating"> 
                 <textarea key={loading && alert_settings} className="form-control shadow p-3 mb-5 bg-body rounded" placeholder="" id="floatingTextarea2" style={{height: 200}}>
            {JSON.stringify(alert_settings, undefined, 4)}
               
             </textarea>
                   </div>
                  
            </div>
          </div>
          
          
       
    </>
    )
}
