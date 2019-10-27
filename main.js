const username = getCookie("isLoggedIn")
if (username){
    document.getElementById('username').innerHTML = username;
    var loggedinDiv = document.getElementById("loggedinDivId");
    loggedinDiv.classList.remove("hidden");
    var loginDivId = document.getElementById("loginDivId");
    loginDivId.classList.add("hidden");
} else {
    var loggedinDiv = document.getElementById("loggedinDivId");
    loggedinDiv.classList.add("hidden");
    var loginDiv = document.getElementById("loginDivId");
    loginDiv.classList.remove("hidden");
}

function logout() {
    eraseCookie("isLoggedIn")
    location.reload();
}

/** 
 * Don't worry about understanding this. It's just a Function to Get a Cookie by name.
 * @return {String} the value of the cookie or null if cookie doesn't exist
*/
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }

  function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}