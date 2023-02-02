export function formatTime(ms) {
  const seconds = ms / 1000
  const rest = (seconds % 60).toFixed(0)
  const minutes = Math.floor(seconds / 60)
  const restSeconds = rest < 10 ? `0${rest}` : rest

  return `${minutes}:${restSeconds}`
}

// 180,023 => 3:00
// 120,000 => 2:00
// 170,000 => 2:50
