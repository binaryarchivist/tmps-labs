import { Handler } from './chain-of-responsibility/Handler';

// const handler = new Handler();
//
// const adminBearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2OTk4OTExNDYsImV4cCI6MTczMTQyNzE0NiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInJvbGUiOiJBUFBBRE0ifQ.4ok3DeHgtDsQgl0_sa-Cs0HcPiOJloDueqnGpoSTf4Y'
// const userBearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2OTk4OTExNDYsImV4cCI6MTczMTQyNzE0NiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInJvbGUiOiJBUFBVU1IifQ.FJVzbEExl_2w2GfiWQCbtki9lqbFw2-lmPJ0e_TrvX4'
//
// const successfulEvent = {
//   body: '{}',
//   headers: {
//     Authorization: `Bearer ${adminBearerToken}`,
//   }
// };
//
// const rejectedBySessionEvent = {
//   body: '{}',
//   headers: {
//     Authorization: `Bearer`,
//   }
// };
//
// const rejectedByAdminEvent = {
//   body: '{}',
//   headers: {
//     Authorization: `Bearer ${userBearerToken}`,
//   }
// };
//
// const simulatedContext = {};
//
// handler.withMiddlewares(handler.getUser.bind(handler))(rejectedByAdminEvent, simulatedContext)
//   .then(response => {
//     console.log('Response:', response);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });



