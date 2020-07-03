// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDyIydxo9C0zZK5AqCO7aXaZiGPNQJ9DKM",
    authDomain: "prova1-ad8ce.firebaseapp.com",
    databaseURL: "https://prova1-ad8ce.firebaseio.com",
    projectId: "prova1-ad8ce",
    storageBucket: "prova1-ad8ce.appspot.com",
    messagingSenderId: "627700350371",
    appId: "1:627700350371:web:3b7ec0eb0eeb8a6f0c2e16"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// melodies & levels 
t = new Audio("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/metronome_1.mp3?alt=media&token=7465962e-7846-42f5-985e-bd81cb3ae29a");
base1 = new Audio ("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/1d.mp3?alt=media&token=efa026c8-6f7b-4c26-ab25-d1a36f7f6dd8");
track1 = new Audio ("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/1p.mp3?alt=media&token=271921e2-eb36-4930-a746-bf1e2813432c");
base2 = new Audio ("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/2d.mp3?alt=media&token=a3a9028b-fb29-4862-91f4-40f5a2b2cad4");
track2 = new Audio ("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/2p.mp3?alt=media&token=ef1e480c-b504-4dbf-9e42-3463d6bd5c5c");
base3 = new Audio ("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/3d.mp3?alt=media&token=e108b052-c94a-4538-b536-65d091801a01");
track3 = new Audio ("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/3p.mp3?alt=media&token=e3d41803-e488-4645-ab51-57509a4d988e");
base4 = new Audio ("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/4d.mp3?alt=media&token=676bff53-d188-4b14-aba4-ed73e9d7902a");
track4 = new Audio ("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/4p.mp3?alt=media&token=ae3a81c5-d6a2-4256-a45e-6043530a81cb");
base5 = new Audio ("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/5d.mp3?alt=media&token=5e54fdbe-db38-4a49-9473-ad3572c08af6");
track5 = new Audio ("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/5p.mp3?alt=media&token=ea8caf16-efde-41e0-8f58-fc7b6aff1ecb");
base6 = new Audio ("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/6d.mp3?alt=media&token=f901a796-3d50-4023-ac68-b0947ea34cc4");
track6 = new Audio ("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/6p.mp3?alt=media&token=34fdc546-2bca-4df5-8eb7-ea0368d2e9cc");

