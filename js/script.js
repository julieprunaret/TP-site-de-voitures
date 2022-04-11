// slider du header 
const ImagesToSlide = ["img/background.jpg","img/background-01.jpg","img/background-02.jpg","img/background-03.jpg","img/background-04.jpg","img/background-05.jpg"]
let compteur = 0;

function sliderHeader(){
    $('header').css('backgroundImage',"url(img/background.jpg)");
    const launchSlider = setInterval(function(){
        $('header').css('backgroundImage',"url("+ImagesToSlide[compteur]+")");
        compteur++;
        if(compteur == ImagesToSlide.length){
            compteur = 0;
        }
    }, 1500)
}
sliderHeader();

//menu hamburger
function menuHamburger(){
    let isMenuhamburgerOpen = false;
    $("#navHamburger a").on("click", function(e){
        e.preventDefault();
        $('#navHamburger ul').animate({
            'height':'toggle',
            'opacity':'toggle',
            'width':'toggle'            
        },200);
        if (!isMenuhamburgerOpen){
            $("#navHamburger a img").attr("src", "img/x.svg");
            isMenuhamburgerOpen = true;
        }else{
            $("#navHamburger a img").attr("src", "img/list.svg");
            isMenuhamburgerOpen = false;
        }        
    })
}
menuHamburger()

// petit slider des voitures
function sliderCar(){
    $('.monMiniSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    })
    }
sliderCar()