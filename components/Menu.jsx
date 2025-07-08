'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Swal from 'sweetalert2'

function Menu() {
  const specials = [
    {
      id: 1,
      name: 'Greek Salad',
      price: '$12.99',
      description: 'Fresh tomatoes, cucumber, onion, olives, and feta cheese',
      image: '/greek-salad.jpg'
    },
    {
      id: 2,
      name: 'Bruschetta',
      price: '$7.99',
      description: 'Grilled bread rubbed with garlic and topped with olive oil and salt',
      image: '/bruschetta.jpg'
    },
    {
      id: 3,
      name: 'Lemon Dessert',
      price: '$5.99',
      description: 'Homemade lemon pie with fresh mint garnish',
      image: '/lemon-dessert.jpg'
    },
    {
      id: 4,
      name: 'Grilled Fish',
      price: '$15.99',
      description: 'Fresh catch of the day with seasonal vegetables',
      image: '/grilled-fish.jpg'
    }
  ]

const handleOrder = (id) => {
  console.log(id, "id clicked");
  
  Swal.fire({
    title: 'Confirm this Order?',
    text: "You won't be able to revert this!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Order Now!',
    cancelButtonText: 'Cancel',
    background: '#ffffff',
    backdrop: `
      rgba(0,0,0,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `,
    buttonsStyling: false,
    customClass: {
      confirmButton: 'hover:cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg mr-2 transition',
      cancelButton: 'hover:cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition'
    },
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Order Placed!',
        text: 'Your delicious food is on its way!',
        icon: 'success',
        confirmButtonText: 'Great!',
        customClass: {
          confirmButton: 'bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white font-bold py-2 px-4 rounded-lg transition'
        }
      });
    }
  });
};

  return (
    <section className="px-5 py-12 sm:px-8 lg:px-16 bg-lemon-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-lemon-400">This Week's Specials</h2>
          <Link 
            href="/menu" 
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Online Menu
          </Link>
        </div>
        
        <div className="relative">
          <div className="flex overflow-x-auto pb-6 scrollbar-hide space-x-5">
            {specials.map((item) => (
              <div 
                key={item.id} 
                className="flex-shrink-0 w-72 bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-lemon-dark">{item.name}</h3>
                    <span className="text-lemon-primary font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <button className="text-lemon-dark font-bold hover:underline hover:cursor-pointer transition" 
                  onClick={() => handleOrder(item.id)}>
                    Order for Delivery
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu