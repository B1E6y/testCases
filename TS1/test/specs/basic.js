    it('Homework4, signIN to Github with not valid credentials', async () => {
        await browser.url('https://github.com/');
        await browser.pause(1000);
        //Поиск кнопки Sign in 
        const Signin = await $('[href="/login"]');
        await browser.pause(1000);
        //нажатие на кнопку Sing in
        await Signin.click();
        await browser.pause(1000);
        //Поиск интпута логина
        const login = await $('#login_field');
        //Ввод логина в инпут поле
        login.setValue('Levchenko.Oleksii')
        await browser.pause(1000);
        //Ввод пароля в инпут поле
        const password = await $('#password');
        password.setValue('SINIbobr#34')
        await browser.pause(1000);
        //Поиск кнопки Sign in
        const SinginBtn = await $('.btn.btn-primary.btn-block.js-sign-in-button')
        //Нажатие на кнопку Sign in
        await SinginBtn.click();
        await browser.pause(1000);
})    

