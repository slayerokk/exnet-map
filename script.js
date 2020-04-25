var tariffs = [
    {name: 'Тариф первомайский', description: 'Описание тарифа первомайского'},
    {name: 'Тариф новогодний', description: 'Описание тарифа новогоднего'},
    {name: 'Тариф летний', description: 'Описание тарифа летнего'}
];

var technologies = [
    {name: 'Ethernet', color: '#DB425A'},
    {name: '4G', color: '#4C4DA2'},
    {name: '3G', color: '#00DEAD'}
];

var cities = [
    {name: 'Москва', point: [55.831903, 37.411961], zoom: '8'},
    {name: 'Наро-Фоминск', point: [53.811903, 37.411961], zoom: '8'}
];

var data =  [
    {city: 0, street: 'Ул. Ленина', point: [55.831903, 37.411961], tariffs: [0, 1], technologies: [0]},
    {city: 0, street: 'Ул. Сидорова', point: [55.763338, 37.565466], tariffs: [1], technologies: [1]},
    {city: 0, street: 'Ул. Петрова', point: [55.163338, 37.585466], tariffs: [2, 0, 1], technologies: [0, 1]},
    {city: 1, street: 'Кв. Ленина', point: [55.744522, 37.616378], tariffs: [1, 2], technologies: [2]},
    {city: 1, street: 'Пр. Сталина', point: [55.793559, 37.435983]},
    {city: 1, street: 'Кв. Берии', point: [55.716770, 37.482338], tariffs: [0, 1], technologies: [2]},
];

$( document ).ready(function() {

    cities.map((city, index) => {
        $('#input-city').append(`<option value="${index}">${city.name}</option>`);
    });

    $('#input-city').change(function() {
        var index = $('#input-city').find(':selected').val();
        var city = cities[index];
        window.myMap.setZoom(city.zoom);
        window.myMap.panTo(city.point, {
            flying: true,
            duration: 1000,
            callback : function () {
                window.myMap.setCenter(city.point);
            }
        });

        var geos = [];

        data.map(geo => {
            if (geo.city == index) {
                geos.push(geo)
            }
        });

        $('#input-street').find('option').remove();

        $('#input-street').append(`<option value="0">Не установлено</option>`);

        geos.map(geo => {
            $('#input-street').append(`<option value="${geo.point.join(',')}">${geo.street}</option>`);
        });

        $('#input-street').change();

    });

    $('#input-street').change(function() {
        var value = $('#input-street').find(':selected').val();
        if (value == '0') {
            return;
        }
        point = value.split(',').map(p => parseFloat(p));
        window.myMap.setZoom(16);
        window.myMap.panTo(point, {
            flying: true,
            duration: 1000,
            callback : function () {
                window.myMap.setCenter(point);
            }
        });
        var geo = data.find(element => element.point.join(',') == value);
        if (!geo.tariffs || (geo.tariffs.length == 0)) {
            $('#tariffs').html('<i>Нет</i>')
        } else {
            $('#tariffs').html(geo.tariffs.map(geotariff => '<b>' + tariffs[geotariff].name + '</b><br>' + tariffs[geotariff].description).join('<br>'))
        }
        if (!geo.technologies || (geo.technologies.length == 0)) {
            $('#technologies').html('<i style="color: red;">Ведутся работы по монтажу сетей</i>')
        } else {
            $('#technologies').html(geo.technologies.map(geotechnology => '<b>' + technologies[geotechnology].name + '</b>').join(', '))
        }
    });


    ymaps.ready(function () {

        window.myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        })
    
        var clusterer = new ymaps.Clusterer({
            clusterIconLayout: 'default#pieChart',
            clusterIconPieChartRadius: 25,
            clusterIconPieChartCoreRadius: 10,
            clusterIconPieChartStrokeWidth: 3,
            hasBalloon: false
        })
    
        var geoObjects = [];
    
        for (var i = 0, len = data.length; i < len; i++) {
            geoObjects[i] = new ymaps.Placemark(data[i].point, {
                hintContent: i, 
                balloonContentHeader: cities[data[i].city].name + ', ' + data[i].street,
                balloonContentBody: "<b>Тарифы</b>: " + (data[i].tariffs? data[i].tariffs.map(index => tariffs[index].name).join(','): '<i>нет</i>'),
                balloonContentFooter: "<b>Технологии</b>: " + (data[i].technologies? data[i].technologies.map(index => technologies[index].name).join(','): '<i>Ведутся работы по монтажу сети</i>')
            }, {
                iconColor: data[i].technologies? technologies[data[i].technologies[0]].color: '#D73AD2'
            });
            geoObjects[i].events.add('click', function (e) {
                var index = e.get('target').properties._data.hintContent;
                $('#input-city').val(data[index].city).change();
                $('#input-street').val(data[index].point.join(',')).change();
            })
        }
    
        clusterer.add(geoObjects);
    
        myMap.geoObjects.add(clusterer);
    
        myMap.setBounds(clusterer.getBounds(), {
            checkZoomRange: true
        });

        $('#input-city').change();
    
    });
});