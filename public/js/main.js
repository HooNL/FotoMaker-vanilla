const btn = document.getElementById('btn')
const bericht = document.getElementById('bericht')
function onSubmit(e) {
  e.preventDefault()

  document.querySelector('#msg').textContent = ''
  document.querySelector('#img').src = ''

  const prompt = document.getElementById('prompt').value
  const size = document.getElementById('size').value

  if (prompt === '') {
    alert('Vul een tekst in. A.U.B')
    return
  }

  genereerImageVerzoek(prompt, size)
}

async function genereerImageVerzoek(prompt, size) {
  try {
    showSpin()

    const response = await fetch('/openai/fotomaker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        size,
      }),
    })

    if (!response.ok) {
      removeSpin()
      throw new Error('De foto werd helaas niet generereed.')
    }

    const data = await response.json()
    // console.log(data)

    bericht.textContent = `Uw gemaakte foto met uw bechrijving: ${prompt}`

    const imgURL = data.data

    document.querySelector('#img').src = imgURL

    removeSpin()


    document.getElementById('prompt').value = ''


  } catch (error) {
    document.querySelector('#msg').textContent = error
  }
}

// Show Spinner
function showSpin() {
  document.querySelector('.spin').classList.add('show')
}
function removeSpin() {
  document.querySelector('.spin').classList.remove('show')
}

document.querySelector('#image-form').addEventListener('submit', onSubmit)
