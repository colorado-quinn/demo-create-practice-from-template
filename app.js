const { funTemplate, intermediaryTemplate } = require("./data");
const {
  doesTemplateFitInPractice,
  createPracticeFromTemplate,
} = require("./helpers");

doesTemplateFitInPractice(funTemplate, 29);
doesTemplateFitInPractice(funTemplate, 30);
doesTemplateFitInPractice(funTemplate, 60);
doesTemplateFitInPractice(funTemplate, 61);

doesTemplateFitInPractice(intermediaryTemplate, 59);
doesTemplateFitInPractice(intermediaryTemplate, 60);
doesTemplateFitInPractice(intermediaryTemplate, 90);
doesTemplateFitInPractice(intermediaryTemplate, 91);

//createPracticeFromTemplate(funTemplate, 30);
//createPracticeFromTemplate(funTemplate, 45);
createPracticeFromTemplate(funTemplate, 60);

// createPracticeFromTemplate(intermediaryTemplate, 60);
// createPracticeFromTemplate(intermediaryTemplate, 75);
// createPracticeFromTemplate(intermediaryTemplate, 90);
