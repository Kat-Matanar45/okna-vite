export const formFetch = () => {
  const forms = document.querySelectorAll('.order-form');
  const calcTotal = document.querySelector('#calc-total');
  const statusBlock = document.createElement('div');
  const errorText = 'Ошибка! Попробуйте повторить отправку позже!';
  const successText = 'Спасибо! Наш менеджер с Вами свяжется.';
  const emptyText = 'Заполните все поля!';
  let user = {};

  const senData = (user) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: user,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => response.json())
  };

  const statusBlokImg = () => {
    const img = document.createElement('img');
    img.src = 'images/load.gif';
    img.alt = 'Загрузка';
    statusBlock.append(img);
  };

  try {
    if (!forms) {
      throw new Error("Для работы нужна форма! Верните её, пожалуйста!")
    }

    forms.forEach((form) => {
      const inputFio = form.querySelector('input[name="fio"]');
      const inputPhone = form.querySelector('input[name="phone"]');
      const formBtn = form.querySelector('.form-horizontal button[type="submit"]');

      const cleaning = () => {
        setInterval(() => {
          statusBlock.textContent = ''
          formBtn.disabled = false;
        }, 3000)
      };

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        formBtn.disabled = true;

        e.target.append(statusBlock);
        statusBlokImg();

        if ((inputFio.value === '') || (inputPhone.value === '')) {
                statusBlock.textContent = emptyText;
                formBtn.disabled = true;

                setTimeout (() => {
                  formBtn.disabled = false;
                }, 6000);  

        } else {

                if (window.location.pathname === '/balkony.html') {
                  user = {
                    fio: inputFio.value,
                    tel: inputPhone.value,
                    total: calcTotal.value
                  }
                } else {
                  user = {
                    fio: inputFio.value,
                    tel: inputPhone.value,
                  }
                }

                  senData(JSON.stringify(user))
                  .then(data => {
                    statusBlock.textContent = successText;
                    inputFio.value = '';
                    inputPhone.value = '';
                    formBtn.disabled = true;

                    cleaning();
                  })

                  .catch(error => {
                    statusBlock.textContent = errorText;
                    formBtn.disabled = true;

                    cleaning();
                  })
              }
         })
    })
    
  } catch (error) {
    console.log(error.message)
  }
}