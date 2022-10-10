let user_name= "akshay123@gmail.com";
let password= "Akshay@123";
// user input credentials
let login_user_name= "Akshay123@gmail.com";
let login_password="akshay@123";
if(user_name==login_user_name){
  if( password==login_password){
    console.log("Login Successful");
  }else{
    console.log("Password is incorrect");
  }
}else{
  console.log("Username is incorrect");
}