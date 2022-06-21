const img = document.querySelector('img');
const btn = document.querySelector('#newImg');
const textBox = document.querySelector('#textBox');

    btn.addEventListener('click', () => {
        const searchResult = textBox.value;
        getNewImg(searchResult);
    })


    function getNewImg(searchResult) {
      fetch(`https://api.giphy.com/v1/gifs/translate?api_key=MY_PERSONAL_KEY=${searchResult}`, {mode: 'cors'})
      .then(function(response) {
        return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
    }
