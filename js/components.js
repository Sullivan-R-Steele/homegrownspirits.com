/**
 * Homegrown Spirits — Universal Header & Footer
 * Injects the shared nav and footer into every page.
 */
(function () {
    'use strict';

    var NAV_HTML = [
        '<nav class="hs-nav" aria-label="Main navigation">',
        '    <div class="hs-nav-inner">',
        '        <a href="/" class="hs-logo">',
        '            HOMEGROWN SPIRITS',
        '            <span>Fine Arts &amp; Functional Crafts</span>',
        '        </a>',
        '        <button class="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="shop-nav-links">',
        '            <span></span><span></span><span></span>',
        '        </button>',
        '        <ul class="hs-nav-links" id="shop-nav-links">',
        '            <li><a href="/" data-nav="index">Home</a></li>',
        '            <li><a href="/catalog.html" data-nav="catalog">Catalog</a></li>',
        '            <li><a href="/artists.html" data-nav="artists">Artists</a></li>',
        '            <li><a href="/gallery.html" data-nav="gallery">Gallery</a></li>',
        '            <li><a href="/policies.html" data-nav="policies">Policies</a></li>',
        '            <li><button type="button" class="theme-toggle" aria-label="Toggle theme"><i class="bi bi-sun"></i></button></li>',
        '        </ul>',
        '    </div>',
        '</nav>'
    ].join('\n');

    var FOOTER_HTML = [
        '<footer class="hs-footer">',
        '    <div class="hs-footer-inner">',
        '        <div class="hs-footer-grid">',
        '            <div class="hs-footer-brand">',
        '                <h3>Homegrown Spirits</h3>',
        '                <p>Handmade art and goods from Charleston, WV. Sand-etched glass, wood craft, prints, and digital creations.</p>',
        '                <p style="margin-top:0.5rem"><a href="mailto:homegrownspirits@gmail.com"><i class="bi bi-envelope"></i> homegrownspirits@gmail.com</a></p>',
        '            </div>',
        '            <div class="hs-footer-col">',
        '                <h4>Shop</h4>',
        '                <ul>',
        '                    <li><a href="/catalog.html">All Products</a></li>',
        '                    <li><a href="/catalog.html?type=physical">Handmade Goods</a></li>',
        '                    <li><a href="/catalog.html?type=print">Prints</a></li>',
        '                    <li><a href="/catalog.html?type=digital">Digital Downloads</a></li>',
        '                    <li><a href="/artists.html">Artists</a></li>',
        '<li><a href="/gallery.html">Gallery</a></li>',
        '                </ul>',
        '            </div>',
        '            <div class="hs-footer-col">',
        '                <h4>Info</h4>',
        '                <ul>',
        '                    <li><a href="/policies.html">Shipping &amp; Returns</a></li>',
        '                    <li><a href="/policies.html#payments">Payments</a></li>',
        '                    <li><a href="/policies.html#privacy">Privacy</a></li>',
        '                    <li><a href="mailto:homegrownspirits@gmail.com">Custom Orders</a></li>',
        '                </ul>',
        '            </div>',
        '        </div>',
        '        <div class="hs-footer-bottom">',
        '            <span>&copy; 2026 Homegrown Spirits &middot; Charleston, WV</span>',
        '            <span>',
        '                <a href="/policies.html">Policies</a> &middot;',
        '                <a href="mailto:homegrownspirits@gmail.com">Contact</a>',
        '            </span>',
        '        </div>',
        '    </div>',
        '</footer>'
    ].join('\n');

    document.addEventListener('DOMContentLoaded', function () {
        var header = document.getElementById('hs-header');
        if (header) {
            header.outerHTML = NAV_HTML;
        }

        var footer = document.getElementById('hs-footer');
        if (footer) {
            footer.outerHTML = FOOTER_HTML;
        }
    });
})();
