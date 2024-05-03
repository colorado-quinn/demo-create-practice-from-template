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

const createPracticeFromTemplate = (template, desiredPracticeDuration) => {
  // TODO: check if template fits in practice

  const practice = {
    name: template.name,
    drills: template.drills.map((drill) => ({
      name: drill.name,
      minDur: drill.minDur,
      maxDur: drill.maxDur,
      duration: drill.minDur,
    })),
    duration: sum(template.drills.map((t) => t.minDur)),
  };
  console.log(`${practice.name} initial: `, practice);

  let drillIndex = practice.drills.length - 1;
  // modify practice, adding 5 minutes to drills until we fill practiceDuration
  // start from last practice to ensure more important drills get time in case of uneven time distribution
  while (practice.duration < desiredPracticeDuration) {
    let drill = practice.drills[drillIndex];
    // add 5 minutes to drills, starting from last drill
    if (drill.duration < drill.maxDur) {
      drill.duration += 5;
    }

    practice.duration = sum(practice.drills.map((t) => t.duration));
    drillIndex = drillIndex > 0 ? drillIndex - 1 : practice.drills.length - 1;
  }

  console.log(`${practice.name} final: `, practice);
};

module.exports = {
  doesTemplateFitInPractice,
  createPracticeFromTemplate,
};
