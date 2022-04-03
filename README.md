# Hello, this is a GITHUB repository dedicated to tools useful for the r/hkplace community!
![image](https://user-images.githubusercontent.com/30243655/161415131-6242ec27-2718-4428-bca6-137597fbd085.png)

To get this overlay:
## 1. Install the Tampermonkey browser addon
USE THIS FOR CHROME: 
https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en

USE THIS FOR OPERA: 
https://addons.opera.com/en/extensions/details/tampermonkey-beta/

USE THIS FOR FIREFOX: 
https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/
## 2. Click create new script 
![image](https://user-images.githubusercontent.com/30243655/161415080-e8bb2acc-9cef-458c-8079-f280c740b51c.png)
## 3. Remove the default code, and paste this in its place
![image](https://user-images.githubusercontent.com/30243655/161415119-dabd1837-cc9d-4761-9562-25ab32e0b4d0.png)
## 4. Save the script by hitting ctrl+s
## 5. Reload the r/place webpage
## 6. Done!

```
// ==UserScript==
// @name         HOLLOWKNIGHT LOGO TEMPLATE
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the canvas!
// @author       oralekin
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://github.com/Pookachu/HKPLACE/blob/main/dotted-place-template.png?raw=true";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
```
