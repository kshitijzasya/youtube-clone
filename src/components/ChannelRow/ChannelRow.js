import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const ChannelRow = ({image, channel, subs, noOfVideos, description}) => {
    return (
        <div className='flex items-center w-[70%]'>
            <Avatar 
              className='h-32 w-32 my-2.5 mx-16'
              alt={channel}
              src={image}
            />
            <div className="flex flex-col">
              <h4 className="flex items-center justify-between">{channel}</h4>
              <p className="text-sm text-gray-400">{subs} subscribers • {noOfVideos} videos</p>
              <p className="text-sm text-gray-400">{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow;