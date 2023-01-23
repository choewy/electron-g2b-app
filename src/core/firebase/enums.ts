export enum FireBaseAuthErrorCode {
  EmailAlreadyInUse = 'auth/email-already-in-use',
  WeekPassword = 'auth/weak-password',
  UserDisabled = 'auth/user-disabled',
  InvalidEmail = 'auth/invalid-email',
  InternalError = 'auth/internal-error',
  MissingEmail = 'auth/missing-email',
  UserNotFound = 'auth/user-not-found',
  WrongPassword = 'auth/wrong-password',
}
