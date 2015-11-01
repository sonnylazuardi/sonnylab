'use strict';

var Home = React.createClass({
    displayName: 'Home',

    render: function render() {
        var socials = [{ link: 'https://github.com/sonnylazuardi', icon: 'github' }, { link: 'http://linkedin.com/in/sonnylazuardi', icon: 'linkedin' }, { link: 'https://speakerdeck.com/sonnylazuardi', icon: 'slideshare' }, { link: 'http://twitter.com/sonnylazuardi', icon: 'twitter' }, { link: 'http://facebook.com/sonny.lazuardi', icon: 'facebook' }];
        return React.createElement(
            'div',
            { className: 'about' },
            React.createElement('img', { src: 'img/header.png' }),
            React.createElement(
                'h1',
                { className: 'jumbo-title' },
                'I create web & mobile apps.'
            ),
            React.createElement(
                'p',
                { className: 'jumbo-desc' },
                'Sonny Lazuardi - a web & mobile developer working for high quality products.'
            ),
            React.createElement(
                'div',
                { className: 'social' },
                socials.map(function (item) {
                    return React.createElement(
                        'a',
                        { href: item.link },
                        React.createElement('i', { className: 'fa fa-' + item.icon })
                    );
                })
            )
        );
    }
});