const texts = document.querySelector(".texts");

function speak(sentence) {
  const text_speak = new SpeechSynthesisUtterance(sentence);

  text_speak.rate = 1;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  var day = new Date();
  var hr = day.getHours();

  if (hr >= 0 && hr < 12) {
    speak("Good Morning ");
  } else if (hr == 12) {
    speak("Good noon ");
  } else if (hr > 12 && hr <= 17) {
    speak("Good Afternoon ");
  } else {
    speak("Good Evening ");
  }
}

window.addEventListener("load", () => {
  
  

  speak("hey! i am motherbee");
  speak("and i am here to assist on maternal care");
   let p = document.createElement("p");
   p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Hey! i am motherbee and i am here to assist on maternal care";
      texts.appendChild(p);
  wishMe();
});

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);
      speak(p.innerText);
    }
    if (
      text.includes("what's your name") 
     ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Empower";
      texts.appendChild(p);
speak(p.innerText);
    }
    if (text.includes("exercise") && text.includes("pregnancy") ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "Generally, yes. However, it's essential to consult with your healthcare provider before starting or continuing any exercise routine. Low-impact activities like walking and swimming are often recommended";
      texts.appendChild(p);
   speak(p.innerText);
    }

    if (text.includes("food") && text.includes("avoid")&& text.includes("pregnancy") ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "Certain foods, like raw seafood, unpasteurized dairy, and undercooked meats, should be avoided. Consult with your doctor for a comprehensive list. Generally, a balanced diet with a variety of nutrients is crucial.";
      texts.appendChild(p);
      speak(p.innerText);
    }

    if (text.includes("weight")&&text.includes("gain") && text.includes("pregnancy")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "Weight gain varies, but on average, a healthy weight gain during pregnancy is between 25-35 pounds for most women. However, individual recommendations may differ";
      texts.appendChild(p);
    speak(p.innerText);
    }

    if (text.includes("travel")&&text.includes("during") && text.includes("pregnancy")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "In many cases, it's safe to travel during pregnancy, especially in the early and middle stages. However, it's crucial to discuss travel plans with your healthcare provider, especially if you're at risk for complications";
      texts.appendChild(p);
    speak(p.innerText);
    }

    if (text.includes("prenatal tests")&&text.includes("tests") && text.includes("pregnancy")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "Routine prenatal tests include blood tests, ultrasounds, and screenings for conditions like gestational diabetes. Your healthcare provider will recommend specific tests based on your health and medical history";
      texts.appendChild(p);
    speak(p.innerText);
    }
    
  }
});

recognition.addEventListener("end", () => {
  
  recognition.start();
   p = document.createElement("p");
});

recognition.start();
