/* Developed By Bhavya Gupta, Roll No. 2055991554 */

function validate(){
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var country = document.getElementById("country").value;
  var attendee = document.getElementById("attendee").value;
  
  if(fname.length < 1){
    alert("Please Enter a valid First Name.");
    return false;
  }
  if(lname.length < 1){
    alert("Please Enter a valid Last Name.");
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    alert("Please Enter valid Email.");
    return false;
  }
  if(country == "Select"){
    alert("Please Select a valid Country.");
    return false;
  }
  if(attendee == "Select"){
    alert("Please Select How you want to Attend ICAI 2021.");
    return false;
  }
  alert("Thank-You for registering for ICAI 2021.");
  return true;
}