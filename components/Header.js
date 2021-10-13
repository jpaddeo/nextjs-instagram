import Logo from './header/Logo';
import NavButtons from './header/NavButtons';
import Search from './header/Search';

function Header() {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between items-center bg-white max-w-6xl mx-5 xl:mx-auto'>
        {/* Left */}
        <Logo />
        {/* Middle */}
        <Search />
        {/* Right */}
        <NavButtons />
      </div>
    </div>
  );
}

export default Header;
