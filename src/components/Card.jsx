import React from 'react'

import Git from '@mui/icons-material/GitHub';

function Card ( { h1 , li1 , li2 , li3 , li4 , li5 , li6 , li7 , li8 } ) {
  return (
    <div className='animate__animated animate__fadeInUp'> 
        <hr className='border-teal-600  dark:border-[black]'/>
        <h1 className='text-white font-bold text-[24px] text-center sm:text-[31px] dark:text-[#29282C]'>
            {h1}
        </h1>
        <hr className='border-teal-600 dark:border-[black]' />

        <div className='flex text-[10px] flex-wrap justify-around text-white mt-[10px] mb-[10px] sm:text-[15px] dark:text-[#29282C]'>
            <ul>
                <li> {li1} </li>
                <li> {li2} </li>
                <li> {li3} </li>
                <li> {li4} </li>
            </ul>
            <ul className='text-teal-600 text-center sm:text-left'>
                <li> {li5} </li>
                <li> {li6} </li>
                <li> {li7} </li>
                <li> {li8} </li>
            </ul>
        </div>

    </div>
  )
}

export default Card


function Card2 ( { h1 , li1 , li2 , li3 , li4 , li5 , li6 , li7 , li8 } ) {
    return (
      <div className='sm:pl-[180px] sm:mt-[10px]'>
          <div className='flex ml-[30px] text-[11px] flex-wrap sm:justify-center text-teal-600 mt-[10px] mb-[10px] sm:text-[15px]'>
              <ul>
                  <li> {li1} </li>
                  <li className='mb-[15px] sm:mb-[0]'> {li2} </li>
                  <li> {li3} </li>
                  <li> {li4} </li>
              </ul>
              <ul className='text-[red] dark:text-[#F7BB0E] w-[70%] ml-[10px]'>
                  <li> {li5} </li>
                  <li> {li6} </li>
                  <li> {li7} </li>
                  <li> {li8} </li>
              </ul>
          </div>
      </div>
    )
  }
  
  export {Card2}

  function Card3( { h1 , img , a } ) {
    return (
        <div> 

            <div className='text-center pl-[20px] pr-[20px] mt-[10px] sm:pt-[10px] sm:ml-[50px]'>
                <img src={img} alt="error"  className='m-auto sm:w-[800px]'/>
                <div className='flex justify-between items-center pr-[25px] pl-[25px]'>
                <h1 className='font-black text-[20px] mt-[5px] mb-[5px]'>
                    {h1}
                </h1>
                <a href={a}>
                    <Git />
                </a>
                </div>
            </div>

        </div>
    )
  }
  
  export { Card3 }

  