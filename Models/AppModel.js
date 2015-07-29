var AppModel = Backbone.Model.extend({ 
  initialize: function(params){ 
    this.set('currentPhoto', params.library.at(0))

    params.library.on('switch', function(photo){ 
      console.log('made it')
      this.set('currentPhoto', photo)

    }, this);


  } 
});