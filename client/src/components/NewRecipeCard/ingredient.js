import React from 'react';
import propTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

const CookingUnits = [
  'tsp',
  'tbsp',
  'fl oz',
  'cup',
  'pint',
  'quart',
  'oz',
  'Pound',
  'each',
];

export const IngredientInputs = ({ IDX, State, Handler }) => {
  const qtyID = `qty-${IDX}`;
  const UnitsId = `unit-${IDX}`;
  const IngID = `ing-${IDX}`;

  return (
    <div key={`ingRow-${IDX}`}>
      <div className="form-row ">
        {/* Quantity Input  */}
        <div className="col-sm-2">
          <FormGroup>
            <Label className="sr-only" htmlFor={qtyID}>
              Quantity
            </Label>
            <Input
              type="text"
              name={qtyID}
              data-idx={IDX}
              id={qtyID}
              className="form-control form-control-sm"
              data-name="qty"
              value={State[IDX].qty}
              onChange={Handler}
              placeholder="Qty"
            />
          </FormGroup>
        </div>

        {/*  Units of measure  */}
        <div className="col-sm-2">
          <FormGroup>
            <Label className="sr-only" htmlFor={UnitsId}>
              Unit of Measure
            </Label>
            <Input
              type="select"
              id={UnitsId}
              data-idx={IDX}
              className="custom-select custom-select-sm"
              data-name="unit"
              value={State[IDX].unit}
              onChange={Handler}
            >
              {CookingUnits.map((item, index) => (
                <option key={index} value={item}>
                  {' '}
                  {item}{' '}
                </option>
              ))}
            </Input>
          </FormGroup>
        </div>

        {/* Ingredient Input  */}
        <div className="col-sm-8">
          <FormGroup>
            <Label className="sr-only" htmlFor={IngID}>
              Ingredient
            </Label>
            <Input
              type="text"
              name={IngID}
              data-idx={IDX}
              id={IngID}
              className="form-control form-control-sm"
              data-name="ingredient"
              value={State[IDX].ingredient}
              onChange={Handler}
              placeholder="Ingredient"
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

IngredientInputs.propTypes = {
  IDX: propTypes.number,
  State: propTypes.array,
  IngHandler: propTypes.func,
};

export default IngredientInputs;
