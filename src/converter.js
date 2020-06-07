export default async function convertEURtoUSD(eur) {
  const url = 'https://api.exchangeratesapi.io/latest'
  const response = await fetch(url)
  const json = await response.json()
  const USD = Math.round(eur * json.rates.USD * 100) / 100
  return USD
}