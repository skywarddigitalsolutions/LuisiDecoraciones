interface FiltroButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
  }
  
export const FiltroBoton: React.FC<FiltroButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md ${isActive ? 'bg-marron text-beige' : 'bg-beige text-marron'} transition-colors duration-300`}
    >
      {label}
    </button>
  );
};
  