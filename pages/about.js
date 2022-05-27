import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
import Image from "next/image";
const about = () => {
  return (
    <>
      <Image 
     layout='fill'
      src="/back.jpg">
          </Image>
      <div className={styles.wrap}>
    <Navbar/>
    <div className={styles.container}>
   <div className={styles.image}>
   <Image 
     height="300"
     width="400"
      src="/about.png">
          </Image>
   </div>
    
    <div className={styles.text}>
      <h1>
        About Us
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
         ut suscipit, voluptate assumenda earum mollitia officiis officia 
         impedit eligendi ipsum quos sed voluptatibus non sint aliquid saepe?
          Libero aperiam a laudantium,
         quaerat neque, nesciunt ex nisi in odio officiis unde.</p>

         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
         ut suscipit, voluptate assumenda earum mollitia officiis officia 
         impedit eligendi ipsum quos sed voluptatibus non sint aliquid saepe?
          Libero aperiam a laudantium,
         quaerat neque, nesciunt ex nisi in odio officiis unde.</p>
    </div>
    
                </div>

                </div>
    </>
  );
};

export default about;
