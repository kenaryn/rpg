'use strict';

// TODO update the SP pool at `input` event. Increase SP left if previous value is greater
//than the current one.
// Check all input values when click train button. If SP left, print a info msg, assign current
// values to skill levels otherwise.

// HTML tags' selections.
const btnTrain = document.getElementById('train');
const skillsEl = document.querySelectorAll('.skill');
const skills = ['strength', 'dexterity', 'stamina', 'luck', 'wisdom'];
const skillInfoEl = document.querySelector('.skill-points-info');
const skillPointsLeftEl = document.querySelector('.skill-points-left');

// State variables.
let skillPointsLeft = 20;
let allSkillPointsSpent = false;

const getSkillLevel = function (/** @type {string} */ skill) {
  /**
   * Add skill points to a skill's level.
   */
  return parseInt(document.getElementById(skill).value);
};

const updateSPandSkills = () => {
  skillPointsLeftEl.textContent = skillPointsLeft;
  skillLevelEl.textContent = skillPoints;
};

skillsEl.forEach((skillElm, idx) => {
  skillElm.addEventListener('keyup', function () {
    const skillPoints = getSkillLevel(skills[idx]);
    // // Prevent user to input non-number value or outside the correct range.
    if (isNaN(skillPoints) || skillPoints > 5) {
      skillElm.value = '';
    }

    //   TODO Create dynamically a warning message to explain to the user the correct value's range.
    //   const newNode = document.createElement('p');
    //   newNode.classList.add('warnSkill');
    //   const invalidSkillLevelMsg = document.createTextNode('A skill level can not exceed 5');
    //   newNode.appendChild(invalidSkillLevelMsg);
    //   skillInfoEl.insertBefore(newNode, null);

    // Check if warning message alreay exist to prevent duplicating this node.
    // if (!newNode.classList.contains('warnSkill')) {}
  });
});
// TODO Clicking train button check if all 20 SP are spent, do no to assign any value otherwise.
skillsEl.forEach((skillElm, idx) => {
  btnTrain.addEventListener('click', function () {
    if (!allSkillPointsSpent) {
      const skillPoints = getSkillLevel(skills[idx]);
      const skillLevelEl = document.querySelector(`.skill-level-${idx}`);

      // If there are enough SP left to be assigned to a skill.
      if (skillPointsLeft - skillPoints >= 0) {
        if (skillPoints > parseInt(skillLevelEl.textContent)) {
          skillPointsLeft = skillPointsLeft + parseInt(skillLevelEl.textContent) - skillPoints;
          skillPointsLeftEl.textContent = skillPointsLeft;
          skillLevelEl.textContent = skillPoints;

          // When user decreases a skill value, reallocate new available SP to SP pool.
        } else if (skillPoints < parseInt(skillLevelEl.textContent)) {
          // Add the difference between the old skill value and the new one to SP pool.
          skillPointsLeft = skillPointsLeft + parseInt(skillLevelEl.textContent) - skillPoints;
          skillPointsLeftEl.textContent = skillPointsLeft;
          skillLevelEl.textContent = skillPoints;
        }
        // Clear out the input value to prevent awkwardnesses.
        skillElm.value = '';
      }

      // if (!isNaN(skillPoints)) {
      //   console.log(skillPoints);
      //   console.log(parseInt(skillLevelEl.textContent));
      // }

      // Warn the user about no SP left and deactivate the Train button.
      if (!skillPointsLeft) {
        document.querySelector('.skill-points-info').textContent = 'ℹ️ No skill points available.';
        allSkillPointsSpent = true;
      }
    }
  });
});
