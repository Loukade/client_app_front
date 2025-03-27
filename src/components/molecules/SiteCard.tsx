import Image from "@/components/atoms/Image";
import { Sites } from "@generated/models/Sites";

interface SiteCardProps {
  site: Sites;
}

const SiteCard: React.FC<SiteCardProps> = ({ site }) => {
  return (
    <div className="w-full flex items-center justify-center space-x-4 mt-4">
      <div className="flex-shrink-0">
        <Image
          src="/linkBlue.svg"
          alt="linkBlue"
          width={70}
          height={70}
          className=""
        />
      </div>
      <div className="flex-1 bg-white rounded-md p-4 flex flex-col relative">
        <div>
          <h2 className="font-bold text-xl">{site.name}</h2>
          <div className="flex items-center">
            <Image
              src="/link.svg"
              alt="linkBlue"
              width={17.87}
              height={17.87}
              className='mr-2'
            />
            <a href={site.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{site.link}</a>
          </div>
        </div>
        <button
          className="bg-[#EDECFE] text-[#5051F9] py-2 px-10 rounded-lg absolute top-1/2 transform -translate-y-1/2 right-4">
          Détails
        </button>
      </div>
    </div>
  );
}

export default SiteCard;