function choose_level(lvl) {
  level = lvl;
  container2.style.fontSize = "20px";
  sep = document.getElementsByClassName("separatore");
  sep2 = document.getElementsByClassName("separatore2");
  sep3 = document.getElementsByClassName("separatore3");
  drums_elements = document.getElementsByClassName("drums"); 
  livello.innerHTML = "Livello: " + level;
  schermata_inizio.style.backgroundImage = "none";
  next.style.visibility = "visible";
  arr = document.getElementsByClassName("levels");
  for(i = 0 ; i < arr.length ; i++) {
    arr[i].style.visibility = "hidden";
  }
  switch (level) {
  case 1:
    melody = "zzzzccccxxxxvvvv";
    document.body.style.background = "DarkOliveGreen";
    schermata_descrizione1.style.visibility = "visible";
    container.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/livello%201%20terra.jpg?alt=media&token=975139e9-07c3-4adc-9ace-e1f6a1fe419e')"; 
    container2.innerHTML = "<br> C <br><br><br><br> Emin <br> <br><br><br><br>Dmin <br> <br><br><br>F<br><p style='font-size:15px; font-weight:none; text-shadow:none; position:absolute; top: 15px; left: 30px;'> <br><br>G-E-C <br><br><br><br><br><br> G-E-B <br><br><br><br><br><br>A-F-D  <br><br><br><br><br><br>A-F-C</p>";
    base1.play();
    break;
  case 2:
    melody = "xxxxbbbbnnnnbbbb";
    document.body.style.background = "FireBrick";
    schermata_descrizione2.style.visibility = "visible";
    container.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/livello%202.jpg?alt=media&token=f6c5136c-76ba-4641-8563-12ec888eadfe')";
    container2.innerHTML = "<br> Dmin <br><br><br><br> Gmin <br><br><br><br><br>Amin  <br><br><br><br>Gmin<br><p style='font-size:15px; font-weight:none; text-shadow:none; position:absolute; top: 15px; left: 30px;'><br><br>A-F-D <br><br><br><br><br><br> G-D-A# <br><br><br><br><br><br> A-E-C <br><br><br><br><br><br> G-D-A#</p>";
    base2.play();
    break;
  case 3:
    melody = "jjvvddjjjjvvddjj";
    document.body.style.background = "orange";
    schermata_descrizione3.style.visibility = "visible";
    container.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/livello%203.jpg?alt=media&token=3d0f47c9-b56f-4417-bb8e-28ddc0d99b1e')";
    for(i = 0; i < sep.length; i++) {
    sep[i].style.visibility = "visible";}
    base3.play();
    container2.style.fontSize = "16px";
    container2.innerHTML = " A#min <br><br><br> F7sus/C <br><br><br> D#sus2 <br><br> A#add4 <br><br><br> A#min <br><br><br> F7sus/C <br><br><br> D#sus2 <br><br> A#add4<br><p style='font-size:12px; font-weight:none; text-shadow:none; position:absolute; top: 15px; left: 30px;'>F-C#-A# <br><br><br><br> F-D#-C <br><br><br><br> F-D#-A# <br><br><br> F-D#-A# <br><br><br><br> F-C#-A# <br><br><br><br> F-D#-C <br><br><br><br> F-D#-A# <br><br><br><br> F-D#-A#</p>";
    break;
  case 4:
    melody = "xxxxddddzzzzjjjj";
    drums = "iopoiopoiopoiopo";
    document.body.style.background = "violet";
    schermata_descrizione4.style.visibility = "visible";
    container.style.left = "760px";
    container_drum.style.visibility = "visible";
    container.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/livello%204.jpg?alt=media&token=d7720775-0495-417b-a1d1-0d560a66b623')";
    for(i = 0 ; i < drums_elements.length ; i++) {
      drums_elements[i].style.visibility = "visible";}
    for(i = 0; i < sep.length/2; i++) {
      sep[i*2].style.visibility = "hidden";}
    for(i = 0; i < sep3.length; i++) {
    sep3[i].style.visibility = "visible";}
    base4.play();
    container2.innerHTML = "<br>Dmin <br><br><br><br>  D#min <br><br><br><br> Cmin  <br><br><br><br><br>Daug<br><p style='font-size:15px; font-weight:none; text-shadow:none; position:absolute; top: 15px; left: 20px;'><br><br>A-F-D <br><br><br><br><br><br> A#-F#-D# <br><br><br><br><br><br> G-D#-C <br><br><br><br><br><br> A#-F#-D</p>";
    break;
  case 5:
    melody = "zzzzbbbbssssdddd";
    drums = "iopoiopoiopoiopo";
    document.body.style.background = "blue";
    schermata_descrizione5.style.visibility = "visible";
    container_drum.style.visibility = "visible";
    container.style.left = "760px";
    container.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/livello%205.jpg?alt=media&token=678190e5-09af-4903-b18b-c948a0a5501b')";
    for(i = 0 ; i < drums_elements.length ; i++) {
      drums_elements[i].style.visibility = "visible";}
    for(i = 0; i < sep3.length; i++) {
    sep3[i].style.visibility = "visible";}
    base5.play();
    container2.innerHTML = "<br> Cmin <br><br><br><br> Gdim <br><br><br><br><br> C#  <br><br><br><br> D#<br><p style='font-size:15px; font-weight:none; text-shadow:none; position:absolute; top: 15px; left: 25px;'><br><br>G-D#-C <br><br><br><br><br><br> A#-G-C# <br><br><br><br><br><br> G#-F-C# <br><br><br><br><br><br> A#-G-D#</p>";
    break;
  case 6:
    melody = "zzzzxxxxvvvvbbbb";
    melodyB = "hhvvjjvvhhvvjjvv";
    drums = "iopoiopoiopoiopo";
    document.body.style.background = "grey";
    schermata_descrizione6.style.visibility = "visible";
    container_drum.style.visibility = "visible";
    container.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/livello%206.jpg?alt=media&token=e1ae2424-8a0a-4d0f-857a-0d20ae2e58a7')";
    base6.play();
    container2.innerHTML = " <br>Cmin <br><br><br><br>Gdim <br><br><br><br>  C# <br><br><br><br><br> D#<br><p style='font-size:15px; font-weight:none; text-shadow:none; position:absolute; top: 15px; left: 25px;'><br><br>G-D#-C <br><br><br><br><br><br> A#-G-C# <br><br><br><br><br> G#-F-C# <br><br><br><br><br><br><br>A#-G-D#</p>";
    container3.style.visibility = "visible";
    for(i = 0; i < sep2.length; i++) {
      sep2[i].style.visibility = "visible";}
    container3.style.fontSize = "17px";
    container3.innerHTML = "G# <br><br><br> Fmin <br><br> A# <br><br><br> Fmin <br><br> G#<br><br><br> Fmin <br><br> A# <br><br><br> Fmin<p style='font-size:12px; font-weight:none; text-shadow:none; position:absolute; top: 15px; left: 28px;'><br>D#-C-G# <br><br><br> C-G#-F <br><br><br> D-A#-F <br><br><br><br><br> C-G#-F <br><br><br> D#-C-G# <br><br><br><br> C-G#-F <br><br><br> D-A#-F <br><br><br><br><br> C-G#-F</p>";
    container_drum.style.left = "450px";
    container.style.left = "890px";
    for(i = 0; i < sep3.length; i++) {
    sep3[i].style.visibility = "visible";
    sep3[i].style.left = "459px";}
    break;
  case 7:
    melody = "zzzzbbbbxxxxmmmmxxbbccnn";
    drums = "iipoiipoiipoiipo";
    document.body.style.background = "yellow";
      schermata_descrizione7.style.visibility = "visible";
      container.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/livello%207.jpg?alt=media&token=1beae32e-a6e8-4f13-bf04-163892030039')";
    container2.style.fontSize = "35px;";
    break;
}
}

