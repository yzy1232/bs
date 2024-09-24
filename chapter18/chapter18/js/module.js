function cube(x) {
    return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

var graph = {
    options: {
        color: 'white',
        thickness: '2px'
    },
    draw: function () {
        return '图形绘制函数参数：';
    }
}

export { cube,foo,graph };
export default function circleArea(x) {
    return Math.PI * x * x;
}