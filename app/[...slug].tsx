import React from 'react'
import { useRouter } from "next/router"
const Slug = () => {
  const router = useRouter();
  console.log('router.pathname is :', router.pathname)
  console.log('router.query is :', router.query)
  return (
    <div>

    </div>
  )
}

export default Slug
