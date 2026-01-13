function spiral(
    n: number,
    center: {x: number, y: number},
    radius0: number,
    theta0: number,
    radius1: number,
    theta1: number,
): Array<{x: number, y: number}> {
    if (n <= 0) return [];
    if (n === 1) {
        return [{
            x: radius0 * Math.cos(theta0),
            y: radius0 * Math.sin(theta0)
        }];
    }

    const deltaTheta = theta1 - theta0;
    const deltaRadius = radius1 - radius0;
    const drdth = (deltaRadius) / deltaTheta;
    const rateRatio = Math.hypot(drdth, radius0) / Math.hypot(drdth, radius1);

    var alpha = (rateRatio - 1) / (rateRatio + 1);
    var beta = 1 - alpha;

    const correction = 0.0;
    alpha -= correction;
    beta += correction;

    const points = [];
    for (let i = 0; i < n; i++) {
        const t = i / (n - 1);
        const s = alpha * t * t + beta * t;

        const radius = radius0 + s * (deltaRadius);
        const theta = theta0 + s * (deltaTheta);

        points.push({
            x: center.x + radius * Math.cos(theta),
            y: center.y + radius * Math.sin(theta)
        });
    }
    return points;
}

export {
    spiral,
};