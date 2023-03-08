import '../users/user.css';

function UserDonations ({date, amount}){
    return(

    <div>
        <table id="customers">
        <tr>
            <th>Date</th>
            <th>Amount</th>
        </tr>
        
        <tr>
            <td>{date}</td>
            <td><a>${amount}</a></td>
        </tr>
            
    </table>
    </div>


)
}

export default UserDonations;