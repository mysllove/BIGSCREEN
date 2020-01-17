import _ from 'lodash';
import printMe from "./print.JS";


function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    // Lodash，现在由这个脚本导入
    element.innerHTML = _.join(['4885'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}