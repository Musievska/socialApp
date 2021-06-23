import './profile.css';

import Topbar from '../../components/topbar/Topbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';


function Profile() {
    const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <>
            <Topbar />
            <div className='profile'>
                <Leftbar />
                <div className='profileRight'>
                    <div className='profileRightTop'>
                        <div className='profileCover'>
                            <img
                                className='profileCoverImg'
                                src={PublicFolder+'persons/terry.jpg'}
                                alt=''
                            />
                            <img
                                className='profileUserImg'
                                src={PublicFolder+'persons/terry.jpg'}
                                alt=''
                            />
                        </div>
                        <div className='profileInfo'>
                            <h4 className='profileInfoName'>Terry</h4>
                            <span className='profileInfoDesc'>Zdr!Ko pr?</span>
                        </div>
                    </div>
                    <div className='profileRightBottom'>
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
    
        </>
    )
}

export default Profile;