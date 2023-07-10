import axios from 'axios';
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const CreateTask_Card = dynamic(
  () => import('../components/CreateTask_Card'), { ssr: false }
)
const ShowTask = dynamic(
  () => import('../components/ShowTask_Card'), { ssr: false }
)

export default function Home() {
  const [ data, setData ] = useState([])

  useEffect(()=>{
    const res = axios.get('/api/get')
    .then((res)=>{
      setData(res.data)  
      console.log(res.data)
    })
    console.log(data)
},[])
    return (
        <center>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
          <CreateTask_Card/>
          </motion.div>
          <div className="mx-10 grid grid-cols-4 grid-flow-row gap-4">

            { data && data.map((item, index) => (
            <ShowTask
              key={index}
              title= {item.Name}
              body= {item.body}
              schedule= {item.schedule}
              date= {item.date}
            />
            ))}

          </div>
        </center>
    )
}
