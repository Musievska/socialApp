import Post from '../post/Post';
import SharePosts from '../sharePosts/SharePosts';
import './feed.css';

function Feed() {
    return (
        <div className='feed'>
            <div classname='feedWrapper'>
                <SharePosts />
                <Post/>
            </div>
        </div>
    )
}

export default Feed;
