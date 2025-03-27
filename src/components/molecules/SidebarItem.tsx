import Image from '@/components/atoms/Image';

interface SidebarItemProps {
  iconSrc: string;
  label: string;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href , iconSrc, label }) => (
  <li className="p-4">
    <a href={href} className="flex items-center text-white hover:bg-blue-700 rounded">
      <Image src={iconSrc} alt='logo' width={30} height={30} className='' />
      <span className='text-black'>{label}</span>
    </a>
  </li>
);

export default SidebarItem;