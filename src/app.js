let Menu = React.createClass({

    render: function() {
        var menus = [
            {name: 'Home', link: '#home'},
            {name: 'Portfolio', link: '#portfolio'},
            {name: 'Article', link: '#article'},
            {name: 'About', link: '#about'},
        ];
        return (
            <ul className="menu">
                {menus.map((item) => (<li><a href={item.link}>{item.name}</a></li>))}
            </ul>
        );
    }
})

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
let {Router, Link, Route, IndexRoute} = ReactRouter;

let App = React.createClass({

    render: function () {
        const { pathname } = this.props.location;

        return (
            <div className="container">
                <div className="header">
                    <div className="row">
                        <div className="four columns">
                            <Link to="home">
                                <div className="logo" />
                            </Link>
                        </div>
                        <div className="eight columns">
                            <Menu />
                        </div>
                    </div>
                </div>
                <div className="content">
                    
                    <ReactCSSTransitionGroup component="div" transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        {React.cloneElement(this.props.children || <div />, { key: pathname })}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    },
})

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />
            <Route path="portfolio" component={Portfolio} />
            <Route path="article" component={Article} />
            <Route path="about" component={About} />
            <Route path="post/:slug"  component={Post} />
        </Route>
    </Router>,
    document.getElementById('root')
);