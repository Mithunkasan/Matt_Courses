/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from '@/components/ui/button';
import React from 'react';

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

const categories: Category[] = [
  {
    id: '1',
    name: 'Running',
    image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg',
    description: 'Performance running gear for every distance'
  },
  {
    id: '2',
    name: 'Basketball',
    image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg',
    description: 'Court-ready styles for game day'
  },
  {
    id: '3',
    name: 'Training',
    image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg',
    description: 'Versatile gear for every workout'
  },
  {
    id: '4',
    name: 'Lifestyle',
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
    description: 'Everyday comfort meets street style'
  }
];

export function CategoryShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Style
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collections designed for every activity and lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm mb-4 opacity-90">{category.description}</p>
                <Button 
                  variant="outline" 
                  className="w-fit border-white text-white hover:bg-white hover:text-black transition-all duration-300 transform group-hover:translate-y-0 translate-y-2"
                >
                  Shop {category.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}