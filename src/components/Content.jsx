import React from 'react'
import Stories from './Stories'
import CreatePost from './CreatePost'
import Rooms from './Rooms'
import PostDetails from './PostDetails'
import AddFriends from './AddFriends'

function Content() {
    return (
        <div className="posts">
            {/* stories */}
            <Stories />
            {/*create post*/}
            <div className="timeline">
                <CreatePost />
                <Rooms />
                {/*post container*/}
                <PostDetails />
                {/*people you may know*/}
                <AddFriends />
            </div>
        </div>

    )
}

export default Content
