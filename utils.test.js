import { isMultiple } from "./utils"

describe("isMultiple", () => {
  it("returns 's' for 0", () => {
    expect(isMultiple(0)).toBe("s")
  })

  it("returns '' for 1", () => {
    expect(isMultiple(1)).toBe("")
  })

  it("returns 's' for 2", () => {
    expect(isMultiple(2)).toBe("s")
  })

  it("treats negative numbers like positives", () => {
    expect(isMultiple(-1)).toBe("")
    expect(isMultiple(-2)).toBe("s")
  })

  it("returns 's' for non-numbers", () => {
    expect(isMultiple(undefined)).toBe("s")
    expect(isMultiple(null)).toBe("s")
    expect(isMultiple("1")).toBe("s")
    expect(isMultiple(NaN)).toBe("s")
  })
})
