$(document).ready(function(){function e(){$(window).scrollTop(s)}function a(){$(".fuzzy-search").val(""),t(),c.search()}function t(){$(".table-sortable__search--active").each(function(){$(this).removeClass("table-sortable__search--active")})}$("a[href*=#]:not([href=#])").click(function(){var e=$(this.hash),a=this.hostname,t=location.hostname,s=this.pathname.replace(/^\//,""),o=location.pathname.replace(/^\//,"");return e.length||(e=$("[name="+this.hash.slice(1)+"]")),!e.length||a!==t&&s!==o||($("html, body").animate({scrollTop:e.offset().top},1e3),!1)});var s=0;$(".js-open-modal").click(function(){$(this).parent().find(".js-target-modal").addClass("js-active"),s=$(window).scrollTop(),$(window).bind("scroll",e),$("#overlay").addClass("js-active"),$("body").addClass("js-body-modal-active")}),$("footer .js-close-modal").on("click",function(e){e.preventDefault()}),$("body").on("click",".js-close-modal",function(){s=$(window).scrollTop(),$(window).unbind("scroll"),$(".js-target-modal").removeClass("js-active"),$("#overlay").removeClass("js-active"),$("body").removeClass("js-body-modal-active")}),$("#overlay").click(function(){$(".js-active").removeClass("js-active"),s=$(window).scrollTop(),$(window).unbind("scroll"),$(".js-active-menu").removeClass("js-active-menu"),$("body").removeClass("js-body-modal-active")}),$(".js-close-sticky").click(function(){$(".js-target-sticky").removeClass("js-active")}),$(".js-trigger-search").click(function(e){e.preventDefault(),$(this).parent().addClass("js-active"),$("#overlay").addClass("js-active")}),$(".js-trigger-menu").click(function(e){$(this).next().addClass("js-active-menu"),$("#overlay").addClass("js-active")}),$("#overlay").click(function(){$(".js-active").removeClass("js-active"),$(".js-active-menu").removeClass("js-active-menu")}),$(".slider").slick({arrows:!0,draggable:!1,swipeToSlide:!0,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:800,settings:{draggable:!0}}]}),$(".js-open-table-search").click(function(e){e.preventDefault(),$(this).parent().siblings(".table-sortable__search").toggleClass("table-sortable__search--active")});var o=$(".table-sortable__search").find("button[type='submit']");o.on("click",function(e){e.preventDefault(),$(this).parent().hasClass("table-sortable__search--active")&&$(this).parent().removeClass("table-sortable__search--active"),a()});var i=$(".table-sortable__control > i:contains('keyboard_arrow_down')");i.on("click",function(){"keyboard_arrow_down"==$(this).text()?$(this).text("keyboard_arrow_up"):$(this).text("keyboard_arrow_down")}),$("body").keyup(function(e){"27"==e.keyCode&&($(this).parent().find(".table-sortable__search").removeClass("table-sortable__search--active"),a())});var l={valueNames:[{name:"item__name",attr:"data-target"},"item__category","item__date","item__location"]},c=new List("items",l);$(".js-open-table-search").on("click",function(e){$(this).addClass("table-sortable__search--active"),$($(this).attr("data-target")).focus()}),$(".fuzzy-search").keyup(function(){var e=$(this).val();c.fuzzySearch(e,["item__name"])})});