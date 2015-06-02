module.exports = (function(){

	/*
    * Test if any of the array items fullfills given condition
    *
    * @param test   {function}    Callback that is called to test the array item
    * @returns      {tru/false}
    */
	Array.prototype.any = function(test){

		for(var i = 0; i < this.length; i++){
			if(test.call(this, this[i], i)) return true;
		}

		return false;

	}

	Array.prototype.intersect = function(array, on){
		var arr = this;
		
		if(!array) return [];

		return arr.filter(function(outer){

			if(!!on){
				return array.any(function(inner){
					return outer[on] === inner[on];
				});
			}
			else{
				return array.indexOf(outer) > -1;
			}

		});

	}

	Array.prototype.outersect = function(array, on){
		var arr = this;

		if(!array) return this;

		return arr.filter(function(outer){

			if(!!on){
				return !array.any(function(inner){
					return outer[on] === inner[on];
				});
			}
			else{
				return array.indexOf(outer) === -1;
			}

		});

	}

})();