function avanti() {
 
  base1.pause(); 
  base2.pause();
  base3.pause();
  base4.pause();
  base5.pause();
  base6.pause();
  next.style.visibility = "hidden";
  schermata_descrizione5.style.visibility = "hidden";
  schermata_descrizione6.style.visibility = "hidden";
  schermata_descrizione7.style.visibility = "hidden";
  schermata_inizio.style.visibility = "hidden";
  schermata_descrizione1.style.visibility = "hidden";
  schermata_descrizione2.style.visibility = "hidden";
  schermata_descrizione3.style.visibility = "hidden";
  schermata_descrizione4.style.visibility = "hidden";
  schermata_inizio.style.visibility = "hidden";
}

function vittoria() {
    schermata_vittoria.style.visibility = "visible";
    nextlevel.style.visibility = "visible";
    container.style.filter = "blur(8px)";
    container2.style.filter = "blur(8px)";
    for(i = 0; i < sep.length; i++) {
    sep[i].style.filter = "blur(8px)";}
    container3.style.filter = "blur(8px)";
    for(i = 0; i < sep2.length; i++) {
    sep2[i].style.filter = "blur(8px)";}
    container_drum.style.filter = "blur(8px)";
    for(i = 0; i < sep3.length; i++) {
    sep3[i].style.filter = "blur(8px)";}
    butto = document.getElementsByClassName("buttons");
    for(i = 0; i < butto.length; i++) {
    butto[i].style.filter = "blur(8px)";
    }
    temp = document.getElementsByClassName("tempo");
    for(i = 0; i < temp.length; i++) {
    temp[i].style.filter = "blur(8px)";
    }
    livello.style.visibility = "hidden";
    document.getElementById("punteggio").style.visibility = "hidden";
}

function sconfitta() {
    document.getElementById("try_again").style.visibility = "visible";
    schermata_sconfitta.style.visibility = "visible";
    container.style.filter = "blur(8px)";
    container2.style.filter = "blur(8px)";
    for(i = 0; i < sep.length; i++) {
    sep[i].style.filter = "blur(8px)";}
    container3.style.filter = "blur(8px)";
    for(i = 0; i < sep2.length; i++) {
    sep2[i].style.filter = "blur(8px)";} 
    container_drum.style.filter = "blur(8px)";
    for(i = 0; i < sep3.length; i++) {
    sep3[i].style.filter = "blur(8px)";}
    butto = document.getElementsByClassName("buttons");
    for(i = 0; i < butto.length; i++) {
    butto[i].style.filter = "blur(8px)";
    }
    temp = document.getElementsByClassName("tempo");
    for(i = 0; i < temp.length; i++) {
    temp[i].classList.add("metro");
    temp[i].style.filter = "blur(8px)";
    }
    livello.style.visibility = "hidden";
    document.getElementById("punteggio").style.visibility = "hidden";
}

function next_level() {
    livello.style.visibility = "visible";
    document.getElementById("punteggio").style.visibility = "visible";
    schermata_vittoria.style.visibility = "hidden";
    nextlevel.style.visibility = "hidden";
    container.style.filter = "none";
    container2.style.filter = "none";
    for(i = 0; i < sep.length; i++) {
    sep[i].style.filter = "none";}
    container3.style.filter = "none";
    for(i = 0; i < sep2.length; i++) {
    sep2[i].style.filter = "none";}
    container_drum.style.filter = "none";
    for(i = 0; i < sep3.length; i++) {
    sep3[i].style.filter = "none";}
    butto = document.getElementsByClassName("buttons");
    document.getElementById("schermata_inizio").style.visibility = "visible";
    for(i = 0; i < butto.length; i++) {
    butto[i].style.filter = "none";
    }
  temp = document.getElementsByClassName("tempo");
    for(i = 0; i < temp.length; i++) {
    temp[i].style.filter = "none";
    temp[i].innerHTML = " ";
    }
  restart_game()
  level = level+1;
  choose_level(level)
}

function try_again() {
    schermata_sconfitta.style.visibility = "hidden";
    document.getElementById("try_again").style.visibility = "hidden";
    livello.style.visibility = "visible";
    document.getElementById("punteggio").style.visibility = "visible";
    schermata_vittoria.style.visibility = "hidden";
    nextlevel.style.visibility = "hidden";
    container.style.filter = "none";
    container2.style.filter = "none";
    for(i = 0; i < sep.length; i++) {
    sep[i].style.filter = "none"}
    container3.style.filter = "none";
    for(i = 0; i < sep2.length; i++) {
    sep2[i].style.filter = "none"}
    container_drum.style.filter = "none";
    for(i = 0; i < sep2.length; i++) {
    sep3[i].style.filter = "none";}
    butto = document.getElementsByClassName("buttons");
    for(i = 0; i < butto.length; i++) {
    butto[i].style.filter = "none";
    }
  temp = document.getElementsByClassName("tempo");
    for(i = 0; i < temp.length; i++) {
    temp[i].style.filter = "none";
    temp[i].innerHTML = " ";
    }
  drums_elements = document.getElementsByClassName("drums"); 
  for(i = 0 ; i < drums_elements.length ; i++) {
    if(level>3) {
    drums_elements[i].style.visibility = "visible";
    if(drums_elements[i].classList != "played" ) {
    drums_elements[i].classList.add("played");
  }
}
  }
  livello.innerHTML = "Livello: "+ level ;
  points = 500;
  document.getElementById("punteggio").innerHTML = "Points: "+ points ;
  sequence = new Array();
  drum_seq = new Array();
  p = 0;
  a = 0;
  l = 0;
  k = 0;
  block = document.getElementsByClassName("obstacle");
  if(block.classList != "obstaclep") {
   for(i=0; i<=7; i++) {
  block[i].classList.add("obstaclep");
  }
 }
}

// player sequence
sequence = new Array();
drum_seq = new Array();
p = 0;
k = 0;
j = 0;

// points & removing obstacles

points = 500;

