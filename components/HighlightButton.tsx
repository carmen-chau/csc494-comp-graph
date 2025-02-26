import React from 'react';

interface HighlightButtonProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
  type: 'input' | 'weight' | 'pre-activation' | 'activation' | 'target value' | 'loss';
}

export const getButtonColor = (type: string, isActive: boolean) => {
  const colors: Record<string, string> = {
    'input': isActive ? '#1D4ED8' : '#3B82F6', // Blue
    'weight': isActive ? '#F43F5E' : '#F87171', // Pink
    'pre-activation': isActive ? '#9333EA' : '#D8B4FE', // Purple
    'activation': isActive ? '#FB923C' : '#FBBF24', // Orange
    'target value': isActive ? '#10B981' : '#6EE7B7', // Green
    'loss': isActive ? '#DC2626' : '#F87171', // Red
  };

  return colors[type] || '#E5E7EB'; // Default color (gray)
};

const HighlightButton: React.FC<HighlightButtonProps> = ({ label, onClick, isActive, type }) => {
  const buttonColor = getButtonColor(type, isActive); // Get dynamic color

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 m-1 border rounded text-black`} // Tailwind for layout and text color
      style={{ backgroundColor: buttonColor }} // Apply dynamic background color
    >
      {label}
    </button>
  );
};

export default HighlightButton;
