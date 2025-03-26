interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'light';
    className?: string;
  }
  
  export const CustomButton: React.FC<ButtonProps> = ({ variant = 'primary', className, children, ...props }) => {
    const baseStyles = 'px-4 py-2 rounded-lg text-white transition-all duration-300';
    const variantStyles = {
      primary: 'bg-[#EF2424] hover:opaocity-[0.7]',
      secondary: 'bg-gray-600 hover:bg-gray-700',
      danger: 'bg-red-600 hover:bg-red-700',
      light:''
    };
  
    return (
      <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  };
  