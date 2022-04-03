# GITHUB repository dedicated to the overlay script 2.0
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
// @name         Multiple Images RPlace Template
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the canvas!
// @author       MilesZew
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

if (window.top !== window.self) {
  window.addEventListener('load', () => {
    let templates = [
      {pos: [225, 343], src: 'https://cdn.discordapp.com/attachments/959997011598401557/960251171191283722/HORNET.png', width: 84, height: 78},
      {pos: [247, 1339], src: 'https://cdn.discordapp.com/attachments/959997011598401557/960259616569188412/dotted_RadianceTemplate.png', width: 94, height: 105}
    ]

    templates.forEach(i => {
      let img = document.createElement('img')
      img.src = i.src
      img.style = `position: absolute;left: ${i.pos[0]}px;top: ${i.pos[1]}px;image-rendering: pixelated;width: ${i.width}px;height: ${i.height}px;`
        console.log(i.src)

        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(img)
    })

  }, false);

}
})();
```
