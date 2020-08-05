import React, { useState, useEffect } from 'react';
import RecipeService from '../../services/RecipeService';
import { Card, Row, Container, CardBody, CardHeader, Table } from 'reactstrap';

const RecipesCard = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    RecipeService.getAllRecipes().then((recipes) => {
      console.log(recipes);
      setRecipeList(recipes.data);
    });
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <div className="col-md-12">
            <Card>
              <CardHeader className="text-center">
                <h5>Your Recipes</h5>
              </CardHeader>
              <CardBody className="text-center">
                <Table bordered>
                  <thead>
                    <tr>
                      <th scope="col">Recipe Name</th>
                      <th scope="col">Prep Time</th>
                      <th scope="col">Cook Time</th>
                      <th scope="col">Servings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recipeList.map((row, index) => {
                      return (
                        <RecipeRow key={index} RowData={row} RowNum={index} />
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

function RecipeRow({ RowData, RowNum }) {
  return (
    <tr key={RowNum}>
      <td>
        <a href={`/recipe/${RowData._id}`}>{RowData.recipeName}</a>
      </td>
      <td>{RowData.cookTime}</td>
      <td>{RowData.prepTime}</td>
      <td style={{ paddingLeft: '25px' }}>{RowData.servings}</td>
    </tr>
  );
}

export default RecipesCard;
