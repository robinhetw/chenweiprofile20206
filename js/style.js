


/*scroll*/ 
$(document).ready(function(){
/* scroll button*/
    $('.js--scroll-to-about').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-about').offset().top},1000);

    });

    $('.js--scroll-to-project').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-project').offset().top},1000);

    });




    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  });


/*filter*/ 
$(document).ready(function(){

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
      }
      else
      {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
          
      }
  });
  
  if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
/*Pinterest */

$(document).ready(function() {
  $('#pinBoot').pinterest_grid({
  no_columns: 4,
  padding_x: 10,
  padding_y: 10,
  margin_bottom: 50,
  single_column_breakpoint: 700
  });
  });
  
  /*
  Ref:
  Thanks to:
  http://www.jqueryscript.net/layout/Simple-jQuery-Plugin-To-Create-Pinterest-Style-Grid-Layout-Pinterest-Grid.html
  */
  
  
  /*
      Pinterest Grid Plugin
      Copyright 2014 Mediademons
      @author smm 16/04/2014
  
      usage:
  
       $(document).ready(function() {
  
          $('#blog-landing').pinterest_grid({
              no_columns: 4
          });
  
      });
  
  
  */
  
  ;(function ($, window, document, undefined) {
      var pluginName = 'pinterest_grid',
          defaults = {
              padding_x: 10,
              padding_y: 10,
              no_columns: 3,
              margin_bottom: 50,
              single_column_breakpoint: 700
          },
          columns,
          $article,
          article_width;
  
      function Plugin(element, options) {
          this.element = element;
          this.options = $.extend({}, defaults, options) ;
          this._defaults = defaults;
          this._name = pluginName;
          this.init();
      }
  
      Plugin.prototype.init = function () {
          var self = this,
              resize_finish;
  
          $(window).resize(function() {
              clearTimeout(resize_finish);
              resize_finish = setTimeout( function () {
                  self.make_layout_change(self);
              }, 11);
          });
  
          self.make_layout_change(self);
  
          setTimeout(function() {
              $(window).resize();
          }, 500);
      };
  
      Plugin.prototype.calculate = function (single_column_mode) {
          var self = this,
              tallest = 0,
              row = 0,
              $container = $(this.element),
              container_width = $container.width();
              $article = $(this.element).children();
  
          if(single_column_mode === true) {
              article_width = $container.width() - self.options.padding_x;
          } else {
              article_width = ($container.width() - self.options.padding_x * self.options.no_columns) / self.options.no_columns;
          }
  
          $article.each(function() {
              $(this).css('width', article_width);
          });
  
          columns = self.options.no_columns;
  
          $article.each(function(index) {
              var current_column,
                  left_out = 0,
                  top = 0,
                  $this = $(this),
                  prevAll = $this.prevAll(),
                  tallest = 0;
  
              if(single_column_mode === false) {
                  current_column = (index % columns);
              } else {
                  current_column = 0;
              }
  
              for(var t = 0; t < columns; t++) {
                  $this.removeClass('c'+t);
              }
  
              if(index % columns === 0) {
                  row++;
              }
  
              $this.addClass('c' + current_column);
              $this.addClass('r' + row);
  
              prevAll.each(function(index) {
                  if($(this).hasClass('c' + current_column)) {
                      top += $(this).outerHeight() + self.options.padding_y;
                  }
              });
  
              if(single_column_mode === true) {
                  left_out = 0;
              } else {
                  left_out = (index % columns) * (article_width + self.options.padding_x);
              }
  
              $this.css({
                  'left': left_out,
                  'top' : top
              });
          });
  
          this.tallest($container);
          $(window).resize();
      };
  
      Plugin.prototype.tallest = function (_container) {
          var column_heights = [],
              largest = 0;
  
          for(var z = 0; z < columns; z++) {
              var temp_height = 0;
              _container.find('.c'+z).each(function() {
                  temp_height += $(this).outerHeight();
              });
              column_heights[z] = temp_height;
          }
  
          largest = Math.max.apply(Math, column_heights);
          _container.css('height', largest + (this.options.padding_y + this.options.margin_bottom));
      };
  
      Plugin.prototype.make_layout_change = function (_self) {
          if($(window).width() < _self.options.single_column_breakpoint) {
              _self.calculate(true);
          } else {
              _self.calculate(false);
          }
      };
  
      $.fn[pluginName] = function (options) {
          return this.each(function () {
              if (!$.data(this, 'plugin_' + pluginName)) {
                  $.data(this, 'plugin_' + pluginName,
                  new Plugin(this, options));
              }
          });
      }
  
  })(jQuery, window, document);

  

/*cover h1*/ 
function resize() {
    var n = $("body").width() / 18 + "pt";
    $("h1").css('fontSize', n);
}
$(window).on("resize", resize);
$(document).ready(resize);


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })

  /*modal* */
