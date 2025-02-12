import React from 'react';
import ProfileDropdown from './ProfileMenu';

function CommonNav() {
  return (
    <div>
      <nav className="bg-gray-900 border-gray-200 -mr-2 -mt-1  flex flex-col items-center h-28">
        
        <div className="flex items-center justify-center w-full mt-2">
          <h1 className="text-white text-4xl">Home</h1>
        </div>
        
        <div className="flex items-center justify-between w-full px-4 mt-2">
          <div className="flex items-center space-x-3">
            <a href="https://flowbite.com/">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mb-3"
                alt="Flowbite Logo"
              />
            </a>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white mb-4">
              Trippeazy
            </span>
          </div>
          
          <div className="align mr-5 -mt-4">
            <ProfileDropdown />
          </div>
        </div>
        
      </nav>
    </div>
  );
}

export default CommonNav;
