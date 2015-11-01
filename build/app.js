'use strict';

var Menu = React.createClass({
    displayName: 'Menu',

    render: function render() {
        var menus = [{ name: 'Home', link: '#home' }, { name: 'Portfolio', link: '#portfolio' }, { name: 'Article', link: '#article' }, { name: 'About', link: '#about' }];
        return React.createElement(
            'ul',
            { className: 'menu' },
            menus.map(function (item) {
                return React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'a',
                        { href: item.link },
                        item.name
                    )
                );
            })
        );
    }
});

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var _ReactRouter = ReactRouter;
var Router = _ReactRouter.Router;
var Link = _ReactRouter.Link;
var Route = _ReactRouter.Route;
var IndexRoute = _ReactRouter.IndexRoute;

var App = React.createClass({
    displayName: 'App',

    render: function render() {
        var pathname = this.props.location.pathname;

        return React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'div',
                { className: 'header' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'four columns' },
                        React.createElement(
                            Link,
                            { to: 'home' },
                            React.createElement('div', { className: 'logo' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'eight columns' },
                        React.createElement(Menu, null)
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                    ReactCSSTransitionGroup,
                    { component: 'div', transitionName: 'example', transitionEnterTimeout: 500, transitionLeaveTimeout: 500 },
                    React.cloneElement(this.props.children || React.createElement('div', null), { key: pathname })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(
    Router,
    null,
    React.createElement(
        Route,
        { path: '/', component: App },
        React.createElement(IndexRoute, { component: Home }),
        React.createElement(Route, { path: 'home', component: Home }),
        React.createElement(Route, { path: 'portfolio', component: Portfolio }),
        React.createElement(Route, { path: 'article', component: Article }),
        React.createElement(Route, { path: 'about', component: About }),
        React.createElement(Route, { path: 'post/:slug', component: Post })
    )
), document.getElementById('root'));