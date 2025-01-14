import image from './images/close-up-woman-sandals-near-shopping-bags_23-2148238183.jpg';

function About () {
    return(
        <div className="container">
            <h1>About us</h1>
            <p className='info'>"Estetica" is a lifestyle clothing company based on the Terry Francine Street, San Francisco. 
                <br></br>The brand is famous for its wonderfully comfy, colourful sweatshirts in a range of signature brights. More recently introducing unique prints across tunics and skirts, all designed in house in our Estetica Etc. studio.</p>
            <img src={image} className='imgAbout' width="600px" alt='aboutUs' />
        </div>
    )
}

export default About;