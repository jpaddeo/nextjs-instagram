import Image from 'next/image';

function Logo() {
  return (
    <>
      <div className='relative hidden lg:inline-grid w-24 h-24 cursor-pointer'>
        <Image
          src='https://links.papareact.com/ocw'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className='relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer'>
        <Image
          src='https://links.papareact.com/jjm'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </>
  );
}

export default Logo;
