let coralStick1 = [];
let darkorchidStick2 = [];
let brownStick3 = [];
let mapColor = [];
let flag=0;

$(".btn-primary").click(() => {
  $(".btn-danger").hide();
  clearStick();
  doRandom();
  startTimer();
  trackResult();
});

let startTimer = () => {
  $(".timer").html("30");
  let time = 30;
  let x = setInterval(function () {
    time -= 1;
    $(".timer").html(time.toString());
    if(flag===1){
      clearInterval(x);
    }
    if (time == 0 && flag===0) {
      clearInterval(x);
      $(".btn-danger").show();
    }
  }, 1000);
};

let clearStick = () => {
  $(".stick1").empty();
  $(".stick2").empty();
  $(".stick3").empty();
  $(".btn-success").hide(); 
  $(".btn-danger").hide();
  coralStick1.length = 0; 
  darkorchidStick2.length = 0; 
  brownStick3.length = 0; 
  flag=0;
};

let random = () => {
  let val = Math.random();
  val *= 10;
  return Math.floor(val);
};

let append = (stick, disk, i) => {
  switch (stick) {
    case 0:
      switch (disk) {
        case 0:
          coralStick1.push(parseInt(i));
          mapColor[parseInt(i)] = "darkorchid";
          $("<div/>", {
            class: "darkorchid disk",
            id: i,
          }).appendTo(".stick1");
          break;
        case 1:
          coralStick1.push(parseInt(i));
          mapColor[parseInt(i)] = "brown";
          $("<div/>", {
            class: "brown disk",
            id: i,
          }).appendTo(".stick1");
          break;
        case 2:
          coralStick1.push(parseInt(i));
          mapColor[parseInt(i)] = "coral";
          $("<div/>", {
            class: "coral disk",
            id: i,
          }).appendTo(".stick1");
          break;

        default:
          break;
      }
      break;
    case 1:
      switch (disk) {
        case 0:
          darkorchidStick2.push(parseInt(i));
          mapColor[parseInt(i)] = "darkorchid";
          $("<div/>", {
            class: "darkorchid disk",
            id: i,
          }).appendTo(".stick2");
          break;
        case 1:
          darkorchidStick2.push(parseInt(i));
          mapColor[parseInt(i)] = "brown";
          $("<div/>", {
            class: "brown disk",
            id: i,
          }).appendTo(".stick2");
          break;
        case 2:
          darkorchidStick2.push(parseInt(i));
          mapColor[parseInt(i)] = "coral";
          $("<div/>", {
            class: "coral disk",
            id: i,
          }).appendTo(".stick2");
          break;
        default:
          break;
      }
      break;
    case 2:
      switch (disk) {
        case 0:
          brownStick3.push(parseInt(i));
          mapColor[parseInt(i)] = "darkorchid";
          $("<div/>", {
            class: "darkorchid disk",
            id: i,
          }).appendTo(".stick3");
          break;
        case 1:
          brownStick3.push(parseInt(i));
          mapColor[parseInt(i)] = "brown";
          $("<div/>", {
            class: "brown disk",
            id: i,
          }).appendTo(".stick3");
          break;
        case 2:
          brownStick3.push(parseInt(i));
          mapColor[parseInt(i)] = "coral";
          $("<div/>", {
            class: "coral disk",
            id: i,
          }).appendTo(".stick3");
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
};
let doRandom = () => {
  let zero = 0,
    one = 0,
    two = 0;
  for (let i = 1; i < 1000; ++i) {
    let who = random() % 3;
    if (who == 0) {
      if (zero == 3) continue;
      zero += 1;
    } else if (who == 1) {
      if (one == 3) continue;
      one += 1;
    } else {
      if (two == 3) continue;
      two += 1;
    }
    let f = zero + one + two;
    if (f < 4) {
      append(who, 0, f.toString());
    } else if (f < 7) {
      append(who, 1, f.toString());
    } else {
      append(who, 2, f.toString());
    }
  }
  $(".disk").draggable({
     revert: 'invalid' ,
    // start: function( event, ui ) {
   
    //   },
    // drag: function( event, ui ) {
    
    // },
    // stop: function( event, ui ) {
    
    // },
    containment: ".game-container",
  });
};

$(".stick1").droppable({ drop: Drop, accept : '.disk' });
$(".stick2").droppable({ drop: Drop2, accept: '.disk' });
$(".stick3").droppable({ drop: Drop3, accept: '.disk' });
function Drop(event, ui) {  
  let draggableId = ui.draggable.attr("id");
  let droppableId = $(this).attr("id");
  // console.log("drag ", draggableId, "drop ", droppableId);
  let res = draggableId.split(" ");
  let classes = ui.draggable.parent().attr("class");
  let fclass = classes.split(" ");
  // ui.draggable.parent().addClass("stick1");
  // ui.draggable.parent().removeClass(fclass[0]);
//   console.log(
//     "k ashce 1 number stick e => ",
//     draggableId,
//     " kun stick theke ashce => ",
//     fclass[0]
//   );
  // $(fclass[0]).remove(draggableId);
  let f = document.getElementById(draggableId);
  // f.parentElement.removeChild(f);
  let bb = document.getElementsByClassName("stick1");

  // console.log(f.parentElement);
  let x = document.getElementsByClassName(fclass[0]);
  // console.log(x[0]);
  move("coral", parseInt(draggableId));
  trackResult();
}
function Drop2(event, ui) {
  let draggableId = ui.draggable.attr("id");
  let droppableId = $(this).attr("class");
  let res = draggableId.split(" ");
  let classes = ui.draggable.parent().attr("class");
  let fclass = classes.split(" ");
  // ui.draggable.parent().addClass("stick2");
  // ui.draggable.parent().removeClass(fclass[0]);
//   console.log(
//     "k ashce 2 number stick e => ",
//     draggableId,
//     " kun stick theke ashce => ",
//     fclass[0]
//   );
  move("darkorchid", parseInt(draggableId));
  trackResult();
}
function Drop3(event, ui) {
  let draggableId = ui.draggable.attr("id");
  let droppableId = $(this).attr("class");
  let res = draggableId.split(" ");
  let classes = ui.draggable.parent().attr("class");
  let fclass = classes.split(" ");
  console.log(
    "k ashce 3 number stick e => ",
    draggableId,
    " kun stick theke ashce => ",
    fclass[0]
  );
  // ui.draggable.parent().addClass("stick3");
  // ui.draggable.parent().removeClass(fclass[0]);
  move("brown", parseInt(draggableId));
  trackResult();
}
let move = (whom, who) => {
  let a = coralStick1.indexOf(who);
  let b = darkorchidStick2.indexOf(who);
  let c = brownStick3.indexOf(who);
  if (a > -1) {
    coralStick1.splice(a, 1);
  } else if (b > -1) {
    darkorchidStick2.splice(b, 1);
  } else {
    brownStick3.splice(c, 1);
  }
  switch (whom) {
    case "coral":
      coralStick1.push(who);
      break;
    case "darkorchid":
      darkorchidStick2.push(who);
      break;
    case "brown":
      brownStick3.push(who);
      break;
    default:
      break;
  }
};
let trackResult = () => {
  let c = 0;
  let result = 1;
  console.log(coralStick1);
  console.log(darkorchidStick2);
  console.log(brownStick3);
  for (let x of coralStick1) {
    if (mapColor[x] == "coral") {
      c += 1;
    } else {
      result = 0;
    }
  }
  if (c != 3) result = 0;
  c = 0;
  for (let x of darkorchidStick2) {
    if (mapColor[x] == "darkorchid") {
      c += 1;
    } else {
      result = 0;
    }
  }
  if (c != 3) result = 0;
  c = 0;
  for (let x of brownStick3) {
    if (mapColor[x] == "brown") {
      c += 1;
    } else {
      result = 0;
    }
  }
  if (c != 3) result = 0;
  if(result==1){
     console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
     flag=1;
     $(".btn-success").show();
  }
};
