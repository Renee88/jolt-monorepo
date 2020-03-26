"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var getResponse_1 = require("./getResponse");
var router = express_1.default.Router();
var users = require('../../Users.json');
router.get('/users', function (req, res) {
    var usersData = users.slice(0, 99);
    var firstHundredUsers = getResponse_1.getResponse(usersData);
    res.send(firstHundredUsers);
});
router.get('/user/:id', function (req, res) {
    var userId = req.params.id;
    var user = users.find(function (user) { return user.id === userId; });
    var requestedUser = getResponse_1.getResponse(user);
    res.send(requestedUser);
});
router.post('/user', function (req, res) {
    var newUser = req.body;
    if (typeof newUser !== 'undefined') {
        users.push(newUser);
    }
    var user = getResponse_1.getResponse(newUser);
    res.send(user);
});
router.delete('/user/:id', function (req, res) {
    var userForRemovalId = req.params.id;
    var userForRemovalIndex = users.findIndex(function (user) { return user.id === userForRemovalId; });
    var userForRemoval = users[userForRemovalIndex];
    users.splice(userForRemovalIndex, 1);
    var removedUser = getResponse_1.getResponse(userForRemoval);
    res.send(removedUser);
});
module.exports = router;
