"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("../controllers/authentication");
exports.default = (router) => {
    // @ts-ignore
    router.post('/auth/register', authentication_1.register);
    // @ts-ignore
    router.post('/auth/login', authentication_1.login);
    // @ts-ignore
    router.post('/auth/check-auth', authentication_1.checkAuth);
};
//# sourceMappingURL=authentication.js.map