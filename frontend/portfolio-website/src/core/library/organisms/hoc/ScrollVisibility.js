import { useEffect, useState, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import useWindowScrollPosition from "@/core/hooks/useWindowScrollPosition";
import React from "react";

/**
 * A higher-order component (HOC) that adds scroll visibility behavior to its children.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The children components.
 * @param {Object} props.styles - The CSS styles object.
 * @param {string} props.baseClass - The base CSS class name.
 * @param {string} [props.scrollOperator="lte"] - The scroll operator to determine visibility.
 * @param {string} [props.rootMargin="-50%"] - The root margin for the intersection observer.
 * @returns {ReactNode} - The wrapped component with scroll visibility behavior.
 */
const ScrollVisibility = ({ children, styles, baseClass, scrollOperator = "lte", rootMargin = "-50%" }) => {
    const _ref = useRef();
  
    const scrollPosition = useWindowScrollPosition();
  
    const [halfVisible, setHalfVisible] = useState(false);
    const [visible, setVisible] = useState(false);
  
    const { ref: halfInViewRef, inView: halfInView } = useInView({ triggerOnce: false, rootMargin: `${rootMargin} 0px` });
    const { ref: inViewRef, inView } = useInView({ triggerOnce: true, rootMargin: "100px 0px" });
  
    /**
     * Sets the combined refs for the component.
     * @param {ReactNode} node - The DOM node of the component.
     */
    const setRefs = useCallback(
      (node) => {
        if (_ref) {
          _ref.current = node;
        }
        inViewRef(node);
        halfInViewRef(node);
      },
      [_ref, inViewRef, halfInViewRef]
    );
  
    useEffect(() => {
      if (inView) {
        setVisible(true);
      }
    }, [inView]);
  
    useEffect(() => {
      setHalfVisible(halfInView);
    }, [halfInView]);
  
    const scrollPositionBool = {
      lte: () => scrollPosition <= 10,
      gte: () => scrollPosition >= 10,
    };
  
    const baseClasses = classNames(baseClass, {
      [styles["base--inactive"]]: !visible,
      [styles["base--half"]]: halfVisible && Boolean(scrollPositionBool[scrollOperator]()),
    });
  
    // Note: Make sure the children components can receive `ref` and `className` props
    return React.cloneElement(children, { ref: setRefs, className: baseClasses });
  };
  
  export default ScrollVisibility;
  
/**
 * The above code defines a higher-order component (HOC) called ScrollVisibility that adds 
 * scroll visibility behavior to its children components.
 * 
 * The component accepts the following props:
 * children (ReactNode): The children components to be wrapped with scroll visibility behavior.
 * styles (Object): The CSS styles object.
 * baseClass (string): The base CSS class name.
 * scrollOperator (string, optional): The scroll operator to determine visibility. Defaults to 
 * "lte" (less than or equal to).
 * 
 * rootMargin (string, optional): The root margin for the intersection observer. Defaults to "-50%".
 * The ScrollVisibility component utilizes the useWindowScrollPosition hook to track the window 
 * scroll position. It also utilizes the useInView hook from react-intersection-observer to 
 * determine if the component is in the viewport.
 * 
 * Inside the component, it manages state variables halfVisible and visible to track the visibility 
 * status. It sets up intersection observers with different root margins for half visibility 
 * and full visibility.
 */