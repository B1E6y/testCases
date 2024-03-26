it('Homework4, (4)Filling out the free trial form', async () => {
    await browser.url('https://v7.webdriver.io/');
    await browser.pause(1000);
    //Нажатие на кнопку "Menu"
    const clickMenu = await $('//*[@id="__docusaurus"]/nav[2]/div[1]/div[1]/div');
    await clickMenu.click();
    await browser.pause(1000);
    //нажатие на пункт меню 'Docs'
    const clickDocs = await $('//*[@id="__docusaurus"]/nav[2]/div[3]/div[2]/div/ul/li[1]/a');
    await clickDocs.click();
    //Вывод в консоль текста npm install @wdio/cli
    const Text1 = await $('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div/div[2]/div/div[1]/div/div/div/div/div/span[1]');
    const Text2 = await $('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div/div[2]/div/div[1]/div/div/div/div/div/span[2]');
    const Text3 = await $('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div/div[2]/div/div[1]/div/div/div/div/div/span[3]');
    const Text4 = await $('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div/div[2]/div/div[1]/div/div/div/div/div/span[4]');
    console.log('Installation npm is: ' + await Text1.getText() + await Text2.getText() + await Text3.getText() + await Text4.getText());
    await browser.pause(1000);
    //Выбор Yarn
    const clickYarn = await $('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div/div[2]/ul/li[2]');
    await clickYarn.click();
    //Вывод в консоль текста yarn add @wdio/cli
    const Text5 = await $('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div/div[2]/div/div[2]/div/div/div/div/div/span[1]');
    const Text6 = await $('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div/div[2]/div/div[2]/div/div/div/div/div/span[2]');
    const Text7 = await $('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div/div[2]/div/div[2]/div/div/div/div/div/span[3]');
    const Text8 = await $('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div/div[2]/div/div[2]/div/div/div/div/div/span[4]');
    console.log('Installation yarn is: ' + await Text5.getText() + await Text6.getText() + await Text7.getText() + await Text8.getText());
    await browser.pause(1000);
    //Вывод в консоль текста npx wdio config
    const Text9 = await $('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div/div[3]/div/div/div/div/span');
    console.log('Set Up is: ' + await Text9.getText());
    await browser.pause(1000);
    //Вывод в консоль текста npx wdio run ./wdio.config.js
    const Text10 = await $('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div/div[4]/div/div/div/div/span');
    console.log('Run Test is: ' + await Text10.getText());
    await browser.pause(1000);
    //"npx wdio run ./wdio.config.js" and "--spec parameter"
    const Text11 = await $('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div/div[5]/div/div/div/div/span');
    console.log('Run Test with "--spec" : ' + await Text11.getText());
    await browser.pause(1000);
    ////"npx wdio run ./wdio.config.js" and "--suite checkoutflow"
    const Text12 = await $('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div/div[6]/div/div/div/div/span');
    console.log('Run Test with "--suite": ' + await Text12.getText());
    await browser.pause(3000);
})    

  