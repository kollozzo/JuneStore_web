const searchButton = document.querySelector('[data-action="search"]');
const searchIcon = searchButton.querySelector('iconify-icon');
const searchInput = document.querySelector('.search-input');
searchButton.addEventListener('click', () => {
    if (searchInput.value.trim() !== '') { 
        // Aquí puedes agregar la lógica para realizar la búsqueda
        console.log('Buscando:', searchInput.value);
    } else {
        console.log('No se ha ingresado texto para buscar.');
    }
});

//searchButton.addEventListener('click', () => {
//    if (searchInput.style.display === 'block') {
//        searchInput.style.display = 'none';
//        searchIcon.style.fontSize = '20px';
//    } else {
//        searchInput.style.display = 'block';
//       searchIcon.style.fontSize = '0px';
//    }
//});
