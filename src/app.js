// FAQ SECTION
const accordion = document.getElementsByClassName("accordian")

for (let i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        console.log("Click!")
        this.classList.toggle('active')
    })
}


//email func

(function() {
    emailjs.init("5Xwc21dRWYp0Kld01");
    })();
    
// function sendMail() {
//     let fname = document.getElementById('fname').value;
//     let lname = document.getElementById('lname').value;
//     let email = document.getElementById('email').value
//     let message = document.getElementById('feedback').value;

//     let contactParams = {
//         fname: fname,
//         lname: lname,
//         email: email,
//         message: message
//     };

//     emailjs.send('service_6wnlf1q', 'template_3s8rh3d', contactParams).then(function (res) {})
// }

