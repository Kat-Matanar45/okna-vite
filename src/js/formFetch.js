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

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        e.target.append(statusBlock);
        statusBlokImg();

        if ((inputFio.value == '') || (inputPhone.value == '')) {
                statusBlock.textContent = emptyText;
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
                    console.log(data)
                    statusBlock.textContent = successText;
                    inputFio.value = '';
                    inputPhone.value = '';
                  })

                  .catch(error => {
                    statusBlock.textContent = errorText;
                  })
              }

        setInterval(() => {
          statusBlock.textContent = ''
        }, 3000)

      })
    })
  } catch (error) {
    console.log(error.message)
  }
}