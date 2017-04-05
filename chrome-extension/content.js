var AUTOFILL_DETAILS = {
  ticket_quantity: 1,
  contact: {
    first_name: "Arthas",
    last_name: "Menethil",
    email: "arthas@blizzard.com",
  },
  credit_card: {
    number: "4111111111111111",
    exp_date: "09/19",
    cvv: "123"
  },
}


function clickButton() {
  console.log('Clicking Continue/Checkout button');
  
  var button = document.querySelectorAll('footer a[class="button button--primary "]')[0];

  if (!button) {
    console.log("Button not found :(");
    return;
  }

  var evt = document.createEvent("HTMLEvents");
  evt.initEvent("click", true, true);
  button.dispatchEvent(evt);

  console.log("Continue/Checkout clicked!");
}

function selectQuantity(fillNow) {
  // Selector
  var selector = document.querySelectorAll('select')[0];
  
  if (!selector) {
    console.log("Quantity fields not yet found :(");
    setTimeout(selectQuantity, 250);
    return;
  }
  
  if (!fillNow) {
    setTimeout(selectQuantity.bind(this, true), 1000);
    return;
  }
  
  selector.value = AUTOFILL_DETAILS.ticket_quantity;
  var evt = document.createEvent("HTMLEvents");
  evt.initEvent("change", true, true);
  selector.dispatchEvent(evt);

  console.log("Quantity selected!");
  
  clickButton();
}

function fillContactDetails(fillNow) {  
  // First name
  var first_names = document.querySelectorAll('input[name="first-name"]');
  
  if (first_names.length === 0) {
    console.log("Contact fields not yet found :(");
    setTimeout(fillContactDetails, 250);
    return;
  }
  
  if (!fillNow) {
    setTimeout(fillContactDetails.bind(this, true), 1000);    
    return;
  }
  
  [].forEach.call(first_names, function(input) {
    input.value = AUTOFILL_DETAILS.contact.first_name;
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("input", true, true);
    input.dispatchEvent(evt);
  });
  
  // Last name
  var last_names = document.querySelectorAll('input[name="last-name"]');
  [].forEach.call(last_names, function(input) {
    input.value = AUTOFILL_DETAILS.contact.last_name;
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("input", true, true);
    input.dispatchEvent(evt);
  });
  
  // Email
  var emails = document.querySelectorAll('input[name="email"]');
  [].forEach.call(emails, function(input) {
    input.value = AUTOFILL_DETAILS.contact.email;
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("input", true, true);
    input.dispatchEvent(evt);
  });
  
  console.log("Contact fields filled!");
  
  clickButton();
}

function fillCCDetails(fillNow) {
  // Credit card
  var cc_number = document.querySelector('input[name="ccname"]');
  
  if (!cc_number) {
    console.log("CC fields not yet found :(");
    setTimeout(fillCCDetails, 250);
    return;
  }
  
  if (!fillNow) {
    setTimeout(fillCCDetails.bind(this, true), 1000);    
    return;
  }
  
  cc_number.value = AUTOFILL_DETAILS.credit_card.number;
  var evt = document.createEvent("HTMLEvents");
  evt.initEvent("input", true, true);
  cc_number.dispatchEvent(evt);

  var cc_exp = document.querySelector('input[name="expiry"]');  
  cc_exp.value = AUTOFILL_DETAILS.credit_card.exp_date;
  var evt = document.createEvent("HTMLEvents");
  evt.initEvent("input", true, true);
  cc_exp.dispatchEvent(evt);

  var cc_cvv = document.querySelector('input[name="cvc"]');
  cc_cvv.value = AUTOFILL_DETAILS.credit_card.cvv;
  var evt = document.createEvent("HTMLEvents");
  evt.initEvent("input", true, true);
  cc_cvv.dispatchEvent(evt);
  
  console.log("CC fields filled!");
  
  // Uncomment if you want automatic purchase
  //clickButton(); 
}

function doShit() {
  if (document.location.hostname === 'www.universe.com' && document.location.pathname.indexOf('/embed') > -1) {
    console.log('Detected Blizzcon order page!');  
    selectQuantity();
    fillContactDetails();
    fillCCDetails();
  }
};

doShit();