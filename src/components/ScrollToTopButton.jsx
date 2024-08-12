import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-12 right-5 p-3 bg-neutral-950 dark:bg-gray-100 text-white rounded-full shadow-lg hover:bg-gray-300"
      >
        <FaArrowUp className=" text-gray-100 dark:text-neutral-950" />
      </button>
    )
  );
};

export default ScrollToTopButton;
