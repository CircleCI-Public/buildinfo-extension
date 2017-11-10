// example of a test group
// note: all tests under the test directory are ran

chai = require('chai')
chai.use(require('chai-as-promised'))
chai.should();


var fetch = require('node-fetch');

describe('webdriver.io page', ()=> {

    it('should have the right title - the fancy generator way', ()=> {
        browser.url('https://buildinfo.circleci-support.com')
        browser.getTitle().should.equal('CircleCI BuildInfo')
    });

    it('should take a pic', ()=> {
        browser.url('https://buildinfo.circleci-support.com')
        browser.saveScreenshot('test-artifacts/firefox.png')
    });
})
