type ValidationErrors = { [field: string]: string[] };

export class ValidationError extends Error {
    type: 'validation';
    errors: ValidationErrors;
  
    constructor(errors: ValidationErrors) {
      super('Validation failed');
      this.type = 'validation';
      this.errors = errors;
      Object.setPrototypeOf(this, ValidationError.prototype);
    }
  }