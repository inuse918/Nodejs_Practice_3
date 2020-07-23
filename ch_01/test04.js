const user=require('./user');
function showUser() {
    return (`${user.group.name}, ${user.getUser().name}`);
}
console.log(showUser());

//exports.getUser().name