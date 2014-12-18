// (function(){
// 	var app = angular.module('store', []);
//
// 	app.controller('StoreController', function() {
// 		this.products = gems;
// 	});
//
// 	app.controller('PanelController', function() {
// 		this.tab = 1;
//
// 		this.selectTab = function(setTab) {
// 			this.tab = setTab;
// 		};
//
// 		this.isSelected = function(checkTab) {
// 			return this.tab === checkTab;
// 		};
// 	});
//
// 	app.controller('GalleryController', function() {
// 		this.current = 0;
//
// 		this.setCurrent = function(selection) {
// 			this.current = selection;
// 		};
//
//
// 	});
//
// 	app.controller('ReviewController', function() {
// 		this.review = {};
//
// 		this.addReview = function(product) {
// 			this.review.createdOn = Date.now();
// 			product.reviews.push(this.review);
// 			this.review = {};
// 		}
// 	});
//
// 	app.directive('productTitle', function() {
// 		return {
// 			restrict: 'E',
// 			templateUrl: 'product-title.html'
// 		};
// 		}
// 	);
//
// 	var gems = [
// 		{
// 			name: 'Dodecahedron',
// 			price: 2.95,
// 			description: '...',
// 			canPurchase: true,
// 			soldOut: false,
// 			images: [
// 				"images/dd1.jpeg"
// 			],
// 			reviews: [
// 				{
// 					stars: 4,
// 					body: "This was a great gem!",
// 					author: "bigguy@ether.com",
// 					createdOn: 1418773639384
// 				}
// 			]
// 		},
// 		{
// 			name: "Pentagonal Gem",
// 			price: 5.95,
// 			description: '...',
// 			canPurchase: true,
// 			images: []
// 		}
// 	]
//
// })();

(function() {
  var app = angular.module('gemStore', []);

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  });

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller("TabController", function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };

  });

  app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: 'product-description.html'
    };
  });

  var gems = [
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
				'images/dd1.jpeg'
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org"
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org"
      }]
    }, {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org"
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org"
      }]
      }, {
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        faces: 6,
        images: [
        ],
        reviews: [{
          stars: 1,
          body: "This gem is WAY too expensive for its rarity value.",
          author: "turtleguyy@example.org"
        }, {
          stars: 1,
          body: "BBW: High Shine != High Quality.",
          author: "LouisW407@example.org"
        }, {
          stars: 1,
          body: "Don't waste your rubles!",
          author: "nat@example.org"
        }]
    }
  ];
})();
