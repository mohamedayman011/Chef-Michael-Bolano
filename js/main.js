// open Menu
let btnMenu = document.getElementById("btnMenu");
let menu = document.getElementById("menu");
btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("active");
    menu.classList.toggle("active");
});

// close menu when click links

let linksMenu = document.querySelectorAll("header nav ul li");
linksMenu.forEach((li) => {
    li.onclick = () => {
        btnMenu.classList.remove("active");
        menu.classList.remove("active");
    };
});

// click like

let likes = document.querySelectorAll(".recipes .over i:nth-child(1)");
likes.forEach((i) => {
    i.onclick = (e) => {
        i.style.color = "red";
        e.currentTarget.dataset.likes = "1";
    };
});

// move up

let btnBackToTop = document.getElementById("backToTop");
btnBackToTop.addEventListener("click", () => {
    window.scroll({ top: 0 });
});

// navbar

let links = document.querySelectorAll("#menu ul li a");
links.forEach((a) => {
    a.classList.remove("active");
    a.onclick = (e) => {
        links.forEach((li) => {
            li.classList.remove("active");
        });
        e.target.classList.add("active");
    };
});

// Create box share

let boxShare = document.createElement("div");
boxShare.id = "boxShare";
boxShare.innerHTML = `
        <div id="closeShare"><i class="fa-solid fa-xmark"></i></div>
        <div class="social">
            <a href="http://"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="http://"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="http://"><i class="fa-brands fa-pinterest-p"></i></a>
            <a href="http://"><i class="fa-brands fa-tumblr"></i></a>
            <a href="http://"><i class="fa-regular fa-envelope"></i></a>
        </div>
        <div class="copy-text">
            <p id="copyText">https://www.google.com</p>
            <button type="button" id="btnCopy"><i class="fa-regular fa-copy"></i></button>
        </div>`;
// create BackBlur

let backBlur = document.createElement("div");
backBlur.id = "backBlur";
// click Share
let share = document.querySelectorAll("#recipes .fa-solid.fa-share");
share.forEach((share) => {
    share.onclick = () => {
        document.body.insertBefore(boxShare, document.scripts[0]);
        document.body.insertBefore(backBlur, document.scripts[0]);
        let btnCopy = document.getElementById("btnCopy");
        let copyText = document.getElementById("copyText");
        let closeShare = document.getElementById("closeShare");
        btnCopy.addEventListener("click", () => {
            navigator.clipboard.writeText(copyText.innerText).then(() => {
                btnCopy.innerHTML = `<i class="fa-solid fa-check"></i>`;
                setTimeout(() => {
                    btnCopy.innerHTML = `<i class="fa-regular fa-copy"></i>`;
                }, 1500);
            });
        });

        closeShare.addEventListener("click", () => {
            boxShare.remove();
            backBlur.remove();
        });

        backBlur.addEventListener("click", () => {
            boxShare.remove();
            backBlur.remove();
        });
    };
});
