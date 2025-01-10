import React from 'react'

function Navbar() {
    return (
        <nav>
            {/*logo and search*/}
            <div className="left-side">
                <div className="logo">
                    <img src="img/icons/facebook.svg" alt />
                </div>
                <div className="search">
                    <input type="text" placeholder="Search Facebook" name id />
                </div>
            </div>
            {/*tab icons*/}
            <div className="tabs">
                <div className="tab-icon active">
                    <div className="icon">
                        <img src="img/icons/home.svg" alt />
                    </div>
                </div>
                <div className="tab-icon">
                    <div className="icon has-notification">
                        <img src="img/icons/flag.svg" alt />
                    </div>
                </div>
                <div className="tab-icon">
                    <div className="icon">
                        <img src="img/icons/tv.svg" alt />
                    </div>
                </div>
                <div className="tab-icon">
                    <div className="icon">
                        <img src="img/icons/users.svg" alt />
                    </div>
                </div>
                <div className="tab-icon">
                    <div className="icon has-notification">
                        <img src="img/icons/calendar.svg" alt />
                    </div>
                </div>
            </div>
            {/*right side*/}
            <div className="right-side">
                <div className="user">
                    <div className="profile">
                        <img src="img/avatar/hero.png" alt />
                    </div>
                    <h4>Anne</h4>
                </div>
                {/*icons*/}
                <div className="user-icons">
                    <div className="icon">
                        <img src="img/icons/plus.svg" alt />
                    </div>
                    <div className="icon has-notification">
                        <img src=" img/icons/messenger.svg" alt />
                    </div>
                    <div className="icon">
                        <img src="img/icons/bell.svg" alt />
                    </div>
                    <div className="icon">
                        <img src="img/icons/arrow.svg" alt />
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
