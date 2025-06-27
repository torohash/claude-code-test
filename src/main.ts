import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  app.innerHTML = `
  <div class="container">
    <h1>Hello World!</h1>
    <p>Welcome to your Vite-powered application</p>
    <button id="counter" type="button">Count is 0</button>
  </div>
`

  let count = 0
  const counter = document.querySelector<HTMLButtonElement>('#counter')

  if (counter) {
    counter.addEventListener('click', () => {
      count++
      counter.innerHTML = `Count is ${count}`
    })
  }
}
