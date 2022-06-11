const messageList = document.getElementById('message-list');
const send = document.getElementById('send');
const textInput = document.getElementById('text-input');

async function fetchMessages()
{
    let response = await fetch('http://localhost:5000/messages');
    let json = await response.json();
    console.log(json);
    json.forEach(i => 
        {
            const element = document.createElement('li');
            const text = document.createTextNode(i.text);
            element.appendChild(text);
            messageList.appendChild(element);
        });
};

send.addEventListener('click', async ()=>
{
    
    const response = await axios.post('http://localhost:5000/messages', {text : textInput.value});
    
    while (messageList.lastElementChild) {
        messageList.removeChild(messageList.lastElementChild);
      }

    await fetchMessages();

});

fetchMessages();