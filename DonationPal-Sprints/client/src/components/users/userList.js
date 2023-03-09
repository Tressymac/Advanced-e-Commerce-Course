import react from 'react';
import User from './userDonations';
import SecondUserDonations from './secondUserDonations';

const UserList = ({allUsers}) => {
    return(
        <div>
            <table id="customers">
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                
                <tr>
                    <td>                
                        {allUsers.map ((items) => <User key={items._id} {...items}/>)}
                    </td>
                    <td>                
                        {allUsers.map ((items) => <SecondUserDonations key={items._id} {...items}/>)}
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default UserList;