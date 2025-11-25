    var url = 'https://whatsapp.socialintents.com/api/chat/siwhatsapp.1.0.js';
    var s = document.createElement('script');s.type = 'text/javascript';s.async = true;s.src = url;
    var chatSettings = {
        "backgroundColor": "#25d366",
        "textColor": "#000000",
        "position": "right",
        "marginBottom": "25",
        "marginLeft": "0",
        "marginRight": "25",
        "logo": "./whatsapp-logo-128px.png",
        "ctaText": "Chat with us!",
        "chatIcon": "1",
        "chatIconImageUrl": "",
        "showPopup": true,
        "welcomeText": "Hi there! How can I help you?",
        "messageText": "Hello, I have a question about {{page_link}}",
        "phoneNumber": "+393346057893"
    };
    s.onload = function() {
        addWidget(chatSettings);
    };
    var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);
