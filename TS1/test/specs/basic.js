    it('Homework4, signIN to Github with not valid credentials', async () => {
        await browser.url('https://github.com/');
        await browser.pause(1000);
        //����� ������ Sign in 
        const Signin = await $('[href="/login"]');
        await browser.pause(1000);
        //������� �� ������ Sing in
        await Signin.click();
        await browser.pause(1000);
        //����� ������� ������
        const login = await $('#login_field');
        //���� ������ � ����� ����
        login.setValue('Levchenko.Oleksii')
        await browser.pause(1000);
        //���� ������ � ����� ����
        const password = await $('#password');
        password.setValue('SINIbobr#34')
        await browser.pause(1000);
        //����� ������ Sign in
        const SinginBtn = await $('.btn.btn-primary.btn-block.js-sign-in-button')
        //������� �� ������ Sign in
        await SinginBtn.click();
        await browser.pause(1000);
})    

