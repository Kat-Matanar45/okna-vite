export const inputBan = () => {
    const inputFio = document.querySelectorAll('input[name="fio"]');
    const inputPhone = document.querySelectorAll('input[name="phone"]');

    inputFio.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z]+/, '')
        })
    });

    inputPhone.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d\+]+/, '');
            e.target.setAttribute("maxlength", "16");
        })
    });
}