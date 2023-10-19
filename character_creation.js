'use strict';

let skillPointsRemaining = 20;

const btnTrain = document.querySelector('.train');
// const skillsElm = document.querySelectorAll('.skill');
const skillElm = document.querySelector('.skill');
const skills = ['strength', 'dexterity', 'stamina'];
let skillPointsSpent = false;

// btnTrain.addEventListener('click', function () {
//   // skillsElm.forEach(skillElm => {
//   for (let i = 0; i < skillsElm.length; ++i) {
//     if (skillsElm[i] > 1 || skillsElm[i] < 6) {
//       document.querySelector(`.skill-score-${i}`).textContent = Number(
//         document.querySelector(`skills[${i}]`).value
//       );
//       btnTrain.classList.add('hidden');
//     }
//   }
// });

const trainSkill = function () {
  /**
   * Add skill points to a total skill's score.
   */
  return Number(document.getElementById('strength').value);
};

btnTrain.addEventListener('click', function () {
  if (!skillPointsSpent) {
    const newSkillPoints = trainSkill();

    if (newSkillPoints > 0 && newSkillPoints < 6) {
      document.querySelector('.skill-score-0').textContent = newSkillPoints;
      skillPointsRemaining -= newSkillPoints;
      if (skillPointsRemaining) {
        document.querySelector('.skill-points-remaining').textContent = skillPointsRemaining;
      } else if (!skillPointsRemaining) {
        document.querySelector('.points-left').textContent = 'No skill points available.';
        skillPointsSpent = true;
      }
    }
    // TODO add a <p> to warn user to enter a score between 1 and 5.
  }
});
