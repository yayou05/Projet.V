export default (input :string , name :string):boolean => {
    switch (name) {
        case 'email':
            const patternEmail = new RegExp (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
            return patternEmail.test(input);
        case 'password':
            const patternPassword = new RegExp (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
            return patternPassword.test(input);
        default:
            return false;
    }
};