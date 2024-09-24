import banner from '../asset/banner.png';
import '../style/banner.css'


const ImageBanner = () => {
    return (
        <div className='banner' style={{ width: "100%", height: "80vh" }}>
            <img src={banner} alt='banner' style={{ objectFit: "cover", width: "100%", height: "100%" }} />
        </div>
    );
}

export default ImageBanner;
