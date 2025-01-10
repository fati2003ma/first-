import React from 'react'
import LeftSideBar from './LeftSideBar'
import Content from './Content'
import RightSideBar from './RightSideBar'

function Container() {
    return (
        <div className="wrapper">
            <LeftSideBar />
            <Content />
            <RightSideBar />
        </div>
    )
}

export default Container
