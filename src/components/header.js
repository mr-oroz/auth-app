import { Link } from 'react-router-dom';
import React from 'react';
const Header = ({ user, logout, loading }) => {
    const loginUser =  <React.Fragment>
        <span style={{ color: '#fff' }}>{user.user}</span>
        <button onClick={logout}>выйти</button>
    </React.Fragment>
    const auth =  <React.Fragment>
        <button><Link to={'/auth/register'}>Регистрация</Link></button>
        <button><Link to={'/auth/login'}>Войти</Link></button>
    </React.Fragment>
    const authMe = user.user ? loginUser : auth
    return (
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <div className="header-logo">
                        <h1>Logo</h1>
                    </div>
                    <div className="header-list">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="header-auht">
                        {authMe}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;