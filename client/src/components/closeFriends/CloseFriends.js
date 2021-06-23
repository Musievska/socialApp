import './closeFriends.css';


const CloseFriends = ({ user }) => {
    const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className='leftbarFriend'>
            <img className='leftbarFriendImg' src={PublicFolder+user.profileImg} alt='' />
            <span className='leftbarFriendName'>{user.username}</span>
       </li>
    )
}

export default CloseFriends
