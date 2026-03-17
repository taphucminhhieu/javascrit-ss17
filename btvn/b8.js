const textarea = document.getElementById('draftArea');
const button = document.getElementById('clearBtn');

const oldConten = localStorage.getItem('draft');
area.value = oldConten;

area.oninput = function() {
    const nowConten = area.value;
    localStorage.setItem('draft', nowConten);
};

button.onclick = function() {
    localStorage.removeItem('draft');
    area.value = '';
};