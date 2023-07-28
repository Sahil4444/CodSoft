let str = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == 'Ac'){
            console.log(e.target);
            str = "";
            document.querySelector('input').value = str;
        }
        else if(e.target.innerHTML == '<i class="fa-solid fa-delete-left"></i>'){
            console.log('delete');
            str = str.substring(0, str.length-1)
            document.querySelector('input').value = str;
        }
        else if(e.target.innerHTML == '='){
            str = eval(str);
            document.querySelector('input').value = str;

        }else{
            str = str + e.target.innerHTML;
            document.querySelector('input').value = str;
        }
    })
})