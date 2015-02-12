Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', function() {
  this.layout('layout');
  this.render('main');
  fastRender: true;
  }, {
    waitOn: function () {
      return Meteor.subscribe('Pictures');
      }
      });


Router.route('/images/:_id', function() {
  var params = this.params;
  var id = params._id;
  console.log(id);
  this.render('images', {
    data: function() {
      return Pictures.findOne({
        _id: params._id
      });
    }
  });
}, {
  name: 'image.show'
});
