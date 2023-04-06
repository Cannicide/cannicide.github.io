document.querySelectorAll(".fakeurl").forEach(elem => {

    elem.addEventListener("mousedown", () => {
        elem.href = elem.getAttribute("realhref");
    });

    elem.addEventListener("contextmenu", () => {
        elem.href = elem.getAttribute("realhref");
    });

});