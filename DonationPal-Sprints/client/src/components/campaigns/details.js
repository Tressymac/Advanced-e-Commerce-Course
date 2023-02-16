import '../campaigns/campaigns.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Campaigns ({name, description}){
    return(
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title title">{name}</h2>
                    <hr></hr>
                    <p className="card-text">{description}</p>        
                </div>
            </div>

    )
}

export default Campaigns;