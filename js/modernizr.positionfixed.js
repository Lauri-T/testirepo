/*
* Detect support for position:fixed
* ================================================================================
* Support for the CSS position:fixed is really hard or even impossible to detect.
* See: https://github.com/Modernizr/Modernizr/wiki/Undetectables
*
* Therefore, we use the dreaded browser sniffing method to do this. The idea is
* that the use of position:fixed is only allowed on a few browsers that are known
* to support it properly and in a way that works for this particular project.
*
* Since position:fixed is often used in critical elements such as navigation, it
* is extremely important to only use it when it works properly and does not break
* the whole site.
*/

Modernizr.addTest('positionfixed', function() {
	// Courtesy of A Beatiful Site
	// See: http://www.abeautifulsite.net/blog/2011/11/detecting-mobile-devices-with-javascript/
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	// If Desktop OS in use, assume position fixed is supported regardless of browser.
	// TODO: Make desktop browser detection more comprehensive and reliable.
	if (!isMobile.any()) {
		return true;
	}


	// Do a bit more precise testing for iOS and Android.
	//
	// TODO: Currently, all Windows Phone OS's get flagged as not supporting
	// position:fixed. However, Windows Phone 8+ does support position:fixed
	// (with a few quirks).

	var ua = navigator.userAgent;
	
	// iOS
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		var parsedV = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
		if (parsedV[0] >= 5) {
			return true;
		}
	}
	
	// Android
	if (ua.indexOf("Android") >= 0 ) {
		var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
		if (androidversion >= 4) {
			return true;
		}
	}

	return false;

});

