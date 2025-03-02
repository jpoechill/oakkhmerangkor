"use client";

import { useState } from "react";
import Modal from "./MyModal";
import Image from 'next/image';


interface ModalButtonProps {
  imgSrc: string;
  imgAlt?: string;
  images: string[];
}

const ModalButton: React.FC<ModalButtonProps> = ({ imgSrc, imgAlt = "Open Modal", images }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      {/* Clickable Image to Open Modal */}
      <button onClick={() => setIsOpen(true)} className="focus:outline-none">
        <Image src={imgSrc} alt="Open Modal" width="800" height="800" className="" />
      </button>

      {/* Full-Page Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} images={images} />

      {/* <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} images={images}>
        <div className="h-[200vh] bg-gray-100 flex items-center justify-center">
          <p className="text-lg">More Content Here (Scrollable)</p>
        </div>
      </Modal> */}
    </div>
  );
};

export default ModalButton;