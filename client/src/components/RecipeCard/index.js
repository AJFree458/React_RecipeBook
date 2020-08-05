import React from 'react';
import {
  Card,
  Row,
  Container,
  CardBody,
  CardHeader,
  CardText,
  Col,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

const RecipeCard = (props) => {
  return (
    <div>
      <Container>
        <Card>
          <CardHeader>
            <h1>{props.RecipeTitle}</h1>
          </CardHeader>
          <CardBody>
            <Row className="no-gutters">
              <Col md="4">
                <h4>Description:</h4>
              </Col>
              <Col md={8}>
                <h4>{props.RecipeDescription}</h4>
              </Col>
              <Row className="mt-4">
                <Col md="4">
                  <CardText>Prep Time</CardText>
                  <CardText>{props.RecipePrepTime}</CardText>
                </Col>
                <Col md="4">
                  <CardText>Cook Time</CardText>
                  <CardText>{props.RecipeCookTime}</CardText>
                </Col>
                <Col md="4">
                  <CardText>Servings</CardText>
                  <CardText>{props.RecipeServings}</CardText>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md="2">
                  <CardText>Equipment:</CardText>
                </Col>
                <Col md="10">
                  <CardText>{props.RecipeEquipment}</CardText>
                </Col>
              </Row>
              <Row className="m-3">
                <CardText>
                  <h4>Ingredients:</h4>
                </CardText>
                {/* <ListGroup>
                  {props.IngredientList.map((result, index) => {
                    return <ListGroupItem key={index} index={index + 1}>{props.IngredientList.qty} {props.IngredientList.unit} {props.IngredientList.ingredient}</ListGroupItem>
                    })
                  }
                </ListGroup> */}
              </Row>
              <Row className="mt-4">
                <CardText className="ml-4">
                  <h4>Directions:</h4>
                </CardText>
                <CardText className="ml-3">{props.RecipeDirections}</CardText>
              </Row>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default RecipeCard;
