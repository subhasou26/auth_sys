document.addEventListener('DOMContentLoaded', () => {
 
    document.getElementById("sign-out").addEventListener('click',function(){
       
        window.location.href='/api/auth/logout';
    })
    document.getElementById('create-user').addEventListener('click',function(){
        window.location.href='/api/admin/create-user'
    })
});
