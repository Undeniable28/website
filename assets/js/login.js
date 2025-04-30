document.querySelector('.login__form').addEventListener('submit', function (e) {
    // Prevent form submission
    e.preventDefault();
 
    // Get email and password values
    const emailInput = document.getElementById('login-email').value;
    const passwordInput = document.getElementById('login-pass').value;
 
    // Check if email and password match
    if (emailInput === 'example@gmail.com' && passwordInput === 'example') {
        // Redirect to index1.html
        window.location.href = 'responsive-food-website-main/home.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
 });
 
 
 /*=============== SHOW HIDDEN - PASSWORD ===============*/
 const showHiddenPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
       // Change password to text
       if(input.type === 'password'){
          // Switch to text
          input.type = 'text'
 
          // Icon change
          iconEye.classList.add('ri-eye-line')
          iconEye.classList.remove('ri-eye-off-line')
       } else{
          // Change to password
          input.type = 'password'
 
          // Icon change
          iconEye.classList.remove('ri-eye-line')
          iconEye.classList.add('ri-eye-off-line')
       }
    })
 }
 
 showHiddenPass('login-pass','login-eye')