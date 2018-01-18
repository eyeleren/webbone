 var nav_height = $('.navbar-fixed-top').height();
    $('body').css('padding-top',nav_height );       
            
    $(document).ready(function() {
        // navigazione con click	
        $('.scroll-link').on('click', function(event){
            event.preventDefault();
            var sectionID = $(this).attr("data-id");
            scrollToID('#' + sectionID, 750);
        });
        // mobile nav toggle
        $('#nav-toggle').on('click', function (event) {
            event.preventDefault();
            $('#main-nav').toggleClass("open");
        });
        });
        
        // funzione di scroll
        function scrollToID(id, speed){
            var offSet = 50;
            var targetOffset = $(id).offset().top - offSet;
            var mainNav = $('#main-nav');
            $('html,body').animate({scrollTop:targetOffset}, speed);
            if (mainNav.hasClass("open")) {
                mainNav.css("height", "1px").removeClass("in").addClass("collapse");
                mainNav.removeClass("open");
            }
        }
        if (typeof console === "undefined") {
            console = {
                log: function() { }
            };
        }