(function( $, undefined ) {

$.widget("silexlabs.editable", {
	version: "1.0.0",
	options: {
        mode: "in-place",
        element: ".editable-element",
	},
	// _setOption is called for each individual option that is changing
	_setOption: function( key, value ) {
		console.log("set option "+key+"="+value);
		switch(key){
			case "mode":
				this.setMode(value);
				break;
			case "disabled":
				if (value==true){
					this.setMode("disabled");					
				}
				else{
					this.setMode(this.options.mode);
				}
				break;
		}
	},
	_create: function() {
		this.setMode("created");
	},
	_destroy: function() {
		this.setMode("destroyed");
	},
	setMode : function (mode) {
		console.log("setMode "+mode);
		switch (mode){
			case "created":
				$( this.options.element ).resizable().draggable({ 
					containment: "parent"
				});
				break;
			case "destroyed":
				$( this.options.element ).resizable('destroy').draggable('destroy');
				break;
			case "disabled":
				$( this.options.element ).resizable('disable').draggable('disable');
				break;
			case "in-place":
				$( this.options.element ).resizable('enable').draggable('enable');
				break;
			case "dom":
				$( this.options.element ).resizable('disable').draggable('disable');
				console.error("not implemented");
				break;
		}
	},
});
})(jQuery);