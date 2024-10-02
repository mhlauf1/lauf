import { useState, useEffect } from "react";

function useIsDesktop(breakpoint = 768) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= breakpoint);
        };

        // Set initial value
        handleResize();

        // Listen for resize events
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isDesktop;
}

export default useIsDesktop;
