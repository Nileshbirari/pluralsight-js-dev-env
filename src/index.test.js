import {expect} from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';

describe ("out first test", () => {
it("It should pass", () => {
expect(true).to.equal(true);
});
});

describe('index.html', () => {
it('display hello world', (done) => {
const index = fs.readFileSync('./src/index.html', "utf-8");
jsdom.env(index, function(err, window) {
const h1 = window.document.getElementsByTagName('h1')[0];
expect(h1.innerHTML).to.equal("Users");
done();
window.close();
});
});

});