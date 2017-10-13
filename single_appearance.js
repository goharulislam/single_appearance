let min = 0, max = 0, input = 0, unrefined_num = 0, refined_num = 0, i = 0, j = 0, k = 0;
let a = [0];
let btn1 = document.getElementsByTagName("button")[0];

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function oddInt(number){
    return number += number%2==0?1:0;
}

btn1.addEventListener('click', function( event ){
    max = document.getElementsByTagName("input")[0].value;

    for(i=0; i<max; i++){
        unrefined_num = getRandomInt(min, max);
        a[i] = oddInt(unrefined_num);
        document.getElementsByTagName("p")[0].innerHTML += a[i] + ", ";
    }

    for(i=0; i<max; i++){
        for(j=0; j<max; j++){
            if(a[i] === a[j]){
                k++;
            }
            if(j === max-1 && k === 1){
                document.getElementsByTagName("p")[1].innerHTML += a[i] + ", ";
                //k = 0;
            }
        }
        k = 0;
    }

});