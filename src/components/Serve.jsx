import '../style/Serve.css';
import { motion,   } from "framer-motion";
import { useRef } from "react";

const Serve = () => {

    const targetRef = useRef(null);
    /*const { scrollYProgress } = useScroll({
    target: targetRef,
  });*/

  //const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    return (
        <div className='s'>
        <div className='serve' >
            <div className='text-serve'>
                <h1>What we serve</h1>
                <p>
                    At Djuka, we specialize in delivering cutting-edge solutions tailored to meet the demands of today’s
                    digital world. Whether you need robust web applications, sleek and responsive mobile apps, immersive XR 
                    (Extended Reality) experiences, or high-performance desktop applications, our team is equipped to bring your 
                    ideas to life.
                </p>
            </div>
            <motion.div  className='card-serve' >
           
                <div className="card" style={{backgroundColor:"#171717",color:"white"}}>
                    <div className='num'>01</div>
                    <h1 className='card-hed'>Web Development Mastery</h1> 
                    <p className='card-hedD'>Build fast, responsive websites tailored to your brand with cutting-edge technologies.</p>
                </div>
                <div className="card" style={{backgroundColor:"#bdbdff",color:"black"}}>
                    <div className='num'>02</div>
                    <h1 className='card-hed'>Mobile App Solutions</h1> 
                    <p className='card-hedD'>Create seamless mobile experiences that connect with users on iOS and Android platforms.</p>
                </div>
                <div className="card" style={{backgroundColor:"#171717",color:"white"}}>
                    <div className='num'>03</div>
                    <h1 className='card-hed'>Desktop Application Power</h1> 
                    <p className='card-hedD'>Create powerful desktop applications designed for performance and user efficiency.</p>
                </div>
                <div className="card" style={{backgroundColor:"#bdbdff",color:"black"}}  ref={targetRef}>
                    <div className='num'>04</div>
                    <h1 className='card-hed'>Immersive XR Experiences</h1> 
                    <p className='card-hedD'>Explore new dimensions with innovative AR, VR, and MR solutions for your business.</p>
              </div>
            </motion.div>
            </div>
        </div>
    );
}

export default Serve;
