export const calc = (metr) => {
    const container = document.querySelectorAll('.container')[4];
    const calcType = document.querySelector('select[id="calc-type"]');
    const calcMaterial = document.querySelector('#calc-type-material');
    const calcInput = document.querySelector('#calc-input');
    const calcTotal = document.querySelector('#calc-total');
    let totalPrice;

    calcInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d]+/, '')
    });

    const price = () => {
        totalPrice = Math.floor(metr * calcInput.value * calcType.value * calcMaterial.value);
        calcTotal.value = totalPrice;
    };

    container.addEventListener('input', (e) => {
        if((e.target == calcType) || (e.target == calcMaterial) || (e.target == calcInput)) {
            if (calcType.value !== '' && calcMaterial.value !== '' && calcInput.value !== '') {
                price();
            } 
        }  
    })
}