"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Handler_1 = require("./chain-of-responsibility/Handler");
var handler = new Handler_1.Handler();
var adminBearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2OTk4OTExNDYsImV4cCI6MTczMTQyNzE0NiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInJvbGUiOiJBUFBBRE0ifQ.4ok3DeHgtDsQgl0_sa-Cs0HcPiOJloDueqnGpoSTf4Y';
var userBearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2OTk4OTExNDYsImV4cCI6MTczMTQyNzE0NiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInJvbGUiOiJBUFBVU1IifQ.FJVzbEExl_2w2GfiWQCbtki9lqbFw2-lmPJ0e_TrvX4';
var successfulEvent = {
    body: '{}',
    headers: {
        Authorization: "Bearer ".concat(adminBearerToken),
    }
};
var rejectedBySessionEvent = {
    body: '{}',
    headers: {
        Authorization: "Bearer",
    }
};
var rejectedByAdminEvent = {
    body: '{}',
    headers: {
        Authorization: "Bearer ".concat(userBearerToken),
    }
};
var simulatedContext = {};
handler.withMiddlewares(handler.getUser.bind(handler))(rejectedByAdminEvent, simulatedContext)
    .then(function (response) {
    console.log('Response:', response);
})
    .catch(function (error) {
    console.error('Error:', error);
});
