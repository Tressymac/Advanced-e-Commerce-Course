import { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
// import { useParams } from "react-router";

// import useTaskFetcher from '../../hook/useTaskFetcher.js'; this is the hook
import axios from 'axios';

import useCampDetailsFetcher from '../../hooks/campaign/detailsHook'

// import Lane from '../../components/Lane/Lane.js'; this is the component
import '../campaigns/campaigns.css';
// import CampaignList from '../../components/campaigns/campaignsList';
// import Campaign from '../../components/campaigns/campaigns';
// import Details from '../../components/campaigns/details'
// import DetailsList from '../../components/campaigns/detailsList';

// function Campaigns( {apiURL} ) {
    
// const [isLoading, setIsLoading] = useState(false);
// const [dataCampaigns, setCampaigns] = useState([]);

// const apiResponse = await axios.get(apiURL + '/campaign/' + _id)


function AllTasks( {apiURL} ){
    const { _id } = useParams();

    const [isLoading, error, campdata] = useCampDetailsFetcher(apiURL + '/campaign/' + _id);
    return(
        <div className="Tasks-wrapper">
            { isLoading ?  
                (<span>Loading...</span>)
            : 
                (
                    <ul>
                        {campdata.map( (campdata) => <li> {campdata.name} </li>)}
                        {/* <li>{campdata.name}</li> */}
                    </ul>
                )
            }
        </div>
    )
};

export default AllTasks; 


