import { useEffect, useState } from "react";
import { TopNavigation } from "./TopNavigation";

const NavigationMenu = () => {
    const [navBackground, setNavBackground] = useState("var(--color-bg)");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setNavBackground("var(--color-white)");
                setScrolled(true);
            } else {
                setNavBackground("var(--color-bg)");
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <TopNavigation backgroundcolor={navBackground} scrolled={scrolled} />
    );
};

export { NavigationMenu };
