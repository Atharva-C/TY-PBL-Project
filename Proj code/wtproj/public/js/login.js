const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const err = document.getElementById('err')

document.getElementById("login").addEventListener('click', async (e) => {
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username.value, password: password.value })
        })
        const json = await response.json()
        if(response.status != 200) throw new Error(json.message)
        window.localStorage.setItem('username', json.username)
        window.localStorage.setItem('token', json.token)
        form.reset()
        navigateTo('/index.html')
    } catch (e) {
        err.innerText = e.message
    }
})

document.getElementById('register').addEventListener('click', () => {
    navigateTo('/register.html')
})

function navigateTo(link) {
    const a = document.createElement('a')
    a.href = link
    document.body.append(a)
    a.click()
    a.remove()
}