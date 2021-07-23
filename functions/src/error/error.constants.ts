export const errors = {
  BAD_REQUEST: {
    httpStatus: 400,
    message: '🛑 Bad Request',
  },
  INTERNAL_SERVER_ERROR: {
    httpStatus: 500,
    message: '🔧 Internal Server Error',
  },
  NOT_FOUND: {
    httpStatus: 404,
    message: '🚧 Resource not found',
  },
  USER_NOT_FOUND: {
    httpStatus: 401,
    message: '⛔ User not registered. Please sign up',
  },
  FIREBASE_CONNECT_ERROR: {
    httpStatus: 500,
    message: '🔧 Could not connect to Firebase',
  },
  MISSING_ENV_VARIABLES: {
    httpStatus: 500,
    message: '🔧 Missing env variables',
  },
  FIREBASE_QUERY_ERROR: {
    httpStatus: 500,
    message: '🔧 Problem executing firebase query',
  },
};
