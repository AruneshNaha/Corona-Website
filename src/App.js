import React, { useState } from "react";
import "./App.css";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Axios from "axios";
import { toast } from "react-toastify";
import Worldwidecard from "./Components/Worldwidecard";
import CountryCard from "./Components/CountryCard";
import {
  Col,
  Container,
  Row,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
} from "reactstrap";

function App() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(
        `https://disease.sh/v3/covid-19/countries/${query}`
      );
      console.log(data);
      setCountry(data);
    } catch (error) {
      toast(
        "Failed to fetch data! Please check your internet connection or search a valid country name!",
        {
          type: "error",
        }
      );
    }
  };

  return (
    <div>
      <Header></Header>
      <Container fluid>
        <InputGroup className="mt-3">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Please provide a country name"
          ></Input>
          <InputGroupAddon addonType="append">
            <Button color="primary" onClick={fetchDetails}>
              Fetch country details
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <Worldwidecard></Worldwidecard>
        {country ? <CountryCard country={country}></CountryCard> : null}
        
      </Container>
      <Col>
            <Container fluid>
              <h1 className="text-white">EMPTY SPACE</h1>
            </Container>
          </Col>
      <Footer></Footer>
    </div>
  );
}

export default App;
