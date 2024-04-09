"use client"

import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const ProfileButton = ({id}) => {
  
    const router = useRouter();
  
    return (
    <Button className="w-fit" variant={"secondary"} onClick={()=>router.push(`profile?id=${id}`)}>
     Go to profile
    </Button>
  )
}

export default ProfileButton