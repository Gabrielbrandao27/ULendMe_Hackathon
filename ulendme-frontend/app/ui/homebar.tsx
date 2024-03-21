import AcmeLogo from "./acme-logo"
import Link from "next/link"
/* 
Talvez pra cada componente valha fazer um css 
ao invés desse tailwind meio gigante.
É assim que faz:
- Cria um CSS com nomeDoComponente.module.css;
- Importa assim:
    import styles from '@/app/ui/home.module.css';
- Pra aplicar, é só:
    <div className={styles.shape} />;
*/

export default function HomeBar() {
  return(  
  <nav className="flex flex-wrap h-20 bg-white drop-shadow-xl shrink-0 items-end rounded-b-lg p-4 md:h-45">
    {<AcmeLogo />}
    <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
      <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
        <Link href='/'>
          <span className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
            Lend NFT
          </span>
        </Link>
        <Link href='/'>
          <span className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
            Borrow NFT
          </span>
        </Link>
      </div>
    </div>
  </nav>
  ) 
  
}