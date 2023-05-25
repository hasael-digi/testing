import Image from 'next/image';
import Link from 'next/link';
import ListMenu from './components-navbar/ListMenu';

const Navbar = () => {
  return (
    <main className='flex items-center justify-between'>
      <div className='relative'>
        <Link href='/'>
          <Image src='/assets/logo.png' alt='logo/web' width={80} height={100} />
        </Link>
      </div>

      <ListMenu />
    </main>
  );
};

export default Navbar;
