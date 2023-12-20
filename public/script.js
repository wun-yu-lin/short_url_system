

main()

function main() {
  document.getElementById('urlSubmitButton').onclick = getShortUrl
}



async function getShortUrl() {
  const trueUrl = document.getElementById('trueUrl').value
  if (trueUrl === '' || trueUrl === NaN || trueUrl === undefined) return
  if (trueUrl !== '') {
    const response = await fetch('/api/url', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({trueUrl})})
    const data = await response.json()
    document.getElementById('shortenUrl').innerText = window.location.href + data.shortenUrl
  }
}







