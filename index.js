const fs = require('fs');

const readFile = () => {
  fs.readFile('/Users/vpostolov/Downloads/IDE_test.side', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    // console.log(data);
    let testSuite = JSON.parse(data);
    console.log(testSuite.tests[0].commands.length);
    let testSuite20 = JSON.parse(data);
    let step = {
      "id": "b1ba98ed-9369-4697-ac4e-18835844ebe8",
      "comment": "",
      "command": "type",
      "target": "id=input3",
      "targets": [
        [
          "id=input3",
          "id"
        ],
        [
          "name=input3",
          "name"
        ],
        [
          "css=#input3",
          "css:finder"
        ],
        [
          "xpath=//input[@id='input3']",
          "xpath:attributes"
        ],
        [
          "xpath=//form[@id='myForm']/input[3]",
          "xpath:idRelative"
        ],
        [
          "xpath=//input[3]",
          "xpath:position"
        ]
      ],
      "value": "3"
    };
    for (let i = 5; i <= 20; i++) {
      step.target = `id=input${i}`;
      step.value = i.toString();
      testSuite20.tests[0].commands.splice(i-1, 0, JSON.parse(JSON.stringify(step)));
    }

    console.log(JSON.stringify(testSuite20.tests[0].commands));
    console.log(testSuite20.tests[0].commands.length);


    fs.writeFile('/Users/vpostolov/Downloads/Sel20.side', JSON.stringify(testSuite20), 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Completed');
    });
  });
}


readFile();

