// Écouteur d'événement pour détecter lorsque l'extension est chargée
window.addEventListener("load", () => {
  // Créer un bouton pour chaque son de la Soundboard
  const sounds = [
    { name: "Sound 1", file: "sound1.mp3" },
    { name: "Sound 2", file: "sound2.mp3" },
    { name: "Sound 3", file: "sound3.mp3" },
    { name: "Sound 4", file: "sound4.mp3" },
    { name: "Sound 5", file: "sound5.mp3" },
    { name: "Sound 6", file: "sound6.mp3" },
  ];

  sounds.forEach((sound) => {
    // Pour chaque son
    const button = document.createElement("button"); // Creer un bouton
    button.classList.add("sound_button") //on ajoute une class au bouton
    button.innerText = sound.name; // Ajouter le nom du bouton

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

