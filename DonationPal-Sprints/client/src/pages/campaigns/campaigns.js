import { useState, useEffect, useParams } from 'react';
import axios from 'axios';

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
            {isLoading ? 
                (<span className='loading'><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></span>)
                : (
                <div>
                    <CampaignList allCampaigns={dataCampaigns} />
                </div>
            )}
        </div>
    </div>
)

}

export default Campaigns;