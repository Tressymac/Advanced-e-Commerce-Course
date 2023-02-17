import { useState, useEffect } from 'react';
import axios from 'axios';

function useDonationDetailsFetcher(dataSource){
    // Set up initial state of state variables
    const [Loading, setIsLoading] = useState(false);
    const [dataDonation, setDonation] = useState([]);
    const [errors, setError] = useState('');

    useEffect( () => {
    
        const loadDonations = async () => {
            try {
                const apiResponse = await axios.get(dataSource);
                console.log(apiResponse.data);
                setDonation((dataDonation) => [...apiResponse.data]);
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
        loadDonations();
    }, []);

    return [Loading, errors, dataDonation];
}

export default useDonationDetailsFetcher;