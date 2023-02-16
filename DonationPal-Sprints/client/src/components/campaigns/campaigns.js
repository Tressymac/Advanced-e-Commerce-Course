import '../campaigns/campaigns.css'

function Campaigns ({name, description, goal, start_date, end_date}){
    return(
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title title">{name}</h2>
                    <hr></hr>
                    <h3 className="card-subtitle mb-2 text-muted">Goal: {goal}</h3>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">
                        <button>Learn More</button>
                    </a>          
                </div>
            </div>

    )
}

export default Campaigns;