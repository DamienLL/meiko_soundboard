// Écouteur d'événement pour détecter lorsque l'extension est chargée
window.addEventListener("load", () => {
  // Créer un bouton pour chaque son de la Soundboard
  const sounds = [
    { name: "Sound 1", file: "sound1.mp3" },
    { name: "Sound 2", file: "sound2.mp3" },
    { name: "Sound 3", file: "sound3.mp3" },
  ];

  sounds.forEach((sound) => {
    // Pour chaque son
    const button = document.createElement("button"); // Creer un bouton
    button.innerText = sound.name; // Ajouter le nom du bouton

    // Ajouter un événement click pour jouer le son lorsque le bouton est cliqué
    button.addEventListener("click", () => {
      const audio = new Audio(`sounds/${sound.file}`); // Creer un audio
      audio.play();
    });

    // Ajouter le bouton à la page Twitch
    document.body.appendChild(button); // Ajouter le bouton
  });
});
