// added opaque styling to all the time element
//with foreach method
const times = document.querySelectorAll('.time');

times.forEach((time) =>{
    time.classList.add('opaque');
})


const unreadMessages = document.querySelectorAll('.red');

unreadMessages.forEach((unread) =>{
    unread.style.backgroundColor = '#f6fafd' ;
})