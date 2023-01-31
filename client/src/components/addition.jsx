import React from "react";
import { Button, Form } from "react-bootstrap";

const Addition = (props) => {
  const { setResult, fetchData } = props;
  const onSubmit = (e) => {
    e.preventDefault();
    let a = parseInt(e.target[0].value);
    let b = parseInt(e.target[1].value);
    const sum = a + b;
    setResult(sum);
    fetchData(a, b);
  };

  return (
    <>
      <div className="container mt-4">
        <Form onSubmit={onSubmit}>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">
              Enter First Number:
            </label>
            <div className="col-md-4">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Value1"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">
              Enter Second Number:
            </label>
            <div className="col-md-4">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Value2"
              />
            </div>
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Addition;
