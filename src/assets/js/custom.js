$(function(){"use strict";function e(){var e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=new Date;return e[r.getDay()]}function r(){var e=["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],r=new Date;return e[r.getMonth()]}function o(){var e=new Date;return e.getFullYear()}function t(){var e=new Date;return e.getDate()}$("#mobileBtn").on("click",function(){$(".content-header .navbar-right").toggle("show"),$(this).toggleClass("show")}),jQuery(".sidenav .sidebar-wrapper").scrollbar(),jQuery("#right-sidebar .sidebar-wrapper").scrollbar(),jQuery(".notification-list").scrollbar(),$(".carousel").carousel(),$(".btn-bars").on("click",function(){$("#sidebar.sidenav").toggleClass("sidenav-off"),$(".pageheader").toggleClass("pageheader-off"),$("#main-container .content").toggleClass("content-full"),$("#page-footer.pagefooter").toggleClass("pagefooter-full")}),$(".btn-r_sidebar").on("click",function(e){$(".r_sidebar").toggleClass("r_sidebar-on"),$(this).toggleClass("r_on")}),$("#right-sidebar .close-btn").on("click",function(){$("#right-sidebar").removeClass("r_sidebar-on"),$(".btn-r_sidebar").removeClass("r_on")}),$(".example-popover").popover({container:"body"}),$(".popover-dismiss").popover({trigger:"focus"}),$('[data-toggle="tooltip"]').tooltip(),$(".dropdown-help .dropdown-help-menu").on("click",function(e){var r=$._data(document,"events")||{};r=r.click||[];for(var o=0;o<r.length;o++)r[o].selector&&($(e.target).is(r[o].selector)&&r[o].handler.call(e.target,e),$(e.target).parents(r[o].selector).each(function(){r[o].handler.call(this,e)}));e.stopPropagation()}),$("#prDate").html(t()),$("#prMonth").html(r()),$("#prYear").html(o()),$("#prDay").html(e()),$("input.expand-search").click(function(){$(this).addClass("open-search")}),$("input.expand-search").blur(function(){$(this).removeClass("open-search")}),$(".edit-profile").on("click",function(){var e=$(".profile-form input.form-control").is(":visible");1==e?($(".profile-form input").removeClass("form-control-plaintext"),$(".profile-form input").addClass("form-control"),$(".profile-form input").removeAttr("readonly")):($(".profile-form input").addClass("form-control-plaintext"),$(".profile-form input").removeClass("form-control"),$(".profile-form input").attr("readonly"))})});var elems=Array.prototype.slice.call(document.querySelectorAll(".js-switch"));elems.forEach(function(e){new Switchery(e,{size:"small",color:"#563d7c"})});