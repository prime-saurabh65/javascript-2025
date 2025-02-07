const accountId = 144553
let accountEmail = "saurabh@google.com"
var accountPassword = "12345"
accountCity = "Sitamarhi"
let accountState;


// accountId = 2 //not allowed

accountEmail = "st@st.com"
accountPassword = "112112"

console.log(accountId)

/*
prefer not to use var
because of its issue with scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])