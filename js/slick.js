// $(document).ready(function () {
//     $('.team-carousel').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2500,
//         arrows: false,
//         mobileFirst: true,
//         responsive: [{
//             breakpoint: 700,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1
//             }
//         }],

        

//     });
// })

$('.team-carousel').slick(
  
  {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoSpeed: 2500,
    mobileFirst: true,

    responsive: [
                {
                  breakpoint: 760,
                  settings: {
                      slidesToShow: 2,
                  }      

                },

                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                  }
                },

                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                  }
                }

            ],
            
  }
  
  );