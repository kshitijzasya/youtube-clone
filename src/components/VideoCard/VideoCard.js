import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const VideoCard = ({image, title, channel, views, timestamp, channelImage}) => {
    return (
        <div className='w-68 flex-wrap mb-10'>
          <img className='h-36 w-64' src={image} alt='' />
          <div className="flex mt-2.5 pr-7">
            <Avatar 
              className='w-8 h-8' 
              alt={channel} 
              src={channelImage} 
            />
            <div className="ml-3.5">
              <h4 className="text-sm mb-3">{title}</h4>
              <p className='text-sm text-current'>{channel}</p>
              <p className='text-sm text-current'>{views} views • {timestamp}</p>
            </div> 
          </div>
        </div>
    )
}

export default VideoCard;