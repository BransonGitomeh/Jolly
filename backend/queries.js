module.exports = {
          singleObjectQuery:`user(email:samuelDad@gmail.com){
                                  _id
                                  name
                            }`

          ,churchSingleObjectQuery:`church(name:deliverance){
                                                    _id
                                                    name
                                              }`

          ,churchMultipleObjectQuery : `church(range:0-1200) {
                                                                         _id
                                                                         name
                                                                       }`

         ,multipleObjectQuery : `user(range:2-500) {
                                    _id
                                    email
                                    name
                                  }`

          ,makeAdminMutation : `user[makeAdmin]{
                name:branson
                age:20
                promoter:user72546829
              }`

          ,AddFieldMutation : `user[AddField]{
                    name:branson
                    age:20
                    promoter:user72546829
                  }`

          ,CreateMutation : `user[Create]{
                    email:anotherNewUser@gmail.com
                    firstname:hisName
                    middlename:hisMiddlename
                    lastname:Kush
                    age:16
                  }`

          ,EditMutation : `user[Edit]{
                            email:sirbranson67@gmail.com
                            firstname:branson
                            middlename:Gitomeh
                            lastname:Kuria
                            age:21
                            lover:caroline
                          }`

         ,DeleteMutation : `user[Delete]{
                            email:sirbranson67@gmail.com
                          }`
}
