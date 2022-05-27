import Navbar from "../components/Navbar";
import Image from "next/image";
import styles from "../styles/contact.module.css";

const login = () => {
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
                    <h2>Log In</h2>
                    <form action="">
                        <div className={styles.inputBx}>
                            <input type="email" placeholder="Email-Id"/>
                        </div>
                        <div className={styles.inputBx}>
                            <input type="password" placeholder="Password"/>
                        </div>
                       
                        <div className={styles.inputBx}>
                            <input type="submit" value="Login"/>
                        </div>
                        <p className={styles.text}>Forgot Password : <a className={styles.link} href ="/forgot" >ClickHere</a></p>
                
                        <p className={styles.text}>Don't Have an Account : <a className={styles.link} href ="/signup" >ClickHere</a></p>
                
                    </form>
                </div>
            </div>
            </div>
    </>
  );
};

export default login;
