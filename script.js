var cities = [
    {name: 'Балашиха', point: [55.7963,37.9382], zoom: '12'},
    {name: 'Голицыно', point: [55.61143168624735,36.97204749999985], zoom: '12'},
    {name: 'Апрелевка', point: [55.54884383803675,37.05878], zoom: '12'},
    {name: 'Елагино', point: [55.33959270397318,36.73167649999993], zoom: '15'},
    {name: 'Ольховка', point: [55.30870703123491,36.64681935152389], zoom: '15'},
    {name: 'Гамби', point: [55.312079497885044,36.69456314937575], zoom: '15'},
    {name: 'Наро-Фоминск', point: [55.38740074684894,36.72539015869138], zoom: '14'},
    {name: 'СНТ Связист', point: [55.38839542132241,36.8365034884652], zoom: '16'},
    {name: 'Слизнево', point: [55.30435210970753,36.780247999999965], zoom: '16'},
    {name: 'Горчухино', point: [55.34583308813349,36.749527255294694], zoom: '17'},
    {name: 'Румянцево', point: [56.09343229713035,37.62709034930413], zoom: '15'},
    {name: 'Башкино', point: [55.301151094441195,36.68247033862303], zoom: '16'},
    {name: 'Руза', point: [55.70343927187915,36.192213984130774], zoom: '14'},
    {name: 'Тучково', point: [55.602669671042506,36.47177735180657], zoom: '14'},
    {name: 'Дорохово', point: [55.551493646990764,36.37616946563717], zoom: '15'},
    {name: 'Салтыковка', point: [55.762127755877295,37.9222421561279], zoom: '14'},
    {name: 'Рогачево', point: [55.26208508062369,36.66556011904898], zoom: '16'},
    {name: 'СНТ Ворсино-1', point: [55.26205109113847,36.65961651055904], zoom: '16'}
];

