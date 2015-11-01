"use strict";

var Post = React.createClass({
    displayName: "Post",

    getInitialState: function getInitialState() {
        return {
            post: {},
            loading: false
        };
    },

    componentDidMount: function componentDidMount() {
        var _this = this;

        var slug = this.props.params.slug;
        this.setState({ loading: true });
        axios.get('http://sonnylab.com/api/posts/' + slug).then(function (data) {
            _this.setState({
                post: data.data,
                loading: false
            });
        });
    },

    render: function render() {
        if (this.state.loading) return React.createElement(
            "p",
            { className: "loading" },
            "Loading post ",
            React.createElement("i", { className: "fa fa-circle-o-notch fa-spin" })
        );
        var post = this.state.post;
        return React.createElement(
            "div",
            { className: "box" },
            React.createElement(
                "h1",
                null,
                post.title
            ),
            React.createElement("div", { className: "post", dangerouslySetInnerHTML: { __html: post.html } })
        );
    }

});