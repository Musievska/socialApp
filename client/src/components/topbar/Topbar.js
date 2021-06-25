import './topbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span className='logo'>Social App</span>
                </Link>
            </div>
            <div className='topbarCenter'>
                <div className='searchBar'>
                    <Search className='searchIcon' />
                    <input placeholder='Search in Social App' className='searchInput' />
                </div>
            </div>
            < div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className='topbarLink'>Homepage</span>
                    <span className='topbarLink'>Timeline</span>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconsItem'>
                        <Person />
                        <span className='topbarIconBadge'>1</span>
                        </div>
                    <div className='topbarIconsItem'>
                        <Chat />
                        <span className='topbarIconBadge'>2</span>
                    </div>
                    <div className='topbarIconsItem'>
                        <Notifications />
                        <span className='topbarIconBadge'>3</span>
                    </div>
                </div>
                <img src='/images/persons/terry.jpg' alt='' className='topbarImage' />
            </div>
        </div>
    );
}

export default Topbar;
