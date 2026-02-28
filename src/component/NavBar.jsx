import LightLogo from '../assets/image/Logo-variant-light.png'
import Menu from '../assets/image/Icons/menu-icon.svg'
export function NavBar(){
    return(
        <header className='fixed top-0 w-full flex justify-between p-4 items-center'>
            <div>
                <img src={LightLogo} alt="light-logo" width={70}/>
            </div>
            <div>
                <img src={Menu} alt="Menu-bar" width={70}/>
            </div>
        </header>
    )
}