import '../users/user.css';

function UserInfo ({name}){
    return(
        <div>
            <div className="card detailsCardUser">
                <h1 className='greetings'>Hello {name}</h1>
            </div>
        </div>
            

    )
}

export default UserInfo;