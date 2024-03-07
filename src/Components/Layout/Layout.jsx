import React from 'react';
import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Layout({ userData, setUserData }) {

    let navigate = useNavigate();
    function logout() {
        localStorage.removeItem('token');
        setUserData(null);
        navigate('/login');
    }
    return (
        <>
            <NavBar userData={userData} logout={logout} />
            <br />
            <br />
            <Outlet></Outlet>
            <Footer />

        </>
    );
}
