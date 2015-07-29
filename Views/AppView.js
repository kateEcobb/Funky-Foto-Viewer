var AppView = Backbone.View.extend({ 
  initialize: function(){ 
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.selectedView = new SelectedView({model: this.model.get('library').at(0)}); //want to populate this with a default;
    this.render();

    this.model.on('change:currentPhoto', function(model){ 
      this.selectedView.setPhoto(model.get('currentPhoto'))
    }, this);

  }, 

  render: function(){ 
    return this.$el.append([
      this.libraryView.$el, 
      this.selectedView.$el
    ])

  }

});