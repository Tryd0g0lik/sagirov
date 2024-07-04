function handlerClickOfMemu (e: MouseEvent): void {
  const currentTarget = e.currentTarget as HTMLElement;
  if (!(currentTarget.className.includes('header__menu'))) {
    return;
  }
  if ((currentTarget.className).includes('active')) {
    currentTarget.className = currentTarget.className.replace(' active', '');
  } else {
    currentTarget.className = currentTarget.className.concat(' active');
  }
}

/* ------ Search ------ */
document.addEventListener('DOMContentLoaded', () => {
  const mehuHtml = document.querySelector('.header__menu');
  if (mehuHtml !== null) {
    (mehuHtml as HTMLElement).removeEventListener('click', handlerClickOfMemu);
    (mehuHtml as HTMLElement).addEventListener('click', handlerClickOfMemu);
  } else {
    console.error('[menu]: Not found!');
  }
});
