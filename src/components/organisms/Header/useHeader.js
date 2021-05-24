import { useCallback, useEffect, useState } from 'react';

const useHeader = () => {

    const [ windowScroll, setWindowScroll ] = useState(window.pageYOffset);

    const scrollFunction = useCallback(() => {
            setWindowScroll(window.pageYOffset);
        }, [ setWindowScroll ]); 
  
    useEffect(() => {
      window.addEventListener('scroll', scrollFunction);
      return () => window.removeEventListener('scroll', scrollFunction)
    }, []);

    return { windowScroll };

}
 
export default useHeader;