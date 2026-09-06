/**
 * Homegrown Spirits — Gallery Page JS
 * Loads gallery pieces and links each piece to its artist profile.
 */
(function () {
    'use strict';

    var grid = document.getElementById('gallery-grid');
    if (!grid) return;

    function esc(s) {
        return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
                        .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    }

    function buildCard(item, artist) {
        var imageHtml = item.image
            ? '<img src="' + esc(item.image) + '" alt="' + esc(item.title || '') + '" loading="lazy">'
            : '<div class="gallery-placeholder"><i class="bi bi-palette"></i></div>';
        var artistUrl = artist && (artist.shopPage || ('/artist/' + artist.id + '.html'));
        return [
            '<article class="gallery-card">',
            '  <div class="gallery-card-media">',
            imageHtml,
            '    <div class="gallery-card-overlay">',
            '      <h2>' + esc(item.title || 'Untitled') + '</h2>',
            item.description ? '      <p>' + esc(item.description) + '</p>' : '',
            artistUrl ? '      <a href="' + esc(artistUrl) + '">By ' + esc(artist.name) + ' <i class="bi bi-arrow-right"></i></a>' : '',
            '    </div>',
            '  </div>',
            '</article>'
        ].join('\n');
    }

    Promise.all([
        fetch('/assets/gallery.json').then(function (r) { if (!r.ok) throw r; return r.json(); }),
        fetch('/assets/artists.json').then(function (r) { if (!r.ok) throw r; return r.json(); })
    ]).then(function (data) {
        var gallery = Array.isArray(data[0]) ? data[0] : [];
        var artists = Array.isArray(data[1]) ? data[1] : [];
        if (!gallery.length) {
            grid.innerHTML = '<div class="empty-state"><i class="bi bi-images"></i><p>No gallery pieces yet.</p></div>';
            return;
        }
        grid.innerHTML = gallery.map(function (item) {
            var artist = artists.find(function (a) { return a.id === item.artist; });
            return buildCard(item, artist);
        }).join('');
    }).catch(function () {
        grid.innerHTML = '<div class="empty-state"><p>Could not load the gallery. Check back soon.</p></div>';
    });
})();
