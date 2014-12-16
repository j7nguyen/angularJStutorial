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
	
	app.controller('ReviewController', function() {
		this.review = {};
		
		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		}
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
					author: "bigguy@ether.com",
					createdOn: 1418773639384
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