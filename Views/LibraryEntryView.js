var LibraryEntryView = Backbone.View.extend({ 
  tagName: 'tr', 

  template: _.template('<td><%-title%></td>'),

  initialize: function(){ 
    this.render()
  }, 

  events: { 
    'click': function(){ 
      this.model.switch();
    }
  },

  render: function(){ 
    this.$el.html(this.template(this.model.attributes))
  }

});
 