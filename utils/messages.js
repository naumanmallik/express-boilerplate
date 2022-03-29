module.exports = {
  invalidLogin: 'Invalid email or password',
  InvalidToken: 'Invalid token.',
  created: (name) => {
    return `${name} has been created successfully!`;
  },
  signedIn: 'You have been signed in successfully',
  registeredSuccessfully: (param) => {
    return `${param} has been registered successfully`;
  },
  updatedModel: (model) => {
    return `${model} has been updated successfully!`;
  },
  deleteModel: (model) => {
    return `${model} has been deleted successfully`;
  },
  userExists: 'This user already exists!',
  userNotFound: "Couldn't find your Account",
  success: 'Success!',
  notFound: (model) => {
    return `${model} does not exist!`;
  },
  verified: 'Email verified successfully',
  notVerified: 'Email not verified',
  alreadyVerified: 'Your Email is already verified',
  badRequest: 'Bad request',
  notPresent: 'Not present in the payload',
  invalidFormat: (service) => {
    return `Invalid ${service} Format`;
  },
  invalidLength: 'Invalid Length!',
  notEmpty: 'This field must not be empty!',
  invalidDataType: (val) => {
    return `Please provide valid ${val}!`;
  },
  emailExists: 'Email already exists!',
  sessionExpiry: 'Session has been expired!',
  invalidEmail: 'invalid email',
  invalidEmailOrPassword: 'invalid email or password',
  alreadyExist: (param) => {
    return `${param} already exists!`;
  },
  filesLengthExceeded: 'File Limit Exceeded',
  fileTooLarge: 'File too large',
  passwordChangeSuccessful: 'Password changed successfully!',
};
