/*function does not perform weighted multiplication because despite only having one neuron in this vizualizer 
I do not want to give off the impression that the bias is applied to every weighted input but rather to the sum of the weighted inputs*/

function sigmoid(x) {
    let denominator = 1+Math.pow(Math.E, -x);
    return 1/denominator;
}

function returnValueOfPerceptron(sumOfWeightedValues, bias) {
    let sum = parseFloat(sumOfWeightedValues)+parseFloat(bias);
    return sigmoid(sum);
}

export {returnValueOfPerceptron, sigmoid}