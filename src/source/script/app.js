const Parallax = require('parallax-js');
const $ = require('jquery');
const ionicons = require('ionicons');

$(function () { 
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);
  function setNav(name) {
    $('.nav #' + name).addClass('current');
  }
  console.log("%c(｡･∀･)ﾉﾞNyan~ket！ご注文はねこですか？", "color:pink");
  console.log("%cCreated by Nekotora.\nfind me at http://flag.moe/", "color:green");
})