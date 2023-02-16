import react from 'react';
import Campaigns from './campaigns';
import '../campaigns/campaigns.css'

const CampaignList = ({allCampaigns}) => {
    return(
        <div className='row'>
            <h1 className='campListH1'>Select a campaign to donate to</h1>
            {allCampaigns.map ((items) => <Campaigns key={items._id} {...items}/>)}

            
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

export default CampaignList;