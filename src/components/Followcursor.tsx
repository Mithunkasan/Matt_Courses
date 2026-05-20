'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FollowCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="bg-blue-500 h-[8px] w-[8px] rounded-full fixed top-0 left-0 pointer-events-none z-50"
      animate={{ x: position.x - 4, y: position.y - 4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
    />
  );
};

export default FollowCursor;
