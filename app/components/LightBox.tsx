import React from "react";
import Image from "next/image";

interface LightboxProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
      <div className="relative p-4 bg-white rounded-lg max-w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl"
        >
          ✖
        </button>

        <div className="grid grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={200}
                height={200}
                objectFit="contain"
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;