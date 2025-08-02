import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const handleSelect = (selected: string) => {
    setTheme(selected as any);
    setOpen(false);
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <button className="menu-toggle" onClick={onToggleSidebar}>☰</button>
        <h1>Multi-Theme App</h1>
      </div>

      <div className="dropdown-wrapper">
        <button className="dropdown-toggle" onClick={() => setOpen(!open)}>
          {theme.replace("theme", "Theme ")} ▼
        </button>
        {open && (
          <ul className="dropdown-options">
            <li onClick={() => handleSelect('theme1')}>Theme 1</li>
            <li onClick={() => handleSelect('theme2')}>Theme 2</li>
            <li onClick={() => handleSelect('theme3')}>Theme 3</li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
