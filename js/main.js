$(function(){

	var ctx = document.getElementById('rating-chart').getContext('2d');
	var data = JSON.parse("[" + $('.rating-chart').data('value') + "]");
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['1 star', '2 star', '3 star', '4 star', '5 star'],
			datasets: [{
				data: data,
				backgroundColor: ['#00A4D4','#00A4D4','#00A4D4','#00A4D4','#00A4D4','#00A4D4',],
			}]
		},
		options: {
			legend: {
				display: false,
			},
			tooltips: {
				enabled: false,
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		},
	});

	var doughnut = document.getElementById('country-chart').getContext('2d');
	var data_doughnut = JSON.parse("[" + $('.country-chart').data('value') + "]"),
		labels_doughnut = $('.country-chart').data('value').split(',');
	var myChart = new Chart(doughnut, {
		type: 'doughnut',
		data: {
			labels: ['Anh-Mỹ', 'Trung Quốc', 'Pháp', 'Nhật', 'Thái Lan'],
			datasets: [{
				data: data_doughnut,
				backgroundColor: ['#FF5252','#FFCA52','#00A4D4','#8952FF','#C4C4C4'],
				borderColor:['#FF5252','#FFCA52','#00A4D4','#8952FF','#C4C4C4'],
			}]
		},
		options: {
			legend: {
				display: false,
			},
			cutoutPercentage: 25,
			tooltips: {
				enabled: false,
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		},
	});
});