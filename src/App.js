import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Particles from "react-tsparticles";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
          <div id="colorlib-main">
          <Particles 
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#ededed",
              },
              opacity: 0.5,
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 200,
                  duration: 2,
                  opacity: 0.2,
                  size: 10,
                },
                push: {
                  quantity: 4,
                },
                // repulse: {
                //   distance: 200,
                //   duration: 0.4,
                // },
                grab: {
                  opacity: 0.5,
                  distance: 200,
                },
              },
            },
            particles: {
              color: {
                value: "#d9ce17",
              },
              links: {
                color: "#edacac",
                distance: 80,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 500,
                },
                value: 80,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 2,
              },
            },
            detectRetina: true,
          }}
        />
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
