import logoupe from '../assets/logoupe.png';
import '../components/header3.css'
import { Link } from 'react-router-dom';



function Header3() {
    return(
        <header>
            <div className='Fundoheader3'>
            <div>
              <img className='Logo3'src={logoupe} alt="logoupe" />
            </div>
            <div>
                <Link to = "/resultados">
                    <button className='logoout-button'> Logoff
                    </button>
                </Link>
            </div>
            </div>
        </header>
    )
} export default Header3