function generateOTP(length) {
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}

function abc() { 
    const newel = document.getElementById("heading");
    newel.textContent = generateOTP(6);  
    console.log("OTP Generated:", newel.textContent);
}

 abc();
