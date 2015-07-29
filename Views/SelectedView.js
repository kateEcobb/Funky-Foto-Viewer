var SelectedView = Backbone.View.extend({ 
  initialize: function(){ 
    this.render();
  }, 

  template: _.template('<img src= <%=image%> ></img> <span><%- title %></span>'),

  render: function(){ 
    this.$el.empty();
    this.$el.append(this.template(this.model.attributes))
  },

  setPhoto: function(photo){ 
    this.model = photo; 
    this.render();
  }

});