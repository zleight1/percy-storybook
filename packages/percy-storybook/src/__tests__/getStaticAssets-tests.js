import { getStorybookJavascriptPath } from '../getStaticAssets';

it('parses and returns path', () => {
  const html = '<html><head></head><body>' +
    '<script src="static/preview.ca96e23c5dfccc147bb6.bundle.js"></script></body></html>';
  expect(getStorybookJavascriptPath(html)).toEqual('static/preview.ca96e23c5dfccc147bb6.bundle.js');
});

it('parses and returns path when type present', () => {
  const html = '<html><head></head><body>' +
    '<script type="text/javascript" src="static/preview.ca96e23c5dfccc147bb8.bundle.js"></script>' +
    '</body></html>';
  expect(getStorybookJavascriptPath(html)).toEqual('static/preview.ca96e23c5dfccc147bb8.bundle.js');
});
