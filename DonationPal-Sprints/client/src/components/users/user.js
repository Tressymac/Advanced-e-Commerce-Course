import '../users/user.css';
import { useNavigate } from 'react-router-dom';

function UserInfo ({name}){
    const navigate = useNavigate();

    const logOut = (event) => {
        localStorage.removeItem("accessToken");    
        navigate(`/${process.env.PUBLIC_URL}/login`);    
    };
    return(
        <div>
            <a><h4 className='logout' onClick={logOut}>Logout</h4></a>
            <div className="card detailsCardUser">
                <h1 className='greetings'>Hello {name}</h1>
            </div>
        </div>
            

    )
}

export default UserInfo;