function Send() {

    var selLang = "en-US"

    var sQuestion = txtMsg.value;
    if (sQuestion == "") {
        alert("Type in your question!");
        txtMsg.focus();
        return;
    }

    var oHttp = new XMLHttpRequest();
    oHttp.open("POST", "https://api.openai.com/v1/chat/completions");
    oHttp.setRequestHeader("Accept", "application/json");
    oHttp.setRequestHeader("Content-Type", "application/json");
    oHttp.setRequestHeader("Authorization", "Bearer" + "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")

    oHttp.onreadystatechange = function () {
        if (oHttp.readyState === 4) {
            //console.log(oHttp.status);
            var oJson = {}
            if (txtOutput.value != "") txtOutput.value += "\n";

            try {
                oJson = JSON.parse(oHttp.responseText);
            } catch (ex) {
                txtOutput.value += "Error: " + ex.message
            }

            if (oJson.error && oJson.error.message) {
                txtOutput.value += "Error: " + oJson.error.message;
            } else if (oJson.choices && oJson.choices[0].text) {
                var s = oJson.choices[0].text;

                if (selLang.value != "en-US") {
                    var a = s.split("?\n");
                    if (a.length == 2) {
                        s = a[1];
                    }
                }

                if (s == "") s = "No response";
                txtOutput.value += "Chat GPT: " + s;
                TextToSpeech(s);
            }            
        }
    };

    var sModel = "gpt-3.5-turbo";
  
       var smessages= [{"role":"system", "content":"You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}]
      
      
    var iMaxTokens = 2048;
    var sUserId = "1";
    var dTemperature = 0.5;    

    var data = {
        model: sModel,
        messages:smessages,
        prompt: sQuestion,
        max_tokens: iMaxTokens,
        user: sUserId,
        temperature:  dTemperature,
        frequency_penalty: 0.0, //Number between -2.0 and 2.0  
                                //Positive values decrease the model's likelihood 
                                //to repeat the same line verbatim.
        presence_penalty: 0.0,  //Number between -2.0 and 2.0. 
                                //Positive values increase the model's likelihood 
                                //to talk about new topics.
        stop: ["#", ";"]        //Up to 4 sequences where the API will stop 
                                //generating further tokens. The returned text 
                                //will not contain the stop sequence.
    }

    oHttp.send(JSON.stringify(data));

    if (txtOutput.value != "") txtOutput.value += "\n";
    txtOutput.value += "Me: " + sQuestion;
    txtMsg.value = "";
}