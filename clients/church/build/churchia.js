/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	m.route.mode = "hash";

	m.route(document.body,"/",{
		"/":__webpack_require__(2),
			"/AboutUs":__webpack_require__(12),
			"/ministries/Children":__webpack_require__(13),
			"/ministries/youth":__webpack_require__(14),
			"/ministries/men":__webpack_require__(15),
			"/ministries/wemen":__webpack_require__(16),
			"/onlineChurch":__webpack_require__(17),
			"/contactus":__webpack_require__(18),
			"/ministries":__webpack_require__(20),

		// online church
		"/onlineChurch/felowship":__webpack_require__(21),
		"/onlineChurch/service":__webpack_require__(22),
		"/onlineChurch/ministries":__webpack_require__(23),

		// giving
		"/onlineChurch/giving":__webpack_require__(24),
			"/onlineChurch/giving/offering":__webpack_require__(25),
			"/onlineChurch/giving/thanksgiving":__webpack_require__(26),
			"/onlineChurch/giving/tithe":__webpack_require__(27),
			"/onlineChurch/giving/loveoffering":__webpack_require__(28),
			"/onlineChurch/giving/firstfruits":__webpack_require__(29),
			"/onlineChurch/giving/development":__webpack_require__(30)
	})


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);
	var hero = __webpack_require__(6);
	var fancypics = __webpack_require__(7);
	var footer = __webpack_require__(5);
	var topbar = __webpack_require__(9);
	var infocard = __webpack_require__(11)

	// var m = require("mithril")


	module.exports = {
	  view:function(){
	      return [
	          m(topbar),

	          // m(hero),
	          // custom component with unique content per page
	          m(".row",[

	            m(".col l9",[
	              m("br"),
	              m("br"),
	            // slider here
	                m("div",{
	                  id:"slider",
	                  config:function(){
	                    var slider = new IdealImageSlider.Slider('#slider');
	                  	slider.start();
	                  }
	                },[
	                  m("img",{src:"/build/assets/img/1.jpg",alt:"slide 1"}),
	                  m("img",{src:"/build/assets/img/1.jpg",alt:"slide 1"}),

	                  // m("img",{src:"/build/assets/img/2.png",alt:"slide 1"}),
	                  // m("img",{src:"/build/assets/img/3.png",alt:"slide 1"}),
	                  // m("img",{src:"img/4.jpg",alt:"slide 1"}),
	                  // m("img",{src:"img/5.jpg",alt:"slide 1"})
	                ]),

	            ]),

	            m(".col l3 ",[
	              m("br"),
	              m("br"),
	              m(".card-panel",[
	                m("h5",{class:"center"},"Events"),
	                m("ul",{class:"table-of-contents"},[
	                  m("li",[
	                    m("a",{class:"active"},"Event happening on 20th of may, Please avail yourselves!")
	                  ])
	                ])
	              ])
	            ]),

	            m("div",{class:"col l12"},[
	              m("br"),
	              m(".divider"),
	              m("h5","Upcoming Events"),
	              m(".divider"),

	              m(".row",[
	                m(".col l3",[
	                  m(infocard,{
	                    cardLink:"/aweosme",
	                    url:"/build/assets/img/icons/worship.jpg",
	                    text:"Seminars"
	                  })
	                ]),
	                 m(".col l3",[
	                   m(infocard,{
	                    cardLink:"/aweosme",
	                    url:"/build/assets/img/icons/worship.jpg",
	                    text:"Keshas"
	                  })
	                ]),
	                m(".col l3",[
	                   m(infocard,{
	                    cardLink:"/aweosme",
	                    url:"/build/assets/img/icons/worship.jpg",
	                    text:"Meetings"
	                  })
	                ]),
	                m(".col l3",[
	                   m(infocard,{
	                    cardLink:"/aweosme",
	                    url:"/build/assets/img/icons/worship.jpg",
	                    text:"Celebrations"
	                  })
	                ]),

	              ]),
	            ]),

	            m("div",{class:"col l12"},[
	                          m(".divider"),
	                          m("h5","Recent News"),
	                          m(".divider"),

	                          m(".row",[
	                            m(".col l3",[
	                              m(infocard,{
	                                cardLink:"/aweosme",
	                                url:"/build/assets/img/icons/worship.jpg",
	                                text:"Development"
	                              })
	                            ]),
	                             m(".col l3",[
	                               m(infocard,{
	                                cardLink:"/aweosme",
	                                url:"/build/assets/img/icons/worship.jpg",
	                                text:"Ministry"
	                              })
	                            ]),
	                            m(".col l3",[
	                               m(infocard,{
	                                cardLink:"/aweosme",
	                                url:"/build/assets/img/icons/worship.jpg",
	                                text:"Youth"
	                              })
	                            ]),
	                            m(".col l3",[
	                               m(infocard,{
	                                cardLink:"/aweosme",
	                                url:"/build/assets/img/icons/worship.jpg",
	                                text:"Announcements"
	                              })
	                            ]),

	                          ]),
	                        



	                        ])
	          ]),

	          m(footer)
	      ]
	  }
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var navItem = __webpack_require__(4)

	module.exports = {
	        view:function(){
	            return m("div",[
	                m("nav",{
	                    class:color
	                },[
	                    m(".containerx",[
	                        m(".nav-wrapper",[


	                            m("ul",{
	                              class:"hide-on-med-and-down",
	                              config:function(){
	                                $('.dropdown-button').dropdown({
	                                   inDuration: 300,
	                                   outDuration: 225,
	                                   constrain_width: false, // Does not change width of dropdown to that of the activator
	                                   alignment: 'left',
	                                   hover: true, // Activate on hover
	                                   gutter: 0, // Spacing from edge
	                                   belowOrigin: true // Displays dropdown below the button
	                                 });
	                              },
	                            },[
	                                m(navItem,{ name:"Login",direction:"right",url:"/loginSelect",dropId:"portals" }),
	                                m(navItem,{ name:"Contact Us",direction:"right",url:"/contactus" }),
	                                m(navItem,{ name:"Online Church",direction:"right",url:"/onlineChurch",dropId:"onlineChurch"}),

	                                m(navItem,{ name:"Home", direction:"left",url:"/" }),
	                                m(navItem,{ name:"About Us",direction:"left",url:'/AboutUs',dropId:"aboutUs" }),
	                                m(navItem,{ name:"Ministries",direction:"left",url:"/ministries", dropId:"ministries" }),


	                                m("ul",{ //dropdown list
	                                  class:"dropdown-content",
	                                  id:"aboutUs"
	                                },[

	                                  m(navItem,{ name:"Gospel"}),
	                                  m(navItem,{ name:"History"}),
	                                  m(navItem,{ name:"Leadership"}),
	                                  m(navItem,{ name:"What we teach"})
	                                ]),

	                                m("ul",{ //dropdown list
	                                  class:"dropdown-content",
	                                  id:"portals"
	                                },[

	                                  m(navItem,{ name:"Church Members Portal"}),
	                                  m(navItem,{ name:"Pastorial Portal"})
	                                ]),

	                                m("ul",{ //dropdown list
	                                  class:"dropdown-content",
	                                  id:"ministries"
	                                },[

	                                  m(navItem,{ name:"Children Ministry",url:"/ministries/Children"}),
	                                  m(navItem,{ name:"Youth Ministry",url:"/ministries/youth"}),
	                                  m(navItem,{ name:"Mens Ministry",url:"/ministries/men"}),
	                                  m(navItem,{ name:"Women Ministry",url:"/ministries/wemen"}),
	                                ]),

	                                m("ul",{ //dropdown list
	                                  class:"dropdown-content",
	                                  id:"onlineChurch"
	                                },[

	                                  m(navItem,{ name:"Fellowship",url:"/onlineChurch/felowship"}),
	                                  m(navItem,{ name:"Service",url:"/onlineChurch/service"}),
	                                  m(navItem,{ name:"Ministries",url:"/onlineChurch/ministries"}),
	                                  m(navItem,{ name:"Giving",url:"/onlineChurch/giving"}),
	                                ])
	                            ]),

	                            m("ul",{class:"side-nav", id:"side-nav"},[
	                              m(navItem,{ name:"Home",url:"/" }),
	                              m(navItem,{ name:"About Us",url:'/AboutUs' }),
	                              m(navItem,{ name:"Online Church",url:'/onlineChurch'}),

	                              m(navItem,{ name:"Children Ministry",url:"/ministries/Children"}),
	                              m(navItem,{ name:"Youth Ministry",url:"/ministries/youth"}),
	                              m(navItem,{ name:"Mens Ministry",url:"/ministries/men"}),
	                              m(navItem,{ name:"Women Ministry",url:"/ministries/wemen"}),

	                              m(navItem,{ name:"Online Church",url:"/onlineChurch"}),

	                              m(navItem,{ name:"Contact Us",url:"/contactus" }),
	                            ]),

	                            m("a",{
	                                class:"button-collapse",
	                                "data-activates":"side-nav",
	                                config:function(){
	                                    $(".button-collapse").sideNav({
	                                      edge: 'left', // Choose the horizontal origin
	                                      closeOnClick: true
	                                    });
	                                }
	                            },[
	                                m("i",{class:"mdi-navigation-menu"})
	                            ])
	                        ])
	                    ])
	                ])
	            ])
	        }
	    };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var navbar = __webpack_require__(3)

	module.exports = {
	        view:function(ctrl,args){
	            return m("li",{
	              class:args.direction + " dropdown-button " + (m.route() === args.url ? "active" : ""),
	              "data-activates":args.dropId
	          },[
	                m("a",{
	                  href:args.url,
	                  config:m.route
	                },args.name,[
	                  (args.dropId ? m("i",{class:"mdi-navigation-arrow-drop-down right"})  : m("span"))
	                ])
	            ])
	        }
	    }


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports={
	        view:function(){
	            return m("footer",{class:"page-footer " + primaryColor},[
	                m(".container",[
	                    m(".row center",[

	                        m(".col l5 s12 white-text",[
	                            m("h5",{class:"center"},"Help The Gathering Church Grow"),

	                            m("p","We hope you have enjoyed Our Church Services! If you feel The Gathering Church has helped you out and want to support Our team, send us over a donation! Any amount would help support and continue development on this Church and is greatly appreciated."),

	                            // m("button",{class:"center btn waves-effect waves-light red " + primaryColor},"Donate Now")
	                        ]),

	                        m(".col l4 s12 white-text",[
	                            m("h5",{class:"center"},"Join Our Discussion"),

	                            m("p","At the gathering church we love hearing the voices of our congregation, please join us and tell us what you feel, or what you want for the church"),

	                            m("button",{class:"btn waves-effect waves-light red " + color},"Chat")

	                        ]),

	                        m(".col l3 s12 white-text",[
	                            m("h5",{class:"center"},"Connect"),

	                            m("button",{class:"btn waves-effect waves-light red " + color},"Facebook"),

	                            m("button",{class:"btn waves-effect waves-light red " + color},"Twitter"),

	                            m("button",{class:"btn waves-effect waves-light red " + color},"Google+"),

	                            m("button",{class:"btn waves-effect waves-light red " + color},"InstaGram")


	                        ]),

	                    ])
	                ]),

	                m(".footer-copyright container",[
	                        "Copyright © " + config.settings.installationYear + "-" + config.settings.currentYear + ", All rights reserved." + config.profile.churchName,[
	                            m("span",{class:"right"}," <SSC: 0.0.3/>")
	                        ]
	                ])
	            ])
	        }
	    }


/***/ },
/* 6 */
/***/ function(module, exports) {

	function initHero(){

	    $('.button-collapse').sideNav();
		  $('.scrollspy').scrollSpy();

	    /*** Animate word ***/

	    //set animation timing
		var animationDelay = 2500,
			//loading bar effect
			barAnimationDelay = 3800,
			barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
			//letters effect
			lettersDelay = 50,
			//type effect
			typeLettersDelay = 150,
			selectionDuration = 500,
			typeAnimationDelay = selectionDuration + 800,
			//clip effect
			revealDuration = 600,
			revealAnimationDelay = 1500;

		initHeadline();


		function initHeadline() {
			singleLetters($('.cd-headline.letters').find('b'));
			animateHeadline($('.cd-headline'));
		}

		function singleLetters($words) {
			$words.each(function(){
				var word = $(this),
					letters = word.text().split(''),
					selected = word.hasClass('is-visible');
				for (i in letters) {
					if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
					letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
				}
			    var newLetters = letters.join('');
			    word.html(newLetters).css('opacity', 1);
			});
		}

		function animateHeadline($headlines) {
			var duration = animationDelay;
			$headlines.each(function(){
				var headline = $(this);

				if(headline.hasClass('loading-bar')) {
					duration = barAnimationDelay;
					setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
				} else if (headline.hasClass('clip')){
					var spanWrapper = headline.find('.cd-words-wrapper'),
						newWidth = spanWrapper.width() + 10
					spanWrapper.css('width', newWidth);
				} else if (!headline.hasClass('type') ) {
					//assign to .cd-words-wrapper the width of its longest word
					var words = headline.find('.cd-words-wrapper b'),
						width = 0;
					words.each(function(){
						var wordWidth = $(this).width();
					    if (wordWidth > width) width = wordWidth;
					});
					headline.find('.cd-words-wrapper').css('width', width);
				};

				//trigger animation
				setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
			});
		}

		function hideWord($word) {
			var nextWord = takeNext($word);

			if($word.parents('.cd-headline').hasClass('type')) {
				var parentSpan = $word.parent('.cd-words-wrapper');
				parentSpan.addClass('selected').removeClass('waiting');
				setTimeout(function(){
					parentSpan.removeClass('selected');
					$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
				}, selectionDuration);
				setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

			} else if($word.parents('.cd-headline').hasClass('letters')) {
				var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
				hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
				showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

			}  else if($word.parents('.cd-headline').hasClass('clip')) {
				$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
					switchWord($word, nextWord);
					showWord(nextWord);
				});

			} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
				$word.parents('.cd-words-wrapper').removeClass('is-loading');
				switchWord($word, nextWord);
				setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
				setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

			} else {
				switchWord($word, nextWord);
				setTimeout(function(){ hideWord(nextWord) }, animationDelay);
			}
		}

		function showWord($word, $duration) {
			if($word.parents('.cd-headline').hasClass('type')) {
				showLetter($word.find('i').eq(0), $word, false, $duration);
				$word.addClass('is-visible').removeClass('is-hidden');

			}  else if($word.parents('.cd-headline').hasClass('clip')) {
				$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
					setTimeout(function(){ hideWord($word) }, revealAnimationDelay);
				});
			}
		}

		function hideLetter($letter, $word, $bool, $duration) {
			$letter.removeClass('in').addClass('out');

			if(!$letter.is(':last-child')) {
			 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
			} else if($bool) {
			 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
			}

			if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
				var nextWord = takeNext($word);
				switchWord($word, nextWord);
			}
		}

		function showLetter($letter, $word, $bool, $duration) {
			$letter.addClass('in').removeClass('out');

			if(!$letter.is(':last-child')) {
				setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
			} else {
				if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
				if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
			}
		}

		function takeNext($word) {
			return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
		}

		function takePrev($word) {
			return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
		}

		function switchWord($oldWord, $newWord) {
			$oldWord.removeClass('is-visible').addClass('is-hidden');
			$newWord.removeClass('is-hidden').addClass('is-visible');
		}

		$('.button-collapse').sideNav({
			menuWidth: 240, // Default is 240
			closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		});

		$('.parallax').parallax();

		var card  = document.querySelectorAll('.card-work');
	  	var transEndEventNames = {
		      'WebkitTransition' : 'webkitTransitionEnd',
		      'MozTransition'    : 'transitionend',
		      'transition'       : 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

		function addDashes(name) {
			return name.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); });
		}

		function getPopup(id) {
			return document.querySelector('.popup[data-popup="' + id + '"]');
		}

		function getDimensions(el) {
		   return el.getBoundingClientRect();
		}

		function getDifference(card, popup) {
			var cardDimensions = getDimensions(card),
		    	popupDimensions = getDimensions(popup);

			return {
			  	height: popupDimensions.height / cardDimensions.height,
			  	width: popupDimensions.width / cardDimensions.width,
			  	left: popupDimensions.left - cardDimensions.left,
			  	top: popupDimensions.top - cardDimensions.top
			}
		}

		function transformCard(card, size) {
			return card.style[Modernizr.prefixed('transform')] = 'translate(' + size.left + 'px,' + size.top + 'px)' + ' scale(' + size.width + ',' + size.height + ')';
		}

		function hasClass(elem, cls) {
		    var str = " " + elem.className + " ";
		    var testCls = " " + cls + " ";
		    return(str.indexOf(testCls) != -1) ;
		}

		function closest(e) {
		   var el = e.target || e.srcElement;
		    if (el = el.parentNode) do { //its an inverse loop
		        var cls = el.className;
		        if (cls) {
		            cls = cls.split(" ");
		            if (-1 !== cls.indexOf("card-work")) {
		                return el;
		                break;
		            }
		        }
		    } while (el = el.parentNode);
		}

		function scaleCard(e) {
			var el = closest(e);
			var target = el,
			    id     = target.getAttribute('data-popup-id'),
			    popup  = getPopup(id);

			var size = getDifference(target, popup);

		   	target.style[Modernizr.prefixed('transitionDuration')] = '0.5s';
		   	target.style[Modernizr.prefixed('transitionTimingFunction')] = 'cubic-bezier(0.4, 0, 0.2, 1)';
		   	target.style[Modernizr.prefixed('transitionProperty')] = addDashes(Modernizr.prefixed('transform'));
		   	target.style['borderRadius'] = 0;

		  	transformCard(target, size);
		  	onAnimated(target, popup);
		  	onPopupClick(target, popup);
		}

		function onAnimated(card, popup) {
		 	card.addEventListener(transEndEventName, function transitionEnded() {
		   		card.style['opacity'] = 0;
		   		popup.style['visibility'] = 'visible';
		   		popup.style['zIndex'] = 9999;
		   		card.removeEventListener(transEndEventName, transitionEnded);
		 	});
		}

		function onPopupClick(card, popup) {
			popup.addEventListener('click', function toggleVisibility(e) {
			  	var size = getDifference(popup, card);

			  	card.style['opacity'] = 1;
			  	card.style['borderRadius'] = '6px';
			  	hidePopup(e);
			  	transformCard(card, size);
			}, false);
		}


		function hidePopup(e) {
			e.target.style['visibility'] = 'hidden';
			e.target.style['zIndex'] = 2;
		}

		// [].forEach.call(card, function(card) {
		// 	card.addEventListener('click', scaleCard, false);
		// });

		}; // end of document ready
	 // end of jQuery name space


	module.exports = {
	        view:function(){
	            return m("div",{
	              class:"section no-pad-bot " + color,
	              id:"index-banner",
	              config:function(){
	                //initialize the hero code, since there is no onDocumentReady
	                initHero();
	              }
	            },[
	                m(".container",[
	                    m("h2",{class:"text_h center header cd-headline letters type"},[
	                        // m("span","We love "),
	                        m("span",{class:"cd-words-wrapper waiting"},[
	                            m("b",{class:"is-visible"},config.profile.churchName),
	                            config.profile.slogans.map(function(slogan){
	                				return m("b",slogan)
	            				})
	                        ])

	                    ]),

	                    m(".row center",[
	                      m("a",{
	                        class:"btn-large waves-effect waves-light " + "orange",
	                        href:"/getStarted"
	                      },"Join Us Now!")
	                    ])

	                ])
	            ])
	        }
	    }


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var pics = [
	  {tagline:"Pic1",subTagline:"Pastor and wife",url:"http://lorempixel.com/580/250/nature/1"},
	  {tagline:"Pic2",subTagline:"All Pastors in that church",url:"http://lorempixel.com/580/250/nature/1"},
	  {tagline:"Pic3",subTagline:"Congregation on last service",url:"http://lorempixel.com/580/250/nature/1"}
	]

	module.exports = {
	        view:function(ctrl,args){
	            return m(".slider",{
	              config:function(){
	                $('.slider').slider({
	                  Transition:"500",
	                  Interval:"20"
	                })
	              }
	            },[
	              m("ul",{class:"slides"},[
	                pics.map(function(pic){
	                  return m(__webpack_require__(8),{
	                    tagline:pic.tagline,
	                    subTagline:pic.subTagline,
	                    url:pic.url
	                  })
	                })
	              ])
	            ])
	        }
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m("li",[
	      m("img",{src:args.url}),
	      m(".caption center-align",[
	        m("h3",args.tagline),
	        m("h5",{class:"light grey-text text-lighten-3"},args.subTagline)
	      ])
	    ])
	  }
	}









	// m("div",[
	//   m("div",{id:"thumbnail-slider"},[
	//     m("div",{class:"inner"},[
	//       m("ul",[
	//         m("li",[
	//           m("a",{class:"thumb",href:"img/4.jpg"})
	//         ]),
	//         m("li",[
	//           m("a",{class:"thumb",href:"img/1.jpg"})
	//         ]),
	//         m("li",[
	//           m("a",{class:"thumb",href:"img/3.jpg"})
	//         ]),
	//         m("li",[
	//           m("a",{class:"thumb",href:"img/4.jpg"})
	//         ]),
	//         m("li",[
	//           m("a",{class:"thumb",href:"img/5.jpg"})
	//         ]),
	//         m("li",[
	//           m("a",{class:"thumb",href:"img/6.jpg"})
	//         ])
	//       ])
	//     ])
	//   ])
	// ]),


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(3);
	var map = __webpack_require__(10);

	module.exports={
	        view:function(){
	            return  m("header",[
	              m("div",{id:"index-banner",class:"section no-pad-bot " + color + " hide-on-med-and-down"},[
	                    m(".container row center-on-small-only ",[
	                      // logo area
	                      m(".col l3 s12 white-text center-align",[
	                        m("br"),
	                        m("img",{
	                          class:"materialboxed",
	                          "data-caption":"Our Sanctuary",
	                          width:"250",
	                          src:"/build/assets/img/orgFace/gathering_logo.png",
	                          config:function(){
	                            $('.materialboxed').materialbox();
	                          }
	                        }),
	                      ]),

	                      // services
	                      m(".col l3 s12 white-text",[
	                          m("h5","Sunday services"),
	                          m(".divider"),
	                          // m("p","Sunday morning worship",[
	                          //   m("b",": 8.00am"),
	                          //   m("span"," to "),
	                          //   m("b","8.00pm "),
	                          // ]),
	                          // m("p","Sunday evening worship",[
	                          //   m("b",": 6.00pm")
	                          // ])
	                      ]),

	                      // location
	                      m(".col l3 s12 white-text",[
	                          m("h5","Location"),
	                          m(".divider"),
	                          // m("p","78024 joska")
	                          m(map,{location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.815598306964!2d37.093902214421924!3d-1.2845778990630647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x52c11944d2787634!2sJoska+Kangundo+RD!5e0!3m2!1sen!2ske!4v1453728814983"})

	                      ]),

	                      // Contact
	                      m(".col l3 s12 white-text",[
	                          m("h5","Contact"),
	                          m(".divider"),
	                          // m("p","Pastor: 0711122523")
	                      ]),
	                    ])
	                  ]),
	                  m(navbar),
	            ])


	        }
	    }


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m("iframe",{
	      frameborder:"0",
	      scrolling:"no",
	      marginheight:"0",
	      marginwidth:"0",
	      width: "100%",
	      height: "100%",
	      src: args.location
	    })
	  }
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m(".card hoverable",[
	      m("a",{
	        href:args.cardLink,
	        config:m.route
	      },[
	          m(".card-image waves-effect waves-block waves-light",[
	            m("img",{
	              class:"activator",
	              src:args.url
	            })
	          ]),

	          m(".card-content",[
	            m("span",{class:"card-title activator grey-text text-darken-4"},args.text)
	          ])
	      ]),



	    ])
	  }
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var navbar = __webpack_require__(3)
	var topbar = __webpack_require__(9)

	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row card-panel",[
	                  m("h1","about us"),

	                  // image of the church

	                  m(".col l3",[
	                    m(".tabs-wrapper .row",{
	                    },[
	                      m("img",{
	                        class:"materialboxed",
	                        "data-caption":"Our Sanctuary",
	                        width:"250",
	                        src:"http://jiarelief.org/wp-content/uploads/2013/05/Murrell-Ewing-Childrens-Home-11x17.jpg",
	                        config:function(){
	                          $('.materialboxed').materialbox();
	                        }
	                      }),

	                      m("blockquote",{class:"card-panel flow-text"},"We are closely affiliated with the",[
	                        m(".blue-text","Jordan international Aid"),
	                        m("div","and above is a model of the dream church that we are building at Joska")
	                      ])
	                    ]),


	                     m(__webpack_require__(10),{
	                       location:"https://maps.google.com/maps?hl=en&q=Joska, Nairobi City, Kenya&ie=UTF8&t=roadmap&z=14&iwloc=B&output=embed",
	                       height:"440",
	                       width:"650"
	                     })

	                  ]),

	                  m(".col l9",[
	                    m(".card-panel",[
	                      m("h3",{class:"center"},"About Us"),
	                      m(".row",[

	                        // the core values
	                        m(".col l6",[
	                          m("h5",{class:"center"},"Our Core Values"),

	                            m("ol",[

	                              m("li",[
	                                m("b","BUILDING RELATIONSHIPS - "),
	                                m("i","We live life with people")
	                              ]),

	                              m("br"),

	                              m("li",[
	                                m("b","RESTORING LIVES  - "),
	                                m("i","It is ever too late to be what God has designed us to be")
	                              ]),

	                               m("br"),

	                              m("li",[
	                                m("b","SHARING CHRIST  - "),
	                                m("i","It is ever too late to be what God has designed us to be")
	                              ]),

	                               m("br"),

	                              m("li",[
	                                m("b","LIVING CHRIST CENTERED  - "),
	                                m("i","It is ever too late to be what God has designed us to be")
	                              ])
	                            ])

	                        ]),

	                        // the Mission Statement

	                        m(".col l6",[
	                          m("h5",{class:"center"},"Our Mission statement"),

	                          m("p","We exist to lead people to become fully committed Disciples of Christ"),

	                          m("h6","OUR CORE FOUR"),

	                          m("ol",[

	                            m("li",[
	                                m("b","Building"),
	                            ]),
	                            m("li",[
	                                m("b","Unity"),
	                            ]),
	                            m("li",[
	                                m("b","Teaching"),
	                            ]),
	                            m("li",[
	                                m("b","Favor"),
	                            ])
	                          ])

	                        ]),

	                        m(".col l12",[
	                            m("h4",{class:"center"},"Our Goals and  Objectives"),

	                            m("h5",{class:"center"},"1. Scale up growth in gathering church"),

	                            // objective 1
	                            m("u","Objective 1 - To increase Gathering  Church membership from the current figure of 50 to 200 in 2016"),

	                            // table with arranged content
	                            m("table",{class:"bordered striped highlight hoverable"},[
	                              m("thead",[
	                                m("th","Expected Outcome "),
	                                m("th","Specific Objectives: ")
	                              ]),
	                              m("tbody",[
	                                m("td","A broad church membership"),
	                                m("td",[
	                                  m("ol",[
	                                    m("li",[
	                                      m("span","To train the Leaders and co-workers on "),m("br"),
	                                      m("span","Church management skills")
	                                    ]),
	                                    m("li","To start training the pastoral team.")
	                                  ])
	                                ])
	                              ])
	                            ]),

	                            // objective 2
	                            m("u","Objective 2 - To groom and nurture the younger generation"),

	                            // table with arranged content
	                            m("table",{class:"bordered striped highlight hoverable"},[
	                              m("thead",[
	                                m("th","Expected Outcome "),
	                                m("th","Specific Objectives: ")
	                              ]),
	                              m("tbody",[
	                                m("td",[
	                                  m("span","A Godly younger generation in all societal institutions,"),m("br"),
	                                  m("b","(education, government and other sectors of economy.)")
	                                ]),

	                                m("td",[
	                                  m("ol",[
	                                    m("li","To develop dynamic, attractive and friendly programs"),
	                                    m("li","to train children workers."),
	                                    m("li","Rites of passage – develop a church programme to provide this important service")
	                                  ])
	                                ])
	                              ])
	                            ]),

	                          // objective 3
	                           m("u","Objective 3 - To increase attendance and participation of youths in Gathering Church"),

	                            // table with arranged content
	                            m("table",{class:"bordered striped highlight hoverable"},[
	                              m("thead",[
	                                m("th","Expected Outcome "),
	                                m("th","Specific Objectives: ")
	                              ]),
	                              m("tbody",[
	                                m("td",[
	                                  m("span","A Godly younger generation in Gathering Church,"), //m("br"),
	                                  // m("b","(education, government and other sectors of economy.)")
	                                ]),

	                                m("td",[
	                                  m("ol",[
	                                    m("li","To intensify our outreach to schools (Primary and secondary), colleges and universities in Joska Town"),
	                                    m("li","To establish sport evangelism "),
	                                    m("li","To reach the touts and motorcycle riders"),
	                                    m("li","To start/ initiate  entertainment and media programmes"),
	                                    m("li","To initiate youth services in Gathering Church "),

	                                  ])
	                                ])
	                              ])
	                            ]),

	                          // objective 4
	                           m("u","Objective 4 - To have an effective evangelism and outreach ministry at all departments"),

	                            // table with arranged content
	                            m("table",{class:"bordered striped highlight hoverable"},[
	                              m("thead",[
	                                m("th","Expected Outcome "),
	                                m("th","Specific Objectives: ")
	                              ]),
	                              m("tbody",[
	                                m("td",[
	                                  m("span","Establish a fully equipped evangelistic team for evangelism"), //m("br"),
	                                  // m("b","(education, government and other sectors of economy.)")
	                                ]),

	                                m("td",[
	                                  m("ol",[
	                                    m("li","To Train all members on evangelism and discipleship"),
	                                    m("li","To establish sport evangelism "),
	                                    m("li","To have a very strong discipleship department"),
	                                    m("li","To train all members on how to use the four spiritual laws")
	                                  ])
	                                ])
	                              ])
	                            ]),

	// objective 4
	                           m("u","Objective 5 -  To establish 10 cells  in 2016 within the church"),

	                            // table with arranged content
	                            m("table",{class:"bordered striped highlight hoverable"},[
	                              m("thead",[
	                                m("th","Expected Outcome "),
	                                m("th","Specific Objectives: ")
	                              ]),
	                              m("tbody",[
	                                m("td",[
	                                  m("span","Cell group ministry Members identify with a cell group"), //m("br"),
	                                  // m("b","(education, government and other sectors of economy.)")
	                                ]),

	                                m("td",[
	                                  m("ol",[
	                                    m("li","To Train all members on evangelism and discipleship"),
	                                    m("li","To Train all members on small group dynamics Church leadership to continuously give cell group topical study"),
	                                    m("li","To train members on the use of life studies materials")
	                                  ])
	                                ])
	                              ])
	                            ]),

	                            m("img",{
	                            class:"materialboxed",
	                            "data-caption":"Our Sanctuary",
	                            width:"250",
	                            src:"/app/images/organogram.png",
	                            config:function(){
	                              $('.materialboxed').materialbox();
	                            }
	                          }),

	                            m(".divider"),

	                            m("div",[
	                              m("span",[
	                                m("span","more goals can be downloaded from here"),

	                              ])
	                            ])







	                        ])
	                      ])
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)

	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","ministry exapmple pics for each ministry category *pandora-like grid*")

	                  ]),

	                  m(".col l7",[
	                    m(".card-panelx",[
	                      m("h3","Children Ministry Article"),
	                      // m(".black-text","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.")
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)
	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","ministry exapmple pics for each ministry category *pandora-like grid*")

	                  ]),

	                  m(".col l7",[
	                    m(".card-panelx",[
	                      m("h3","Youth Article"),
	                      // m(".black-text","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.")
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)
	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","ministry exapmple pics for each ministry category *pandora-like grid*")

	                  ]),

	                  m(".col l7",[
	                    m(".card-panelx",[
	                      m("h3","Mens Article"),
	                      // m(".black-text","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.")
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)
	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","ministry exapmple pics for each ministry category *pandora-like grid*")

	                  ]),

	                  m(".col l7",[
	                    m(".card-panelx",[
	                      m("h3","Women Ministry Article"),
	                      // m(".black-text","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.")
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)
	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".card-panel",[
	                  m("h1","online church")
	                ]),
	                // custom component with unique content per page
	                m(footer)
	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)
	var contactForm = __webpack_require__(31)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row",[
	                  // m("h1","about us")
	                  // m(".col s12 l5",[
	                  //   // m("div","good welcoming picture to show we will respond")
	                  //    m("img",{
	                  //       class:"materialboxed",
	                  //       "data-caption":"Our Sanctuary",
	                  //       src:"/build/assets/img/icons/contactus.jpg",
	                  //       config:function(){
	                  //         $('.materialboxed').materialbox();
	                  //       }
	                  //     }),

	                  // ]),

	                  m(".col s12 l12",[
	                   m(contactForm)
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)
	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)

	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","ministry exapmple pics for each ministry category *pandora-like grid*")

	                  ]),

	                  m(".col l7",[
	                    m(".card-panelx",[
	                      m("h3","Our ministries Article"),
	                      m(".black-text","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.")
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)
	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)
	var infocard = __webpack_require__(11)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","Fellowship")
	                    ]),

	                    m(".col s12 l3",[
	                      m(infocard,{
	                         text:"Children Fellowship",
	                         url:"http://graceinbuckeye.com/wp-content/uploads/childrens-ministry.jpg"
	                        })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Youth Fellowship",
	                        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSok6mZbuzGCUwnzJF9H-pLDYameDi6CRGuLbyBnFzCqXRbvT6K"
	                       })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Mens Fellowship",
	                        url:"http://www.rccgcityofjoy.org/images/men.jpg"
	                       })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Ladies Fellowship",
	                        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8LbluqFescxCvH-RE8gUXQFFiIAztAyfIsB41IlU8cNsYRI8"
	                       })
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)
	var infocard = __webpack_require__(11)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","Service")
	                    ]),

	                    m(".col s12 l3",[
	                      m(infocard,{
	                         text:"Praise and Worship",
	                         url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR4s1FsktwABCO4xGOFlFN7TGJTQotlTyqFhnl97opHLJnH6ETUcg"
	                        })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Prayers",
	                        url:"http://cdn.modernghana.com/images/content/hlco26ree8_praying_hands.jpg"
	                       })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Sermon",
	                        url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEKCBPpU3kLdEjLFrAJvuPSaDC6U822TUN04oBnMeF-8gYhOs9"
	                       })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Online Giving",
	                        url:"https://goaim1.org/cms/wp-content/uploads/2014/01/giving.png"
	                       })
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)

	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)
	var infocard = __webpack_require__(11)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","Ministries")
	                    ]),

	                    m(".col s12 l3",[
	                      m(infocard,{
	                         text:"Children Ministry",
	                         url:"http://graceinbuckeye.com/wp-content/uploads/childrens-ministry.jpg"
	                        })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Youth Ministry",
	                        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSok6mZbuzGCUwnzJF9H-pLDYameDi6CRGuLbyBnFzCqXRbvT6K"
	                       })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Mens Ministry",
	                        url:"http://www.rccgcityofjoy.org/images/men.jpg"
	                       })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Ladies Ministry",
	                        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8LbluqFescxCvH-RE8gUXQFFiIAztAyfIsB41IlU8cNsYRI8"
	                       })
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)

	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)
	var infocard = __webpack_require__(11)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","Giving")
	                    ]),

	                    m(".col s12 l2",[
	                      m(infocard,{
	                         text:"Offering",
	                         url:"http://c.asstatic.com/images/1502925_634804997052043750-1.jpg",
	                         cardLink:"/onlineChurch/giving/offering"
	                        })
	                    ]),
	                    m(".col s12 l2",[
	                      m(infocard,{
	                        text:"Tithe",
	                        url:"http://teachersofgod.org/wp-content/uploads/2013/08/tithing.gif",
	                        cardLink:"/onlineChurch/giving/tithe"
	                       })
	                    ]),
	                    m(".col s12 l2",[
	                      m(infocard,{
	                        text:"First Fruits",
	                        url:"http://www.catholic.org/files/images/ins_news/2013033858.jpg",
	                        cardLink:"/onlineChurch/giving/firstfruits"
	                       })
	                    ]),
	                    m(".col s12 l2",[
	                      m(infocard,{
	                        text:"Love Offering",
	                        cardLink:"/onlineChurch/giving/loveoffering"
	                       })
	                    ]),
	                    m(".col s12 l2",[
	                      m(infocard,{
	                        text:"Thanksgiving",
	                        url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTn3HsXafqJ1BC0JzDqSCStCpcekV7-5Hieg-xuPLm5msKyj_jXSA",
	                        cardLink:"/onlineChurch/giving/thanksgiving"
	                       })
	                    ]),
	                    m(".col s12 l2",[
	                      m(infocard,{
	                        text:"Church Development",
	                        url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRyfNwan0o0gupyaC08HsxePk-17VbrR0d-COfaRKfj_fnfBZOA",
	                        cardLink:"/onlineChurch/giving/development"
	                       })
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)

	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)
	var infocard = __webpack_require__(11)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","Offering")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)
	var infocard = __webpack_require__(11)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","thanksgiving")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)
	var infocard = __webpack_require__(11)


	var queryMeta = {}

	function root(tokens) {
	    queryMeta.type = tokens[0].split(":")[0].split("(")[0];

	    // check if its a single value or a range being asked by the query
	    if(tokens[0].split(":")[0].split("(")[1] === "range"){
	      queryMeta.rangeStart=tokens[0].split(":")[1].split(")")[0].split("-")[0];
	      queryMeta.rangeEnd=tokens[0].split(":")[1].split(")")[0].split("-")[1];
	    }else{
	      queryMeta.param = tokens[0].split(":")[0].split("(")[1];
	      queryMeta.paramValue = tokens[0].split(":")[1].split(")")[0];
	    }

	    queryMeta.fields = fields(tokens, {index:2})

	    return queryMeta;
	}

	function fields(tokens, state) {
	    var res = []
	    console.log(tokens)
	    console.log(state)
	    //look for relation
	    //look for other route thats not a while loop

	    while (tokens[state.index] !== '}') {
	            var index = state.index++
	            if (tokens[state.index + 1] === '{') {
	                console.log("relation detected")
	                res.push(relation(tokens, state))
	            } else {
	                res.push({
	                  type: 'field',
	                  value: tokens[index],
	                  params:tokens[index]
	                })
	            }
	    }
	        state.index++
	        return res
	}

	function relation(tokens, state) {
	    return {
	        type:'relation',
	        name: tokens[(state.index++)],
	        fields: (state.index++ && fields(tokens, state))
	    }
	}

	var re = /\{|\}|[^{}\s]+/g

	function tokenize(query) {
	    var res = [], match
	    while (match = re.exec(query)) res.push(match[0])
	    return res
	}

	var queryString = `user(name:branson){
	                            name
	                            age
	                            avatar(size:50px,shape:roundedEdges)
	                            students{
	                              name
	                              payments{
	                                ammount
	                              }
	                            }
	                  }`


	var MultiqueryString = `student(range:20-30) {
	                            name
	                            age
	                            students{
	                              name
	                              payments{
	                                ammount
	                              }
	                            }
	                        }`


	// var splitable =  "  The quick brown fox jumps over the lazy dog. "




	module.exports = {
	        view:function(){


	            return [
	                // console.log(tokenize(queryString)),
	                console.log(root(tokenize(queryString))),
	                // console.log(queryString.match(/\S+/g)),
	                // console.log("i am parrrrsring"),
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","tithe")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	      }


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)
	var infocard = __webpack_require__(11)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","loveoffering")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)
	var infocard = __webpack_require__(11)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","firstfruits")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(5)
	var topbar = __webpack_require__(9)
	var infocard = __webpack_require__(11)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","development")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var forminput = __webpack_require__(32)

	var contactus={
	    getData:function(){
	      return{
	        name : m.prop(""),
	        age : m.prop(""),
	        email : m.prop(""),
	        location : m.prop(""),
	        phonenumber : m.prop(""),
	        message : m.prop("")
	      }
	    },
	    setData:function(data){
	        // console.log("asked to save");
	        // console.log(data);
	    }
	  };


	module.exports = {
	  

	  controller:function(){
	    var self = this;
	    this.data = contactus.getData();

	    this.save = function(errs){
	      contactus.setData(this.data);
	      console.log(self.data.email());
	    }.bind(this)
	  },

	  view: function(ctrl,args){
	    // return ("div","footer")
	    return  m("form",{
	              id:"form",
	              class:"card-panel row",
	              config:function(){
	                // Extension materialize.css
	                  $.validator.setDefaults({
	                      errorClass: 'invalid',
	                      validClass: "valid",
	                      errorPlacement: function (error, element) {
	                        // alert("form has an err, cant save")
	                        // console.log(error[0].id);
	                          $(element)
	                              .closest("form")
	                              .find("label[for='" + element.attr("id") + "']")
	                              .attr('data-error', error.text());
	                      },
	                      submitHandler: function (form) {
	                        // alert("form is ok saving")
	                          console.log('form ok');
	                          ctrl.save()
	                      }
	                  });

	                  $("#form").validate({
	                      rules: {
	                          dateField: {
	                              date: true
	                          }
	                      }
	                  });
	              },
	            },[
	              m("p",{class:"flow-text center"},"Leave us a Message"),

	              //form inputs
	              // single form input --can be extracted as a component

	              // m("div",ctrl.data.name()),

	              m(forminput,{
	                value:ctrl.data.name,
	                label:"Your Name",
	                type:"text",
	                sizes:"s12 m6 l6"
	              }),

	              m(forminput,{
	                value:ctrl.data.email,
	                label:"Your Email",
	                type:"email",
	                sizes:"s12 m6 l6"
	              }),


	              m(forminput,{
	                value:ctrl.data.location,
	                label:"Your Location",
	                type:"text",
	                sizes:"s12 m6 l6"
	              }),

	              m(forminput,{
	                value:ctrl.data.phonenumber,
	                label:"Your Phone Number",
	                type:"text",
	                sizes:"s12 m6 l6"
	              }),
	              // singe textarea at the end

	              m(forminput,{
	                value:ctrl.data.message,
	                label:"Your message",
	                type:"textarea",
	                sizes:"s12 m6 l12"
	              }),

	              // submit button
	              m(".row",[
	                m(".input-field col s12",[
	                  m("button",{
	                    class:"btn blue waves-effect waves-light right",
	                    type:"submit",
	                    "bubles":false
	                    // onclick:ctrl.save
	                  },"Send",[
	                    m("i",{class:'mdi-content-send right'})
	                  ])
	                ])
	              ])


	            ])
			}
	}



/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,attrs){
	    var textarea =  m("div",{class:"input-field validate  col " + attrs.sizes},[
	      m("textarea[required]",{
	        id:attrs.label,
	        name:attrs.label,
	        type:attrs.type,
	        class:"materialize-textarea",
	        "aria-required":"true",
	        oninput:m.withAttr("value",attrs.value)
	      }),
	      m("label",{for:attrs.label},attrs.label)
	    ]);

	    var input =  m("div",{class:"input-field validate col " + attrs.sizes},[
	      m("input[required]",{
	        id:attrs.label,
	        name:attrs.label,
	        type:attrs.type,
	        "aria-required":"true",
	        oninput:m.withAttr("value",attrs.value)
	      }),
	      m("label",{for:attrs.label},attrs.label)
	    ]);

	    // return what is asked for
	    if(attrs.type === "textarea"){
	      return textarea
	    }else{
	      return input
	    }
	  }
	}


	// (m.route() === attrs.link.url ? 'active': '')


/***/ }
/******/ ]);