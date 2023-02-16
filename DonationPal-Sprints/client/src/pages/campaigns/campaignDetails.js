import { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
// import { useParams } from "react-router";

// import useTaskFetcher from '../../hook/useTaskFetcher.js'; this is the hook
import axios from 'axios';

import useCampDetailsFetcher from '../../hooks/campaign/detailsHook'

import '../campaigns/campaigns.css';
import Details from '../../components/campaigns/details'
// import DetailsList from '../../components/campaigns/detailsList';


function AllTasks( {apiURL} ){
    const { _id } = useParams();

    const [isLoading, error, campdata] = useCampDetailsFetcher(apiURL + '/campaign/' + _id);
    return(
        <div className="Tasks-wrapper">
            { isLoading ?  
                (<span>Loading...</span>)
            : 
                (
                    <div>

                        {campdata.map( (campdata) => <Details name={campdata.name} description={campdata.description} />)}
                    </div>
                )
            }
        </div>
    )
};

export default AllTasks; 


