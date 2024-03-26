import React from 'react'
import borabora from '../assets/borabora.jpg';
import borabora2 from '../assets/borabora2.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';
import maldives3 from '../assets/maldives3.jpg';
import keywest from '../assets/keywest.jpg'


const Selects = () => {

    const items = [
      { id: 1, src: borabora2, alt: 'Bora Bora ' },
      { id: 2, src: borabora, alt: 'Cozumel' },
      { id: 3, src: maldives, alt: 'Maldives' },
      { id: 4, src: keywest, alt: 'Jamaica' },
      { id: 5, src: maldives2, alt: 'Key West' },
      { id: 6, src: maldives3, alt: 'Antigua' },
    ];
  
    return (
        <div>
            <h1 className='text-center'>Featured Places</h1>
      <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {items.map((item) => (
          <div key={item.id} className='relative'>
            <img className='w-full h-full object-cover' src={item.src} alt={item.alt} />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
              <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>{item.alt}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className='text-center'>Contact us</h1>
      </div>
      </div>
    );
  };
  
  export default Selects;
  