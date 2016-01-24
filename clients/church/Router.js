// try to import mithril
var m = require("mithril")
var render = require("mithril-node-render")

var myApp = {
	view:function(){
		return m("div","i am being rendered here")
	}
}

console.log(render(myApp))

m.route.mode = "hash";

m.route(document.body,"/",{
	"/":require("./app/pages/homepage"),
	"/AboutUs":require("./app/pages/aboutus"),
	"/ministries/Children":require("./app/pages/ministries/children"),
	"/ministries/youth":require("./app/pages/ministries/youth"),
	"/ministries/men":require("./app/pages/ministries/mens"),
	"/ministries/wemen":require("./app/pages/ministries/wemens"),
	"/onlineChurch":require("./app/pages/onlineChurch"),
	"/contactus":require("./app/pages/contactus"),
	"/ministries":require("./app/pages/ministries"),

	// online church
	"/onlineChurch/felowship":require("./app/pages/onlineChurch/felowship"),
	"/onlineChurch/service":require("./app/pages/onlineChurch/service"),
	"/onlineChurch/ministries":require("./app/pages/onlineChurch/ministries"),

	// giving
	"/onlineChurch/giving":require("./app/pages/onlineChurch/giving"),
		"/onlineChurch/giving/offering":require("./app/pages/onlineChurch/giving/offering"),
		"/onlineChurch/giving/thanksgiving":require("./app/pages/onlineChurch/giving/thanksgiving"),
		"/onlineChurch/giving/tithe":require("./app/pages/onlineChurch/giving/tithe"),
		"/onlineChurch/giving/loveoffering":require("./app/pages/onlineChurch/giving/loveoffering"),
		"/onlineChurch/giving/firstfruits":require("./app/pages/onlineChurch/giving/firstfruits"),
		"/onlineChurch/giving/development":require("./app/pages/onlineChurch/giving/development")
})
