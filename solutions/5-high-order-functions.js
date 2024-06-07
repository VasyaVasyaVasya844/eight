import _ from 'lodash';

// BEGIN
function takeOldest(users, count = 1) {
    return _.sortBy(users, user => new Date(user.birthday)).slice(0, count);
}
// END

export default takeOldest;
