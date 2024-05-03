const sum = (arr) => {
  return arr.reduce((total, current) => {
    return total + current;
  }, 0);
};

const doesTemplateFitInPractice = (template, practiceDuration) => {
  const minDur = sum(template.drills.map((t) => t.minDur));
  const maxDur = sum(template.drills.map((t) => t.maxDur));
  console.log(`${template.name} can run for ${minDur} - ${maxDur} mins.`);
  const doesFit = minDur <= practiceDuration && practiceDuration <= maxDur;
  console.log(
    `${template.name} ${
      doesFit ? "DOES" : "DOES NOT"
    } fit into practice duration of ${practiceDuration} mins. \r\n`
  );

  return doesFit;
};

const createIntitialPractice = (template) => {
  const practice = {
    name: template.name,
    drills: template.drills.map((drill) => ({
      name: drill.name,
      duration: drill.minDur,
      minDur: drill.minDur,
      maxDur: drill.maxDur,
    })),
    duration: sum(template.drills.map((t) => t.minDur)),
  };
  //console.log(`${practice.name} initial: `, practice);
  return practice;
};

const fillPractice = (practice, desiredPracticeDuration) => {
  // modify practice, adding 5 minutes to drills until we fill desiredPracticeDuration
  // start from last drill to ensure more important drills get time in case of uneven time distribution
  let drillIndex = practice.drills.length - 1;
  while (practice.duration < desiredPracticeDuration) {
    let drill = practice.drills[drillIndex];
    // add 5 minutes to drills, starting from last drill
    if (drill.duration < drill.maxDur) {
      drill.duration += 5;
      practice.duration = sum(practice.drills.map((t) => t.duration));
    }

    drillIndex = drillIndex > 0 ? drillIndex - 1 : practice.drills.length - 1;
  }
};

const createPracticeFromTemplate = (template, desiredPracticeDuration) => {
  // TODO: check if template fits in practice

  const practice = createIntitialPractice(template);
  fillPractice(practice, desiredPracticeDuration);

  console.log(`${practice.name} practice: `, practice);
};

module.exports = {
  doesTemplateFitInPractice,
  createPracticeFromTemplate,
};
