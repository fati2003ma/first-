import React from 'react'

function LeftSideBar() {
    return (
        <div className="shortcuts">
            <div className="first-col">
                <div className="menu-item">
                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/hero.png" alt />
                        </div>
                        <h4>Anne</h4>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="item-row">
                        <div className="icon">
                            <img src="img/icons/shield.svg" alt />
                        </div>
                        <h4>COVID-19 Infromation Center </h4>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="item-row">
                        <div className="icon">
                            <img src="img/icons/colored-people.svg" alt />
                        </div>
                        <h4>Friends </h4>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="item-row">
                        <div className="icon">
                            <img src="img/icons/colored-messenger.svg" alt />
                        </div>
                        <h4>Messenger </h4>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="item-row">
                        <div className="icon">
                            <img src="img/icons/colored-flag.svg" alt />
                        </div>
                        <h4>Pages </h4>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="item-row  border">
                        <div className="icon more">
                            <img src="img/icons/arrow-down.svg" alt />
                        </div>
                        <h4>see more </h4>
                    </div>
                </div>
            </div>
            <div className="second-col">
                <h6 className="title">
                    your shortcuts
                </h6>
                <div className="menu-item">
                    <div className="item-row">
                        <div className="icon">
                            <img src="img/stories/st-1.jpeg" alt />
                        </div>
                        <h4>Designers house </h4>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="item-row">
                        <div className="icon">
                            <img src="img/stories/st-2.jpeg" alt />
                        </div>
                        <h4>Script house </h4>
                    </div>
                    <div className="menu-item">
                        <div className="item-row">
                            <div className="icon">
                                <img src="img/stories/page-1.jpg" alt />
                            </div>
                            <h4>ui ux Designers workshop </h4>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="item-row">
                            <div className="icon">
                                <img src="img/stories/st-3.jpeg" alt />
                            </div>
                            <h4>netflix movies recommends </h4>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="item-row">
                            <div className="icon">
                                <img src="img/stories/page-2.jpg" alt />
                            </div>
                            <h4>the futur </h4>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="item-row">
                            <div className="icon">
                                <img src="img/stories/page-3.jpeg" alt />
                            </div>
                            <h4>aj smart </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LeftSideBar
