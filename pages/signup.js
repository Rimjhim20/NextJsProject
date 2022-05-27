import Navbar from "../components/Navbar";
import Image from "next/image";
import styles from "../styles/contact.module.css";

const signup = () => {
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
                    <h2>Sign-up</h2>
                    <form action="">
                    <div className={styles.inputBx}>
                            <input type="text" placeholder="Enter name"/>
                        </div>
                        <div className={styles.inputBx}>
                            <input type="email" placeholder="Email-Id"/>
                        </div>
                        <div className={styles.inputBx}>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <div className={styles.inputBx}>
                            <input type="number" placeholder="Graduation Year"/>
                        </div>
                        <div className={styles.inputBx}>
                            <input type="submit" value="Sign-up"/>
                        </div>
                        
                        <p className={styles.text}>Already Have an Account : <a className={styles.link} href ="/login" >ClickHere</a></p>
                
                    </form>
                </div>
            </div>
            </div>
    </>
  );
};

export default signup;
