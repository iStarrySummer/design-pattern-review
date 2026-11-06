(function () {
  "use strict"

  var app = document.getElementById("app")
  var studentId = window.PRStore.readStudentId()
  var state = window.PRStore.readState()
  var mcQuestions = window.REVIEW_MULTIPLE_CHOICE || []
  var writtenQuestions = window.REVIEW_WRITTEN || []
  var fillQuestions = writtenQuestions.filter(function (question) { return question.type === "fill" })
  var comprehensiveQuestions = writtenQuestions.filter(function (question) { return question.type === "comprehensive" })
  var textbookQuestions = window.REVIEW_TEXTBOOK || []
  var materialLinks = window.REVIEW_MATERIAL_LINKS || {}
  var prepSections = window.REVIEW_PRESTUDY || [
    { id: "experience", title: "往届经验", items: ["题型与复习重点"] },
    { id: "guide", title: "系统使用", items: ["学习模式、快捷键与错题记录"] },
    { id: "basics", title: "预备知识", items: ["UML 类图阅读基础"] },
    { id: "outline", title: "知识大纲与思维导图", items: ["课程知识点结构"] }
  ]
  var courseReferenceRoot = "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/"
  var illustratedReferenceRoot = "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/"
  var knowledgePointCatalog = [
    { title: "单一职责原则", path: courseReferenceRoot + "171771.md", terms: ["单一职责"] },
    { title: "开闭原则", path: courseReferenceRoot + "176075.md", terms: ["开闭原则", "对扩展开放", "扩展性方面应该是开放"] },
    { title: "里氏代换原则", path: courseReferenceRoot + "177110.md", terms: ["里氏代换", "里式替换", "里氏替换"] },
    { title: "接口隔离原则", path: courseReferenceRoot + "177442.md", terms: ["接口隔离"] },
    { title: "依赖倒转原则", path: courseReferenceRoot + "177444.md", terms: ["依赖倒转", "依赖反转"] },
    { title: "合成复用原则", path: courseReferenceRoot + "169593.md", terms: ["合成复用", "组合优于继承", "多使用组合"] },
    { title: "迪米特法则", path: courseReferenceRoot + "179615.md", terms: ["迪米特", "最少知识原则"] },
    { title: "简单工厂模式", path: courseReferenceRoot + "197254.md", terms: ["简单工厂"] },
    { title: "工厂方法模式", path: illustratedReferenceRoot + "04-FactoryMethod模式.md", terms: ["工厂方法", "Factory Method模式", "FactoryMethod模式"] },
    { title: "抽象工厂模式", path: illustratedReferenceRoot + "08-AbstractFactory模式.md", terms: ["抽象工厂", "Abstract Factory模式", "AbstractFactory模式"] },
    { title: "建造者模式", path: illustratedReferenceRoot + "07-Builder模式.md", terms: ["建造者模式", "Builder模式"] },
    { title: "原型模式", path: illustratedReferenceRoot + "06-Prototype模式.md", terms: ["原型模式", "Prototype模式"] },
    { title: "单例模式", path: illustratedReferenceRoot + "05-Singleton模式.md", terms: ["单例模式", "Singleton模式"] },
    { title: "适配器模式", path: illustratedReferenceRoot + "02-Adapter模式.md", terms: ["适配器模式", "Adapter模式"] },
    { title: "桥接模式", path: illustratedReferenceRoot + "09-Bridge模式.md", terms: ["桥接模式", "Bridge模式"] },
    { title: "组合模式", path: illustratedReferenceRoot + "11-Composite模式.md", terms: ["组合模式", "Composite模式"] },
    { title: "装饰模式", path: illustratedReferenceRoot + "12-Decorator模式.md", terms: ["装饰模式", "装饰器模式", "Decorator模式"] },
    { title: "外观模式", path: illustratedReferenceRoot + "15-Facade模式.md", terms: ["外观模式", "Facade模式"] },
    { title: "享元模式", path: illustratedReferenceRoot + "20-Flyweight模式.md", terms: ["享元模式", "Flyweight模式"] },
    { title: "代理模式", path: illustratedReferenceRoot + "21-Proxy模式.md", terms: ["代理模式", "Proxy模式"] },
    { title: "职责链模式", path: illustratedReferenceRoot + "14-ChainofResponsibility模式.md", terms: ["职责链", "责任链", "Chain of Responsibility模式", "ChainofResponsibility模式"] },
    { title: "命令模式", path: illustratedReferenceRoot + "22-Command模式.md", terms: ["命令模式", "Command模式"] },
    { title: "解释器模式", path: illustratedReferenceRoot + "23-Interpreter模式.md", terms: ["解释器模式", "Interpreter模式"] },
    { title: "迭代器模式", path: illustratedReferenceRoot + "01-Iterator模式.md", terms: ["迭代器模式", "Iterator模式"] },
    { title: "中介者模式", path: illustratedReferenceRoot + "16-Mediator模式.md", terms: ["中介者模式", "Mediator模式"] },
    { title: "备忘录模式", path: illustratedReferenceRoot + "18-Memento模式.md", terms: ["备忘录模式", "Memento模式"] },
    { title: "观察者模式", path: illustratedReferenceRoot + "17-Observer模式.md", terms: ["观察者模式", "Observer模式"] },
    { title: "状态模式", path: illustratedReferenceRoot + "19-State模式.md", terms: ["状态模式", "State模式"] },
    { title: "策略模式", path: illustratedReferenceRoot + "10-Strategy模式.md", terms: ["策略模式", "Strategy模式"] },
    { title: "模板方法模式", path: illustratedReferenceRoot + "03-TemplateMethod模式.md", terms: ["模板方法模式", "Template Method模式", "TemplateMethod模式"] },
    { title: "访问者模式", path: illustratedReferenceRoot + "13-Visitor模式.md", terms: ["访问者模式", "Visitor模式"] }
  ]
  if (!state.mcIndex || typeof state.mcIndex !== "object") state.mcIndex = {}
  if (!Array.isArray(state.mcWrongIds)) state.mcWrongIds = []
  if (!state.mcWrongCounts || typeof state.mcWrongCounts !== "object") state.mcWrongCounts = {}
  if (!state.viewed || typeof state.viewed !== "object") state.viewed = {}
  ;["prep", "study", "fill", "comprehensive", "textbook"].forEach(function (key) {
    if (!Array.isArray(state.viewed[key])) state.viewed[key] = []
  })
  state.mcWrongIds.forEach(function (questionId) {
    if (!Number(state.mcWrongCounts[questionId])) state.mcWrongCounts[questionId] = 1
  })
  state.mcIndex.wrong = Number(state.mcIndex.wrong) || 0

  function node(tag, className, text) {
    var element = document.createElement(tag)
    if (className) element.className = className
    if (typeof text === "string" || typeof text === "number") element.textContent = String(text)
    return element
  }

  function button(text, className, action) {
    var element = node("button", className, text)
    element.type = "button"
    if (action) element.addEventListener("click", action)
    return element
  }

  function saveState() {
    window.PRStore.writeState(state)
  }

  function accountBar() {
    var bar = node("div", "app-account")
    bar.appendChild(node("span", "t-meta", "学号 " + studentId))
    return bar
  }

  function loginPage() {
    clearPage()
    var card = node("section", "app-login rv-card")
    card.appendChild(node("h1", "app-page-title t-display", "学号登录"))
    var form = node("form", "app-login__form")
    form.noValidate = true
    var label = node("label", "t-label", "学号")
    var input = node("input", "app-input t-body")
    input.type = "text"
    input.inputMode = "numeric"
    input.autocomplete = "username"
    input.maxLength = 10
    input.minLength = 10
    input.pattern = "[0-9]{10}"
    input.placeholder = "输入10位学号"
    input.setAttribute("aria-label", "学号")
    label.appendChild(input)
    form.appendChild(label)
    var message = node("p", "app-login__message t-meta")
    form.appendChild(message)
    var submit = button("进入复习", "rv-btn rv-btn--primary t-label")
    submit.type = "submit"
    form.appendChild(submit)
    form.addEventListener("submit", function (event) {
      event.preventDefault()
      var value = String(input.value || "").trim()
      if (!/^\d{10}$/.test(value)) {
        message.textContent = "请输入10位数字学号"
        input.focus()
        return
      }
      if (!window.PRStore.writeStudentId(value)) {
        message.textContent = "学号保存失败"
        return
      }
      studentId = value
      state = window.PRStore.readState()
      go("#/home")
      route()
    })
    card.appendChild(form)
    app.appendChild(card)
    input.focus()
  }

  function preferredTheme() {
    var saved = window.PRStore.readTheme()
    if (saved === "light" || saved === "dark") return saved
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme)
    document.querySelectorAll("button[data-theme]").forEach(function (control) {
      control.setAttribute("aria-pressed", String(control.dataset.theme === theme))
    })
    window.PRStore.writeTheme(theme)
  }

  function setupTheme() {
    document.querySelectorAll("button[data-theme]").forEach(function (control) {
      control.addEventListener("click", function () {
        setTheme(control.dataset.theme)
      })
    })
    setTheme(preferredTheme())
  }

  function go(route) {
    window.location.hash = route
  }

  function clearPage() {
    app.replaceChildren()
  }

  function pageHeading(title, lead) {
    app.appendChild(node("h1", "app-page-title t-display", title))
    if (lead) app.appendChild(node("p", "app-lead t-body", lead))
  }

  function moduleCard(title, count, actionText, action, progress) {
    var card = node("section", "app-module")
    card.appendChild(node("p", "app-module__count t-meta", count))
    card.appendChild(node("h2", "t-heading", title))
    if (progress) card.appendChild(progressBar(progress.done, progress.total))
    card.appendChild(button(actionText, "rv-btn rv-btn--primary t-label", action))
    return card
  }

  function progressBar(done, total) {
    var wrap = node("div", "app-progress")
    var track = node("div", "app-progress__track")
    var value = node("div", "app-progress__value")
    track.setAttribute("role", "progressbar")
    track.appendChild(value)
    wrap.appendChild(track)
    wrap.appendChild(node("span", "app-progress__text t-meta"))
    updateProgressBar(wrap, done, total)
    return wrap
  }

  function updateProgressBar(wrap, done, total) {
    var safeTotal = Math.max(0, Number(total) || 0)
    var safeDone = Math.max(0, Math.min(Number(done) || 0, safeTotal))
    var percent = safeTotal ? Math.round(safeDone / safeTotal * 100) : 0
    var track = wrap.querySelector(".app-progress__track")
    var value = wrap.querySelector(".app-progress__value")
    var text = wrap.querySelector(".app-progress__text")
    track.setAttribute("aria-valuemin", "0")
    track.setAttribute("aria-valuemax", String(safeTotal))
    track.setAttribute("aria-valuenow", String(safeDone))
    value.style.width = percent + "%"
    text.textContent = percent + "%"
  }

  function viewedCount(key) {
    return Array.isArray(state.viewed[key]) ? state.viewed[key].length : 0
  }

  function markViewed(key, id) {
    var value = String(id || "")
    if (!value || state.viewed[key].indexOf(value) !== -1) return
    state.viewed[key].push(value)
    saveState()
  }

  function backLink(route, text) {
    var link = node("a", "app-back t-label", "← " + text)
    link.href = route
    return link
  }

  function homePage() {
    clearPage()
    app.appendChild(accountBar())
    pageHeading("设计模式复习")

    var grid = node("div", "app-grid app-grid--four")
    grid.appendChild(moduleCard(
      "What you should know",
      prepSections.length + " 个部分",
      "开始学习",
      function () { go("#/prep") },
      { done: viewedCount("prep"), total: prepSections.length }
    ))
    grid.appendChild(moduleCard(
      "选择题",
      mcQuestions.length + " 道原书题目",
      "选择学习模式",
      function () { go("#/mc") },
      { done: viewedCount("study"), total: mcQuestions.length }
    ))
    grid.appendChild(moduleCard(
      "填空题",
      fillQuestions.length + " 道题目",
      "开始复习",
      function () { go("#/fill") },
      { done: viewedCount("fill"), total: fillQuestions.length }
    ))
    grid.appendChild(moduleCard(
      "综合题",
      comprehensiveQuestions.length + " 道题目",
      "开始复习",
      function () { go("#/comprehensive") },
      { done: viewedCount("comprehensive"), total: comprehensiveQuestions.length }
    ))
    grid.appendChild(moduleCard(
      "图解设计模式课后题",
      textbookQuestions.length + " 道题目",
      "开始复习",
      function () { go("#/textbook") },
      { done: viewedCount("textbook"), total: textbookQuestions.length }
    ))
    app.appendChild(grid)
  }

  function prepPage() {
    clearPage()
    app.appendChild(accountBar())
    app.appendChild(backLink("#/home", "返回首页"))
    pageHeading("What you should know")
    var progress = progressBar(viewedCount("prep"), prepSections.length)
    progress.classList.add("app-prep-progress")
    app.appendChild(progress)
    var list = node("div", "app-prep-list")
    prepSections.forEach(function (section) {
      var details = node("details", "app-prep-section rv-card")
      details.open = state.viewed.prep.indexOf(section.id) !== -1
      details.appendChild(node("summary", "t-heading", section.title))
      details.appendChild(renderPrepSectionBody(section))
      details.addEventListener("toggle", function () {
        if (details.open) {
          markViewed("prep", section.id)
          updateProgressBar(progress, viewedCount("prep"), prepSections.length)
        }
      })
      list.appendChild(details)
    })
    app.appendChild(list)
  }

  function renderPrepSectionBody(section) {
    var body = node("div", "app-prep-section__body t-body")
    appendBulletList(body, section.items || [])
    if (Array.isArray(section.blocks) && section.blocks.length) {
      var blocks = node("div", "app-prep-blocks")
      section.blocks.forEach(function (block) {
        var item = node("section", "app-prep-block")
        item.appendChild(node("h3", "t-label", block.title))
        appendBulletList(item, block.items || [])
        blocks.appendChild(item)
      })
      body.appendChild(blocks)
    }
    appendPrepLinks(body, section.links || [])
    if (Array.isArray(section.groups) && section.groups.length) {
      var map = node("div", "app-mind-map")
      section.groups.forEach(function (group) {
        var branch = node("section", "app-mind-map__branch")
        branch.appendChild(node("h3", "t-label", group.title))
        appendPrepLinks(branch, group.links || [])
        map.appendChild(branch)
      })
      body.appendChild(map)
    }
    return body
  }

  function appendPrepLinks(parent, links) {
    if (!Array.isArray(links) || !links.length) return
    var list = node("div", "app-prep-links")
    links.forEach(function (item) {
      var link = node("a", "app-prep-link t-label", item.title + " ↗")
      link.href = lessonHref(item.path)
      link.title = item.path
      if (!isLocalSite()) {
        link.target = "_blank"
        link.rel = "noopener noreferrer"
      }
      list.appendChild(link)
    })
    parent.appendChild(list)
  }

  function mcModePage() {
    clearPage()
    app.appendChild(accountBar())
    app.appendChild(backLink("#/home", "返回首页"))
    pageHeading("选择题")

    if (!mcQuestions.length) {
      app.appendChild(node("p", "app-notice t-body", "当前没有选择题"))
      return
    }

    var grid = node("div", "app-grid app-grid--three")
    grid.appendChild(moduleCard(
      "直接学习",
      viewedCount("study") + " / " + mcQuestions.length,
      "进入直接学习",
      function () { go("#/mc/study") },
      { done: viewedCount("study"), total: mcQuestions.length }
    ))
    grid.appendChild(moduleCard(
      "自己作答：顺序版",
      progressText("sequential"),
      "进入顺序作答",
      function () { go("#/mc/sequential") },
      mcProgress("sequential")
    ))
    grid.appendChild(moduleCard(
      "自己作答：随机版",
      progressText("random"),
      "进入随机作答",
      function () { go("#/mc/random") },
      mcProgress("random")
    ))
    grid.appendChild(moduleCard(
      "错题集",
      wrongQuestions().length + " 道错题 · 累计错 " + totalWrongAttempts() + " 次",
      "进入错题集",
      function () { go("#/mc/wrong") },
      mcProgress("wrong")
    ))
    app.appendChild(grid)
  }

  function progressText(mode) {
    var done = mcDoneCount(mode)
    return mode === "sequential" || mode === "random"
      ? "已核对 " + done + " / " + mcQuestions.length
      : mcQuestions.length + " 道题目"
  }

  function mcDoneCount(mode) {
    var questions = mode === "wrong" ? wrongQuestions() : mcQuestions
    return questions.filter(function (question) {
      return Boolean(state.checked[checkedKey(question, mode)])
    }).length
  }

  function mcProgress(mode) {
    var total = mode === "wrong" ? wrongQuestions().length : mcQuestions.length
    return { done: mcDoneCount(mode), total: total }
  }

  function totalWrongAttempts() {
    return Object.keys(state.mcWrongCounts).reduce(function (total, questionId) {
      return total + (Number(state.mcWrongCounts[questionId]) || 0)
    }, 0)
  }

  function resetMcMode(mode) {
    Object.keys(state.selected).forEach(function (key) {
      if (key.indexOf(mode + "::") === 0) delete state.selected[key]
    })
    Object.keys(state.checked).forEach(function (key) {
      if (key.indexOf(mode + "::") === 0) delete state.checked[key]
    })
    state.mcIndex[mode] = 0
    if (mode === "random") state.mcRandomIds = shuffle(mcQuestions.map(function (question) { return question.id }))
    saveState()
  }

  function shuffle(values) {
    var output = values.slice()
    for (var index = output.length - 1; index > 0; index -= 1) {
      var target = Math.floor(Math.random() * (index + 1))
      var current = output[index]
      output[index] = output[target]
      output[target] = current
    }
    return output
  }

  function validRandomIds(ids) {
    if (!Array.isArray(ids) || ids.length !== mcQuestions.length) return false
    var expected = mcQuestions.map(function (question) { return question.id }).sort().join("\n")
    return ids.slice().sort().join("\n") === expected
  }

  function randomQuestions() {
    if (!validRandomIds(state.mcRandomIds)) {
      state.mcRandomIds = shuffle(mcQuestions.map(function (question) { return question.id }))
      state.mcIndex.random = 0
      saveState()
    }
    var byId = {}
    mcQuestions.forEach(function (question) { byId[question.id] = question })
    return state.mcRandomIds.map(function (id) { return byId[id] }).filter(Boolean)
  }

  function wrongQuestions() {
    var byId = {}
    mcQuestions.forEach(function (question) { byId[question.id] = question })
    return state.mcWrongIds.map(function (id) { return byId[id] }).filter(Boolean)
  }

  function mcQuestionsForMode(mode) {
    if (mode === "wrong") return wrongQuestions()
    return mode === "random" ? randomQuestions() : mcQuestions
  }

  function mcModeName(mode) {
    if (mode === "study") return "直接学习"
    if (mode === "random") return "自己作答：随机版"
    if (mode === "wrong") return "错题集"
    return "自己作答：顺序版"
  }

  function mcPage(mode) {
    clearPage()
    app.appendChild(accountBar())
    app.appendChild(backLink("#/mc", "重新选择模式"))
    pageHeading("选择题 · " + mcModeName(mode))

    var questions = mcQuestionsForMode(mode)
    if (!questions.length) {
      app.appendChild(node("p", "app-notice t-body", mode === "wrong" ? "错题集为空" : "当前没有选择题"))
      return
    }

    var currentIndex = clampIndex(state.mcIndex[mode], questions.length)
    state.mcIndex[mode] = currentIndex
    if (mode === "study") markViewed("study", questions[currentIndex].id)
    var toolbar = node("div", "app-toolbar")
    toolbar.appendChild(questionJump(questions, currentIndex, function (value) {
      state.mcIndex[mode] = value
      saveState()
      mcPage(mode)
    }))

    if (mode === "random") {
      toolbar.appendChild(button("重新随机", "rv-btn rv-btn--secondary t-label", function () {
        state.mcRandomIds = shuffle(mcQuestions.map(function (question) { return question.id }))
        state.mcIndex.random = 0
        saveState()
        mcPage(mode)
      }))
    }
    if (mode === "sequential" || mode === "random") {
      toolbar.appendChild(button("清除作答记录", "rv-btn rv-btn--secondary t-label", function () {
        if (!window.confirm("清除当前模式的作答记录，错题次数会保留")) return
        resetMcMode(mode)
        mcPage(mode)
      }))
    }
    if (mode === "wrong") {
      toolbar.appendChild(button("移出当前错题", "rv-btn rv-btn--secondary t-label", function () {
        removeWrongQuestion(questions[currentIndex])
        state.mcIndex.wrong = clampIndex(currentIndex, wrongQuestions().length)
        saveState()
        mcPage(mode)
      }))
      toolbar.appendChild(button("清空错题记录", "rv-btn rv-btn--secondary t-label", function () {
        if (!window.confirm("清空全部错题和累计错误次数")) return
        state.mcWrongIds = []
        state.mcWrongCounts = {}
        state.mcIndex.wrong = 0
        clearWrongPracticeState()
        saveState()
        mcPage(mode)
      }))
    }
    app.appendChild(toolbar)

    var wrap = node("div", "app-question-wrap app-question-wrap--split")
    wrap.appendChild(renderQuestionPanes(function () {
      return renderMcQuestion(questions[currentIndex], mode, currentIndex, questions.length)
    }))
    wrap.appendChild(renderPager(currentIndex, questions.length, function (nextIndex) {
      state.mcIndex[mode] = nextIndex
      saveState()
      mcPage(mode)
    }))
    app.appendChild(wrap)
  }

  function clampIndex(value, length) {
    var number = Number(value) || 0
    return Math.max(0, Math.min(number, Math.max(0, length - 1)))
  }

  function questionJump(questions, currentIndex, onChange) {
    var label = node("label", "app-jump t-label", "跳转题目")
    var select = node("select", "app-select t-body")
    questions.forEach(function (question, index) {
      var option = node("option", "", (index + 1) + "　" + sourceLabel(question))
      option.value = String(index)
      option.selected = index === currentIndex
      select.appendChild(option)
    })
    select.addEventListener("change", function () {
      onChange(Number(select.value))
    })
    label.appendChild(select)
    return label
  }

  function sourceLabel(question) {
    return question.source || question.chapter || question.pattern || question.id
  }

  function renderMcQuestion(question, mode, index, total) {
    var card = node("article", "rv-card")
    card.appendChild(node("p", "app-position t-meta", (index + 1) + " / " + total))
    card.appendChild(renderLessonLink(question))
    var wrongCount = Number(state.mcWrongCounts[question.id]) || 0
    if (wrongCount > 0) card.appendChild(node("p", "app-wrong-count t-meta", "累计答错 " + wrongCount + " 次"))
    card.appendChild(node("p", "rv-card__stem t-question", question.stem || ""))
    renderMaterials(question).forEach(function (material) { card.appendChild(material) })

    var parts = questionParts(question)
    var checked = Boolean(state.checked[checkedKey(question, mode)])
    var hasJudgedPart = mode !== "study" && parts.some(function (part, partIndex) {
      return !part.sourceMissing && selectionFor(question, partIndex, mode).length > 0
    })
    if (hasJudgedPart) card.classList.add("has-judged-answer")
    parts.forEach(function (part, partIndex) {
      var partJudged = mode === "study" || part.sourceMissing || selectionFor(question, partIndex, mode).length > 0
      card.appendChild(renderMcPart(question, part, partIndex, mode, partJudged))
    })

    if (mode === "study" || checked) {
      if (mode !== "study") {
        card.classList.add(questionCorrect(question, parts, mode) ? "is-answer-correct" : "is-answer-wrong")
      }
      card.appendChild(renderMcResult(question, parts, mode))
      card.appendChild(renderMcExplanation(question))
      if (mode !== "study") {
        var retry = node("div", "rv-actions")
        retry.appendChild(button("重新作答", "rv-btn rv-btn--secondary t-label", function () {
          clearSelections(question, parts.length, mode)
          delete state.checked[checkedKey(question, mode)]
          saveState()
          mcPage(mode)
        }))
        card.appendChild(retry)
      }
    }
    return card
  }

  function questionParts(question) {
    if (Array.isArray(question.parts) && question.parts.length) {
      return question.parts.map(function (part) {
        return {
          label: part.label || part.stem || "",
          options: part.options || [],
          answer: answerArray(part.answer),
          sourceMissing: Boolean(part.sourceMissing)
        }
      })
    }
    return [{
      label: "",
      options: question.options || [],
      answer: answerArray(question.answer)
    }]
  }

  function answerArray(value) {
    if (Array.isArray(value)) return value.map(String)
    if (value === undefined || value === null || value === "") return []
    return [String(value)]
  }

  function checkedKey(question, mode) {
    return mode + "::" + question.id
  }

  function selectionKey(question, partIndex, mode) {
    return mode + "::" + question.id + "::" + partIndex
  }

  function selectionFor(question, partIndex, mode) {
    var saved = state.selected[selectionKey(question, partIndex, mode)]
    if (Array.isArray(saved)) return saved.map(String)
    if (saved === undefined || saved === null || saved === "") return []
    return [String(saved)]
  }

  function recordWrongQuestion(question) {
    if (state.mcWrongIds.indexOf(question.id) === -1) state.mcWrongIds.push(question.id)
    state.mcWrongCounts[question.id] = (Number(state.mcWrongCounts[question.id]) || 0) + 1
  }

  function removeWrongQuestion(question) {
    state.mcWrongIds = state.mcWrongIds.filter(function (id) { return id !== question.id })
    clearSelections(question, questionParts(question).length, "wrong")
    delete state.checked[checkedKey(question, "wrong")]
  }

  function clearWrongPracticeState() {
    Object.keys(state.selected).forEach(function (key) {
      if (key.indexOf("wrong::") === 0) delete state.selected[key]
    })
    Object.keys(state.checked).forEach(function (key) {
      if (key.indexOf("wrong::") === 0) delete state.checked[key]
    })
  }

  function setSelection(question, partIndex, mode, selected) {
    var previous = selectionFor(question, partIndex, mode)
    if (sameAnswers(previous, selected)) return
    state.selected[selectionKey(question, partIndex, mode)] = selected
    var parts = questionParts(question)
    if (mode !== "study" && !sameAnswers(selected, parts[partIndex].answer)) recordWrongQuestion(question)
    var complete = parts.every(function (part, index) {
      return part.sourceMissing || selectionFor(question, index, mode).length > 0
    })
    if (complete) state.checked[checkedKey(question, mode)] = true
    saveState()
  }

  function clearSelections(question, partCount, mode) {
    for (var index = 0; index < partCount; index += 1) {
      delete state.selected[selectionKey(question, index, mode)]
    }
  }

  function renderMcPart(question, part, partIndex, mode, showJudgment) {
    var section = node("section", "app-mc-part")
    if (part.label) section.appendChild(node("h3", "t-label", part.label))
    if (part.sourceMissing || !part.options.length) {
      var missingText = showJudgment && part.answer.length
        ? "原书未提供这一空的选项，参考答案为 " + part.answer.join("、")
        : "原书未提供这一空的选项，核对时不计入作答结果"
      section.appendChild(node("p", "app-notice t-body", missingText))
      return section
    }
    var options = node("div", "rv-options")
    var selected = selectionFor(question, partIndex, mode)
    part.options.forEach(function (option) {
      var optionKey = String(option.key)
      var isCorrect = part.answer.indexOf(optionKey) !== -1
      var isChosen = selected.indexOf(optionKey) !== -1
      var className = "rv-option t-body"

      if (showJudgment && isCorrect) className += " is-correct"
      else if (showJudgment && isChosen && !isCorrect) className += " is-wrong"
      else if (!showJudgment && isChosen) className += " is-chosen"

      var control = node("button", className)
      control.type = "button"
      control.disabled = mode === "study"
      control.appendChild(node("span", "rv-option__key", optionKey))
      control.appendChild(node("span", "rv-option__text", option.text || ""))

      if (showJudgment && isCorrect) {
        control.appendChild(node("span", "rv-option__note t-label", "✓ 正确答案"))
      } else if (showJudgment && isChosen && !isCorrect) {
        control.appendChild(node("span", "rv-option__note t-label", "✗ 你的答案"))
      }

      control.addEventListener("click", function () {
        setSelection(question, partIndex, mode, [optionKey])
        mcPage(mode)
      })
      options.appendChild(control)
    })
    section.appendChild(options)
    return section
  }

  function sameAnswers(left, right) {
    return left.slice().sort().join("\n") === right.slice().sort().join("\n")
  }

  function questionCorrect(question, parts, mode) {
    return parts.every(function (part, partIndex) {
      return part.sourceMissing || sameAnswers(selectionFor(question, partIndex, mode), part.answer)
    })
  }

  function renderMcResult(question, parts, mode) {
    var result = node("div", "app-result")
    var correct = mode === "study" || questionCorrect(question, parts, mode)
    var text = mode === "study" ? "参考答案已显示" : (correct ? "✓ 回答正确" : "✗ 回答有误")
    result.appendChild(node("span", "rv-tag " + (correct ? "rv-tag--correct" : "rv-tag--wrong") + " t-meta", text))
    return result
  }

  function renderMcExplanation(question) {
    var details = node("details", "rv-explain")
    details.open = true
    details.appendChild(node("summary", "t-label", "解析"))
    var body = node("div", "t-body")
    appendBulletList(body, question.explanation || question.analysisSteps || [])
    if (question.memory) {
      body.appendChild(node("h4", "t-label", "考试速记"))
      appendValue(body, question.memory)
    }
    if (question.quotes && question.quotes.length) body.appendChild(renderQuotes(question.quotes))
    details.appendChild(body)
    return details
  }

  function fillPage() {
    clearPage()
    app.appendChild(accountBar())
    app.appendChild(backLink("#/home", "返回首页"))
    pageHeading("填空题")
    renderSequentialModule(fillQuestions, "fillIndex", renderWrittenQuestion)
  }

  function comprehensivePage() {
    clearPage()
    app.appendChild(accountBar())
    app.appendChild(backLink("#/home", "返回首页"))
    pageHeading("综合题")
    renderSequentialModule(comprehensiveQuestions, "comprehensiveIndex", renderWrittenQuestion)
  }

  function textbookPage() {
    clearPage()
    app.appendChild(accountBar())
    app.appendChild(backLink("#/home", "返回首页"))
    pageHeading("图解设计模式课后题")
    renderSequentialModule(textbookQuestions, "textbookIndex", renderTextbookQuestion)
  }

  function renderSequentialModule(questions, stateKey, renderer) {
    if (!questions.length) {
      app.appendChild(node("p", "app-notice t-body", "当前没有可用题目"))
      return
    }

    var currentIndex = clampIndex(state[stateKey], questions.length)
    state[stateKey] = currentIndex
    var viewedKey = stateKey === "fillIndex"
      ? "fill"
      : (stateKey === "comprehensiveIndex" ? "comprehensive" : "textbook")
    markViewed(viewedKey, questions[currentIndex].id || String(currentIndex))
    var toolbar = node("div", "app-toolbar")
    toolbar.appendChild(questionJump(questions, currentIndex, function (value) {
      state[stateKey] = value
      saveState()
      route()
    }))
    app.appendChild(toolbar)

    var wrap = node("div", "app-question-wrap app-question-wrap--split")
    wrap.appendChild(renderQuestionPanes(function () {
      return renderer(questions[currentIndex], currentIndex, questions.length)
    }))
    wrap.appendChild(renderPager(currentIndex, questions.length, function (nextIndex) {
      state[stateKey] = nextIndex
      saveState()
      route()
    }))
    app.appendChild(wrap)
  }

  function renderQuestionPanes(renderQuestion) {
    var split = node("div", "app-split-view")
    ;["左侧", "右侧"].forEach(function (side) {
      var pane = node("section", "app-split-pane")
      pane.setAttribute("aria-label", side + "题目区域")
      var copyBar = node("div", "app-copy-bar")
      var card = renderQuestion()
      var copyButton = button("一键复制", "rv-btn rv-btn--secondary t-label app-copy-button", function () {
        copyCard(card, copyButton)
      })
      copyBar.appendChild(copyButton)
      pane.appendChild(copyBar)
      pane.appendChild(card)
      split.appendChild(pane)
    })
    return split
  }

  function copyCard(card, control) {
    var details = Array.prototype.slice.call(card.querySelectorAll("details"))
    var openStates = details.map(function (item) { return item.open })
    var actions = Array.prototype.slice.call(card.querySelectorAll(".rv-actions"))
    var actionDisplays = actions.map(function (item) { return item.style.display })

    details.forEach(function (item) { item.open = true })
    actions.forEach(function (item) { item.style.display = "none" })
    var text = card.innerText
      .replace(/^(展开解析|显示参考答案|查看课件原文)$/gm, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim()
    details.forEach(function (item, index) { item.open = openStates[index] })
    actions.forEach(function (item, index) { item.style.display = actionDisplays[index] })

    writeClipboard(text).then(function () {
      showCopyState(control, "已复制")
    }).catch(function () {
      showCopyState(control, "复制失败")
    })
  }

  function writeClipboard(text) {
    return new Promise(function (resolve, reject) {
      var field = node("textarea", "app-copy-field")
      field.value = text
      field.setAttribute("readonly", "")
      document.body.appendChild(field)
      field.select()
      var copied = document.execCommand("copy")
      field.remove()
      if (copied) {
        resolve()
        return
      }
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(resolve).catch(reject)
        return
      }
      reject(new Error("copy_failed"))
    })
  }

  function showCopyState(control, text) {
    control.textContent = text
    window.setTimeout(function () { control.textContent = "一键复制" }, 1200)
  }

  function renderPager(currentIndex, total, onMove) {
    var pager = node("nav", "app-pager")
    pager.setAttribute("aria-label", "题目翻页")
    var previous = button("上一题", "rv-btn rv-btn--secondary t-label", function () {
      onMove(currentIndex - 1)
    })
    previous.disabled = currentIndex <= 0
    pager.appendChild(previous)
    pager.appendChild(node("span", "t-meta", (currentIndex + 1) + " / " + total))
    var next = button("下一题", "rv-btn rv-btn--primary t-label", function () {
      onMove(currentIndex + 1)
    })
    next.disabled = currentIndex >= total - 1
    pager.appendChild(next)
    return pager
  }

  function renderWrittenQuestion(question, index, total) {
    var card = questionCardStart(question, index, total)
    renderMaterials(question).forEach(function (material) { card.appendChild(material) })
    card.appendChild(renderWrittenAnswer(question))
    card.appendChild(renderWrittenAnalysis(question))
    return card
  }

  function questionCardStart(question, index, total) {
    var card = node("article", "rv-card")
    card.appendChild(node("p", "app-position t-meta", (index + 1) + " / " + total))
    card.appendChild(renderLessonLink(question))
    card.appendChild(node("p", "rv-card__stem t-question", question.stem || question.question || ""))
    return card
  }

  function questionMeta(question) {
    return [question.source, question.category, question.pattern, question.chapter].filter(Boolean).join(" · ")
  }

  function renderLessonLink(question) {
    var links = lessonLinksForQuestion(question)
    var fallbackPath = question.lessonPath || question.lesson || ""
    if (!links.length && fallbackPath) {
      links.push({
        title: fallbackLessonTitle(question, fallbackPath),
        path: fallbackPath
      })
    }
    var wrap = node("p", "app-lesson t-meta")
    if (!links.length) {
      wrap.appendChild(node("span", "app-lesson__missing", "当前题目暂无课件链接"))
      return wrap
    }
    links.forEach(function (item) {
      var link = node("a", "app-lesson__link t-label", (item.title || "对应知识点") + " ↗")
      link.href = lessonHref(item.path)
      link.title = item.path
      if (!isLocalSite()) {
        link.target = "_blank"
        link.rel = "noopener noreferrer"
      }
      wrap.appendChild(link)
    })
    return wrap
  }

  function lessonLinksForQuestion(question) {
    var links = []
    var explicitLinks = Array.isArray(question.lessonLinks) ? question.lessonLinks : []
    explicitLinks.forEach(function (item) { addLessonLink(links, item) })

    var text = JSON.stringify(question, function (key, value) {
      if (key === "lessonPath" || key === "lessonTitle" || key === "lessonLinks" || key === "quotes") return undefined
      return value
    }) || ""
    var inferredLinks = knowledgePointCatalog.filter(function (item) {
      return item.terms.some(function (term) { return text.indexOf(term) !== -1 })
    })
    var primaryTitle = question.pattern || ""
    inferredLinks.sort(function (left, right) {
      if (left.title === primaryTitle) return -1
      if (right.title === primaryTitle) return 1
      return 0
    })
    inferredLinks.forEach(function (item) { addLessonLink(links, item) })
    return links
  }

  function addLessonLink(links, item) {
    if (!item || !item.path) return
    var title = item.title || "对应知识点"
    var exists = links.some(function (current) {
      return current.title === title && current.path === item.path
    })
    if (!exists) links.push({ title: title, path: item.path })
  }

  function fallbackLessonTitle(question, path) {
    var genericPatterns = ["面向对象设计原则", "面向对象原则"]
    if (question.pattern && genericPatterns.indexOf(question.pattern) === -1) return question.pattern
    if (question.lessonTitle) {
      return question.lessonTitle.replace(/\.md$/i, "").replace(/^\d+[-_　\s]*/, "")
    }
    var catalogItem = knowledgePointCatalog.find(function (item) { return item.path === path })
    if (catalogItem) return catalogItem.title
    return question.category || "对应知识点"
  }

  function obsidianHref(path) {
    if (/^obsidian:/i.test(path)) return path

    var vaultName = "istarrySummer"
    var sourceRoots = [
      {
        source: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/",
        vault: "01_Areas/课程/设计模式 1.5/参考教材/design-pattern-books-master/"
      },
      {
        source: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/",
        vault: "01_Areas/课程/设计模式 1.5/参考教材/图解设计模式/"
      }
    ]

    for (var index = 0; index < sourceRoots.length; index += 1) {
      var root = sourceRoots[index]
      if (path.indexOf(root.source) === 0) {
        var vaultFile = root.vault + path.slice(root.source.length)
        return "obsidian://open?vault=" + encodeURIComponent(vaultName) + "&file=" + encodeURIComponent(vaultFile)
      }
    }

    return "obsidian://open?path=" + encodeURIComponent(path)
  }

  function isLocalSite() {
    return window.location.protocol === "file:"
      || window.location.hostname === "localhost"
      || window.location.hostname === "127.0.0.1"
  }

  function lessonHref(path) {
    if (isLocalSite()) return obsidianHref(path)
    var repositoryPath = materialLinks[path]
    if (!repositoryPath) return "#"
    var encodedPath = repositoryPath.split("/").map(encodeURIComponent).join("/")
    return "https://github.com/iStarrySummer/design-pattern-review/blob/main/" + encodedPath
  }

  function renderMaterials(question) {
    var materials = Array.isArray(question.materials) ? question.materials.slice() : []
    if (question.image) materials.unshift({ type: "image", src: question.image, alt: question.imageAlt })
    if (question.code) materials.push({ type: "code", code: question.code })
    return materials.map(renderMaterial).filter(Boolean)
  }

  function renderMaterial(material) {
    if (!material) return null
    if (typeof material === "string") return node("p", "t-body", material)
    var type = material.type || (material.src ? "image" : (material.code ? "code" : "text"))

    if (type === "image") {
      var figure = node("figure", "rv-figure")
      var image = node("img")
      image.src = material.src || material.path || ""
      image.alt = material.alt || material.caption || "题目图片"
      figure.appendChild(image)
      if (material.caption || material.alt) {
        figure.appendChild(node("figcaption", "t-meta", material.caption || material.alt))
      }
      return figure
    }

    if (type === "code") {
      var pre = node("pre", "rv-code t-code")
      pre.appendChild(node("code", "", material.code || material.content || material.text || ""))
      return pre
    }

    if (type === "list") {
      var listWrap = node("div", "t-body")
      appendBulletList(listWrap, material.items || [])
      return listWrap
    }

    if (type === "table") {
      var tableWrap = node("div", "app-table-scroll")
      var table = node("table", "rv-table app-answer-table")
      if (Array.isArray(material.headers)) {
        var head = node("thead")
        var headRow = node("tr")
        material.headers.forEach(function (heading) { headRow.appendChild(node("th", "", heading)) })
        head.appendChild(headRow)
        table.appendChild(head)
      }
      var body = node("tbody")
      ;(material.rows || []).forEach(function (values) {
        var row = node("tr")
        values.forEach(function (value) { row.appendChild(node("td", "", value)) })
        body.appendChild(row)
      })
      table.appendChild(body)
      tableWrap.appendChild(table)
      return tableWrap
    }

    return node("p", "t-body", material.content || material.text || material.value || "")
  }

  function renderWrittenAnswer(question) {
    var details = node("details", "rv-explain")
    details.open = true
    details.appendChild(node("summary", "t-label", "参考答案"))
    var body = node("div", "t-body")
    if (question.type === "fill" && Array.isArray(question.answers) && question.answers.length) {
      var fillAnswers = normalizeFillAnswers(question.answers)
      var tableWrap = node("div", "app-table-scroll")
      var table = node("table", "rv-table app-answer-table")
      var head = node("thead")
      var headRow = node("tr")
      headRow.appendChild(node("th", "", "空格或小题"))
      headRow.appendChild(node("th", "", "参考答案"))
      head.appendChild(headRow)
      table.appendChild(head)
      var bodyRows = node("tbody")
      fillAnswers.forEach(function (answer, index) {
        var pair = Array.isArray(answer) ? answer : [String(index + 1), answer]
        var row = node("tr")
        row.appendChild(node("td", "", pair[0]))
        var value = node("td")
        appendValue(value, pair[1], true)
        row.appendChild(value)
        bodyRows.appendChild(row)
      })
      table.appendChild(bodyRows)
      tableWrap.appendChild(table)
      body.appendChild(tableWrap)

      ;(question.answerMaterials || []).filter(function (material) {
        return material && material.type !== "text" && material.type !== "list"
      }).map(renderMaterial).filter(Boolean).forEach(function (material) {
        body.appendChild(material)
      })
    } else if (Array.isArray(question.answerMaterials) && question.answerMaterials.length) {
      question.answerMaterials.map(renderMaterial).filter(Boolean).forEach(function (material) {
        body.appendChild(material)
      })
    } else {
      appendValue(body, question.answer || question.referenceAnswer || "暂无参考答案")
    }
    details.appendChild(body)
    return details
  }

  function normalizeFillAnswers(answers) {
    if (answers.every(Array.isArray)) return answers
    if (answers.length !== 1 || typeof answers[0] !== "string") {
      return answers.map(function (answer, index) { return [String(index + 1), answer] })
    }

    var source = answers[0]
    var markers = []
    var pattern = /\((\d+)\)/g
    var found
    while ((found = pattern.exec(source)) !== null) {
      markers.push({ number: Number(found[1]), start: found.index, end: pattern.lastIndex })
    }
    var accepted = []
    var expected = 1
    markers.forEach(function (marker) {
      if (marker.number === expected) {
        accepted.push(marker)
        expected += 1
      }
    })
    if (!accepted.length) return [["1", source]]
    return accepted.map(function (marker, index) {
      var end = index + 1 < accepted.length ? accepted[index + 1].start : source.length
      var value = source.slice(marker.end, end).trim().replace(/^[;；]\s*|[;；]\s*$/g, "")
      return [String(marker.number), value]
    })
  }

  function renderWrittenAnalysis(question) {
    var details = node("details", "rv-explain")
    details.open = true
    details.appendChild(node("summary", "t-label", "解析"))
    var body = node("div", "t-body")

    if (Array.isArray(question.roles) && question.roles.length) {
      body.appendChild(node("h3", "t-heading", "角色对应"))
      var roles = node("div", "app-role-grid")
      question.roles.forEach(function (role) {
        var pair = Array.isArray(role) ? role : [role.name, role.description]
        var item = node("div", "app-role")
        item.appendChild(node("strong", "", pair[0] || ""))
        item.appendChild(node("span", "", pair[1] || ""))
        roles.appendChild(item)
      })
      body.appendChild(roles)
    }

    var steps = question.steps || question.analysisSteps || question.explanation || []
    steps.forEach(function (step, index) {
      var section = node("section", "app-step")
      if (typeof step === "string") {
        section.appendChild(node("h4", "t-label", "第" + (index + 1) + "步"))
        section.appendChild(node("p", "", step))
      } else {
        section.appendChild(node("h4", "t-label", step.title || "第" + (index + 1) + "步"))
        appendBulletList(section, step.bullets || step.points || [])
        if (step.code) {
          var pre = node("pre", "rv-code t-code")
          pre.appendChild(node("code", "", step.code))
          section.appendChild(pre)
        }
        if (step.text) section.appendChild(node("p", "", step.text))
      }
      body.appendChild(section)
    })

    if (question.memory) {
      var memorySection = node("section", "app-step")
      memorySection.appendChild(node("h4", "t-label", "考试速记"))
      appendValue(memorySection, question.memory)
      body.appendChild(memorySection)
    }

    if (question.quotes && question.quotes.length) {
      var sourceDetails = node("details", "rv-explain")
      sourceDetails.open = true
      sourceDetails.appendChild(node("summary", "t-label", "课件原文"))
      var sourceBody = node("div", "t-body")
      sourceBody.appendChild(renderQuotes(question.quotes))
      sourceDetails.appendChild(sourceBody)
      body.appendChild(sourceDetails)
    }

    details.appendChild(body)
    return details
  }

  function renderTextbookQuestion(question, index, total) {
    var card = questionCardStart(question, index, total)
    renderMaterials(question).forEach(function (material) { card.appendChild(material) })

    var answerBlock = node("section", "app-direct-answer")
    answerBlock.appendChild(node("h3", "t-heading", "参考答案"))
    appendValue(answerBlock, question.answer || question.answers || "暂无参考答案")
    if (Array.isArray(question.answerMaterials)) {
      question.answerMaterials.map(renderMaterial).filter(Boolean).forEach(function (material) {
        answerBlock.appendChild(material)
      })
    }
    card.appendChild(answerBlock)
    card.appendChild(renderWrittenAnalysis(question))
    return card
  }

  function appendValue(container, value, preferCode) {
    if (value === undefined || value === null || value === "") return
    if (Array.isArray(value)) {
      if (value.every(function (item) { return item && typeof item === "object" && item.type })) {
        value.map(renderMaterial).filter(Boolean).forEach(function (material) {
          container.appendChild(material)
        })
      } else {
        appendBulletList(container, value)
      }
      return
    }
    if (typeof value === "object") {
      if (value.code) {
        var pre = node("pre", "rv-code t-code")
        pre.appendChild(node("code", "", value.code))
        container.appendChild(pre)
      }
      if (value.text) container.appendChild(node("p", "", value.text))
      if (Array.isArray(value.materials)) {
        value.materials.map(renderMaterial).filter(Boolean).forEach(function (material) {
          container.appendChild(material)
        })
      }
      return
    }
    if (preferCode) container.appendChild(node("code", "t-code", String(value)))
    else container.appendChild(node("p", "", String(value)))
  }

  function appendBulletList(container, values) {
    if (!Array.isArray(values) || !values.length) return
    var list = node("ul")
    values.forEach(function (value) {
      var item = node("li")
      if (typeof value === "object" && value !== null) {
        item.textContent = value.text || value.title || JSON.stringify(value)
      } else {
        item.textContent = String(value)
      }
      list.appendChild(item)
    })
    container.appendChild(list)
  }

  function renderQuotes(quotes) {
    var container = node("div")
    quotes.forEach(function (quote) {
      var block = node("blockquote", "app-quote")
      block.appendChild(node("p", "", quote.text || quote.quote || ""))
      block.appendChild(node("cite", "t-meta", quote.source || ""))
      container.appendChild(block)
    })
    return container
  }

  function route() {
    var hash = window.location.hash || "#/home"
    if (!studentId) {
      loginPage()
      return
    }
    if (hash === "#/prep") prepPage()
    else if (hash === "#/mc") mcModePage()
    else if (hash === "#/mc/study") mcPage("study")
    else if (hash === "#/mc/sequential") mcPage("sequential")
    else if (hash === "#/mc/random") mcPage("random")
    else if (hash === "#/mc/wrong") mcPage("wrong")
    else if (hash === "#/fill" || hash === "#/written") fillPage()
    else if (hash === "#/comprehensive") comprehensivePage()
    else if (hash === "#/textbook") textbookPage()
    else homePage()
    app.focus()
  }

  function handleQuestionKeyboard(event) {
    if (event.code !== "Space" || event.repeat || event.altKey || event.ctrlKey || event.metaKey) return
    var tagName = event.target && event.target.tagName
    if (["INPUT", "SELECT", "TEXTAREA"].indexOf(tagName) !== -1) return

    var hash = window.location.hash || ""
    var direction = event.shiftKey ? -1 : 1
    var match = hash.match(/^#\/mc\/(study|sequential|random|wrong)$/)
    if (match) {
      var mode = match[1]
      var questions = mcQuestionsForMode(mode)
      var currentIndex = clampIndex(state.mcIndex[mode], questions.length)
      var nextIndex = currentIndex + direction
      event.preventDefault()
      if (nextIndex < 0 || nextIndex >= questions.length) return
      state.mcIndex[mode] = nextIndex
      saveState()
      mcPage(mode)
      return
    }

    var stateKey = hash === "#/fill" || hash === "#/written"
      ? "fillIndex"
      : (hash === "#/comprehensive" ? "comprehensiveIndex" : (hash === "#/textbook" ? "textbookIndex" : ""))
    if (!stateKey) return
    var moduleQuestions = stateKey === "fillIndex"
      ? fillQuestions
      : (stateKey === "comprehensiveIndex" ? comprehensiveQuestions : textbookQuestions)
    var moduleIndex = clampIndex(state[stateKey], moduleQuestions.length)
    var moduleNextIndex = moduleIndex + direction
    event.preventDefault()
    if (moduleNextIndex < 0 || moduleNextIndex >= moduleQuestions.length) return
    state[stateKey] = moduleNextIndex
    saveState()
    route()
  }

  setupTheme()
  window.addEventListener("hashchange", route)
  document.addEventListener("keydown", handleQuestionKeyboard)
  route()
}())
