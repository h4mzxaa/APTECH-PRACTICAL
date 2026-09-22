        // Dark / Light Mode

        const themeToggle = document.getElementById("themeToggle");

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                themeToggle.innerHTML = "☀️ Light Mode";

            } else {

                themeToggle.innerHTML = "🌙 Dark Mode";

            }

        });

        // Automatic Footer Year


        const currentYear = document.getElementById("currentYear");

        currentYear.textContent = new Date().getFullYear();

    
        // Close Mobile Navbar
        // after clicking a link
       

        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
        const navbar = document.querySelector(".navbar-collapse");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                if (navbar.classList.contains("show")) {

                    const bsCollapse = bootstrap.Collapse.getInstance(navbar);

                    bsCollapse.hide();

                }

            });

        });