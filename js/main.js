Reveal.initialize({
  width: "100%",
  height: "100%",
  margin: 0,
  minScale: 1,
  maxScale: 1,
  autoSlide: 0,
  controls: true,
  mouseWheel: true,
  progress: true,
  history: true,
  center: true,
  transition: 'slide' // none/fade/slide/convex/concave/zoom
});

$(function(){
  $('.stat-tabs-nav a').on('click',function(e){
    e.preventDefault();
    $('.stat-tabs-nav li').removeClass('active');
    $(this).parent().addClass('active');
    $('.stat-tab').removeClass('active');
    var id = $(this).attr('href')
    $(id).addClass('active');
  });
  $('.stat-tab-answer-no').on('click',function(e){
    e.preventDefault();
    $('.stat-tabs-nav li').removeClass('active');
    $('.stat-tab').removeClass('active');
    var id = $(this).attr('href')
    $(id).addClass('active');
    $('.stat-tabs-nav li a[href="'+id+'"]').parent().addClass('active');
  })

  $('.goto-next-slide').on('click',function(e){
    e.preventDefault();
    Reveal.next();
  });
});
