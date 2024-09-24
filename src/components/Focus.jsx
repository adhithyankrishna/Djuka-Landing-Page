import cover from '../asset/cover.jpg'
import '../style/Focus.css'

const Focus = ()=>{
    return (
        <div className='focus'>
            <div className='f-word'>
                <h1>
                Djuka: Your Future, Our Focus.
                </h1>
                <p>
                Djuka is your partner in digital innovation. We specialize in creating tailored solutions that drive growth and engagement.
                 With a focus on cutting-edge technology and exceptional design, we deliver results that exceed expectations.
                  Trust Djuka to bring your ideas to life.
                </p>
                <h2>01 Innovative Solutions</h2>
                <p>We specialize in delivering cutting-edge digital solutions tailored to your unique needs.</p>
                <h2>01 Innovative Solutions</h2>
                <p>We specialize in delivering cutting-edge digital solutions tailored to your unique needs.</p>
                <h2>01 Innovative Solutions</h2>
                <p>We specialize in delivering cutting-edge digital solutions tailored to your unique needs.</p>

            </div>
            <div className='f-image'>
                <img src={cover} alt="cover"></img>
            </div>
        </div>
    )
}


export default Focus;