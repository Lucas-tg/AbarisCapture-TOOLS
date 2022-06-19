// ==UserScript==
// @name        Unifaj Abaris Capture Utils
// @namespace   https://github.com/Lucas-tg/AbarisCapture-TOOLS
// @match       https://www.unifaj..../*
// @grant       none
// @version     1.0.0
// @author      Lucas Torres Gontijo
// @description Unifaj Abaris Capture Utils
// @license     MIT
// ==/UserScript==

(function () {
  ;('use strict')

  document.addEventListener('keydown', keyDownHandler)

  function keyDownHandler(event) {
    // Only work on this page
    if (window.location.href === 'https://unifaj...../*') return

    // Press ' key
    if (event.key === "'") {
      // Delete Edit Panel if is valid
      deleteCropSectionPanel()

      // Select all checkBoxs
      //selectAllCheckBoxs()

      // Click on Save Button
      saveButton()

      // Click on Left Arrow
      leftArrowButton()

      // Scroll to 'Disciplina'
      scrollSubject()

      // Select all or click on 'Disciplina'
      selectSubject()
    }
  }

  // TODO: test with getElementsByClassName
  // TODO: check Tags

  // https://javascript.plainenglish.io/how-to-check-if-an-element-exists-in-the-visible-dom-with-javascript-523692554402
  // https://stackoverflow.com/questions/5629684/how-can-i-check-if-an-element-exists-in-the-visible-dom

  // Delete Crop Panel
  function deleteCropSectionPanel() {
    var cropSelectionID = window.document.getElementById('cropSectionPanel')

    // Verify if cropSectionPanel exists
    // return true or false, true = exists; false = dont exists in visible DOM
    if (cropSelectionID) {
      cropSelectionID.parentNode.removeChild(cropSelectionID)
    }
  }

  // Select all Checks Box
  function selectAllCheckBoxs() {
    // unChecked ids
    var unCheckedId = window.document.getElementById('')

    // checked ids
    // var checkedIdBox = window.document.getElementById('')

    // if checkBox = checked(true) return (dont click)

    if (id) {
      unCheckedId.click()
    }
  }

  // Click on Save Button
  function saveButton() {
    var saveBT = window.document.getElementById('saveIndex')

    if (saveBT) {
      saveBT.click()
    }
  }

  // Click on Left Arrow
  function leftArrowButton() {
    var leftArrowBT = window.getElementById('getElementsByClassName')
    var loadID = window.getElementById('')

    // get document number
    // if document number > 1 then click left arrow

    if (leftArrowBT && !loadID) {
      leftArrowBT.click()
    }
  }

  /**
 * https://developer.mozilla.org/pt-BR/docs/Web/API/Element/scrollIntoView
var element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({block: "end"});
element.scrollIntoView({block: "end", behavior: "smooth"})
 * 
 */

  // Scroll to 'Disciplina'
  function scrollSubject() {
    var element = document.getElementById('input-28')
    var loadID2 = document.getElementById('')

    if (element && !loadID2) {
      element.scrollIntoView()
    }
  }

  // Select all or click on 'Disciplina'
  function selectSubject() {
    // id = 'input-28'

    var element = document.getElementById('input-28')
    var loadID3 = document.getElementById('')

    if (element && !loadID3) {
      element.click()
    }
  }
})()
