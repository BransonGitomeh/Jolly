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
