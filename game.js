let scenes = {
    start: {
      text: "You're in your small Moscow apartment, a knock comes at the door. It's a coded message from your contact.",
      choices: ['Go immediately to the secret meeting place', 'Wait and gather your gear first'],
      nextScene: ['ambush', 'meeting']
    },
    ambush: {
      text: "You get ambushed on the way, the mission fails. You have no choice but to start again.",
      choices: ['Play again'],
      nextScene: ['start']
    },
    meeting: {
      text: "You successfully reach the meeting place with all necessary gear. Your contact is waiting.",
      choices: ['Trust your contact completely and follow their plan', 'Distrust your contact, devise your own plan'],
      nextScene: ['doubleAgent', 'infiltrate']
    },
    doubleAgent: {
      text: "Your contact was a double agent. You are caught by the KGB and your mission fails. You have no choice but to start again.",
      choices: ['Play again'],
      nextScene: ['start']
    },
    infiltrate: {
      text: "You manage to infiltrate the Soviet base and get hold of valuable intelligence about the impending attack. Now you need to get out and deliver the information to your superiors.",
      choices: ['Take the secret tunnel', 'Go out the front door in disguise'],
      nextScene: ['caught', 'success']
    },
    caught: {
      text: "You are caught while trying to escape. The mission fails. You have no choice but to start again.",
      choices: ['Play again'],
      nextScene: ['start']
    },
    success: {
      text: "Congratulations! You successfully deliver the intelligence and prevent a nuclear strike. The world is once again safe thanks to you.",
      choices: ['Play again'],
      nextScene: ['start']
    },
  }
  
  let currentScene = 'start';
  
  function updateScene() {
    document.getElementById("gameText").innerText = scenes[currentScene].text;
    document.getElementById("choice1").innerText = scenes[currentScene].choices[0];
    if (scenes[currentScene].choices[1]) {
      document.getElementById("choice2").style.display = "inline";
      document.getElementById("choice2").innerText = scenes[currentScene].choices[1];
    } else {
      document.getElementById("choice2").style.display = "none";
    }
    document.getElementById("choice1").onclick = function() { changeScene(0) };
    document.getElementById("choice2").onclick = function() { changeScene(1) };
  }
  
  function changeScene(choice) {
    currentScene = scenes[currentScene].nextScene[choice];
    updateScene();
  }
  
  updateScene();
  