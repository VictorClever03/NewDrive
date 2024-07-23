import React from 'react';
import { ChevronRight } from 'lucide-react'; // Importa o ícone do Lucide React

interface CustomButtonProps {
  className?: string;
  onClick?: () => void;
}

const CustomNextButton: React.FC<CustomButtonProps> = ({ className, onClick }) => {
  return (
    <button
      className={`${className}  text-red-600 rounded-full w-10 h-10 flex items-center justify-center`}
      onClick={onClick}
    >
      <ChevronRight size={20} />
    </button>
  );
};

export default CustomNextButton;
