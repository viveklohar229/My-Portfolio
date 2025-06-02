import React, { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Show button when page is scrolled down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Cleanup
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scroll
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="scroll-to-top"
        >
          &#8679;
        </button>
      )}

      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 40px;
          right: 40px;
          background-color: #007bff;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 28px;
          color: white;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          transition: background-color 0.3s ease, transform 0.3s ease;
          z-index: 1000;
        }
        .scroll-to-top:hover {
          background-color: #0056b3;
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}
