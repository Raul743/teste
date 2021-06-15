import enCommon from '../en/common.json';
import enFormValidation from '../en/form-validation.json';
import enSignIn from '../en/sign-in.json';
import ptCommon from '../pt/common.json';
import ptFormValidation from '../pt/form-validation.json';
import ptSignIn from '../pt/sign-in.json';

describe('Count total i18n messages', () => {
  describe('VALUES', () => {
    it('all COMMON messages should have the same values', () => {
      expect(Object.values(enCommon).length).toBe(Object.values(ptCommon).length);
    });

    it('all FORM VALIDATION messages should have the same values', () => {
      expect(Object.values(enFormValidation).length).toBe(Object.values(ptFormValidation).length);
    });

    it('all SIGN IN messages should have the same values', () => {
      expect(Object.values(enSignIn).length).toBe(Object.values(ptSignIn).length);
    });
  });

  describe('KEYS', () => {
    it('all COMMON messages should have the same keys', () => {
      expect(Object.keys(enCommon)).toEqual(Object.keys(ptCommon));
    });

    it('all FORM VALIDATION messages should have the same keys', () => {
      expect(Object.keys(enFormValidation)).toEqual(Object.keys(ptFormValidation));
    });

    it('all SIGN IN messages should have the same keys', () => {
      expect(Object.keys(enSignIn)).toEqual(Object.keys(ptSignIn));
    });
  });
});
