function getVars() {
    var vars = [], hash;
    var q = document.URL.split('?')[1];
    if (q != undefined) {
        q = q.split('&');
        for (var i = 0; i < q.length; i++) {
            hash = q[i].split('=');
            vars.push(hash[1]);
            vars[hash[0]] = hash[1];
        }
    }
    return vars;
}

function display_matsvidmid(matsvidmid)
{
	$.each(matsvidmid, function (item)
	{
		$("#matsvidmid_list").append('<li data-item="' + item + '"><span class="glyphicon glyphicon-plus">' + item + '</li>');
	});
}

function load_matsvidmid(matsvidmid)
{
	display_matsvidmid(matsvidmid);
}

// Inject the JSONp "script" from the location defined in the URL.
var charURL = decodeURIComponent(getVars()["matsvidmid_url"]);
$.ajax({
    url: charURL,
    dataType: 'script',
    timeout: 5000,
    success: function () {
        load_matsvidmid(matsvidmid_json);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log("Failed loading data - " + textStatus + " - " + errorThrown);
    }
});