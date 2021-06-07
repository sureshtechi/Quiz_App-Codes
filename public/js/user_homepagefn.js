$(function () {
    $('#create1').on('click', function () {
        var temp = $('div#functions');

        var quiz_id=Math.random().toString(36).substr(2, 9);

        temp.html('');
        console.log("INSIDE Userhomepage ajax create quiz");           
        temp.append('\
        <div class="create_page" id="create_quiz">\
        <label id="quiz_id">'+quiz_id+'</label>\
            <h4>Create Quiz</h4>\
            <p>Click the plus button below to add questions</p>\
            <button id="add_ques" ><i class="fas fa-plus-circle"></i></button>\
            <br>\
            <div id="q_no_disp">\
            </div>\
            <div id="app_ques">\
            </div>\
            <div>\
            <button id="nxt_qst">NEXT</button>\
            <button id="submit_qst">\
              CREATE QUIZ\
            </button>\
          </div>\
        </div>\
        ')

        


        $('#add_ques').on('click', function () {

            var temp = $('div#app_ques');
            var q_no=1;
            temp.html('');
            console.log("INSIDE Userhomepage ajax adding Question");  
            
            var temp2_qno= $('div#q_no_disp');
            temp2_qno.html('');
            temp2_qno.append('\
            <label for="ques" id="q_no"><b>'+q_no+'</b></label><br>\
            ')

            temp.append('\
            <textarea class="form-control" id="ques_text" rows="4" placeholder="Enter the Question here"></textarea>\
            <p id="option_des">Click this square plus button to add options : <button id="add_opt"><i class="fas fa-plus-square"></i></button></p>\
            <h7>Options :</h7>\
            <br>\
            <div id="app_opt">\
            </div>\
            <p>Answer : <input type="text"  name="answer" id="ans" placeholder="Enter the Answer"required></p>\
            <p>Weightage : <input type="text"  name="weightage" id="wgt_q" placeholder="Enter the weightage"required></p>\
            ')
       
    
       
        $('#add_opt').on('click', function (){
            var temp1 = $('div#app_opt');
            temp1.html('');
            console.log("INSIDE Userhomepage ajax adding options");        
            temp1.append('\
            <p><span id="demo">'+ 1+ '.</span><input type="text"  name="opt" id ="opt_1" placeholder="Enter the Options" required></p>\
            <i class="fas fa-minus-square"></i>\
            <p><span id="demo">'+ 2+ '.</span><input type="text"  name="opt" id ="opt_2" placeholder="Enter the Options" required></p>\
            <i class="fas fa-minus-square"></i>\
            <p><span id="demo">'+ 3+ '.</span><input type="text"  name="opt" id ="opt_3" placeholder="Enter the Options" required></p>\
            <i class="fas fa-minus-square"></i>\
            <p><span id="demo">'+ 4+ '.</span><input type="text"  name="opt" id ="opt_4" placeholder="Enter the Options" required></p>\
            <i class="fas fa-minus-square"></i>\
            ')

            $('#nxt_qst').on('click', function ()
            {
                var err_msg= $('div#disp_err_msg');

                var user=(document.getElementById('user_name_disp').innerHTML);
                console.log(user);
                var q_txt=(document.getElementById('ques_text').value);
                var opt_1=document.getElementById('opt_1').value;
                var opt_2=document.getElementById('opt_2').value;
                var opt_3=document.getElementById('opt_3').value;
                var opt_4=document.getElementById('opt_4').value;
                var ans=document.getElementById('ans').value;
                var weight=document.getElementById('wgt_q').value;
                // if(q_txt=="")
                // {
                //     err_msg.html('');
                //     err_msg.append("please enter the question");
                // }

                $.ajax({
                    url: 'http://localhost:8081/add_question',
                    method: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify({user:user,q_no:q_no, q_txt:q_txt, opt_1:opt_1, opt_2:opt_2, opt_3:opt_3, opt_4:opt_4, ans:ans, weight:weight, quiz_id:quiz_id }),
                    success: function (response) {

                        

                        // document.getElementById('q_no').value=q_no;
                        document.getElementById('ques_text').value='';
                        document.getElementById('opt_1').value='';
                        document.getElementById('opt_2').value='';
                        document.getElementById('opt_3').value='';
                        document.getElementById('opt_4').value='';
                        document.getElementById('ans').value='';
                        document.getElementById('wgt_q').value='';
                        q_no=q_no+1;
                        temp2_qno.html('');
                        temp2_qno.append('\
                        <label for="ques" id="q_no"><b>'+q_no+'</b></label><br>\
                        ')
                    }
                });

                    $('#submit_qst').on('click', function () {
                        alert("please notedown ur quiz id "+quiz_id);
                    });

                
            });
        });
       });
    });

    
});

