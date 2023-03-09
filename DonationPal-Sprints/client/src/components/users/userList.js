import User from './userDonations';
import SecondUserDonations from './secondUserDonations';
import DonationName from './donationName';
import UserMessageDonations from './userDonateComment';

const UserList = ({allUsers}) => {
    const donationID = allUsers.map ((items) => items.campaign_id);

    console.log(` Look for the donation id here: ${donationID}`);
    return(
        <div>
            <table id="customers">
                <tr>
                    <th>Campaign Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Message</th>
                </tr>
                
                <tr>
                    <td className='tableItem'>                
                        {allUsers.map ((items) => <DonationName key={items._id} {...items}/>)}
                    </td>
                    <td className='tableItem'>                
                        {allUsers.map ((items) => <User key={items._id} {...items}/>)}
                    </td>
                    <td className='tableItem'>                
                        {allUsers.map ((items) => <SecondUserDonations key={items._id} {...items}/>)}
                    </td>
                    <td className='tableItem'>                
                        {allUsers.map ((items) => <UserMessageDonations key={items._id} {...items}/>)}
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default UserList;