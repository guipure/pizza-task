export default async function convertEURtoUSD(eur) {
  const url = 'http://data.fixer.io/api/latest?access_key=565a8176bdb3ec80eadb1fe0469a3097&symbols=USD'
  const response = await fetch(url)
  const json = await response.json()
  const USD = Math.round(eur * json.rates.USD * 100) / 100
  return USD
}