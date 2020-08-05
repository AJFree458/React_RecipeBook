import React, { useState, useEffect } from 'react';
import MealPlanService from '../../services/MealPlanService';
import {
  Card,
  Row,
  Container,
  CardBody,
  CardHeader,
  Table,
  Button,
} from 'reactstrap';

const MealPlanCard = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    MealPlanService.getAllMealPlan().then((recipes) => {
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
                <h5>Your Meal Plans</h5>
              </CardHeader>
              <CardBody className="text-center">
                <Table bordered>
                  <thead>
                    <tr>
                      <th scope="col">Meal Plan Dates</th>
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
                <Button color="primary" href="/newmealplan" role="button">
                  New Meal Plan
                </Button>
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
        <a href={`/mealplan/${RowData._id}`}>{RowData.planweek}</a>
      </td>
    </tr>
  );
}

export default MealPlanCard;
