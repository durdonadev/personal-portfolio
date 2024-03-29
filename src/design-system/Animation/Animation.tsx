import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimateOnScrollProps } from "./types";

const AnimateOnScroll = ({
    children,
    notLazy = false,
    className,
    noScale,
    duration = 0.6,
    threshold = 0.5,
    x = 0,
    y = 0,
    scale = 0.7,
    delay = 0.2
}: AnimateOnScrollProps) => {
    const { ref, inView } = useInView({
        threshold: threshold,
        triggerOnce: true
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    const variants: Variants = {
        hidden: {
            opacity: 0,
            scale: noScale ? 1 : scale,
            y: y,
            x: x
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                ease: "easeOut",
                delay: delay
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            style={{ willChange: "transform, opacity" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export { AnimateOnScroll };
