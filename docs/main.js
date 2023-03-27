//64or32.com | MIT License
!function () { var n; n = function () { function n(n) { return window.navigator.userAgent.indexOf(n) > -1 } var a = window.navigator.platform, t = ""; t = n("x86_64") || n("x86-64") || n("Win64") || n("x64;") || n("amd64") || n("AMD64") || n("WOW64") || n("x64_64") || "MacIntel" === a || "Linux x86_64" === a ? "arch64" : "Linux armv7l" === a || "iPad" === a || "iPhone" === a || "Android" === a || "iPod" === a || "BlackBerry" === a ? "mobile" : "Linux i686" === a ? "unknown" : "arch32", window.jscd.x64 = "arch64" === t }, "loading" != document.readyState ? n() : document.addEventListener ? document.addEventListener("DOMContentLoaded", n) : document.attachEvent("onreadystatechange", function () { "loading" != document.readyState && n() }) }();

/* JavaScript Client Detection (C) viazenetti GmbH (Christian Ludwig) */
!function (s) { var i, n, e, o = "-", r = ""; screen.width && (r += "" + (width = screen.width ? screen.width : "") + " x " + (height = screen.height ? screen.height : "")); var d = navigator.appVersion, a = navigator.userAgent, t = navigator.appName, w = "" + parseFloat(navigator.appVersion), O = parseInt(navigator.appVersion, 10); -1 != (n = a.indexOf("Opera")) && (t = "Opera", w = a.substring(n + 6), -1 != (n = a.indexOf("Version")) && (w = a.substring(n + 8))), -1 != (n = a.indexOf("OPR")) ? (t = "Opera", w = a.substring(n + 4)) : -1 != (n = a.indexOf("Edge")) ? (t = "Microsoft Legacy Edge", w = a.substring(n + 5)) : -1 != (n = a.indexOf("Edg")) ? (t = "Microsoft Edge", w = a.substring(n + 4)) : -1 != (n = a.indexOf("MSIE")) ? (t = "Microsoft Internet Explorer", w = a.substring(n + 5)) : -1 != (n = a.indexOf("Chrome")) ? (t = "Chrome", w = a.substring(n + 7)) : -1 != (n = a.indexOf("Safari")) ? (t = "Safari", w = a.substring(n + 7), -1 != (n = a.indexOf("Version")) && (w = a.substring(n + 8))) : -1 != (n = a.indexOf("Firefox")) ? (t = "Firefox", w = a.substring(n + 8)) : -1 != a.indexOf("Trident/") ? (t = "Microsoft Internet Explorer", w = a.substring(a.indexOf("rv:") + 3)) : (i = a.lastIndexOf(" ") + 1) < (n = a.lastIndexOf("/")) && (t = a.substring(i, n), w = a.substring(n + 1), t.toLowerCase() == t.toUpperCase() && (t = navigator.appName)), -1 != (e = w.indexOf(";")) && (w = w.substring(0, e)), -1 != (e = w.indexOf(" ")) && (w = w.substring(0, e)), -1 != (e = w.indexOf(")")) && (w = w.substring(0, e)), isNaN(O = parseInt("" + w, 10)) && (w = "" + parseFloat(navigator.appVersion), O = parseInt(navigator.appVersion, 10)), /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(d); var W = !!navigator.cookieEnabled; void 0 !== navigator.cookieEnabled || W || (document.cookie = "testcookie", W = -1 != document.cookie.indexOf("testcookie")); var c = o, _ = [{ s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ }, { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ }, { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ }, { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ }, { s: "Windows Vista", r: /Windows NT 6.0/ }, { s: "Windows Server 2003", r: /Windows NT 5.2/ }, { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ }, { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ }, { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ }, { s: "Windows 98", r: /(Windows 98|Win98)/ }, { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ }, { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ }, { s: "Windows CE", r: /Windows CE/ }, { s: "Windows 3.11", r: /Win16/ }, { s: "Android", r: /Android/ }, { s: "Open BSD", r: /OpenBSD/ }, { s: "Sun OS", r: /SunOS/ }, { s: "Chrome OS", r: /CrOS/ }, { s: "Linux", r: /(Linux|X11(?!.*CrOS))/ }, { s: "iOS", r: /(iPhone|iPad|iPod)/ }, { s: "Mac OS X", r: /Mac OS X/ }, { s: "Mac OS", r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ }, { s: "QNX", r: /QNX/ }, { s: "UNIX", r: /UNIX/ }, { s: "BeOS", r: /BeOS/ }, { s: "OS/2", r: /OS\/2/ }, { s: "Search Bot", r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }]; for (var S in _) { var f = _[S]; if (f.r.test(a)) { c = f.s; break } } var x = o; switch (/Windows/.test(c) && (x = /Windows (.*)/.exec(c)[1], c = "Windows"), c) { case "Mac OS": case "Mac OS X": case "Android": x = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(a)[1]; break; case "iOS": x = (x = /OS (\d+)_(\d+)_?(\d+)?/.exec(d))[1] + "." + x[2] + "." + (0 | x[3]) }s.jscd = { os: c, osVersion: x } }(this);

function oops() { if (window.latestVersion === undefined) window.latestVersion = '6.4.0'; }

fetch('https://api.github.com/repos/AceSilentKill/PC7-Client/releases/latest')
    .then(res => res.json())
    .then(res => { window.latestVersion = res.name })
    .catch((e) => { console.log(e); console.log('Unable to fetch latest version, defaulting to 6.4.0...'); })
    .finally(() => { oops(); });

window.downloadClient = function () {
    const log = document.getElementById('log');
    log.parentElement.parentElement.classList.remove('hide');

    oops();

    window.isMobile = false;
    (function (a, b) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) eval(b) })(navigator.userAgent || navigator.vendor || window.opera, `window.isMobile=true;`);
    if (window.isMobile === true) {
        pushLog('Mobile devices are not supported...');
        alert('PC7 does not support mobile devices!');
        return;
    }

    const fileName = getFileName();
    pushLog(fileName);
    a(getDownloadURL());

    function a(url) { let sneakyLink = document.createElement('a'); sneakyLink.href = url; sneakyLink.click() }
    function pushLog(str) { log.textContent = str; log.scrollTop = log.scrollHeight; }
    function getFileName() {
        let plat = jscd.os.includes('Win') ? "win" : (jscd.os.includes('Mac') ? "mac" : "linux");
        let port; let arch; let ext;
        switch (plat) {
            case 'win':
                port = '-setup';
                arch = jscd.x64 ? '-x64' : '';
                ext = 'exe';
                break;
            case 'mac':
                port = '-portable';
                arch = '-x64';
                ext = 'dmg';
                break;
            case 'linux':
                port = '-portable';
                arch = jscd.x64 ? '-x86_64' : '-i386';
                ext = 'AppImage'
                break;
            default:
                break;
        }
        return `PC7-${plat}${port}-${window.latestVersion}${arch}.${ext}`;
    }
    function getDownloadURL() {
        return `https://github.com/AceSilentKill/PC7-Client/releases/download/v${window.latestVersion}/${fileName}`
    }
}
