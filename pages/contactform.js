import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../styles/contact.module.css";

const contactform = () => {
  return (
      <>
    <div className={styles.wrap}>
    <Navbar/>
   
    <div className={styles.container}>
    
                <div className={styles.form}>
                    <h2>Contact Us</h2>
                    <form action="">
                        <div className={styles.inputBx}>
                            <input type="text" placeholder="Full Name"/>
                        </div>
                        <div className={styles.inputBx}>
                            <input type="email" placeholder="Email"/>
                        </div>
                        <div className={styles.inputBx}>
                            <textarea name="message" id="" placeholder="Type Mesage Here..."></textarea>
                        </div>
                        <div className={styles.inputBx}>
                            <input type="submit" value="Submit"/>
                        </div>
                        <p className={styles.text}>We would get back to you soon</p>
                
                    </form>
                </div>
            </div>
            </div>
            </>
  )
}

export default contactform