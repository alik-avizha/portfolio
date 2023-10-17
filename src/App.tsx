import React from "react";
import "./App.css";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";
import Work from "./work/Work";
import { Contacts } from "./contacts/Contacts";
import { Footer } from "./footer/Footer";
import { GlobalToast } from "./common/components/Toast/Toast";
import "react-toastify/dist/ReactToastify.css";
import { usePageLoadedState } from "./common/utils/usePageLoadedState";
import { AppLoader } from "./common/components/appLoader/AppLoader";

function App() {
    const [isLoaded] = usePageLoadedState();

    return (
        <div className="App">
            <AppLoader isLoaded={isLoaded}>
                <Header />
                <Main />
                <Skills />
                <Projects />
                <Work />
                <Contacts />
                <Footer />
                <GlobalToast />
            </AppLoader>
        </div>
    );
}

export default App;
