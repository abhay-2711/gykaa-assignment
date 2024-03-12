import React from 'react';
import './faq.css';
import { useState, useRef, useEffect } from 'react';

const FaqItem = ({ faq, index }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState();
  const descriptionRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (descriptionRef.current) {
      if (isOpen) {
        const scrollHeight = descriptionRef.current.scrollHeight;
        setMaxHeight(`${scrollHeight}px`);
      } else {
        setMaxHeight('0px');
      }
    }
  }, [isOpen]);

  return (
    <div className="faq-card" key={index}>
      <div className="faq-card-title" onClick={toggleCollapse}>
        <p className="faq-card-title-tag">0{index + 1}</p>
        <p className="faq-card-title-name">{faq.title}</p>
      </div>
      <div
        className={`faq-card-description ${isOpen ? 'open' : 'closed'}`}
        style={{ maxHeight }}
        ref={descriptionRef}
        dangerouslySetInnerHTML={{ __html: faq.description }}
      >
      </div>
    </div>
  );
}

export default FaqItem