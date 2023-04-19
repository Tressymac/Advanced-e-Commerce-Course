import '../campaigns/campaigns.css';
import { useContext } from 'react';
import { APIURLContext } from '../../contexts/APIURLContext';

function Campaigns ({name, description, goal, start_date, end_date, _id, message, campaign_id}){
    // get the api url from the context 
    const APIURL = useContext(APIURLContext);
    console.log(`this is the is: ${campaign_id}`);


    return(
        <div>
            <div className="card detailsCard">
                <div className="card-body">
                    <h2 className="card-title title">{name}</h2>
                    <hr></hr>
                    <p className="card-text">{description}</p>  
                    <h3 className="card-subtitle mb-2 text-muted">Goal: {goal}</h3>
                    <p className="card-text">Duration: {start_date} - {end_date}</p>
                    <button className='campButton'> Donate now</button>
                </div>

                <div className="card-body">
                    <h2 className="card-title title">{message}</h2>

                </div>
            </div>

            <div>
                <form action={APIURL + 'donation/create_checkout'} method='post'>
                    <input type='hidden' name='campaign_id' value={campaign_id} />
                    <input type='hidden' name='name' value={name} />
                    <input type='hidden' name='campaign_id' value='2500' />
                    <button type='submit'>
                        Donate $25 Today!
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Campaigns;