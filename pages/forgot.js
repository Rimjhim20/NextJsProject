import React from 'react'
import Image from "next/image";
import Navbar from '../components/Navbar';
import styles from "../styles/contact.module.css";

const forgot = () => {
  return (
      <>
    <Image 
    layout='fill'
     src="/back.jpg">
         </Image>
         <div className={styles.wrap}>
    
   <Navbar/>
  
   <div className={styles.container}>
   
               <div className={styles.form}>
                   <h2>Reset Password</h2>
                   <form action="">
                       <div className={styles.inputBx}>
                           <input type="email" placeholder="Enter Email-Id"/>
                       </div>
                       <div className={styles.inputBx}>
                           <input type="password" placeholder="Last 3 digit of Password"/>
                       </div>
                      
                       <div className={styles.inputBx}>
                           <input type="submit" value="Reset"/>
                       </div>
                       <p className={styles.text}>Remember Password?<a className={styles.link} href ="/login" >ClickHere</a></p>
               
                       
                   </form>
               </div>
           </div>
           </div>
           </>
  )
}

export default forgot