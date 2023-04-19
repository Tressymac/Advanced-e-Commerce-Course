import { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { APIURLContext } from "../../contexts/APIURLContext";
import useGetOneCampaign from "../campaigns/useGetOneCampaigns";

function DonationSuccess() {
    // Set up state
    const [campaign, setCampaign] = useState({});

    // Get the APIURL from context
    const apiURL = useContext(APIURLContext);
    console.log(apiURL + " Api URL")

    // Get the campaign ID from querystring
    const [searchParams, setSearchParams] = useSearchParams();
    const campaignID = searchParams.get('campaign_id');
    const donationAmount = searchParams.get('donation_amount');

    // Use the custom hook to get the data about a campaign
    const [loading, error, campaigndata] = useGetOneCampaign(`${apiURL}/campaign/${campaignID}`);
    const mystyle = {
        color: "white",
        margin: "5%",
    };
    const mystyle2 = {
        color: "wheat",
    };
    // Use the effect hook to load campaign data into state
    useEffect(() => {
        setCampaign(campaigndata)
    }, [campaigndata]);

    console.log("This is the donation amount: " + donationAmount)
    console.log("This is the id: " + campaignID)

    // Return the component with data embedded
    return (
        <div className="success" style={mystyle}>
            Donation success! You donated ${donationAmount.slice(0,2)} to the campaign <strong style={mystyle2}>"{campaign.name}"</strong>!
        </div>
    )

}

export default DonationSuccess