function add_points(val) {
  if(melod == 1) {
    melod = 0;
    block[0].classList.remove("obstaclep");
    points = points + val;
    document.getElementById("punteggio").innerHTML = "Points: "+ points ;
    block = document.getElementsByClassName("obstaclep");
} else if(percus == 1) {
    percus = 0;
    drums_elements[0].classList.remove("played");
    points = points + val;
    document.getElementById("punteggio").innerHTML = "Points: "+ points ;
    drums_elements = document.getElementsByClassName("played");
}
}

function win() {
   if(block.length == 0) {
      if(level > 3) {
         if(drums_elements.length == 0) {
             start_tempo()
             vittoria()
             track1.pause();
             track2.pause();
             track3.pause();
             track4.pause();
          } else {
            console.log("manca ancora il beat");
          }
    } else {
         start_tempo()
         vittoria()
         track1.pause();
         track2.pause();
         track3.pause();
         track4.pause();
    }
  }
}

function remove_points(val) {
  if(val < points) {
  points = points - val;
  document.getElementById("punteggio").innerHTML = "Points: "+ points ;
  if(points <= 0) {
     start_tempo()
     track1.pause();
     track2.pause();
     track3.pause();
     track4.pause();
     sconfitta()
    }
  } else {
    points = 0;
    document.getElementById("punteggio").innerHTML = "Points: "+ points ;
    start_tempo()
    track1.pause();
    track2.pause();
    track3.pause();
    track4.pause();
    sconfitta()
  }
}

// rules
function rules(nota) {
  console.log("current melody note: " + melody[beat]);
  console.log("You pressed " + nota);
  sequence[j] = nota;
  console.log("j is equal to: " + j);
  block = document.getElementsByClassName("obstaclep");
  switch(level) {
    case 1: 
      if(sequence[j] == melody[beat-1]) {
         if(j>0) {
            if(sequence[j-1] == melody[beat-2]) {
               add_points(100)
               j++;
               win()
          } else { 
               remove_points(50)
               j++;
          }
       } else {
            j++;
       }
    } else { 
        remove_points(50)
        j++;
    } 
    break;
    case 2: 
      a = keys.indexOf(melody[beat-1]);
      b = keys.indexOf(melody[beat-2]);
      if(sequence[j] != sequence[j-1]) {
         if(sequence[j] == keys[a] || sequence[j] == keys[a+3] || sequence[j] == keys[a+4] || sequence[j] == keys[a+7] || sequence[j] == keys[a+8] || sequence[j] == keys[a+9] || sequence[j] == keys[a-3] || sequence[j] == keys[a-4] || sequence[j] == keys[a-7] || sequence[j] == keys[a-8] || sequence[j] == keys[a-9]) {
           if(sequence[j] == melody[beat-1] && block.length == 8) {
               add_points(100)
               j++;
               win()
         } else if(sequence[j] == melody[beat-1] && block.length == 1) {
               add_points(100)
               j++;
               win()
         } else if(j>0) {
             if(sequence[j-1] == keys[b] || sequence[j-1] == keys[b+3] || sequence[j-1] == keys[b+4] || sequence[j-1] == keys[b+7] || sequence[j-1] == keys[b+8] || sequence[j-1] == keys[b+9] || sequence[j-1] == keys[b-3] || sequence[j-1] == keys[b-4] || sequence[j-1] == keys[b-7] || sequence[j-1] == keys[b-8] || sequence[j-1] == keys[b-9]) {
               add_points(100)
               
               j++;
               win()
           } else { 
               remove_points(50)
               j++;
           } 
         } else {
             j++;
         }
       } else { 
           remove_points(50)
           j++;
       } 
    } else { 
          remove_points(50)
          j++;
    } break;
      case 3: 
      a = keys.indexOf(melody[beat-1]);
      b = keys.indexOf(melody[beat-2]);
      if(sequence[j] != sequence[j-1]) {
         if(sequence[j] == keys[a] || sequence[j] == keys[a+3] || sequence[j] == keys[a+4] || sequence[j] == keys[a+7] || sequence[j] == keys[a+8] || sequence[j] == keys[a+9] || sequence[j] == keys[a-3] || sequence[j] == keys[a-4] || sequence[j] == keys[a-7] || sequence[j] == keys[a-8] || sequence[j] == keys[a-9]) {
           if(sequence[j] == melody[beat-1] && block.length == 8) {
               add_points(100)
               j++;
               win()
         } else if(sequence[j] == melody[beat-1] && block.length == 1) {
               add_points(100)
               j++;
               win()
         } else if(j>0) {
             if(sequence[j-1] == keys[b] || sequence[j-1] == keys[b+3] || sequence[j-1] == keys[b+4] || sequence[j-1] == keys[b+7] || sequence[j-1] == keys[b+8] || sequence[j-1] == keys[b+9] || sequence[j-1] == keys[b-3] || sequence[j-1] == keys[b-4] || sequence[j-1] == keys[b-7] || sequence[j-1] == keys[b-8] || sequence[j-1] == keys[b-9]) {
               add_points(100)
               j++;
               win()
           } else { 
               remove_points(50)
               j++;
           } 
         } else {
             j++;
         }
       } else { 
           remove_points(50)
           j++;
       } 
    } else { 
          remove_points(50)
          j++;
    } break;
      case 4: 
      a = keys.indexOf(melody[beat-1]);
      b = keys.indexOf(melody[beat-2]);
      if(sequence[j] != sequence[j-1]) {
         if(sequence[j] == keys[a] || sequence[j] == keys[a+3] || sequence[j] == keys[a+4] || sequence[j] == keys[a+7] || sequence[j] == keys[a+8] || sequence[j] == keys[a+9] || sequence[j] == keys[a-3] || sequence[j] == keys[a-4] || sequence[j] == keys[a-7] || sequence[j] == keys[a-8] || sequence[j] == keys[a-9]) {
           if(sequence[j] == melody[beat-1] && block.length == 8) {
               add_points(100)
               j++;
               win()
         } else if(sequence[j] == melody[beat-1] && block.length == 1) {
               add_points(100)
               j++;
               win()
         } else if(j>0) {
             if(sequence[j-1] == keys[b] || sequence[j-1] == keys[b+3] || sequence[j-1] == keys[b+4] || sequence[j-1] == keys[b+7] || sequence[j-1] == keys[b+8] || sequence[j-1] == keys[b+9] || sequence[j-1] == keys[b-3] || sequence[j-1] == keys[b-4] || sequence[j-1] == keys[b-7] || sequence[j-1] == keys[b-8] || sequence[j-1] == keys[b-9]) {
               add_points(100)
               j++;
               win()
           } else { 
               remove_points(50)
               j++;
           } 
         } else {
             j++;
         }
       } else { 
           remove_points(50)
           j++;
       } 
    } else { 
          remove_points(50)
          j++;
    } break;
      case 5: 
      a = keys.indexOf(melody[beat-1]);
      b = keys.indexOf(melody[beat-2]);
      if(sequence[j] != sequence[j-1]) {
         if(sequence[j] == keys[a] || sequence[j] == keys[a+3] || sequence[j] == keys[a+4] || sequence[j] == keys[a+7] || sequence[j] == keys[a+8] || sequence[j] == keys[a+9] || sequence[j] == keys[a-3] || sequence[j] == keys[a-4] || sequence[j] == keys[a-7] || sequence[j] == keys[a-8] || sequence[j] == keys[a-9]) {
           if(sequence[j] == melody[beat-1] && block.length == 8) {
               add_points(100)
               j++;
               win()
         } else if(sequence[j] == melody[beat-1] && block.length == 1) {
               add_points(100)
               j++;
               win()
         } else if(j>0) {
             if(sequence[j-1] == keys[b] || sequence[j-1] == keys[b+3] || sequence[j-1] == keys[b+4] || sequence[j-1] == keys[b+7] || sequence[j-1] == keys[b+8] || sequence[j-1] == keys[b+9] || sequence[j-1] == keys[b-3] || sequence[j-1] == keys[b-4] || sequence[j-1] == keys[b-7] || sequence[j-1] == keys[b-8] || sequence[j-1] == keys[b-9]) {
               add_points(100)
               j++;
               win()
           } else { 
               remove_points(50)
               j++;
           } 
         } else {
             j++;
         }
       } else { 
           remove_points(50)
           j++;
       } 
    } else { 
          remove_points(50)
          j++;
    } break;
  }  
  console.log(sequence);
  console.log(points);
}

