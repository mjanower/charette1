$(document).ready(function () {
    $('#buttons').mouseover(function () {
        document.getElementById('buttons').innerHTML = 'by Mikki Janower';
    });
    $('#buttons').mouseleave(function () {
        document.getElementById('buttons').innerHTML = 'i, uh, heard u like buttons';;
    })
    
/*add a number to each button
    $.each($(".section > .block"), function(index, value){
    var num = index + 1;
    $(value).attr("id","post"+ num);
        $('.block').click(function () {
    console.log(num)
        })
});*/
    
    //1
    var one = true;
    $('#one').click(function () {
        if (one == true) {
            $('body').css('-webkit-filter', 'invert(100%)');
            $('body').css('filter', 'invert(100%)');
            $('body').css('background-color', 'black');
            $('#one').css('-webkit-filter', 'invert(100%)');
            $('#one').css('filter', 'invert(100%)');
            one = false
        } else {
            $('body').css('-webkit-filter', 'invert(0)');
            $('body').css('filter', 'invert(0)');
            $('body').css('background-color', 'white');
            $('#one').css('-webkit-filter', 'invert(0)');
            $('#one').css('filter', 'invert(0)');
            one = true
        }
    });

    //2
    $('#two').click(function () {
        alert(
            "Congratulations! You'll someday fall victim to the all-encompassing void from whence we came and to which we'll inevitably return!"
        )
    })

    //3
    var number = 0;
    var text = [
    'Hey! DO NOT TOUCH!',
    'Well, maybe just once',
    'Okay. maybe once more',
    'Haha okay keep going!',
    'Alright, alright, enough',
    'Hey! stop that!'
  ]

    $('#three').click(function () {
        document.getElementById('dont').innerHTML = text[number];

        number = number + 1
        if (number > text.length - 1) {
            number = 0;
        }
    })

    //4
    var clicks = false;

    $('#four').click(function () {
        if (clicks == 0) {
            document.getElementById('four').style.opacity = 0
            clicks = true;
        } else {
            document.getElementById('four').style.opacity = 1
            clicks = false;
        }
    })

    //document.getElementById('four').style.opacity = 1

    //5
    var number2 = 0;

    $('#five').click(function () {
        document.getElementById('number2').innerHTML = number2;
        number2++;
    })

    //6
    var cheetos = 0;

    $('#six').click(function (event) {
        if (cheetos < 2) {
            $('#six').prepend('<img id="cheetos" src ="assets/cheetos.png"/>');
            cheetos++;
        } else {
            $('#six').empty('<img id="cheetos" src ="assets/cheetos.png"/>');
            cheetos = 0;
        }
    })
    
    //7
     var sevenp = document.getElementById('sevenp');
     var seven = false;

    $("#seven").click(function () {
        if (slide == false){
            sevenp.classList.add('animated', 'hinge');
            seven = true;
        } else {
            sevenp.classList.remove('hinge');
            sevenp.classList.add('pulse');
            seven = false;
        }
    }) 


    //9
    var three = true;
    $('#nine').click(function () {
        if (three == true) {
            $('#cnine').css('width', '4em');
            $('#cnine').css('height', '4em');
            $('#cnine').css('border-radius', '50%');
            three = false;
        } else {
            $('#cnine').css('width', '2em');
            $('#cnine').css('height', '2em');
            $('#cnine').css('border-radius', '50%');
            three = true;
        }
    })

    //10
    var guy = false;
    $('#ten').click(function () {
        if (guy == false) {
            $('#guy').css('animation', 'rotating 1s linear infinite');
            guy = true;
        } else {
            $('#guy').css('animation', 'none');
            guy = false;
        }
    })

    //11


    //12
    var twelve = false;
    $('#twelve').click(function () {
        if (twelve == false) {
            $('#stwelve').css('border-radius', '50%');
            twelve = true;
        } else {
            $('#stwelve').css('border-radius', '0');
            twelve = false;
        }
    })

    //13
   var guy = false;
    $('#thirteen').click(function () {
        if (guy == false) {
            $('#guy').css('animation', 'rotating .5s linear infinite');
            guy = true;
        } else {
            $('#guy').css('animation', 'none');
            guy = false;
        }
    })
    
    
    //14
    const rollSound = new Audio("assets/that_was_easy.mp3");
    $('#fourteen').click(e => rollSound.play());

    //15
    var fifteen = false;

    $('#fifteen').click(function () {
        if (fifteen == false) {
            $('#sfifteen').slideUp('slow', function () {});
            fifteen = true;
        } else {
            $('#sfifteen').slideDown('slow', function () {});
            fifteen = false;
        }
    })

    //16
    var sixteen = false;

    $('#sixteen').click(function () {
        if (sixteen == false) {
            $('#ssixteen').fadeIn('slow', function () {});
            sixteen = true;
        } else {
            $('#ssixteen').fadeOut('slow', function () {});
            sixteen = false;
        } 
    })
    
    //17
     var seventeen = false
  
  $('#seventeen').click(function() {
    if(seventeen == false) {
      $('#sseventeen').css("filter", "blur(5px)")
      seventeen = true
    } else {
      $('#sseventeen').css("filter", "none")
      seventeen = false
    }
  })
    
    //18
     $('#eighteen').click(function(){
    window.open('mailto:mikki@janower.net?subject=Nice job on your charette!')
  });
    
    //19
  var nineteen = 0
  
  $("#nineteen").click(function(){
      if (nineteen < 3) {
        $("#trex").animate({ 
          marginLeft: "+=35%",
      }, 1000 );
      nineteen++;
    } else {
      $("#trex").css("margin-left", "-70%")
      nineteen = 0;
    }
    
});
    
    //20
     $('#twenty').click(function(){
    $("#stwenty").css('transform', 'rotate(-45deg)');
  });

    //22
    var twentytwo = false;

    $('#twentytwo').click(function () {
        if (twentytwo == false) {
            $('#stwentytwo').animate({width: 'toggle'});
            twentytwo = true;
        } else {
            $('#stwentytwo').slideToggle('slow', function () {});
            twentytwo = false;
        }
    })
    
    //21
     var twentyone = false;
    var div21=  $("#twentyone");
    var div22= $('#twentytwo');
    
    tdiv21 = div21.clone();
    tdiv22 = div22.clone();
    
    div21.click(function (){
        if(twentyone == false) {
           div21.replaceWith(tdiv22);
           div22.replaceWith(tdiv21); 
           twentyone = true;
        } else {
           tdiv22.replaceWith(div21);
           tdiv21.replaceWith(div22); 
           twentyone = false;
        }
    });
    
    //23
    var twentythree = false;

    $('#twentythree').click(function () {
        if (twentythree == false) {
            $('#twentythree').css("background-color", "#abb3e7");
            twentythree = true;
        } else {
            $('#twentythree').css("background-color", "#3e4c8f");
            twentythree = false;
        }
    })
    
    //24
    var twentyfour = true;
    $('#twentyfour').click(function () {
        if (twentyfour == true) {
            $('#ctwentyfour').css('width', '0px');
            $('#ctwentyfour').css('height', '0px');
            $('#ctwentyfour').css('border-radius', '50%');
            twentyfour = false;
        } else {
            $('#ctwentyfour').css('width', '2em');
            $('#ctwentyfour').css('height', '2em');
            $('#ctwentyfour').css('border-radius', '50%');
            twentyfour = true;
        }
    })
    
    //25
    $('#twentyfive').click(function() {
    $( "#ctwentyfive" ).effect("shake", "slow");
        });
    
    //26
    $('#twentysix').click(function() {
    $( '#ctwentysix' ).effect("bounce", "slow");
        });
    
    //27
    $('#twentysev').click(function() {
    $( '#ctwentysev' ).effect("puff", "swing");
        });
    
    //28
    $('#twentyeight').click(function() {
    $( '#ctwentyeight' ).effect("blind", "linear");
        });
    
    //29
    $('#twentynine').click(function() {
    $( '#ctwentynine' ).toggle("explode");
        });

    //30
    $('#thirty').click(function() {
    $( '#sthirty' ).toggle("fold");
        });
    
    //31
    $('#thirtyone').click(function() {
    $( '#sthirtyone' ).effect("pulsate", "slow");
        });
    
    //32
    $('#thirtytwo').click(function() {
    $( '#sthirtytwo' ).effect("clip");
        });
    
    //33
    $('#thirtythree').click(function() {
        window.location.href="http://salmonofcapistrano.com/";
        });
    
    //34
    var thirtyfour = true;
    
    $("#thirtyfour").click(function(){
        if (thirtyfour ==true) {
            $( "body" ).css("background-color", "#abb3e7");
            $( ".block" ).css("opacity", ".2");
            $( "#thirtyfour" ).css("opacity", "1");
            
            thirtyfour = false;
        }
        
        else {
            $( "body" ).css("background-color", "white");
            $( ".block" ).css("opacity", "1");
            
            thirtyfour = true;
        }
    });

    //35
    function Particle( x, y, radius ) {
	this.init( x, y, radius );
        }

        Particle.prototype = {

            init: function( x, y, radius ) {

                this.alive = true;

                this.radius = radius || 10;
                this.wander = 0.15;
                this.theta = random( TWO_PI );
                this.drag = 0.92;
                this.color = '#fff';

                this.x = x || 0.0;
                this.y = y || 0.0;

                this.vx = 0.0;
                this.vy = 0.0;
            },

            move: function() {

                this.x += this.vx;
                this.y += this.vy;

                this.vx *= this.drag;
                this.vy *= this.drag;

                this.theta += random( -0.5, 0.5 ) * this.wander;
                this.vx += sin( this.theta ) * 0.1;
                this.vy += cos( this.theta ) * 0.1;

                this.radius *= 0.96;
                this.alive = this.radius > 0.5;
            },

            draw: function( ctx ) {

                ctx.beginPath();
                ctx.arc( this.x, this.y, this.radius, 0, TWO_PI );
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        };

        // ----------------------------------------
        // Example
        // ----------------------------------------

        var MAX_PARTICLES = 280;
        var COLOURS = [ '#ffee77', '#f05a32', '#f4d5c6;', '#3e4c8f', '#abb3e7', '#239d64' ];

        var particles = [];
        var pool = [];

        var demo = Sketch.create({
            container: document.getElementById( 'container' )
        });

        demo.setup = function() {

            // Set off some initial particles.
            var i, x, y;

            for ( i = 0; i < 20; i++ ) {
                x = ( demo.width * 0.5 ) + random( -100, 100 );
                y = ( demo.height * 0.5 ) + random( -100, 100 );
                demo.spawn( x, y );
            }
        };

        demo.spawn = function( x, y ) {

            if ( particles.length >= MAX_PARTICLES )
                pool.push( particles.shift() );

            particle = pool.length ? pool.pop() : new Particle();
            particle.init( x, y, random( 5, 40 ) );

            particle.wander = random( 0.5, 2.0 );
            particle.color = random( COLOURS );
            particle.drag = random( 0.9, 0.99 );

            theta = random( TWO_PI );
            force = random( 2, 8 );

            particle.vx = sin( theta ) * force;
            particle.vy = cos( theta ) * force;

            particles.push( particle );
        }

        demo.update = function() {

            var i, particle;

            for ( i = particles.length - 1; i >= 0; i-- ) {

                particle = particles[i];

                if ( particle.alive ) particle.move();
                else pool.push( particles.splice( i, 1 )[0] );
            }
        };

        demo.draw = function() {

            demo.globalCompositeOperation  = 'lighter';

            for ( var i = particles.length - 1; i >= 0; i-- ) {
                particles[i].draw( demo );
            }
        };

        demo.mousemove = function() {

            var particle, theta, force, touch, max, i, j, n;

            for ( i = 0, n = demo.touches.length; i < n; i++ ) {

                touch = demo.touches[i], max = random( 1, 4 );
                for ( j = 0; j < max; j++ ) demo.spawn( touch.x, touch.y );
            }
        };
    
//36
        $("#thirtysix").click( function(){
           var counter = 5;
           setInterval(function() {
             counter--;
              if (counter >= 0) {
                 span = document.getElementById("count");
                 span.innerHTML = counter;
              }
              if (counter === 0) {
                 clearInterval(counter);
                 alert('sorry, out of time');
               }
             }, 1000);
        });

//37
    var COLOURS = [ '#f4d5c6', '#afd9a8', '#ffee77', '#3e4c8f', 'abb3e7' ];
        var radius = 0;

        Sketch.create({

            container: document.getElementById( 'thirtysev' ),
            autoclear: false,
            retina: 'auto',

            setup: function() {
                console.log( 'setup' );
            },

            update: function() {
                radius = 2 + abs( sin( this.millis * 0.003 ) * 10 );
            },

            // Event handlers

            keydown: function() {
                if ( this.keys.C ) this.clear();
            },

            // Mouse & touch events are merged, so handling touch events by default
            // and powering sketches using the touches array is recommended for easy
            // scalability. If you only need to handle the mouse / desktop browsers,
            // use the 0th touch element and you get wider device support for free.
            touchmove: function() {

                for ( var i = this.touches.length - 1, touch; i >= 0; i-- ) {

                    touch = this.touches[i];

                    this.lineCap = 'round';
                    this.lineJoin = 'round';
                    this.fillStyle = this.strokeStyle = COLOURS[ i % COLOURS.length ];
                    this.lineWidth = radius;

                    this.beginPath();
                    this.moveTo( touch.ox, touch.oy );
                    this.lineTo( touch.x, touch.y );
                    this.stroke();
                }
            }
        });

    
//38
var thirtyeight = false;
    
    $("#thirtyeight").click(function() {
        
        if (thirtyeight == false) {
            $(this).css("background-color", "#f05a32");
            $('#thirtysev').css("background-color", "#f4d5c6");
            thirtyeight = true;
        } else {
            $(this).css("background-color", "#f4d5c6;");
            $('#thirtysev').css("background-color", "#f05a32");
            thirtyeight = false;
        }
    });
    
    $("#thirtysev").mouseover(function(){
            $(this).css("background-color", "#f05a32");
            $('#thirtyeight').css("background-color", "#f4d5c6;");
        });

//39
    
    const nyan =  document.querySelector('#nyan');
    var thirtynine = false;

    $("#thirtynine").click(function(){
        if (thirtynine == false) {
           nyan.classList.add('animated', 'zoomOutRight') 
           thirtynine = true;
        } else {
           nyan.classList.remove('zoomOutRight')
           nyan.classList.add('rollIn') 
           thirtynine = false;
        }                        
        });
   
//40
    
    const forty =  document.querySelector('#cforty');
    var heartBeat = false;

    $("#forty").mousedown(function () {
        if (heartBeat == false){
            forty.classList.add('animated', 'heartBeat');
            heartBeat = true;
        } else {
            forty.classList.remove('heartBeat');
            forty.classList.add('pulse');
            heartBeat = false;
        }
    }) 

//41
 const fortyone =  document.querySelector('#cfortyone');
 var jello = false;

    $("#fortyone").mousedown(function () {
        if (jello == false){
            fortyone.classList.add('animated', 'jello');
            jello = true;
        } else {
            fortyone.classList.remove('jello');
            fortyone.classList.add('rubberBand');
            jello = false;
        }
    }) 

    //42
    var fortytwo = true;
    
    $("#fortytwo").click(function(){
        if (fortytwo==true) {
            $( "body" ).css( "cursor", "zoom-in");
            $("#fortytwo p").animate({ 'zoom': 1.2 }, 400);
            fortytwo=false;
        }
        else {
            $( "body" ).css( "cursor", "inherit");
            $("#fortytwo p").animate({ 'zoom': 1 }, 400);
            fortytwo=true;
        }  
    });
    
    //43
    
    $("#fortythree").click(function(){
        var x = event.clientX;
        var y = event.clientY;
        var kanye = document.getElementById("kanye")
        
        
        $('#kanye').css("display", "inline-block")
        $('#kanye').css("position", "fixed")

        kanye.style.left = x + 'px';
        kanye.style.top = y + 'px';
    });
              
    
    //44
     const fortyfour =  document.querySelector('#cfortyfour');
     var slide = false;

    $("#fortyfour").mousedown(function () {
        if (slide == false){
            fortyfour.classList.add('animated', 'slideInDown');
            $('#kanye').css("display", "none")
            slide = true;
            
        } else {
            fortyfour.classList.remove('slideInDown');
            fortyone.classList.add('bounceOutDown');
            slide = false;
        }
    }) 
    
    //45
     const fortyfive =  document.querySelector('#cfortyfive');
     var swing = false;

    $("#fortyfive").mousedown(function () {
        if (swing == false){
            fortyfive.classList.add('animated', 'swing');
            swing = true;
            
        } else {
            fortyfive.classList.remove('swing');
            fortyfive.classList.add('tada');
            swing = false;
        }
    });
    
    //46
   
    //47
    var fortysev= true;
    
        $("#fortysev").click(function(){
        if (fortysev==true) {
            $( "#fortysev" ).css("width", "90%")
            fortysev = false;
        }
        else {
           $( "#fortysev" ).css( "width", "25%")
            fortysev = true;
        }
        });

    //48
      var fortyeight= true;
    
        $("#fortyeight").click(function(){
        if (fortyeight==true) {
            $( "#fortyeight" ).css("width", "5%")
            fortyeight = false;
        }
        else {
           $( "#fortyeight" ).css( "width", "25%")
            fortyeight = true;
        }
        });
    
    //49
    var fortynine= true;
    $("#fortynine").click(function(){
        if (fortynine==true) {
            $( "body" ).css( "-webkit-filter", "grayscale(100%)");
            $( "body" ).css( "filter", "grayscale(100%)");
            
            fortynine=false;
        }
        else {
            $( "body" ).css( "-webkit-filter", "grayscale(0%)");
            $( "body" ).css( "filter", "grayscale(0%)");
            
            fortynine=true;
        }    
    });
    
    //50
    var fifty= true;
    $("#fifty").click(function(){
        if (fifty==true) {
             $( ".block" ).filter( ":even" ).css( "background-color", "#ffee77" );
            fifty=false;
        }
        else {
            $( ".block" ).filter( ":even" ).css( "background-color", "#ffee77" );
            fifty=true;
        }    
    });
    
//document closing bracket; don't touch
});