$(function(){
    $('#attend1').on('click', function () {
        var temp = $('div#functions');
        temp.html('');
        console.log("INSIDE Userhomepage ajax attend quiz");           
        temp.append('\
        <div class="attend_qz" id="attend_quiz">\
        <h4>Attend Quiz</h4>\
        <p>Enter the Code to start the Quiz</p>\
        <input type="text"  name="codes" id ="user_quiz_code" placeholder="Enter the Code" required></p>\
        <button id="user_quizid_sbt" >Submit</button>\
        <br>\
        </div>\
        ')

        $('#user_quizid_sbt').on('click', function ()
        {

            var user_quizid=(document.getElementById('user_quiz_code').value);

             var username = (document.getElementById('user_name_disp').innerHTML);

             console.log("username = "+username) ;
             

            if(user_quizid=="")
            {
                alert("Please enter the quiz id");

            }
            else
            {

            
            // if(q_txt=="")
            // {
            //     err_msg.html('');
            //     err_msg.append("please enter the question");
            // }

            $.ajax({
                url: 'http://localhost:8081/user_check_quizid',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({user_quizid:user_quizid, username : username }),
                success: function (response) {
                    if((response.details=="Invalid QuizID"))
                    {
                        alert("Quiz ID entered does not exists");
                    }
                    else
                    {
                        console.log(response.details);
                        var w = window.open('about:blank');
                        w.document.open();
                        w.document.write(response);
                        w.document.close();
                    }
                    
                }
            
            });
        }
        

                $('#submit_qst').on('click', function () {
                    alert("please notedown ur quiz id "+quiz_id);
                });

            });

        });
    
    });

    $(function(){
        var std_mks_user,std_mks_quiz_id, std_mks_marks ; 

    

                $('#attending_next_qst_btn').on('click', function () 
                {
                    var flag=0;

                    var std_mks_user =(document.getElementById('attending_quiz_user').innerHTML);
                    


                    console.log("Inside next button");
                    var count=(document.getElementById('attending_qst_no').innerHTML);
                    console.log("count - "+count);
                    var attd_qid=(document.getElementById('curr_quizid').innerHTML);

                    var ele = document.getElementsByName('test');
                    console.log(ele);

                    var cur_mark=parseInt((document.getElementById('disp_curr_mark').innerHTML));
                    console.log("current mark -"+cur_mark);

                    var wgt=parseInt((document.getElementById('attending_wgt').innerHTML));
                    console.log("wgt-"+wgt);



                    $.ajax({
                        url: 'http://localhost:8081/get_nxt_qtx',
                        method: 'POST',
                        contentType: 'application/json',
                        data: JSON.stringify({attd_qid:attd_qid }),
                        success: function (response) {
                            if((response.details=="Invalid QuizID"))
                            {
                                alert("Quiz ID entered does not exists");
                            }
                            else
                            {
                                std_mks_quiz_id = attd_qid ;

                                for(i = 0; i < ele.length; i++)
                                {

                                    console.log("ans-options -"+ele[i].value);
                                    if(ele[i].checked)
                                    {
                                        var selected;
                                        if(i==0)
                                        {
                                            selected=(document.getElementById('attending_opt1').innerHTML);
                                        }
                                        else if(i==1)
                                        {
                                            selected=(document.getElementById('attending_opt2').innerHTML);
                                        }
                                        else if(i==2)
                                        {
                                            selected=(document.getElementById('attending_opt3').innerHTML);
                                        }
                                        else
                                        {
                                            selected=(document.getElementById('attending_opt4').innerHTML);
                                        }

                                        if(selected==response.details[count-1].ans)
                                        {
                                            cur_mark=cur_mark+wgt;
                                            document.getElementById('disp_curr_mark').innerHTML=cur_mark;
                                        }
                                        break;
                                    }
                                }

                                if( (document.getElementById('attending_qst_no').innerHTML)   == (document.getElementById('attending_qst_tot').innerHTML))
                                {
                                    
                                    
                                    
                                    // confirm("Are you sure you want to submit ");
                                    // alert("Your mark is "+cur_mark);
                                    // var w = window.open('about:blank');
                                    // w.document.open();
                                    // w.document.write(response);
                                    // w.document.close();


                                    std_mks_marks = cur_mark ;
                                    

                                }

                                else
                                {
                            


                                console.log("Inside next button ajax call");
                                (document.getElementById('attending_qst_no').innerHTML)=response.details[count].q_no;

                                if(  (document.getElementById('attending_qst_no').innerHTML)   == (document.getElementById('attending_qst_tot').innerHTML) )
                                {
                                    // document.getElementById("attending_sbt_btn").disabled = false;
                                    // document.getElementById("attending_next_qst_btn").disabled = true;

                                    flag=1;
                                    (document.getElementById('attending_next_btn_to_sbt_btn').innerHTML)="Save";

                                }


                                


                                (document.getElementById('attending_wgt').innerHTML)=response.details[count].weightage;
                                (document.getElementById('attending_qtxt').innerHTML)=response.details[count].question;
                                (document.getElementById('attending_opt1').innerHTML)=response.details[count].opt_1;
                                (document.getElementById('attending_opt2').innerHTML)=response.details[count].opt_2;
                                (document.getElementById('attending_opt3').innerHTML)=response.details[count].opt_3;
                                (document.getElementById('attending_opt4').innerHTML)=response.details[count].opt_4;

                                (document.getElementById('attending_opt1_inp').innerHTML)=response.details[count].opt_1;
                                (document.getElementById('attending_opt2_inp').innerHTML)=response.details[count].opt_2;
                                (document.getElementById('attending_opt3_inp').innerHTML)=response.details[count].opt_3;
                                (document.getElementById('attending_opt4_inp').innerHTML)=response.details[count].opt_4;

                            }
                                
                            }
                            
                        }
                    
                    });


                    




                    




                });






                $('#sbt_for_grade').on('click', function ()
                {
        
                    var user_quizid=(document.getElementById('curr_quizid').innerHTML);
        
                     var username = (document.getElementById('attending_quiz_user').innerHTML);

                     var user_mark = (document.getElementById('disp_curr_mark').innerHTML);


        
                     console.log("username = "+username) ;
                     console.log("quiz id = "+user_quizid) ;
                     console.log("mark = "+user_mark) ;
                     
        
                    $.ajax({
                        url: 'http://localhost:8081/add_user_marks',
                        method: 'POST',
                        contentType: 'application/json',
                        data: JSON.stringify({user_quizid : user_quizid  ,  username : username ,  user_mark  :  user_mark  }),
                        success: function (response) {
                            if((response.details=="error"))
                            {
                                alert("error");
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











                // $.ajax({
                //     url: 'http://localhost:8081/add_user_marks',
                //     method: 'POST',
                //     contentType: 'application/json',
                //     data: JSON.stringify({   std_mks_user : std_mks_user ,std_mks_quiz_id : std_mks_quiz_id , std_mks_marks : std_mks_marks  }),
                //     success: function (response) {
                //         if((response.details=="error"))
                //         {
                //             alert("error");
                //         }
                //         else
                //         {
                //             console.log(response.details);
                            
                //         }
                        
                //     }
                
                // });

                

              
                });
            
            
 


                $(function(){


                $('#show_my_quiz').on('click', function () {

                    var user= (document.getElementById('user_name_disp').innerHTML);
                    var temp = $('div#show_my_quiz_list');


                    $.ajax({
                        url: 'http://localhost:8081/show_quiz_list',
                        method: 'POST',
                        contentType: 'application/json',
                        data: JSON.stringify({  user : user }),
                        success: function (response) {
                            if((response.details=="error"))
                            {
                                alert("error");
                            }
                            else
                            {

                                // temp.append('\
                                // <script>\
                                // var i=0, x="" \
                                // for (i=1; i<='+(response.details).length+'; i++) {\
                                //    x=x + '+(response.details[i].quiz_id)+'\
                                // }\
                                // </script>\
                                // '+x+'\
                                // ')

                                response.details.forEach(function(detail){
                                    temp.append('\
                                    <p>'+detail.quiz_id+'<br>\
                                   ');
                        });

                                console.log(response.details) ;


                                
                            }
                            
                        }
                    
                    });


        
                    
        
                    
        
        
                 }); 
                }) ;



                $(function(){


                    $('#user_pooling_btn').on('click', function () {
    
                        var quiz_id= (document.getElementById('user_pooling_id').value);
                        var temp = $('textarea#disp_pooling_qst');
                        temp.append("");
    
    
                        $.ajax({
                            url: 'http://localhost:8081/get_pool_qst',
                            method: 'POST',
                            contentType: 'application/json',
                            data: JSON.stringify({  quiz_id: quiz_id }),
                            success: function (response) {
                                if((response.details=="error"))
                                {
                                    alert("error");
                                }
                                else
                                {
    
                                    // temp.append('\
                                    // <script>\
                                    // var i=0, x="" \
                                    // for (i=1; i<='+(response.details).length+'; i++) {\
                                    //    x=x + '+(response.details[i].quiz_id)+'\
                                    // }\
                                    // </script>\
                                    // '+x+'\
                                    // ')
    
                                    response.details.forEach(function(detail){
                                        temp.append('\
                                       '+detail.q_no+'.<br>\
                                        question - '+detail.question+'<br>\
                                       option 1 - '+detail.opt_1+'<br>\
                                       option 2 - '+detail.opt_2+'<br>\
                                       option 3 - '+detail.opt_3+'<br>\
                                       option 4 - '+detail.opt_4+'<br>\
                                        answer - '+detail.ans+'<br>\
                                        weightage - '+detail.weightage+'<br>\
                                        <p></p><br><br>\
                                       ');
                            });
    
                                    console.log(response.details) ;
    
    
                                    
                                }
                                
                            }
                        
                        });
    
    
            
                        
            
                        
            
            
                     }); 
                    }) ;