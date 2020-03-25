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
    var response = getResponse_1.getResponse(usersData);
    res.send(response);
});
router.get('/user/:id', function (req, res) {
    var userId = req.params.id;
    var user = users.find(function (user) { return user.id === userId; });
    var response = getResponse_1.getResponse(user);
    res.send(response);
});
router.post('/user', function (req, res) {
    var newUser = req.body;
    if (typeof newUser !== 'undefined') {
        users.push(newUser);
    }
    var response = getResponse_1.getResponse(newUser);
    res.send(response);
});
module.exports = router;
