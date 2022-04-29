$(document).ready(function () {

    // navigation bar slide down and hide on hoverIn, hoverOut.

    $('.nav-item').hover(function () {
        $(this).children().last().stop(true, true).slideDown();
    }, function () {
        $(this).children().last().stop(true, true).hide();
    });

    // navigation inner arrow dropdown on hoverIn, hoverOut.

    $('.innerDropLi').hover(function () {
        $(this).children().last().stop(true, true).fadeIn();
    }, function () {
        $(this).children().last().stop(true, true).fadeOut();
    });

    // search bar slide toggle

    $('.search').click(function () {
        $('.search-bar').stop(true, true).slideToggle(140);
    });

    // slider start

    let sliderInterval = setInterval(next, 5000);     // slider automatic slide interval

    $('.prev-num').text("0" + $('.images').children().length);     // start value of slider previous number

    $('.next-num').text("02");    // start value of slider next number

    let prevNum = $('.images').children().length;

    let nextNum = 2;

    $('.slide-1').children().first().addClass('scale-animate');

    // function of the slider right arrow button

    function next(e) {
        if ($('.next').hasClass("unclickable")) {
            e.preventDefault();
        }
        else {
            $('.next').addClass("unclickable");
            let activeSlide = $('.active-slide');
            clearInterval(sliderInterval);
            if (activeSlide.next().length == 0) {
                activeSlide.fadeOut(1800);
                $('.images').children().first().fadeIn(1800);
                activeSlide.removeClass('active-slide');
                $('.images').children().first().addClass('active-slide');
                setTimeout(function () {
                    $('.scale-animate').removeClass('scale-animate');
                }, 1000);
                setTimeout(function () {
                    $('.active-slide').children().first().addClass('scale-animate');
                }, 1000);
                if (nextNum + 1 != $('.images').children().length + 1) {
                    nextNum += 1;
                }
                else {
                    nextNum = 1;
                }
                if (prevNum + 1 != $('.images').children().length + 1) {
                    prevNum += 1;
                }
                else {
                    prevNum = 1;
                }
                $('.prev-num').text("0" + prevNum);
                $('.next-num').text("0" + nextNum);
                setTimeout(function () {
                    $('.next').removeClass("unclickable");
                }, 1700);
            }
            else {
                activeSlide.fadeOut(1800);
                activeSlide.next().fadeIn(1800);
                activeSlide.removeClass('active-slide');
                activeSlide.next().addClass('active-slide');
                setTimeout(function () {
                    $('.scale-animate').removeClass('scale-animate');
                }, 1000);
                setTimeout(function () {
                    $('.active-slide').children().first().addClass('scale-animate');
                }, 1000);
                if (nextNum + 1 != $('.images').children().length + 1) {
                    nextNum += 1;
                }
                else {
                    nextNum = 1;
                }
                if (prevNum + 1 != $('.images').children().length + 1) {
                    prevNum += 1;
                }
                else {
                    prevNum = 1;
                }
                $('.prev-num').text("0" + prevNum);
                $('.next-num').text("0" + nextNum);
                setTimeout(function () {
                    $('.next').removeClass("unclickable");
                }, 1700);
            }
            sliderInterval = setInterval(next, 5000);
        }
    }

    // function of the slider left arrow button

    $('.prev').click(function (e) {
        if ($('.prev').hasClass("unclickable")) {
            e.preventDefault();
        }
        else {
            $('.prev').addClass("unclickable");
            let activeSlide = $('.active-slide');
            clearInterval(sliderInterval);
            if (activeSlide.prev().length == 0) {
                activeSlide.fadeOut(1800);
                $('.images').children().last().fadeIn(1800);
                activeSlide.removeClass('active-slide');
                $('.images').children().last().addClass('active-slide');
                setTimeout(function () {
                    $('.scale-animate').removeClass('scale-animate');
                }, 1000);
                setTimeout(function () {
                    $('.active-slide').children().first().addClass('scale-animate');
                }, 1000);
                if (prevNum - 1 != 0) {
                    prevNum -= 1;
                }
                else {
                    prevNum = $('.images').children().length;
                }
                if (nextNum - 1 != 0) {
                    nextNum -= 1;
                }
                else {
                    nextNum = $('.images').children().length;
                }
                $('.prev-num').text("0" + prevNum);
                $('.next-num').text("0" + nextNum);
                setTimeout(function () {
                    $('.prev').removeClass("unclickable");
                }, 1700);
            }
            else {
                activeSlide.fadeOut(1800);
                activeSlide.prev().fadeIn(1800);
                activeSlide.removeClass('active-slide');
                activeSlide.prev().addClass('active-slide');
                setTimeout(function () {
                    $('.scale-animate').removeClass('scale-animate');
                }, 1000);
                setTimeout(function () {
                    $('.active-slide').children().first().addClass('scale-animate');
                }, 1000);
                if (prevNum - 1 != 0) {
                    prevNum -= 1;
                }
                else {
                    prevNum = $('.images').children().length;
                }
                if (nextNum - 1 != 0) {
                    nextNum -= 1;
                }
                else {
                    nextNum = $('.images').children().length;
                }
                $('.prev-num').text("0" + prevNum);
                $('.next-num').text("0" + nextNum);
                setTimeout(function () {
                    $('.prev').removeClass("unclickable");
                }, 1700);
            }
        }
    });

    $('.next').click(next);

    $('.prev').hover(function () {
        $('.prev-num').stop(true, true).fadeIn("fast");
    }, function () {
        $('.prev-num').stop(true, true).fadeOut("fast");
    });

    $('.next').hover(function () {
        $('.next-num').stop(true, true).fadeIn("fast");
    }, function () {
        $('.next-num').stop(true, true).fadeOut("fast");
    });

    // shop

    let list = document.querySelectorAll("#shop .categories ul li a");
    let types = document.querySelectorAll("#shop .types .type");


    for (let element of list) {
        element.onclick = function () {
            document.querySelector(".activeCategory").classList.remove("activeCategory");
            this.classList.add("activeCategory");
            let data_id = this.getAttribute("data-id");
            for (let type of types) {
                if (data_id == type.getAttribute("data-id")) {
                    document.querySelector(".activetype").classList.remove("activetype");
                    type.classList.add("activetype");
                }
            }
        }
    }

    $('.item').hover(function () {
        let text = $(this).children().last();
        text.children().eq(2).stop(true, true).animate({ "margin-right": "-400px" });
        text.children().eq(1).stop(true, true).animate({ "margin-left": "107" });
    }, function () {
        let text = $(this).children().last()
        text.children().eq(2).stop(true, true).animate({ "margin-right": "0px" });
        text.children().eq(1).stop(true, true).animate({ "margin-left": "-400px" });
    });

    // transform function of the video image

    $("#offers .video .circle,#offers .video img").mouseenter(function () {
        $("#offers .video img").css('transform', 'scale(' + 1.03 + ')');
    });
    $("#offers .video img").mouseleave(function () {
        $("#offers .video img").css('transform', 'scale(' + 1 + ')');
    });

    $("#offers .video .image-holder-outer").click(function () {
        window.location = "https://www.youtube.com/watch?time_continue=1&v=K-0cjGCNYfs&_ga=2.126556296.4699611.1577879082-1931381707.1577026708";
    });

    // parallax effect

    function isInViewport(node) {
        var rect = node.getBoundingClientRect();
        return (
            (rect.height > 0 || rect.width > 0) &&
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        $('#subscribe-field').each(function (index, element) {
            var initY = $(this).offset().top;
            var height = $(this).height();
            var endY = initY + $(this).height();

            // Checks if the element is in the viewport.

            var visible = isInViewport(this);
            if (visible) {
                var diff = scrolled - initY;
                var ratio = Math.round((diff / height) * 100);
                $(this).css('background-position', 'center ' + parseInt(ratio * 0.8) + 'px');
            }
        })
    });

    // function of the back to top button

    if ($(window).scrollTop() > 500) {
        $('.back-to-top').show();
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.back-to-top').show();
        } else {
            $('.back-to-top').hide();
        }
    });

    $('.back-to-top').click(function () {
        $('html').animate({ scrollTop: 0 }, 'slow');
    });

    $('.back-to-top').hover(function () {
        $('.upper').animate({ "top": "-38%" }, 'fast');
        $('.lower').animate({ "top": "31%" }, 'fast');
    }, function () {
        $('.upper').animate({ "top": "31%" }, 'fast');
        $('.lower').animate({ "top": "100%" }, 'fast');
    });

    // Local Storage

    if ($('.cart-items').children().length == 0) {
        $('.subtotal,.buttons').hide();
        $('.empty-cart').show();
    }

    if (localStorage.getItem('cart') == null) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    let addToCartButtons = document.getElementsByClassName('action');
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.onclick = function () {
            if (localStorage.getItem('cart') == null) {
                localStorage.setItem('cart', JSON.stringify([]));
            }
            let cart = JSON.parse(localStorage.getItem('cart'));
            let shopItem = button.parentElement.parentElement;
            let name = shopItem.getElementsByClassName('name')[0].innerText;
            let price = shopItem.getElementsByClassName('price')[0].innerText;
            let src = shopItem.getElementsByTagName('img')[0].src;

            let existance = cart.find(obj => obj.name == name);
            if (existance === undefined) {
                cart.push({
                    name: name,
                    price: price,
                    src: src,
                    quantity: 1
                });

            }
            else {
                existance.quantity += 1;
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateItemCount();
            updateProductQuantity();
            updateCartTotal();
            addToCart();
        }
    }

    updateItemCount();
    updateProductQuantity();
    updateCartTotal();
    addToCart();

    function updateItemCount() {
        let cart = JSON.parse(localStorage.getItem('cart'));
        let itemCount = 0;
        cart.forEach(element => {
            itemCount += element.quantity;
        });
        document.getElementById('item-count').innerText = itemCount;
    }

    function updateCartTotal() {
        let cart = JSON.parse(localStorage.getItem('cart'));
        let total = 0;
        cart.forEach(element => {
            let itemPrice = Number(element.price.replace('$', ''));
            let itemQuantity = element.quantity;
            total += (itemPrice * itemQuantity);
        });
        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
        document.getElementsByClassName('amount')[0].innerText = '$' + total;
    }

    function updateProductQuantity() {
        let cart = JSON.parse(localStorage.getItem("cart"));
        let cartItems = document.getElementsByClassName('cart-items')[0];
        let cartItemNames = cartItems.getElementsByClassName('name');
        for (let product of cart) {
            for (let i = 0; i < cartItemNames.length; i++) {
                if (product.name == cartItemNames[i].innerText) {
                    cartItemNames[i].nextElementSibling.innerText = product.quantity;
                }
            }
        }
    }

    function addToCart() {
        let cartItems = document.getElementsByClassName('cart-items')[0];
        let cart = JSON.parse(localStorage.getItem('cart'));
        cartItems.innerHTML = "";
        for (let product of cart) {
            let cartItem = document.createElement('div');
            cartItem.className = "cart-item";
            let image = document.createElement('div');
            image.className = "image";
            let img = document.createElement('img');
            img.setAttribute('src', product.src);
            image.append(img);
            let infoElement = document.createElement('div');
            infoElement.className = "info";
            let nameElement = document.createElement('p');
            nameElement.className = "name";
            nameElement.innerText = product.name;
            let quantityElement = document.createElement('span');
            quantityElement.className = "quantity";
            quantityElement.innerText = product.quantity;
            let priceElement = document.createElement('span');
            priceElement.className = "price";
            priceElement.innerText = product.price;
            let remove = document.createElement('i');
            remove.className = "fas fa-times remove";
            remove.onclick = function () {
                let parent = this.parentElement.parentElement;
                let removeName = parent.getElementsByClassName('name')[0].innerText;
                if (product.name == removeName) {
                    let index = cart.indexOf(product);
                    cart.splice(index, 1);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateItemCount();
                    updateProductQuantity();
                    updateCartTotal();
                }

                if (cartItems.children.length == 0) {
                    $('.subtotal,.buttons').hide();
                    $('.empty-cart').show();
                }
            }
            infoElement.append(nameElement, quantityElement, priceElement, remove);
            cartItem.append(image, infoElement);
            cartItems.append(cartItem);
            if ($('.cart-items').children().length != 0) {
                $('.subtotal,.buttons').show();
                $('.empty-cart').hide();
            }
        }
    }

    $('.cart').hover(function () {
        if (localStorage.getItem('cart') == null) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        updateItemCount();
        updateProductQuantity();
        updateCartTotal();
        addToCart();
        if ($('.cart-items').children().length != 0) {
            $('.subtotal,.buttons').show();
            $('.empty-cart').hide();
        }
        else {
            $('.subtotal,.buttons').hide();
            $('.empty-cart').show();
        }
        $('.cart-drop').stop(true, true).show();
    }, function () {
        $('.cart-drop').stop(true, true).hide();
    });

    // fixed navbar

    if ($(window).scrollTop() > 500) {
        $('.fixed-navbar').slideDown();
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 700) {
            $('.fixed-navbar').slideDown();
        } else {
            $('.fixed-navbar').stop(true, true).slideUp();
        }
    });

    // tabs

    let prevActiveTabMenu1HeaderDataId = 1;
    let prevActiveTabMenu2HeaderDataId = 1;
    let prevActiveTabMenu3HeaderDataId = 1;
    let prevActiveTabMenu4HeaderDataId = 1;

    $('.tab-menu1 .header').click(function () {
        let tabClicked1 = $(this).data("id");
        $('.tab-menu1 .header').each(function () {
            if ($(this).hasClass("active-header1")) {
                $(this).removeClass("active-header1");
            }
        });
        $(this).addClass("active-header1");
        if (tabClicked1 != prevActiveTabMenu1HeaderDataId) {
            $('.tab-menu1 .content').each(function () {
                if ($(this).data("id") == tabClicked1) {
                    $('.tab-menu1 .content').hide();
                    $(this).show();
                    prevActiveTabMenu1HeaderDataId = $(this).data("id");
                }
            });
        }
    });

    $('.tab-menu2 .header').click(function () {
        let tabClicked2 = $(this).data("id");
        $('.tab-menu2 .header').each(function () {
            if ($(this).hasClass("active-header1")) {
                $(this).removeClass("active-header1");
            }
        });
        $(this).addClass("active-header1");
        if (tabClicked2 != prevActiveTabMenu2HeaderDataId) {
            $('.tab-menu2 .content').each(function () {
                if ($(this).data("id") == tabClicked2) {
                    $('.tab-menu2 .content').hide();
                    $(this).show();
                    prevActiveTabMenu2HeaderDataId = $(this).data("id");
                }
            });
        }
    });

    $('.tab-menu3 .header').click(function () {
        let tabClicked3 = $(this).data("id");
        $('.tab-menu3 .header').each(function () {
            if ($(this).hasClass("active-header2")) {
                $(this).removeClass("active-header2");
            }
        });
        $(this).addClass("active-header2");
        if (tabClicked3 != prevActiveTabMenu3HeaderDataId) {
            $('.tab-menu3 .content').each(function () {
                if ($(this).data("id") == tabClicked3) {
                    $('.tab-menu3 .content').hide();
                    $(this).show();
                    prevActiveTabMenu3HeaderDataId = $(this).data("id");
                }
            });
        }
    });

    $('.tab-menu4 .header').click(function () {
        let tabClicked4 = $(this).data("id");
        $('.tab-menu4 .header').each(function () {
            if ($(this).hasClass("active-header1")) {
                $(this).removeClass("active-header1");
            }
        });
        $(this).addClass("active-header1");
        if (tabClicked4 != prevActiveTabMenu4HeaderDataId) {
            $('.tab-menu4 .content').each(function () {
                if ($(this).data("id") == tabClicked4) {
                    $('.tab-menu4 .content').hide();
                    $(this).show();
                    prevActiveTabMenu4HeaderDataId = $(this).data("id");
                }
            });
        }
    });

    // accordions

    $('.accordion1 .header').hover(function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    }, function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if (!$(this).parent().hasClass("active-header1") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
        });
    });

    $('.accordion2 .header').hover(function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    }, function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if (!$(this).parent().hasClass("active-header1") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
        });
    });

    $('.accordion3 .header').hover(function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    }, function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if (!$(this).parent().hasClass("active-header2") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
        });
    });

    $('.accordion4 .header').hover(function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    }, function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if (!$(this).parent().hasClass("active-header2") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
        });
    });

    $('.accordion1 .header').click(function () {
        let headClicked1 = $(this);
        $('.accordion1 .header').each(function () {
            if ($(this).not(headClicked1).hasClass("active-header1")) {
                $(this).removeClass("active-header1");
            }
        });
        $('.accordion1 .content').not($(this).next()).slideUp();
        $(this).toggleClass("active-header1");
        $(this).next().slideToggle();
        $('.accordion1 .header').children().each(function () {
            if (!$(this).parent().hasClass("active-header1") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
            else if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    });

    $('.accordion2 .header').click(function () {
        let headClicked2 = $(this);
        $('.accordion2 .header').each(function () {
            if ($(this).not(headClicked2).hasClass("active-header1")) {
                $(this).removeClass("active-header1");
            }
        });
        $('.accordion2 .content').not($(this).next()).slideUp();
        $(this).toggleClass("active-header1");
        $(this).next().slideToggle();
        $('.accordion2 .header').children().each(function () {
            if (!$(this).parent().hasClass("active-header1") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
            else if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    });

    $('.accordion3 .header').click(function () {
        let headClicked3 = $(this);
        $('.accordion3 .header').each(function () {
            if ($(this).not(headClicked3).hasClass("active-header2")) {
                $(this).removeClass("active-header2");
            }
        });
        $('.accordion3 .content').not($(this).next()).slideUp();
        $(this).toggleClass("active-header2");
        $(this).next().slideToggle();
        $('.accordion3 .header').children().each(function () {
            if (!$(this).parent().hasClass("active-header2") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
            else if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    });

    $('.accordion4 .header').click(function () {
        let headClicked4 = $(this);
        $('.accordion4 .header').each(function () {
            if ($(this).not(headClicked4).hasClass("active-header2")) {
                $(this).removeClass("active-header2");
            }
        });
        $('.accordion4 .content').not($(this).next()).slideUp();
        $(this).toggleClass("active-header2");
        $(this).next().slideToggle();
        $('.accordion4 .header').children().each(function () {
            if (!$(this).parent().hasClass("active-header2") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
            else if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    });

    // progress bar

    $('#progress-bar .percentage').each(function () {
        let percentage = $(this);
        let limit = percentage.text();
        let grow = 0;
        function progress() {
            if (grow < limit) {
                setTimeout(function () {
                    grow += 1;
                    percentage.text(grow);
                    progress();
                }, 40);
            }
        }
        progress();
    });

    // product shop

    $('.quantity-arrow-right i').click(function () {
        let prevQuantVal = $('.quantity-input-field').val();
        prevQuantVal++;
        $('.quantity-input-field').val(prevQuantVal);
    });

    $('.quantity-arrow-left i').click(function () {
        let prevQuantVal = $('.quantity-input-field').val();
        if (prevQuantVal - 1 != 0 && prevQuantVal - 1 != -1) {
            prevQuantVal--;
        }
        else{
            prevQuantVal=1;
        }
        $('.quantity-input-field').val(prevQuantVal);
    });

    $('.product-add-to-cart-btn').click(function () {
        if (localStorage.getItem('cart') == null) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        let cart = JSON.parse(localStorage.getItem('cart'));

        let ProName = $(this).parent().parent().children().first().text().toUpperCase();
        let ProPrice = $(this).parent().parent().children().eq(1).text();
        let ProSrc = $(this).parent().parent().parent().prev().children().first().children().first().children().first().attr("src");
        let ProQuant = Number($('.quantity-input-field').val());

        let existance = cart.find(obj => obj.name == ProName);
        if (existance === undefined) {
            cart.push({
                name: ProName,
                price: ProPrice,
                src: ProSrc,
                quantity: ProQuant
            });
        }
        else {
            existance.quantity += ProQuant;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateItemCount();
        updateProductQuantity();
        updateCartTotal();
        addToCart();
    });

    $('.quantity-input-field').keypress(function (evt) {
        evt.preventDefault();
    });

});