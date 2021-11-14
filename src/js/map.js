export function map() {
  if (document.getElementById("map")) {
    ymaps.ready(init);
  }

  function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.89292230823245, 30.317175747313602],
        zoom: 17,
      }),
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      );

    myMap.geoObjects.add(
      new ymaps.Placemark(
        [59.89292230823245, 30.317175747313602],
        {
          balloonContent: "Установка, обслуживание и реставрация бассейнов любого типа и размеров",
        },
        {
          preset: "islands#circleIcon",
          iconColor: "#4699f8",
        },
      ),
    );
  }
}
