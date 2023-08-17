import { Selector } from 'testcafe';

fixture`Login Test`.page`./index.html`; 

test('User Login Test', async LogT => {
    
    const usernameField = Selector('#username');
    const passwordField = Selector('#password');
    const loginButton = Selector('button[type="submit"]');

    
    const username = 'your_username';
    const password = 'your_password';

    
    await LogT
        .typeText(usernameField, username)
        .typeText(passwordField, password)
        .click(loginButton);

    
});
