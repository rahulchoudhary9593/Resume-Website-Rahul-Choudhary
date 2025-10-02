// Author - Rahul Choudhary


// Function for email
function openEmail(e) {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        //  Mobile → open default mail app
        window.location.href =
            "mailto:rahulchoudhary1715@gmail.com?subject=Inquiry%20About%20Your%20Work&body=Hello%20Rahul%20Choudhary,%0A%0AI%20hope%20this%20message%20finds%20you%20well.%20My%20name%20is%20[Your%20Name],%20and%20I%20am%20reaching%20out%20to%20learn%20more%20about%20your%20work%20and%20experience%20in%20[your%20field].%0A%0AHere%20are%20my%20details%20for%20your%20reference:%0A- Name: [Your Name]%0A- Email: [Your Email]%0A- [Any other relevant details]%0A%0AI%20would%20greatly%20appreciate%20it%20if%20you%20could%20share%20some%20insights%20or%20guidance%20regarding%20your%20work.%20Thank%20you%20for%20your%20time%20and%20consideration.%0A%0ABest%20regards,%0A[Your Name]";
    } else {
        //  Desktop → open Gmail in browser
        window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=rahulchoudhary1715@gmail.com&su=Inquiry%20About%20Your%20Work&body=Hello%20Rahul%20Choudhary,%0A%0AI%20hope%20this%20message%20finds%20you%20well.%20My%20name%20is%20[Your%20Name],%20and%20I%20am%20reaching%20out%20to%20learn%20more%20about%20your%20work%20and%20experience%20in%20[your%20field].%0A%0AHere%20are%20my%20details%20for%20your%20reference:%0A- Name: [Your Name]%0A- Email: [Your Email]%0A- [Any other relevant details]%0A%0AI%20would%20greatly%20appreciate%20it%20if%20you%20could%20share%20some%20insights%20or%20guidance%20regarding%20your%20work.%20Thank%20you%20for%20your%20time%20and%20consideration.%0A%0ABest%20regards,%0A[Your Name]",
            "_blank"
        );
    }
}

// For Phone call
function makeCall(e) {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const phoneNumber = "+918107199593";

    if (isMobile) {
        // Mobile → open call app
        window.location.href = `tel:${phoneNumber}`;
    } else {
        // Desktop → show message / copy
        alert(`Please call this number from your phone: ${phoneNumber}`);
    }
}