$(function () {
    $('#forg_p1').on('click', function () {

        var temp = $('div#display1');
        temp.html('');
        console.log(document.getElementById('user_fp').value);
        console.log(document.getElementById('univ_fp').value);
        console.log(document.getElementById('roll_fp').value);
        console.log("INSIDE FORG_P1 AJAX");
        $.ajax({
            url: 'http://localhost:8081/forgot',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ user:document.getElementById('user_fp').value, univ:document.getElementById('univ_fp').value, roll:document.getElementById('roll_fp').value}),
            success: function (response) {
                // document.getElementById('sec_bt_aj').style.visibility = "visible";
    //             $(".deleteBtn").hide();
    // $(this).find(".deleteBtn").show();

                        // temp.append("Security Question - "+response.details[0].sec_q);
                        
                        temp.append('<br>\
                        <label ><b>Security Question - '+response.details[0].sec_q +'</b></label><br>\
                        <label ><b>Enter your Security Answer</b></label>\
                        <input type="text" placeholder="Enter your Security Answer" name="sec_ans_aj" id="sec_ans_aj" required><br>\
                    ');
            }
        });

        

    });

    $('#sec_bt_aj').on('click', function () {

        console.log("INSIDE SEC_BT_AJ AJAX");
        var temp = $('div#display2');
        temp.html('');
        console.log(document.getElementById('sec_ans_aj').value);
        $.ajax({
            url: 'http://localhost:8081/sec_answer',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ user:document.getElementById('user_fp').value, sec_ans:document.getElementById('sec_ans_aj').value, }),
            success: function (response) {
                        
                        temp.append('\
                        <label><b>Reset your password</b></label>\
                        <input type="password" placeholder="Enter Password" name="sec_pd1" id="sec_pd1" required>\
                        <input type="password" placeholder="Re-Enter Password" name="sec_pd2" id="sec_pd2" required>\
                        ');
            }
        });
    });



    $('#login_button').on('click', function () {

        console.log("INSIDE reset button AJAX");
        var username = document.getElementById("user").value;
        var password = document.getElementById("psw").value;
        var disp = $('#display1');
        disp.html('');

        $.ajax({
            url: 'http://localhost:8081/login_user',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ username:document.getElementById('user').value, password:document.getElementById('psw').value}),
            success: function (response) {
                console.log(response.details);
                
                if((response.details=="Invalid Username")||(response.details=="Invalid Password"))
                {
                    disp.append(response.details);
                }
                else
                {
                    var w = window.open('about:blank');
                    w.document.open();
                    w.document.write(response);
                    w.document.close();
                }
            }
        });
    });


    $('#admin_login_bt').on('click', function () {

        console.log("INSIDE ADMIN LOGIN BUTTON ");

        var disp = $('#admin_login_err_disp');
        disp.html('');

        var username = document.getElementById("ad_user").value;
        var password = document.getElementById("ad_psw").value;

        if(username=="")
        {
            disp.html('');
            disp.append("Please enter the username");
        }
        else if(password=="")
        {
            disp.html('');
            disp.append("Please enter your password");
        }
        else
        {
            $.ajax({
                url: 'http://localhost:8081/admin_login',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ ad_user:username, ad_psw:password}),
                success: function (response) {
                    console.log(response.details);
                    
                    if((response.details=="Invalid Username")||(response.details=="Incorrect password"))
                    {
                        disp.append(response.details);
                    }
                    else
                    {
                        var w = window.open('about:blank');
                        w.document.open();
                        w.document.write(response);
                        w.document.close();
                    }
                }
            });
        }
    });


    // $('#sign_up_btn').on('click', function () {

    //     console.log("INSIDE SIGN UP BUTTON");

    //     $.ajax({
    //         url: 'http://localhost:8081/create_button',
    //         method: 'POST',
    //         contentType: 'application/json',
    //         success: function (response) {
    //             console.log(response.details);
                
                
    //                 var w = window.open('about:blank');
    //                 w.document.open();
    //                 w.document.write(response);
    //                 w.document.close();
                
    //         }
    //     });
    // });


    $('#reset_forg_pass').on('click', function () {

        console.log("INSIDE RESET FORGOT PASSWORD ON CLICK");

        var user = document.getElementById("user_fp").value;
        var password1 = document.getElementById("sec_pd1").value;
        var password2 = document.getElementById("sec_pd2").value;

        var disp = $('#display1');
        disp.html('');
        if(password1!=password2)
        {
            disp.append("Pasword Doesn't match ");
        }
        else
        {
            $.ajax({
                url: 'http://localhost:8081/reset_forgot_password',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ user:user, password:password1}),
                success: function (response) 
                {
                    console.log(response.details);
                        var w = window.open('about:blank');
                        w.document.open();
                        w.document.write(response);
                        w.document.close();
                    
                }
            });

        }

        
    });


    $('#create_acc_bt').on('click', function () {

        console.log("INSIDE CREATE ACCOUNT");
        var disp = $('#create_acc_disp_msg');
        disp.html('');

        var n1 = document.getElementById("cr_name").value;
        var user1 = document.getElementById("cr_username").value;
        var psw1 = document.getElementById("cr_psw1").value;
        var psw2 = document.getElementById("cr_psw2").value;
        var univ = document.getElementById("cr_univ").value;
        var roll = document.getElementById("cr_roll").value;
        var sec_q = document.getElementById("cr_sec_q").value;
        var sec_ans = document.getElementById("cr_sec_ans").value;

                    console.log(n1);
            console.log(user1);
            console.log(psw1);
            console.log(psw2);
            console.log(univ);
            console.log(roll);
            console.log(sec_q);
            console.log(sec_ans);
        

        if(n1=="")
        {
            disp.html('');
            disp.append("Please enter your name");
        }
        else if(user1=="")
        {
            disp.html('');
            disp.append("Please enter the username");
        }
        else if(psw1=="")
        {
            disp.html('');
            disp.append("Please enter the password");
        }
        else if(psw2=="")
        {
            disp.html('');
            disp.append("Please Re-enter the password");
        }
        else if(univ=="")
        {
            disp.html('');
            disp.append("Please enter your university");
        }
        else if(roll=="")
        {
            disp.html('');
            disp.append("Please enter your roll-number");
        }
        else if(sec_q=="")
        {
            disp.html('');
            disp.append("Please select the security question");
        }
        else if(sec_ans=="")
        {
            disp.html('');
            disp.append("Please enter the security answer");
        }
        else
        {


            console.log("INSIDE AJAX REQUEST");
            $.ajax({
                url: 'http://localhost:8081/create_account',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ n1:n1, user1:user1, psw1:psw1 , psw2:psw2 , univ:univ, roll:roll, sec_q:sec_q, sec_ans:sec_ans }),
                success: function (response) {
                    console.log("INSIDE RESPONSE AJAX");
                    
                    if((response.details=="Password doesn't match")||(response.details=="Username already exists"))
                    {
                        console.log("Inside error msg");
                        disp.append(response.details);
                    }
                    else
                    {
                        console.log("Inside new window");
                        var w = window.open('about:blank');
                        w.document.open();
                        w.document.write(response);
                        w.document.close();
                    }
                }
            });
        }
    });







    
});



