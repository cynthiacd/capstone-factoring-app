import React from 'react';

const LearnPatterns = () => {

  return (

    <div className="row instruction-info-patterns">
      <div className="col-lg-3 pattern-card">
        <p>Plus Plus</p>
        <p>x<sup>2</sup> + bx + c</p>
      </div>

      <div className="col-lg-3 pattern-card">
        <p>Minus (-) Plus (+)</p>
        <p>x<sup>2</sup> - bx + c</p>
      </div>

      <div className="col-lg-3 pattern-card">
        <p>Minus Minus</p>
        <p>x<sup>2</sup> - bx - c</p>
      </div>

      <div className="col-lg-3 pattern-card">
        <p>Plus Minus</p>
        <p>x<sup>2</sup> + bx - c</p>
      </div>

      <div className="col-lg-3 pattern-card">
        <p>Double Plus Square</p>
        <p>x<sup>2</sup> + 2ax + a<sup>2</sup></p>
      </div>

      <div className="col-lg-3 pattern-card">
        <p>Double Minus Square</p>
        <p>x<sup>2</sup> - 2ax - a<sup>2</sup></p>
      </div>

      <div className="col-lg-3 pattern-card">
        <p>Difference of Perfect Squares</p>
        <p>x<sup>2</sup> - a<sup>2</sup></p>
      </div>

      <div className="col-lg-3 pattern-card">
        <p>a is greater than one ( a > 1 ) + any pattern</p>
        <p>ax<sup>2</sup> + bx + c</p>
      </div>
    </div>
  );
}

export default LearnPatterns;

// could import a picture of factoring process ...
// could have your flow chart and example
// and box
