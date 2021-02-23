import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logoutUser} from '../services/index'
class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    logout = () => {
        this.props.logoutUser()
    }
    render() {
        const guestLinks = (
            <>
                <Link className="auth" to="/login">Login</Link>
                <Link className="auth" to="/signup">Sign Up</Link>
            </>
        )
        const userLinks = (
            <>
                <Link className="auth" to="/hello" onClick={this.logout}>Log out</Link>
                <Link className="auth" to="/somewhere">Somewhere</Link>
                <Link className="auth" to="/mommywhere3">Somewhere3</Link>
            </>
        )
        return (
            <div className={this.props.className}>
                <div className="nav">
                    <div className="logo">
                        <p>Logo</p>
                    </div>

                    <div className="top-right">

                    </div>
                    {this.props.auth.isLoggedIn ? userLinks : guestLinks}


                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
