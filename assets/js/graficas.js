var options = {
  chart: {
    type: "bar", // Tipo de gráfico (barras en este caso)
  },
  series: [
    {
      name: "Ventas",
      data: [30, 40, 45, 50, 49, 60, 70, 91], // Datos del gráfico
    },
  ],
  xaxis: {
    categories: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago"], // Categorías del eje X
  },
};

var chart = new ApexCharts(document.querySelector("#miGrafico"), options);
chart.render();

var optionsLineas = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "Temperatura",
      data: [20, 22, 25, 27, 26, 23, 21],
    },
  ],
  xaxis: {
    categories: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
  },
};

var chartLineas = new ApexCharts(
  document.querySelector("#graficoLineas"),
  optionsLineas
);
chartLineas.render();

var optionsPastel = {
  chart: {
    type: "pie",
  },
  series: [44, 55, 13, 43],
  labels: ["Manzanas", "Naranjas", "Plátanos", "Uvas"],
};

var chartPastel = new ApexCharts(
  document.querySelector("#graficoPastel"),
  optionsPastel
);
chartPastel.render();
