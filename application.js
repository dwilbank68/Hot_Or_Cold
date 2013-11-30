$(document).ready(function () {

//     // var winW = 630, winH = 460;
//     // if (document.body && document.body.offsetWidth) {
//     //      winW = document.body.offsetWidth;
//     //      winH = document.body.offsetHeight;
//     // }
//     // if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth ) {
//     //  winW = document.documentElement.offsetWidth;
//     //  winH = document.documentElement.offsetHeight;
//     // }
//     // if (window.innerWidth && window.innerHeight) {
//     //     winW = window.innerWidth;
//     //     winH = window.innerHeight;
//     // }654454

//     // // alert(winW+" "+winH)

//     // $('div').width(winW);
//     // $('div').height(winH);
    var guess = 0, temp = "", diff = 0, trend = "", previousDiff = 0, conj = "", counter = 1, new_game = "no";
    var number = Math.floor(Math.random()*100) + 1;
    
            $('#button').click(function(){
                guess = $('#input').val();
                $('#input').val("").focus();
                if (new_game == "no")
                {
                    verifyNumbers(guess);
                }
                new_game = "no";
            });

            $('#input').keyup(function(event){
                if (event.keyCode == 13){
                    $('#button').click();
                }
            });

            $('#new').click(function(){
                var guess = 0,
                    temp = "",
                    diff = 0,
                    trend = "",
                    previousDiff = 0,
                    conj = "",
                    counter = 1,
                    number = Math.floor(Math.random()*100) + 1;
                    new_game = "yes"
                $("#button").show();
                $("#instructions").show();
                $("#display").show();
                $("#display").html(temp);
                $('#input').show();
                $('#new').hide();
                $('img').animate({width: '-=1300'}, 'slow');
                $('#input').focus();
            });

    var verifyNumbers = function(x) {
        if ((isNaN(x)) || x == "" || x == 0)
        {
            $("#display").html("You must type in numbers, not letters or spaces");
            $('#input').val("").focus();
        }
        else if ((x > 100) && (x != 888))
        {
            $("#display").html("You must type in numbers below 100");
            $('#input').val("").focus();
        }
        else
        {
            console.log("number is legit");
            compareNumbers(x);
        }
    };

    var compareNumbers = function(x)
    {
        //     console.log(guess);
        diff = Math.abs(x - number);
        diff > 10 ? temp = "cold" : temp = "hot";
        previousDiff < diff ? trend = "colder" : trend = "hotter";
        (trend.indexOf(temp)!=-1) ? conj = "and" : conj = "but";
        
        counter > 1 ? $("#display").html(temp+" "+conj+" getting "+trend) : $("#display").html(temp);

        if (x == number || x == 888)
        {
            guess = "new_game"
            $("#button").hide();
            $("#instructions").hide();
            //$("#instructions").flyOffPage({ duration: 400 });
            $("#display").hide();
            $('#input').hide();
            $('#new').show().focus();
            $('img').animate({width: '+=1300'}, 'fast');
        }
        else
        {
            previousDiff = diff;
            counter++;
        }
    };

});

$(elem).flyOffPage({ duration: 400 });