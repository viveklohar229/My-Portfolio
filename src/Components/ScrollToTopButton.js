import React, { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
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
          <span>&#8679;</span>
        </button>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .scroll-to-top {
          position: fixed;
          bottom: 25px; /* Mobile par thoda upar */
          right: 20px;  /* Mobile par kinare se thoda door */
          background-color: #ffc107; /* Aapke theme ka warning color */
          border: none;
          border-radius: 50%;
          width: 45px;  /* Mobile friendly size */
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #0b132b; /* Contrast color */
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
          z-index: 9999; /* Sabse upar dikhne ke liye */
        }

        .scroll-to-top:hover {
          background-color: #e5ac00;
          transform: translateY(-5px);
        }

        /* Desktop specific adjustments */
        @media (min-width: 768px) {
          .scroll-to-top {
            bottom: 40px;
            right: 40px;
            width: 50px;
            height: 50px;
          }
        }

        /* Animation for appearance */
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .scroll-to-top {
          animation: fadeIn 0.3s ease-out;
        }
      `}} />
    </>
  );
}