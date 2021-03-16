import React from 'react';
import "./styles/styles.css"

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.language = localStorage.getItem("language");
        this.state = this.englishText;
    }

    englishText = {
        "HOME": "Home",
        "NEWS": "News",
        "ABOUT": "About Us",
        "DOCTORS": "Doctors",
        "SERVICES": "Services & Rates",
        "CONTACT": "Contact Us"
    }

    romanianText = {
        "HOME": "Acasă",
        "NEWS": "Noutăți",
        "ABOUT": "Despre Noi",
        "DOCTORS": "Medici",
        "SERVICES": "Servicii & Tarife",
        "CONTACT": "Contact"
    }

    componentDidMount() {
        if (this.language === "RO") {
            this.setState(this.romanianText);
        } else {
            this.setState(this.englishText);
        }
    }

    changeToEnglish() {
        localStorage.setItem("language", "EN")
        this.setState(this.englishText);
        window.location.reload();
    }

    changeToRomanian() {
        localStorage.setItem("language", "RO");
        this.setState(this.romanianText);
        window.location.reload();
    }

    render() {
        return (
            <div className="nav-bar">
                <ul>
                    <li className="nav-bar-item" id="nav-bar-logo">
                        <a href="/">
                            <img src={require("./images/dentalLogo.jpg")} alt="Denta logo"
                            />
                        </a>
                    </li>
                    <li className="nav-bar-item" id="nav-bar-home">
                        Denta WEB
                    </li>
                    <li className="nav-bar-item">
                        <img className="language" src={require("./images/romanian.jpg")} alt="romanian"
                             onClick={() => this.changeToRomanian()}/>
                    </li>
                    <li className="nav-bar-item">
                        <img className="language" src={require("./images/english.jpg")} alt="english"
                             onClick={() => this.changeToEnglish()}/>
                    </li>
                    <li className="nav-bar-item">
                        <a href="/contactUs">{this.state.CONTACT}</a>
                    </li>
                    <li className="nav-bar-item">
                        <a href="/services">{this.state.SERVICES}</a>
                    </li>
                    <li className="nav-bar-item">
                        <a href="/doctors">{this.state.DOCTORS}</a>
                    </li>
                    <li className="nav-bar-item">
                        <a href="/aboutUs">{this.state.ABOUT}</a>
                    </li>
                    <li className="nav-bar-item">
                        <a href="/news">{this.state.NEWS}</a>
                    </li>
                    <li className="nav-bar-item">
                        <a href="/">{this.state.HOME}</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar
