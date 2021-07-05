const cursor = document.querySelector('.cursor')

//mousemove 이벤트
window.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.pageY}px`
    cursor.style.left = `${e.pageX}px`
})

//이벤트 객체의 pageX, pageY축 좌표를 console로 확인