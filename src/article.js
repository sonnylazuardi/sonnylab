let Article = React.createClass({

     getInitialState: () => ({
        page: 1,
        portfolios: [],
        loading: false,
    }),

    loadData: function() {
        this.setState({
            loading: true
        });
        axios.get('http://sonnylab.com/api/posts?count=10&page='+this.state.page)
            .then((data) => {
                var merge = this.state.portfolios.concat(data.data);
                var page = this.state.page + 1;
                this.setState({
                    portfolios: merge,
                    page: page,
                    loading: false,
                });
            });
    },

    componentDidMount: function () {
        this.loadData();
    },

    handleClick: function() {
        if (!this.state.loading)
            this.loadData();
    },

    render: function () {
        var data = this.state.portfolios.map((item) => {
            return (
                <a className="four columns item" href={'#/post/'+item.slug}>
                    <div className="image" style={{background: `url(${item.image})`, backgroundSize: 'cover'}}>
                    </div>
                    <div className="panel" style={{opacity: 1}}>
                        <div className="title">
                            {item.title}
                        </div>
                    </div>
                </a>
            );
        });
        return (
            <div className="portfolios">
                {data}
                <a className="four columns item" onClick={this.handleClick}>
                    <div className="loadmore">
                        <div>Load More</div>
                        {this.state.loading ?
                            <i className="fa fa-circle-o-notch fa-spin" />
                            :
                            <i className="fa fa-chevron-down" />}
                        
                    </div>
                </a>
            </div>
        );
    },
});
