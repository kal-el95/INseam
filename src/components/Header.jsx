import Link from 'next/link';
import MenuItem from './MenuItem';
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';
export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-7xl mx-auto'>
      <div className='flex gap-8'>
        <MenuItem title='Home' address='/' Icon={AiFillHome} />
        <MenuItem title='About' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      <Link href={'/'} className='text-2xl font-bold flex items-center py-1 px-2 rounded-lg bg-amber-400'>
        <span className=' text-black'>IN</span><span className='text-blue-950 hidden sm:inline'>seam</span>
      </Link>
    </div>
  )
}
