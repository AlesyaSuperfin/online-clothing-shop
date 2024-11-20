import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {

    const [state, handleSubmit] = useForm("mgvezwbe");
        if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Your name:
                <br />
                <input
                id="name"
                type="text"
                name="name"
                required=" "
                placeholder="name"
                />
                    <ValidationError 
                    prefix="name" 
                    field="name"
                    errors={state.errors}
                />
            </label>
            
            <br />

            <label>
                Your email:
                <br />
                <input
                id='email'
                type="email"
                name="email"
                required=" "
                placeholder="email"
                />
                    <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />

            </label>
            <br />

            <label>
                Your message:
                <br />
                <textarea
                id="message"
                name="message"
                required=" "
                placeholder="message"
                />
                    <ValidationError 
                    prefix="message" 
                    field="message"
                    errors={state.errors}
                />
            </label>
            <br />

            <button className='button_CTA' type="submit" disabled={state.submitting}>Submit</button>
        </form>
    )
}

export default ContactForm;