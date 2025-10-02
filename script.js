// Author - Rahul Choudhary
function openEmail(e) {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // 📱 Mobile → open default mail app
        window.location.href =
            "mailto:rahulchoudha3455@gmail.com?subject=Hey%20Rahul%20Choudhary%20this%20is%20[your%20name]%20I%20want%20to%20know%20about%20your%20work.";
    } else {
        // 💻 Desktop → open Gmail in browser
        window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=rahulchoudha3455@gmail.com&su=Hey%20Rahul%20Choudhary%20this%20is%20[your%20name]%20I%20want%20to%20know%20about%20your%20work.",
            "_blank"
        );
    }
}