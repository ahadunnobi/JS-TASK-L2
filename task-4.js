let user = {
  name: "John",
  email: "john@example.com",
  isAdmin: false
};
user.lastLogin = "2026-01-30"; 
user.isAdmin = !user.isAdmin;  
delete user.email;             
console.log(user);