// IMERG_Precipitation_Rate

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

  // Função para criar um botão
  function createButton(id, text) {
      var button = document.createElement('button');
      button.id = id;
      button.innerText = text;
      button.style.margin = '5px';
      button.style.padding = '10px';
      button.style.backgroundColor = '#3498db';
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.cursor = 'pointer';
      button.style.fontSize = '16px';
      button.style.borderRadius = '5px';

      button.onmouseover = function () {
          button.style.backgroundColor = '#2980b9';
      };

      button.onmouseout = function () {
          button.style.backgroundColor = '#3498db';
      };

      buttonContainer.appendChild(button);
      return button;
  }

  // Criar 5 botões
  var button1 = createButton('button1', 'Flying Rivers');
  var button2 = createButton('button2', 'Carbon Monoxide');
  var button3 = createButton('button3', 'Vegetation');
  var button4 = createButton('button4', 'Air Temperature');

  // Funções de clique para cada botão
  button1.onclick = function () {
      console.log("Flying rivers");
      window.location.href = 'time_2.html';
      // Adicione aqui o que deseja que o botão faça
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
    multiplier: 1 // Start with time passing
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

  viewer.scene.imageryLayers.addImageryProvider(createDailyProvider());

  var previousYear = new Date();
  previousYear.setUTCFullYear(previousYear.getUTCFullYear() - 1);
  viewer.timeline.zoomTo(Cesium.JulianDate.fromDate(previousYear), endTime);

  viewer.scene.globe.baseColor = Cesium.Color.BLACK;

  function doClockUpdate() {
      viewer.scene.imageryLayers.removeAll();
      viewer.scene.imageryLayers.addImageryProvider(
          new Cesium.OpenStreetMapImageryProvider({ url: 'https://a.tile.openstreetmap.org/' })
      );
      viewer.scene.imageryLayers.addImageryProvider(createDailyProvider());
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
