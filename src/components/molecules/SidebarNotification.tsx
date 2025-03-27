interface SidebarProps {
  onClose: () => void;
}

const SidebarNotification: React.FC<SidebarProps> = ({ onClose }) => (
  <div className="fixed inset-y-0 right-0 w-96 bg-white p-4 top-24 border-t-2 border-b-main-color">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold">Notifications</h2>
      <a href="/dashboard/user/notification" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
        Voir plus
      </a>
      <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M18.364 5.636c-0.781-0.781-2.048-0.781-2.829 0l-5.535 5.536-5.535-5.536c-0.781-0.781-2.048-0.781-2.829 0s-0.781 2.048 0 2.829l5.536 5.535-5.536 5.535c-0.781 0.781-0.781 2.048 0 2.829 0.781 0.781 2.048 0.781 2.829 0l5.535-5.536 5.535 5.536c0.781 0.781 2.048 0.781 2.829 0 0.781-0.781 0.781-2.048 0-2.829l-5.536-5.535 5.536-5.535c0.781-0.781 0.781-2.048 0-2.829z"></path>
        </svg>
      </button>
    </div>
    <hr className="mb-4" />
    <h3 className="font-bold">Bienvenue</h3>
    <div className="flex items-center">
      <p>Nous vous souhaitons la bienvenue</p>
      <div className="w-3 h-3 bg-red-500 rounded-full ml-2"></div>
    </div>
  </div>
);

export default SidebarNotification;