var buttons = document.querySelectorAll(".x1i10hfl.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.x6s0dn4.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x1ypdohk.x78zum5.xl56j7k.xcdnw81.xexx8yu.x4uap5.x18d9i69.xkhd6sd");

var buttonsArray = Array.from(buttons);

for (var i = 0; i < buttonsArray.length; i++) {
    const svgElement = buttonsArray[i].querySelector('svg');
    var ariaLabelValue = svgElement.getAttribute('aria-label');

    if (ariaLabelValue && ariaLabelValue.toLowerCase() === "me gusta") {
        setTimeout(function(button) {
            button.click();
        }, i * 3000, buttonsArray[i]);
    }
}
