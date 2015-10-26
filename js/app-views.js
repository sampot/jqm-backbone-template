// views

ava.views.First = Backbone.View.extend({

    render: function () {
        var template = _.template($("#firstPage").html());
        $(this.el).html(template);

        return this;
    },

    initialize: function (options) {
        _.bindAll(this, "render");
        this.render();
    }
});

ava.views.Second = Backbone.View.extend({

    render: function () {
        var template = _.template($("#secondPage").html());

        $(this.el).html(template);
        return this;
    },

    initialize: function (options) {
        _.bindAll(this, "render");

        this.render();
    }
});

ava.views.About = Backbone.View.extend({

    render: function () {
        var template = _.template($("#aboutPage").html());

        $(this.el).html(template);
        return this;
    },

    initialize: function (options) {
        _.bindAll(this, "render");
        $(this.el).attr('data-dialog', 'true');
        this.render();
    }
});

