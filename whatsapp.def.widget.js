    var url = 'https://whatsapp.socialintents.com/api/chat/siwhatsapp.1.0.js';
    var s = document.createElement('script');s.type = 'text/javascript';s.async = true;s.src = url;
    var number = document.getElementsById("whatsappnumber").value;
    var chatSettings = {
        "backgroundColor": "#25d366",
        "textColor": "#000000",
        "position": "left",
        "marginBottom": "25",
        "marginLeft": "25",
        "marginRight": "0",
        "logo": "./whatsapp-logo-128px.png",
        "ctaText": "Chat with us!",
        "chatIcon": "1",
        "chatIconImageUrl": "",
        "showPopup": false,
        "welcomeText": "Contact Us",
        "messageText": "Hello, I have a question about a product",
        "phoneNumber": number
    };
    s.onload = function() {
        addWidget(chatSettings);
    };
    var x = document.getElementsByTagName('script')[0];x.parentNode.insertAfter(s, x);
