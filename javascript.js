function sayThanks() {
    document.getElementById("my-form").innerHTML = "Thank you for registering your interest! If we get enough interest in a new client booking system being available, we'll get to work!";
  }

window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        //alert("Thank you for submitting your interest in a new system! If there is enough interest, we'll get to work on creating this for you!");
        sayThanks();
      })
    });
  });
  