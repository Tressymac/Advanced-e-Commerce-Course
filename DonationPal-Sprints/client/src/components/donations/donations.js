import '../donations/donations.css';

function Donation ({ message, amount, date }){
    return(
            <div className="">
                <div className="card-body donateCard">
                    <br></br>
                    <h2 className="card-title title">Someone donated ${amount}</h2>
                    <h3 className="card-subtitle mb-2 text-muted donationText">"{message}"</h3>
                    <p className="card-text">Date: {date}</p>
                    <br></br>
                </div>
                <br></br>
                <br></br>
 
            </div>

    )
}

export default Donation;