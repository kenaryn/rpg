'use strict';

// HTML tags' selections.
const btnTrain = document.querySelector('.train');
const skillsElm = document.querySelectorAll('.skill');
const skillElm = document.querySelector('.skill');
const skills = ['strength', 'dexterity', 'stamina', 'luck'];
// const skillPointsRemaining = document.querySelector('.skill-points-remaining')
let skillPointsRemaining = 20;
let skillPointsSpent = false;

const addSkillPoints = function (/** @type {string} */ skill) {
  /**
   * Add skill points to a total skill's score.
   */
  return Number(document.getElementById(`${skill}`).value);
};

// for (let i = 0; i < skillsElm.length; ++i) {
skillsElm.forEach((skillElm, index) => {
  btnTrain.addEventListener('click', function () {
    if (!skillPointsSpent) {
      const skillPoints = addSkillPoints(`${skills[index]}`); // TODO adapt for each input area!

      if (skillPoints > 0 && skillPoints < 6) {
        document.querySelector(`.skill-score-${index}`).textContent = skillPoints;
        skillPointsRemaining -= skillPoints;
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
});

// btnTrain.addEventListener('click', function () {
//   if (!skillPointsSpent) {
//     const skillPoints = addSkillPoints();

//     if (skillPoints > 0 && skillPoints < 6) {
//       document.querySelector('.skill-score-0').textContent = skillPoints;
//       skillPointsRemaining -= skillPoints;
//       if (skillPointsRemaining) {
//         document.querySelector('.skill-points-remaining').textContent = skillPointsRemaining;
//       } else if (!skillPointsRemaining) {
//         document.querySelector('.points-left').textContent = 'No skill points available.';
//         skillPointsSpent = true;
//       }
//     }
//     // TODO add a <p> to warn user to enter a score between 1 and 5.
//   }
// });

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
