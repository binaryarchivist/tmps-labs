const createResponse = (
  statusCode: number = 200,
  body?: object,
  message?: string,
) => ({
  statusCode,
  headers: {
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With, X-HTTP-Method-Override, Origin, Accept, Authorization, file-name, file-mime-type',
  },
  body: JSON.stringify({ message }),
});

export { createResponse };