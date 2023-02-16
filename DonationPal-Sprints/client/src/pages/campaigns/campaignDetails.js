import { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
// import { useParams } from "react-router";

// import useTaskFetcher from '../../hook/useTaskFetcher.js'; this is the hook
import axios from 'axios';

// import Lane from '../../components/Lane/Lane.js'; this is the component
import '../campaigns/campaigns.css';
import CampaignList from '../../components/campaigns/campaignsList';
import campaigns from '../../components/campaigns/campaigns';

function Campaigns( {apiURL} ) {
    
const [isLoading, setIsLoading] = useState(false);
const [secondDataCamp, secondSetCamp] = useState([]);
// const { id } = useParams();
// const Idee = this.props.match.params.id;

const search = useLocation().search;
// new URLSearchParams(search).get("_id");
const { _id } = useParams();



useEffect( () => {
    
    const loadCampaigns = async () => {
        try {

            const apiResponseByID = await axios.get(apiURL + '/campaign/' + _id)
            await console.log(apiResponseByID.data);     
            secondSetCamp((secondDataCamp) => [...apiResponseByID.data]);
            
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
                <div>
                    testing
                    {/* <CampaignList allCampaigns={secondDataCamp} /> */}
                </div>
            )}
        </div>
    </div>
)

}

export default Campaigns;