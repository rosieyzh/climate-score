

var barOptions_stacked = {
    tooltips: {
        enabled: false
    },
    hover :{
        animationDuration:0
    },
    scales: {
        xAxes: [{
            ticks: {
                beginAtZero:true,
                fontFamily: "'Work Sans','Open Sans Bold', sans-serif",
                fontSize:11
            },
            scaleLabel:{
                display:false
            },
            gridLines: {
            }, 
            stacked: true
        }],
        yAxes: [{
            gridLines: {
                display:false,
                color: "#fff",
                zeroLineColor: "#fff",
                zeroLineWidth: 0
            },
            ticks: {
                fontFamily: "'Work Sans','Open Sans Bold', sans-serif",
                fontSize:14,
                fontStyle: 700
            },
            stacked: true
        }]
    },
    legend:{
        display:true,
        position:'bottom',

    },

    title: {
            display: true,
            text: 'EXTREME WEATHER - TOP 5 MOST RELEVANT TERMS',
            fontSize: 20,
            fontFamily: "'Work Sans','Open Sans Bold', sans-serif"
    },
    
    animation: {
        onComplete: function () {
            var chartInstance = this.chart;
            var ctx = chartInstance.ctx;

            Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                Chart.helpers.each(meta.data.forEach(function (bar, index) {
                    data = dataset.data[index];
                    
                }),this)
            }),this);
        }
    },
    responsive: false,
    pointLabelFontFamily : "Quadon Extra Bold",
    scaleFontFamily : "Quadon Extra Bold",
};

window.onload = function() {
	var ctx = document.getElementById("Chart1");
	var myChart = new Chart(ctx, {
	    type: 'horizontalBar',
	    data: {
	        labels: ["Earth", "Planet", "Forest", "Ice", "Storm"],
	        
	        datasets: [
	        {
	        	label: 'Estimated term frequency within topic', 
	            data: [1276, 1194, 1010, 932, 799],
	            backgroundColor: "#F96167",
	            hoverBackgroundColor: "#d23a40"
	        },{
	        	label: 'Overall term frequency',
	            data: [5,5,5,5,5],
	            backgroundColor: "#FCE77D",
	            hoverBackgroundColor: "#f2d145"
	        }]
    },
    options: barOptions_stacked,
});
}
