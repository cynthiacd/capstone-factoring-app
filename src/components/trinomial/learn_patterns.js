import React from 'react';

const LearnPatterns = () => {

  return (

    <div className="row instruction-info-patterns">
      <div className="col-lg-3">
        <div className="pattern-card">
          <h4>Plus Plus</h4>
          <h5>General Form:</h5>
          <h5>x<sup>2</sup> + bx + c</h5>
          <h5>Factored Form:</h5>
          <h5>=(x+e)(x+f)</h5>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="pattern-card">
          <h4>Minus Plus</h4>
          <h5>General Form:</h5>
          <h5>x<sup>2</sup> - bx + c</h5>
          <h5>Factored Form:</h5>
          <h5>=(x-e)(x-f)</h5>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="pattern-card">
          <h4>Minus Minus</h4>
          <h5>General Form:</h5>
          <h5>x<sup>2</sup> - bx - c</h5>
          <h5>Factored Form:</h5>
          <h5>=(x+e)(x-f) where f > e</h5>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="pattern-card">
          <h4>Plus Minus</h4>
          <h5>General Form:</h5>
          <h5>x<sup>2</sup> + bx - c</h5>
          <h5>Factored Form:</h5>
          <h5>=(x+e)(x-f) where e > f</h5>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="pattern-card">
          <h4>Plus Double Square</h4>
          <h5>General Form:</h5>
          <h5>x<sup>2</sup> + 2ax + a<sup>2</sup></h5>
          <h5>Factored Form:</h5>
          <h5>=(x+a)(x+a) = (x+a)<sup>2</sup></h5>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="pattern-card">
          <h4>Minus Double Square</h4>
          <h5>General Form: x<sup>2</sup> - 2ax - a<sup>2</sup></h5>
          <h5>Factored Form: (x-a)(x-a) = (x-a)<sup>2</sup></h5>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="pattern-card">
          <h4>Difference of Squares</h4>
          <h5>General Form:</h5>
          <h5>x<sup>2</sup> - a<sup>2</sup></h5>
          <h5>Factored Form:</h5>
          <h5>=(x+a)(x-a)</h5>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="pattern-card">
          <h4>a is greater than one (a > 1)</h4>
          <h5>General Form:</h5>
          <h5>ax<sup>2</sup> + bx + c</h5>
          <h5>Factored Form:</h5>
          <h5>=(ax+e)(x+f)</h5>
        </div>
      </div>
    </div>
  );
}

export default LearnPatterns;
