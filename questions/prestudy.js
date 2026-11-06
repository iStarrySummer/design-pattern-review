window.REVIEW_PRESTUDY = [
  {
    id: "experience",
    title: "往届经验",
    items: [
      "选择题侧重概念，优先刷完现有作业原题",
      "代码填空考过适配器，重点掌握迭代器的 hasNext() 与 next()",
      "综合题考过桥接，形式接近《图解设计模式》课后题",
      "类图是否考试存在年份差异，仍需掌握基本读图方法"
    ]
  },
  {
    id: "guide",
    title: "系统使用",
    items: [
      "先完成预备学习，再进入各题型",
      "选择题可直接学习，也可按顺序或随机作答",
      "空格进入下一题，Shift + 空格返回上一题",
      "答错后会记录错题和累计错误次数",
      "顺序版和随机版分别清除本模式记录",
      "错题记录使用单独的清空按钮"
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
