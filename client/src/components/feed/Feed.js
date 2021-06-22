import Post from '../post/Post';
import SharePosts from '../sharePosts/SharePosts';
import './feed.css';
import { Posts } from '../../DummyUsers';

function Feed() {
    return (
        <div className='feed'>
            <div className='feedWrapper'>
                <SharePosts />
                {Posts.map((x) => (
                    <Post key={x.id} post={x} />
                ))}
            </div>
        </div>
    );
}

export default Feed;
