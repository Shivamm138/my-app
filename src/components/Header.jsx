import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import MenuItem from './MenuItem';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link'; // Import Link from Next.js

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'> {/* Changed max-auto to mx-auto */}
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} /> {/* Removed extra space from the address */}
      </div>
      <Link href={"/"} className='flex gap-1 items-center'> {/* Changed item-center to items-center */}
        <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDB</span>
        <span className='text-xl hidden sm:inline'>Clone</span>
      </Link>
    </div>
  );
}
