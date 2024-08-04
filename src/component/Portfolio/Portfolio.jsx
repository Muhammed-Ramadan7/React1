import React, { useState } from 'react';
import { FaStar, FaPlus } from 'react-icons/fa';
import port1 from '../../assets/img/portfoio/poert1.png';
import port2 from '../../assets/img/portfoio/port2.png';
import port3 from '../../assets/img/portfoio/port3.png';
import port4 from '../../assets/img/portfoio/poert11.png';
import port5 from '../../assets/img/portfoio/port22.png';
import port6 from '../../assets/img/portfoio/port33.png';

export default function Portfolio() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className='min-h-screen bg-white'>
      <h1 className='size text-gray-800 font-extrabold flex justify-center mb-0'>Portfolio</h1>
      <div className=''>
        <div className="w-full relative flex teal justify-center items-center">
          <div className="starhead text-xl relative">
            <span className="text-gray-800 star-icon">{<FaStar />}</span>
          </div>
        </div>
      </div>
      <div className='container grid grid-cols-3 gap-4 max-md:grid max-md:grid-cols-2 max-sm:grid max-sm:grid-cols-1'>
        {[port1, port2, port3, port4, port5, port6].map((image) => (
          <div className='relative port-img' onClick={() => openModal(image)}>
            <img src={image} className='w-full overflow-hidden rounded-lg relative  mb-3' alt=""  />
            <div className='layer rounded-lg flex justify-center items-center icons text-white'>
              <FaPlus />
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50' onClick={closeModal}>
          <img src={modalImage} className=' rounded-lg' alt="" />
        </div>
      )}
    </div>
  );
}
