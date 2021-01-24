class UserValidator {
  constructor({ name, address }) {
    this.schema = {
      isNameValid: (function () {
        return Boolean(name);
      })(),
      isAddressValid: (function () {
        return Boolean(address);
      })(),
    };
  }

  isValid() {
    if (!this.schema.isNameValid) return false;
    if (!this.schema.isAddressValid) return false;
    return true;
  }
}

exports.UserValidator = UserValidator;
