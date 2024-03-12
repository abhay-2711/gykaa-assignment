import React from 'react';
import './faq.css';
import { useEffect, useState } from 'react';
import FaqItem from './FaqItem';

const FaqCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data/faqData.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <>
      {data.map((faq, index) => (
        <FaqItem faq={faq} index={index} key={index} />
      ))}
    </>
  )
}

export default FaqCard