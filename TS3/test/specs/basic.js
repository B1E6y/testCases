it('Homework4, (3)Opening a repository file on GitHub', async () => {
    await browser.url('https://github.com/');
    await browser.pause(1000);
    //������� �� ���� ���������
    const HeaderMenu = await $('/html/body/div[1]/div[1]/header/div/div[1]/div[2]/button/span/span');
    await HeaderMenu.click();
    await browser.pause(1000);
    //������� �� search input ����
    const clickLike1 = await $('/html/body/div[1]/div[1]/header/div/div[2]/div/div/qbsearch-input/div[1]/button/span');
    await clickLike1.click();
    await browser.pause(1000);
    //���� � ����� ���� 'wdio'
    const queryBuilderTest = await $('#query-builder-test');
    await queryBuilderTest.setValue('wdio');
    await browser.pause(1000);
    //������� �� ������ ������
    const Send = await $('//*[@id="query-builder-test-result-wdio"]/span/span[3]');
    await Send.click();
    await browser.pause(1000);
    //����� ��
    const JavaScript = await $('[href="https://github.com/search?q=wdio+language%3AJavaScript&type=repositories"]');
    await JavaScript.click();
    await browser.pause(1000);
    //������� �� 'blueimp/wdio'
    const blueimpWdio = await $('[href="/blueimp/wdio"]');
    await blueimpWdio.click();
    await browser.pause(1000);
    //�������� ����� test
    const Test = await $('//*[@id="folder-row-9"]/td[2]/div/div/h3/div/a');
    await Test.click();
    await browser.pause(1000);
    //�������� ����� specs
    const Specs = await $('//*[@id="folder-row-2"]/td[2]/div/div/h3/div/a');
    await Specs.click();
    await browser.pause(1000);
    //�������� ��������� '01-session.js'
    const SessionJs = await $('//*[@id="folder-row-1"]/td[2]/div/div/h3/div/a');
    await SessionJs.click();
    await browser.pause(4000);

})    

  