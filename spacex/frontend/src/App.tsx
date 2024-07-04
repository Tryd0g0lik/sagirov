import React from 'react';
import { createRoot } from 'react-dom/client';
import { MainFC } from './components/Mains';
import { HeaderFC } from './components/Headers';
import './styles/fonts.css';
import './styles/basis.css';
import './styles/style.css';
import './styles/main.css';
import './styles/header.css';
import './styles/screens.css';


function AppFC (): React.JSX.Element {
  return (
    <>
      <HeaderFC />
      <MainFC />
    </>
  );
}

const root = document.getElementById('root');
if ((root !== null) && (root !== undefined)) {
  createRoot(root).render(
    <AppFC />
  );
}
console.log('Good lack work');
