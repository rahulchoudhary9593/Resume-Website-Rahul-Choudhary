// Author - Rahul Choudhary


// Function for email
function openEmail(e) {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        //  Mobile → open default mail app
        window.location.href =
            "mailto:rahulchoudhary1715@gmail.com?subject=Job%20Opportunity%20at%20[Company%20Name]&body=Hello%20Rahul%20Choudhary,%0A%0AI%20am%20[HR%20Name]%20from%20[Company%20Name].%20We%20are%20interested%20in%20discussing%20a%20potential%20job%20opportunity%20with%20you%20for%20the%20position%20of%20[Position%20Title].%0A%0APlease%20let%20us%20know%20a%20suitable%20time%20to%20connect%20or%20reply%20to%20this%20email%20for%20further%20details.%0A%0ABest%20regards,%0A[HR%20Name]%0A[Company%20Name]%0A[HR%20Email]%0A[HR%20Contact]";
    } else {
        //  Desktop → open Gmail in browser
        window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=rahulchoudhary1715@gmail.com&su=Job%20Opportunity%20at%20[Company%20Name]&body=Hello%20Rahul%20Choudhary,%0A%0AI%20am%20[HR%20Name]%20from%20[Company%20Name].%20We%20are%20interested%20in%20discussing%20a%20potential%20job%20opportunity%20with%20you%20for%20the%20position%20of%20[Position%20Title].%0A%0APlease%20let%20us%20know%20a%20suitable%20time%20to%20connect%20or%20reply%20to%20this%20email%20for%20further%20details.%0A%0ABest%20regards,%0A[HR%20Name]%0A[Company%20Name]%0A[HR%20Email]%0A[HR%20Contact]",
            "_blank"
        );
    }
}

// For Phone call
function makeCall(e) {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const phoneNumber = "+918107199593"; // apna number
    const message = "Hello Rahul Choudhary, I would like to know more about your work.";

    if (isMobile) {
        // WhatsApp link with pre-filled message
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappURL;

        // Fallback to call after 1.5s if WhatsApp not installed
        setTimeout(function() {
            window.location.href = `tel:${phoneNumber}`;
        }, 1500);
    } else {
        // Desktop → WhatsApp Web or alert
        const whatsappWebURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        const openWeb = confirm("Open WhatsApp Web to send a message? (Cancel to copy number)");
        if (openWeb) {
            window.open(whatsappWebURL, "_blank");
        } else {
            alert(`Please call or message this number from your phone: ${phoneNumber}`);
        }
    }
}