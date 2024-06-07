// BEGIN
function getChildren(users) {
    return users.map(user => user.children).flat();
}

export default getChildren;

// END