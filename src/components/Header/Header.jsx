import "./Header.css"

const Header = () => {
    return <header>
        <div className="logobox"><img src="/nike.svg" alt="nike logo" className="logo" /></div>
        <ul className="menubox">
            <li className="menu"><a className="active" href="#">Home</a></li>
            <li className="menu"><a href="#">Shop</a></li>
            <li className="menu"><a href="#">Sale</a></li>
            <li className="menu"><a href="#">Contact</a></li>
        </ul>
    </header>
}

export default Header;