import banner from "~/assets/banner.png"

interface ContactUs {
}

function clickMe() {
    alert("You clicked me!");
}

function ContactUs({ }: ContactUs) {
    return (
        <a className='contact-us-button' href='https://api.whatsapp.com/send/?phone=6281317321451&text&type=phone_number&app_absent=0' target="popup">
            <button type="button">
                Contact Us
            </button>
        </a>
    );
}

export default ContactUs;
