let Home = React.createClass({
    render: function () {
        var socials = [
            {link: 'https://github.com/sonnylazuardi', icon: 'github'},
            {link: 'http://linkedin.com/in/sonnylazuardi', icon: 'linkedin'},
            {link: 'https://speakerdeck.com/sonnylazuardi', icon: 'slideshare'},
            {link: 'http://twitter.com/sonnylazuardi', icon: 'twitter'},
            {link: 'http://facebook.com/sonny.lazuardi', icon: 'facebook'},
        ]
        return (
            <div className="about">
                <img src="img/header.png"/>
                <h1 className="jumbo-title">I create web & mobile apps.</h1>
                <p className="jumbo-desc">Sonny Lazuardi - a web & mobile developer, open source contributor, Javascript fanboy</p>

                <div className="social">
                    {socials.map((item) => (<a href={item.link}><i className={`fa fa-${item.icon}`}></i></a>))}
                </div>
            </div>
        );
    },
});