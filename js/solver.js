// BASIC SOLVER

function euler(dt, f, xs, args) {
    return [xs[0] + dt * f(xs, args)[0], xs[1] + dt * f(xs, args)[1], xs[2] + dt * f(xs, args)[2]];
}