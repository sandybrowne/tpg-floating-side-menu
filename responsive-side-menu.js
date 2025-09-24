<script>
document.addEventListener("DOMContentLoaded", function () {
    const menu          = document.getElementById("floating-menu");
    const menuToggle    = document.getElementById("menu-toggle");
    const linksContainer= menu.querySelector(".menu-links");
    const links         = linksContainer.querySelectorAll("a");

    // Gather all target sections from anchor links
    const sections = Array.from(links).map(link => {
      const target = document.querySelector(link.getAttribute("href"));
      return target || null;
    });

    // 1) Hide/show entire menu based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }

        // Highlight active link based on scroll
        sections.forEach((section, index) => {
            if (!section) return;
            const rect = section.getBoundingClientRect();
            if (rect.top <= 110 && rect.bottom >= 110) {
                links.forEach(link => link.classList.remove("active"));
                links[index].classList.add("active");
            }
        });
    });

    // 2) Smooth scrolling on link click
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 90,
                    behavior: "smooth"
                });
            }
        });
    });

    // 3) DEFAULT STATE: Collapsed on ALL viewports
    //    (no viewport check, so it collapses for desktop too)
    menu.classList.add("collapsed");

    // 4) Toggling open/close on all viewports
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("collapsed");
    });
});
</script>