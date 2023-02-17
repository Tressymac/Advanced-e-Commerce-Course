import '../donations/donations.css';

function Donation ({ message, amount, donation_date }){
    return(
            <div className="">
                <div className="card-body donateCard">
                    <br></br>
                    <h2 className="card-title title">Someone donated ${amount}</h2>
                    <h3 className="card-subtitle mb-2 text-muted donationText">"{message}"</h3>
                    <p className="card-text">Date: {donation_date}</p>
                    <br></br>
                </div>
                <br></br>
                <br></br>
                <footer>
                    <div className="social-links">
                        <div className="row1">
                            <div className="small-6 medium-3 columns text-center mobile-stack">
                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i>Facebook</a>
                            </div>
                            <div className="small-6 medium-3 columns text-center mobile-stack">
                            <a href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram" aria-hidden="true"></i>Instagram</a>
                            </div>
                            <div className="small-6 medium-3 columns text-center mobile-stack">
                            <a href="https://www.pinterest.com/"><i className="fa fa-pinterest-p" aria-hidden="true"></i>Pinterest</a>
                            </div>
                            <div className="small-6 medium-3 columns text-center mobile-stack">
                            <a href="https://twitter.com/?lang=en"><i className="fa fa-twitter" aria-hidden="true"></i>Twitter</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

    )
}

export default Donation;