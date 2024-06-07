addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const data = [
    { name: '物件1', description: '説明1', price: 10000, image: '/property1.jpg' },
    { name: '物件2', description: '説明2', price: 20000, image: '/property2.jpg' },
    { name: '物件3', description: '説明3', price: 30000, image: '/property3.jpg' },
  ]

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  })
}
