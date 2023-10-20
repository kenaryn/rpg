'use strict';

// HTML tags' selections.
const btnTrain = document.querySelector('.train');
const skillsElm = document.querySelectorAll('.skill');
const skills = ['strength', 'dexterity', 'stamina', 'luck'];
// const skillPointsRemaining = document.querySelector('.skill-points-remaining')

// State variables.
let skillPointsRemaining = 20;
let allSkillPointsSpent = false;

const addSkillPoints = function (/** @type {string} */ skill) {
  /**
   * Add skill points to a total skill's score.
   */
  return Number(document.getElementById(`${skill}`).value);
};

/* TODO: prevent skill points remaining to fall under 0 
by checking all `skillElm.value` when clicking `train` button.
*/
// for (let i = 0; i < skillsElm.length; ++i) {
skillsElm.forEach((skillElm, index) => {
  btnTrain.addEventListener('click', function () {
    skillPointsRemaining -= Number(skillElm.value);

    if (!allSkillPointsSpent) {
      const skillPoints = addSkillPoints(`${skills[index]}`);

      if (skillPoints > 0 && skillPoints < 6) {
        document.querySelector(`.skill-score-${index}`).textContent = skillPoints;

        if (skillPointsRemaining > 0) {
          skillPointsRemaining -= skillPoints;
          document.querySelector('.skill-points-remaining').textContent = skillPointsRemaining;
        } else {
          document.querySelector('.points-left').textContent = 'ℹ️ No skill points available.';
          allSkillPointsSpent = true;
        }

        // TODO add a <p> to warn user to enter a score between 1 and 5 for each wrong skill value.
      }
    }
  });
});
