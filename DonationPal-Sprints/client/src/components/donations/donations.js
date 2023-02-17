import '../donations/donations.css';

function Donation ({ message, amount, donation_date }){
    return(
            <div className="donateCard">
                <div className="card-body">
                    <h2 className="card-title title">Someone donated ${amount}</h2>
                    <h3 className="card-subtitle mb-2 text-muted donationText">"{message}"</h3>
                    <p className="card-text">Date: {donation_date}</p>
                </div>
            </div>

    )
}

export default Donation;