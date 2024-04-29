import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center" >
     <Image
       src="/loader.svg"
       height={50}
       width={50}
       alt="loader"
     />
    </div>
  )
}

export default Loader