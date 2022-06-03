import { Selector } from 'testcafe';
import  { roleUser1 }  from './roles/roles';
const env = require("./config/env.json");

fixture.disablePageReloads `wekan : check version`
    .page (env.adress)

    .beforeEach(async t => {
        await t.
        .typeText('#at-field-username_and_email', 'admin')
        .pressKey('tab')
        .typeText('#at-field-password', 'adminadmin')
        .click('#at-btn');
    });

    test.disablePageReloads('check version : 1.7', async t => {
        await t
        .click('#header-user-bar')
        .click(Selector('a.js-go-setting'))
        .click(Selector(".setting-header-btn.informations span").withText("Version"))
        .expect(Selector("table tr").nth(0).find("td").innerText).eql(env.wekanVersion);
        });
