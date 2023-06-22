const API_URL = 'https://api.thecatapi.com/v1/images/search';
  const API_KEY = "live_wnwdnJC3u270mi2WhO3oYqq7jwnwI68g9FfIqoLZDINYq3yRYXZEdL0yA0afCnAv";
  
  function getRandomCatImage() {
    fetch(API_URL, {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY
        }
    })
        .then(response => response.json())
        .then(data => {
            const catImagesDiv = document.getElementById('catImages');
            catImagesDiv.innerHTML = '';

            data.forEach(imageData => {
                const image = document.createElement('img');
                image.src = imageData.url;
                image.classList.add('catImage');
                catImagesDiv.appendChild(image);
            });
        })
        .catch(error => {
            console.log('Error occurred:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const changeImageButton = document.getElementById('changeImageButton');
    changeImageButton.addEventListener('click', getRandomCatImage);

    getRandomCatImage();
});