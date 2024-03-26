it('Homework4, (2)Filling out the free trial form', async () => {
        await browser.url('https://github.com/');
        await browser.pause(1000);
        //Поиск Start a free Enterprise Trial
        const enterpriseTrial = await $('[href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+hero&ref_page=%2F"]');
        //Нажатие на Start a free Enterprise Trial
        await enterpriseTrial.click();
        await browser.pause(1000);
        //Нажатие на кнопку Enterprise Server
        const EnterptiseServer = await $('[href="https://enterprise.github.com/trial?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+hero&ref_page=%2F&source=pricing-card-enterprise"]');
        await EnterptiseServer.click();
        await browser.pause(1000);
        //Name
        const Name = await $('#contact_request_name');
        Name.setValue('Levchenko Oleksii');
        await browser.pause(1000);
        //Company
        const Company = await $('#contact_request_organization_name');
        Company.setValue('LLC Neolit Logistics');
        await browser.pause(1000);
        //Work email
        const Mail = await $('#contact_request_email');
        Mail.setValue('o.levchenko@neolit.ua');
        await browser.pause(1000);
        //Phone number
        const number = await $('#contact_request_phone');
        number.setValue('+380505108081');
        await browser.pause(1000);
        //Select Country (Ukraine)
        const Country = await $('//*[@id="contact_request_country"]/option[224]');
        await Country.click();
        await browser.pause(1000);
        //Выбор типа установки 
        const installationType = await $('#contact_request_instance_type_onprem');
        await installationType.click();
        await browser.pause(1000);
        //Задать вопрос(Yes)
        const questions = await $('#questions_yes');
        await questions.click();
        await browser.pause(1000);
        //Ввод вопроса
        const questionsList = await $('#questions-list');
        questionsList.setValue('Oh, in the meadow red viburnum bent down For some reason, our glorious Ukraine is distressed. But we will raise that red viburnum! And we will cheer our glorious Ukraine up, hey-hey!');                            
        await browser.pause(1000);
        //Accept terms of use (Yes)
        const Accept = await $('#contact_request_agreed_to_terms');
        await Accept.click();
        await browser.pause(1000);
        //scrollIntoView
        const scroll = await $('#marketing_email_opt_in-default');
        await scroll.scrollIntoView();
        await browser.pause(1000);
        //marketing_email_opt_in_default
        const marketing_email = await $('#marketing_email_opt_in-default');
        await marketing_email.click();
        await browser.pause(1000);
})    

