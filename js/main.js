if ($('.dropdown-menu a.dropdown-toggle').length) {

$(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
    if (
        !$(this)
        .next()
        .hasClass("show")
    ) {
        $(this)
            .parents(".dropdown-menu")
            .first()
            .find(".show")
            .removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass("show");

    $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function(e) {
            $(".dropdown-submenu .show").removeClass("show");
        });

    return false;
});

}

// test function

function calcM(){
    let P = document.getElementById('amount').value;
	let n = document.getElementById('j').value*12;
	let r = document.getElementById('interest').value/(100*12);
    let m = ((1+Number(r))**Number(n))*Number(r)*Number(P)/((1+Number(r))**Number(n)-1);
	//let m = p ( r * ( 1 + r )**n ) / ( ( 1 + r )**n – 1 )
    //let m = Number(p) ( Number(r) * (( 1 + Number(r) )**Number(n)) ) / ( ( 1 + Number(r) )**Number(n) – 1 );
	//alert("Starting function calcM");
    document.getElementById('monthlyPay').value = m.toFixed(1);
}

// accordion js

if ($('.collapse').length) {

    $('.collapse').on('shown.bs.collapse', function() {
        $(this).parent().find(".fa-plus-circle").removeClass("fa-plus-circle").addClass("fa-minus-circle");
    }).on('hidden.bs.collapse', function() {
        $(this).parent().find(".fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle");
    });

    $('.card-header a').click(function() {
        $('.card-header').removeClass('active');

        //If the panel was open and would be closed by this click, do not active it
        if (!$(this).closest('.card').find('.collapse').hasClass('in'))
            $(this).parents('.card-header').addClass('active');
    });

}

// Slider Ranger

if ($('#slider-range-min , #slider-range-max').length) {
    $(function() {
        $("#slider-range-min").slider({
            range: "min",
            value: 500000,
            min: 100000,
            max: 1000000,
            slide: function(event, ui) {
                $("#amount").val(ui.value);
            }
        });
        $("#amount").val($("#slider-range-min").slider("value"));
    });
    $(function() {
        $("#slider-range-max").slider({
            range: "min",
            min: 5,
            max: 30,
            value: 20,

            slide: function(event, ui) {
                $("#j").val(ui.value);
            }
        });
        $("#j").val($("#slider-range-max").slider("value"));
    });
}

if ($('#slider-range-min-intt').length) {
    $(function() {
        $("#slider-range-min-intt").slider({
            range: "min",
            value: 30,
            min: 10,
            max: 50,
            slide: function(event, ui) {
                $("#interestt").val("0." + ui.value + "%");
            }
        });
        $("#interestt").val("0." + $("#slider-range-min-intt").slider("value") + "%");
    });
}




// header collapse

if ($('.header-transparent').length) {
    $(window).scroll(function() {
        if ($(".header-transparent").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });
}



// counter
if ($('.counter').length) {
    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
                countNum: countTo
            },

            {
                duration: 10000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });
    });

}

// post fallery

if ($('#post-gallery , .slider , .service ').length) {

    $("#post-gallery").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false,
        autoPlay: true

    });


    $(".slider").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 3000,
        paginationSpeed: 400,
        singleItem: true,
        pagination: true,
        autoPlay: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        addClassActive: true,

    });

    $(".service").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        navigation: true, // Show next and prev buttons
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        pagination: false

    });
}