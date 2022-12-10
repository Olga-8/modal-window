document.querySelector('.promo__btn_dark').addEventListener('click', () => {

    let modal = document.createElement('div');
    let modalContent = document.createElement('div');
    let modalClose = document.createElement('div');
    let modalTitle = document.createElement('h4');
    let modalText = document.createElement('p');
    let modalImg = document.createElement('img');

    modal.classList.add('modal');
    modalContent.classList.add('modal__content');
    modalClose.classList.add('modal__close');
    modalTitle.classList.add('modal__title');
    modalText.classList.add('modal__text');
    modalImg.classList.add('modal__img');



    modal.style.display = 'block';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.zIndex = '999';
    modal.style.position = 'fixed';


    modalContent.style.width = '50%';
    modalContent.style.height = '50%';
    modalContent.style.position = 'absolute';
    modalContent.style.zIndex = '99';
    modalContent.style.top = '25%';
    modalContent.style.left = '25%';
    modalContent.style.transform = 'translate(-50%, -50%)';

    modalContent.style.backgroundColor = 'white';
    modalContent.style.borderRadius = '10px';
    modalContent.style.display = 'flex';
    modalContent.style.flexDirection = 'column';
    modalContent.style.justifyContent = 'space-around';
    modalContent.style.alignItems = 'center';
    modalContent.style.padding = '20px';

    modalClose.style.width = '30px';
    modalClose.style.height = '30px';
    modalClose.style.position = 'absolute';
    modalClose.style.top = '0';
    modalClose.style.right = '0';
    modalClose.style.cursor = 'pointer';

    modalTitle.style.fontSize = '1.5rem';
    modalTitle.style.fontWeight = 'bold';
    modalTitle.style.textAlign = 'center';

    modalText.style.fontSize = '1rem';
    modalText.style.textAlign = 'center';

    modalImg.style.width = '100px';
    modalImg.style.height = '100px';
    modalImg.style.borderRadius = '50%';
    modalImg.style.border = '1px solid black';

    modalContent.style.transform = 'scale(1)';
    modalContent.style.transition = 'all 0.5s ease';

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        modalContent.style.transform = 'scale(0)';
        modalContent.style.transition = 'all 0.5s ease';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalContent.style.transform = 'scale(0)';
            modalContent.style.transition = 'all 0.5s ease';
        }
    });

    modalTitle.textContent = 'Lorem ipsum dolor sit amet.';
    modalText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.';
    modalImg.style.backgroundImage = 'url(./img/1.jpg)';
    document.body.appendChild(modal);
    modal.appendChild(modalContent);
    modalContent.appendChild(modalClose);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalText);
    modalContent.appendChild(modalImg);


});