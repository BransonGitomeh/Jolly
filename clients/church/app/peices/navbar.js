var navItem = require("./navItem")

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
