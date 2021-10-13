import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

function NavButtons() {
  return (
    <div className='flex items-center justify-end space-x-2'>
      <MenuIcon className='h-6 w-6 md:hidden cursor-pointer' />
      <HomeIcon className='header-nav-button' />
      <div className='relative header-nav-button'>
        <PaperAirplaneIcon className='header-nav-button rotate-45' />
        <div className='absolute -top-1 -right-2 text-sm w-5 h-5 rounded-full bg-red-500 flex items-center justify-center animate-pulse text-white'>
          3
        </div>
      </div>
      <PlusCircleIcon className='header-nav-button' />
      <UserGroupIcon className='header-nav-button' />
      <HeartIcon className='header-nav-button' />
      <img
        src={'https://avatars.githubusercontent.com/u/3083587?v=4'}
        alt='profile picture'
        className='h-10 rounded-full cursor-pointer'
      />
    </div>
  );
}

export default NavButtons;
