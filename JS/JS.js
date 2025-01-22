document.addEventListener("DOMContentLoaded", function () {
    let registerButton = document.getElementById("register");
    let signInModal = document.getElementById("SigniIn");
    let loginButton = document.getElementById("LogIn");
    let signUpModal = document.getElementById("SignUp");
    let closeButton1 = document.getElementById("cross1");
    let closeButton2 = document.getElementById("cross2");
    let megamenu = document.getElementById("megamenu");
    let women = document.getElementById("women");
    let clothes = document.getElementById("clothes");
    let clothemenu = document.getElementById("ClotheMain");
    let catalogfilterclothe = document.getElementById("CatalogFilterclothe");
    let catalogfilter = document.getElementById("CatalogFilter");

    function disableScroll() {
        document.body.style.overflow = "hidden";
    }

    function enableScroll() {
        document.body.style.overflow = "auto";
    }
    let tmp = 0;
    function tmp1() {
        switch (tmp) {
            case 1: megamenu.style.display = "flex";
            case 2: CatalogFilter.style.display = "flex";
            default: catalogfilter.style.display = "none";
        }
    }
    loginButton.addEventListener("click", function () {
        signUpModal.style.display = "flex";
        disableScroll();
        megamenu.style.display = "none";
    });

    closeButton1.addEventListener("click", function () {
        signUpModal.style.display = "none";
        tmp1();
    });

    registerButton.addEventListener("click", function () {
        signInModal.style.display = "flex";
        disableScroll();
        megamenu.style.display = "none";
    });

    closeButton2.addEventListener("click", function () {
        signInModal.style.display = "none";
        tmp1();
    });

    women.addEventListener("click", function () {
        if (megamenu.style.display === "none") {
            megamenu.style.display = "flex";
            disableScroll();
            tmp = 1;
            clothemenu.style.display = "";
            catalogfilterclothe.style.display = "";
            women.style.color = "#17696A";
            catalogfilter.style.display = "none";

        } else {
            megamenu.style.display = "none";
            women.style.color = "#424551";
            enableScroll();
            tmp = 0;
        }
    });

    clothes.addEventListener("click", function () {
        megamenu.style.display = "none";
        enableScroll();
        clothemenu.style.display = "none";
        catalogfilterclothe.style.display = "none";
        catalogfilter.style.display = "flex";
        tmp = 2;
    });
    document.getElementById("openwomen").addEventListener("click", function () {
        catalogfilter.style.display = "none";
        clothemenu.style.display = "";
        catalogfilterclothe.style.display = "";
        disableScroll();
        megamenu.style.display = "flex";
        tmp = 1;
    })
    document.getElementById("openmenu").addEventListener("click", function () {
        tmp = 0;
        catalogfilter.style.display = "none";
        clothemenu.style.display = "";
        catalogfilterclothe.style.display = "";
        women.style.color = "#424551"
    });
});
