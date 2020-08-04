import React from 'react';
import { Card, Row, Container, CardBody, CardHeader, Button } from 'reactstrap';

const LandingCard = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="col-md-12">
            <Card>
              <CardHeader text-center>
                <h5>Please Read Before Continuing</h5>
              </CardHeader>
              <CardBody text-center>
                <p>
                  This site is for the saving personal recipes and weekly meal
                  plans.
                </p>
                <p>
                  Please register before use. If you have registered, please
                  login to your account.
                </p>
                <p>Enjoy and eat well.</p>
                <Button color="primary" className="m-1" href="/register">
                  Register
                </Button>
                <Button color="primary" className="m-1" href="/login">
                  Login
                </Button>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingCard;
