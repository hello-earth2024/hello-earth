window.onload = function () {
    // Criar contêiner para os botões
    var buttonContainer = document.createElement('div');
    buttonContainer.style.position = 'absolute';
    buttonContainer.style.top = '10px';
    buttonContainer.style.left = '10px';
    buttonContainer.style.zIndex = '100';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.flexDirection = 'column';
    document.body.appendChild(buttonContainer);

    // Criar contêiner separado para os botões maiores na direita
    var rightButtonContainer = document.createElement('div');
    rightButtonContainer.style.position = 'absolute';
    rightButtonContainer.style.top = '400px';
    rightButtonContainer.style.right = '40px'; // Alinhado à direita
    rightButtonContainer.style.zIndex = '100';
    rightButtonContainer.style.display = 'flex';
    rightButtonContainer.style.flexDirection = 'column';
    document.body.appendChild(rightButtonContainer);

    // Função para criar um botão
    function createButton(id, text, isRightSide = false) {
        var button = document.createElement('button');
        button.id = id;
        button.innerText = text;
        button.style.margin = '5px';
        button.style.padding = isRightSide ? '20px' : '10px'; // Botões à direita maiores
        button.style.backgroundColor = '#3498db';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.style.fontSize = isRightSide ? '20px' : '16px'; // Maior fonte para os botões à direita
        button.style.borderRadius = '5px';

        button.onmouseover = function () {
            button.style.backgroundColor = '#2980b9';
        };

        button.onmouseout = function () {
            button.style.backgroundColor = '#3498db';
        };

        if (isRightSide) {
            rightButtonContainer.appendChild(button); // Adiciona ao contêiner da direita
        } else {
            buttonContainer.appendChild(button); // Adiciona ao contêiner da esquerda
        }
        return button;
    }

    // Criar botões normais à esquerda
    var button1 = createButton('button1', 'Flying Rivers');
    var button2 = createButton('button2', 'Carbon Monoxide');
    var button3 = createButton('button3', 'Vegetation');
    var button4 = createButton('button4', 'Air Temperature');

    // Criar botões maiores à direita
    var button5 = createButton('button5', 'Our university', true); // Maior botão à direita
    var button6 = createButton('button6', 'Toggle GIBS Map', true); // Maior botão à direita
    var button7 = createButton('button7', 'NASA HQ', true); // Maior botão à direita

    var k = false;

    // Funções de clique para cada botão
    button1.onclick = function () {
        console.log("Flying rivers");
        window.location.href = 'time_2.html';
    };

    button2.onclick = function () {
        console.log("Carbon Monoxide");
        window.location.href = 'time_3.html';
    };

    button3.onclick = function () {
        console.log("Vegetation");
        window.location.href = 'time_4.html';
    };

    button4.onclick = function () {
        console.log("Air Temperature");
        window.location.href = 'time_5.html';
    };

    button5.onclick = function () {
        console.log("Our university");

        var latitude = -22.8184; // Unicamp latitude
        var longitude = -47.0647; // Unicamp longitude
        var height = 10000; // Adjust as needed

        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height),
            orientation: {
                heading: Cesium.Math.toRadians(0.0),
                pitch: Cesium.Math.toRadians(-90.0), // Perpendicular to the Earth's surface
                roll: 0.0
            },
            duration: 3
        });
    };

    button6.onclick = function () {
        k = !k; // Alternar entre true e false
        doClockUpdate(); // Aplicar a alteração imediatamente
    };

    button7.onclick = function () {
        console.log("NASA HQ");

        var latitude = 38.883064; // NASA HQ latitude
        var longitude = -77.016546; // NASA HQ longitude
        var height = 300;

        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height),
            orientation: {
                heading: Cesium.Math.toRadians(0.0),
                pitch: Cesium.Math.toRadians(-90.0),
                roll: 0.0
            },
            duration: 3
        });
    };

    button6.onclick = function () {
        k = !k; // Alternar entre true e false
        doClockUpdate(); // Aplicar a alteração imediatamente
    };

    // Criar mapa Cesium
    var initialTime = Cesium.JulianDate.fromDate(new Date(Date.UTC(2015, 11, 25)));
    var startTime = Cesium.JulianDate.fromDate(new Date(Date.UTC(2015, 11, 25)));
    var endTime = Cesium.JulianDate.now();

    var clock = new Cesium.Clock({
        startTime: startTime,
        currentTime: initialTime,
        stopTime: endTime,
        clockRange: Cesium.ClockRange.CLAMPED,
        clockStep: Cesium.ClockStep.SYSTEM_CLOCK,
        multiplier: 1 
    });

    var clockViewModel = new Cesium.ClockViewModel(clock);
    clockViewModel.startTime = startTime;
    clockViewModel.endTime = endTime;
    clockViewModel.currentTime = initialTime;
    clockViewModel.multiplier = 14400;
    clockViewModel.clockRange = Cesium.ClockRange.CLAMPED;

    var previousTime = null;
    var isoDate = function (isoDateTime) {
        return isoDateTime.split('T')[0];
    };

    var createDailyProvider = function () {
        var isoDateTime = clock.currentTime.toString();
        var time = 'TIME=' + isoDate(isoDateTime);

        return new Cesium.WebMapTileServiceImageryProvider({
            url: 'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?' + time,
            layer: 'IMERG_Precipitation_Rate',
            style: '',
            format: 'image/png',
            tileMatrixSetID: '2km',
            maximumLevel: 8,
            tileWidth: 256,
            tileHeight: 256,
            tilingScheme: gibs.GeographicTilingScheme()
        });
    };

    var viewer = new Cesium.Viewer('map', {
        imageryProvider: new Cesium.OpenStreetMapImageryProvider({
            url: 'https://a.tile.openstreetmap.org/'
        }),
        clockViewModel: clockViewModel,
        baseLayerPicker: false,
        geocoder: false
    });

    // Adicionar o provedor de camadas GIBS
    var gibsLayer = viewer.scene.imageryLayers.addImageryProvider(createDailyProvider());
    viewer.scene.imageryLayers.raiseToTop(gibsLayer); // Inicialmente, GIBS estará sobre o OpenStreetMap

    var previousYear = new Date();
    previousYear.setUTCFullYear(previousYear.getUTCFullYear() - 1);
    viewer.timeline.zoomTo(Cesium.JulianDate.fromDate(previousYear), endTime);

    viewer.scene.globe.baseColor = Cesium.Color.BLACK;

    function doClockUpdate() {
        viewer.scene.imageryLayers.removeAll();
        viewer.scene.imageryLayers.addImageryProvider(
            new Cesium.OpenStreetMapImageryProvider({ url: 'https://a.tile.openstreetmap.org/' })
        );
        var newGibsLayer = viewer.scene.imageryLayers.addImageryProvider(createDailyProvider());
        newGibsLayer.alpha = k ? 0 : 1.0; // Ajustar opacidade com base no valor de `k`
    }

    var updateTimer = null;
    function onClockUpdate() {
        var isoDateTime = clock.currentTime.toString();
        var time = isoDate(isoDateTime);
        if (time !== previousTime) {
            previousTime = time;
            clearTimeout(updateTimer);
            updateTimer = setTimeout(doClockUpdate, 250);
        }
    }

    viewer.clock.onTick.addEventListener(onClockUpdate);
    onClockUpdate();
};
