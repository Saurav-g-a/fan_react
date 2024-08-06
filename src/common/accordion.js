import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className={`accordion-item text-white mb-2 border rounded-se-[24px] cursor-pointer border-[#39484D] p-3 ${isOpen && 'bg-[#122329]'}`}>
    <div className={`accordion-header flex justify-between font-Lufga  ${isOpen ? 'text-[#fff]' : 'text-[#ffffffa6]' } `} onClick={onClick}>
      <span>{title}</span>
      <span>{isOpen ? '-' : '+'}</span>
    </div>
    {isOpen && (
      <div className="accordion-content pl-5 border-l font-Lufga border-blue-700 mt-3 text-[#ffffffa6]">
        {content}
      </div>
    )}
  </div>
);

const CustomAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default CustomAccordion;
