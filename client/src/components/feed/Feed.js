import SharePosts from '../sharePosts/SharePosts';
import './feed.css';

function Feed() {
    return (
        <div className='feed'>
            <div classname='feedWrapper'>
                <SharePosts />
            </div>
        </div>
    )
}

export default Feed;
