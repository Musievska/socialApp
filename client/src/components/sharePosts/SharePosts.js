import './sharePosts.css';
import {
    PermMedia,
    Label,
    Room,
    EmojiEmotions,
} from '@material-ui/icons'

const SharePosts = () => {
    return (
        <div className='share'>
            <div className='shareWrapper'>
                <div className='shareTop'>
                    <img className='shareProfileImg' src='' alt='' />
                    <input placeholder='Share' className='shareInput'>

                    </input>
                </div>
                <hr className='shareHr' />
                <div className='shareBottom'>
                    <div className='shareOptions'>
                        <div className='shareSingleOption'>
                            <PermMedia htmlColor='tomato' classname='shareIcon' />
                            <span className='shareOptionContext'>photo or video</span>
                        </div>
                        <div className='shareSingleOption'>
                            <Label htmlColor='blue' classname='shareIcon' />
                            <span className="shareOptionContext">Tag</span>
                        </div>
                        <div className='shareSingleOption'>
                            <Room htmlColor='green' className='shareIcon' />
                            <span className='shareOptionContext'>Location</span>
                        </div>
                        <div className='shareSingleOption'>
                            <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                            <span className='shareOptionContext'>Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}

export default SharePosts;
