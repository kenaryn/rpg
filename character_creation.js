'use strict';

// HTML tags' selections.
const btnTrain = document.getElementById('train');
const skillsElm = document.querySelectorAll('.skill');
const skills = ['strength', 'dexterity', 'stamina', 'luck', 'wisdom'];
const skillInfoElm = document.getElementById('skill-points-info');

// State variables.
let skillPointsRemaining = 20;
let allSkillPointsSpent = false;

const addSkillPoints = function (/** @type {string} */ skill) {
  /**
   * Add skill points to a total skill's level.
   */
  return Number(document.getElementById(`${skill}`).value);
};

/* TODO: prevent skill points remaining to fall under 0 
by checking all `skillElm.value` when clicking `train` button.
*/

skillsElm.forEach((skillElm, idx) => {
  skillElm.addEventListener('input', function (e) {
    let skillPoints = parseInt(e.target.value);

    if (!isNaN(skillPoints)) e.target.value = '';

    if (skillPoints < 0 && skillPoints > 5) {
      skill;
    }
  });
});

skillsElm.forEach((skillElm, idx) => {
  btnTrain.addEventListener('click', function () {
    if (!allSkillPointsSpent) {
      const skillPoints = addSkillPoints(`${skills[idx]}`);

      // Check either enough skill points remains to assign a new skill value.
      // Check either a new skill value fits in the correct range.
      if (skillPointsRemaining) {
        if (skillPoints >= 1 && skillPoints <= 5 && skillPointsRemaining - skillPoints >= 0) {
          skillPointsRemaining -= skillPoints;
          document.querySelector(`.skill-level-${idx}`).textContent = skillPoints;
          document.querySelector('.skill-points-remaining').textContent = skillPointsRemaining;

          // Warn the user and deactivate train button when no SP left.
          if (!skillPointsRemaining) {
            document.querySelector('.skill-points-info').textContent =
              'ℹ️ No skill points available.';
            allSkillPointsSpent = true;
          }
        }
      }
      //   } else {
      //     // FIXME add a <p> to warn user to enter a level between 1 and 5 for each wrong skill value.
      //     This eval path is never reached!
      //     TODO add it in its own handler function
      //     const newP = document.createElement('p');
      //     const invalidSkillLevel = document.createTextNode('The skill level can not exceed 5!.');
      //     newP.appendChild(invalidSkillLevel);
      //     document.body.insertBefore(newP, skillInfoElm);
      //     console.info(invalidSkillLevel);
    }
    // Reset user input to prevent awkwardnesses.
    skillElm.value = '';
  });
});
