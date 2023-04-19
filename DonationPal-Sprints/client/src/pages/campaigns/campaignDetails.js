import { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";

import axios from 'axios';

import useCampDetailsFetcher from '../../hooks/campaign/detailsHook';
import useDonationDetailsFetcher from '../../hooks/donation/specificDonation';

import '../campaigns/campaigns.css';
import Details from '../../components/campaigns/details';
import Donation from '../../components/donations/donations';


function AllTasks( {apiURL} ){
    const { _id } = useParams();

    const [isLoading, error, campdata] = useCampDetailsFetcher(apiURL + '/campaign/' + _id);
    const [Loading, errors, dataDonation] = useDonationDetailsFetcher(apiURL + '/donation/campaign/' + _id);

    return(
        <div className="Tasks-wrapper">
            { isLoading ?  
                (<span className='loading'><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></span>)
            : 
                (
                    <div className='DetailsListCard'>
                        {campdata.map( (campdata) => <Details 
                            campaign_name={campdata.name} 
                            description={campdata.description} 
                            goal={campdata.goal}
                            start_date={campdata.start_date}
                            end_date={campdata.end_date}
                            campaign_id={campdata._id}
                        />
                        )}

                        {dataDonation.map( (donatedata) => <Donation 
                            message={donatedata.message} 
                            date={donatedata.date}
                            amount={donatedata.amount}
                        />
                        )}
                    </div>
                )
            }
        </div>
    )
};

export default AllTasks; 


