import Image from "@/components/atoms/Image";
import NotificationItem from '@/components/molecules/NotificationItem';

const notifications = [
  {
    id: 1,
    src: "/filter.svg",
    alt: "Avatar",
    name: "Brian Griffin",
    timestamp: "5 days ago",
  },
  {
    id: 2,
    src: "/filter.svg",
    alt: "Avatar",
    name: "Lucas Jenvrain",
    timestamp: "7 days ago",
  },
  // ... more notifications
];

export default function NotificationPage() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="container mx-auto p-4">
        <div className="mb-4 flex">
          <h1 className="text-2xl font-semibold">Notifications</h1>
          <div className="ml-auto flex items-center">
            <button className="w-36 h-12 bg-white rounded-full flex items-center justify-center mr-4">
              <p>Filter</p>
              <Image src="/filter.svg" alt="filter" className="w-8 h-8" width={8} height={8} />
            </button>
          </div>
        </div>
        <div className="space-y-2">
          {notifications.map((notification: any) => (
              <NotificationItem
                key={notification.id}
                src={notification.src}
                alt={notification.alt}
                name={notification.name}
                timestamp={notification.timestamp}
              />
          ))}
        </div>
      </div>
    </div>
  );
}
