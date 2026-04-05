
'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ImageChangeOnHover({

}) {


  const [currImgIndex, setCurrImgIndex] = useState(0);

  const imgList = [
    '/letters_lg/gar_082923.jpg',
    '/letters_lg/ka_090223.jpg',
    '/letters_lg/go_090523.jpg',
    '/letters_lg/ko_090923.jpg',
    '/letters_lg/ngo_092723.jpg',
    '/letters_lg/jaw_092723.jpg',
    '/letters_lg/chaw_092923.jpg',
    '/letters_lg/jor_long_100923.jpg',
    '/letters_lg/cho_102423.png',
    '/letters_lg/yno_sm.jpg',
    '/letters_lg/daw_010824.png',
    '/letters_lg/taw.jpg',
    '/letters_lg/doe.jpg',
    '/letters_lg/tor.jpg',
    '/letters_lg/naw.jpg',
    '/letters_lg/thaw_013124.jpg',
    '/letters_lg/ta_012424.jpg'
  ]

  let handleImgClick = (imgIndex: number) => {
    var element = document.body
    var modal = document.getElementById("modal")!

    setCurrImgIndex(imgIndex)

    if (document.body.classList.contains("overflow-hidden")) {
      //close modal
      element.classList.remove("overflow-hidden")
      modal.classList.add("hidden");
      // modal.classList.remove("visible");
      // modal.classList.add("invisible");
    } else {
      //open modal
      element.classList.add("overflow-hidden")
      modal.classList.remove("hidden");
      // modal.classList.remove("opacity-0");
      // modal.classList.add("opacity-100");
    }
  }

  let navigateImgPrev = () => {
    console.log(currImgIndex)
    if (currImgIndex - 1 < 0) {
      setCurrImgIndex(imgList.length - 1)
    } else {
      setCurrImgIndex(currImgIndex - 1)
    }
  }

  let navigateImgNext = () => {
    console.log(currImgIndex)
    if (currImgIndex + 1 >= imgList.length) {
      setCurrImgIndex(0)
    } else {
      setCurrImgIndex(currImgIndex + 1)
    }
  }

  let closeModal = () => {
    var element = document.body
    var modal = document.getElementById("modal")!
    modal.classList.add("hidden");
    // modal.classList.remove("visible");
    // modal.classList.add("invisible");
    element.classList.remove("overflow-hidden")
  }

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      console.log(e.code)
      if (e.code === 'ArrowLeft') {
        navigateImgPrev();
      } else if (e.code === 'ArrowRight') {
        navigateImgNext()
      } else if (e.code === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener("keydown", keyDownHandler);
    // clean up
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  return (
    <div className='relative'>
      <div className='overflow-hidden hidden fixed top-0 bg-[#8DD9BF]/80 w-screen h-screen' id="modal">
        <div className='absolute pr-10 pt-7 flex justify-end w-full'>
          <Image onClick={() => { closeModal() }} src="/btn-close.svg" className="w-50 rounded cursor-pointer" alt="Aksar Khmer GA" width="20" height="20"></Image>
        </div>
        <div className='flex items-center px-5 lg:px-10'>
          <div onClick={() => { navigateImgPrev() }} className='w-full flex items-center min-h-full'>
            <Image src="/btn-left.svg" className="w-50 rounded cursor-pointer" alt="Aksar Khmer GA" width="20" height="20"></Image>
          </div>
        </div>
        <div className='flex items-center justify-center w-full'>
          <Image onClick={() => { navigateImgNext() }} src={imgList[currImgIndex]} className="w-50 rounded cursor-crosshair" alt="Aksar Khmer GA" width="800" height="800"></Image>
        </div>
        <div className='flex items-center px-5 lg:px-10'>
          <div onClick={() => { navigateImgNext() }} className='w-full flex items-center min-h-full'>
            <Image src="/btn-right.svg" className="w-50 rounded cursor-pointer" alt="Aksar Khmer GA" width="20" height="20"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}