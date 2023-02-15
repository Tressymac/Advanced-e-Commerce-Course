import { Link as RouterLink } from 'react-router-dom'
import '../header/header.css'

function Header( {logo} ){
    return(
        <header className='App-header'>
            <img src={logo} className="App-logo" alt='Donation Pal logo' />
            <nav>
                <Header>
                    <h1>Donation Pal</h1>
                </Header>
                <RouterLink to='/' className='App-link'>Home</RouterLink>
                <div>
                <RouterLink to='/Campaigns' className='Header-link'>Campaigns</RouterLink>
                <RouterLink to='/Contributors' className='Header-link'>Contributors</RouterLink>
                </div>
            </nav>
        </header>
    )
}

export default Header;