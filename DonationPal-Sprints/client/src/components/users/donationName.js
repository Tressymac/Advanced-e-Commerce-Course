import { useContext } from 'react';

import '../users/user.css';
import { APIURLContext } from '../../contexts/APIURLContext';
import useCampDetailsFetcher from '../../hooks/campaign/detailsHook';


function DonationName ({campaign_id}){
    const apiURL = useContext(APIURLContext);
    const campaignID = campaign_id;

    const [donateIsLoading, donateError, campDataDonation] = useCampDetailsFetcher(apiURL + '/campaign/' + campaignID );
    const campNamedata = campDataDonation.map((campName) => campName.name)


    return(

    <div className='nestedTable'>
        <td>
            {campNamedata}
        </td>  
    </div>


)
}

export default DonationName;