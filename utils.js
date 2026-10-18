export const isMultiple = (value) => {
  // Non-numbers (and NaN) are treated as plural
  if (typeof value !== "number" || Number.isNaN(value)) return "s"
  const abs = Math.abs(value)
  return abs === 0 || abs > 1 ? "s" : ""
}
