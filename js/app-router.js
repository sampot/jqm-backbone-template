// main
ava.router = Backbone.Router.extend({
    routes:{
        "":"home",
        "home": "home",
        "second": "second",
        "about": "about"
    },

    initialize: function () {
        console.log('initialize')
        this.firstPage = true;

        Backbone.history.start();
    },

    home: function () {

        this.changePage(new ava.views.First( {} ));

    },

    second: function () {
        this.changePage(new ava.views.Second( {} ));
    },

    about: function () {
        this.changePage(new ava.views.About( {} ), 'pop');
    },


    changePage:function (page, transition) {
        $(page.el).attr('data-role', 'page');

        page.render();

        // console.log('page.el', $(page.el))
        $('body').append(page.$el);

        var transition = transition || $.mobile.defaultPageTransition;

        // We don't want to fade the first page. Slide, and risk the annoying "jump to top".
        if (this.firstPage) {
            transition = "none";
            $.mobile.initializePage();
            this.firstPage = false;
        }
        $(":mobile-pagecontainer").pagecontainer( "change", $(page.el),
                { changeHash: false, transition: transition });
    }
});

$(document).ready(function () {
    console.log('document ready');
    app = new ava.router();
});

