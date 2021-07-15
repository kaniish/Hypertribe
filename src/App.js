import React from "react";

import Banner from "./Components/Banner";
import Communitynews from "./Components/Communitynews";
import Contactmanager from "./Components/Contactmanager";
import Documentsmedia from "./Components/Documents-media";
import Eventcalender from "./Components/Eventcalender";
import Header from "./Components/Header";
import Keyresources from "./Components/Key-resources";
import News from "./Components/News";
import Notification from "./Components/Notification";
import Resources from "./Components/Resources";
import Strategy from "./Components/Strategy";
import Task from "./Components/Task";

const App = () => {
  return (
    <div>
      <main className="wrapper">
        <header className="header">
          <div className="container">
            <div className="col">
              <Header />
            </div>
          </div>
        </header>

        <section className="banner">
          <div className="container">
            <div className="col">
              <Banner />
            </div>
          </div>
        </section>

        <section className="contentArea">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <Communitynews />
              </div>
              <div className="col-md-5">
                <News />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Notification />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Strategy />
              </div>
              <div className="col-md-4">
                <Task />
              </div>
              <div className="col-md-4">
                <Keyresources />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Eventcalender />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Resources />
              </div>
              <div className="col-md-4">
                <Documentsmedia />
              </div>
              <div className="col-md-4">
                <Contactmanager />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
