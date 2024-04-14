import React from 'react'
import { Menu } from '@headlessui/react'
import Image from 'next/image'
import Link from "next/link"

const MobileMenu = ({session, router}) => {
  return (
    <Menu as="div" className="md:hidden block" >
     <Menu.Button>
      <Image
        src="/menu.png"
        height={25}
        width={25}
        alt="menu"
      />
     </Menu.Button>
     <Menu.Items as="div" className=" flex flex-col items-center rounded-xl gap-3 bg-slate-200 p-3" >
      <Menu.Item>
      <Link href={`profile?id=${session?.user?.id}`} >
      <Image
       src={session?.user?.image}
       height={40}
       width={40}
       className='rounded-full'
       alt="profile"
      />
      </Link>
      </Menu.Item>
      <Menu.Item>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' variant="destructive" onClick={() => {
        signOut()
        router.push("/")
      }}>Log Out</button>
      </Menu.Item>
      <Menu.Item>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={()=>router.push("/create-audition")} >Create Audition</button>
      </Menu.Item>
      <Menu.Item>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={()=>router.push("/latest-auditions")} >Latest Auditions</button>
      </Menu.Item>
     </Menu.Items>
    </Menu>
  )
}

export default MobileMenu