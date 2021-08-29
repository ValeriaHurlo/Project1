ymaps.ready(init);

        function init() {
            var myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 10
            }, {
                searchControlProvider: 'yandex#search'
            });
            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects

                .add(new ymaps.Placemark([55.782392, 37.614924], {
                    balloonContent: ' Москва, ул. Лениниа, д. 25<br>'
                }, {
                    preset: 'islands#icon',
                    iconColor: '#0066ff'
                }));
        }
        