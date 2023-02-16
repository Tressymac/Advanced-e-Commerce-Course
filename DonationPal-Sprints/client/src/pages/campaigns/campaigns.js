import { useState, useEffect, useParams } from 'react';
// import useTaskFetcher from '../../hook/useTaskFetcher.js'; this is the hook
import axios from 'axios';

// import Lane from '../../components/Lane/Lane.js'; this is the component
import '../campaigns/campaigns.css';
import CampaignList from '../../components/campaigns/campaignsList';

function Campaigns( {apiURL} ) {
    
const [isLoading, setIsLoading] = useState(false);
const [dataCampaigns, setCampaigns] = useState([]);

useEffect( () => {
    const loadCampaigns = async () => {
        try {
            const apiResponse = await axios.get(apiURL + '/campaign/')
            // await console.log(apiResponse.data);
            await console.log(apiResponse.data);                        
            setCampaigns((dataCampaigns) => [...apiResponse.data]);

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
                    {/* <CampaignList allCampaigns={dataCampaigns} /> */}
                    {dataCampaigns.map(function(user) {
                        <div key={user._id}>{user._id}</div>;
                    })}
                </div>
            )}
        </div>
    </div>
)

}

export default Campaigns;