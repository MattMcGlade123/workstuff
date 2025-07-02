"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = exports.register = exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = require("../dbs/users");
const helpers_1 = require("../helpers");
require("dotenv").config();
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }
        const user = await (0, users_1.getUserByEmail)(email).select('+authentication.salt +authentication.password');
        if (!user) {
            return res.status(403).json({
                message: "Invalid credentials"
            });
        }
        const expectedHash = (0, helpers_1.authentication)(user.authentication.salt, password);
        if (user.authentication.password !== expectedHash) {
            return res.status(403).json({
                message: "Invalid credentials"
            });
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
        return res.status(200).json({ token });
    }
    catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
exports.login = login;
const register = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            return res.status(400).json({
                message: "Email, password and username are required"
            });
        }
        const existingUser = await (0, users_1.getUserByEmail)(email);
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists with this email"
            });
        }
        const salt = (0, helpers_1.random)();
        const newUser = await (0, users_1.createUser)({
            email,
            username,
            authentication: {
                salt,
                password: (0, helpers_1.authentication)(salt, password),
            },
        });
        const token = jsonwebtoken_1.default.sign({ id: newUser._id, email: newUser.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
        return res.status(200).json({ username: newUser.username, token, message: "User successfully registered" }).end();
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
};
exports.register = register;
const checkAuth = (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.json({ authenticated: false });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (decoded) {
            return res.json({ authenticated: true });
        }
        else {
            return res.json({ authenticated: false });
        }
    }
    catch (err) {
        return res.json({ authenticated: false });
    }
};
exports.checkAuth = checkAuth;
//# sourceMappingURL=authentication.js.map