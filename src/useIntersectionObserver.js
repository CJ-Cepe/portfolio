import { useEffect } from 'react';

function useIntersectionObserver(ref, classToQuery, classToAdd){
    console.log('useIntersectionObserver')
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add(classToAdd);
            }
        })
    }, {threshold: 0.1, rootMargin: "0px 0px -150px 0px"})
    
    useEffect(() => {
        const segments = ref.current.querySelectorAll("." + classToQuery)
        if(segments){
            segments.forEach(segment => {observer.observe(segment)})
        }
    
        return () => {
            if(segments){
                segments.forEach(segment => {observer.unobserve(segment)})
            }
        } 
    
    }, [])
}

export default useIntersectionObserver