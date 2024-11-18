'use client'

import React from 'react'

// React
import { motion } from "framer-motion"

// React Server Components
import * as motion from "framer-motion/client"

const CardMotion = () => {
  return (
    <div>
        <h1>CardMotion</h1>
        <motion.div>MOTION</motion.div>
    </div>
  )
}

export default CardMotion;