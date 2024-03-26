it('Homework4, (5)Сonfirming that text fields are visible on screen', async () => {
    await browser.url('https://webdriver.io/');
    await browser.pause(1000);
    //Нажатие на кнопку "Menu"
    const search = await $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/button');
    await search.click();
    await browser.pause(1000); 
    //await search.setValue('');
    const v8 = await $('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[1]/ul/li[7]/a')
    await v8.click();
    await browser.pause(1000);
    //newWindow
    const v5 = await $('[href = "https://v5.webdriver.io"]');
    const newwind = await v5.getAttribute('href');
    //newWindow
    browser.newWindow(newwind);
    await browser.pause(1000);
    //Переход на API
    const API = await $('[href="/docs/gettingstarted.html"]');
    await API.click();
    await browser.pause(1000);
    //Открытие кнопки меню
    const hamburgerMenu = await $('.hamburger-menu');
    await hamburgerMenu.click();
    await browser.pause(1000);
    //Нажатие на typeScript Setup
    const typeScript = await $('[href="/docs/typescript.html"]');
    await typeScript.click();
    await browser.pause(1000);
    //Видно ли на экране поле с текстом #1
    let isDisplayedInViewport1 = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/pre[1]').isDisplayedInViewport();
    console.log('The minimum TypeScript version is 3.5.1. is displayed in ViewPort?: ' + await isDisplayedInViewport1);
    await browser.pause(1000);
    //Видно ли на экране поле с текстом #2
    let isDisplayedInViewport2 = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/pre[2]').isDisplayedInViewport();
    console.log('Similarly for Mocha is displayed in ViewPort?: ' + await isDisplayedInViewport2);
    await browser.pause(1000);
    //Видно ли на экране поле с текстом #3
    let isDisplayedInViewport3 = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/pre[3]').isDisplayedInViewport();
    console.log('And Cucumber is displayed in ViewPort?: ' + await isDisplayedInViewport3);
    await browser.pause(1000);
    //Скролл страницы до элемента #4
    const forElement4 = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/pre[4]');
    await forElement4.scrollIntoView();
    await browser.pause(1000);
    //Видно ли на экране поле с текстом #4
    let isDisplayedInViewport4 = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/pre[4]').isDisplayedInViewport();
    console.log('And your tsconfig.json needs the following is displayed in ViewPort?: ' + await isDisplayedInViewport4);
    await browser.pause(1000);
    //Видно ли на экране поле с текстом #5
    let isDisplayedInViewport5 = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/pre[5]').isDisplayedInViewport();
    console.log('For sync mode (@wdio/sync), webdriverio types must be replaced with @wdio/sync is displayed in ViewPort?: ' + await isDisplayedInViewport5);
    await browser.pause(1000);
    //Видно ли на экране поле с текстом #6
    let isDisplayedInViewport6 = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/pre[6]').isDisplayedInViewport();
    console.log('Typed Configuration is displayed in ViewPort?: ' + await isDisplayedInViewport6);
    await browser.pause(1000);
    //Видно ли на экране поле с текстом #7
    let isDisplayedInViewport7 = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/pre[7]').isDisplayedInViewport();
    console.log('And in your typed configuration file is displayed in ViewPort?: ' + await isDisplayedInViewport7);
    await browser.pause(1000);
    //Скролл страницы до элемента #8
    const forElement8 = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/pre[8]');
    await forElement8.scrollIntoView();
    await browser.pause(1000);
    //Видно ли на экране поле с текстом #18
    let isDisplayedInViewport8 = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/pre[8]').isDisplayedInViewport();
    console.log('Framework types is displayed in ViewPort?: ' + await isDisplayedInViewport8);
    await browser.pause(1000);
    //Видно ли на экране поле с текстом #9
    let isDisplayedInViewport9 = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/pre[9]').isDisplayedInViewport();
    console.log('also import only the types is displayed in ViewPort?: ' + await isDisplayedInViewport9);
    await browser.pause(1000);
    //Видно ли на экране поле с текстом #10
    let isDisplayedInViewport10 = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/pre[10]').isDisplayedInViewport();
    console.log('Add types to your custom commands like this is displayed in ViewPort?: ' + await isDisplayedInViewport10);
    await browser.pause(1000);
    //Видно ли на экране поле с текстом #11
    let isDisplayedInViewport11 = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/pre[11]').isDisplayedInViewport();
    console.log('Sync mode is displayed in ViewPort?: ' + await isDisplayedInViewport11);
    await browser.pause(1000);
    //Скролл страницы до элемента #12
    const forElement12 = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/pre[12]');
    await forElement12.scrollIntoView();
    await browser.pause(1000);
    //Видно ли на экране поле с текстом #12
    let isDisplayedInViewport12 = await $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/pre[12]').isDisplayedInViewport();
    console.log('Async mode is displayed in ViewPort?: ' + await isDisplayedInViewport12);
    await browser.pause(3000); 
})    

