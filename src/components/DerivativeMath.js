import backwardsPropagation from '../backwardprop.JPG'
import {costFunction, derivativeCostFunction, derivativeOfCostOverWeight} from '../perceptronMath' 

function DerivativeMath(props) {
    let derivOfCostOverWeight = derivativeOfCostOverWeight(props,)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={backwardsPropagation}></img>
                </div>
                <div className='col-md-4'>
                    <p>Cost function: {costFunction(props.x, props.y).toFixed(2)}</p>
                    <p>Derivative of cost over weight: </p>
                </div>
            </div>
            
        </div>
    )
}

export default DerivativeMath;