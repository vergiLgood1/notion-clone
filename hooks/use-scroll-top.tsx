import { useEffect, useState } from "react"

export const useScrollTop = (threshold = 10) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScoll = () => {
            if (window.scrollY > threshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScoll);
        return () => window.removeEventListener("scroll", handleScoll);
    }, [threshold] )

    return scrolled;
}