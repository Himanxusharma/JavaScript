document.getElementById('name-list').addEventListener('click',loadData);

function loadData(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','data.txt',true);
}