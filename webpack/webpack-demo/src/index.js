import _ from 'lodash';


function component() {
    var element = document.createElement('div');

    // Lodash，现在由这个脚本导入
    element.innerHTML = _.join(['4885'], ' ');
    element.classList.add("hello");
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log(Data);
    return element;
}

document.body.appendChild(component());