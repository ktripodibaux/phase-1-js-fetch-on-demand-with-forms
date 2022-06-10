const init = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const input = e.target.searchByID.value;
        if (input == 1 || input == 2 || input == 3) {
            const title = document.getElementById('title');
            const desc = document.getElementById('desc');
            fetchResource(`http://localhost:3000/movies/${input}`).then(function (data)  {title.textContent = data.title; desc.textContent = data.summary; console.log()});

        }
    })
}

document.addEventListener('DOMContentLoaded', init);

fetchResource('http://localhost:3000/movies').then(data => console.log(data));

function fetchResource(url) {
    return fetch(url).then(res => res.json());
}