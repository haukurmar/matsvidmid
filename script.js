
function load_matsvidmid(matsvidmid)
{
	console.log(matsvidmid);
}

// Inject the JSONp "script" from the location defined in the URL.
var charURL = decodeURIComponent(getVars()["matsvidmid_url"]);
$.ajax({
    url: charURL,
    dataType: 'script',
    timeout: 5000,
    success: function () {
        load_matsvidmid(matsvidmid);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert("Failed loading data - " + textStatus + " - " + errorThrown);
    }
});