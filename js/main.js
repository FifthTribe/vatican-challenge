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
  transition: 'fade' // none/fade/slide/convex/concave/zoom
});

$(function(){
  $('.stat-tabs-nav a').on('click',function(e){
    e.preventDefault();
    $('.stat-tabs-nav > div, .stat-tabs-nav > div > a').removeClass('active');
    $(this).addClass('active');
    $(this).parent().addClass('active');
    $('.stat-tab').removeClass('active');
    var id = $(this).attr('href');
    $(id).addClass('active');
  });

  $('.stat-tab-answer-no').on('click',function(e){
    e.preventDefault();
    $('.stat-tabs-nav li').removeClass('active');
    $('.stat-tab').removeClass('active');
    var id = $(this).attr('href');
    $(id).addClass('active');
    $('.stat-tabs-nav li a[href="'+id+'"]').parent().addClass('active');
  });

  $('.goto-next-slide').on('click',function(e){
    e.preventDefault();
    Reveal.next();
  });

  function svgAnimate (){
      var s = Snap('#journey-map');
      //var linePath = "M-3,148.6c0,0,43.9,7,49.4-17.2c3.5-15.3-9.4-19.7-17.3-13.8c-6,4.4-10,19,11.3,25.4 c24.9,7.5,70.7-31.2,91-61.8S233-41.5,286.3,29.2c0,0-60.7,35.5-24.9,87.9c36.2,53,83.5,15.6,83.5,15.6s19.3,19.5,68.4,17.1";
      var linePath = "M 75 150 S 75 150 100 130 S 100 130 190 95 S 190 95 400 105";
      //var reverseLinePath = "M 400 105 S 400 105 190 95 S 190 95 100 130 S 100 130 150 75 S 150 75 75 150";
      var reverseLinePath = "M 400 105 C 190 95 280 60 190 95 C 100 130 125 110 100 130 S 100 130 75 150";
      var lineLength = Snap.path.getTotalLength(linePath);
      var reverseLineLength = Snap.path.getTotalLength(reverseLinePath);

      /*var originalLine = s.path(linePath);
      originalLine.attr({
          fill:'none',
          stroke:'#FFFFFF',
          'stroke-dasharray': lineLength + ' ' + lineLength,
          'stroke-dashoffset': lineLength,
          'stroke-width' :6,
          'stroke-linecap' :'round',
          'stroke-linejoin' :'round',
          'stroke-miterlimit' :10
      });
      originalLine.animate({
          strokeDashoffset : 0
      },0);*/

      // Apply to Mentor Line
      var applyToMentorLine = s.path(linePath);
      applyToMentorLine.attr({
          fill:'none',
          stroke:'#B3282D',
          'stroke-dasharray': lineLength + ' ' + lineLength,
          'stroke-dashoffset': lineLength,
          'stroke-width' :6,
          'stroke-linecap' :'round',
          'stroke-linejoin' :'round',
          'stroke-miterlimit' :10
      });

      // Apply Cricle
      var applyCircle = s.paper.circle(53, 146, 25);
      applyCircle.attr({
        fill:'#EEEAE4',
        stroke: '#B3282D',
        'stroke-width':6
      });

      applyCircle.click(function(){
        //reverseAnimateFromMentor();
        applyToMentorLine.animate({
            strokeDashoffset : lineLength
        },1000);
      });

      // Mentor Cricle
      var mentorCircle = s.paper.circle(420, 120, 25);
      mentorCircle.attr({
        fill:'#EEEAE4',
        stroke: '#ADADAD',
        'stroke-width':6
      });

      mentorCircle.click(function(){
        animateToMentor();
      });

      function animateToMentor(){
        applyToMentorLine.animate({
            strokeDashoffset : 0
        },1000);

      }

      function reverseAnimateFromMentor(){
        var reversedPathString = SmartSVGPath.reverse( linePath );
        console.log('reversedPathString');
        console.log(reversedPathString);
        var reverseApplyToMentorLine = s.path(reverseLinePath);
        reverseApplyToMentorLine.attr({
            fill:'none',
            stroke:'green',
            'stroke-dasharray': reverseLineLength + ' ' + reverseLineLength,
            'stroke-dashoffset': reverseLineLength,
            'stroke-width' :6,
            'stroke-linecap' :'round',
            'stroke-linejoin' :'round',
            'stroke-miterlimit' :10
        });
        reverseApplyToMentorLine.animate({
          strokeDashoffset:0
        }, 1000);
      }

    }
    svgAnimate();

});
