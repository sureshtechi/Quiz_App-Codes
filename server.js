var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');
var http = require('http');
var fs = require('fs');

var connection = mysql.createConnection({ 
  host: "127.0.0.1",
  user: "root",
  password: "", 
  database: "quiz_app",
  port:"3306"
});

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

// app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());


connection.connect(function(err){
  if(err)
  {
    throw err;
  }
  console.log("DATABASE CONNECTED");
});


app.post('/login_user', urlencodedParser,function (req, res) {
    var username1=req.body.username;
    var password1=req.body.password;
    console.log(username1);
    console.log(password1);
  
    connection.connect(function(err){
        console.log("connected");
        var sql="SELECT PASSWORD FROM CREDENTIAL WHERE USERNAME ='"+username1+"'";
        connection.query(sql,function(err,results){
            if(err)
            {
              throw err;
            }
          console.log(results);
          if(results=="")
          {
              console.log("Invalid Username");
              //prompt("Invalid Username");
              res.send({details : "Invalid Username"});
          }
          else
          {
            console.log(results[0].PASSWORD);
            console.log(password1);
            if ( results[0].PASSWORD.toString()==password1)
            {
              console.log("Congratulations Login Success");
              res.render('user_portal',{usern : req.body.username});
  
            }
            else
            {
              console.log("Invalid Password");
              res.send({details : "Invalid Password"});
              
            }
          }
  
         
        });
    });
    // app.listen(8081);
    });
    // app.listen(8081);
    // console.log("Server Listening in port 8081");



    app.get('/dashboard',urlencodedParser,function (req, res) {
      var sql = "SELECT distinct quiz_id,user  FROM question";
      var query = connection.query(sql, function(err, result) {
          console.log("Total Records:- " + result.length);
          res.render('newadmi',{num:result.length,nums:result.length});
      });
    
  });
      app.get('/active',urlencodedParser,function (req, res) {
      var sql = "SELECT distinct quiz_id,user  FROM question";
      var query = connection.query(sql, function(err, result) {
          res.render('active', {contacts:result,len:result.length});
          console.log(result);
      });
    
  });


      app.get('/features',urlencodedParser,function (req, res) {
      
          res.render('feat');
  });

  app.get('/table2',urlencodedParser,function (req, res) {

    var user = req.param('user');

    console.log("user in table 2 = "+user) ;
      
    var sql="select distinct question.quiz_id, username, marks from question, student_marks where question.quiz_id= student_marks.quiz_id and user = '"+user+"';";
                            connection.query(sql,function(err,results)
                            {
                              console.log(results);
                              if(results=="")
                              {
                                res.send({details : "error"});
                              }
                              else
                              {
                                console.log(results);
                                // res.send({details: results}); 
                                res.render('table2',{ contacts:results,len:results.length  }); 
                              }
                              });


    
});



