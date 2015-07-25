var AppView = Backbone.View.extend({ 
  id: '#main',

  initialize: function(){ 
    this.listView = new ListView({collection: this.model.get('photos')});
    this.selectedView = new SelectedView(); //want to populate this with a default;

    this.render();
  }, 


  render: function(){ 
    this.$el.append([
      this.listView.$el, 
      this.selectedView.$el
    ])

});