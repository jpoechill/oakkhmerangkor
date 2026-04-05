"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, images }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex justify-center items-center">
      {/* Full-page modal container */}
      <div className="fixed inset-0 bg-white flex flex-col">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
          onClick={onClose}
        >
          ✖
        </button>
        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur modi incidunt perferendis neque ab vero rem sint tenetur quidem nobis? Aspernatur quos ducimus quis, id at commodi animi. Totam voluptatum nihil similique quia veniam dignissimos, mollitia facilis numquam, ipsam veritatis unde, blanditiis laudantium beatae iure possimus sint quos dicta suscipit exercitationem saepe deleniti cumque nemo? Maiores, labore id. Quidem sequi sit molestiae deserunt vitae, nesciunt, quae nobis ipsam, recusandae doloribus harum nostrum ut voluptatum asperiores nihil eius non rerum illum. Quidem dolore porro, natus fuga ratione nobis, eligendi qui eum odit a optio deserunt voluptate aliquam rem reiciendis repellat sit saepe atque possimus consequuntur, voluptates aperiam maiores modi quae? Corporis non sed quibusdam nesciunt consequatur, perspiciatis ipsa repellendus architecto libero rem reprehenderit autem obcaecati pariatur! Ullam culpa similique voluptate ut, dolores ea sapiente? Quo dolore animi dicta. Nisi dolorum, fugit pariatur autem est nesciunt quis voluptate neque. Fugit itaque temporibus quaerat perferendis tenetur. Iure saepe sint minus aliquam nemo in, voluptatem ipsum perferendis, repellendus ab, quod cupiditate dolorem ad nisi. Fugit voluptatum ex sit sunt dolorem blanditiis ullam quaerat. Porro atque error hic molestias ex beatae natus a iste assumenda quod, aperiam labore minima cupiditate quo architecto harum quae magnam. */}
        {/* Scrollable image list */}
        <div className="overflow-y-auto w-full p-6">
          {images.toString().split(",").map((src, index) => (
            <div key={index} className=" mb-6">
              <div className="border">
                {index + 1}
                <Image src={src} ref={index.toString()} alt={`Image ${index + 1}`} height={500} width={500} className="w-full" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Modal;