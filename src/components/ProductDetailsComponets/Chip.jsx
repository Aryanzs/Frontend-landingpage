import React from 'react'

const Chip = ({ icon, label }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[#333333] shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E4F0E5] text-[#3A643B]">
      {icon}
    </span>
    <span>{label}</span>
  </span>
);

export default Chip