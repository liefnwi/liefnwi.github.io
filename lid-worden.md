---
title: Lid worden
---
# Lid worden

### Lid van LIEF

Lid worden van LIEF kan eenvoudig door het onderstaande formulier in te vullen. De contributie bedraagt eenmalig €10,-, en als lid krijg je een “*Ik ben LIEF*”-t-shirt!

### Vriend van LIEF

Wil je niet direct lid worden van LIEF, maar wel betrokken worden bij acties of andere activiteiten? Word dan *vriend van LIEF*. Je bent dan geen contributie verschuldigd, maar krijgt helaas ook geen “Ik ben LIEF”-t-shirt. Wel word je bij alles dat er in de vereniging en partij gebeurt betrokken! Je wordt vriend van LIEF door hieronder jouw gegevens in te vullen.

<iframe loading="lazy" src="https://docs.google.com/forms/d/e/1FAIpQLSdLDo2EBgTp7kR8gacf_laSg5HhhrAmXQCK9qlQXkup9flvVg/viewform?embedded=true" marginheight="0" marginwidth="0" width="100%" height="1080" frameborder="0">Loading…</iframe>


#### Betaal hieronder direct je contributie

<div id="smart-button-container">
      <div style="text-align: center;">
        <div id="paypal-button-container"></div>
      </div>
    </div>
  <script src="https://www.paypal.com/sdk/js?client-id=AWPo3UNw1aofTXqz19h1co1JhT4IdeEGWh9cPvT1LkGoEAUoq4Z3vThMXe5PdxV-Dv1XHi4DkWsk87XL&enable-funding=venmo&currency=EUR" data-sdk-integration-source="button-factory"></script>
  <script>
    function initPayPalButton() {
      paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'checkout',
          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{"description":"Betalen contributie","amount":{"currency_code":"EUR","value":10}}]
          });
        },

        onApprove: function(data, actions) {
          return actions.order.capture().then(function(orderData) {
            
            // Full available details
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            // Show a success message within this page, e.g.
            const element = document.getElementById('paypal-button-container');
            element.innerHTML = '';
            element.innerHTML = '<h3>Thank you for your payment!</h3>';

            // Or go to another URL:  actions.redirect('thank_you.html');
            
          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-container');
    }
    initPayPalButton();
  </script>