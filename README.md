# before-after-each

**Demonstrates a case where afterEach() may be better than beforeEach() for cleaning up between tests.**

`src/uut.test.js` defines two sets of tests. The first mocks out `dep`, the second assumes `dep` is
not mocked out. If `dep` continues to be mocked in the second test, it will fail.

The second test could unmock in a beforeEach(), but this would require the test to understand
what every other test might mock. As the test file gets longer, this seems hard to maintain, especially as more mocks are added later.

`afterEach()` seems like a good place to unmock any mocks that were created in a previous `beforeEach()`,
whereas `beforeEach()` seems like a good place to create new mocks and _re-initialize_ mocks reused by multiple tests.
