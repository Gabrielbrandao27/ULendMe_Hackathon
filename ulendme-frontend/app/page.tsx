import { lusitana } from './ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import HomeBar from './ui/homebar';
import styles from '@/app/ui/home.module.css';

export default function Page() {
  return (
      <div className="mt-4 flex-grow items-center justify-center flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-30">
          
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>NFT lending and borrowing, simplified</strong> 
          </p> 
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}> 
            A no-nonsense dApp for your NFT lending/borrowing needs. No login required :)
          </p>
          <div className='flex flex-column items-center justify-center gap-10'>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Lend NFT</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Borrow NFT</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
          
        </div>
        
      </div>
  );
}
