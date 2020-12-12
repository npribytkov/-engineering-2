$('.img-slider').slick({
    prevArrow: "<div class='prev-block'><img class='prev' src='img/svg/slider-arrow.svg'></div>",
    nextArrow: "<div class='next-block'><img class='next' src='img/svg/slider-arrow.svg'></div>",
});


$("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 800);
    return false;
});

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
$('.video-list .video-item').click(function (e){
    $('.video-item.big iframe.player').remove();
    $('.video-item').removeClass('big play');
    $('.video-item .player').empty();
    $(this).addClass('big');
    $('.video-list').prepend($(this));

    $(this).addClass('play');
    if ($(this).find('.player').length == 0){
        $(this).find('.img').append(' <div class="player"></div>')
    }
    player = new YT.Player($(this).find('.player')[0], {
        height: '645',
        width: '100%',
        videoId: $(this).data('src'),
        events: {
            'onReady': onPlayerReady,
        }
    });
});


function onPlayerReady(event) {
    event.target.playVideo();
}