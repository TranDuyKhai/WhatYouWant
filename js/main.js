$('#videoPopUp').on('show.bs.modal', function (e) {
    $('.modal-body.video').append('<iframe src="https://www.youtube.com/embed/jvftlhHTzhg?autoplay=1&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});

$('#videoPopUp').on('hidden.bs.modal', function (e) {
    $('.modal-body.video').html("");
})