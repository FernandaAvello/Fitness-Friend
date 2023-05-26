let exercises = ['sentadillas', 'bancos', 'peso muerto', 'prensas']

function* generador() {
    let i = 0
    yield exercises[i]
    i++
    yield exercises[i]
    i++
    yield exercises[i]
    i++
    yield exercises[i]
    i++
    return '..terminado'
}


const getRoutine = () => {
    let weeks = parseInt(document.getElementById('weeks').value)
    let days = parseInt(document.getElementById('days').value)
    const iteration = (weeks * days)*2
    console.log(iteration)
    console.log(`Semanas: ${weeks}`)
    console.log(`dias: ${days}`)

    let gen1 = generador()
    for (let i = 1; i <= iteration; i+=2) {
        let resGen = gen1.next()
        if (resGen.done) {
            gen1 = generador()
            resGen = gen1.next()
        }
        console.log(`Día ${i} ${resGen.value}`)
    }
}