/*
  function setModalMaxHeight(element) {
    this.$element     = $(element);  
    this.$content     = this.$element.find('.modal-content');
    var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
    var dialogMargin  = $(window).width() < 768 ? 20 : 60;
    var contentHeight = $(window).height() - (dialogMargin + borderWidth);
    var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
    var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
    var maxHeight     = contentHeight - (headerHeight + footerHeight);
  
    this.$content.css({
        'overflow': 'hidden'
    });
    
    this.$element
      .find('.modal-body').css({
        'max-height': maxHeight,
        'overflow-y': 'auto'
    });
  }
  
  $('.modal').on('show.bs.modal', function() {
    $(this).show();
    setModalMaxHeight(this);
  });
  
  $(window).resize(function() {
    if ($('.modal.in').length != 0) {
      setModalMaxHeight($('.modal.in'));
    }
  });
*/




  /* modal fix */

  $("#button-modal").click(function(){
    Show("modal-id");
});

//Fix modal mobile Boostrap 3
function Show(id){
	//Fix CSS
	$(".modal-footer").css({"padding":"19px 20px 20px","margin-top":"15px","text-align":"right","border-top":"1px solid #e5e5e5"});
	$(".modal-body").css("overflow-y","auto");
	//Fix .modal-body height
	$('#'+id).on('shown.bs.modal',function(){
		$("#"+id+">.modal-dialog>.modal-content>.modal-body").css("height","auto");
		h1=$("#"+id+">.modal-dialog").height();
		h2=$(window).height();
		h3=$("#"+id+">.modal-dialog>.modal-content>.modal-body").height();
		h4=h2-(h1-h3);		
		if($(window).width()>=768){
			if(h1>h2){
				$("#"+id+">.modal-dialog>.modal-content>.modal-body").height(h4);
			}
			$("#"+id+">.modal-dialog").css("margin","30px auto");
			$("#"+id+">.modal-dialog>.modal-content").css("border","1px solid rgba(0,0,0,0.2)");
			$("#"+id+">.modal-dialog>.modal-content").css("border-radius",6);				
			if($("#"+id+">.modal-dialog").height()+30>h2){
				$("#"+id+">.modal-dialog").css("margin-top","0px");
				$("#"+id+">.modal-dialog").css("margin-bottom","0px");
			}
		}
		else{
			//Fix full-screen in mobiles
			$("#"+id+">.modal-dialog>.modal-content>.modal-body").height(h4);
			$("#"+id+">.modal-dialog").css("margin",0);
			$("#"+id+">.modal-dialog>.modal-content").css("border",0);
			$("#"+id+">.modal-dialog>.modal-content").css("border-radius",0);	
		}
		//Aply changes on screen resize (example: mobile orientation)
		window.onresize=function(){
			$("#"+id+">.modal-dialog>.modal-content>.modal-body").css("height","auto");
			h1=$("#"+id+">.modal-dialog").height();
			h2=$(window).height();
			h3=$("#"+id+">.modal-dialog>.modal-content>.modal-body").height();
			h4=h2-(h1-h3);
			if($(window).width()>=768){
				if(h1>h2){
					$("#"+id+">.modal-dialog>.modal-content>.modal-body").height(h4);
				}
				$("#"+id+">.modal-dialog").css("margin","30px auto");
				$("#"+id+">.modal-dialog>.modal-content").css("border","1px solid rgba(0,0,0,0.2)");
				$("#"+id+">.modal-dialog>.modal-content").css("border-radius",6);				
				if($("#"+id+">.modal-dialog").height()+30>h2){
					$("#"+id+">.modal-dialog").css("margin-top","0px");
					$("#"+id+">.modal-dialog").css("margin-bottom","0px");
				}
			}
			else{
				//Fix full-screen in mobiles
				$("#"+id+">.modal-dialog>.modal-content>.modal-body").height(h4);
				$("#"+id+">.modal-dialog").css("margin",0);
				$("#"+id+">.modal-dialog>.modal-content").css("border",0);
				$("#"+id+">.modal-dialog>.modal-content").css("border-radius",0);	
			}
		};
	});  
	//Free event listener
	$('#'+id).on('hide.bs.modal',function(){
		window.onresize=function(){};
	});  
	//Mobile haven't scrollbar, so this is touch event scrollbar implementation
	var y1=0;
	var y2=0;
	var div=$("#"+id+">.modal-dialog>.modal-content>.modal-body")[0];
	div.addEventListener("touchstart",function(event){
		y1=event.touches[0].clientY;
	});
	div.addEventListener("touchmove",function(event){
		event.preventDefault();
		y2=event.touches[0].clientY;
		var limite=div.scrollHeight-div.clientHeight;
		var diff=div.scrollTop+y1-y2;
		if(diff<0)diff=0;
		if(diff>limite)diff=limite;
		div.scrollTop=diff;
		y1=y2;
	});
	//Fix position modal, scroll to top.	
	$('html, body').scrollTop(0);
	//Show
	$("#"+id).modal('show');
}

