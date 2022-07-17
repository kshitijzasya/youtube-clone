import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header () {

    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className='flex items-center justify-between p-3'>
          <div className="flex">
            <MenuIcon />
            <Link to='/'>
              <img 
                className='h-7 ml-5'
                src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
                alt=''
              />
            </Link>
          </div>
          
          <div className="flex w-[40%] justify-between border-solid border-slate-300 border rounded">
            <input type='text' className="flex-1 px-3" onChange={(e) => setInputSearch(e.target.value)} value={inputSearch}  onKeyPress={(e) => (e.key === 'Enter') ? window.location = '/search/'+inputSearch : null}/>
            <Link to={`/search/${inputSearch}`} className="pointer text-center 
            w-[50px] border-l border-slate-300 rounded-r">
              <SearchIcon />
            </Link>

            {/* add mic to listen to voice and process in future to do */}
            
          </div>

          <div className="flex items-center">
            <VideoCallIcon className='mr-6'/>
            <AppsIcon className='mr-6'/>
            <NotificationsIcon className='mr-6'/>
            <Avatar
              alt='Nouman Ahmed'
              stc='https://avatars1.githubusercontent.com/u/35970677?s=60&v=4'
            />
          </div>
          
        </div>
    )
}

export default Header;