app.get('/table1',urlencodedParser,function (req, res) {

  var user = req.param('user');
   

  console.log("user in table 1 = "+user) ;
    
  var sql="select distinct quiz_id, marks from student_marks where username ='"+user+"';";
                          connection.query(sql,function(err,results)
                          {
                            console.log(results);
                            if(results=="")
                            {
                              res.send({details : "error"});
                            }
                            else
                            {
                              console.log(results);
                              // res.send({details: results}); 
                              res.render('table1',{ contacts:results,len:results.length  }); 
                            }
                            });


  
});







    app.post('/admin_login', urlencodedParser,function (req, res) {
      var username1=req.body.ad_user;
      var password1=req.body.ad_psw;
      console.log(username1);
      console.log(password1);
    
      connection.connect(function(err){
          console.log("connected");
          var sql="SELECT PASSWORD FROM ADMIN WHERE USERNAME ='"+username1+"'";
          connection.query(sql,function(err,results){
    
            console.log(results);
            if(results=="")
          {
              console.log("Invalid Username");
              //alert("Invalid Username"); 
              // fs.readFile('admin_login.html', function(err, data) {
              // res.writeHead(200, {'Content-Type': 'text/html'});
              // res.write("<script language=javascript>alert('Invalid Username');</script>");
              // res.write(data);
              // res.end();
              // });
              res.send({details:"Invalid Username"});
          }
          else
          {
              console.log(results[0].PASSWORD);
              console.log(password1);
              if ( results[0].PASSWORD.toString()==password1)
              {
                console.log("Congratulations Login Success");
    
                  // fs.readFile('admin_homepage.html', function(err, data) {
                  //   res.writeHead(200, {'Content-Type': 'text/html'});
                  //   res.write(data);
                  //   res.end();
                  // });
                  res.render('newadmi',{num:results.length,nums:results.length,numbr:results.length});
    
              }
              else
              {
                console.log('Incorrect username/password. Please try again.');
                //alert("Incorrect username/password. Please try again.");
                // fs.readFile('admin_login.html', function(err, data) {
                //   res.writeHead(200, {'Content-Type': 'text/html'});
                //   res.write("<script language=javascript>alert('Incorrect password Please try again.');</script>");
                //   res.write(data);
                //   res.end();
                // });
                res.send({details:"Incorrect password"});

              }
          }
    
           
          });
      });
      // app.listen(8081);
      });




    app.post('/login_admin', urlencodedParser,function (req, res) {
      fs.readFile('admin_login.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      // app.listen(8081);
      });
    });

    // app.post('/create_button', urlencodedParser,function (req, res) {
    //  fs.readFile('create_account.html', function(err, data) {
       
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     res.end();
    //   });

    // });
    app.get('/create_account',urlencodedParser,function (req, res) 
    {
      res.send("Hello");
    });


    app.post('/create_account', urlencodedParser,function (req, res) {
      console.log("INSIDE SERVER CREATE ACCOUNT");
      var name=req.body.n1;
      var username=req.body.user1;
      var password1=req.body.psw1;
      var password2=req.body.psw2;
      var univ=req.body.univ;
      var roll=req.body.roll;
      var sec_q=req.body.sec_q;
      var sec_ans=req.body.sec_ans;

      console.log(username);
      console.log(password1);
    
      connection.connect(function(err){
          console.log("connected");
          var sql="select username from credential where username ='"+username+"'";
          connection.query(sql,function(err,results){
            console.log(results);
            if(results=="")
            {
              if(password1==password2)
        {
          connection.connect(function(err1){
            console.log("connected");
            var sql1="insert into credential values ('"+name+"','"+username+"','"+password1+"','"+roll+"','"+univ+"','"+sec_q+"','"+sec_ans+"');";
            connection.query(sql1,function(err1,results1){
              console.log(results1);
              // fs.readFile('user_homepage.html', function(err1, data) {
              //   res.writeHead(200, {'Content-Type': 'text/html'});
              //   res.write(data);
              //   res.end();
              // });

              res.render('user_portal',{usern : req.body.n1});
              
            });
        });
        }
        else
        {
         console.log("Password doesn't match") ;
         
          // fs.readFile('create_account.html', function(err, data) {
          //   res.writeHead(200, {'Content-Type': 'text/html'});
          //   res.write("<script language=javascript>alert('Password doesn't match');</script>");
          //   res.write("Password doesn't match");
          //   res.write(data);
          //   res.end();
          // });
          res.send({details : "Password doesn't match"});


        }
            }
            else
            {
              console.log('Username already exists');
              // fs.readFile('create_account.html', function(err, data) {
              //   res.writeHead(200, {'Content-Type': 'text/html'});
              // console.log('Username already exists');
              //   res.write("<script language=javascript>alert('Username already exists');</script>");
              //   res.write(data);
              //   res.end();
              // });

              res.send({details : "Username already exists"});

            }
          });
      });
     

      // app.listen(8081);
      });

      app.post('/forgot', urlencodedParser,function (req, res) {
        var username=req.body.user;
        var univ=req.body.univ;
        var roll=req.body.roll;
    
        console.log(username);
        console.log(univ);
        console.log(roll);
    
    
            var sql=`select sec_q,sec_ans from credential where username='${username}' and univ='${univ}' and roll='${roll}'`;
            connection.query(sql,function(err,results){
              console.log(results);
              if(results=="")
              {
                console.log("Incorrect Credentials");
              }
              else
              {
                res.send({details: results});
              }
            });
        });

        app.post('/sec_answer', urlencodedParser,function (req, res) {
          var username=req.body.user;
          var ans=req.body.sec_ans;
      
          console.log(username);
          console.log(ans);
      
      
              var sql=`select sec_ans from credential where username='${username}'`;
              connection.query(sql,function(err,results)
              {
                console.log(results);
                if(results[0].sec_ans.toString()!=ans)
                {
                  console.log("Incorrect Credentials");
                }
                else
                {
                  res.send({details: results});
                }
              });
          });


          app.post('/reset_forgot_password', urlencodedParser,function (req, res) 
          {
            var user=req.body.user;
            var password=req.body.password;
            
            console.log(user);
            console.log(password);
            connection.connect(function(err1)
            {
                var sql=`update credential set password='${password}' where username='${user}'`;
                connection.query(sql,function(err,results)
                {
                  console.log(results);
                  res.render('login_e');
                  });

                });

              });

              app.post('/add_question', urlencodedParser,function (req, res) 
              {
                var user=req.body.user;
                var q_no=req.body.q_no;
                var q_txt=req.body.q_txt;
                var opt_1=req.body.opt_1;
                var opt_2=req.body.opt_2;
                var opt_3=req.body.opt_3;
                var opt_4=req.body.opt_4;
                var ans=req.body.ans;
                var weight=req.body.weight;
                var quiz_id=req.body.quiz_id;

                console.log(user);
                console.log(q_no);
                console.log(q_txt);
                console.log(opt_1);
                console.log(opt_2);
                console.log(opt_3);
                console.log(opt_4);
                console.log(ans);
                console.log(weight);
                console.log(quiz_id);


                
                
                    var sql="insert into question values ('"+quiz_id+"',"+q_no+",'"+q_txt+"','"+opt_1+"','"+opt_2+"','"+opt_3+"','"+opt_4+"','"+ans+"','"+user+"',"+weight+");"; 
                    connection.query(sql,function(err,results)
                    {
                      console.log("values inserted");
                      console.log(results);
                      res.send({details : "Values inserted successfully"});
                      });
    
                    
    
                  });



                  app.post('/user_check_quizid', urlencodedParser,function (req, res) 
                  {
                    var user_quizid=req.body.user_quizid;

                    var username = req.body.username;
                    console.log("username = "+username) ; 
                    console.log(user_quizid);
                    
                        var sql="select * from question where quiz_id='"+user_quizid+"';";
                        connection.query(sql,function(err,results)
                        {
                          console.log(results);
                          if(results=="")
                          {
                            res.send({details : "Invalid QuizID"});
                          }
                          else
                          {
                            res.render('attend_quiz' ,{qno : 1, leg : results.length, ques : results[0].question, opt1 : results[0].opt_1, opt2 : results[0].opt_2, opt3 : results[0].opt_3, opt4 : results[0].opt_4, wgt : results[0].weightage, user_quizid : user_quizid , username : username  });
                          }
                          });
        
                        
        
                      });

                    
                      app.post('/get_nxt_qtx', urlencodedParser,function (req, res) 
                      {
                        var user_quizid=req.body.attd_qid;
                        console.log(user_quizid.length);
                        console.log(user_quizid);
                        
                            var sql="select quiz_id,q_no,question,opt_1,opt_2,opt_3,opt_4,ans,weightage,user from question where quiz_id='"+user_quizid+"';";
                            connection.query(sql,function(err,results)
                            {
                              console.log(results);
                              if(results=="")
                              {
                                res.send({details : "Invalid QuizID"});
                              }
                              else
                              {
                                res.send({details: results});  
                              }
                              });

                              



            
                            
            
                          });


              
                          app.get('/split', urlencodedParser,function (req, res) 
                          {
                            console.log("inside split get method") ;



                            // var templateString = null;
                            // var templateString = fs.readFileSync('split.ejs', 'utf-8');
                            
                            
                            // var server = http.createServer(function(req, res){
                            //     res.end(ejs.render(templateString));
                            //   });
                            res.render('split');
    
                              });


                              app.post('/add_user_marks', urlencodedParser,function (req, res) 
                  {
                    var quiz_id=req.body.user_quizid ;

                    var username = req.body.username;

                    var marks = req.body.user_mark;

  

                    console.log(quiz_id);
                    console.log(username);
                    console.log(marks);
                    

                    
                        var sql="insert into student_marks values ( '"+username+"','"+quiz_id+"',"+marks+");";
                        connection.query(sql,function(err,results)
                        {
                          console.log(results);
                          if(results=="")
                          {
                            res.send({details : "error"});
                          }
                          else
                          {
                            console.log("Values inserted successfully"); 

                            let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

// prints date in YYYY-MM-DD format
// console.log(year + "-" + month + "-" + date);

// prints date & time in YYYY-MM-DD HH:MM:SS format
// console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
 var cur_time = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds ; 
// prints time in HH:MM format
// console.log(hours + ":" + minutes);

console.log(cur_time);




                            res.render('feedback', {  cur_time : cur_time , username : username , quiz_id : quiz_id , marks : marks  });



                          }
                          });
        
                        
        
                      });



                      app.post('/show_quiz_list', urlencodedParser,function (req, res) 
                      {
                        var user=req.body.user;
                        console.log(user);
                        
                        
                            var sql="select distinct quiz_id from question where user = '"+user+"';";
                            connection.query(sql,function(err,results)
                            {
                              console.log(results);
                              if(results=="")
                              {
                                res.send({details : "noquiz"});
                              }
                              else
                              {
                                res.send({details: results});  
                              }
                              });
 
            
                          });


                          app.post('/get_pool_qst', urlencodedParser,function (req, res) 
                      {
                        var quiz_id=req.body.quiz_id;
                        console.log(quiz_id);
                        
                        
                            var sql="select q_no, question, opt_1, opt_2, opt_3, opt_4, ans, weightage from question where quiz_id='"+quiz_id+"';";
                            connection.query(sql,function(err,results)
                            {
                              console.log(results);
                              if(results=="")
                              {
                                res.send({details : "error"});
                              }
                              else
                              {
                                console.log(results);
                                res.send({details: results});  
                              }
                              });
 
            
                          });



              
          


      app.listen(8081);
      console.log("Server Listening in port 8081");
