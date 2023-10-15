

const zapros = () => {
    fetch('https://jewelery-zmrts-default-rtdb.firebaseio.com/')
    .then(res => res.json())
    .then(data => console.log(data))
}

console.log(zapros());