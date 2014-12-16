(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller('PanelController', function() {
		this.tab = 1;
		
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});
	
	app.controller('GalleryController', function() {
		this.current = 0;
		
		this.setCurrent = function(selection) {
			this.current = selection;
		};
		
		
	});
	
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: '...',
			canPurchase: true,
			soldOut: false,
			images: [
				"images/dd1.jpeg"
			],
			reviews: [
				{
					stars: 4,
					body: "This was a great gem!",
					author: "bigguy@ether.com"
				}
			]
		},
		{
			name: "Pentagonal Gem",
			price: 5.95,
			description: '...',
			canPurchase: true,
			images: []
		}
	]
	

})();