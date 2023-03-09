import '../users/user.css';

function UserDonations ({date, amount}){
    const newDate = date.slice(0, 10)
    return(

    <div className='nestedTable'>
        <td>
            {newDate}
        </td>
    </div>


)
}

export default UserDonations;