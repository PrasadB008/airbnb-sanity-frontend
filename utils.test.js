import { pluralSuffix, isMultiple } from "./utils"

describe("pluralSuffix", () => {
  it("returns 's' for 0", () => {
    expect(pluralSuffix(0)).toBe("s")
  })

  it("returns '' for 1", () => {
    expect(pluralSuffix(1)).toBe("")
  })

  it("returns 's' for 2", () => {
    expect(pluralSuffix(2)).toBe("s")
  })

  it("treats negative numbers like positives", () => {
    expect(pluralSuffix(-1)).toBe("")
    expect(pluralSuffix(-2)).toBe("s")
  })

  it("returns 's' for non-numbers", () => {
    expect(pluralSuffix(undefined)).toBe("s")
    expect(pluralSuffix(null)).toBe("s")
    expect(pluralSuffix("1")).toBe("s")
    expect(pluralSuffix(NaN)).toBe("s")
  })
})

describe("isMultiple (deprecated alias)", () => {
  it("returns the same result as pluralSuffix", () => {
    const inputs = [0, 1, 2, -1, -2, undefined, null, "1", NaN]
    inputs.forEach((input) => {
      expect(isMultiple(input)).toBe(pluralSuffix(input))
    })
  })
})
