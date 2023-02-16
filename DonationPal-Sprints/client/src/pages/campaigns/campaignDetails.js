import { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
// import { useParams } from "react-router";

// import useTaskFetcher from '../../hook/useTaskFetcher.js'; this is the hook
import axios from 'axios';

// import Lane from '../../components/Lane/Lane.js'; this is the component
import '../campaigns/campaigns.css';
import CampaignList from '../../components/campaigns/campaignsList';
import Campaign from '../../components/campaigns/campaigns';
import Details from '../../components/campaigns/details'
import DetailsList from '../../components/campaigns/detailsList';

function Campaigns( {apiURL} ) {
    
const [isLoading, setIsLoading] = useState(false);
const [dataCampaigns, setCampaigns] = useState([]);

const { _id } = useParams();



useEffect( () => {
    
    const loadCampaigns = async () => {
        try {
            const apiResponse = await axios.get(apiURL + '/campaign/' + _id)
            setCampaigns((dataCampaigns) => [...apiResponse.data]);
            // await console.log(apiResponse.data.name)
        }
        catch (error) {
            console.log("Error :(");
        }
        finally {
            setIsLoading(false);
        }
    };

    // set isload to true
    setIsLoading(true);
    loadCampaigns();
}, []);

return  (
    <div>
        <div >
            {isLoading ? <span>Loading...</span> : (
                // <div>
                //     <Details name={dataCampaigns.name} description={dataCampaigns.description}/>
                // </div>
                <ul>
                {
                    dataCampaigns.map( (task) => <li> {task.name} </li>)
                }
            </ul>
            )}
        </div>
    </div>
)

}

export default Campaigns;