"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from "next/link"

const Navbar = () => {
   
  const { data: session, status } = useSession()
  const router = useRouter();

    return (
    <nav className='flex justify-between items-center p-5'>
     {!session?.user?.email && <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' variant="destructive"  onClick={() => signIn("google")}>Log In</button>}
     { session?.user?.email && 
     <div className='flex items-center' >
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={()=>router.push("/")} >Home</button>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' variant="destructive" onClick={() => {
        signOut()
        router.push("/")
      }}>Log Out</button>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={()=>router.push("/create-audition")} >Create Audition</button>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={()=>router.push("/latest-auditions")} >Latest Auditions</button>
      <Link href={`/profile?id=${session?.user?.id}`} >
      <Image
       src={session?.user?.image}
       height={30}
       width={30}
       className='rounded-2xl'
       alt="profile"
      />
      </Link>
     </div>  }
    </nav>
  )
}

export default Navbar