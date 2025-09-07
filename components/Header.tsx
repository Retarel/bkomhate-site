
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black/50 border-b-2 border-amber-500/50 p-4 sticky top-0 z-10 backdrop-blur-sm">
      <div className="container mx-auto text-center">
        <h1 className="font-display text-4xl md:text-5xl text-amber-400 tracking-widest">
          B_KOMHATE
        </h1>
        <p className="text-stone-400 text-sm tracking-wider">ГЕНЕРАТОР КОДОВЫХ СЛОВ</p>
      </div>
    </header>
  );
};

export default Header;
