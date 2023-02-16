import { Link as RouterLink } from 'react-router-dom'
import '../home/home.css'

function Homepage ({image}){
    return(
        <div className='container'>
                <div className='IntroductionHome'>
                    <img src={image} className="App-image1" alt='Homepage Image' />
                {/* </div>
                <div className='introductionPara'> */}
                    <div className='secondContainer'>
                        <h1>Who are we</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div>
                            <button>
                                Donate
                            </button>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="social-links">
                        <div className="row">
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

export default Homepage; 