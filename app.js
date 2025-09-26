
    const loginPadrao="flavio@vinho.com";
    const passwordPadrao="1234";   
    const btnEnvio=document.getElementsByName("submit");
    const formulario=document.getElementById("login-form")

    formulario.addEventListener('submit', function (e) {
        const login=document.getElementById("user").value;
        const password=document.getElementById("password").value;

        if(login===loginPadrao && password===passwordPadrao){
            alert("Login realizado com sucesso")
        }else{
            alert("Login ou senha inválidos")
        }            
    })
