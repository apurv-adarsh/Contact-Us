function submitHandle() {

    let obj = {

        fullName: document.getElementById("fullname").value,
        emailID: document.getElementById("emailid").value,
        cno: document.getElementById("cno").value,
        issue: document.getElementById("issue").value,
        subject: document.getElementById("subject").value,

    }

    let jsonObj = JSON.stringify(obj);
    console.log(jsonObj);

    // document.getElementById("myform").reset(); 

    alert("Form Submitted Successfully, (Check Developer Console (F12) Before Clicking -OK-)");

}


function resetHandle() {
    document.getElementById("myform").reset()
}


function keepInTouch() {
    let keepInTouchObj = {
        userEmail: document.getElementById("keepInTouchEmail").value
    }

    let jsonKeepInTouchObj = JSON.stringify(keepInTouchObj);
    console.log(jsonKeepInTouchObj);

    alert("Subscribed Successfully (Check Developer Console (F12) Before Clicking -OK-)");
    // document.getElementById("keepInTouch").reset()
}


function appEmailShare() {
    let appObj = {
        appEmailId: document.getElementById("verifyEmail").value,
        appPhoneNo: document.getElementById("verifyNumber").value,
    }

    let jsonEmailObj = JSON.stringify(appObj);
    console.log(jsonEmailObj);

    alert("App Link Sent Successfully (Check Developer Console (F12) Before Clicking -OK-)");

    // document.getElementById("appLinkForm").reset()

}


function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}


function getValue() {

    if (document.getElementById("chkYes").checked) {
        document.getElementById("verify").style.display = "block";
        document.getElementById("verify1").style.display = "none";

    }
    else if (document.getElementById("chkNo").checked) {
        document.getElementById("verify").style.display = "none";
        document.getElementById("verify1").style.display = "block";
    }


}


