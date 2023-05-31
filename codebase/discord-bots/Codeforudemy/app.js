let user = {
    name : "Erik",
    age : 26,
    hobbies : ["skiing", "computers", "cars"]
}

// Create an array of objects.. such as guildmembers
let members = [
    {
        id : 2354234,
        joinedTimestamp: 8324823843284
    },{
        id : 2354232,
        joinedTimestamp: 4543543543534
    }
]

console.log(user.name);

console.log(members.id);

for (let i = 0; i < members.length; i++){
    console.log(members[i].id);
}