'use client'
import { usePathname } from "next/navigation"
import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "@/features/creator/components/Sidebar"
import { ReactNode } from "react"
import { motion } from 'framer-motion';

interface IClient {
    children: ReactNode
}

const ClientLayout: React.FC<IClient> = ({children}) => {
  const pathname = usePathname()
  const hide = ['/sign-in', '/sign-up'].some(prefix => pathname.startsWith(prefix));
  const isCreator = pathname.startsWith('/creator')

  const [sidebarOpen, setSidebarOpen] = useState(true)
  const toggleSidebar = () => setSidebarOpen((prev) => !prev)


  return (
    <>
      {!hide && !isCreator && <Header />}
      {isCreator && <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar}/>}

      {isCreator ? (
        <motion.div
          className="flex-1 p-6 transition-transform duration-300"
          initial={{ marginLeft: 0 }}
          animate={{ marginLeft: sidebarOpen ? '20rem' : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {children}
        </motion.div>
        ) : (
          children       
      )}
      {!hide && !isCreator && <Footer />}    
    </>
  )
}

export default ClientLayout
