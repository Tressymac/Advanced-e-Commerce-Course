import { Link as RouterLink } from 'react-router-dom'
import '../header/header.css'

function Header( {Logo} ){
    return(
        <header className='App-header'>
            <nav>
                <div className='Introduction'>

                    <h5><RouterLink to='/login' className='App-link Header-link'>Login</RouterLink></h5>
                    <img src={Logo} className="App-logo" alt='Donation Pal logo' />
                    <h1>Donation Pal</h1>
                </div>
                <div>
                <RouterLink to='/' className='App-link Header-link'>Home</RouterLink>
                <RouterLink to='/Campaigns' className='Header-link'>Campaigns</RouterLink>
                <RouterLink to='/Contributors' className='Header-link'>Contributors</RouterLink>
                </div>
            </nav>
        </header>
    )
}

export default Header;