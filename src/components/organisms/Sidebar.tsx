import Image from "@/components/atoms/Image";
import SidebarItem from "@/components/molecules/SidebarItem";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-white h-screen w-40 border-r-2 border-b-main-color">
      <div className="flex items-center justify-center p-[25px] border-b-2 border-b-main-color">
        <Image src="/logo.svg" alt='logo' width={46} height={46} className="" />
      </div>
      <nav>
        <ul className="space-y-2">
          <SidebarItem iconSrc="/logoDashboard.svg" label="Dashboard" href='/dashboard' />
          <SidebarItem iconSrc="/logoFileDashboard.svg" label="Documents" href='/dashboard/document' />
          {/* Ajoutez d'autres éléments de la barre latérale ici */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;