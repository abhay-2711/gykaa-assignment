import React from 'react';
import './overview.css';
import { useEffect, useState, useRef } from 'react';
import { getColumnCount } from './../../utils/getColumnCount.js';
import WorldIcon from '../Icons/WorldIcon.jsx';
import BubbleIcon from '../Icons/BubbleIcon.jsx';
import SquaresIcon from '../Icons/SquaresIcon.jsx';
import GlobeIcon from '../Icons/GlobeIcon.jsx';

const OverviewCarousel = () => {

  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [columnCount, setColumnCount] = useState(getColumnCount());
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [columnWidth, setColumnWidth] = useState((viewportWidth - (20 * 2)) / columnCount);
  const [isHovering, setIsHovering] = useState(false);
  const [disableHover, setDisableHover] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    fetch('data/overviewData.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setOriginalData(data);
      });
  }, []);

  // Update column count and column width on resize
  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount());
      setViewportWidth(window.innerWidth);
      setColumnWidth((window.innerWidth - (20 * 2)) / getColumnCount());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check if the carousel is in view
  const carouselRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsInView(entries[0].isIntersecting);
    });

    const currentCarouselRef = carouselRef.current;

    if (currentCarouselRef) {
      observer.observe(currentCarouselRef);
    }

    return () => {
      if (currentCarouselRef) {
        observer.unobserve(currentCarouselRef);
      }
    };
  }, []);

  // Create carousel effect and inject and remove cards from the data array
  useEffect(() => {
    let interval;

    if (isInView && !isHovering) {
      interval = setInterval(() => {
        setData(prevData => {
          const activeIndex = prevData.findIndex(item => item.active);
          const remainingCards = prevData.length - activeIndex;
          let newData = [...prevData];
          if (remainingCards <= 6) {
            newData = [...newData, ...originalData];
            newData.splice(0, 4);
          }
          const nextActiveIndex = (activeIndex + 1) % newData.length;
          return newData.map((item, index) => ({
            ...item,
            active: index === nextActiveIndex
          }));
        });
      }, 4000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [originalData, isHovering, isInView]);

  // Handle card click
  const handleCardClick = (clickedIndex) => {
    setData(prevData => {
      let newData = [...prevData];
      let newActiveIndex = clickedIndex;
      if (newData.length - clickedIndex < 6) {
        newData = [...newData, ...originalData.slice(0, 4)];
      } else if (clickedIndex < 6) {
        const itemsToAdd = originalData.slice(0, 4);
        newData = [...itemsToAdd, ...newData];
        newActiveIndex += 4; // Actualiza el índice activo
      }

      return newData.map((item, index) => ({
        ...item,
        active: index === newActiveIndex
      }));
    });

    setDisableHover(true);
    setTimeout(() => setDisableHover(false), 800);
  };

  // Calculate the position and the z-index of each card
  function calculateXPosition(index, activeIndex) {
    const distanceFromActive = index - activeIndex;
    const position = distanceFromActive * columnWidth * 3.5;
    return `${position}px`;
  }

  function calculateYPosition(index, activeIndex, columnWidth) {
    const distanceFromActive = Math.abs(index - activeIndex);
    if (index === activeIndex) {
      return '-2px';
    } else if (distanceFromActive % 2 === 0) {
      return `${columnWidth / 2 - 5}px`;
    }
    return `${columnWidth - 5}px`;
  }

  function calculateZIndex(index, activeIndex) {
    const distanceFromActive = Math.abs(index - activeIndex);
    if (index === activeIndex) {
      return 50;
    }
    return 50 - distanceFromActive;
  }

  // Get stroke color for icons
  function getStrokeColor(isActive) {
    return isActive ? '#FFFFFF' : '#221B35';
  }

  // Get active index
  const activeIndex = data.findIndex(item => item.active);

  return (
    <div className="carousel-container" ref={carouselRef}>
      {data.map((item, index) => (
        <div
          className={`carousel-card ${item.active ? 'active' : ''}`}
          key={index}
          style={{
            '--card-translate-x': calculateXPosition(index, activeIndex),
            '--card-translate-y': calculateYPosition(index, activeIndex, columnWidth),
            '--card-z-index': calculateZIndex(index, activeIndex),
            pointerEvents: disableHover ? 'none' : 'auto'
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => handleCardClick(index)}
        >
          <div className="carousel-card-top">
            <h3>{item.title}</h3>
            {item.icon === 'world' ? <WorldIcon stroke={getStrokeColor(item.active)} />
              : item.icon === 'bubble' ? <BubbleIcon stroke={getStrokeColor(item.active)} />
              : item.icon === 'squares' ? <SquaresIcon stroke={getStrokeColor(item.active)} />
              : <GlobeIcon stroke={getStrokeColor(item.active)} /> }
          </div>
          <div className="carousel-card-bottom">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OverviewCarousel;