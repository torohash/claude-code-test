import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  // コンテナを作成
  const container = document.createElement('div')
  container.className = 'container'
  
  // h1要素を作成
  const heading = document.createElement('h1')
  heading.textContent = 'Hello World!'
  
  // p要素を作成
  const paragraph = document.createElement('p')
  paragraph.textContent = 'Welcome to your Vite-powered application'
  
  // ボタンを作成
  const button = document.createElement('button')
  button.id = 'counter'
  button.type = 'button'
  button.textContent = 'Count is 0'
  
  // カウンター機能を実装
  let count = 0
  button.addEventListener('click', () => {
    count++
    button.textContent = `Count is ${count}`
  })
  
  // DOM要素を構築
  container.appendChild(heading)
  container.appendChild(paragraph)
  container.appendChild(button)
  app.appendChild(container)
}