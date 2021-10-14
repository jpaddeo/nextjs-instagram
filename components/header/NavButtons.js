import { useRouter } from 'next/router';
import {
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/react';

function NavButtons() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className='flex items-center justify-end space-x-2'>
      <MenuIcon className='h-6 w-6 md:hidden cursor-pointer' />
      <HomeIcon
        onClick={() => router.push('/')}
        className='header-nav-button'
      />
      {session ? (
        <>
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
            src={session?.user?.image}
            alt={session?.user?.name}
            onClick={signOut}
            className='h-10 w-10 rounded-full cursor-pointer'
          />
        </>
      ) : (
        <button className='text-blue-400' onClick={signIn}>
          Sign In
        </button>
      )}
    </div>
  );
}

export default NavButtons;
