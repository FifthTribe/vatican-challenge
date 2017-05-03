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
      var activeColor = '#00AEEF';
      //M 75 150 S 75 150 100 130 S 100 130 190 95 S 190 95 400 105
      var applyToMentorLinePath = "M 53 446 S 53 446 75 400 S 75 400 100 350 S 100 350 300 270";
      var applyToMentorLineLength = Snap.path.getTotalLength(applyToMentorLinePath);
      var mentorToAcceleratorLinePath = "M 300 270 S 300 270 350 280 S 350 280 500 290 S 500 290 600 300";
      var mentorToAcceleratorLineLength = Snap.path.getTotalLength(mentorToAcceleratorLinePath);
      var acceleratorToPitchLinePath = "M 600 300 S 600 300 680 250 S 680 250 760 190 S 760 190 900 150";
      var acceleratorToPitchLineLength = Snap.path.getTotalLength(acceleratorToPitchLinePath);

      // Apply to Mentor Line
      var applyToMentorLine = s.path(applyToMentorLinePath);
      applyToMentorLine.attr({
          fill:'none',
          stroke:activeColor,
          'stroke-dasharray': applyToMentorLineLength + ' ' + applyToMentorLineLength,
          'stroke-dashoffset': applyToMentorLineLength,
          'stroke-width' :6,
          'stroke-linecap' :'round',
          'stroke-linejoin' :'round',
          'stroke-miterlimit' :10
      });

      // Mentor to Accelerator Line
      var mentorToAcceleratorLine = s.path(mentorToAcceleratorLinePath);
      mentorToAcceleratorLine.attr({
          fill:'none',
          stroke:activeColor,
          'stroke-dasharray': mentorToAcceleratorLineLength + ' ' + mentorToAcceleratorLineLength,
          'stroke-dashoffset': mentorToAcceleratorLineLength,
          'stroke-width' :6,
          'stroke-linecap' :'round',
          'stroke-linejoin' :'round',
          'stroke-miterlimit' :10
      });

      // Accelerator to Pitch Line
      var acceleratorToPitchLine = s.path(acceleratorToPitchLinePath);
      acceleratorToPitchLine.attr({
          fill:'none',
          stroke:activeColor,
          'stroke-dasharray': acceleratorToPitchLineLength + ' ' + acceleratorToPitchLineLength,
          'stroke-dashoffset': acceleratorToPitchLineLength,
          'stroke-width' :6,
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

    }
    svgAnimate();

});