var data =  [
    
    {
        city: 0,
        street: 'мкрн. Никольско-Архангельский',
        connection: '<span style="color: red">13000 ₽</span> (скидка 20% при переходе от др.провайдера = 10400 ₽)',
        point: [55.7694,37.9123],
        polygon: [[[55.780301559440204,37.90756376305984],[55.779430866511404,37.896062450803996],[55.77033579486641,37.88147123376298],[55.75746359439402,37.89365919152664],[55.758334780179794,37.91923673669266],[55.7675294382748,37.92472990075515],[55.775947899417226,37.928334789671176],[55.78049504410448,37.91683347741531],[55.780301559440204,37.90756376305984]]],
        tariffs: [{
            name: '35',
            cost: '800'
        },{
            name: '55',
            cost: '1100'
        },{
            name: '70',
            cost: '1500'
        },{
            name: '100',
            cost: '2000'
        }]
    },

    {
        city: 0,
        street: 'Грин-Парк',
        connection: '<span style="color: red">13000 ₽</span>',
        point: [55.76377114108775,37.93260917724602],
        polygon: [[[55.76606363928076,37.93303833068841],[55.76582169335435,37.931986904754574],[55.76551925882595,37.93091402114861],[55.764938577927104,37.93125734390253],[55.76366830818136,37.93269500793449],[55.76401914874148,37.93505535186761],[55.76489018746016,37.93505535186761],[55.76630558369935,37.93432579101556],[55.76618461167223,37.93366060317985],[55.76606363928076,37.93303833068841]]],
        tariffs: [{
            name: '20',
            cost: '600'
        },{
            name: '40',
            cost: '850'
        },{
            name: '70',
            cost: '1250'
        },{
            name: '100',
            cost: '2000'
        }]
    },

    {
        city: 0,
        street: 'СНТ Металлург',
        connection: '<span style="color: red">13000 ₽</span>',
        point: [55.79223508321861,37.882628999999945],
        tariffs: [{
            name: '20',
            cost: '600'
        },{
            name: '40',
            cost: '850'
        },{
            name: '70',
            cost: '1250'
        },{
            name: '100',
            cost: '2000'
        }]
    },

    {
        city: 1,
        street: 'Доступные адреса',
        connection: '<span style="color: red">7000 ₽</span>',
        point: [55.61798965117881,36.979171447143415],
        polygon: [[[55.61301055625676,36.96475189147935],[55.60319623707863,36.96569602905258],[55.60601446234244,37.00389068542467],[55.61427360629721,36.99874084411608],[55.615050847551956,36.99075859008776],[55.61917968227695,36.99024360595689],[55.62597916405574,36.9836346429442],[55.617091032228416,36.97530906616196],[55.61301055625676,36.96475189147935]]],
        tariffs: [{
            name: '20',
            cost: '350'
        },{
            name: '40',
            cost: '550'
        },{
            name: '70',
            cost: '750'
        },{
            name: '100',
            cost: '1000'
        }]
    },


    {
        city: 2,
        street: 'Доступные адреса',
        connection: '<span style="color: red">13000 ₽</span>',
        point: [55.54884383803675,37.05878],
        polygon: [[[55.55210388476224,37.045733735351554],[55.5382833150125,37.03886728027344],[55.53263688987527,37.05311517456053],[55.54061952863748,37.08573083618164],[55.54869785944318,37.08178262451172],[55.55346621189053,37.06375817993165],[55.55648262461357,37.05689172485351],[55.55210388476224,37.045733735351554]]],
        tariffs: [{
            name: '45',
            cost: '800'
        },{
            name: '65',
            cost: '1000'
        },{
            name: '100',
            cost: '1400'
        }]
    },

    {
        city: 3,
        street: 'ул. Чистопрудная',
        connection: '<span style="color: red">7000 ₽</span>',
        point: [55.33959270397318,36.73167649999993],
        tariffs: [{
            name: '45',
            cost: '800'
        },{
            name: '65',
            cost: '1000'
        },{
            name: '100',
            cost: '1400'
        }]
    },

    {
        city: 4,
        street: 'Все адреса',
        connection: '<span style="color: red">7000 ₽</span>',
        point: [55.30870703123491,36.64681935152389],
        tariffs: [{
            name: '45',
            cost: '800'
        },{
            name: '65',
            cost: '1000'
        },{
            name: '100',
            cost: '1400'
        }]
    },

    {
        city: 5,
        street: 'Все адреса',
        connection: '<span style="color: red">7000 ₽</span>',
        point: [55.312079497885044,36.69456314937575],
        tariffs: [{
            name: '45',
            cost: '800'
        },{
            name: '65',
            cost: '1000'
        },{
            name: '100',
            cost: '1400'
        }]
    },

    {
        city: 6,
        street: 'Все адреса',
        connection: '<span style="color: red">7000 ₽</span>',
        point: [55.38740074684894,36.72539015869138],
        tariffs: [{
            name: '45',
            cost: '800'
        },{
            name: '65',
            cost: '1000'
        },{
            name: '100',
            cost: '1400'
        }]
    },

    {
        city: 7,
        street: 'Все адреса',
        connection: '<span style="color: red">7000 ₽</span>',
        point: [55.38839542132241,36.8365034884652],
        tariffs: [{
            name: '45',
            cost: '800'
        },{
            name: '65',
            cost: '1000'
        },{
            name: '100',
            cost: '1400'
        }]
    },

    {
        city: 8,
        street: 'Все адреса',
        connection: '<span style="color: red">7000 ₽</span>',
        point: [55.30435210970753,36.780247999999965],
        polygon:[[[55.305178351324756,36.78114922222896],[55.305594525741355,36.780247999999965],[55.30533747735482,36.77750141796872],[55.30478665374998,36.77595646557612],[55.30396652437069,36.77769453701777],[55.30312189571683,36.775441481445284],[55.302840348818286,36.77829535183711],[55.30301172543031,36.780398203704806],[55.30351360980226,36.78217919049069],[55.3025098346809,36.78325207409663],[55.30198345460411,36.78462536511228],[55.30241190403496,36.78526909527585],[55.30449287801947,36.78329498944089],[55.305325236913745,36.78496868786617],[55.3072346998577,36.78256542858882],[55.306292220071334,36.78138525662227],[55.305178351324756,36.78114922222896]]],
        tariffs: [{
            name: '45',
            cost: '800'
        },{
            name: '65',
            cost: '1000'
        },{
            name: '100',
            cost: '1400'
        }]
    },

    {
        city: 9,
        street: 'Все адреса',
        connection: '<span style="color: red">7000 ₽</span>',
        point: [55.34575360679976,36.74953798413075],
        polygon: [[[55.34655146984388,36.749001542327775],[55.346147954919644,36.74633006214893],[55.34476007661143,36.746340790985],[55.34466836487057,36.75007442593372],[55.34516360573735,36.7524991428832],[55.34641085147539,36.752842465637094],[55.34664929102186,36.75262788891591],[55.34655146984388,36.749001542327775]]], 
        tariffs: [{
            name: '45',
            cost: '800'
        },{
            name: '65',
            cost: '1000'
        },{
            name: '100',
            cost: '1400'
        }]
    },

    {
        city: 10,
        street: 'Все адреса',
        connection: '<span style="color: red">5000 ₽</span>',
        point: [56.09304245579824,37.62981547366327],
        polygon: [[[56.09644293824227,37.628013029205256],[56.095315474832276,37.624215021240175],[56.0915850138719,37.62303484927363],[56.09081728556553,37.62655390750116],[56.08900586568929,37.62545956622309],[56.086160105265314,37.63393596877931],[56.08738381355196,37.63724045028566],[56.09644293824227,37.628013029205256]]],
        tariffs: [{
            name: '30',
            cost: '800'
        },{
            name: '50',
            cost: '1000'
        },{
            name: '100',
            cost: '1300'
        }]
    },

    {
        city: 11,
        street: 'Все адреса',
        connection: '<span style="color: red">5000 ₽</span>',
        point: [55.30026967956694,36.68205727843474],
        tariffs: [{
            name: '100',
            cost: '750'
        }]
    },

    {
        city: 12,
        street: 'Все адреса',
        connection: '<span style="color: red">7000 ₽</span>',
        point: [55.70343927187915,36.192213984130774],
        tariffs: [{
            name: '10',
            cost: '450'
        },{
            name: '50',
            cost: '700'
        },{
            name: '100',
            cost: '1100'
        },{
            name: '200',
            cost: '2000'
        }]
    },

    {
        city: 12,
        street: 'Многоквартирные дома',
        connection: '<span style="color: red">7000 ₽</span>',
        point: [55.70173985840145,36.19238564550775],
        tariffs: [{
            name: '10',
            cost: '300'
        },{
            name: '50',
            cost: '500'
        },{
            name: '100',
            cost: '800'
        },{
            name: '200',
            cost: '1100'
        }]
    },

    {
        city: 13,
        street: 'Все адреса',
        connection: '<span style="color: red">7000 ₽</span>',
        point: [55.602669671042506,36.47177735180657],
        tariffs: [{
            name: '10',
            cost: '450'
        },{
            name: '50',
            cost: '700'
        },{
            name: '100',
            cost: '1100'
        },{
            name: '200',
            cost: '2000'
        }]
    },

    {
        city: 14,
        street: 'Все адреса',
        connection: '<span style="color: red">7000 ₽</span>',
        point: [55.551493646990764,36.37616946563717],
        tariffs: [{
            name: '10',
            cost: '450'
        },{
            name: '50',
            cost: '700'
        },{
            name: '100',
            cost: '1100'
        },{
            name: '200',
            cost: '2000'
        }]
    },

    {
        city: 15,
        street: 'Многоквартирные дома',
        connection: '<span style="color: red">7000 ₽</span>',
        point: [55.551493646990764,36.37616946563717],
        tariffs: [{
            name: '15',
            cost: '300'
        },{
            name: '30',
            cost: '400'
        },{
            name: '60',
            cost: '500'
        },{
            name: '75',
            cost: '650'
        },{
            name: '90',
            cost: '750'
        },{
            name: '100',
            cost: '850'
        }]
    },

    {
        city: 16,
        street: 'Все адреса',
        connection: '<span style="color: red">7000 ₽</span>',
        point: [55.551493646990764,36.37616946563717],
        tariffs: [{
            name: '45',
            cost: '800'
        },{
            name: '65',
            cost: '1000'
        },{
            name: '100',
            cost: '1400'
        }]
    },

    {
        city: 17,
        street: 'Все адреса',
        connection: '<span style="color: red">7000 ₽</span>',
        point: [55.26205109113847,36.65961651055904],
        tariffs: [{
            name: '45',
            cost: '800'
        },{
            name: '65',
            cost: '1000'
        },{
            name: '100',
            cost: '1400'
        }]
    }

];

