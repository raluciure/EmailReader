import { WithBodyFilterPipe } from './with-body-filter.pipe';

describe('WithBodyFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new WithBodyFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
