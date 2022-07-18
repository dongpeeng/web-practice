import bpmnXML from './newDiagram.bpmn';

// 你即将要展示的流程图



// BpmnJS是BPMN查看器实例

var viewer = new BpmnJS({ container: '#canvas' });


// 导入BPMN 2.0流程图

viewer.importXML(bpmnXML, function (err) {

    if (err) {
        console.log(222222);

        //导入失败 ！

    } else {

        // 导入成功！


        var canvas = viewer.get('canvas');

        canvas.zoom('fit-viewport');

    }

});


// var xhr = new XMLHttpRequest();


// xhr.onreadystatechange = function () {

//     if (xhr.readyState === 4) {

//         viewer.importXML(xhr.response, function (err) {

//             // ...

//         });

//     }

// };


// xhr.open('GET', 'path-to-diagram.bpmn', true);

// xhr.send(null);
