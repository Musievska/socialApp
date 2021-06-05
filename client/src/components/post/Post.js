import React from 'react';
import MoreIcon from '@material-ui/icons/More';

function Post() {
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img className='postProfileImg' src='' alt='' />
                        <span className='postUsername'>Terry</span>
                        <span className='postDate'>2 minutes ago</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreIcon/>
                    </div>
                </div>
                <div className='postCenter'></div>
                <div className='postBottom'></div>
            </div>
        </div>
    )
}

export default Post
