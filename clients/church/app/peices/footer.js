module.exports={
        view:function(){
            return m("footer",{class:"page-footer " + primaryColor},[
                m(".containerx",[
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
                            m("span",{class:"right"}," < app version: 0.0.1 />")
                        ]
                ])
            ])
        }
    }
