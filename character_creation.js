'use strict';

// HTML tags' selections.
const btnTrain = document.getElementById('train');
const skillsElm = document.querySelectorAll('.skill');
const skills = ['strength', 'dexterity', 'stamina', 'luck'];
const skillInfoElm = document.getElementById('skill-points-info');

// State variables.
let skillPointsRemaining = 20;
let allSkillPointsSpent = false;
let debug = false;

const addSkillPoints = function (/** @type {string} */ skill) {
  /**
   * Add skill points to a total skill's score.
   */
  return Number(document.getElementById(`${skill}`).value);
};

/* TODO: prevent skill points remaining to fall under 0 
by checking all `skillElm.value` when clicking `train` button.
*/
btnTrain.addEventListener('click', function () {
  skillsElm.forEach((skillElm, index) => {
    // FIXME calcul is wrong
    // skillPointsRemaining -= Number(skillElm.value);
    // if (debug) console.log(`skillPointsRemaining: ${skillPointsRemaining}`);
    if (!allSkillPointsSpent) {
      const skillPoints = addSkillPoints(`${skills[index]}`);
      if (debug) console.info(`skillPoints: ${skillPoints}`);

      // Check either enough skill points remains to assign a new skill value.
      if (skillPointsRemaining - skillPoints > 0) {
        // Check either a new skill value fits in the correct range.
        if (skillPoints >= 1 && skillPoints <= 5) {
          document.querySelector(`.skill-score-${index}`).textContent = skillPoints;
          skillPointsRemaining -= skillPoints;
          document.querySelector('.skill-points-remaining').textContent = skillPointsRemaining;
          if (debug) console.log(`skillPointsRemaining: ${skillPointsRemaining}`);
        } else {
          // FIXME add a <p> to warn user to enter a score between 1 and 5 for each wrong skill value.
          const newP = document.createElement('p');
          const invalidSkillLevel = document.createTextNode('The skill score can not exceed 5!.');
          newP.appendChild(invalidSkillLevel);
          document.body.insertBefore(newP, skillInfoElm);
          console.info(invalidSkillLevel);
        }
      } else if (skillPointsRemaining <= 0) {
        document.querySelector('.skill-points-info').textContent = 'ℹ️ No skill points available.';
        allSkillPointsSpent = true;
      }
    }
    // Reset user input to prevent awkwardnesses.
    skillElm.value = '';
  });
});
