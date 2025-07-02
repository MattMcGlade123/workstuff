"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsersById = exports.getUsersBySessionToken = exports.getUserByEmail = exports.getUsers = exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false }
    }
});
exports.userModel = mongoose_1.default.model('User', userSchema);
const getUsers = () => exports.userModel.find({});
exports.getUsers = getUsers;
const getUserByEmail = (email) => exports.userModel.findOne({ email });
exports.getUserByEmail = getUserByEmail;
const getUsersBySessionToken = (sessionToken) => exports.userModel.findOne({ 'authentication.sessionToken': sessionToken });
exports.getUsersBySessionToken = getUsersBySessionToken;
const getUsersById = (id) => exports.userModel.findById({ id });
exports.getUsersById = getUsersById;
const createUser = (values) => new exports.userModel(values).save().then((user) => user.toObject());
exports.createUser = createUser;
//# sourceMappingURL=users.js.map