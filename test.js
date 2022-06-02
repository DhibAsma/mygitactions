import { Selector } from 'testcafe';
import  { roleUser1 }  from './roles/roles';

fixture.disablePageReloads `wekan : check version`
    .page (env.adress)

    .beforeEach(async t => {
        await t.useRole(roleUser1);
    });

    test.disablePageReloads('check version : 1.7', async t => {
        await t
        .click('#header-user-bar')
        .click(Selector('a.js-go-setting'))
        .click(Selector(".setting-header-btn.informations span").withText("Version"))
        .expect(Selector("table tr").nth(0).find("td").innerText).eql(env.wekanVersion);
        });
