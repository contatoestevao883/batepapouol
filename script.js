
let nameOfTheParticipant  
let newObj

function enterInChat(response){
    const conversas = response
    const main = document.querySelector("main")
    for(let i = 0; i < conversas.length; i++){
        if(conversas[i].type === 'status'){
            main.innerHTML += `
                <div>
                    <span> 
                    (${conversas[i].time})
                    </span>
                </div>
            `
        }
        if(conversas[i].type === 'message'){
            main.innerHTML += `
                <div>
                    <span> 
                    (${conversas[i].time})
                    </span>
                </div>
            `
        }
        if(conversas[i].type === 'private_message'){
            main.innerHTML += `
                <div>
                    <span> 
                    (${conversas[i].time})
                    </span>
                </div>
            `
        }
    }
    
}

getName()

function getName(){
    nameOfTheParticipant = prompt('Digite seu nome')

    newObj = {
        name: nameOfTheParticipant
    }

    const postParticipants = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', newObj)
    postParticipants.then(onlineVerify)
    postParticipants.catch(catchError)

}

function participantName(response){
    data = response.data
    console.log(response.status)
    console.log(data)
}

function catchError(error){
    alert('Este nome está em uso')
    console.log(error)
}

function onlineVerify(){
    setInterval(online, 5000)
}

function online(){
    newObj = {
        name: nameOfTheParticipant
    }
    const isOn = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', newObj)
    isOn.then(participantName)
    isOn.catch(catchError)

    console.log('online')
}

function message(){
    const inputValue = document.querySelector(".inputValue")
    const messageFormat = {
        from: nameOfTheParticipant,
		to: "Todos",
		text: inputValue.value,
		type: "message"
    }
    const messagePost = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages', messageFormat)
    messagePost.then(newMessage)
    messagePost.catch(catchErrorMessage)
}


function newMessage(response){
    enterInChat(response.data)
    console.log(data)
}

function catchErrorMessage(error){
    console.log(error)
}

function sendMessage(){
    const inputValue = document.querySelector(".inputValue")
    const newMessageObj = {
        from: nameOfTheParticipant,
        to: "Todos",
        text: inputValue.value,
        type: "message"
    }

    const messagePost = axios('https://mock-api.driven.com.br/api/v6/uol/messages', newMessageObj)
}
enterInChat()