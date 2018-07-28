const Parallax = require('parallax-js');
const $ = require('jquery');
const ionicons = require('ionicons');

$(function () { 
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);
  function setNav(name) {
    $('.nav #' + name).addClass('current');
  }
})