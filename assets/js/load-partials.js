document.addEventListener("DOMContentLoaded", function () {
    var navbarEl = document.getElementById("navbar-placeholder");
    var footerEl = document.getElementById("footer-placeholder");

    if (navbarEl) {
        fetch("/assets/components/navbar.html")
            .then(function (res) { return res.text(); })
            .then(function (html) {
                navbarEl.innerHTML = html;
                // Re-init Bootstrap offcanvas for the injected navbar
                var offcanvasEl = navbarEl.querySelector("#offcanvasNavbar");
                if (offcanvasEl) {
                    new bootstrap.Offcanvas(offcanvasEl);
                }
            });
    }

    if (footerEl) {
        fetch("/assets/components/footer.html")
            .then(function (res) { return res.text(); })
            .then(function (html) {
                footerEl.innerHTML = html;
            });
    }

    var doctorHeaderEl = document.getElementById("doctor-header-placeholder");
    if (doctorHeaderEl) {
        fetch("/assets/components/doctor-header.html")
            .then(function (res) { return res.text(); })
            .then(function (html) {
                doctorHeaderEl.innerHTML = html;
            });
    }
});
