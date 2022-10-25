import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Config from '../config.js';
import MessageParser from '../MessageParser.jsx';
import ActionProvider from '../actionprovider.jsx';
import Chatbot from 'react-chatbot-kit'
import { createChatBotMessage } from 'react-chatbot-kit';

function Home() {

const messageWithProperties = createChatBotMessage('Hello world!', {
  widget: 'my-widget',
  payload: {}, // any value I want to send to the given widget or message
  delay: 1000,
});
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />

      </main>
      <Chatbot
        config={Config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;