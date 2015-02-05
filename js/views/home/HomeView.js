/**
 * Home View is a base page view to display the home screen
 * template: homeTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'views/search_results/ProjectGridView',
  'text!templates/home/homeTemplate.html',
  'text!templates/home/headerTemplate.html'

], function($, _, Backbone, ProjectGridView, homeTemplate, headerTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),
    elSub: {headerEl: $('#header')},
    
    render: function(){
        // display home template to the defined element "el"
        this.elSub.headerEl.html(headerTemplate);
        this.$el.html(homeTemplate);   
        

        // display the search form on the home screen
        // demonstrating how you can pass element selector or other values to models to manipulate their
        // result destination 
        
    }
  });

  return HomeView;
});