import '../campaigns/campaigns.css';

function Campaigns ({name, description, goal, start_date, end_date, _id}){
    return(
            <div className="card detailsCard">
                <div className="card-body">
                    <h2 className="card-title title">{name}</h2>
                    <hr></hr>
                    <p className="card-text">{description}</p>  
                    <h3 className="card-subtitle mb-2 text-muted">Goal: {goal}</h3>
                    <p className="card-text">Duration: {start_date} - {end_date}</p>
                    <button className='campButton'> Donate now</button>
                </div>
            </div>

    )
}

export default Campaigns;