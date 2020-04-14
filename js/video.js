
  $(".video_link").click(function() {
    $('#modal').show().get(0).offsetHeight;
    $('#page-wrapper').addClass('modal-mode');
    // document.documentElement.style.overflow='hidden';
    var myPlayer = videojs('my-video');
    var videoUrl = $(this).attr("videohref");
    videojs("my-video", {}, function() {
        window.myPlayer = this;
        $("#my-video source").attr("src", videoUrl);
        myPlayer.src(videoUrl);
        myPlayer.load(videoUrl);
        myPlayer.play();
    });
    $('.modal_hide').remove();

});

$('#modal-close-btn').click(function () {
    $('#page-wrapper').removeClass('modal-mode');
    myPlayer.pause();
    setTimeout(function () {
        $('#modal').hide();
    },500)


});

$('#modal-video').click(function () {
    $('#modal-close-btn').show();
});