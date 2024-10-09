document.addEventListener('DOMContentLoaded', () => {
 
    document.getElementById("sign-out").addEventListener('click',function(){
        console.log("subha")
        window.location.href='/api/auth/logout';
    })
});
