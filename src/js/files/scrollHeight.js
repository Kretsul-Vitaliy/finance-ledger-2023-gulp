export function scrollHeight() {
    const header = document.querySelector(".header");
    const headerHeight = header.offsetHeight;

    window.addEventListener("scroll", () => {
        let scrollDistance = window.scrollY;

        if (scrollDistance >= headerHeight) {
            header.classList.add("header--fixed");
        } else {
            header.classList.remove("header--fixed");
        }
    });
    function scrollToAnchor(sizeScroll) {
        window.scrollBy({
            top: sizeScroll,
            behavior: "smooth",
        });
    }

    // Anchor smooth scroll to block
    let menuLinks = document.querySelectorAll(".header__link");
    let offsetPosition;

    menuLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let href = link.getAttribute("href");
            let scrollTarget = document.querySelector(`${href}`);
            let topOffset = headerHeight;
            // const topOffset = 0 // If you don't need an indent from the top or set a fixed indent "n > 0"
            let elementPosition = scrollTarget.getBoundingClientRect().top; // for native JS
            offsetPosition = elementPosition - topOffset;
            scrollToAnchor(offsetPosition);
        });
    });
}
