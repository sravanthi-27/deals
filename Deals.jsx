import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import DealCard from '../utils/DealCard';
import d1 from '../assets/d1.png';
import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png';
import d4 from '../assets/d4.png';
import d5 from '../assets/d5.png';
import d6 from '../assets/d6.png';

// Use lazy loading for images
const dealsData = [
   { image: d1, heading: "Yogasana Workshop", title: "The Rusty Spur Saloon", location: "Gurugram, India" },
    { image: d2, heading: "Yogasana Workshop", title: "The Rusty Spur Saloon", location: "Gurugram, India" },
    { image: d3, heading: "Yogasana Workshop", title: "The Revitalizing Embrace", location: "Gurugram, India" },
    { image: d4, heading: "Yogasana Workshop", title: "The Rusty Spur Saloon", location: "Gurugram, India" },
    { image: d5, heading: "Yogasana Workshop", title: "The Rusty Spur Saloon", location: "Gurugram, India" },
    { image: d6, heading: "Yogasana Workshop", title: "The Revitalizing Embrace", location: "Gurugram, India" },
  ];


function ServicesHeading() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * 0.255;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-[#FBFBFB] relative py-10">
      <h2 className="hidden md:block absolute left-0 top-[60px] text-[80px] lg:text-[140px] font-bold text-gray-200 uppercase z-0 w-screen px-4">
        DEALS
      </h2>

      <div className="relative w-[94%] mx-auto py-8 md:py-20 z-10">
        <div className="flex items-center w-full md:px-6">
          <h3 className="text-xl md:text-2xl font-bold text-black whitespace-nowrap">
            DEALS AROUND YOU
          </h3>
          <div className="flex-1 mx-4 h-[2px] bg-black" />
          <Link to="/deals">
            <button className="text-sm sm:text-base text-[#BF6AE0] whitespace-nowrap">
              View all
            </button>
          </Link>
        </div>

        <div className="relative mt-14 md:px-6">
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-4 pl-2 gap-5 pr-[30vw] md:pr-0"
            style={{
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}
          >
            {dealsData.map((deal, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[65vw] md:w-[24.5%]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <Link to={`/deals/${idx + 1}`}>
                  <DealCard 
                    image={deal.image}
                    heading={deal.heading}
                    title={deal.title}
                    location={deal.location}
                  />
                </Link>
              </div>
            ))}
            <div className="flex-shrink-0 w-[1px] md:w-[24.5%]"></div>
          </div>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesHeading;