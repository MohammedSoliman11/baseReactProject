import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../../styles/landing-page-styles/scrollButton.css";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className='scroll-to-top-button'>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          variant='btn btn-light secondary-bgColor text-white p-3'
        >
          <i className='bi bi-arrow-up boldFont'></i>
        </Button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
