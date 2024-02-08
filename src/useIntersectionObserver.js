import { useEffect } from 'react';

function useIntersectionObserver(ref, classToQuery, classToAdd, rootMarginVal = "0px 0px -150px 0px"){
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                console.log(entry.target.className, entry.intersectionRatio)
                entry.target.classList.add(classToAdd);
                observer.unobserve(entry.target)
            }
        })
    }, {threshold: 0.1, rootMargin: rootMarginVal})
    
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