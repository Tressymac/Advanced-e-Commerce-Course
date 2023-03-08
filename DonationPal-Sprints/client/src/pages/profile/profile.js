import { Navigate } from 'react-router-dom';

import useToken from '../../hooks/login/useToken';
import '../profile/profile.css'


export default function ProfilePage() {
    const { token, setToken } = useToken();

    // If there isn't a token set, don't let the user see this page
    if (!token) {
        // Redirect the user to the root route
        return <Navigate replace to='/' />
    }

    return(
        <div>
            <h1>Welcome Back</h1>
            { token }
        </div>
    )
}