// Dark Mode
chrome.storage.sync.get('darkMode', function (items) {

    if (items['darkMode']) {

        var style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = chrome.runtime.getURL("darkModes.css");;
        (document.head || document.documentElement).appendChild(style);
    }
});

if (window.location.pathname.split('/')[1] == "resource") {
    var navBar;
    try {
        navBar = document.querySelector(".page-actions").innerHTML = "";
    } catch (error) {

    }

    if (navBar != undefined) {
        //div qui reprend tout les boutons
        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "wrapper");

        // Bouton pour telecharger
        var dwrapper = document.createElement("div");
        dwrapper.setAttribute("class", "icon download");
        var dtooltip = document.createElement("div");
        dtooltip.setAttribute("class", "tooltip");
        dtooltip.textContent = "Télécharger";
        var dspan = document.createElement("span");


        ///methode de pour telecharger
        var adresse = '/clarolinepdfplayerbundle/pdf/' + window.location.pathname.split('/')[4];
        var download = document.createElement("a");
        download.innerHTML = '<svg  viewBox="0 0 510 510" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="179.548" x2="179.548" y1="16.564" y2="79.544"><stop offset="0" stop-color="#ff9100"/><stop offset="1" stop-color="#e63950"/></linearGradient><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="134.718" x2="134.718" y1="16.564" y2="79.544"><stop offset="0" stop-color="#fdbf00"/><stop offset="1" stop-color="#ff9100"/></linearGradient><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="58.115" x2="356.085" y1="35.005" y2="332.976"><stop offset="0" stop-color="#ffda2d"/><stop offset="1" stop-color="#fdbf00"/></linearGradient><linearGradient id="lg1"><stop offset="0" stop-color="#76e2f8"/><stop offset="1" stop-color="#48b2e3"/></linearGradient><linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="378.706" x2="393.086" xlink:href="#lg1" y1="109.598" y2="120.555"/><linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="418.837" x2="433.217" xlink:href="#lg1" y1="109.598" y2="120.555"/><linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="458.967" x2="473.348" xlink:href="#lg1" y1="109.598" y2="120.555"/><linearGradient id="lg2"><stop offset="0" stop-color="#ff9100" stop-opacity="0"/><stop offset="1" stop-color="#ff9100"/></linearGradient><linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="255" x2="255" xlink:href="#lg2" y1="342.315" y2="425.163"/><linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="434.826" x2="241.01" xlink:href="#lg2" y1="406.791" y2="281.556"/><linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="209.289" x2="458.848" y1="268.711" y2="518.271"><stop offset="0" stop-color="#b9dd39"/><stop offset="1" stop-color="#0b799d"/></linearGradient><linearGradient id="SVGID_10_" gradientUnits="userSpaceOnUse" x1="247.812" x2="-18.188" y1="347.781" y2="575.781"><stop offset="0" stop-color="#0b799d" stop-opacity="0"/><stop offset=".3645" stop-color="#096380" stop-opacity=".365"/><stop offset=".76" stop-color="#084f67" stop-opacity=".76"/><stop offset="1" stop-color="#07485e"/></linearGradient><g><g><path d="m266.783 79.505h-174.47v-49.69c0-16.467 13.348-29.815 29.814-29.815h114.841c16.466 0 29.815 13.348 29.815 29.815z" fill="url(#SVGID_1_)"/><path d="m221.953 79.505h-174.471v-49.69c0-16.467 13.349-29.815 29.815-29.815h114.841c16.466 0 29.815 13.348 29.815 29.815z" fill="url(#SVGID_2_)"/><path d="m174.47 56.592v-26.777c0-16.467-13.348-29.815-29.814-29.815h-114.841c-16.467 0-29.815 13.348-29.815 29.815v321.925c0 23.458 19.017 42.475 42.475 42.475h425.05c23.458 0 42.475-19.017 42.475-42.475v-239.698c0-23.458-19.017-42.475-42.475-42.475h-280.08c-7.166 0-12.975-5.809-12.975-12.975z" fill="url(#SVGID_3_)"/><g><path d="m387.317 128h-10.229c-5.867 0-10.623-4.756-10.623-10.623v-10.229c0-5.867 4.756-10.623 10.623-10.623h10.229c5.867 0 10.623 4.756 10.623 10.623v10.229c0 5.867-4.756 10.623-10.623 10.623z" fill="url(#SVGID_4_)"/><path d="m427.448 128h-10.229c-5.867 0-10.623-4.756-10.623-10.623v-10.229c0-5.867 4.756-10.623 10.623-10.623h10.229c5.867 0 10.623 4.756 10.623 10.623v10.229c0 5.867-4.756 10.623-10.623 10.623z" fill="url(#SVGID_5_)"/><path d="m467.579 128h-10.229c-5.867 0-10.623-4.756-10.623-10.623v-10.229c0-5.867 4.756-10.623 10.623-10.623h10.229c5.867 0 10.623 4.756 10.623 10.623v10.229c0 5.867-4.756 10.623-10.623 10.623z" fill="url(#SVGID_6_)"/></g><path d="m0 304.771v46.969c0 23.458 19.017 42.475 42.475 42.475h425.05c23.458 0 42.475-19.017 42.475-42.475v-46.969z" fill="url(#SVGID_7_)"/></g><path d="m509.153 360.208-186.638-186.639c-4.586-6.357-12.052-7.498-20.49-7.498h-88.095c-13.947 0-22.252 8.305-22.252 22.252v98.309h-38.598c-25.104 0-37.39 24.632-24.051 45.899l35.685 61.682h302.811c20.558.001 37.703-14.605 41.628-34.005z" fill="url(#SVGID_8_)"/><g><path d="m356.92 283.631h-29.641v-95.307c0-13.947-11.307-25.254-25.254-25.254h-88.095c-13.947 0-25.254 11.307-25.254 25.254v95.307h-35.596c-25.104 0-40.392 27.634-27.053 48.901l101.92 162.502c12.516 19.955 41.59 19.955 54.106 0l101.92-162.502c13.339-21.268-1.949-48.901-27.053-48.901z" fill="url(#SVGID_9_)"/><path d="m356.92 283.631h-29.641v-95.307c0-13.947-11.307-25.254-25.254-25.254h-47.025v346.93c10.398 0 20.795-4.989 27.053-14.966l101.92-162.502c13.339-21.268-1.949-48.901-27.053-48.901z" fill="url(#SVGID_10_)"/></g></g></svg>';
        download.setAttribute("class", "claco-btn");
        download.setAttribute("href", adresse);

        var nomdufichier = document.querySelector(".page-header h1").innerHTML;


        download.setAttribute("download", nomdufichier);

        dspan.appendChild(download);
        dwrapper.appendChild(dtooltip);
        dwrapper.appendChild(dspan);
        wrapper.appendChild(dwrapper);

        ////////// Bouton pour voir
        var vwrapper = document.createElement("div");
        vwrapper.setAttribute("class", "icon view");
        var vtooltip = document.createElement("div");
        vtooltip.setAttribute("class", "tooltip");
        vtooltip.textContent = "Voir";
        var vspan = document.createElement("span");
        var view = document.createElement("button");
        view.setAttribute("class", "claco-btn");
        view.innerHTML = '<svg viewBox="-30 0 640 640" xmlns="http://www.w3.org/2000/svg"><path d="m300.585938 101.449219-15.308594-101.449219h-224.601563c-33.820312 0-60.675781 27.554688-60.675781 61.371094v424.71875c0 33.816406 26.855469 60.8125 60.675781 60.8125h213.054688l153.492187-232.402344v-165.734375zm0 0" fill="#00acea"/><path d="m285.277344.140625 141.527344 148.625h-94.210938c-26.164062 0-47.316406-21.152344-47.316406-47.316406zm0 0" fill="#00efd1"/><g fill="#083863"><path d="m293.769531 332.59375c0-7.652344-6.265625-13.917969-13.917969-13.917969h-181.324218c-7.652344 0-13.917969 6.265625-13.917969 13.917969 0 7.65625 6.265625 13.914062 13.917969 13.914062h181.324218c7.796876 0 13.917969-6.257812 13.917969-13.914062zm0 0"/><path d="m98.527344 276.929688h140.96875c7.652344 0 13.917968-6.261719 13.917968-13.917969 0-7.652344-6.265624-13.914063-13.917968-13.914063h-140.96875c-7.652344 0-13.917969 6.261719-13.917969 13.914063 0 7.65625 6.265625 13.917969 13.917969 13.917969zm0 0"/><path d="m234.066406 389.648438h-135.539062c-7.652344 0-13.917969 6.265624-13.917969 13.914062 0 7.65625 6.265625 13.917969 13.917969 13.917969h135.539062c7.65625 0 13.917969-6.261719 13.917969-13.917969 0-7.648438-6.261719-13.914062-13.917969-13.914062zm0 0"/></g><path d="m426.804688 286.8125c86.28125 12.101562 152.65625 86.136719 152.65625 175.753906 0 97.96875-79.457032 177.433594-177.425782 177.433594-67.351562 0-126.078125-37.574219-156-92.960938-13.636718-25.1875-21.429687-53.992187-21.429687-84.609374 0-97.96875 79.460937-177.429688 177.429687-177.429688 8.351563.140625 16.558594.699219 24.769532 1.8125zm0 0" fill="#fedb41"/><path d="m461.734375 510.160156c12.941406-17.113281 20.039063-37.851562 20.039063-59.558594 0-54.6875-44.53125-99.082031-99.363282-99.082031-54.828125 0-99.359375 44.394531-99.359375 99.082031 0 54.691407 44.53125 99.085938 99.359375 99.085938 21.851563 0 42.585938-6.957031 59.5625-19.765625l40.914063 40.632813c2.78125 2.648437 6.261719 4.039062 9.882812 4.039062 3.617188 0 7.097657-1.390625 9.882813-4.039062 5.421875-5.421876 5.421875-14.191407 0-19.617188zm-150.851563-59.558594c0-39.246093 32.148438-71.25 71.527344-71.25 39.386719 0 71.53125 32.003907 71.53125 71.25 0 19.066407-7.515625 37.015626-21.011718 50.375-13.5 13.359376-31.449219 20.875-50.519532 20.875-39.519531 0-71.527344-32.007812-71.527344-71.25zm0 0" fill="#083863"/></svg>';


        vspan.appendChild(view);
        vwrapper.appendChild(vtooltip);
        vwrapper.appendChild(vspan);
        wrapper.appendChild(vwrapper);

        // mettre sur la page claroline
        document.querySelector(".page-actions").appendChild(wrapper);




        // check file option
        chrome.storage.sync.get('customFileName', function (items) {

            if (items['customFileName']) {
                var fileName = document.createElement("input");
                fileName.setAttribute("type", "text");
                fileName.setAttribute("class", "claco-input");
                fileName.setAttribute("placeholder", "nomdufichier");
                wrapper.insertAdjacentElement("afterbegin", fileName);
                fileName.addEventListener("change", function () {

                    download.setAttribute("download", fileName.value + ".pdf");

                })
            }
        });




        // Methode pour voir
        view.addEventListener("click", function () {
            location.href = '/clarolinepdfplayerbundle/pdf/' + window.location.pathname.split('/')[4];
        });

        /// bouton pour tourner pdf aigulle d'une montre

        var turn = document.createElement("button");
        turn.innerHTML = "&orarr;";
        turn.setAttribute("class", "pdf-btn");
        document.querySelector(".pdf-zoom").insertAdjacentElement("afterbegin", turn);

        turn.addEventListener("click", function () {

            var pdf = document.querySelector("canvas#the-canvas");


            if (pdf.getAttribute("data-rad") == null) {
                pdf.setAttribute("data-rad", 0);
            }
            var valueTransform = parseInt(pdf.getAttribute("data-rad"));

            valueTransform = valueTransform * 1 + 90 * 1;
            pdf.setAttribute("data-rad", valueTransform);
            pdf.style.transform = "rotate(" + valueTransform + "deg)";
        });
        /// bouton pour tourner le pdf dans le sens contraire des aigulles d'une montre
        var turnInv = document.createElement("button");
        turnInv.innerHTML = "&olarr;";
        turnInv.setAttribute("class", "pdf-btn");
        document.querySelector(".pdf-zoom").insertAdjacentElement("afterbegin", turnInv);

        turnInv.addEventListener("click", function () {

            var pdf = document.querySelector("canvas#the-canvas");


            if (pdf.getAttribute("data-rad") == null) {
                pdf.setAttribute("data-rad", 0);
            }
            var valueTransform = parseInt(pdf.getAttribute("data-rad"));

            valueTransform = valueTransform * 1 - 90 * 1;
            pdf.setAttribute("data-rad", valueTransform);
            pdf.style.transform = "rotate(" + valueTransform + "deg)";
        });

    }

}

