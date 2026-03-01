const zones=["Alone","Quiet","Group","Discussion"];

function generateSeats(n){
  const arr=[];
  for(let i=1;i<=n;i++){
    arr.push({
      id:i,
      zone:zones[i%zones.length],
      status:Math.random()>.75?"occupied":"available"
    });
  }
  return arr;
}

const floors={
  1:generateSeats(24),
  2:generateSeats(30),
  3:generateSeats(18)
};

let currentFloor=1;

const grid=document.getElementById("seatGrid");
const label=document.getElementById("currentFloor");

function render(){
  grid.innerHTML="";
  label.textContent=`Floor: ${currentFloor}`;
  floors[currentFloor].forEach(seat=>{
    const div=document.createElement("div");
    div.className=`seat ${seat.status}`;
    div.innerHTML=`<strong>S${seat.id}</strong><small>${seat.zone}</small>`;

    div.onclick=()=>{
      if(seat.status==="available"){
        seat.status="reserved";
      }else if(seat.status==="reserved"){
        seat.status="available";
      }
      render();
    };

    grid.appendChild(div);
  });
}

document.querySelectorAll("[data-floor]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll("[data-floor]").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    currentFloor=Number(btn.dataset.floor);
    render();
  });
});

render();
