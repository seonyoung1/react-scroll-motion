import {useState, useEffect, useRef} from 'react';

export const useMotionEvent = () => {
    const [isActive, setIsActive] = useState(false); //offsetTop > scrollTop ? true : false
    const content = useRef(null);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleScroll = () => {
        let scrollTop = document.documentElement.scrollTop;
        let margin = document.body.clientHeight * 0.7;
        let offset = content.current.offsetTop;
        if( scrollTop > offset - margin ){
            if(!isActive) setIsActive(true);
        }else if( scrollTop < offset ){
            setIsActive(false);
        }
        // console.log(`scrollTop ${scrollTop}, offset ${offset}`);
    };
    return { isActive, content }
};