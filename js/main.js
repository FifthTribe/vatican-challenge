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
      var s_mobile = Snap('#journey-map-mobile');

      var activeColor = '#00AEEF';
      var activePathColor = '#353535';
      //M 75 150 S 75 150 100 130 S 100 130 190 95 S 190 95 400 105
      var applyToMentorLinePath = "M 53 446 S 53 446 75 400 S 75 400 100 350 S 100 350 300 270";
      var applyToMentorLineLength = Snap.path.getTotalLength(applyToMentorLinePath);
      var mentorToAcceleratorLinePath = "M 300 270 S 300 270 350 280 S 350 280 500 290 S 500 290 600 300";
      var mentorToAcceleratorLineLength = Snap.path.getTotalLength(mentorToAcceleratorLinePath);
      var acceleratorToPitchLinePath = "M 600 300 S 600 300 680 250 S 680 250 760 190 S 760 190 900 150";
      var acceleratorToPitchLineLength = Snap.path.getTotalLength(acceleratorToPitchLinePath);

      var applyToMentorLinePath_mobile = "M 20 290 S 20 290 45 277 S 45 277 77 250 S 77 250 120 230";
      var applyToMentorLineLength_mobile = Snap.path.getTotalLength(applyToMentorLinePath_mobile);
      var mentorToAcceleratorLinePath_mobile = "M 120 230 S 120 230 150 200 S 150 200 180 175 S 180 175 210 150";
      var mentorToAcceleratorLineLength_mobile = Snap.path.getTotalLength(mentorToAcceleratorLinePath_mobile);
      var acceleratorToPitchLinePath_mobile = "M 210 150 S 219 150 233 108 S 233 108 247 57 S 247 57 260 20";
      var acceleratorToPitchLineLength_mobile = Snap.path.getTotalLength(acceleratorToPitchLinePath_mobile);


      // Apply to Mentor Line
      var applyToMentorLine = s.path(applyToMentorLinePath);
      applyToMentorLine.attr({
          fill:'none',
          stroke:activePathColor,
          'stroke-dasharray': applyToMentorLineLength + ' ' + applyToMentorLineLength,
          'stroke-dashoffset': applyToMentorLineLength,
          'stroke-width' :6,
          'stroke-linecap' :'round',
          'stroke-linejoin' :'round',
          'stroke-miterlimit' :10
      });
      var applyToMentorLine_mobile = s_mobile.path(applyToMentorLinePath_mobile);
      applyToMentorLine_mobile.attr({
          fill:'none',
          stroke:activePathColor,
          'stroke-dasharray': applyToMentorLineLength_mobile + ' ' + applyToMentorLineLength_mobile,
          'stroke-dashoffset': applyToMentorLineLength_mobile,
          'stroke-width' :3,
          'stroke-linecap' :'round',
          'stroke-linejoin' :'round',
          'stroke-miterlimit' :10
      });

      // Mentor to Accelerator Line
      var mentorToAcceleratorLine = s.path(mentorToAcceleratorLinePath);
      mentorToAcceleratorLine.attr({
          fill:'none',
          stroke:activePathColor,
          'stroke-dasharray': mentorToAcceleratorLineLength + ' ' + mentorToAcceleratorLineLength,
          'stroke-dashoffset': mentorToAcceleratorLineLength,
          'stroke-width' :6,
          'stroke-linecap' :'round',
          'stroke-linejoin' :'round',
          'stroke-miterlimit' :10
      });
      var mentorToAcceleratorLine_mobile = s_mobile.path(mentorToAcceleratorLinePath_mobile);
      mentorToAcceleratorLine_mobile.attr({
          fill:'none',
          stroke:activePathColor,
          'stroke-dasharray': mentorToAcceleratorLineLength_mobile + ' ' + mentorToAcceleratorLineLength_mobile,
          'stroke-dashoffset': mentorToAcceleratorLineLength_mobile,
          'stroke-width' :3,
          'stroke-linecap' :'round',
          'stroke-linejoin' :'round',
          'stroke-miterlimit' :10
      });

      // Accelerator to Pitch Line
      var acceleratorToPitchLine = s.path(acceleratorToPitchLinePath);
      acceleratorToPitchLine.attr({
          fill:'none',
          stroke:activePathColor,
          'stroke-dasharray': acceleratorToPitchLineLength + ' ' + acceleratorToPitchLineLength,
          'stroke-dashoffset': acceleratorToPitchLineLength,
          'stroke-width' :6,
          'stroke-linecap' :'round',
          'stroke-linejoin' :'round',
          'stroke-miterlimit' :10
      });
      var acceleratorToPitchLine_mobile = s_mobile.path(acceleratorToPitchLinePath_mobile);
      acceleratorToPitchLine_mobile.attr({
          fill:'none',
          stroke:activePathColor,
          'stroke-dasharray': acceleratorToPitchLineLength_mobile + ' ' + acceleratorToPitchLineLength_mobile,
          'stroke-dashoffset': acceleratorToPitchLineLength_mobile,
          'stroke-width' :3,
          'stroke-linecap' :'round',
          'stroke-linejoin' :'round',
          'stroke-miterlimit' :10
      });

      // Apply Cricle
      var applyCircle = s.paper.circle(53, 446, 25);
      applyCircle.attr({
        fill:'#EEEAE4',
        stroke: activeColor,
        'stroke-width':6
      });
      var applyText = s.paper.text(20, 500, "APPLY");
      applyText.attr({
        'font-size': '26px',
        'font-weight':'bold'
      });
      var applyCircle_mobile = s_mobile.paper.circle(20, 290, 15);
      applyCircle_mobile.attr({
        fill:'#EEEAE4',
        stroke: activeColor,
        'stroke-width':3
      });
      var applyText_mobile = s_mobile.paper.text(3, 320, "APPLY");
      applyText_mobile.attr({
        'font-size': '14px',
        'font-weight':'bold'
      });

      var currentLevel = 1;
      applyCircle.click(function(){
        $('.process-box > div').removeClass('active');
        $('#apply-box').addClass('active');
        this.attr({
          stroke: activeColor
        });
        switch(currentLevel){
          case 3:
            pitchCircle.attr({
              stroke: '#ADADAD'
            });
            acceleratorToPitchLine.animate({
              strokeDashoffset:acceleratorToPitchLineLength
            },333,function(){
              acceleratorCircle.attr({
                stroke: '#ADADAD'
              });
              mentorToAcceleratorLine.animate({
                strokeDashoffset:mentorToAcceleratorLineLength
              },333,function(){
                mentorCircle.attr({
                  stroke: '#ADADAD'
                });
                applyToMentorLine.animate({
                  strokeDashoffset:applyToMentorLineLength
                },334);
              });
            });
            break;
          case 2:
            acceleratorCircle.attr({
              stroke: '#ADADAD'
            });
            mentorToAcceleratorLine.animate({
              strokeDashoffset:mentorToAcceleratorLineLength
            },500,function(){
              mentorCircle.attr({
                stroke: '#ADADAD'
              });
              applyToMentorLine.animate({
                strokeDashoffset:applyToMentorLineLength
              },500);
            });
            break;
          case 1:
            mentorCircle.attr({
              stroke: '#ADADAD'
            });
            applyToMentorLine.animate({
              strokeDashoffset:applyToMentorLineLength
            },1000);
            break;
          default:
            break;
        }
        currentLevel = 1;
      });

      // Mentor Cricle
      var mentorCircle = s.paper.circle(300, 270, 25);
      mentorCircle.attr({
        fill:'#EEEAE4',
        stroke: '#ADADAD',
        'stroke-width':6
      });
      var mentorText = s.paper.text(250, 325, "MENTOR");
      mentorText.attr({
        'font-size': '26px',
        'font-weight':'bold'
      });
      var mentorCircle_mobile = s_mobile.paper.circle(120, 230, 15);
      mentorCircle_mobile.attr({
        fill:'#EEEAE4',
        stroke: '#ADADAD',
        'stroke-width':3
      });
      var mentorText_mobile = s_mobile.paper.text(100, 260, "MENTOR");
      mentorText_mobile.attr({
        'font-size': '14px',
        'font-weight':'bold'
      });

      mentorCircle.hover(function(){
        this.attr({
          stroke: activeColor
        });
      }, function(){
        if ( !this.hasClass('clicked') ){
          this.attr({
            stroke: '#ADADAD'
          });
        }
      });

      mentorCircle.click(function(){
        $('.process-box > div').removeClass('active');
        $('#mentor-box').addClass('active');
        this.addClass('clicked');
        this.attr({
          stroke: activeColor
        });
        switch(currentLevel){
          case 3:
            pitchCircle.attr({
              stroke: '#ADADAD'
            });
            acceleratorToPitchLine.animate({
              strokeDashoffset:acceleratorToPitchLineLength
            },500,function(){
              acceleratorCircle.attr({
                stroke: '#ADADAD'
              });
              mentorToAcceleratorLine.animate({
                strokeDashoffset:mentorToAcceleratorLineLength
              },500);
            });
            break;
          case 2:
            acceleratorCircle.attr({
              stroke: '#ADADAD'
            });
            mentorToAcceleratorLine.animate({
              strokeDashoffset:mentorToAcceleratorLineLength
            },1000);
            break;
          case 1:
            applyToMentorLine.animate({
              strokeDashoffset:0
            },1000);
            break;
          default:
            break;
        }
        currentLevel = 1;
      });

      // Accelerator Cricle
      var acceleratorCircle = s.paper.circle(600, 300, 25);
      acceleratorCircle.attr({
        fill:'#EEEAE4',
        stroke: '#ADADAD',
        'stroke-width':6
      });
      var acceleratorText = s.paper.text(525, 357, "ACCELERATOR");
      acceleratorText.attr({
        'font-size': '26px',
        'font-weight':'bold'
      });
      var acceleratorCircle_mobile = s_mobile.paper.circle(210, 150, 15);
      acceleratorCircle_mobile.attr({
        fill:'#EEEAE4',
        stroke: '#ADADAD',
        'stroke-width':3
      });
      var acceleratorText_mobile = s_mobile.paper.text(170, 180, "ACCELERATOR");
      acceleratorText_mobile.attr({
        'font-size': '14px',
        'font-weight':'bold'
      });

      acceleratorCircle.hover(function(){
        this.attr({
          stroke: activeColor
        });
      }, function(){
        if ( !this.hasClass('clicked') ){
          this.attr({
            stroke: '#ADADAD'
          });
        }
      });

      acceleratorCircle.click(function(){
        plusV.attr({
          x1: 594,
          y1: 300,
          x2: 606,
          y2: 300
        });
        plusH.attr({
          x1: 600,
          y1: 294,
          x2: 600,
          y2: 306
        });
        $('.process-box > div').removeClass('active');
        $('#accelerator-box').addClass('active');
        this.attr({
          stroke: activeColor
        });
        switch(currentLevel){
          case 3:
            pitchCircle.attr({
              stroke: '#ADADAD'
            });
            acceleratorToPitchLine.animate({
              strokeDashoffset:acceleratorToPitchLineLength
            },1000);
            break;
          case 2:
            mentorToAcceleratorLine.animate({
              strokeDashoffset:0
            },1000);
            break;
          case 1:
            applyToMentorLine.animate({
              strokeDashoffset:0
            },500, function(){
              mentorCircle.attr({
                stroke: activeColor
              });
              mentorToAcceleratorLine.animate({
                strokeDashoffset:0
              }, 500);
            });
            break;
          default:
            break;
        }
        currentLevel = 2;
      });

      // Pitch Cricle
      var pitchCircle = s.paper.circle(900, 150, 25);
      pitchCircle.attr({
        fill:'#EEEAE4',
        stroke: '#ADADAD',
        'stroke-width':6
      });
      var pitchText = s.paper.text(838, 205, "$1M PITCH");
      pitchText.attr({
        'font-size': '26px',
        'font-weight':'bold'
      });
      var pitchCircle_mobile = s_mobile.paper.circle(260, 20, 15);
      pitchCircle_mobile.attr({
        fill:'#EEEAE4',
        stroke: '#ADADAD',
        'stroke-width':3
      });
      var pitchText_mobile = s_mobile.paper.text(230, 48, "$1M PITCH");
      pitchText_mobile.attr({
        'font-size': '14px',
        'font-weight':'bold'
      });

      pitchCircle.hover(function(){
        this.attr({
          stroke: activeColor
        });
      }, function(){
        if ( !this.hasClass('clicked') ){
          this.attr({
            stroke: '#ADADAD'
          });
        }
      });

      pitchCircle.click(function(){
        plusV.attr({
          x1: 894,
          y1: 150,
          x2: 906,
          y2: 150
        });
        plusH.attr({
          x1: 900,
          y1: 144,
          x2: 900,
          y2: 156
        });
        $('.process-box > div').removeClass('active');
        $('#pitch-box').addClass('active');
        this.attr({
          stroke: activeColor
        });
        switch(currentLevel){
          case 3:
            break;
          case 2:
            mentorCircle.attr({
              stroke: activeColor
            });
            mentorToAcceleratorLine.animate({
              strokeDashoffset:0
            },500, function(){
              acceleratorCircle.attr({
                stroke: activeColor
              });
              acceleratorToPitchLine.animate({
                strokeDashoffset:0
              },500);
            });
            break;
          case 1:
            applyCircle.attr({
              stroke: activeColor
            });
            applyToMentorLine.animate({
              strokeDashoffset:0
            },333, function(){
              mentorCircle.attr({
                stroke: activeColor
              });
              mentorToAcceleratorLine.animate({
                strokeDashoffset:0
              }, 333, function(){
                acceleratorCircle.attr({
                  stroke: activeColor
                });
                acceleratorToPitchLine.animate({
                  strokeDashoffset:0
                },334);
              });
            });
            break;
          default:
            break;
        }
        currentLevel = 3;
      });

      //Initial plus on apply Cricle
      var plusV = s.paper.line(53, 440, 53, 452);
      plusV.attr({
        stroke: '#8E7534',
        'stroke-width':2
      });
      var plusH = s.paper.line(47,446,59,446);
      plusH.attr({
        stroke:'#8E7534',
        'stroke-width':2
      });

    }
    svgAnimate();

});

function goBack() {
  console.log("go all the way back");
    window.history.back();
}
