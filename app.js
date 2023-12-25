$(document).ready(function () {

    $("#password").on("change keyup paste click", function () {
        // david
        if ($('#password').val() == '034') {
            // $('#_034').css('display', 'block');
            $('#_034').show(750);
            // $('.cls-2').css('fill', 'var(--red');
            $('.cls-2').css({fill: 'var(--purple)', transition: '.75s'});
            // rotate
            $('#key').css({'-webkit-transform': 'rotate(0deg)', transition: '.75s'});
            $('#key').css({'-moz-transform': 'rotate(0deg)', transition: '.75s'});
            $('#key').css({transform: 'rotate(0deg)', transition: '.75s'});
        }

        // mom
        else if ($('#password').val() == '181') {
            // $('#_181').css('display', 'block');
            $('#_181').show(750);
            // $('.cls-2').css('fill', 'var(--red');
            $('.cls-2').css({fill: 'var(--red)', transition: '.75s'});
            // rotate
            $('#key').css({'-webkit-transform': 'rotate(0deg)', transition: '.75s'});
            $('#key').css({'-moz-transform': 'rotate(0deg)', transition: '.75s'});
            $('#key').css({transform: 'rotate(0deg)', transition: '.75s'});
        }

        // dad
        else if ($('#password').val() == '499') {
            // $('#_499').css('display', 'block');
            $('#_499').show(750);
            // $('.cls-2').css('fill', 'var(--blue');
            $('.cls-2').css({fill: 'var(--blue)', transition: '.75s'});
            // rotate
            $('#key').css({'-webkit-transform': 'rotate(0deg)', transition: '.75s'});
            $('#key').css({'-moz-transform': 'rotate(0deg)', transition: '.75s'});
            $('#key').css({transform: 'rotate(0deg)', transition: '.75s'});
        }

        // dan
        else if ($('#password').val() == '228') {
            // $('#_228').css('display', 'block');
            $('#_228').show(750);
            // $('.cls-2').css('fill', 'var(--orange');
            $('.cls-2').css({fill: 'var(--orange)', transition: '.75s'});
            // rotate
            $('#key').css({'-webkit-transform': 'rotate(0deg)', transition: '.75s'});
            $('#key').css({'-moz-transform': 'rotate(0deg)', transition: '.75s'});
            $('#key').css({transform: 'rotate(0deg)', transition: '.75s'});
        }

        // naomi
        else if ($('#password').val() == '528') {
            // $('#_528').css('display', 'block');
            $('#_528').show(750);
            // $('.cls-2').css('fill', 'var(--green');
            $('.cls-2').css({fill: 'var(--green)', transition: '.75s'});
            // rotate
            $('#key').css({'-webkit-transform': 'rotate(0deg)', transition: '.75s'});
            $('#key').css({'-moz-transform': 'rotate(0deg)', transition: '.75s'});
            $('#key').css({transform: 'rotate(0deg)', transition: '.75s'});
        }

        // erin
        else if ($('#password').val() == '942') {
            // $('#_942').css('display', 'block');
            $('#_942').show(750);
            // $('.cls-2').css('fill', 'var(--pink');
            $('.cls-2').css({fill: 'var(--pink)', transition: '.75s'});
            // rotate
            $('#key').css({'-webkit-transform': 'rotate(0deg)', transition: '.75s'});
            $('#key').css({'-moz-transform': 'rotate(0deg)', transition: '.75s'});
            $('#key').css({transform: 'rotate(0deg)', transition: '.75s'});
        }

        // frankie
        else if ($('#password').val() == '670') {
            // $('#_670').css('display', 'block');
            $('#_670').show(750);
            // $('.cls-2').css('fill', 'var(--teal');
            $('.cls-2').css({fill: 'var(--teal)', transition: '.75s'});
            // rotate
            $('#key').css({'-webkit-transform': 'rotate(0deg)', transition: '.75s'});
            $('#key').css({'-moz-transform': 'rotate(0deg)', transition: '.75s'});
            $('#key').css({transform: 'rotate(0deg)', transition: '.75s'});
        }

        else {
            // $('#_034').css('display', 'none');
            // $('#_181').css('display', 'none');
            // $('#_499').css('display', 'none');
            // $('#_228').css('display', 'none');
            // $('#_528').css('display', 'none');
            // $('#_670').css('display', 'none');
            // $('#_942').css('display', 'none');
            $('#_034').hide(750);
            $('#_181').hide(750);
            $('#_499').hide(750);
            $('#_228').hide(750);
            $('#_528').hide(750);
            $('#_670').hide(750);
            $('#_942').hide(750);
            // $('.cls-2').css('fill', '#ccc');
            $('.cls-2').css({fill: '#ccc', transition: '.75s'});
            // rotate
            $('#key').css({'-webkit-transform': 'rotate(45deg)', transition: '.75s'});
            $('#key').css({'-moz-transform': 'rotate(45deg)', transition: '.75s'});
            $('#key').css({transform: 'rotate(45deg)', transition: '.75s'});
        }
    })




    $('#form').on('submit', function (e) {
        // empty value
        if ($('#password').val() == '') {
            alert('No Code Entered :(');
        }

        // incorrect value
        // else if ($('#password').val() != '034', '181', '499', '228', '528', '942', '670') {
        //     alert('Incorrect Code :(');
        // }

        // lindsey
        else if ($('#password').val() == '034') {
            window.location.href = './ends/lindsey.html';
            return false;
        }

        // mom
        else if ($('#password').val() == '181') {
            window.location.href = './ends/mom.html';
            return false;
        }

        // dad
        else if ($('#password').val() == '499') {
            window.location.href = './ends/dad.html';
            return false;
        }

        // dan
        else if ($('#password').val() == '228') {
            window.location.href = './ends/dan.html';
            return false;
        }

        // naomi
        else if ($('#password').val() == '528') {
            window.location.href = './ends/naomi.html';
            return false;
        }

        // erin
        else if ($('#password').val() == '942') {
            window.location.href = 'https://johnmcelrone.github.io/mce-xmas/ends/erin-skincare.pdf';
            return false;
        }

        // dad
        else if ($('#password').val() == '670') {
            window.location.href = './ends/frankie.html';
            return false;
        }


    });


    $('#password').focusin(function () {
        $('#form').css('border', '1px solid var(--blue)');

        // $("h1").animate({
        //     fontSize: '18px',
        //     textAlign: 'left',
        //     marginBottom: '18px'
        //     // $('h1').css('font-size', '18px');
        //     // $('h1').css('margin-bottom', '18px');
        //     // $('h1').css('text-align', 'left');
        // });

        $('#password').focusout(function () {
            $('#form').css('border', '1px solid rgba(0,0,0,0.14)');

            // $("h1").animate({
            //     fontSize: '32px',
            //     textAlign: 'center',
            //     marginBottom: '32px'
            //     // $('h1').css('font-size', '32px');
            //     // $('h1').css('text-align', 'center');
            //     // $('h1').css('margin-bottom', '32px');
            // });


        });

    });



    // $('#form').submit(function() {
    //     // $("#password").keyup(function() {
    //     //     if (this.value == "apple") {
    //     //         // window.location.href = "www.google.com";
    //     //         alert('it works :)');
    //     //     }
    //     //     else {
    //     //         alert('not working :(');
    //     //     }
    //     // });
    // });

});
