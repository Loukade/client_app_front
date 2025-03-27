import Image from "next/image";

interface ImageAtomProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}

const ImageAtom: React.FC<ImageAtomProps> = ({ src, alt, width, height, className }) => (
  <Image src={src} alt={alt} width={width} height={height} className={className} />
);

export default ImageAtom;