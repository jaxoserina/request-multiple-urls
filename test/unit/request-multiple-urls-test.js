const chai = require('chai');
const expect = chai.expect;

const requestMultipleUrls = require('../../request-multiple-urls');
const expectedResponse = require('./test-data.json');
const urls = require('../../config.json').urls;

describe('getMultipleUrlResponses function', () => {
    it('Success response', async () => {
        let response = await requestMultipleUrls(urls);
          expect(response).to.deep.equal(expectedResponse);         
    });

    it('Failure response', async () => {
        // misspelt one of the urls to emulate error scenario
        let modifiedUrls = [ 
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsii.json',
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json' 
          ]; 
        let response = await requestMultipleUrls(modifiedUrls);
          expect(response[0].message).to.deep.equal("Unexpected error occured");         
    });
});