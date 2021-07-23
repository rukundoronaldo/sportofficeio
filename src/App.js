import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Presenter from './components/Presenter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Section from './components/Section';
import Flexer from './components/Flexer';
import Numbers from './components/Numbers';
import Card from './components/Card';
import Form from './components/Form';
import Footer from './components/Footer';
import img3 from './components/images/img3.png'
import img4 from './components/images/img4.jpeg'
import img5 from './components/images/img5.png'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'  />
          <Route path='/'  />
          <Route path='/'  />
          <Route path='/'  />
        </Switch>
      </Router>

      <Presenter />
      <Section>
        <div className="numbersBack">
          <div className="numbers">
              <Flexer>
                  <Numbers people="MONITEURS" title=">25" />
                  <Numbers people="ÉLÈVES" title=">1000" />
                  <Numbers people="SUPPORT" title="7j/7" />
              </Flexer>
          </div>
        </div>
      </Section>

      <Section back="#383838">
      <div className="Cards">
        <div  className="avantage">
          <div className="div1" >
            <h1 className="titleAV">AVANTAGES.</h1>
            <p>Un logiciel de gestion des écoles de sport pour faciliter la gestion des réservations et le suivi client, ça s'est sport !</p>
          </div>
            <div>
              <Flexer>
                <Card img={img3} title="Temps réel" text="Intégrez à votre site internet un tunnel de réservation en temps réel pour permettre à vos clients de visualiser les disponibilités et de réserver en ligne." />
                <Card img={img4} title="Connectivité" text="Connectez votre planning à de nouveaux apporteurs d’affaires grâce au partage en temps réel des disponibilités de votre école." />
                <Card img={img5} title="Innovation" text="Utilisez facilement les données de réservations à des outils tiers pour automatiser vos processus. Et même, pourquoi pas, à votre propre application mobiles !" />
              </Flexer>
            </div>
        </div>
      </div>
      </Section>

      <Section>
        <div className="sender">
          <div  className="contact">
              <h1>CONTACT.</h1>
              <p>Téléphone : <span>06 76 55 76 58</span> </p>
              <p>Email : <span>florent@sportoffice.io</span></p>
              <p>Adresse : 43, rue des vinaigriers, 75010 Paris</p>
              <button>f icon</button>
          </div>
            <Form />
        </div>
      </Section>

      <Router>
        <Footer />
        <Switch>
          <Route path='/'  />
          <Route path='/'  />
          <Route path='/'  />
          <Route path='/'  />
        </Switch>
      </Router>
    </>
  );
}

export default App;
