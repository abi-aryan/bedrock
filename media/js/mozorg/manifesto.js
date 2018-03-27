/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

$(function() {
    'use strict';

    // Open Twitter in a sub window
    var openTwitterSubwin = function (url) {
        window.dataLayer.push({
            'event': 'manifesto-share'
        });

        var width = 550;
        var height = 420;
        var options = {
            'scrollbars': 'yes',
            'resizable': 'yes',
            'toolbar': 'no',
            'location': 'yes',
            'width': width,
            'height': height,
            'top': screen.height > height ? Math.round((screen.height / 2) - (height / 2)) : 0,
            'left': Math.round((screen.width / 2) - (width / 2))
        };

        window.open(url, 'twitter_share', $.param(options).replace(/&/g, ',')).focus();
    };

    // Set up link handler
    $(document).on('click', 'article a', function (event) {
        var $this = $(this);
        var href = $this.attr('href');

        if ($this.hasClass('button-manifesto')) {
            // Open Twitter in a sub window
            event.preventDefault();
            openTwitterSubwin(href);
        } else {
            window.dataLayer.push({
                'event': 'manifesto-interaction',
                'browserAction': 'link click'
            });
        }
    });
});
