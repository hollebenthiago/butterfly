// EQUATION

function lorenz(xs, args) {
    
    let dxs0 = args[0] * (xs[1] - xs[0]);
    let dxs1 = xs[0] * (args[1] - xs[2]) - xs[1];
    let dxs2 = xs[0] * xs[1] - args[2] * xs[2];
    return [dxs0, dxs1, dxs2];
}