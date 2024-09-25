import { Player } from '@lottiefiles/react-lottie-player';
import animationAstronot from '../assets/lottie/astronot.json';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center p-20">
            <Player
                src={animationAstronot}
                loop
                autoplay
                style={{ height: '500px', width: '500px' }}
            />
            
            <h1 className="text-3xl font-bold">Page Not Found</h1>
            <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
            <Link to={"/"} className="btn btn-primary mt-4 dark:text-white">Go Back</Link>
        </div>
    )
}

export default NotFound;