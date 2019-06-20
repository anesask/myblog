import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from './../images/logo.svg'
import Links from '../components/links'

class Menu extends Component {
    state = {
        scrolled: false,
    }

    menuOnScroll = () => {
        if (window.scrollY > 20){
            this.setState({scrolled: true})
        }   else {
            this.setState({scrolled: false})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.menuOnScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.menuOnScroll)
    }

    render(){
        const {scrolled} = this.state
        // const {menuLinks} = this.props

    return(
        <div className={scrolled ? 'nav-wrapper scroll' : 'nav-wrapper'}>         
            <Link to="/" className="nav-link">
                <img src={logo} className="nav-logo" alt="logo"/>
            </Link>
            <Links/>
        </div>
        
        )  
    }
}

export default Menu