function remove_drums(dru) {
  drum_seq[k] = dru;
  console.log(drums[beat]);
  if(dru == drums[beat-1]) {
     if(k > 0 && drums_elements.length != 0) {
            if(drum_seq[k-1] == drums[beat-2]) {
               add_points(100)
               console.log("giusto");
               k++;
               win()
          } else { 
               remove_points(20)
               console.log("sbagliato-1");
               k++;
          }
       } else {
            k++;
            console.log("drums_elements non esiste");
       }
     
     } else { 
      remove_points(20)
      console.log("sbagliato");
      k++;
 }
}


// sounds & keyboard & metronome
const c = new AudioContext();

keys = "zsxdcvgbhnjm";
time = 6;
beat = 0;
n = 0;
l = 0;
playing = 0;
dr = 0;

function play_note(freq) {
  const lfoo = c.createOscillator();
  lfoo.type = 'square';
  lfoo.frequency.value = 262*Math.pow(2, freq/12);
  lfoo.start();
  const g = c.createGain();
  lfoo.connect(g);
  g.gain.value = 0;
  g.gain.linearRampToValueAtTime(0.6, c.currentTime + 0.01);
  g.gain.linearRampToValueAtTime(0, c.currentTime + 0.5);
  g.connect(c.destination);
}

function play_drum(perc) {
  if(perc == "i") {
     var c = new Audio("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/Kick%20-%201.wav?alt=media&token=5109da0a-716d-4212-afd9-ae62ea3752a1");
    c.play();
     } else if(perc == "o") {
   var t = new Audio("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/H%20-%20Red.wav?alt=media&token=64527d71-4269-4b01-b86d-71e527c703ef");
    t.play();
  } else {
    var b = new Audio("https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/S%20-%20Cool.wav?alt=media&token=2cf062c3-0c1c-4047-a070-57fe57f9b8b9");
    b.play();
  }
}


setInterval(function () {
  if(n == 1) {
    if(l == 0) {
      t.play();
       }
    l++;
    if(points > 0) {
  silence();
    }
  metronome();
}
},6)

setInterval(function () {
  if(n == 2) {
    if(l == 0) {
      t.play();
       }
    l++;
    if(points > 0) {
  silence();
    }
  metronome();
}
},8)

function metronome() {
    if(l == 200) {
     l = 0;
     increase_silence()
     metron = document.getElementsByClassName("tempo");
     metron[beat].classList.remove("metro");
     //metron[beat].innerHTML = melody[beat];
     beat++;
     if(beat>15) {
        beat = 0;
        k = 0;
        for(i = 0; i < metron.length; i++) {
     metron[i].classList.add("metro");
     metron[i].innerHTML = " ";
   }
        if(level > 5) {
          if(melody == melodyB) {
            melody = melodyA;
          } else {
            melodyA = melody;
            melody = melodyB;
          }
        }
     }
  }
}

function increase_silence() {
     playing++;
     if(level > 3) {
        dr++;
        console.log("dr = " +dr);
        }
}

function silence() {
    if(l == 200) { 
     if( playing > 2 || dr > 2 ) {
      remove_points(20)
     } else {
       return;
     }
   }
}


