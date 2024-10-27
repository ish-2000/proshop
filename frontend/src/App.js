import React from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container fluid>
          <Row>
            <Col xs={3} md={2}>
              {/* Adjust the width of the sidebar as needed */}
              <Sidebar />
            </Col>
            <Col xs={9} md={10}>
              {/* Adjust the width of the main content as needed */}
              <h1>Welcome to Proshop</h1>
              <p>
                The beauty of online clothing lies in its convenience,
                diversity, and accessibility. It offers a wide range of fashion
                options from the comfort of one’s home, allowing customers to
                browse through various styles, brands, and trends effortlessly.
                With online clothing stores, people can access global fashion,
                discovering unique pieces that might not be available locally.
                The ease of comparing prices, reading customer reviews, and
                using virtual fitting tools ensures a more informed and
                satisfying shopping experience. Additionally, the availability
                of regular discounts and exclusive online collections adds to
                the appeal, making fashion both affordable and enjoyable for
                everyone.
              </p>

              {/* Tabs for clothing analysis */}
              <Tabs
                defaultActiveKey="overview"
                id="clothing-analysis-tabs"
                className="my-4"
              >
                <Tab eventKey="overview" title="Overview">
                  <div>
                    <h4>Overview of Fashion Trends</h4>
                    <p>
                      This tab provides an overview of the latest fashion
                      trends, including seasonal colors, popular styles, and
                      must-have accessories. Stay updated with what's trending
                      in the fashion world and how you can incorporate these
                      styles into your wardrobe.
                    </p>
                  </div>
                </Tab>
                <Tab eventKey="materials" title="Material Analysis">
                  <div>
                    <h4>Material Quality and Sustainability</h4>
                    <p>
                      Explore the types of materials used in our clothing
                      collections. Learn about sustainable and eco-friendly
                      fabrics and how they impact both the environment and your
                      comfort. We analyze the durability, texture, and overall
                      quality of the fabrics used.
                    </p>
                  </div>
                </Tab>
                <Tab eventKey="pricing" title="Pricing Insights">
                  <div>
                    <h4>Pricing Insights</h4>
                    <p>
                      This tab breaks down the pricing structure of our clothing
                      items, explaining the factors that influence costs such as
                      material choice, brand reputation, and production
                      techniques. Get a deeper understanding of how to make
                      cost-effective fashion choices.
                    </p>
                  </div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
