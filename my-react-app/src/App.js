import avatar from './avatar.jpg';
import './App.css';

/* ---- IMPORTATION DES  ---- */
import Image from "./Image";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";

/* ---- IMPORTATION DES COMPOSANTS DE REACT-BOOTSTRAP ---- */
import { Button, Card, Col, Container, Row } from 'react-bootstrap';


/* ---- COMPOSANT PRINCIPAL DE L'APPLICATION ---- */
const fullName = "Brahima Diarrassouba"; // Essayons de modifier la variable par une chaine de caracteres ou une chaine vide


function App() {
  return (
    <>
      <Container className='Container'>
        <Row className='Row'>
          <Col className='Col' lg={4}>
            <Card className='Card'>
              <Image />
              <Card.Body className='Card-Body'>
                <Card.Title className='Card-Title'>
                  <Name />
                  <Price />
                </Card.Title>
                <Card.Text className='Card-Text'>
                  <Description />
                </Card.Text>
                <Button className='Button'>Order now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Greeting fullName={fullName} />
        </Row>
      </Container>
    </>
  )
}

/* ---- CREATION DE COMPOSANT ---- */
function Greeting({ fullName }) {
  if (fullName !== "") {
    return (
      <div>
        <p style={{ textAlign: 'center', paddingTop: '20px', fontSize: '1.5rem' }}>
        {`Bonjour ${fullName}`}
        <img 
          src={avatar} 
          alt='profil' 
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '100%',
            marginInlineStart: '10px'
          }}
        />
        </p>
      </div>
    )
  }

  else {
    return (
      <div>
        <p style={{ textAlign: 'center', paddingTop: '20px', fontSize: '1.5rem' }}>
        {`Bonjour là`}
        </p>
      </div>
    )
  }

}

export default App;
