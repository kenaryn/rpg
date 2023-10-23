'use strict';

// HTML tags' selections.
const btnTrain = document.getElementById('train');
const skillsElm = document.querySelectorAll('.skill');
const skills = ['strength', 'dexterity', 'stamina', 'luck', 'wisdom'];
const skillInfoElm = document.querySelector('.skill-points-info');
const skillPointsRemainingElm = document.querySelector('.skill-points-remaining');

// State variables.
let skillPointsRemaining = 20;
let allSkillPointsSpent = false;

const addSkillPoints = function (/** @type {string} */ skill) {
  /**
   * Add skill points to a skill's level.
   */
  return parseInt(document.getElementById(`${skill}`).value);
};

skillsElm.forEach((skillElm, idx) => {
  skillElm.addEventListener('input', e => {
    let skillPoints = parseInt(e.target.value);

    // Prevent user to input non-number value.
    if (isNaN(skillPoints)) e.target.value = '';

    // Check if user input fits in the correct range to update skill level.
    if (skillPoints > 0 && skillPoints < 6) {
      document.querySelector(`.skill-level-${idx}`).textContent = skillPoints;
    } else if (skillPoints < 0 && skillPoints > 5) {
      // Create dynamically a warning message to explain to the user the correct value's range.
      const newNode = document.createElement('p');
      newNode.classList.add('warnSkill');
      const invalidSkillLevelMsg = document.createTextNode('A skill level can not exceed 5');
      newNode.appendChild(invalidSkillLevelMsg);
      skillInfoElm.insertBefore(newNode, null);

      // Check if warning message alreay exist to prevent duplicating this node.
      // if (!newNode.classList.contains('warnSkill')) {
      // }
    }
  });
});

btnTrain.addEventListener('click', function () {
  skillsElm.forEach((skillElm, idx) => {
    if (!allSkillPointsSpent) {
      const skillPoints = addSkillPoints(skills[idx]);

      if (skillPointsRemaining - skillPoints >= 0) {
        // Update SP pool.
        skillPointsRemaining -= skillPoints;
        skillPointsRemainingElm.textContent = skillPointsRemaining;
        // Reset user input to prevent awkwardnesses.
        skillElm.value = '';
      }

      // Warn the user about no SP left and deactivate the Train button.
      if (!skillPointsRemaining) {
        document.querySelector('.skill-points-info').textContent = 'ℹ️ No skill points available.';
        allSkillPointsSpent = true;
      }
    }
  });
});
