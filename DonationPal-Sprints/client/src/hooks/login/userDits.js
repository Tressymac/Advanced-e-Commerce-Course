import { useState, useEffect } from 'react';
import axios from 'axios';

function useUserDetailsFetcher(dataSource){
    // Set up initial state of state variables
    const [isLoading, setIsLoading] = useState(false);
    const [dataCampaigns, setCampaigns] = useState([]);
    const [error, setError] = useState('');

    useEffect( () => {
    
        const loadCampaigns = async () => {
            try {
                const apiResponse = await axios.get(dataSource);
                console.log(apiResponse.data);
                setCampaigns((dataCampaigns) => [apiResponse.data]);
                // await console.log(apiResponse.data.name)
            }
            catch (error) {
                console.log("Error :(");
            }
            finally {
                setIsLoading(false);
            }
        };

        // Call the function we defined
        setIsLoading(true);
        loadCampaigns();
    }, []);

    return [isLoading, error, dataCampaigns];
}

export default useUserDetailsFetcher;