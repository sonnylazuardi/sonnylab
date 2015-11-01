'use strict';

var Article = React.createClass({
    displayName: 'Article',

    getInitialState: function getInitialState() {
        return {
            page: 1,
            portfolios: [],
            loading: false
        };
    },

    loadData: function loadData() {
        var _this = this;

        this.setState({
            loading: true
        });
        axios.get('http://sonnylab.com/api/posts?count=10&page=' + this.state.page).then(function (data) {
            var merge = _this.state.portfolios.concat(data.data);
            var page = _this.state.page + 1;
            _this.setState({
                portfolios: merge,
                page: page,
                loading: false
            });
        });
    },

    componentDidMount: function componentDidMount() {
        this.loadData();
    },

    handleClick: function handleClick() {
        if (!this.state.loading) this.loadData();
    },

    render: function render() {
        var data = this.state.portfolios.map(function (item) {
            return React.createElement(
                'a',
                { className: 'four columns item', href: '#/post/' + item.slug },
                React.createElement('div', { className: 'image', style: { background: 'url(' + item.image + ')', backgroundSize: 'cover' } }),
                React.createElement(
                    'div',
                    { className: 'panel', style: { opacity: 1 } },
                    React.createElement(
                        'div',
                        { className: 'title' },
                        item.title
                    )
                )
            );
        });
        return React.createElement(
            'div',
            { className: 'portfolios' },
            data,
            React.createElement(
                'a',
                { className: 'four columns item', onClick: this.handleClick },
                React.createElement(
                    'div',
                    { className: 'loadmore' },
                    React.createElement(
                        'div',
                        null,
                        'Load More'
                    ),
                    this.state.loading ? React.createElement('i', { className: 'fa fa-circle-o-notch fa-spin' }) : React.createElement('i', { className: 'fa fa-chevron-down' })
                )
            )
        );
    }
});