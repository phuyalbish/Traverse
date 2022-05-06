function abc()
            {
            setTimeout(function(){document.getElementById('display').style.display = 'block';}, 7000);
            }
            function loginsubmit(){
                var name = document.getElementById("name").value;
                var password = document.getElementById("password").value;
                var n ="bishal phuyal";
                var p = "password";
                if(name == n && password == p){
                document.getElementById('demo').style.color = "black";
                document.getElementById("name").value = "";
                document.getElementById("password").value = "";
                document.getElementById('demo').innerHTML = 'LogIn successful.';
                }
                else{
                    document.getElementById("name").value = "";
                    document.getElementById("password").value = "";
                document.getElementById('demo').style.color = "red";
                document.getElementById('demo').innerHTML = 'LogIn unsuccessful.';
                }
                
            }
            function signupsubmit(){
                document.getElementById('demo').innerHTML = "";
                document.getElementById('form1').style.display = 'none';
                document.getElementById('form2').style.display = "block";

            }
            function signupagainsubmit(){
                var sn = document.getElementById("fname").value;
                var sa = document.getElementById("age").value;
                var sp = document.getElementById("spassword").value;
                var srp = document.getElementById("repassword").value;
                if((sn != "") && (0 < sa < 100) && (sp == srp) && (srp.length > 8)){
                document.getElementById('demo').style.color = "black";
                document.getElementById('form2').style.display = "none";
                document.getElementById('form1').style.display = "block";
                document.getElementById('demo').innerHTML = 'Signup successful. Welcome '+ sn+".";
                }
                else{
                document.getElementById('demo').style.color = "red";
                document.getElementById('demo').innerHTML = 'Signup unsuccessful.Make sure you have age appropriate,phone number correct,password more than 8 character and similar to re-password.';
                }
            }
            
            function loginagainsubmit(){
                document.getElementById('demo').innerHTML = "";
                document.getElementById('form2').style.display = "none";
                document.getElementById('form1').style.display = "block";
                }

              
                    
             