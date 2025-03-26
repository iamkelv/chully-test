"use client";

import Image, { StaticImageData } from "next/image";

interface CustomImageProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width = 100,
  height = 100,
  className = "",
  objectFit = "cover",
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ objectFit }}
    />
  );
};

export default CustomImage;
