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
            i.src = "https://github.com/Pookachu/HKPLACE/blob/main/Dotted_Overlay_PNGs/FULL_OVERLAY.png?raw=true";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);
const camera = document
	.querySelector("mona-lisa-embed")
	.shadowRoot.querySelector("mona-lisa-camera");
const waitForPreview = setInterval(() => {
	const preview = camera.querySelector("mona-lisa-pixel-preview");
	if (preview) {
		clearInterval(waitForPreview);
		const style = document.createElement("style");
		style.innerHTML =
			".pixel { clip-path: polygon(-20% -20%, -20% 120%, 37% 120%, 37% 37%, 62% 37%, 62% 62%, 37% 62%, 37% 120%, 120% 120%, 120% -20%); }";
		preview.shadowRoot.appendChild(style);
	}
}, 100);
}
