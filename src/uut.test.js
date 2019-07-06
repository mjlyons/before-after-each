import * as dep from "./dep";
import * as uut from "./uut";

describe("Test with mocks", () => {
  beforeEach(() => {
    jest.spyOn(dep, "getMood").mockImplementation(() => "ponderous");
  });

  afterEach(() => {
    // If you comment this out, the second test will fail
    dep.getMood.mockRestore();
  });

  it("describeMood describes a happy mood", () => {
    const moodDesc = uut.describeMood();

    expect(dep.getMood).toHaveBeenCalledTimes(1);
    expect(moodDesc).toBe("My mood is currently ponderous");
  });
});

describe("Test without mocks", () => {
  // You could do this, but would each test to know every other tests's mocks
  //
  // beforeEach(() => {
  //   dep.getMood.mockRestore();
  // });

  it("describeMood describes a random mood,", () => {
    const moodDesc = uut.describeMood();
    expect(moodDesc).toContain("My mood is currently");
    console.log(moodDesc);

    const mood = moodDesc.match(/ ([a-z]+)$/)[1];
    expect(dep.MOODS).toContain(mood);
  });
});
