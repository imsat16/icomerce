import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-center gap-5 font-medium py-4">
      <Link href={'/'}>
        <a className='hover:font-bold'>
          All Item
        </a>
      </Link>
      <Link href={'/categories/Electronics'}>
        <a className='hover:font-bold'>
          Electronics
        </a>
      </Link>
      <Link href={'/categories/Fashions'}>
        <a className='hover:font-bold'>
          Fashion
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
