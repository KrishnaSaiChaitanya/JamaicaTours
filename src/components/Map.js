import React, { useEffect } from "react";

const GoogleMapsComponent = () => {
  useEffect(() => {
    const el = document.getElementById("google-map");
    const coords = [
      {
        location_name: "Vigurid koduk\u00fcpsetised",
        latitude: "58.639870",
        longitude: "27.158714",
      },
      {
        location_name: "RebaSte linnutalu",
        latitude: "58.641194",
        longitude: "27.068342",
      },
      {
        location_name: "Rannapuura kalapood",
        latitude: "58.668550",
        longitude: "27.163442",
      },
      {
        location_name: "Kodavere P\u00e4rimuskeskus",
        latitude: "58.673408",
        longitude: "27.014656",
      },
      {
        location_name: "Ranna Puhkebaas",
        latitude: "58.734948",
        longitude: "27.102788",
      },
      {
        location_name: "Kalamehe talu",
        latitude: "58.595324",
        longitude: "27.206170",
      },
      {
        location_name: "Alatskivi loss",
        latitude: "58.603777",
        longitude: "27.129877",
      },
      {
        location_name: "Liivi muuseum",
        latitude: "58.570652",
        longitude: "27.122152",
      },
      {
        location_name: "Vaino talu",
        latitude: "58.605061",
        longitude: "27.209705",
      },
      {
        location_name: "Kostja sibulatalu",
        latitude: "58.548478",
        longitude: "27.217379",
      },
      {
        location_name: "Alatskivi loss",
        latitude: "58.603799",
        longitude: "27.129881",
      },
      {
        location_name: "Kivi k\u00f5rts",
        latitude: "58.601714",
        longitude: "27.135843",
      },
      {
        location_name: "Nina Kordon",
        latitude: "58.609311",
        longitude: "27.202877",
      },
      {
        location_name: "Varnja palvela",
        latitude: "58.491859",
        longitude: "27.240682",
      },
      {
        location_name: "Galerii ambulARToorium",
        latitude: "58.530090",
        longitude: "27.231438",
      },
      {
        location_name: "Voronja galerii",
        latitude: "58.496022",
        longitude: "27.237431",
      },
      {
        location_name: "Peipsimaa k\u00fclastuskeskus",
        latitude: "58.553413",
        longitude: "27.213537",
      },
      {
        location_name: "Alatskivi looduskeskus",
        latitude: "58.602093",
        longitude: "27.135828",
      },
      {
        location_name: "Peipsi kalapunkt",
        latitude: "58.664507",
        longitude: "27.164222",
      },
      {
        location_name: "Alatskivi magasiait",
        latitude: "58.601867",
        longitude: "27.134823",
      },
      {
        location_name: "Mesi tare kodumaja",
        latitude: "58.480959",
        longitude: "27.242362",
      },
      {
        location_name: "Turgi k\u00e4sit\u00f6\u00f6talu",
        latitude: "58.664804",
        longitude: "27.127374",
      },
      {
        location_name: "Alatskivi m\u00f5isa tall",
        latitude: "58.602625",
        longitude: "27.136153",
      },
      {
        location_name: "Kargaja kuke saun",
        latitude: "58.503672",
        longitude: "27.163240",
      },
      {
        location_name: "Alatskivi Loss",
        latitude: "58.603789",
        longitude: "27.129681",
      },
      {
        location_name: "Alatskivi m\u00f5is",
        latitude: "58.602173",
        longitude: "27.132251",
      },
      {
        location_name: "Kadrina M\u00f5is",
        latitude: "58.705042",
        longitude: "27.092967",
      },
    ];

    const GoogleMaps = function (el, coords) {
      const gm = window.google && window.google.maps;

      if (!gm) return;

      const map = new gm.Map(el);
      const bounds = new gm.LatLngBounds();
      const infoWindow = new gm.InfoWindow();

      for (let coord in coords) {
        placeMarker(coords[coord]);
      }

      map.fitBounds(bounds);

      const idleListener = gm.event.addListener(map, "idle", function () {
        if (map.getZoom() > 14) map.setZoom(14);
        gm.event.removeListener(idleListener);
      });

      if (infoWindow) {
        gm.event.addListener(map, "click", function () {
          infoWindow.close();
        });
      }

      function placeMarker(loc) {
        const marker = new gm.Marker({
          map: map,
          position: {
            lat: Number(loc.latitude),
            lng: Number(loc.longitude),
          },
        });

        if (infoWindow) {
          gm.event.addListener(marker, "click", function () {
            infoWindow.close();
            infoWindow.setContent(infoWindowTemplate(loc));
            infoWindow.open(map, marker);
          });
        }

        bounds.extend(marker.position);
      }

      function infoWindowTemplate(data) {
        const text = data.location_name;
        const link = data.location_link;

        const content = link ? '<a href="' + link + '">' + text + "</a>" : text;

        return (
          '<div className="google-map-infowindow-content">' + content + "</div>"
        );
      }
    };

    window.googleMapInit = function () {
      GoogleMaps(el, coords);
    };

    // Load the Google Maps script
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?callback=googleMapInit";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script element when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return <div id="google-map" style={{ width: "100%", height: "500px" }}></div>;
};

export default GoogleMapsComponent;
