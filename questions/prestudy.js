window.REVIEW_PRESTUDY = [
  {
    id: "guide",
    title: "系统使用",
    items: [
      "先用几分钟扫一遍这里，了解系统结构、使用顺序和课程知识大纲",
      "复习顺序是了解知识、使用知识解决问题、再通过解析检查理解"
    ],
    blocks: [
      {
        title: "推荐复习顺序",
        items: [
          "先查看课程预备知识、知识大纲和思维导图，建立整体印象",
          "进入选择题直接学习，逐题查看知识点原文，让 AI 解释难点，再看题目和解析",
          "完成直接学习后进入顺序版，按课程顺序自己作答",
          "再进入随机版，检查自己是否真正掌握",
          "最后进入错题集，反复复习做错的题目"
        ]
      },
      {
        title: "模块内容",
        items: [
          "选择题：容易考到的作业原题",
          "填空题：课后练习中的代码填空题",
          "综合题：课后练习中的分析题和设计题",
          "图解设计模式课后题：考试中可能出现的题目"
        ]
      },
      {
        title: "常用操作",
        items: [
          "知识点链接：做题前打开教材原文",
          "左右分栏：一边停在题目，另一边查看答案和解析",
          "一键复制：复制题目、答案和解析后交给 AI 继续讲解",
          "跳转题目：直接定位指定题目",
          "空格进入下一题，Shift + 空格返回上一题",
          "重新作答：清除当前题目的选择后再答一次",
          "清除作答记录：只重置当前作答模式，保留错题和累计错误次数",
          "清空错题记录：单独清除错题和累计错误次数",
          "进度条：查看当前模块的完成比例"
        ]
      }
    ]
  },
  {
    id: "experience",
    title: "往届经验",
    items: [
      "选择题侧重概念，现有消息称可能直接来自平时作业",
      "代码填空考过适配器，另有消息提到迭代器的 next",
      "综合题考过桥接、观察者、装饰和单例，形式接近《图解设计模式》课后题",
      "不同年份题型可能变化，以老师本学期布置的题目为主要范围"
    ]
  },
  {
    id: "uml",
    title: "UML 类图基础",
    items: [
      "类从上到下分为类名、字段和方法",
      "实线空心三角表示继承，箭头指向父类",
      "虚线空心三角表示接口实现，箭头指向接口",
      "空心菱形表示聚合，菱形位于持有对象的一端",
      "+、-、#、~ 分别表示 public、private、protected 和包内可见",
      "读图时先找接口和抽象类，再看具体实现和对象关系"
    ],
    links: [
      {
        title: "《图解设计模式》关于 UML",
        path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/00-关于UML.md"
      }
    ]
  },
  {
    id: "outline",
    title: "知识大纲与思维导图",
    groups: [
      {
        title: "课程基础",
        links: [
          { title: "为什么学习设计模式", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/160981.md" },
          { title: "代码质量判断", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/160985.md" },
          { title: "面向对象、原则、模式、规范与重构", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/160991.md" }
        ]
      },
      {
        title: "面向对象基础",
        links: [
          { title: "面向对象概念", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/161575.md" },
          { title: "封装、抽象、继承和多态", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/161114.md" },
          { title: "面向对象与面向过程", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/161587.md" },
          { title: "伪面向对象代码", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/164907.md" },
          { title: "接口与抽象类", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/165103.md" },
          { title: "基于接口而非实现编程", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/165114.md" },
          { title: "多用组合少用继承", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/169593.md" },
          { title: "贫血模型", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/169600.md" },
          { title: "充血模型", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/169631.md" }
        ]
      },
      {
        title: "设计原则",
        links: [
          { title: "单一职责原则", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/171771.md" },
          { title: "开闭原则", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/176075.md" },
          { title: "里氏替换原则", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177110.md" },
          { title: "接口隔离原则", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177442.md" },
          { title: "依赖反转、控制反转与依赖注入", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177444.md" },
          { title: "KISS 与 YAGNI", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177448.md" },
          { title: "DRY 与代码复用", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/179607.md" },
          { title: "迪米特法则", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/179615.md" }
        ]
      },
      {
        title: "创建型模式",
        links: [
          { title: "工厂方法", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md" },
          { title: "单例", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/05-Singleton模式.md" },
          { title: "原型", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/06-Prototype模式.md" },
          { title: "建造者", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/07-Builder模式.md" },
          { title: "抽象工厂", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/08-AbstractFactory模式.md" }
        ]
      },
      {
        title: "结构型模式",
        links: [
          { title: "适配器", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/02-Adapter模式.md" },
          { title: "桥接", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/09-Bridge模式.md" },
          { title: "组合", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/11-Composite模式.md" },
          { title: "装饰", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/12-Decorator模式.md" },
          { title: "外观", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/15-Facade模式.md" },
          { title: "享元", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/20-Flyweight模式.md" },
          { title: "代理", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/21-Proxy模式.md" }
        ]
      },
      {
        title: "行为型模式",
        links: [
          { title: "迭代器", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/01-Iterator模式.md" },
          { title: "模板方法", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/03-TemplateMethod模式.md" },
          { title: "策略", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/10-Strategy模式.md" },
          { title: "访问者", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/13-Visitor模式.md" },
          { title: "职责链", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/14-ChainofResponsibility模式.md" },
          { title: "中介者", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/16-Mediator模式.md" },
          { title: "观察者", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/17-Observer模式.md" },
          { title: "备忘录", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/18-Memento模式.md" },
          { title: "状态", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/19-State模式.md" },
          { title: "命令", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/22-Command模式.md" },
          { title: "解释器", path: "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/23-Interpreter模式.md" }
        ]
      }
    ]
  }
]
