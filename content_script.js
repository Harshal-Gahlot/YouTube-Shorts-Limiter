storage = new Set()
SHORTS_LIM = 3
time = 0
var timerId = setInterval(() => {
    const pathName = window.location.pathname.slice(8);
    storage.add(pathName);
    console.log(storage.size, storage, time);
    time += 1
    if (time >= 180 || storage.size > SHORTS_LIM) {
        clearInterval(timerId);
        console.log('size out');
        short = document.querySelector("#page-manager");
        short.innerHTML = "<H1 style='margin: auto auto; background-color:#f00; padding:20px'>ENOUGH SHORTS FOR NOW, GO BACK TO WORK BITCH !</H1>";
        short.style.position = "absolute";
        short.style.height = '80vh';
        short.style.width = '75vw';
        short.style.disply = 'grid';
        short.style.placeItems = 'center';
    }
}, 1000);
