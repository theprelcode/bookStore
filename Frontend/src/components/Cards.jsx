import React, { useEffect, useRef } from 'react';

function Cards({ item }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    let maxCardHeight = 0;
    cards.forEach(card => {
      const cardHeight = card.offsetHeight;
      if (cardHeight > maxCardHeight) {
        maxCardHeight = cardHeight;
      }
    });
    cards.forEach(card => {
      card.style.height = `${maxCardHeight}px`;
    });
  }, []);

  return (
    <>
      <div className='mt-4 my-3 p-3'>
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border" ref={cardRef} style={{ height: '100%' }}>
          <figure className="image-container mt-6" style={{ height: '200px' }}>
            <img src={item.image} alt="NA" style={{ height: '100%', width: 'auto' }} />
          </figure>
          <div className="card-body" style={{ height: 'calc(100% - 200px)' }}>
            <h2 className="card-title">{item.name}</h2>
            {item.category && (
              <div className="badge badge-secondary ml-2">{item.category}</div>
            )}
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Rs {item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border border-2px hover:bg-pink-500 hover:text-white ">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
