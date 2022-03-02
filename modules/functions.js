function clickEvent(btn, input) {
    btn.addEventListener('click', () => {
        if(input.value != ''){
            console.log(input.value);
        }else{
            console.log('Вы нечего не введили!');
        }
        input.value = '';
    }, false);
}


export default clickEvent;