import { useState, useEffect, useRef } from "react";

/**
 * Throttles the value by delaying its update using a specified delay.
 * @param {any} value - The value to be throttled.
 * @param {number} delay - The delay in milliseconds.
 * @returns {any} - The throttled value.
 */
const useThrottle = (value, delay) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const timeoutRef = useRef(null);
  const previousValueRef = useRef(value);

  useEffect(() => {
    if (value !== previousValueRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setThrottledValue(value);
        previousValueRef.current = value;
      }, delay);
    }
  }, [value, delay]);

  return throttledValue;
};

export default useThrottle;

/**
 * The above code defines a custom hook called useThrottle that throttles the provided value 
 * by delaying its update using a specified delay. It returns the throttled value.
 * 
 * value: The value to be throttled.
 * delay: The delay in milliseconds.
 * The hook internally uses useState, useRef, and useEffect from the React library. It creates 
 * a state variable throttledValue to store the throttled value. It also uses a timeoutRef to 
 * keep track of the timeout and a previousValueRef to store the previous value.
 * 
 * Inside the useEffect hook, the function checks if the value has changed from the previous 
 * value. If it has changed, it clears the previous timeout (if any) using clearTimeout and 
 * sets a new timeout using setTimeout. After the delay, it updates the throttledValue with 
 * the new value and updates the previousValueRef with the new value.
 * 
 * Finally, the hook returns the throttledValue.
 * 
 * Note: Make sure to include the appropriate import statements for useState, useEffect, and 
 * useRef from the React library.
 */