$( document ).ready(function() {

    cities.map((city, index) => {
        $('#input-city').append(`<option value="${index}">${city.name}</option>`);
    });

    $("#input-city").val([]);

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
        if (!geo.tariffs) {
            $('#tariffs').html('<i>Нет доступных</i>')
        } else {
            $('#tariffs').html('<table class="table table-striped"><tbody>' + geo.tariffs.map(tariff => '<tr><td>' + tariff.name + ' Мбит/с</td><td>' + tariff.cost + ' ₽</td></tr>').join('') + '</tbody><table>')
        }
        if (!geo.connection) {
            $('#connection').html('<i style="color: red;">Ведутся работы по монтажу сетей</i>')
        } else {
            $('#connection').html(geo.connection)
        }
    });


    ymaps.ready(function () {

        window.myMap = new ymaps.Map('map', {
            center: [55.751604038917286,37.6180801784972],
            zoom: 8
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
            var properties = {
                hintContent: i, 
                balloonContentHeader: cities[data[i].city].name + ', ' + data[i].street,
                balloonContentBody: "<b>Тарифы</b>: " + (data[i].tariffs? data[i].tariffs.map(tariff => tariff.name + ' Мбит/с').join(','): '<i>нет</i>'),
                balloonContentFooter: "<b>Подключение</b>: " + (data[i].connection? data[i].connection: '<i>Ведутся работы по монтажу сети</i>')
            }
            if (data[i].point) {
                var point = new ymaps.Placemark(data[i].point, properties, {
                    iconColor: '#D73AD2'
                });
                point.events.add('click', function (e) {
                    var index = e.get('target').properties._data.hintContent;
                    $('#input-city').val(data[index].city).change();
                    $('#input-street').val(data[index].point.join(',')).change();
                })
                geoObjects.push(point);
            }
            if (data[i].rectangle) {
                var rectangle = new ymaps.Rectangle(data[i].rectangle.geometry? data[i].rectangle.geometry: data[i].rectangle,
                    properties, data[i].rectangle.options? data[i].rectangle.options: {})
                rectangle.events.add('click', function (e) {
                    var index = e.get('target').properties._data.hintContent;
                    $('#input-city').val(data[index].city).change();
                    $('#input-street').val(data[index].point.join(',')).change();
                })
                myMap.geoObjects.add(rectangle);
            }
            if (data[i].polygon) {
                var polygon = new ymaps.Polygon(data[i].polygon.geometry? data[i].polygon.geometry: data[i].polygon,
                    properties, data[i].polygon.options? data[i].polygon.options: {})
                polygon.events.add('click', function (e) {
                    var index = e.get('target').properties._data.hintContent;
                    $('#input-city').val(data[index].city).change();
                    $('#input-street').val(data[index].point.join(',')).change();
                })
                myMap.geoObjects.add(polygon);
            }
            if (data[i].circle) {
                var circle = new ymaps.Circle(data[i].circle.geometry? data[i].circle.geometry: data[i].circle,
                    properties, data[i].circle.options? data[i].circle.options: {})
                circle.events.add('click', function (e) {
                    var index = e.get('target').properties._data.hintContent;
                    $('#input-city').val(data[index].city).change();
                    $('#input-street').val(data[index].point.join(',')).change();
                })
                myMap.geoObjects.add(circle);
            }
        }
    
        clusterer.add(geoObjects);
    
        myMap.geoObjects.add(clusterer);
    
        //myMap.setBounds(clusterer.getBounds(), {
            //checkZoomRange: true
        //});

        //$('#input-city').change();
    
    });
});