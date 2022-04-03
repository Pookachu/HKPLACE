# Hello, this is a GITHUB repository dedicated to tools useful for the r/hkplace community!

To get this overlay:
## 1. Install the Tampermonkey browser addon
USE THIS FOR CHROME
https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
USE THIS FOR OPERA
https://addons.opera.com/en/extensions/details/tampermonkey-beta/
USE THIS FOR FIREFOX
https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/
## 2. Click create new script 
## 3. Remove the default code, and paste this in its place
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
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
```
