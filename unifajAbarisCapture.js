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
  'use strict'

  document.addEventListener('keydown', keyDownHandler)

  function keyDownHandler(event) {
    // Only work on this page
    if (window.location.href === 'https://unifaj.....') return

    // Press ' key
    if (event.key === "'") {
      // Delete Edit Panel if is valid
      deleteCropSectionPanel()

      // Select all checkBoxs
      //selectAllCheckBoxs()

      // Click on Save Button
      saveButton()

      // wait page load
      window.addEventListener('load', function () {
        // Click on Left Arrow
        leftArrowButton()

        // Scroll to 'Disciplina'
        scrollSubject()

        // Select all or click on 'Disciplina'
        selectSubject()
      })
    }
  }

  // TODO: test with getElementsByClassName
  // TODO: check Tags

  // Delete Crop Panel
  function deleteCropSectionPanel() {
    var cropSelectionID = window.document.getElementById('cropSectionPanel')

    // Verify if cropSectionPanel exists
    if (cropSelectionID.length > 0) {
      cropSelectionID.parentNode.removeChild(id)
    }
  }

  // Select all Checks Box
  function selectAllCheckBoxs() {
    // unChecked ids
    var unCheckedId = window.document.getElementById('')

    // checked ids
    // var checkedIdBox = window.document.getElementById('')

    // if checkBox = checked(true) return (dont click)

    if (id.length > 0) {
      unCheckedId.click()
    }
  }
  //var test = window.document.getElementsByClassName('sc-fujyUd kLUdOL')
  // Click on Save Button
  function saveButton() {
    var saveBT = window.document.getElementById('saveIndex')

    if (saveBT.length > 0) {
      saveBT.click()
    }
  }

  // Click on Left Arrow
  function leftArrowButton() {
    var leftArrowBT = window.getElementById('getElementsByClassName')
    // get document number
    // if document number > 1 then click left arrow

    if (leftArrowBT > 0) {
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

    element.scrollIntoView()
  }

  // Select all or click on 'Disciplina'
  function selectSubject() {
    // id = 'input-28'

    var element = document.getElementById('input-28')

    element.click()
  }
})()
