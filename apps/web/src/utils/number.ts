export function padNumber(num: number) {
  return num.toString().padStart(2, '0')
}

export const formatNumber = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 3
})
