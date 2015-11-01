let About = React.createClass({
    getInitialState: () => ({
        post: {},
        loading: false,
    }),

    componentDidMount: function () {
        var slug = this.props.params.slug;
        this.setState({loading: true});
        axios.get('http://sonnylab.com/api/pages/about')
            .then((data) => {
                this.setState({
                    post: data.data,
                    loading: false,
                })
            });
    },

    render: function () {
        if (this.state.loading) return (<p className="loading">Loading post <i className="fa fa-circle-o-notch fa-spin" /></p>);
        var post = this.state.post;
        return (
            <div className="box">
                <h1>{post.title}</h1>
                <div className="page" dangerouslySetInnerHTML={{__html: post.content}}></div>
            </div>
        );
    },
});