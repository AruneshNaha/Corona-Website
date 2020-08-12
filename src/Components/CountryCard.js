import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Container,
  Col,
  Row,
  CardImg,
  CardTitle,
} from "reactstrap";
import WorldWideGraph from "./WorldWideGraph";

export default function CountryCard({ country }) {
  return (
    <Container fluid className="container">
      <Card className="text-center mt-3 mb-4">
        <Row>
          <Col xs="3">
            <CardImg
              src={country.countryInfo?.flag}
              className="img-thumbnail mt-3"
            />
          </Col>

          <Col xs="4">
            <h2 className="text-danger">
              <CardTitle>{country.country}</CardTitle>
            </h2>
            <CardBody>
              <h4>
                <div className="text-primary">Total Cases: {country.cases}</div>
                <div className="text-danger">
                  Total Deaths: {country.deaths}
                </div>
                <div className="text-success">
                  Total Recoveries: {country.recovered}
                </div>
                <div className="text-warning">
                  Total Active: {country.active}
                </div>
              </h4>
            </CardBody>
          </Col>
          <Col>
            <Container fluid="sm" className="container mb-5 container-country">
              <h3 className="text-primary text-center">
                Country pie chart data
              </h3>
              <WorldWideGraph
                active={country.active}
                recovered={country.recovered}
                deaths={country.deaths}
              />
            </Container>
          </Col>
          
        </Row>
      </Card>
    </Container>
  );
}
