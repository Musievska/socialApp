import './topbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';


const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo'>Social App</span>
            </div>
            <div className='topbarCenter'>
                <div className='searchBar'>
                    <Search />
                    <input placeholder='Search' className='searchInput' />
                </div>
            </div>
            <div className='topbarRight'>
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className='topbarIcons'>
                <div className='topbarIconsItem'>
                    <Person />
                    <span className='topbarIconBadge'>1</span>
                    <div className='topbarIconsItem'>
                        <Chat />
                        <span className='topbarIconBadge'>2</span>
                        <div className='topbarIconsItem'>
                            <Notifications />
                            <span className='topbarIconBadge'>3</span>
                        </div>
                    </div>
                </div>
                <img src='/images/persons/terry.jpg' alt='' className='topbarImage'/>
            </div>
        </div>
    );
}

export default Topbar;
