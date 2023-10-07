import React from 'react'
import {motion} from 'framer-motion'

const BonusAnnuali = () => {
  return (
    <motion.div
    whileHover={{scale: 1.1}}
    whileTap={{scaleY: 10, scaleX: 2}}
    className='border-2 border-yellow-500 rounded-xl p-12 absolute left-12 bottom-12 cursor-pointer'
    ><h2 className='text-5xl'>!</h2></motion.div>
  )
}

export default BonusAnnuali