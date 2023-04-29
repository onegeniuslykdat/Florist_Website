function receiveOrder() {
  let form = document.getElementById("desktopForm");
  let fname = form["fName"].value;
  let lname = form["lName"].value;
  alert("Dear " + fname + " " + lname + "... Order Received. Thank You!!!");
}

function receiveMobileOrder() {
  let form = document.getElementById("mobileForm");
  let fname = form["fName"].value;
  let lname = form["lName"].value;
  alert("Dear " + fname + " " + lname + "... Order Received. Thank You!!!");
}

function receiveFeedback() {
  let form = document.getElementById("desktopForm");
  let fname = form["fName"].value;
  alert("Dear " + fname + "... Feedback Received. Thank You!!!");
}

function receiveMobileFeedback() {
  let form = document.getElementById("mobileForm");
  let fname = form["fName"].value;
  alert("Dear " + fname + "... Feedback Received. Thank You!!!");
}

function loadOrderData() {
  let params = new URLSearchParams(document.URL.split("?")[1]);
  let orderNo = Math.round(Math.random() * 100).toString();
  let fname = params.get("fName").toUpperCase();
  let lname = params.get("lName").toUpperCase();
  let email = params.get("email");
  let flowername = params.get("flowerName").toUpperCase();
  let flowerqty = params.get("flowerQty").toUpperCase();

  let spanName = document.getElementById("formname");
  let iEmail = document.getElementById("email");
  let spanOrder = document.getElementById("ordernumber");
  let spanQty = document.getElementById("formquantity");
  let spanFlower = document.getElementById("formflower");

  spanName.innerText = fname + " " + lname;
  iEmail.innerText = email;
  spanOrder.innerText = "#" + orderNo;
  spanQty.innerText = flowerqty;
  spanFlower.innerHTML = flowername;
}

function loadFeedbackData() {
  let params = new URLSearchParams(document.URL.split("?")[1]);
  let fname = params.get("fName").toUpperCase();
  let email = params.get("email");
  let info = params.get("moreInfo");

  let spanName = document.getElementById("formname");
  let iEmail = document.getElementById("email");
  let spanInfo = document.getElementById("formmoreInfo");

  spanName.innerText = fname;
  iEmail.innerText = email;
  spanInfo.innerHTML = info;
}

function toggleMobileMenu() {
  let hamburger = document.getElementById("hamburger");
  let menu = document.getElementById("navmenu");
  let logo = document.getElementById("headerlogo");
  let minilogo = document.getElementById("miniheaderlogo");

  if (menu.style.display != "block") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

  if (menu.style.display != "none") {
    //logo.style.display = "none";
    logo.className = "left-thumbnail";
  } else {
    logo.style.display = "block";
    logo.className = "";
  }
}
