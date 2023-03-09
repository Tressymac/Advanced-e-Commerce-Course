import { Link as RouterLink, Outlet } from 'react-router-dom'
import '../header/header.css'

function Header( {Logo} ){
    return(
        <header className='App-header'>
            <nav>
                <div className='Introduction'>

                    <img src={Logo} className="App-logo" alt='Donation Pal logo' />
                    <h1>Donation Pal</h1>
                </div>
                <div>
                <RouterLink to='/' className='App-link Header-link'>Home</RouterLink>
                <RouterLink to='/Campaigns' className='Header-link'>Campaigns</RouterLink>
                <RouterLink to='/Contributors' className='Header-link'>Contributors</RouterLink>
                <RouterLink to='/profile' className='Header-link'>Profile</RouterLink>
                </div>

                <Outlet />

            </nav>
        </header>
    )
}

export default Header;