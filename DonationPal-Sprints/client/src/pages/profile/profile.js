import { Navigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useContext } from 'react';

import useToken from '../../hooks/login/useToken';

import useUserDetailsFetcher from '../../hooks/login/userDits';
import useUserDonationListFetcher from '../../hooks/login/userDonations';

import UserInfo from '../../components/users/user'
import UserList from '../../components/users/userList';

import '../profile/profile.css'

import { APIURLContext } from '../../contexts/APIURLContext';

export default function ProfilePage() {
    const { token } = useToken();
    const apiURL = useContext(APIURLContext);

    const { _id } = useParams();
    const [isLoading, error, campdata] = useUserDetailsFetcher(apiURL + '/user/' + _id);
    const [Loading, errors, dataDonation] = useUserDonationListFetcher(apiURL + '/donation/user/' + _id);

    // If there isn't a token set, don't let the user see this page
    if (!token) {
        // Redirect the user to the root route
        return <Navigate replace to='/login' />
    }
    else{
        return(
            <div className="Tasks-wrapper">
            { isLoading ?  
                (<span className='loading'><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></span>)
            : 
                (
                    <div className='DetailsListCard'>
                        {campdata.map( (campdata) => <UserInfo 
                            name={campdata.name.first} 
                        />
                        )}

                        <UserList allUsers={dataDonation} />
                    </div>
                )
            }
            </div>
        )
    }
}