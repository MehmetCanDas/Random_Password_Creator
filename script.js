const passwordBox = document.getElementById("password")
const length = 12;

const upperCase =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase =  "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#$%^&*()_+{}[]<>/?-="

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password;
}

async function copyPassword(){
    try {
        await navigator.clipboard.writeText(passwordBox.value);
        
        const copyMessage = document.querySelector('.copy-message');
        if (copyMessage) {
            copyMessage.textContent = "Kopyalandı!";
            setTimeout(() => {
                copyMessage.textContent = "";
            }, 2000);
        }
    } catch (err) {
        console.error("Kopyalama başarısız:", err);
        alert("Şifre kopyalanırken bir hata oluştu!");
    }
}