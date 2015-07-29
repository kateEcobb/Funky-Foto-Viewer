var LibraryView = Backbone.View.extend({ 
  tagName: 'table',

  initialize: function(){ 
    this.render()
  }, 

  render: function(){ 
    this.$el.children().detach();

    this.$el.html('<th>Photos</th>')
    this.collection.map(function(photo){ 
      var photo = new LibraryEntryView({model: photo})
        this.$el.append(photo.$el)
      }, this)
  }

});