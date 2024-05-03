const { funTemplate, intermediaryTemplate } = require("./data");

const calculateSum = (arr) => {
  return arr.reduce((total, current) => {
    return total + current;
  }, 0);
};

const doesTemplateFitInPractice = (template, practiceDuration) => {
  const minDur = calculateSum(template.drills.map((t) => t.minDur));
  const maxDur = calculateSum(template.drills.map((t) => t.maxDur));
  console.log(`${template.name} can run for ${minDur} - ${maxDur} mins.`);
  const doesFit = minDur <= practiceDuration && practiceDuration <= maxDur;
  console.log(
    `${template.name} ${
      doesFit ? "DOES" : "DOES NOT"
    } fit into practice duration of ${practiceDuration} mins. \r\n`
  );

  return doesFit;
};

doesTemplateFitInPractice(funTemplate, 29);
doesTemplateFitInPractice(funTemplate, 30);
doesTemplateFitInPractice(funTemplate, 60);
doesTemplateFitInPractice(funTemplate, 61);

doesTemplateFitInPractice(intermediaryTemplate, 59);
doesTemplateFitInPractice(intermediaryTemplate, 60);
doesTemplateFitInPractice(intermediaryTemplate, 90);
doesTemplateFitInPractice(intermediaryTemplate, 91);
