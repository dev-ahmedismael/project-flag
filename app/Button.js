import React from 'react';

function Button({ name, icone, className }) {
  return (
    <div
      className={`bg-[#252216] bg-opacity-50 p-1 text-center text-white rounded-md backdrop-blur-md w-[150px] h-[40px] flex items-center justify-center font-medium border-2 border-[#382c1c] ${className}`}
    >
  
      {icone && <span className="mr-1">{icone}</span>} 
      
     
      <span dangerouslySetInnerHTML={{ __html: name }} />
    </div>
  );
}

export default Button;
