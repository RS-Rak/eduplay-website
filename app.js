// FAQ SECTION
const accordion = document.getElementsByClassName("accordian")

for (i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        console.log("Click!")
        this.classList.toggle('active')
    })
}