function initMap() {

    var whitefield = {
        info:
            '<strong>Book Basement HQ</strong><br>\
        Off, ITPL Main Rd, Whitefield,<br> Bengaluru, Karnataka 560066<br>\
          <a href="https://goo.gl/maps/FyDbbAJRhXgKzcZFA" target="_blank">Get Directions</a>',
        lat: 12.976750,
        long: 77.575279,
    }

    var eleccity = {
        info:
            '<strong>Book Basement Sales</strong><br>\
        4, Pocket 19, Sector 7 Dwarka, <br>Rohini, New Delhi, Delhi 110085<br>\
          <a href="https://goo.gl/maps/c7RwAFvnh2TuUog76" target="_blank">Get Directions</a>',
        lat: 28.581180,
        long: 77.050890,
    }

    var usa = {
        info:
            '<strong>Book Basement LLC</strong><br>\r\
        30 Knightsbridge Rd #525, Piscataway<br>  NJ 08854, United States<br>\
          <a href="https://goo.gl/maps/X5jxZVzxM25c3Ag68" target="_blank">Get Directions</a>',
        lat: 40.546410,
        long: -74.482470,
    }

    var germany = {
        info:
            '<strong>Book Basement Germany</strong><br>\r\
          Neue Mainzer Str. 75, 60311 Frankfurt am Main<br>  Germany 60306<br>\
            <a href="https://goo.gl/maps/X5jxZVzxM25c3Ag68" target="_blank">Get Directions</a>',
        lat: 50.11371,
        long: 8.67182,
    }

    var singapore = {
        info:
            '<strong>Book Basement Singapore</strong><br>\r\
          140 Paya Lebar Road, #07-20 Az@Paya<br>  Singapore – 409015<br>\
            <a href="https://goo.gl/maps/THzhBSHeetHrzvzV7" target="_blank">Get Directions</a>',
        lat: 1.327020,
        long: 103.890320,
    }

    var china = {
        info:
            '<strong>Book Basement China</strong><br>\r\
          Dongdan, Beijing, Dongcheng<br>  China - 100027<br>\
            <a href="https://goo.gl/maps/6WHdnKCC9qbmuqA98" target="_blank">Get Directions</a>',
        lat: 39.930840,
        long: 116.386340,
    }

    var qatar = {
        info:
            '<strong>Book Basement Qatar</strong><br>\r\
          Qatar Free Zone Authority, Ras Bufontas<br> Free Zone Site office <br> Doha – Qatar<br>\
            <a href="https://goo.gl/maps/jpsG5BMCyjKKyz6e8" target="_blank">Get Directions</a>',
        lat: 29.611750,
        long: 35.023700,
    }

    var sarjah = {
        info:
            '<strong>Book Basement Sarjah</strong><br>\r\
          Sharjah Media City, Sharjah, UAE<br>\
            <a href="https://g.page/shamssmc?share" target="_blank">Get Directions</a>',
        lat: 25.345130,
        long: 55.386190,
    }

    var spain = {
        info:
            '<strong>Book Basement Spain</strong><br>\r\
          Calle de Campomanes, 13, 28013<br> Madrid, Spain<br>\
            <a href="https://goo.gl/maps/WLrowfqxRri4HruK7" target="_blank">Get Directions</a>',
        lat: 40.418940,
        long: -3.709340,
    }

    var brazil = {
        info:
            '<strong>Book Basement Brazil</strong><br>\r\
          Office Opening Soon<br> Brasilia, Brazil<br>\
            <a href="https://goo.gl/maps/UqpwykrjxrjREpEw7" target="_blank">Get Directions</a>',
        lat: -15.826691,
        long: -47.921822,
    }

    var colombia = {
        info:
            '<strong>Book Basement Colombia</strong><br>\r\
          Office Opening Soon<br> Bogota, Colombia<br>\
            <a href="https://goo.gl/maps/e2Rqy7PWuwqh9RyU7" target="_blank">Get Directions</a>',
        lat: 4.492460,
        long: -74.069765,
    }


    var locations = [
        [whitefield.info, whitefield.lat, whitefield.long, 0],
        [eleccity.info, eleccity.lat, eleccity.long, 1],
        [usa.info, usa.lat, usa.long, 2],
        [germany.info, germany.lat, germany.long, 3],
        [singapore.info, singapore.lat, singapore.long, 4],
        [china.info, china.lat, china.long, 5],
        [qatar.info, qatar.lat, qatar.long, 6],
        [sarjah.info, sarjah.lat, sarjah.long, 7],
        [spain.info, spain.lat, spain.long, 8],
        [brazil.info, brazil.lat, brazil.long, 9],
        [colombia.info, colombia.lat, colombia.long, 10],
    ]


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: new google.maps.LatLng(23.939404, 9.341527),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    })



    var infowindow = new google.maps.InfoWindow({})

    var marker, i

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3], locations[i][4], locations[i][5], locations[i][6], locations[i][7], locations[i][8], locations[i][9], locations[i][10]),
            map: map,
        })

        google.maps.event.addListener(
            marker,
            'click',
            (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0])
                    infowindow.open(map, marker)
                }
            })(marker, i)
        )

    }
    marker.addListener('click', toggleBounce);

}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}



function verifyCaptcha() {

    let chkCaptcha = document.getElementById("human");
    let captcha = document.getElementById("captcha");
    let captchacode = document.getElementById("captchacode");


    if (chkCaptcha.checked == true) {
        captcha.style.display = "block";
    }

    else {
        captcha.style.display = "none";
    }

    if (chkCaptcha.checked == true) {
        captchacode.style.display = "block";
    }
    else {
        captchacode.style.display = "none";
    }

}


function verifySubmit() {
    let a = document.getElementById("captcha");
    let b = document.getElementById("captchacode");

    if (a == b) {

        document.getElementById("mybtn").disabled = false;
    } else {

        document.getElementById("mybtn").disabled = true;
    }


}
