import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import './ChatGPT.css';

const configuration = new Configuration({
    organization: "org-LXLuuLknBXJzxZ3xph3tLFIP",
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export function ChatGPT(){
    let [messages,setMessages]=useState([{"role": "system", "content": "You will only answer queries related to sustainable development."}]);
    let [chat, setChat]=useState(['Assistant','user','Assistant2','user2','Assistant3','user3']);
    const handleSubmit = (e) => {
        e.preventDefault();
        let message={"role": "user", "content": e.target.message.value};
        async function feed() {
            let promise = new Promise(function(setMessages, reject) {
              setMessages(...messages,message);
            });
            await promise;
        }
        feed();
        setMessages(...messages,message);
        console.log(messages);

        var output=openai.createChatCompletion({
                "model": "gpt-3.5-turbo",
                "messages": messages,
        }).then((output)=>{
            console.log(output.data.choices[0].message.content);
            setMessages([...messages,output.data.choices[0].message]);
        });
        
    }
    
    return(
        <div id='Gpt'>
        <form onSubmit={(e) => {handleSubmit(e)}}>
        <div id='chat'>
            {chat.map((mess)=>(
                <div className='mess' id='mess1'>
                {<p>mess</p>}
                </div>
            ))}
        </div>
            <input type="text" id='message'/>
            <button type='submit'>send</button>
        </form>
        </div>
    )
}