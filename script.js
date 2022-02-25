require([
      "esri/Map",
      "esri/layers/FeatureLayer",
      "esri/views/MapView",
      "dojo/domReady!"
    ], function(
      Map,
      FeatureLayer,
      MapView
    ) {

      // Create the map
      var map = new Map({
        basemap: "gray"
      });

      // Create the MapView
      var view = new MapView({
        container: "viewDiv",
        map: map,
        center:[-90.244, 38.634],
        zoom: 11
      });
      var template = {
        title: "Neighborhood: {NHD_NAME}",
        content: [{
          type: "fields",
          fieldInfos: [{
            fieldName: "NHD_NAME",
            label: "Name: ",
            visible: true
          }, {
            fieldName: "NHD_NUM",
            label: "Number: ",
            visible: true
          }, {
            fieldName: "Shape__Area",
            label: "Area: ",
            visible: true
          }
                      ]
        }]
      };
      var featureLayer = new FeatureLayer({
        url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/ArcGIS/rest/services/STL_Neighborhood/FeatureServer/0",
        outFields: ["*"],
        popupTemplate: template
      });
  
      map.add(featureLayer);
    });
