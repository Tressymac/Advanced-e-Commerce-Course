import '../users/user.css';

function SecondUserDonations ({date, amount, campaign_id}){
    return(
    <div className='nestedTable'>
        <td>
            <a href={`/Campaigns/${campaign_id}`}>${amount}</a>
        </td>
    </div>


)
}

export default SecondUserDonations;