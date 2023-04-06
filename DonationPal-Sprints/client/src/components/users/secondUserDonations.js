import '../users/user.css';

function SecondUserDonations ({date, amount, campaign_id}){
    return(
    <div className='nestedTable'>
        <td>
            <a href={`/${process.env.PUBLIC_URL}/Campaigns/${campaign_id}`}>${amount}</a>
        </td>
    </div>


)
}

export default SecondUserDonations;