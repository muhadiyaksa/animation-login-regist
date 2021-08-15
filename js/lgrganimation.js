const layarPutihUngu = document.querySelector('.kotaklayar');
const layarPutihKuning = document.querySelector('.kotaklayar2');

const tombolLogin = document.querySelector('.tombolungu2');
const tombolLogin2 = document.querySelector('.tombol2ungu');
const tombolDaftar = document.querySelector('.tomboloren');
const tombolDaftar2 = document.querySelector('.tombol1oren');

tombolLogin.addEventListener('click' , function(){
    layarPutihUngu.style.left = '-700px';
    layarPutihUngu.style.transition = '0.6s';
    setTimeout(function() {
        layarPutihUngu.style.display= 'none';
    }, 570 );

    layarPutihKuning.style.display= 'block';
    layarPutihKuning.style.right = '-700px';
    layarPutihKuning.style.transition = '0.6s';
    setTimeout(function() {
        layarPutihKuning.style.right = '0px';
    }, 0 );
});

tombolLogin2.addEventListener('click' , function(){
    layarPutihUngu.style.left = '-700px';
    layarPutihUngu.style.transition = '0.6s';
    setTimeout(function() {
        layarPutihUngu.style.display= 'none';
    }, 570 );

    layarPutihKuning.style.display= 'block';
    layarPutihKuning.style.transition = '0.6s';
});

tombolDaftar.addEventListener('click', function(){
    layarPutihUngu.style.display= 'block';
    layarPutihUngu.style.left = '-700px';
    layarPutihUngu.style.transition = '0.6s';
    setTimeout(function() {
        layarPutihUngu.style.left = '0px';
    }, 0 );

    layarPutihKuning.style.right = '-700px';
    layarPutihKuning.style.transition =  '0.6s';
    setTimeout(function() {
        layarPutihKuning.style.display= 'none';
    }, 570 );
});

tombolDaftar2.addEventListener('click', function(){
    layarPutihUngu.style.display= 'block';
    layarPutihUngu.style.left = '-700px';
    layarPutihUngu.style.transition = '0.6s';
    setTimeout(function() {
        layarPutihUngu.style.left = '0px';
    }, 0 );

    layarPutihKuning.style.display= 'none';
    layarPutihKuning.style.transition =  '0.6s';
});

var pass = document.getElementById("pwuserdaftar");

pass.addEventListener('keyup', function(){
    checkPassword(pass.value)
})

// var all = document.getElementById('show')

// all.addEventListener('click', function(){
//     if(all.checked){
//         pass.setAttribute('type', 'text')
//     }else {
//         pass.setAttribute('type', 'password')
//     }	
// })

function checkPassword(InputPassword){
    let bulet1 = document.querySelector('.bulet1');
    let bulet2 =  document.querySelector('.bulet2');
    let bulet3 = document.querySelector('.bulet3');

    // Jika input karakter seperti dalam tanda bracket 1
    if ((InputPassword.match(/[a-z]+/)) || (InputPassword.match(/[0-9]+/))){
        bulet1.style.backgroundColor = '#ff1b1b';
        bulet2.style.backgroundColor = '#ffffff';
        bulet3.style.backgroundColor = '#ffffff';
    }
    // Jika input karakter seperti dalam tanda bracket 3
    if ((InputPassword.match(/[0-9]+/)) && ((InputPassword.match(/[a-z]+/)))) {
        bulet1.style.backgroundColor = '#fdc200';
        bulet2.style.backgroundColor = '#fdc200';
        bulet3.style.backgroundColor = '#ffffff';
    }
    if (InputPassword.length > 8) {
        bulet1.style.backgroundColor = '#00fd37';
        bulet2.style.backgroundColor = '#00fd37';
        bulet3.style.backgroundColor = '#00fd37';
    }
    if(InputPassword.length < 1){
        bulet1.style.backgroundColor = '#ffffff';
        bulet2.style.backgroundColor = '#ffffff';
        bulet3.style.backgroundColor = '#ffffff';
    }
}