import React from "react";

const Gallery = () => {
  const galleryItems = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    color: "bg-slate-400",
    width: "w-96",
    height: "h-56",
  }));

  return (
    <div className="grid md:grid-cols-2 gap-10">
      {galleryItems.map((item) => (
        <div
          key={item.id}
          className={`rounded-lg ${item.color} ${item.width} ${item.height}`}
        ></div>
      ))}
    </div>
  );
};

export default Gallery;
