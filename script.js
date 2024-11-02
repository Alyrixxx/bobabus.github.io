// script.js

let clickCount = 0;
let answer

function incrementCounter() {
    clickCount++;
    document.getElementById("click-count").innerText = `Количество нажатий: ${clickCount}`;
    if (clickCount % 10 === 0) {
        //window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        playVideo()
    }
}

function playVideo() {
    const video = document.getElementById("myVideo");
    let fullscreenInterval; // Переменная для хранения ID интервала

    video.style.display = "block"; // Показываем видео

    requestFullScreen(video);

    video.play(); //Начинаем воспроизведение
    
    // Запрещаем паузу и другие взаимодействия
    video.addEventListener('pause', function() {
        video.play(); // Если видео ставят на паузу, запускаем его снова
    });

}
function requestFullScreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Для Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Для Chrome, Safari и Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // Для IE/Edge
      element.msRequestFullscreen();
    }
}

    // Возврат в полноэкранный режим, если пользователь выходит из него
    document.addEventListener('fullscreenchange', function() {
        if (!document.fullscreenElement) {
          playVideo(); // Автоматически возвращаем видео в полноэкранный режим
        }
    })

    // Обработчик события для клавиши Esc
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
          requestFullScreen(video); // Автоматически возвращаем в полноэкранный режим при нажатии Esc
        }
      });

    // Отключаем элементы управления
    video.controls = false; // Убедитесь, что элементы управления выключены