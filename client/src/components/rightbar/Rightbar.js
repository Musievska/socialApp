import "./rightbar.css";
import { Users } from "../../DummyUsers";
import Online from "../online/Online";

function Rightbar({ profile }) {
const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src={PublicFolder + "birthday.png"} alt="" />
                    <span className="birthdayText">
                        Mimi has a birhday today.
          </span>
                </div>
                <img className="rightbarAd"
                    src={PublicFolder+"ad.jpg"}
                    alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img
                            src={PublicFolder + 'persons/terry.jpg'}
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">test</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src={PublicFolder+'persons/donald.jpg'}
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">test</span>
                    </div>
                    </div>
                       
            </>
        );
    };
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}

export default Rightbar;