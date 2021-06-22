import React from 'react';
import './leftbar.css';
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOffOutlined,
    Event,
    School
} from '@material-ui/icons';

function Leftbar() {
    return (
        <div className='leftbar'>
            <div className='leftbarWrapper'>
                <ul className='leftbarList'>
                    <li className='leftbarListItem'>
                        <RssFeed className='leftbarIcons' />
                        <span className='leftbarListItemText'>
                            Feed
                        </span>
                    </li>
                    <li className='leftbarListItem'>
                        <Chat className='leftbarIcons' />
                        <span className='leftbarListItemText'>
                            Chats
                        </span>
                    </li>
                    <li className='leftbarListItem'>
                        <PlayCircleFilledOutlined className='leftbarIcons' />
                        <span className='leftbarListItemText'>
                            Videos
                        </span>
                    </li>
                    <li className='leftbarListItem'>
                        <Group className='leftbarIcons' />
                        <span className='leftbarListItemText'>
                            Groups
                        </span>
                    </li>
                    <li className='leftbarListItem'>
                        <Bookmark className='leftbarIcons' />
                        <span className='leftbarListItemText'>
                            Bookmarks
                        </span>
                    </li>
                    <li className='leftbarListItem'>
                        <HelpOutline className='leftbarIcons' />
                        <span className='leftbarListItemText'>
                            Questions
                        </span>
                    </li>
                    <li className='leftbarListItem'>
                        <WorkOffOutlined className='leftbarIcons' />
                        <span className='leftbarListItemText'>
                            Jobs
                        </span>
                    </li>
                    <li className='leftbarListItem'>
                        <Event className='leftbarIcons' />
                        <span className='leftbarListItemText'>
                            Events
                        </span>
                    </li>
                    <li className='leftbarListItem'>
                        <School className='leftbarIcons' />
                        <span className='leftbarListItemText'>
                            Courses
                        </span>
                    </li>
                </ul>
                <button className='leftbarButton'>
                    Show More
                </button>
                <hr className='leftbarHr' />
                <ul className='leftbarFriendList'>
                    <li className='leftbarFriend'>
                        <img className='leftbarFriendImg' src='/images/persons/donald.jpg' alt='' />
                        <span className='leftbarFriendName'>ivan</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Leftbar;