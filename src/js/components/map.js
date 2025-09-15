import placemarkImg from '@/assets/img/placemark.svg';

const mapContainer = document.getElementById('map');

if (mapContainer) { // <--- проверка, есть ли элемент на странице
  function initMap() {
    let map = new ymaps.Map('map', {
      center: [55.13245017991622, 61.36589694353873],
      zoom: 15,
      controls: []
    });

    const placemark = new ymaps.Placemark(
      [55.13183547673306, 61.37004229757123],
      {
        hintContent: "Клиника Профессора Кинзерского",
        balloonContent: "Челябинск, Блюхера 53а"
      },
      {
        iconLayout: "default#image",
        iconImageHref: placemarkImg,
        iconImageSize: [60, 60],
      }
    );

    map.behaviors.disable('scrollZoom');
    map.controls.add('zoomControl', {
      position: { top: 20, right: 10 },
      size: 'small'
    });

    map.geoObjects.add(placemark);
  }

  function loadYandexMapAPI(callback) {
    const script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=fd38c889-a657-46b0-ae1b-41f613ec73a6&lang=ru_RU";
    script.onload = () => callback?.();
    document.body.appendChild(script);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        loadYandexMapAPI(() => {
          ymaps.ready(initMap);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0 });

  observer.observe(mapContainer);
}
