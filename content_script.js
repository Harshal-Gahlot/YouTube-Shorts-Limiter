function core() {
    if (window.location.pathname.slice(1, 7) === "shorts") {
        storage = new Set()
        SHORTS_LIM = 3
        TIME = SHORTS_LIM * 50
        time = 0
        var timerId = setInterval(() => {
            const pathName = window.location.pathname.slice(8);
            storage.add(pathName);
            console.log(storage.size, storage, time);
            time += 1
            if (time >= TIME || storage.size > SHORTS_LIM) {
                clearInterval(timerId);
                console.log('size out');
                short = document.querySelector("#page-manager");
                short.innerHTML = "<H1 style='margin: auto auto; background-color:#f00; padding:20px'>ENOUGH SHORTS FOR NOW, GO BACK TO WORK BITCH !</H1>";
                short.style.position = "absolute";
                short.style.height = '80vh';
                short.style.width = '75vw';
                short.style.disply = 'grid';
                short.style.placeItems = 'center';
                setTimeout(core, 1000);
            }
        }, 1000);
    } else { setTimeout(core, 1000); }
}

core()