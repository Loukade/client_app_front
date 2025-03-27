import Image from '@/components/atoms/Image';

interface NotificationItemProps {
  src: string;
  alt: string;
  name?: string; // Optional name property
  timestamp?: string; // Optional timestamp property
  className?: string;
}

const NotificationItem: React.FC<NotificationItemProps>  = ({ src, alt, name, timestamp }) => {
  return (
    <div className='bg-white shadow rounded-lg p-4 flex items-center justify-between'>
      <div className="flex items-center">
        <Image src={src} alt={alt} className="h-10 w-10 rounded-full mr-3" width={10} height={10} />
        <div className="text-sm font-medium text-gray-900">
          {name}
          <div className="text-xs text-gray-500">{timestamp}</div>
        </div>
      </div>
      <button className="text-indigo-600 hover:text-indigo-500">Voir</button>
    </div>
  );
};

export default NotificationItem;
