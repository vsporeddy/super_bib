/*chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    alert("message received");
});
*/



var doc; /*DANIEL*/
var urla;
var set = 1;/*DANIEL*/
chrome.tabs.getSelected(null, function(tab) {

	doc = tab.title;/*DANIEL*/
	urla = tab.url;

    if ((tab.url).indexOf("books.google") != -1) {
        document.getElementById('sourceType').innerHTML = "Book";
		set = 0;
		document.getElementById('cred').innerHTML = "Good";
    }
    
    else if ((tab.url).indexOf("amazon") != -1) {
        document.getElementById('sourceType').innerHTML = "Book";
		set = 0;
		document.getElementById('cred').innerHTML = "Good";
    }
    
    else if ((tab.url).indexOf(".edu") != -1) {
        document.getElementById('sourceType').innerHTML = "Scholarly article";
		document.getElementById('cred').innerHTML = "Good";
    }
    
    else if ((tab.url).indexOf(".gov") != -1) {
        document.getElementById('sourceType').innerHTML = "Government article";
		document.getElementById('cred').innerHTML = "Good";
    }
     else if ((tab.url).indexOf("wikipedia") != -1) {
        document.getElementById('sourceType').innerHTML = "Online Encyclopedia";
		document.getElementById('cred').innerHTML = "Low";
    }
    else if ((tab.url).indexOf(".com") != -1) {
        document.getElementById('sourceType').innerHTML = "Commercial article";
		document.getElementById('cred').innerHTML = "Average";
    }
	 else if ((tab.url).indexOf(".org") != -1) {
        document.getElementById('sourceType').innerHTML = "Educational article";
		document.getElementById('cred').innerHTML = "Average";
    }
	
    
    else {document.getElementById('sourceType').innerHTML = "Web article";
	document.getElementById('cred').innerHTML = "Average"}
    
    

/*DANIEL, everything below, doesn't matter where code is placed*/
//URL

//Today's Date
var today = new Date();
var day = today.getDay();
var month = today.getMonth() +1;
if(month ==1)
{
month = 'Jan.';
}
if(month ==2)
{
month = 'Feb.';
}
if(month ==3)
{
month = 'Mar.';
}
if(month ==4)
{
month = 'Apr.';
}
if(month ==5)
{
month = 'May';
}
if(month ==6)
{
month = 'June';
}
if(month ==7)
{
month = 'Jul.';
}
if(month ==8)
{
month = 'Aug.';
}
if(month ==9)
{
month = 'Sept.';
}
if(month ==10)
{
month = 'Oct.';
}
if(month ==11)
{
month = 'Nov.';
}
if(month ==12)
{
month = 'Dec.';
}
localStorage.setItem("year",year);
var year = today.getFullYear();
today = month+'/'+day+'/'+year;
var citation;
if(set == 1)
{
citation = doc + " N.p.,n.d. Web. " + day + " " + month + " " + year + " "+ "&lt;" +  urla + "&gt; "; 
}
else
{
citation = doc + " N.p.,n.d. " + day + " " + month + " " + year + "Print. " + "&lt;" + urla + "&gt; "; 
}
document.getElementById('cite').innerHTML = citation;

});








