'use client';

import React, { useState } from 'react';
import {
  Camera,
  Video,
  Image,
  Heart,
  MessageCircle,
  Share2,
  Home,
  Search,
  PlusSquare,
  User,
  Music,
  Phone,
} from 'lucide-react';

const PhoneFrame = ({ children }) => {
  const [islandExpanded, setIslandExpanded] = useState(false);

  const toggleIsland = () => {
    setIslandExpanded(!islandExpanded);
  };

  return (
    <div className='relative mx-auto w-[300px] h-[600px] bg-black rounded-[40px] shadow-xl overflow-hidden border-[14px] border-black'>
      {/* Dynamic Island */}
      <div
        className={`absolute top-1 left-1/2 transform -translate-x-1/2 bg-black rounded-full transition-all duration-300 ease-in-out cursor-pointer ${
          islandExpanded ? 'w-[80%] h-[80px]' : 'w-[90px] h-[25px]'
        }`}
        onClick={toggleIsland}
      >
        {islandExpanded ? (
          <div className='flex items-center justify-around h-full text-white p-2'>
            <div className='flex items-center'>
              <Music size={20} />
              <span className='ml-2 text-xs'>Now Playing</span>
            </div>
            <div className='flex items-center'>
              <Phone size={20} />
              <span className='ml-2 text-xs'>00:12</span>
            </div>
          </div>
        ) : (
          <div className='flex justify-between items-center h-full px-2'>
            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div className='absolute top-1 left-5 right-5 flex justify-between items-center text-white text-xs'>
        <span>9:41</span>
        <div className='flex space-x-1'>
          <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z' />
          </svg>
          <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
            <path
              fillRule='evenodd'
              d='M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 100-2 1 1 0 000 2z'
              clipRule='evenodd'
            />
          </svg>
          <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5h-7.5A.75.75 0 012 10z' />
          </svg>
        </div>
      </div>

      {/* Home Indicator */}
      <div className='absolute bottom-1 left-0 right-0 flex justify-center'>
        <div className='w-[100px] h-1 bg-gray-300 rounded-full'></div>
      </div>
      <div className='h-full w-full bg-white overflow-hidden pt-8'>
        {children}
      </div>
    </div>
  );
};

const SnapTogetherWireframe = () => {
  const events = [
    { name: 'Taylor Swift Concert', keyword: 'concert' },
    { name: 'Wedding', keyword: 'wedding' },
    { name: 'Pinball Tournament', keyword: 'pinball' },
  ];

  const posts = [
    {
      eventName: 'Taylor Swift Concert',
      timeAgo: '2 hours ago',
      likes: '1.2k',
      comments: '234',
      submissionCount: 45,
    },
    {
      eventName: 'Wedding',
      timeAgo: '1 day ago',
      likes: '876',
      comments: '156',
      submissionCount: 30,
    },
  ];

  return (
    <PhoneFrame>
      <div className='flex flex-col h-full bg-gradient-to-br from-purple-100 to-pink-100 font-sans'>
        {/* Header */}
        <header className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-3 flex justify-between items-center'>
          <h1 className='text-lg font-bold'>SnapTogether</h1>
          <div className='flex space-x-3'>
            <PlusSquare size={20} />
            <Share2 size={20} />
          </div>
        </header>

        {/* Main Content Area */}
        <main className='flex-grow overflow-y-auto'>
          {/* Events Carousel */}
          <div className='bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-3 overflow-x-auto'>
            <h2 className='text-base font-semibold mb-2 text-indigo-800 text-center'>
              Your Events
            </h2>
            <div className='flex justify-center space-x-4'>
              {events.map((event, i) => (
                <div key={i} className='flex flex-col items-center w-20'>
                  <div className='w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-lg overflow-hidden p-0.5 flex items-center justify-center'>
                    <span className='text-2xl text-white'>{event.name[0]}</span>
                  </div>
                  <span className='text-xs mt-1 font-medium text-indigo-800 text-center'>
                    {event.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Feed */}
          <div className='pb-16 px-3'>
            {posts.map((post, postIndex) => (
              <div
                key={postIndex}
                className='bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg mb-4 overflow-hidden'
              >
                {/* Post Header */}
                <div className='flex items-center p-3 bg-gradient-to-r from-indigo-100 to-purple-100'>
                  <div className='w-8 h-8 bg-gradient-to-br from-green-300 to-blue-500 rounded-full mr-2 overflow-hidden p-0.5 flex items-center justify-center'>
                    <span className='text-sm text-white'>
                      {post.eventName[0]}
                    </span>
                  </div>
                  <div>
                    <span className='font-semibold text-sm text-indigo-800'>
                      {post.eventName}
                    </span>
                    <p className='text-xs text-indigo-600'>{post.timeAgo}</p>
                  </div>
                </div>

                {/* Post Content */}
                <div className='bg-black aspect-video flex items-center justify-center relative'>
                  <div className='absolute inset-0 flex items-center justify-center bg-gray-800'>
                    <Video
                      size={40}
                      color='white'
                      className='filter drop-shadow-lg'
                    />
                  </div>
                </div>

                {/* Post Actions */}
                <div className='p-3'>
                  <div className='flex justify-between items-center mb-2'>
                    <div className='flex space-x-3'>
                      <button className='flex items-center space-x-1 text-pink-600'>
                        <Heart size={20} />
                        <span className='text-sm'>{post.likes}</span>
                      </button>
                      <button className='flex items-center space-x-1 text-indigo-600'>
                        <MessageCircle size={20} />
                        <span className='text-sm'>{post.comments}</span>
                      </button>
                    </div>
                    <button className='bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-300'>
                      View Reel
                    </button>
                  </div>
                  <p className='text-sm text-indigo-800'>
                    <span className='font-semibold'>SnapTogether AI</span>{' '}
                    created this highlight reel from {post.submissionCount} user
                    submissions!
                  </p>
                  <p className='text-indigo-600 text-xs mt-1'>
                    View all comments
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </PhoneFrame>
  );
};

export default SnapTogetherWireframe;
