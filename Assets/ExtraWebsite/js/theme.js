(function ($) {
    "use strict";


    if ($('.contact-form-vaidated').length) {
        $('.contact-form-vaidated').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                fname: {
                    required: true
                },
                lname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                },
                booking_date: {
                    required: true
                }
            },
            submitHandler: function (form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function (response) {
                    $(form).parent().find('.result').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                });
                return false;
            }
        });
    }
    if ($('.datepicker').length) {
        $('.datepicker').datepicker();
    }
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    }
    if ($('.img-popup').length) {
        var groups = {};
        $('.img-popup').each(function () {
            var id = parseInt($(this).attr('data-group'), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });


        $.each(groups, function () {

            $(this).magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: { enabled: true }
            });

        });

    };
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 250, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }
    if ($('.main-navigation .navigation-box').length) {
        var subMenu = $('.main-navigation .submenu');
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
        });
        var mainNavToggler = $('.header-navigation .menu-toggler');
        var subNavToggler = $('.main-navigation .sub-nav-toggler');
        mainNavToggler.on('click', function () {
            var Self = $(this);
            var menu = Self.closest('.header-navigation').find(Self.data('target'));
            $(menu).slideToggle();
            $(menu).toggleClass('showen');
            return false;
        });
        subNavToggler.on('click', function () {
            var Self = $(this);
            Self.parent().parent().children('.submenu').slideToggle();
            return false;
        });
    }

    if ($('.video-popup').length) {
        $('.video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false
        });
    }
    function syncdOwl(baseElm, syncOne, syncTwo, prevBtn, nextBtn, dotsCondition) {
        if (baseElm.length) {
            var sync1 = syncOne;
            var sync2 = syncTwo;
            var prevThumbBtn = prevBtn;
            var nextThumbBtn = nextBtn;

            var slidesPerPage = 1; //globaly define number of elements per page
            var syncedSecondary = true;

            sync1.owlCarousel({
                items: 1,
                smartSpeed: 700,
                autoplayHoverPause: true,
                nav: false,
                autoplay: true,
                dots: dotsCondition,
                loop: true,
                autoplayTimeout: 5000,
                responsiveRefreshRate: 5000,
                navText: ['<i class="catch fa fa-angle-right"></i>', '<i class="catch fa fa-angle-left"></i>'],
            }).on('changed.owl.carousel', syncPosition);

            sync2
                .on('initialized.owl.carousel', function (e) {
                    sync2.find(".owl-item").eq(0).addClass("current");
                })
                .owlCarousel({
                    items: slidesPerPage,
                    dots: false,
                    nav: false,
                    // loop: true,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    smartSpeed: 700,
                    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                    responsiveRefreshRate: 5000
                }).on('changed.owl.carousel', syncPosition2);

            function syncPosition(el) {
                //if you set loop to false, you have to restore this next line
                //var current = el.item.index;

                //if you disable loop you have to comment this block
                var count = el.item.count - 1;
                var current = Math.round(el.item.index - (el.item.count / 2) - .5);

                if (current < 0) {
                    current = count;
                }
                if (current > count) {
                    current = 0;
                }

                //end block

                sync2
                    .find(".owl-item")
                    .removeClass("current")
                    .eq(current)
                    .addClass("current");
                var onscreen = sync2.find('.owl-item.active').length - 1;
                var start = sync2.find('.owl-item.active').first().index();
                var end = sync2.find('.owl-item.active').last().index();

                if (current > end) {
                    sync2.data('owl.carousel').to(current, 100, true);
                }
                if (current < start) {
                    sync2.data('owl.carousel').to(current - onscreen, 100, true);
                }
            }

            function syncPosition2(el) {
                if (syncedSecondary) {
                    var number = el.item.index;
                    sync1.data('owl.carousel').to(number, 100, true);
                }
            }


            sync2.on("click", ".owl-item", function (e) {
                e.preventDefault();
                var number = $(this).index();
                sync1.data('owl.carousel').to(number, 300, true);
            });

            nextThumbBtn.on('click', function (e) {
                sync1.trigger('next.owl.carousel');
                e.preventDefault();
            });
            prevThumbBtn.on('click', function (e) {
                sync1.trigger('prev.owl.carousel');
                e.preventDefault();
            });
        }
    }
    if ($('.stricky').length) {
        $('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
    }
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

            return false;

        });
    }
    if ($('.search-popup__toggler').length) {
        $('.search-popup__toggler').on('click', function (e) {
            $('.search-popup').addClass('active');
            e.preventDefault();
        });
    }

    if ($('.search-popup__overlay').length) {
        $('.search-popup__overlay').on('click', function (e) {
            $('.search-popup').removeClass('active');
            e.preventDefault();
        });
    }
    $(window).on('scroll', function () {
        if ($('.scroll-to-top').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.scroll-to-top').fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $('.scroll-to-top').fadeOut(500);
            }
        }
        if ($('.stricked-menu').length) {
            var headerScrollPos = 100;
            var stricky = $('.stricked-menu');
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.addClass('stricky-fixed');
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass('stricky-fixed');
            }
        }
    });
    if ($('.accrodion-grp').length) {
        var accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function () {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function () {
                $(this).find('.accrodion-title').on('click', function () {
                    if ($(this).parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');
                        $(this).parent().find('.accrodion-content').slideDown();
                    };


                });
            });
        });

    };

    if ($('.testimonials-two__slide').length) {

        $('.testimonials-two__slide').vegas({
            slides: [
                { src: "images/background/testi-bg-2-1.jpg" }, { src: "images/background/testi-bg-2-2.jpg" }, { src: "images/background/testi-bg-2-3.jpg" }]
        });
    }
    $(window).on('load', function () {
        if ($('.brand-two__carousel').length) {
            $('.brand-two__carousel').owlCarousel({
                loop: true,
                margin: 120,
                nav: false,
                navText: [
                    '<i class="fa fa-long-arrow-left"></i>',
                    '<i class="fa fa-long-arrow-right"></i>'
                ],
                dots: false,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2,
                        margin: 30
                    },
                    480: {
                        items: 3,
                        margin: 40
                    },
                    600: {
                        items: 3,
                        margin: 50
                    },
                    991: {
                        items: 4
                    },
                    1000: {
                        items: 5
                    },
                    1200: {
                        items: 5
                    }
                }
            });
        }
        if ($('.brand-one__carousel').length) {
            $('.brand-one__carousel').owlCarousel({
                loop: true,
                margin: 100,
                nav: false,
                navText: [
                    '<i class="fa fa-long-arrow-left"></i>',
                    '<i class="fa fa-long-arrow-right"></i>'
                ],
                dots: false,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2,
                        margin: 30
                    },
                    480: {
                        items: 3,
                        margin: 40
                    },
                    600: {
                        items: 3,
                        margin: 50
                    },
                    991: {
                        items: 4
                    },
                    1000: {
                        items: 6
                    },
                    1200: {
                        items: 6
                    }
                }
            });
        }
        if ($('.testimonials-two__carousel').length) {
            $('.testimonials-two__carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                navText: [
                    '<i class="fa fa-long-arrow-left"></i>',
                    '<i class="fa fa-long-arrow-right"></i>'
                ],
                dots: true,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                items: 1
            });
        }
        if ($('.testimonials-one__carousel').length) {
            if ($('.testimonials-one__carousel').data('carousel-margin') !== undefined) {
                var testicarouselMargin = $('.testimonials-one__carousel').data('carousel-margin');
            } else {
                var testicarouselMargin = 80;
            }
            var testiOneCarousel = $('.testimonials-one__carousel').owlCarousel({
                loop: true,
                margin: testicarouselMargin,
                nav: false,
                navText: [
                    '<i class="fa fa-long-arrow-left"></i>',
                    '<i class="fa fa-long-arrow-right"></i>'
                ],
                dots: true,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    991: {
                        items: 1
                    },
                    1000: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    }
                }
            });

            $('.testimonials-one__btn-left').on('click', function () {
                testiOneCarousel.trigger('next.owl.carousel');
                return false;
            });
            $('.testimonials-one__btn-right').on('click', function () {
                testiOneCarousel.trigger('prev.owl.carousel');
                return false;
            });

        }
        syncdOwl($('.blog-one'), $('.blog-one__content-carousel'), $('.blog-one__image-carousel'), $(''), $(''), true);
        if ($('.preloader').length) {
            $('.preloader').fadeOut('slow');
        }

        if ($('.custom-cursor__overlay').length) {

            // / cursor /
            var cursor = $(".custom-cursor__overlay .cursor"),
                follower = $(".custom-cursor__overlay .cursor-follower");

            var posX = 0,
                posY = 0;

            var mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function () {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    TweenMax.set(follower, {
                        css: {
                            left: posX - 22,
                            top: posY - 22
                        }
                    });

                    TweenMax.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    });

                }
            });

            $(document).on("mousemove", function (e) {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                mouseX = e.pageX;
                mouseY = e.pageY - scrollTop;
            });
            $("button, a").on("mouseenter", function () {
                cursor.addClass("active");
                follower.addClass("active");
            });
            $("button, a").on("mouseleave", function () {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            $(".custom-cursor__overlay").on("mouseenter", function () {
                cursor.addClass("close-cursor");
                follower.addClass("close-cursor");
            });
            $(".custom-cursor__overlay").on("mouseleave", function () {
                cursor.removeClass("close-cursor");
                follower.removeClass("close-cursor");
            });
        }

        if ($('.banner-one__carousel').length) {
            $('.banner-one__carousel').owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                dots: false,
                nav: false,
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                active: true,
                smartSpeed: 1000,
                autoplay: true,
                autoplayTimeout: 7000,
                autoplayHoverPause: false
            });
            $('.banner-carousel-btn .left-btn').on('click', function () {
                $('.banner-style-one').trigger('next.owl.carousel');
                return false;
            });
            $('.banner-carousel-btn .right-btn').on('click', function () {
                $('.banner-style-one').trigger('prev.owl.carousel');
                return false;
            });
        }
        if ($('.masonary-layout').length) {
            $('.masonary-layout').isotope({
                layoutMode: 'masonry',
                itemSelector: '.masonary-item',

            });
        }
        if ($('.masonary-layout-no-grid-width').length) {
            $('.masonary-layout-no-grid-width').isotope({
                layoutMode: 'masonry',
                itemSelector: '.masonary-item'
            });
        }

        if ($('.post-filter').length) {
            var postFilterList = $('.post-filter li');
            // for first init
            $('.filter-layout').isotope({
                filter: '.filter-item',
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            // on click filter links
            postFilterList.children('span').on('click', function () {
                var Self = $(this);
                var selector = Self.parent().attr('data-filter');
                postFilterList.children('span').parent().removeClass('active');
                Self.parent().addClass('active');


                $('.filter-layout').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }

        if ($('.post-filter.has-dynamic-filter-counter').length) {
            // var allItem = $('.single-filter-item').length;

            var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

            activeFilterItem.each(function () {
                var filterElement = $(this).data('filter');
                var count = $('.gallery-content').find(filterElement).length;
                $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
            });
        }

        if ($('.team-three__carousel').length) {

            var teamThreeCarousel = $('.team-three__carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                navText: [
                    '<i class="fa fa-long-arrow-left"></i>',
                    '<i class="fa fa-long-arrow-right"></i>'
                ],
                dots: false,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    991: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    },
                    1440: {
                        items: 3
                    }
                }
            });
            $('.team-three__btn-left').on('click', function () {
                teamThreeCarousel.trigger('next.owl.carousel');
                return false;
            });
            $('.team-three__btn-right').on('click', function () {
                teamThreeCarousel.trigger('prev.owl.carousel');
                return false;
            });
        }

        if ($('.project-one__carousel').length) {
            $('.project-one__carousel').owlCarousel({
                loop: true,
                margin: 50,
                nav: true,
                navText: [
                    '<i class="zeino-icon-left-arrow"></i>',
                    '<i class="icon-revresed zeino-icon-left-arrow"></i>'
                ],
                dots: false,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    991: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }

    });

})(jQuery);