import { useState, useEffect, useParams } from 'react';
// import useTaskFetcher from '../../hook/useTaskFetcher.js'; this is the hook
import axios from 'axios';

// import Lane from '../../components/Lane/Lane.js'; this is the component
import '../campaigns/campaigns.css';
import CampaignList from '../../components/campaigns/campaignsList';

function Campaigns( {apiURL} ) {
    
const [isLoading, setIsLoading] = useState(false);
const [secondDataCamp, secondSetCamp] = useState([]);
// const { id } = useParams();
// const Idee = this.props.match.params.id;

useEffect( () => {
    const loadCampaigns = async () => {
        try {
            // const apiResponse = await axios.get(apiURL + '/campaign/')
            // await console.log(apiResponse.data);
            // await console.log(apiResponse.data);                        
            // setCampaigns((dataCampaigns) => [...apiResponse.data]);
            


            const search = window.location.search;
            const params = new URLSearchParams(search);

            const foo = params.get('_id');
            await console.log(foo)


            // const apiResponseByID = await axios.get(apiURL + '/campaign/' + Idee)
            // await console.log(apiResponseByID.data);                        
            // secondSetCamp((secondDataCamp) => [...apiResponseByID.data]);
            

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
                    {/* <CampaignList allCampaigns={dataCampaigns} /> */}
                </div>
            )}
        </div>
    </div>
)

}

export default Campaigns;