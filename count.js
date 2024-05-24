let count = 0;
const element = document.getElementById('count');
function clickMe(){
    count += 1;
    element.innerText = count; 
}

document.getElementById('minus-btn').addEventListener('click', function(){
    count -= 1;
    element.innerText = count;
})