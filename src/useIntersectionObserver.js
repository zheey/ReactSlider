import { useState, useEffect } from 'react';

export const useIntersectionObserver = (ref, { threshold, root, rootMargin }) => {
    const [state, setState] = useState({
       inView: false,
       triggered: false,
       entry: undefined
    });

    const observer = new IntersectionObserver((entries, observerInstance) => {
            if (entries[0].intersectionRatio > 0) {
                setState({
                    inView: true,
                    triggered: false,
                    entry: observerInstance
                });
                observerInstance.observe(ref.current);
            } else {
                observerInstance.observe(ref.current);
                setState({
                    inView: false,
                    triggered: false,
                    entry: observerInstance
                });
            }
            return;
        },
        {
            threshold: threshold || 0,
            root: root || null,
            rootMargin: rootMargin || "0%"
        });

    useEffect(() =>{
        if (ref.current && !state.triggered) {
            observer.observe(ref.current);
        }
    }, []);

    return[state.inView, state.entry];
}

