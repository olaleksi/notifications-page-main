
//variables

const times = document.querySelectorAll('.time');
const notifications = document.querySelector('.notifications');
const unreadMessages = document.querySelectorAll('.red');
const markAsRead = document.querySelector('.mark');
const redDot1 = document.querySelector('.red-dot1');
const redDot2 = document.querySelector('.red-dot2');
const redDot3 = document.querySelector('.red-dot3');

let redDots = [redDot1, redDot2, redDot3];


// added opaque styling to all the time element
//with foreach method
times.forEach((time) =>{
    time.classList.add('opaque');
    
})

//added colors to unreadmessages
unreadMessages.forEach((unread) =>{
    unread.style.backgroundColor = '#f6fafd' ;
})


//function to clear unread messages
function clear(){
    unreadMessages.forEach((unread) =>{
        unread.style.backgroundColor = '#ffff';
    })
    notifications.style.display = 'none';
    notifications.innerHTML = '';
    
    for (i = 0; i < redDots.length; i++){
        redDots[i].style.display = 'none';
    }
    
    
    
}

markAsRead.addEventListener('click', clear)







