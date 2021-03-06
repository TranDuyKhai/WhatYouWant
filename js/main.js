$(".read-more").on("click", function(){
	var text_more;
	var content_collapse = $(this).data("target");
	var text_close = $("[data-collapse="+content_collapse+"]").data("text-close");
	if(!$(this).hasClass('collapse-open')){
		$(this).data("text-more", $(this).html());
		text_more = $(this).data("text-more");
		$(this).addClass('collapse-open');
		$(this).html(text_close);
		$("[data-collapse="+content_collapse+"]").slideDown(300);
	} else {
		// if content is collapsed
		text_more = $(this).data("text-more");
		$(this).html(text_more);
		$(this).removeClass('collapse-open');
		$("[data-collapse="+content_collapse+"]").slideUp(300);
	}
});

var ctx = document.getElementById('rating-chart').getContext('2d');
var data = JSON.parse("[" + $('.rating-chart').data('value') +','+ $('.rating-chart').data('max') + "]");

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
			}],
			xAxes: [{
				ticks: {
					display: false
				},
				userCallback: function(item, index) {
					if (!(index % 4)) return item;
				},
				autoSkip: false
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
	},
});

if($(window).width() > 1024){
	var distribution = document.getElementById('distribution-chart--desktop').getContext('2d');
}else{
	var distribution = document.getElementById('distribution-chart--mobo').getContext('2d');
}
var data_distribution = JSON.parse("[" + $('.distribution-chart').data('value') +','+ $('.distribution-chart').data('max') + "]");

var distribution_chart = new Chart(distribution, {
	type: 'line',
	data: {
		labels: "Unavailable",
		datasets: [{
			label: "Unavailable",
			fill: true,
			backgroundColor: '#00A4D4',
			pointBackgroundColor: '#FFFFFF',
			borderColor: '#00A4D4',
			pointHighlightStroke: '#FFFFFF',
			borderCapStyle: 'butt',
			data: data_distribution,

		}]
	},
	options: {
		responsive: false,
		legend: {
			display: false,
		},
		scales: {
			yAxes: [{
				stacked: true,
			}],
			xAxes: [{
				ticks: {
					display: false
				}
			}]
		},
		animation: {
			duration: 750,
		},
	}
});
