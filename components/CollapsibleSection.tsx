/*
    Custom dropdown component to toggle sections of descriptive text
*/

// Import statements
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react"; // Using an external icon library (lucide-react) to import the cheveron (V / >) dropdown shape

export const CollapsibleSection = ({
  title,
  children,
}: {
  title: string; // denotes the name of the section
  children: React.ReactNode; // denotes any react content (hence the type: React.ReactNode) that can be rendered inside the component
}) => {

  const [isOpen, setIsOpen] = useState(false); // Define a state variable and setter to denote whether sectio is currently opened or not

  return (
    <div className="border border-gray-300 rounded-lg mb-3">
      {/* Button disguised as a header, clicking it would open up the display with the content. */}
      <button
        className="w-full flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-left text-base font-semibold border border-gray-300 rounded shadow-sm"
        onClick={() => setIsOpen(!isOpen)} // Always setting isOpen to be the opposite of what it was before the button click. Futhermore, we pass logic regarding changing cheveron direction based on what "mode" the section is in 
      >
        {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        <span>{title}</span>
      </button>

      {/* Collapsible content with a background */}
      {isOpen && (
        <div className="bg-white px-4 py-3 text-base text-gray-700 rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  );
};
