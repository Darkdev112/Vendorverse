"use client"

import Card from '@/components/CardHome/Card'
import Manufacturer from '../assets/images/Manufacturer.png'
import Distributor from '../assets/images/Distributor.png'
import Retailer from '../assets/images/Retailer.png'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/about')
  }

  return (
    <div className='mx-8 my-2'>
      <div className={`${styles.background} h-auto rounded-lg p-8 flex lg:flex-row sm:flex-col`}>
        <div className='lg:w-3/5 flex flex-col  h-full md:p-8 sm:px-2 font-changa md:w-full '>
          
          <div className='h-full '>
            <div className='h-full  w-fit flex flex-row lg:ml-[5vw]'>
              <p className={`${styles.bmd}  md:text-[12rem] sm:text-[6rem] text-[#323232]`}>B</p>
              <p className={`${styles.bmd}  md:text-[6rem] sm:text-[2rem] font-bold flex flex-col`}>
                <span className='md:h-1/6'>
                </span>
                <span className='md:h-5/6 tracking-tighter text-[#98AFC7]'>
                  U<span className='text-[#323232]'>I</span><span>L</span><span className='text-[#323232]'>D</span>
                </span>
              </p>
            </div>
          </div>


          <div className=' h-full flex justify-end'>
            <div className='h-full  w-fit flex flex-row lg:mr-[5vw]'>
              <p className={`${styles.bmd} md:text-[12rem] sm:text-[6rem] text-[#323232]`}>C</p>
              <p className={`${styles.bmd} md:text-[6rem] sm:text-[2rem] font-bold flex flex-col`}>
                <span className='md:h-1/6'>
                </span>
                <span className='md:h-5/6 tracking-widest text-[#98AFC7]'>
                  <span>O</span><span className='text-[#323232]'>N</span><span>N</span><span className='text-[#323232]'>E</span><span>C</span><span className='text-[#323232]'>T</span>
                </span>
              </p>
            </div>
          </div>
          
          <div className=' h-full  '>
            <div className='h-full  w-fit flex flex-row lg:ml-[5vw]'>
              <p className={`${styles.bmd} md:text-[12rem] sm:text-[6rem] text-[#323232]`}>S</p>
              <p className={`${styles.bmd} md:text-[6rem] sm:text-[2rem] font-bold flex flex-col text-[#98AFC7]`}>
                <span className='md:h-1/6'>
                </span>
                <span className='md:h-5/6 tracking-tighter '>
                  <span>U</span><span className='text-[#323232]'>P</span><span>P</span><span className='text-[#323232]'>L</span><span>Y</span>
                </span>
              </p>
            </div>
          </div>
          
          <div className='min-h-[5rem] h-auto font-rokkitt tracking-wide md:text-2xl sm:text-lg font-bold  uppercase flex items-center lg:ml-[5vw] mt-4 text-[#323232]'>
            The most feasible solution to maintain your supply chain
          </div>

        </div>

        <div className={`${styles.background2} lg:w-2/5 md:w-full flex lg:min-h-full sm:h-[30rem] md:my-0 sm:my-8`}>
        </div>
      </div>

      <div className='my-8 flex flex-row md:text-3xl sm:text-2xl justify-center items-center font-changa'>
          <p className='text-[#323232]'>
            Create your workplace
          </p>
      </div>

      <div className='my-8 flex lg:flex-row sm:flex-col w-7/8 m-auto justify-center min-h-[25rem] lg:py-4 sm:py-0'>
        <div className=' basis-1/3 flex flex-col  items-center md:border-r-2 border-gray-100 lg:py-0 md:py-4 md:my-0 sm:my-8'>
          <Card
            image={Manufacturer}
            variant='Manufacturer'
          />
        </div>
        <div className='basis-1/3 flex flex-col items-center md:border-r-2 border-gray-100 lg:py-0 md:py-4 md:my-0 sm:my-8'>
          <Card
            image={Distributor}
            variant='Distributor'
          />
        </div>
        <div className=' basis-1/3 flex flex-col items-center lg:py-0 md:py-4 md:my-0 sm:my-8'>
          <Card
            image={Retailer}
            variant='Retailer'
          />
        </div>
      </div>

      <div className='my-8 flex flex-row text-3xl justify-center items-center font-rokkitt tracking-wide'>
        <Button size='large' text="About us" handleClick={handleClick}/>
      </div>
    </div>
  )
}
