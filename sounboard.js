
// Écouteur d'événement pour détecter lorsque l'extension est chargée
window.addEventListener("load", () => {
  // Créer un bouton pour chaque son de la Soundboard
  const sounds = [

    { name: "Sound 1", file: "sound1.mp3", img: "sound_icon_01.png" },
    { name: "Sound 2", file: "sound2.mp3", img: "sound_icon_02.png" },
    { name: "Sound 3", file: "sound3.mp3", img: "sound_icon_03.png" },
    { name: "Sound 4", file: "sound4.mp3", img: "sound_icon_04.png" },
    { name: "Sound 5", file: "sound5.mp3", img: "sound_icon_05.png" },
    { name: "Sound 6", file: "sound6.mp3", img: "sound_icon_06.png" },

   

  ];

  sounds.forEach((sound) => {
    // Pour chaque son
    const button = document.createElement("button"); // Creer un bouton
    button.classList.add("sound_button") //on ajoute une class au bouton
    button.innerText = sound.name; // Ajouter le nom du bouton
    const icon = document.createElement("img"); // Créer la balise img pour l'icone
    icon.classList.add("button_icon")// On ajoute une class à l'image
    icon.src = `./static/images/${sound.img}`; // Source dynamique de l'icone
    icon.alt = `L'icone du son '${sound.name}'>` // Alt dynamique de l'icone
    button.appendChild(icon); // On rattache l'icone au bouton

    // Ajouter un événement click pour jouer le son lorsque le bouton est cliqué
    button.addEventListener("click", () => {
      const audio = new Audio(`sounds/${sound.file}`); // Creer un audio
      audio.play(); // Jouer le son
    });

    // Ajouter le bouton à la page Twitch
    const soundbox = document.querySelector(".soundbox_buttons_content");
    soundbox.appendChild(button); // Ajouter le bouton
  });
});