function start_tempo() {
   if(n==0) {
     metron = document.getElementsByClassName("tempo");
     metron[beat].classList.remove("metro");
     beat++;
     playing = 0;
     dr = 0;
     p = 0;
     j = 0;
      if (level == 1) {
    n = 1;
    track1.play();
    track1.loop = true;
  }
    if (level == 2) {
    n = 1;
    track2.play();
    track2.loop = true;
  }
    if (level == 3) {
    n = 2;
    track3.play();
    track3.loop = true;
  }
    if (level == 4) {
    n = 1;
    track4.play();
    track4.loop = true;
  }
    if (level == 5) {
    n = 2;
    track5.play();
    track4.loop = true;
  }
    if (level == 6) {
    n = 2;
    track6.play();
    track6.loop = true;
  }
 } else {
   for(i = 0; i < metron.length; i++) {
     metron[i].classList.add("metro");
     metron[i].innerHTML = " ";
   }
    l = 0;
    n = 0;
    beat = 0;
    if (level == 1) {
      track1.pause();
      track1.currentTime = 0;
  }
    if (level == 2) {
    track2.pause();
    track2.currentTime = 0;
  }
    if (level == 3) {
    track3.pause();
    track3.currentTime = 0;
  }
    if (level == 4) {
    track4.pause();
    track4.currentTime = 0;
  }
   if (level == 5) {
    track5.pause();
    track5.currentTime = 0;
  }
   if (level == 6) {
    track6.pause();
    track6.currentTime = 0;
  }
  }
}

// keypress event
block = new Array(8);
key_pressed = new Array(1);
melod = 0;
percus = 0;

document.body.onkeypress = function(e) {
  
   console.log("l is equal to: "+l);
     if(e.repeat) return;
  if(block.length != 0 || drums_elements.length != 0) {
     if(points > 0) {
         if( e.key == "i" || e.key == "o" || e.key == "p") {
             if(l < 40) {
                 dr = 0;
                 percus = 1;
                 play_drum(e.key)
                 remove_drums(e.key)
           } else {
                 console.log("wrong tempo in the previous drum");
                 play_note(-15)
                 remove_points(20)
           }
       } else {
           if(l > 80 && l < 120) {
                 playing = 0;
                 melod = 1;
                 rules(e.key)
                 const tone = keys.indexOf(e.key);
                 play_note(tone)
         } else {
                 console.log("wrong tempo in the previous note");
                 play_note(-13)
                 remove_points(50)
         }
       }
   } else {
         return;
   }
 } else {
     return;
 }     
}

//restart game

function restart_game() {
  container.style.left = "690px";
  container2.innerHTML = " ";
  for(i = 0; i < sep.length/2; i++) {
      sep[i*2].style.visibility = "hidden";}
  container3.style.visibility = "hidden";
  container3.innerHTML = " ";
  for(i = 0; i < sep2.length; i++) {
      sep2[i].style.visibility = "hidden";}
  container_drum.style.visibility = "hidden";
  for(i = 0; i < sep3.length; i++) {
    sep3[i].style.visibility = "hidden";}
  track1.pause();
  track2.pause();
  track3.pause();
  track4.pause();
  schermata_inizio.style.backgroundImage = "url(https://firebasestorage.googleapis.com/v0/b/prova1-ad8ce.appspot.com/o/prima%20pagina.png?alt=media&token=66df06a0-979e-4d88-9c53-801134b2e18b)";
  drums_elements = document.getElementsByClassName("drums"); 
  for(i = 0 ; i < drums_elements.length ; i++) {
    drums_elements[i].style.visibility = "hidden";
    if(drums_elements[i].classList != "played" ) {
    drums_elements[i].classList.add("played");
  }
  }
  livello.innerHTML = "Livello: "+ level ;
  points = 500;
  document.getElementById("punteggio").innerHTML = "Points: "+ points ;
  schermata_inizio.style.visibility = "visible";
  sequence = new Array();
  drum_seq = new Array();
  p = 0;
  a = 0;
  l = 0;
  k = 0;
  schermata_vittoria.style.visibility = "hidden";
  nextlevel.style.visibility = "hidden";
  block = document.getElementsByClassName("obstacle");
  arr = document.getElementsByClassName("levels");
  for(i = 0 ; i < arr.length ; i++) {
    arr[i].style.visibility = "visible";
  }     
  if(block.classList != "obstaclep") {
   for(i=0; i<=7; i++) {
  block[i].classList.add("obstaclep");
  }
 }
}