import "../../login/Login.css";
import React, { useState, useRef, useEffect } from "react";

export default function Home22() {
  const [activeCategory, setActiveCategory] = useState("Semua Kelas");
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineOffset, setUnderlineOffset] = useState(0);
  const categoryRefs = useRef({});

  const categories = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];

  useEffect(() => {
    if (categoryRefs.current[activeCategory]) {
      const currentCategory = categoryRefs.current[activeCategory];
      setUnderlineWidth(currentCategory.offsetWidth / 2);
      setUnderlineOffset(currentCategory.offsetLeft);
    }
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  return (
    <div className="flex items-center space-x-6 relative overflow-x-auto scrollbar-hide whitespace-nowrap py-2 w-dvw">
      {categories.map((category) => (
        <div
          key={category}
          ref={(el) => (categoryRefs.current[category] = el)}
          className={`cursor-pointer text-gray-500 ${
            activeCategory === category ? "text-orange-500 font-semibold" : ""
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </div>
      ))}
      <div
        className="bg-orange-500 h-1 rounded-full justify-start absolute bottom-0 transition-all duration-300"
        style={{
          width: `${underlineWidth}px`,
          transform: `translateX(${underlineOffset}px)`,
        }}
      />
    </div>
    // <div className="b-2-2">
    //   <a className="b-2-2-1" href="#">
    //     Semua Kelas
    //   </a>
    //   <a href="#">Pemasaran</a>
    //   <a href="#">Desain</a>
    //   <a href="#">Pengembangan Diri</a>
    //   <a href="#">Bisnis</a>
    // </div>
  );
}
