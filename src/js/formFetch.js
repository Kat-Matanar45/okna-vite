export const formFetch = () => {
    const forms = document.querySelectorAll('.order-form');

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

    forms.forEach((form) => {
        const inputFio = form.querySelector('input[name="fio"]');
        const inputPhone = form.querySelector('input[name="phone"]');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            const user = {
                fio: inputFio.value,
                tel: inputPhone.value
            };
            
            senData(JSON.stringify(user))
                .then(data => {console.log(data)})
        })
    })
}