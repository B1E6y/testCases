it('Homework4, (3)Filling out the free trial form', async () => {
    await browser.url('https://github.com/');
    await browser.pause(1000);
    //Нажатие на Discover GitHub Actions
    browser.waitUntil(() => {
        return $('//*[@id="productivity"]/div/div[4]/card-skew/div/div[1]/div').click();
    }, 5000);
    await browser.pause(1000);
    //Нажатие на Get started with Actions
    const getStarted = await $('[href = "https://docs.github.com/actions"]');
    await getStarted.click();
    await browser.pause(1000);
    //Нажатие на Обзор
    const Review = await $('//*[@id="/actions/learn-github-actions/understanding-github-actions"]');
    await Review.click();
    await browser.pause(1000);
    //Прокрутка к кнопке лайк
    const scrollLike = await $('#survey-yes');
    await scrollLike.scrollIntoView();
    await browser.pause(1000);
    //Нажатие на Лайк
    const clickLike = await $('#survey-yes');
    await clickLike.click();
    await browser.pause(1000);
    //Ввод комментария
    const Name = await $('#survey-comment');
    Name.setValue('Github is cool');
    await browser.pause(1000);
    //Нажатие на кнопу "Оправить" для отправки комментария
    const Send = await $('.btn.btn-sm.color-border-accent-emphasis');
    await Send.click();
    await browser.pause(1000);
    //getAttribute
    const JSONWire = await $('[href="/ru/site-policy/privacy-policies/github-privacy-statement"]');
    const newwind = await JSONWire.getAttribute('href');
    //newWindow
    browser.newWindow(newwind);
    await browser.pause(1000);
    browser.switchWindow('https://docs.github.com/ru/actions/learn-github-actions/understanding-github-actions');
    await browser.pause(1000);
    //Нажатие на "Блог"
    const Blog = await $('[href="https://github.blog"]');
    await Blog.click();
    await browser.pause(1000);
    //Нажатие на Try GitHub Copilot
    const Copilot = await $('[href="https://www.linkedin.com/company/github"]');
    await Copilot.click();
    await browser.pause(2000);
})    

  