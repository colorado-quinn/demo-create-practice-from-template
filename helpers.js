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

module.exports = {
  doesTemplateFitInPractice: doesTemplateFitInPractice,
};
