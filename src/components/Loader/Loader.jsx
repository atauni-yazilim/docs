import { useEffect, useState } from 'react';
import "./Loader.css";

const Loader = () => {

    const [playAnimation, setPlayAnimation] = useState(false);

    useEffect(() => {
        const onPageLoad = () => {
            setPlayAnimation(true);
        };

        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    return (
        !playAnimation ? 
        <div className="cup">
        
        </div> : <></>
    )
}

export default Loader;