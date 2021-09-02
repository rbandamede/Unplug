 //playlist

  $(document).ready(function(){
    $('iframe').hide();
    $(".closeBar").hide();
  //menubar
  $(".menuOpen").click(function(){
    $(".bar").width(250);
    $(".closeBar").show();

  });
  $(".closeBar").click(function(){
    $(".bar").width(0);
    $(".closeBar").hide();
  })
    // click function of buttons
    $('.button').click(function () {
       var currElm = $(this);
       if (currElm.hasClass('bird')) {
           if($('#birdPlaylist').is(':visible')){
              $('#birdPlaylist').hide();
        }else if($('#birdPlaylist').is(':hidden')){
          $('#birdPlaylist').show();
        }
       }
       else if (currElm.hasClass('forest')) {
          if($('#forestPlaylist').is(':visible')){
            $('#forestPlaylist').hide();
          }else if($('#forestPlaylist').is(':hidden')){
            $('#forestPlaylist').show();
        }
       } 
       else if(currElm.hasClass('water')){
         if($('#waterPlaylist').is(':visible')){
           $('#waterPlaylist').hide();
         }else if($('#waterPlaylist').is(':hidden')){
           $('#waterPlaylist').show();
         }
       }
        else if(currElm.hasClass('lofi')){
         if($('#lofiPlaylist').is(':visible')){
           $('#lofiPlaylist').hide();
         }else if($('#lofiPlaylist').is(':hidden')){
           $('#lofiPlaylist').show();
         }
        }
        else if(currElm.hasClass('study')){
         if($('#studyPlaylist').is(':visible')){
           $('#studyPlaylist').hide();
         }else if($('#studyPlaylist').is(':hidden')){
           $('#studyPlaylist').show();
         }
        }
        else if(currElm.hasClass('jazz')){
         if($('#jazzPlaylist').is(':visible')){
           $('#jazzPlaylist').hide();
         }else if($('#jazzPlaylist').is(':hidden')){
           $('#jazzPlaylist').show();
         }
        }
        else if(currElm.hasClass('cheerPiano')){
         if($('#cheerfulPiano').is(':visible')){
           $('#cheerfulPiano').hide();
         }else if($('#cheerfulPiano').is(':hidden')){
           $('#cheerfulPiano').show();
         }
        }
        else if(currElm.hasClass('cheerCalm')){
         if($('#cheerfulCalm').is(':visible')){
           $('#cheerfulCalm').hide();
         }else if($('#cheerfulCalm').is(':hidden')){
           $('#cheerfulCalm').show();
         }
        }
        else if(currElm.hasClass('cheerJazz')){
         if($('#cheerfulJazz').is(':visible')){
           $('#cheerfulJazz').hide();
         }else if($('#cheerfulJazz').is(':hidden')){
           $('#cheerfulJazz').show();
         }
        }
    }); // click function end
    // antoher hover functoo
    //$('h3').hover(function(){
    //   var element = $(this);
    //   if (element.hasClass('change')) {
    //     $('h3.change').text("secret message");
    //   }
    // })
});
