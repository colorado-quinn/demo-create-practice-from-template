const { funTemplate, intermediaryTemplate } = require("./data");
const { doesTemplateFitInPractice } = require("./helpers");

doesTemplateFitInPractice(funTemplate, 29);
doesTemplateFitInPractice(funTemplate, 30);
doesTemplateFitInPractice(funTemplate, 60);
doesTemplateFitInPractice(funTemplate, 61);

doesTemplateFitInPractice(intermediaryTemplate, 59);
doesTemplateFitInPractice(intermediaryTemplate, 60);
doesTemplateFitInPractice(intermediaryTemplate, 90);
doesTemplateFitInPractice(intermediaryTemplate, 91);
