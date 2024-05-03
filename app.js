const { funTemplate, advancedTemplate } = require("./data");
const {
  doesTemplateFitInPractice,
  createPracticeFromTemplate,
} = require("./helpers");

// doesTemplateFitInPractice(funTemplate, 29);
// doesTemplateFitInPractice(funTemplate, 30);
// doesTemplateFitInPractice(funTemplate, 60);
// doesTemplateFitInPractice(funTemplate, 61);

// doesTemplateFitInPractice(advancedTemplate, 59);
// doesTemplateFitInPractice(advancedTemplate, 60);
// doesTemplateFitInPractice(advancedTemplate, 90);
// doesTemplateFitInPractice(advancedTemplate, 91);

//createPracticeFromTemplate(funTemplate, 30);
//createPracticeFromTemplate(funTemplate, 45);
//createPracticeFromTemplate(funTemplate, 55);
//createPracticeFromTemplate(funTemplate, 60);

//createPracticeFromTemplate(advancedTemplate, 60);
//createPracticeFromTemplate(advancedTemplate, 75);
createPracticeFromTemplate(advancedTemplate, 90);
