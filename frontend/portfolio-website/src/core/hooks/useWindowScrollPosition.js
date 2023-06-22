import { useState, useEffect } from "react";
import useThrottle from "./useThrottle";

/**
 * Tracks the window scroll position with throttling.
 * @returns {number} - The throttled window scroll position.
 */
const useWindowScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const throttledScrollPosition = useThrottle(scrollPosition, 250); // Adjust throttle time in milliseconds as needed
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return throttledScrollPosition;
  };
  
  export default useWindowScrollPosition;
  
/**
 * The above code defines a custom hook called useWindowScrollPosition that tracks the window 
 * scroll position with throttling. It returns the throttled window scroll position.
 * 
 * Inside the hook, it uses useState to define a state variable scrollPosition to store the 
 * current scroll position. It also utilizes the useThrottle hook to throttle the scrollPosition 
 * state with a delay of 250 milliseconds. You can adjust the throttle time as needed by 
 * modifying the value.
 * 
 * The hook utilizes useEffect to add a scroll event listener to the window. When a scroll 
 * event occurs, the handleScroll function is called, updating the scrollPosition state with 
 * the current window scroll position using window.scrollY. The hook also removes the scroll 
 * event listener when the component unmounts, preventing memory leaks.
 * 
 * Finally, the hook returns the throttledScrollPosition which represents the throttled window 
 * scroll position.
 * 
 * Note: Make sure to include the appropriate import statement for the useThrottle hook from 
 * the specified file.
 */