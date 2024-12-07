import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'

function LeftTextHero() {
  return (
    <>
         <motion.div className="leftText"
         initial={{width:0,opacity:0}}
         animate={{width:"100%",opacity:1}}
         exit={{width:0,opacity:0}}
         >
            <div className="upperText">
                <pre>
                    YOUR FEET<br/>
                    DESERVE<br/>
                    THE BEST<br/>
                </pre>
            </div>
            <div className="middleText">

                <pre>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br/>
                HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br/>
                THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br/>
                SHOES.
                </pre>


            </div>
            <div className="lowerText">
                <div className="btnDiv">
                    <button className="shopNow">Shop Now</button>
                    <button className="category">Category</button>
                </div>

            </div>
        </motion.div>
  </>
  )
}

export default LeftTextHero
