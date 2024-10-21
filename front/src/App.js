import React from "react";
import Page from "./component/page";
import PostList from "./container/post-list";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Logo from "./component/logo";

function App() {
  return (
    <Page>
      <Header/>
      <Logo/>
      <PostList />
      <Footer/>
    </Page>
  );
}

export default App;
