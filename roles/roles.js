import { Role } from 'testcafe';
const env = require("./config/env.json");

export const roleAdmin = Role(env.adress, async t => {
    await t
    .typeText('#at-field-username_and_email', 'admin')
    .pressKey('tab')
    .typeText('#at-field-password', 'adminadmin')
    .click('#at-btn');
}, { preserveUrl: true });

export const roleUser1 = Role(env.adress, async t => {
    await t
    .typeText('#at-field-username_and_email', 'user1')
    .pressKey('tab')
    .typeText('#at-field-password', 'user_1')
    .click('#at-btn');
}, { preserveUrl: true });

export const roleUser2 = Role(env.adress, async t => {
    await t
    .typeText('#at-field-username_and_email', 'user2')
    .pressKey('tab')
    .typeText('#at-field-password', 'user_2')
    .click('#at-btn');
}, { preserveUrl: true });
