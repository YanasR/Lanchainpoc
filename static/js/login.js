const URL = `http://localhost:6006/`;

function sessionCheck() {
    $("body").removeClass('displayBlock').addClass('displayNone');
    let sessionData = sessionStorage.getItem('userDetail');
    var userDetail = JSON.parse(sessionData);
    if(!!userDetail && userDetail['Authenticated'] == "true") {
        location.href = URL + 'acharya';
    } else {
        $("body").removeClass('displayNone').addClass('displayBlock');
    }
}

function login() {
    // POST request using fetch() 
    let auhthURL = 'http://kicdt19.kcdc.att.com:8899/api/authenticate';
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("password").value;
    $("#errorAlert").removeClass('displayBlock').addClass('displayNone');
    $("#errorAlert .invalidEmail").removeClass('displayBlock').addClass('displayNone');
    sessionStorage.clear();


    if (validation(userName)) {
        let body = {
            "username": userName,
            "password": pwd
        }

        fetch(auhthURL, {

            // Adding method type 
            method: "POST",

            // Adding body or contents to send 
            body: JSON.stringify(body),

            // Adding headers to the request 
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => {

                if (response.ok) {
                    response.json().then(json => {
                        let isAuthenticated = json['Authenticated'];

                        if (isAuthenticated == 'true') {
                            // resetForm();
                            $("body").removeClass('displayBlock').addClass('displayNone');
                            $("#errorAlert").removeClass('displayBlock').addClass('displayNone');
                            sessionStorage.setItem('userDetail', JSON.stringify(json));
                            location.href = URL + 'acharya';
                        } else {
                            $("#errorAlert").removeClass('displayNone').addClass('displayBlock');
                        }
                    });
                }
            })
    } else {
        $("#errorAlert").removeClass('displayNone').addClass('displayBlock');
        $("#errorAlert .invalidEmail").removeClass('displayNone').addClass('displayBlock');
    }
}

function resetForm() {
    $('#loginForm')[0].reset()
}

function validation(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email) == false) {
        return false;
    }

    return true;
}