import React from 'react';
import Image from '@/components/atoms/Image';

interface CardItemProps {
  iconSrc: string;
  description: string;
  count: number;
}

const CardItem: React.FC<CardItemProps> = ({ iconSrc, description, count }) => {
    return (
        <div className="flex items-center justify-center w-full h-20 bg-white rounded-md">
            <Image src={iconSrc} alt="dashboard icon" width={34} height={34} className="mr-8" />
            <p className="text-gray-600 italic text-xl">{description}</p>
            <span className="ml-8 font-bold text-xl">{count}</span>
        </div>
    );
};

export default CardItem;
