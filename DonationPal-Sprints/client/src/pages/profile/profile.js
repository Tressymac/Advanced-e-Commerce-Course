import { Navigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useContext } from 'react';

import useToken from '../../hooks/login/useToken';

import useUserDetailsFetcher from '../../hooks/login/userDits';
import useUserDonationListFetcher from '../../hooks/login/userDonations';
import useDonationDetailsFetcher from '../../hooks/donation/specificDonation';

import UserInfo from '../../components/users/user'
import UserList from '../../components/users/userList';

import '../profile/profile.css'

import { APIURLContext } from '../../contexts/APIURLContext';

export default function ProfilePage() {
    const { token } = useToken();
    const apiURL = useContext(APIURLContext);

    const { _id } = useParams();
    const [isLoading, error, userdata] = useUserDetailsFetcher(apiURL + '/user/' + _id);
    const [Loading, errors, dataDonation] = useUserDonationListFetcher(apiURL + '/donation/user/' + _id);

    if (!token) {
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
                        {userdata.map( (udata) => <UserInfo 
                            name={udata.name.first} 
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