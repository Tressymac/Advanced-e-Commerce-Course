import '../users/user.css';

function SecondUserDonations ({date, amount, campaign_id}){
    return(

    <div>
        <tr>
            <td>
                <a href={`../Campaigns/${campaign_id}`}>${amount}</a>
            </td>
        </tr>
    </div>


)
}

export default SecondUserDonations;