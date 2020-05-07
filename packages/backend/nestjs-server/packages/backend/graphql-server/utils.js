const [talks, jolters, rooms, sessions] = [require('../Data/Talks.json'), require('../Data/Users.json'), require('../Data/Rooms.json'),[]]

module.exports = {
    createStore: () => {
        return { talks, jolters, rooms, sessions }
    }
}