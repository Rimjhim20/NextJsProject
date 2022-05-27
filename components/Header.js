import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <>
    <header className={styles.header}>
       <Navbar/>
      <div className={styles.text_box}>
        <h1 className={styles.heading_primary}>
          <span className={styles.heading_primary_main}>
            Expand the limits and Reach for the top
          </span>
          <span className={styles.text}>We are helping your ideal need</span>
        </h1>
        <a
          href="#"
          className={`${styles.btn}  ${styles.btn_animated}`}>
          Join Us
        </a>
      </div>
      <div className={styles.image}>
      <Image 
      width="650"
      height="400"
      objectFit="cover"
          src="/job.png">
          </Image>
         
          </div>
    </header>
    </>
  );
};

export default Header;
