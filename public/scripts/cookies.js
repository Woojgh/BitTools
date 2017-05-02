var cookies = [];

// Parses the cookies into the array.
function parseCookies () {

    // Get a string of all cookies.
    var all = document.cookie;

    // If the string is empty, simply return.
    if (all == "")
    {
        return;
    }

    // Split the string into individual cookie strings.
    var list = all.split('; ');

    // For each cookie string,
    for (var i = 0; i < list.length; i++)
    {
        // Split the string into its own array.
        var cookie = list[i].split('=');

        // Store the array as an object.
        cookies[i] = { name: cookie[0], val: cookie[1] };
    }
}

// Gets a cookie by name, returning the default if no cookie is found.
// Arg | name: The name of the cookie to retrieve.
// Arg | defaultVal: The value to return as default if no cookie is found.
function getCookie (name, defaultVal) {

    // Iterate through each cookie.
    for (var i = 0; i < cookies.length; i++)
    {
        // If the current iteration's name matches,
        if (cookies[i].name == name)
        {
            // Return the value.
            return cookies[i].val;
        }
    }

    return defaultVal;
}

// Sets a new or existing cookie based on the given object.
// Arg | cookie: The cookie data to set.
function setCookie (cookie) {

    // Copy for modification.
    var toWrite = cookie;

    // Set the expiry to one month if it isn't already set.
    if (!toWrite.expiry)
    {
        toWrite.expiry = 1;
    }

    // Set the new expiry date.
    var expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth()+toWrite.expiry);

    // Iterate through each cookie.
    for (var i = 0; i < cookies.length; i++)
    {
        // If the current iteration's name matches,
        if (cookies[i].name == toWrite.name)
        {
            // Set the new value.
            cookies[i].val = toWrite.newValue.toString();

            // Set the cookie based on the given name, value, expiry, and whether or not it should be secure.
            document.cookie = toWrite.name+"="+toWrite.newValue.toString()+"; expires="+expiryDate.toUTCString()+"; path="+(toWrite.path ? toWrite.path : "/")+(toWrite.secure ? "; secure" : "");
            // Return to break iteration.
            return;
        }
    }

    // At this point, the cookie wasn't found.

    // Create a new cookie.
    var newCookie = { name: name, val: toWrite.newValue.toString() };

    // Push it to the current array.
    cookies.push(newCookie);

    // Create the cookie based on the given name, value, expiry, and whether or not it should be secure.
    document.cookie = toWrite.name+"="+toWrite.newValue.toString()+"; expires="+expiryDate.toUTCString()+"; path="+(toWrite.path ? toWrite.path : "/")+(toWrite.secure ? "; secure" : "");
}

// Deletes the specified cookie from the array and the browser.
function deleteCookie(name, path) {

    // Iterate through each cookie.
    for (var i = 0; i < cookies.length; i++)
    {
        // If the current iteration's name matches,
        if (cookies[i].name == name)
        {
            // Splice the cookie out.
            cookies.splice(i, 1);
            break;
        }
    }

    // Write an empty expired cookie to the browser to cause it to expire.
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path="+(path ? path : "/");
}

// Clears all cookies from the array and the browser.
function clearAllCookies() {

    // Get a temporary array of the cookies we can safely iterate through.
    var count = cookies.length;

    // Iterate through the temporary array.
    for (var i = 0; i < count; i++)
    {
        // Delete the current iteration.
        deleteCookie(cookies[0].name);
    }
}
