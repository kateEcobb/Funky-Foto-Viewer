var LibraryEntry = Backbone.Model.extend({ 
  switch: function(){ 
    this.trigger('switch', this)
  }
});