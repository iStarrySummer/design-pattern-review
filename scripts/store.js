(function () {
  "use strict"

  var stateKeyPrefix = "pr:review-state:"
  var unscopedStateKey = "pr:review-state"
  var legacyStateKey = "pr:mvp-state"
  var legacyClaimedKey = "pr:legacy-state-claimed"
  var activeStudentKey = "pr:active-student-id"
  var themeKey = "pr:theme"
  var fallbackState = {
    version: 5,
    selected: {},
    checked: {},
    mcIndex: {
      study: 0,
      sequential: 0,
      random: 0,
      wrong: 0
    },
    mcRandomIds: [],
    mcWrongIds: [],
    mcWrongCounts: {},
    viewed: {
      prep: [],
      study: [],
      fill: [],
      comprehensive: [],
      textbook: []
    },
    fillIndex: 0,
    comprehensiveIndex: 0,
    textbookIndex: 0
  }

  function cloneFallback() {
    return JSON.parse(JSON.stringify(fallbackState))
  }

  function normalizeStudentId(value) {
    return String(value || "").trim().replace(/\s+/g, "")
  }

  function readStudentId() {
    try {
      return normalizeStudentId(localStorage.getItem(activeStudentKey))
    } catch (error) {
      return ""
    }
  }

  function studentStateKey(studentId) {
    var normalized = normalizeStudentId(studentId)
    return normalized ? stateKeyPrefix + normalized : ""
  }

  function claimLegacyState(studentId) {
    var key = studentStateKey(studentId)
    if (!key || localStorage.getItem(key) || localStorage.getItem(legacyClaimedKey)) return
    var legacy = localStorage.getItem(unscopedStateKey) || localStorage.getItem(legacyStateKey)
    if (!legacy) return
    localStorage.setItem(key, legacy)
    localStorage.setItem(legacyClaimedKey, "1")
  }

  function writeStudentId(value) {
    var studentId = normalizeStudentId(value)
    if (!studentId) return false
    try {
      claimLegacyState(studentId)
      localStorage.setItem(activeStudentKey, studentId)
      return true
    } catch (error) {
      return false
    }
  }

  function clearStudentId() {
    try {
      localStorage.removeItem(activeStudentKey)
      return true
    } catch (error) {
      return false
    }
  }

  function mergeState(saved) {
    var base = cloneFallback()
    if (!saved || typeof saved !== "object") return base
    base.selected = saved.selected || {}
    base.checked = saved.checked || {}
    base.fillIndex = saved.fillIndex === undefined
      ? Number(saved.writtenIndex) || 0
      : Number(saved.fillIndex) || 0
    base.comprehensiveIndex = Number(saved.comprehensiveIndex) || 0
    base.textbookIndex = Number(saved.textbookIndex) || 0
    base.mcRandomIds = Array.isArray(saved.mcRandomIds) ? saved.mcRandomIds : []
    base.mcWrongIds = Array.isArray(saved.mcWrongIds) ? saved.mcWrongIds : []
    base.mcWrongCounts = saved.mcWrongCounts && typeof saved.mcWrongCounts === "object"
      ? saved.mcWrongCounts
      : {}
    if (saved.viewed && typeof saved.viewed === "object") {
      Object.keys(base.viewed).forEach(function (key) {
        base.viewed[key] = Array.isArray(saved.viewed[key]) ? saved.viewed[key].map(String) : []
      })
    }
    if (saved.mcIndex && typeof saved.mcIndex === "object") {
      base.mcIndex.study = Number(saved.mcIndex.study) || 0
      base.mcIndex.sequential = Number(saved.mcIndex.sequential) || 0
      base.mcIndex.random = Number(saved.mcIndex.random) || 0
      base.mcIndex.wrong = Number(saved.mcIndex.wrong) || 0
    }
    return base
  }

  function readState() {
    var studentId = readStudentId()
    if (!studentId) return cloneFallback()
    try {
      var saved = localStorage.getItem(studentStateKey(studentId))
      if (saved) return mergeState(JSON.parse(saved))
    } catch (error) {
      return cloneFallback()
    }
    return cloneFallback()
  }

  function writeState(state) {
    var studentId = readStudentId()
    if (!studentId) return false
    try {
      state.version = 5
      localStorage.setItem(studentStateKey(studentId), JSON.stringify(state))
      return true
    } catch (error) {
      return false
    }
  }

  function resetState() {
    var state = cloneFallback()
    writeState(state)
    return state
  }

  function readTheme() {
    try {
      return localStorage.getItem(themeKey)
    } catch (error) {
      return null
    }
  }

  function writeTheme(theme) {
    try {
      localStorage.setItem(themeKey, theme)
      return true
    } catch (error) {
      return false
    }
  }

  window.PRStore = {
    readStudentId: readStudentId,
    writeStudentId: writeStudentId,
    clearStudentId: clearStudentId,
    readState: readState,
    writeState: writeState,
    resetState: resetState,
    readTheme: readTheme,
    writeTheme: writeTheme
  }
}())
