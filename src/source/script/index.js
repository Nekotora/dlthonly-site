const $ = require('jquery');
const ionicons = require('ionicons');

$(function () {

  var map = new BMap.Map('mapitem');
  var point_a = new BMap.Point(121.663211, 38.931139);
  var point_b = new BMap.Point(121.646111,38.922389);
  var point_center = new BMap.Point(121.640187, 38.920089);
  map.centerAndZoom(point_center, 14);
  var marker_a = new BMap.Marker(point_a);
  var marker_b = new BMap.Marker(point_b);

  var label_a = new BMap.Label("DLTHO", {
    offset: new BMap.Size(25, -10)
  })

  var label_b = new BMap.Label("DLTHO LiveParty", {
    offset: new BMap.Size(25, -10),
    border: "0",
  })
  window.l = label_a
  var style = {
    border: "none",
    backgroundColor: "rgba(0,0,0,.5)",
    color: "#fff",
    padding: "5px 13px",
    fontSize: "12px",
    borderRadius: "100px"
  }

  label_a.setStyle(style)
  label_b.setStyle(style)
  marker_a.setLabel(label_a);
  marker_b.setLabel(label_b);
  map.addOverlay(marker_a);
  map.addOverlay(marker_b);


  //map.setMapStyle({style:'dark'});
  map.addControl(new BMap.NavigationControl({
    type: BMAP_NAVIGATION_CONTROL_ZOOM
  }));

  $("#map_control #point_a").hover(function () {
    map.centerAndZoom(point_a, 16);
    marker_a.setAnimation(BMAP_ANIMATION_BOUNCE);
  }, function () { 
    map.centerAndZoom(point_center, 14);
    marker_a.setAnimation(null);
  })
  
  $("#map_control #point_b").hover(function () {
    map.centerAndZoom(point_b, 16);
    marker_b.setAnimation(BMAP_ANIMATION_BOUNCE);
  }, function () {
    map.centerAndZoom(point_center, 14);
    marker_b.setAnimation(null);
    })
  
  function leftTimer(year, month, day, hour, minute, second) {
    var leftTime = (new Date(year, month - 1, day, hour, minute, second)) - (new Date()); //计算剩余的毫秒数 
    var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
    var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
    var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟 
    var seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数 
    days = checkTime(days);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    $('#countdown').html(`
      <div><span class="i">天</span><span class="n">${days}</span></div>
      <div><span class="i">时</span><span class="n">${hours}</span></div>
      <div><span class="i">分</span><span class="n">${minutes}</span></div>
      <div><span class="i">秒</span><span class="n">${seconds}</span></div>
    `);
    var process = seconds / 60 *100;
    $('#countdownbar .in').width(process + '%');
  }

  setInterval(function () {
    leftTimer(2019, 2, 23, 9, 0, 0);
  }, 1000);

  leftTimer(2019, 2, 23, 9, 0, 0);

  function checkTime(i) { //将0-9的数字前面加上0，例1变为01 
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
})