import React, { useEffect, useState } from "react";
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import Axios from "axios";
import { toast } from "react-toastify";
import WorldWideGraph from "./WorldWideGraph";

export default function Worldwidecard() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get("https://disease.sh/v3/covid-19/all");
      console.log(data);
      setDetails(data);
    } catch (error) {
      toast("Failed to fetch data! Please check your internet connection!", {
        type: "error",
      });
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Row>
      <Col className="mb-5">
        
        <Card className="p-0 text-center mb-3 mt-3 custom-card" body inverse color="primary">
          <CardBody>
            <div className="text-white">Total Cases: {details.cases}</div>
          </CardBody>
        </Card>

        <Card className="p-0 text-center custom-card mb-3 mt-3" body inverse color="danger">
          <CardBody>
            <div className="text-white">Total Deaths: {details.deaths}</div>
          </CardBody>
        </Card>

        <Card className="p-0 text-center custom-card mb-3 mt-3" body inverse color="success">
          <CardBody>
            <div className="text-white">
              Total Recoveries: {details.recovered}
            </div>
          </CardBody>
        </Card>

        <Card className="p-0 text-center custom-card mb-3 mt-3" body inverse color="warning">
          <CardBody>
            <div className="text-white">Total Active: {details.active}</div>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Container fluid="sm" className="container">
          <h3 className="text-primary text-center">Worldwide pie chart data</h3>
          <WorldWideGraph
            active={details.active}
            recovered={details.recovered}
            deaths={details.deaths}
          />
        </Container>
      </Col>
    </Row>
  );
}