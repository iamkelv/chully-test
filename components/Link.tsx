import Link from "next/link";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    className?: string;
    isExternal?: boolean;
  }
  
  export const CustomLink: React.FC<LinkProps> = ({ href, className, children, isExternal, ...props }) => {
    return (
      <Link href={href} passHref className={` ${className}`} {...props} target={isExternal ? '_blank' : '_self'}>      
          {children}
      
      </Link>
    );
  };
  