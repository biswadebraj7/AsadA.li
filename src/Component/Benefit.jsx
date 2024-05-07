import React, { useEffect, useState } from 'react'

const Benefit = () => {
    const [factdata, setdata]=useState([]);
    useEffect(()=>{
        fetch("chose.json")
        .then((res)=>res.json())
        .then((data)=>setdata(data))
    },[])
  return (
    <div className='py-10 mx-auto max-w-[1620px]'>
        <div className=' mx-auto'>
            <h1 className=' font-semibold text-5xl text-center text-[#262626]'>Benefits To Chose Us!</h1>
            <p className=' text-center font-normal  text-lg text-[#505050] py-4 w-[790px] mx-auto'>Inspired by hydration and Japan’s beauty rituals, Ehya Cosmetics focuses on the core elements of skincare to combine powerful ingredients backed by science and authentically.</p>

        </div>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-4'>
            {
                factdata.map((item)=>
                <div className=' mx-auto pt-4' >
                    <div className=' mx-auto'>
                        <img src={item.image} className='mx-auto' alt="" />
                    </div>
                    <h3 className='text-center text-2xl font-medium pt-4'>{item.title}</h3>
                    <p className=' w-[345px] text-center text-xl font-normal py-4 ' >{item.describe}</p>

                </div>
                
                )

            }

        </div>
      
    </div>
  )
}

export default Benefit
