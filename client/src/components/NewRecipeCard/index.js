import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

// Validation components
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import { IngredientInputs } from './ingredient';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Col,
  Row,
  ButtonToggle,
  FormGroup,
  Label,
  Container,
  Card,
  CardBody,
  CardHeader,
  Button,
} from 'reactstrap';

import RecipeService from '../../services/RecipeService';
import AuthService from '../../services/AuthService.js';

const user = AuthService.getCurrentUser();

var author;
user === null ? (author = '') : (author = user.id);

// Field-Validator (Required)
const Required = (value) => {
  if (!value) {
    return (
      <div
        className="alert alert-danger"
        style={{ padding: '0px' }}
        role="alert"
      >
        <span>This field is required!</span>
      </div>
    );
  }
};

const NewRecipeForm = (props) => {
  // New Recipe Form
  const form = useRef();
  const checkBtn = useRef();
  const history = useHistory();

  const blankIngredient = {
    qty: '',
    unit: '',
    ingredient: '',
  };

  // State Variables
  const [recipeNameState, setRecipeNameState] = useState('');
  const [descriptionState, setDescriptionState] = useState('');
  const [directionsState, setdirectionsState] = useState();

  const [prepTimeState, setPrepTimeState] = useState('');
  const [cookTimeState, setCookTimeState] = useState('');
  const [equipmentState, setEquipmentState] = useState('');
  const [servingsState, setServingsState] = useState('');

  // const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [successful, setSuccessful] = useState(false);

  const [ingredientsState, setIngredientsState] = useState([
    { ...blankIngredient },
  ]);

  // Ingredients Dynamic row handler
  const IngredientHandler = (e) => {
    const newIng = [...ingredientsState];
    newIng[e.target.dataset.idx][e.target.dataset.name] = e.target.value;
    setIngredientsState(newIng);
  };

  const addIngredient = () => {
    setIngredientsState([...ingredientsState, { ...blankIngredient }]);
  };

  const handleNewRecipe = (e) => {
    e.preventDefault();

    setMessage('');
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      console.log('Past if statement');
      RecipeService.CreateRecipe(
        author,
        recipeNameState,
        descriptionState,
        ingredientsState,
        prepTimeState,
        cookTimeState,
        servingsState,
        equipmentState,
        directionsState
      ).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          history.push('/');
        },

        (error) => {
          console.log('New Recipe Submission Error:');

          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log('Response: ' + resMessage);
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <Container className="my-4">
      <Card>
        <CardHeader className="text-center">
          <h1>New Recipe</h1>
        </CardHeader>
        <CardBody>
          <Form
            className="form-horizontal"
            onSubmit={handleNewRecipe}
            ref={form}
          >
            {!successful && (
              <div>
                <Row form>
                  <Col md={8}>
                    <FormGroup>
                      <Label htmlFor="RecipeName">Recipe Name</Label>

                      <Input
                        className="form-control form-control-sm"
                        name="RecipeName"
                        type="text"
                        value={recipeNameState}
                        onChange={(e) => {
                          setRecipeNameState(e.target.value);
                        }}
                        validations={[Required]}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={8}>
                    <FormGroup>
                      <label htmlFor="Description">
                        Please enter a brief description.
                      </label>

                      <Input
                        className="form-control form-control-sm"
                        name="Description"
                        type="text"
                        value={descriptionState}
                        onChange={(e) => {
                          setDescriptionState(e.target.value);
                        }}
                        validations={[Required]}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={8}>
                    <Row form>
                      <Col md={2}>
                        <FormGroup>
                          <Label htmlFor="CookTime">Cook Time</Label>
                          <Input
                            className="form-control form-control-sm"
                            name="CookTime"
                            type="text"
                            value={cookTimeState}
                            onChange={(e) => {
                              setCookTimeState(e.target.value);
                            }}
                            validations={[Required]}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={2}>
                        <FormGroup>
                          <Label htmlFor="PrepTime">Prep Time</Label>
                          <Input
                            className="form-control form-control-sm"
                            name="PrepTime"
                            type="text"
                            value={prepTimeState}
                            onChange={(e) => {
                              setPrepTimeState(e.target.value);
                            }}
                            validations={[Required]}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={8}>
                        <FormGroup>
                          <Label htmlFor="Servings">Servings</Label>
                          <Input
                            className="form-control form-control-sm"
                            name="Servings"
                            type="text"
                            value={servingsState}
                            onChange={(e) => {
                              setServingsState(e.target.value);
                            }}
                            validations={[Required]}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row form>
                  <Col md={8}>
                    <Row>
                      <Col md={2}>
                        <Label>Qty</Label>
                      </Col>

                      <Col md={2}>
                        <Label>Units</Label>
                      </Col>

                      <Col md={8}>
                        <Label>Ingredient</Label>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row form>
                  <Col md={8}>
                    {ingredientsState.map((value, index) => (
                      <IngredientInputs
                        key={index}
                        IDX={index}
                        State={ingredientsState}
                        Handler={IngredientHandler}
                      />
                    ))}

                    <Button href="#" onClick={addIngredient}>
                      Add Ingredient
                    </Button>
                    <br />
                  </Col>
                </Row>

                <Row form>
                  <Col md={8}>
                    <Label htmlFor="Equipment">Equipment</Label>
                    <Input
                      type="textarea"
                      className="form-control form-control-sm"
                      name="Equipment"
                      rows={5}
                      onChange={(e) => setEquipmentState(e.target.value)}
                    />
                  </Col>
                </Row>

                <Row form>
                  <Col md={8}>
                    <Label htmlFor="Instructions">Recipe instructions</Label>
                    <textarea
                      className="form-control form-control-sm"
                      name="Directions"
                      rows={5}
                      onChange={(e) => setdirectionsState(e.target.value)}
                    />
                  </Col>
                </Row>

                <ButtonToggle
                  type="submit"
                  color="success"
                  ref={checkBtn}
                  className="mt-2"
                >
                  {' '}
                  Save Recipe{' '}
                </ButtonToggle>
              </div>
            )}
            {message && (
              <FormGroup>
                <div>{message.message}</div>
                <div
                  className={
                    successful ? 'alert alert-success' : 'alert alert-danger'
                  }
                  role="alert"
                >
                  {message.message}
                </div>
              </FormGroup>
            )}

            <CheckButton style={{ display: 'none' }} ref={checkBtn} />
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default NewRecipeForm;
