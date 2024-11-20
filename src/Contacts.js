import ContactForm from './Components/ContactForm';

function Contacts () {
    return(
        <div className="container">
            <h1>Contact us!</h1>
            <p className='info'>Our team can give you expert advice across all our beauty brands. <br></br>Call 1.800.723.2889 or chat with a specialist during the hours below:</p>
            <p className='info'>Monday-Friday: 10:30am-8:30pm ET
                <br />
                Saturday-Sunday: 10:30am-6:30pm ET
            </p>
            <ContactForm />
        </div>
    )
}

export default Contacts;