/* 由本地教材题目与参考答案批量整理
 * 原题与参考答案保留原有标点
 * 新写解析句末不添加句号
 */
window.REVIEW_WRITTEN = [
  {
    "id": "E1-COMP-01",
    "type": "comprehensive",
    "source": "习题1综合题第1题",
    "category": "面向对象设计原则",
    "pattern": "开闭原则、依赖倒转原则与合成复用原则",
    "stem": "有人将面向对象设计原则简单归纳为三条:(1) 封装变化点；(2) 对接口进行编程；(3) 多使用组合，而不是继承。请查阅相关资料并结合所学内容，谈谈对这三条原则的理解。",
    "materials": [],
    "answers": [
      "解析:(1)“封装变化点”对应开闭原则。开闭原则的另一种表述形式是可变性封装原则(Principle of Encapsulation of Variation, EVP)，即要求找到系统的可变因素并将其封装起来。一种常见的实现方式是找出系统的变化点，并基于变化点提取抽象层，针对抽象层编程，而将不同变化的具体实现封装到一系列具体子类中。同时，EVP 要求尽量不要将一种可变性和另一种可变性混合在一起，否则将导致系统中类的个数急剧增长，增加系统的复杂度。\n\n(2) “对接口进行编程”对应依赖倒转原则。依赖倒转原则是面向对象设计的主要实现机制之一, 它是系统抽象化的具体实现。依赖倒转原则要求: 要针对接口编程, 而不要针对实现编程；并且，在程序代码中传递参数时或在关联关系中尽量引用层次高的抽象层类，即使用接口和抽象类进行变量类型声明、参数类型声明、方法返回类型声明以及数据类型的转换等，而不要用具体类来做这些事情。为了确保该原则的应用，一个具体类应当只实现接口或抽象类中声明过的方法，而不要给出多余的方法，否则将无法调用在子类中增加的新方法。在引入抽象层后，系统将具有很好的灵活性，在程序中尽量使用抽象层进行编程，而将具体类写在配置文件中。这样一来，如果系统行为发生变化，只需要对抽象层进行扩展，并修改配置文件，而无须修改原有系统的源代码，在不修改的情况下来扩展系统的功能，满足开闭原则的要求。\n\n(3) “多使用组合,而不是继承”对应合成复用原则。合成复用原则要求优先使用对象组合,而不是继承来达到复用的目的。合成复用是在一个新的对象里通过关联关系(包括组合关系和聚合关系)来使用一些已有的对象,使之成为新对象的一部分,新对象通过委派调用已有对象的方法达到功能复用的目的。与继承复用相比,合成复用不会破坏系统的封装性,其适用范围更广,而且复用可以在运行时动态进行,新对象还可以动态地引用已有对象类型的子类型的对象,系统具有更好的灵活性和可扩展性。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "解析:(1)“封装变化点”对应开闭原则。开闭原则的另一种表述形式是可变性封装原则(Principle of Encapsulation of Variation, EVP)，即要求找到系统的可变因素并将其封装起来。一种常见的实现方式是找出系统的变化点，并基于变化点提取抽象层，针对抽象层编程，而将不同变化的具体实现封装到一系列具体子类中。同时，EVP 要求尽量不要将一种可变性和另一种可变性混合在一起，否则将导致系统中类的个数急剧增长，增加系统的复杂度。"
      },
      {
        "type": "text",
        "content": "(2) “对接口进行编程”对应依赖倒转原则。依赖倒转原则是面向对象设计的主要实现机制之一, 它是系统抽象化的具体实现。依赖倒转原则要求: 要针对接口编程, 而不要针对实现编程；并且，在程序代码中传递参数时或在关联关系中尽量引用层次高的抽象层类，即使用接口和抽象类进行变量类型声明、参数类型声明、方法返回类型声明以及数据类型的转换等，而不要用具体类来做这些事情。为了确保该原则的应用，一个具体类应当只实现接口或抽象类中声明过的方法，而不要给出多余的方法，否则将无法调用在子类中增加的新方法。在引入抽象层后，系统将具有很好的灵活性，在程序中尽量使用抽象层进行编程，而将具体类写在配置文件中。这样一来，如果系统行为发生变化，只需要对抽象层进行扩展，并修改配置文件，而无须修改原有系统的源代码，在不修改的情况下来扩展系统的功能，满足开闭原则的要求。"
      },
      {
        "type": "text",
        "content": "(3) “多使用组合,而不是继承”对应合成复用原则。合成复用原则要求优先使用对象组合,而不是继承来达到复用的目的。合成复用是在一个新的对象里通过关联关系(包括组合关系和聚合关系)来使用一些已有的对象,使之成为新对象的一部分,新对象通过委派调用已有对象的方法达到功能复用的目的。与继承复用相比,合成复用不会破坏系统的封装性,其适用范围更广,而且复用可以在运行时动态进行,新对象还可以动态地引用已有对象类型的子类型的对象,系统具有更好的灵活性和可扩展性。"
      }
    ],
    "roles": [
      [
        "封装变化点",
        "对应开闭原则：找出会变的地方，单独包起来"
      ],
      [
        "对接口进行编程",
        "对应依赖倒转原则：代码只依赖接口或抽象类"
      ],
      [
        "多使用组合，而不是继承",
        "对应合成复用原则：复用功能时优先把对象放进来当成员"
      ]
    ],
    "steps": [
      {
        "title": "第一步　先用一个例子看三条话在说什么",
        "bullets": [
          "假设商场收银要支持多种打折方式，打折规则以后还会经常加",
          "“会变的东西”是打折规则，“不变的东西”是收银流程",
          "三条原则都在回答同一个问题：怎样让会变的部分改起来不碰不变的部分"
        ],
        "code": ""
      },
      {
        "title": "第二步　把三句话分别对上原则",
        "bullets": [
          "封装变化点：把打折规则抽成一个抽象层，每种规则写成一个子类，新规则只加子类，这就是开闭原则的做法",
          "对接口进行编程：收银类里的变量、参数、返回值都声明成“打折规则”接口类型，不写具体规则类名，这就是依赖倒转原则",
          "多用组合：收银类持有一个“打折规则”对象，调用它来算价钱，而不是去继承某个打折类，这就是合成复用原则"
        ],
        "code": ""
      },
      {
        "title": "第三步　说清每条原则为什么有用",
        "bullets": [
          "开闭原则：变化被关进子类里，加功能写新类，旧代码不改，也不容易改出新 bug",
          "依赖倒转原则：调用方只认接口，具体类可以写进配置文件，换实现时不用改源代码",
          "合成复用原则：继承会把父类细节暴露给子类，而且编译时就定死；组合不破坏封装，运行时还能换成别的对象",
          "参考答案还提醒一点：不同的变化不要混在一个类里，否则类的数量会急剧增加"
        ],
        "code": ""
      },
      {
        "title": "第四步　写在试卷上的答案要点",
        "bullets": [
          "(1) 封装变化点对应开闭原则（可变性封装原则），找出变化点，提取抽象层，把不同实现放进子类",
          "(2) 对接口进行编程对应依赖倒转原则，用接口和抽象类声明变量、参数和返回值，具体类写在配置文件中",
          "(3) 多用组合对应合成复用原则，通过关联关系复用已有对象，不破坏封装，可以运行时动态替换"
        ],
        "code": ""
      }
    ],
    "memory": [
      "三条话一一对应：封装变化＝开闭，面向接口＝依赖倒转，多用组合＝合成复用",
      "答题时每条都要写出“对应哪个原则＋怎么做＋带来什么好处”"
    ],
    "quotes": [
      {
        "text": "开闭原则的另一种表述形式是可变性封装原则(Principle of Encapsulation of Variation, EVP)，即要求找到系统的可变因素并将其封装起来。",
        "source": "06-2-面向对象设计原则-参考答案及习题解析.md 第17行"
      },
      {
        "text": "与继承复用相比,合成复用不会破坏系统的封装性,其适用范围更广,而且复用可以在运行时动态进行",
        "source": "06-2-面向对象设计原则-参考答案及习题解析.md 第23行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/176075.md",
    "lessonLinks": [
      {
        "title": "开闭原则",
        "path": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/176075.md"
      },
      {
        "title": "依赖倒转原则",
        "path": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177444.md"
      },
      {
        "title": "合成复用原则",
        "path": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/169593.md"
      }
    ]
  },
  {
    "id": "E1-COMP-02",
    "type": "comprehensive",
    "source": "习题1综合题第2题",
    "category": "面向对象设计原则",
    "pattern": "单一职责原则与接口隔离原则",
    "stem": "结合所学面向对象设计原则,谈谈对类和接口“粒度”的理解。",
    "materials": [],
    "answers": [
      "解析:在面向对象原则中，单一职责原则和接口隔离原则用于定义类和接口的粒度。\n\n单一职责原则是最简单的面向对象设计原则之一,它用于控制类的“粒度”大小。单一职责原则要求一个对象应该只包含单一的职责,并且该职责被完整地封装在一个类中。它的另一种表述方式为: 就一个类而言,应该仅有一个引起它变化的原因。在软件系统中,一个类(大到模块,小到方法)承担的职责越多,它被复用的可能性就越小。而且一个类承担的职责过多,就相当于将这些职责耦合在一起,当其中一个职责发生变化时,可能会影响其他职责的运作。因此要将这些职责进行分离,将不同的职责封装在不同的类中,即将不同的变化原因封装在不同的类中,如果多个职责总是同时发生改变,则可将它们封装在同一类中。\n\n接口隔离原则要求客户端不应该依赖那些它不需要的接口,它用于定义接口的“粒度”。根据接口隔离原则,当一个接口太大时,需要将它分割成一些更细小的接口,使用该接口的客户端仅须知道与之相关的方法即可。每一个接口应该承担一种相对独立的角色,不干不该干的事,该干的事都要干。接口隔离原则是针对接口的单一职责原则,按照接口隔离原则的要求,应当为客户端提供尽可能小的单独的接口,而不要提供大的总接口。在面向对象编程语言中,实现一个接口就需要实现该接口中定义的所有方法,因此大的总接口使用起来不一定很方便。为了使接口的职责单一,需要将大接口中的方法根据其职责不同分别放在不同的小接口中,以确保每个接口使用起来都较为方便,并都承担某一单一角色。接口应该尽量细化,同时接口中的方法应该尽量少,每个接口中只包含一个客户端(例如子模块或业务逻辑类)所需的方法即可,这种机制也称为“定制服务”,即为不同的客户端提供宽窄不同的接口,只提供用户需要的行为,而隐藏那些用户不需要的行为。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "解析:在面向对象原则中，单一职责原则和接口隔离原则用于定义类和接口的粒度。"
      },
      {
        "type": "text",
        "content": "单一职责原则是最简单的面向对象设计原则之一,它用于控制类的“粒度”大小。单一职责原则要求一个对象应该只包含单一的职责,并且该职责被完整地封装在一个类中。它的另一种表述方式为: 就一个类而言,应该仅有一个引起它变化的原因。在软件系统中,一个类(大到模块,小到方法)承担的职责越多,它被复用的可能性就越小。而且一个类承担的职责过多,就相当于将这些职责耦合在一起,当其中一个职责发生变化时,可能会影响其他职责的运作。因此要将这些职责进行分离,将不同的职责封装在不同的类中,即将不同的变化原因封装在不同的类中,如果多个职责总是同时发生改变,则可将它们封装在同一类中。"
      },
      {
        "type": "text",
        "content": "接口隔离原则要求客户端不应该依赖那些它不需要的接口,它用于定义接口的“粒度”。根据接口隔离原则,当一个接口太大时,需要将它分割成一些更细小的接口,使用该接口的客户端仅须知道与之相关的方法即可。每一个接口应该承担一种相对独立的角色,不干不该干的事,该干的事都要干。接口隔离原则是针对接口的单一职责原则,按照接口隔离原则的要求,应当为客户端提供尽可能小的单独的接口,而不要提供大的总接口。在面向对象编程语言中,实现一个接口就需要实现该接口中定义的所有方法,因此大的总接口使用起来不一定很方便。为了使接口的职责单一,需要将大接口中的方法根据其职责不同分别放在不同的小接口中,以确保每个接口使用起来都较为方便,并都承担某一单一角色。接口应该尽量细化,同时接口中的方法应该尽量少,每个接口中只包含一个客户端(例如子模块或业务逻辑类)所需的方法即可,这种机制也称为“定制服务”,即为不同的客户端提供宽窄不同的接口,只提供用户需要的行为,而隐藏那些用户不需要的行为。"
      }
    ],
    "roles": [
      [
        "单一职责原则",
        "管“类”的粒度：一个类只负责一类事"
      ],
      [
        "接口隔离原则",
        "管“接口”的粒度：一个接口只给一种客户用"
      ]
    ],
    "steps": [
      {
        "title": "第一步　弄懂“粒度”是什么",
        "bullets": [
          "粒度就是一个类或接口里装了多少东西",
          "装得太多，叫粒度太粗：一个类既管数据库又管界面又管日志",
          "装得太少，叫粒度太细：一个功能被拆成十几个小类，用起来很碎"
        ],
        "code": ""
      },
      {
        "title": "第二步　类的粒度用单一职责原则来定",
        "bullets": [
          "判断标准：一个类只应该有一个引起它变化的原因",
          "如果一个类同时管两件事，其中一件变了就要改这个类，可能顺带把另一件事改坏",
          "职责越多，别人越难单独复用其中一个功能",
          "所以职责不同就拆成不同的类；如果几个职责总是一起变，也可以放在同一个类里"
        ],
        "code": ""
      },
      {
        "title": "第三步　接口的粒度用接口隔离原则来定",
        "bullets": [
          "实现一个接口就必须实现它的所有方法，大接口会逼着实现类写一堆用不上的方法",
          "所以大接口要按客户的需要拆成小接口，每个客户只看到自己要用的方法",
          "拆的尺度是“一个接口代表一种角色”，该有的方法都要有，不是越少越好",
          "这种做法也叫“定制服务”：给不同客户提供宽窄不同的接口"
        ],
        "code": ""
      },
      {
        "title": "第四步　写在试卷上的答案要点",
        "bullets": [
          "单一职责原则控制类的粒度：一个类只有一个引起它变化的原因，职责多了要拆开",
          "接口隔离原则控制接口的粒度：客户端不依赖不需要的接口，大接口拆成小接口，每个接口承担一种独立角色",
          "接口隔离原则可以看成针对接口的单一职责原则"
        ],
        "code": ""
      }
    ],
    "memory": [
      "类的粒度看单一职责，接口的粒度看接口隔离",
      "拆分的依据是“变化原因”和“客户角色”，不是方法个数"
    ],
    "quotes": [
      {
        "text": "单一职责原则是最简单的面向对象设计原则之一,它用于控制类的“粒度”大小。",
        "source": "06-2-面向对象设计原则-参考答案及习题解析.md 第27行"
      },
      {
        "text": "接口隔离原则要求客户端不应该依赖那些它不需要的接口,它用于定义接口的“粒度”。",
        "source": "06-2-面向对象设计原则-参考答案及习题解析.md 第29行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/171771.md",
    "lessonLinks": [
      {
        "title": "单一职责原则",
        "path": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/171771.md"
      },
      {
        "title": "接口隔离原则",
        "path": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177442.md"
      }
    ]
  },
  {
    "id": "E1-COMP-03",
    "type": "comprehensive",
    "source": "习题1综合题第3题",
    "category": "面向对象设计原则",
    "pattern": "里氏代换原则",
    "stem": "结合面向对象设计原则,分析正方形是否是长方形的子类。",
    "materials": [],
    "answers": [
      "解析:可使用里氏代换原则来分析正方形类是否是长方形类的子类。\n\n在以下代码中定义了一个长方形类(Rectangle)和一个正方形类(Square),并将 Square 设计成 Rectangle 的子类。\n\n```java\n//长方形\npublic class Rectangle {\n    private double width;\n    private double height;\n\n    public Rectangle(double width, double height) {\n        this.width = width;\n        this.height = height;\n    }\n    public double getHeight() {\n        return height;\n    }\n    public void setHeight(double height) {\n        this.height = height;\n    }\n    public double getWidth() {\n        return width;\n    }\n    public void setWidth(double width) {\n        this.width = width;\n    }\n}\n\n//正方形\npublic class Square extends Rectangle {\n    public Square(double size) {\n        super(size,size);\n    }\n    public void setHeight(double height) {\n        super.setHeight(height);\n        super.setWidth(height);\n    }\n    public void setWidth(double width) {\n        super.setHeight(width);\n        super.setWidth(width);\n    }\n}\n\npublic class Client {\n    public static void main(String args[]) {\n        Rectangle r;\n        r = new Square(0.0);\n        r.setWidth(5.0);\n        r.setWidth(10.00);\n        double area = calculateArea(r);\n        if(50.00 == area) {\n            System.out.println(\"这是长方形或长方形的子类!\");\n        }\n        else {\nSystem.out.println(\"这不是长方形!\");\n}\n}\n\npublic static double calculateArea(Rectangle r) {\n    return r.getHeight() * r.getWidth();\n}\n}\n```\n\n由代码输出得知,在客户端代码中使用长方形类来定义正方形对象,将输出“这不是长方形!”,即将正方形作为长方形的子类,在使用正方形替换长方形之后正方形已经不再是长方形,接受基类对象的地方接受子类对象时出现问题,违反了里氏代换原则。因此从面向对象的角度分析,正方形不是长方形的子类,它们都可以作为四边形类的子类。关于该问题的进一步讨论,大家可以参考其他相关资料,如 Bertrand Meyer 的基于契约设计(Design By Contract),在长方形的契约(Contract)中,长方形的长和宽是可以独立变化的,但是正方形破坏了该契约。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "解析:可使用里氏代换原则来分析正方形类是否是长方形类的子类。"
      },
      {
        "type": "text",
        "content": "在以下代码中定义了一个长方形类(Rectangle)和一个正方形类(Square),并将 Square 设计成 Rectangle 的子类。"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 用长方形和正方形检验里氏代换原则\n * 1. Rectangle：长方形，宽和高可以分别设置\n * 2. Square：正方形，继承长方形，改一边时另一边跟着改\n * 3. Client：只认长方形，用来检验“子类能不能顶替父类”\n */\n//长方形\npublic class Rectangle {\n    private double width;  // 宽\n    private double height;  // 高\n\n    // 构造方法：创建时同时给定宽和高\n    public Rectangle(double width, double height) {\n        this.width = width;\n        this.height = height;\n    }\n    // 读取高\n    public double getHeight() {\n        return height;\n    }\n    // 设置高：只改高，不影响宽，这是长方形的“约定”\n    public void setHeight(double height) {\n        this.height = height;\n    }\n    // 读取宽\n    public double getWidth() {\n        return width;\n    }\n    // 设置宽：只改宽，不影响高\n    public void setWidth(double width) {\n        this.width = width;\n    }\n}\n\n//正方形\n// 正方形被设计成长方形的子类\npublic class Square extends Rectangle {\n    // 正方形只需要一个边长\n    public Square(double size) {\n        super(size,size);  // 调用父类构造方法，宽和高都设成同一个边长\n    }\n    // 重写设置高的方法：为了保持四边相等，宽也被一起改掉\n    // 这一步破坏了父类“宽高互不影响”的约定\n    public void setHeight(double height) {\n        super.setHeight(height);\n        super.setWidth(height);\n    }\n    // 重写设置宽的方法：同样会把高一起改掉\n    public void setWidth(double width) {\n        super.setHeight(width);\n        super.setWidth(width);\n    }\n}\n\n// 客户端：用来测试正方形能否当长方形用\npublic class Client {\n    public static void main(String args[]) {\n        // 变量声明成父类类型：客户端以为自己拿的是长方形\n        Rectangle r;\n        // 实际放进去的是一个正方形对象\n        r = new Square(0.0);\n        // 按长方形的用法设置边长\n        // 原书两行都写成了 setWidth，题意是分别设置宽和高\n        r.setWidth(5.0);\n        r.setWidth(10.00);\n        // 按长方形的方式计算面积\n        double area = calculateArea(r);\n        // 长方形的预期：宽 5、高 10，面积应为 50\n        if(50.00 == area) {\n            System.out.println(\"这是长方形或长方形的子类!\");\n        }\n        // 正方形会让另一边跟着变，面积不是 50，于是走到这里\n        else {\nSystem.out.println(\"这不是长方形!\");\n}\n}\n\n// 计算面积：只依赖父类 Rectangle 提供的方法\npublic static double calculateArea(Rectangle r) {\n    return r.getHeight() * r.getWidth();\n}\n}"
      },
      {
        "type": "text",
        "content": "由代码输出得知,在客户端代码中使用长方形类来定义正方形对象,将输出“这不是长方形!”,即将正方形作为长方形的子类,在使用正方形替换长方形之后正方形已经不再是长方形,接受基类对象的地方接受子类对象时出现问题,违反了里氏代换原则。因此从面向对象的角度分析,正方形不是长方形的子类,它们都可以作为四边形类的子类。关于该问题的进一步讨论,大家可以参考其他相关资料,如 Bertrand Meyer 的基于契约设计(Design By Contract),在长方形的契约(Contract)中,长方形的长和宽是可以独立变化的,但是正方形破坏了该契约。"
      }
    ],
    "roles": [
      [
        "Rectangle（长方形）",
        "父类，约定宽和高可以分别设置"
      ],
      [
        "Square（正方形）",
        "子类，重写 setWidth 和 setHeight，改一边时另一边也跟着改"
      ],
      [
        "calculateArea(Rectangle r)",
        "只认长方形的方法，用来检验子类能不能替换父类"
      ]
    ],
    "steps": [
      {
        "title": "第一步　用哪个原则来判断",
        "bullets": [
          "问“A 是不是 B 的子类”，在设计上要看里氏代换原则",
          "里氏代换原则：凡是能用父类对象的地方，换成子类对象后程序照样正确"
        ],
        "code": ""
      },
      {
        "title": "第二步　看代码里子类破坏了什么",
        "bullets": [
          "长方形有一个隐含的约定：设置宽不会影响高，设置高不会影响宽",
          "Square 为了保持四边相等，在 setWidth 和 setHeight 里同时修改宽和高",
          "客户端拿到的是 Rectangle 类型的变量 r，它按长方形的约定来设置宽和高，并期望面积等于宽乘高",
          "r 里面实际是正方形，设置边长时另一条边也被改掉，算出的面积和预期的 50 对不上，于是打印“这不是长方形!”",
          "参考代码里两行都写成了 setWidth，按题意是在演示“分别设置宽和高”，结论不受影响"
        ],
        "code": ""
      },
      {
        "title": "第三步　得出结论",
        "bullets": [
          "接受父类对象的地方换成子类对象后结果出错，说明 Square 不能替换 Rectangle，违反里氏代换原则",
          "所以从面向对象的角度看，正方形不应该设计成长方形的子类",
          "更合理的做法是让长方形和正方形都继承一个更一般的“四边形”类"
        ],
        "code": ""
      },
      {
        "title": "第四步　写在试卷上的答案要点",
        "bullets": [
          "用里氏代换原则分析：把 Square 设计成 Rectangle 的子类后，用正方形替换长方形，客户端结果出错",
          "原因是长方形的契约要求长和宽能独立变化，正方形破坏了这个契约",
          "结论：正方形不是长方形的子类，二者可以都作为四边形类的子类"
        ],
        "code": ""
      }
    ],
    "memory": [
      "判断能不能继承，看子类能否无缝替换父类，而不是看生活中“是不是一种”",
      "子类改变了父类约定好的行为，就违反里氏代换原则"
    ],
    "quotes": [
      {
        "text": "在长方形的契约(Contract)中,长方形的长和宽是可以独立变化的,但是正方形破坏了该契约。",
        "source": "06-2-面向对象设计原则-参考答案及习题解析.md 第99行"
      },
      {
        "text": "实际上，里式替换原则还有另外一个更加能落地、更有指导意义的描述，那就是“Design By Contract”，中文翻译就是“按照协议来设计”。",
        "source": "177110.md 第115行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177110.md"
  },
  {
    "id": "E2-FILL-01",
    "type": "fill",
    "source": "习题2填空题第1题",
    "category": "创建型设计模式",
    "pattern": "简单工厂模式",
    "stem": "某系统提供一个简单计算器, 具有简单的加法和减法功能, 系统可以根据用户的选择实例化相应的操作类。现使用简单工厂模式设计该系统, 类图如图 7-4 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图7-4 填空题1类图",
        "src": "images/written/p049-b06.png"
      },
      {
        "type": "text",
        "content": "在图 7-4 中, Operation 是抽象类, 其中定义了抽象方法 getResult(); 其子类 AddOperation 用于实现加法操作, SubOperation 用于实现减法操作, Calculator 是简单工厂类, 工厂方法为 createOperation()。CreateOperation() 方法接收一个 char 类型的字符参数, 如果传入的参数为 “+”, 该方法返回一个 AddOperation 类型的对象; 如果传入的参数为 “-”, 则返回一个 SubOperation 类型的对象。"
      },
      {
        "type": "text",
        "content": "【Java 代码】"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 简单工厂实现的计算器\n * 1. Operation：抽象产品，所有运算的父类\n * 2. AddOperation、SubOperation：具体产品，分别做加法和减法\n * 3. Calculator：简单工厂，按运算符创建对应的运算对象\n * 4. Test：客户端，只通过工厂拿对象\n */\n// 抽象产品：保存两个操作数，声明计算方法\nabstract class Operation {\n    protected int numberA;  // 第一个操作数，protected 让子类可以直接使用\n    protected int numberB;  // 第二个操作数\n    // numberA 和 numberB 的 Setter 方法和 Getter 方法省略\n    // 第(1)空：这个方法只有声明、没有方法体，由子类各自实现计算\n    public ____(1)____int getResult();\n}\n\n// 具体产品一：加法运算\nclass AddOperation extends Operation {\n    public int getResult() {\n        return numberA + numberB;  // 返回两数之和\n    }\n}\n\n// 具体产品二：减法运算\nclass SubOperation extends Operation {\n    public int getResult() {\n        return numberA - numberB;  // 返回两数之差\n    }\n}\n// 简单工厂类：集中负责创建运算对象\nclass Calculator {\n    // 第(2)空：这个方法要能直接用类名调用，并且返回值要能装下任何一种运算对象\n    // 参数 operator 是用户选择的运算符\n    public ____(2) __createOperation(char operator) {\n        // 先准备一个父类类型的变量，用来保存创建出来的对象\n        Operation op = null;\n        // 第(3)空：根据 operator 的值分情况处理，下面是 '+' 和 '-' 两种情况\n        ____(3) ____(case '+':\n            // 第(4)空：运算符是 '+' 时创建对应的运算对象\n            op = ____(4)__;\n            break;\n        case '-':\n            // 第(5)空：运算符是 '-' 时创建对应的运算对象\n            op = ____(5)__;\n            break;\n        }\n        // 第(6)空：把选出来的对象交给调用者\n        ____(6)__;\n    }\n}\n\n// 客户端：演示如何使用工厂\nclass Test {\n    public static void main(String args[]) {\n        int result;\n        // 通过类名调用工厂方法，拿到一个加法运算对象\n        Operation op1 = Calculator.createOperation('+');\n        // 设置第一个操作数为 20\n        op1.setNumberA(20);\n        // 设置第二个操作数为 10\n        op1.setNumberB(10);\n        // 第(7)空：让 op1 完成计算，得到结果\n        result = ____(7)__;\n        System.out.println(result);  // 打印计算结果\n    }\n}"
      }
    ],
    "answers": [
      "(1)abstract; (2)static Operation; (3)switch(operator); (4)new AddOperation();\n(5)new SubOperation(); (6)return op; (7)op1.getResult()。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1)abstract; (2)static Operation; (3)switch(operator); (4)new AddOperation();\n(5)new SubOperation(); (6)return op; (7)op1.getResult()。"
      }
    ],
    "roles": [
      [
        "Operation",
        "抽象产品，声明 getResult()"
      ],
      [
        "AddOperation、SubOperation",
        "具体产品，分别做加法和减法"
      ],
      [
        "Calculator",
        "简单工厂，createOperation(char) 按运算符创建对象"
      ],
      [
        "Test",
        "客户端，只通过工厂拿对象，再调用 getResult()"
      ]
    ],
    "steps": [
      {
        "title": "第一步　看空格分别缺什么",
        "bullets": [
          "(1) 在方法返回类型前面，缺一个修饰符",
          "(2) 在方法名 createOperation 前面，缺修饰符和返回类型",
          "(3)～(6) 在工厂方法内部，缺分支语句、两处创建对象和返回语句",
          "(7) 在客户端，缺一次方法调用"
        ],
        "code": ""
      },
      {
        "title": "第二步　顺着类图和调用关系判断",
        "bullets": [
          "题目说 Operation 是抽象类，getResult() 是抽象方法，子类各自实现",
          "Test 里写的是 Calculator.createOperation('+')，没有先 new Calculator，说明这是静态方法",
          "createOperation 返回给 Operation 类型的变量 op1，说明返回类型是父类 Operation",
          "方法里先写了 Operation op = null，后面有 case '+' 和 case '-'，说明要按参数 operator 做 switch 分支"
        ],
        "code": ""
      },
      {
        "title": "第三步　逐空填写",
        "bullets": [
          "(1) abstract：getResult() 没有方法体，只能是抽象方法",
          "(2) static Operation：类名直接调用要 static，返回父类类型才能装下加法或减法对象",
          "(3) switch(operator)：后面跟着 case '+'、case '-'，判断的是参数 operator",
          "(4) new AddOperation()：传入 '+' 时创建加法对象",
          "(5) new SubOperation()：传入 '-' 时创建减法对象",
          "(6) return op：把选出来的对象交给调用者",
          "(7) op1.getResult()：op1 已设置好两个数，调用它计算 20+10，输出 30"
        ],
        "code": ""
      }
    ],
    "memory": [
      "看到“类名.方法名()”直接调用，就是 static",
      "工厂方法的返回类型写抽象父类，方法体是“判断参数 → new 子类 → return”"
    ],
    "quotes": [
      {
        "text": "简单工厂模式(Simple Factory Pattern): 定义一个工厂类, 它可以根据参数的不同返回不同类的实例, 被创建的实例通常都具有共同的父类。",
        "source": "A-常用设计模式的定义及结构图.md 第13行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/197254.md"
  },
  {
    "id": "E2-FILL-02",
    "type": "fill",
    "source": "习题2填空题第2题",
    "category": "创建型设计模式",
    "pattern": "工厂方法模式",
    "stem": "某软件公司要开发一个数据格式转换工具,可以将不同数据源如 txt 文件、数据库、Excel 表格中的数据转换成 XML 格式。为了让系统具有更好的可扩展性,在未来支持新类型的数据源,开发人员使用工厂方法模式设计该转换工具的核心类。在工厂类中封装了具体转换类的初始化和创建过程,客户端只须使用工厂类即可获得具体的转换类对象,再调用其相应方法实现数据转换操作。其类图如图 7-5 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图7-5 填空题2类图",
        "src": "images/written/p050-b05.png"
      },
      {
        "type": "text",
        "content": "在图 7-5 中, ConvertorCreator 是抽象工厂接口, 它声明了工厂方法 getConverter(), 在其子类中实现该方法, 用于创建具体的转换对象; Convertor 是抽象产品接口, 它声明了抽象数据转换方法 transform(), 在其子类中实现该方法, 用于完成具体的数据转换操作。类 DBConvertor 和 TXTConvertor 分别用于将数据库中的数据和 txt 文件中的数据转换为 XML 格式。"
      },
      {
        "type": "text",
        "content": "【Java 代码】"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 工厂方法实现的数据格式转换工具\n * 1. ConverterCreator：抽象工厂，声明创建转换器的方法\n * 2. DBConverterCreator、TXTConverterCreator：具体工厂，各造一种转换器\n * 3. Converter：抽象产品，声明转换方法\n * 4. DBConverter、TXTConverter：具体产品，完成具体转换\n * 注意：原书中 converter 与 convertor 两种拼写混用，指的是同一个东西\n */\n// 抽象工厂接口\ninterface ConverterCreator {\n    // 第(1)空：声明工厂方法，具体工厂会实现它，返回类型用抽象产品\n    (1) ;\n}\n\n// 抽象产品接口\ninterface Converter {\n    public String transform();  // 转换方法：把数据转换成 XML 字符串\n}\n\n// 具体工厂一：专门负责创建数据库转换器\nclass DBConverterCreator implements ConverterCreator {\n    public Converter getConverter() {\n        // 第(2)空：创建并返回数据库数据的转换器\n        (2) ;\n    }\n}\n\n// 具体工厂二：专门负责创建 txt 文件转换器\nclass TXTConverterCreator implements ConverterCreator {\n    public Converter getConverter() {\n        // 第(3)空：创建并返回 txt 数据的转换器\n        (3) ;\n    }\n}\n\n// 具体产品一：把数据库中的数据转换成 XML\nclass DBConverter implements Converter {\n    public String transform() {\n        //实现代码省略\n    }\n}\n\n// 具体产品二：把 txt 文件中的数据转换成 XML\nclass TXTConverter implements Converter {\n    public String transform() {\n        //实现代码省略\n    }\n}\n\n// 客户端\nclass Test {\n    public static void main(String args[]) {\n        // 工厂变量声明成抽象工厂类型\n        ConverterCreator creator;\n        // 第(4)空：声明一个用来保存转换器的变量，类型应当用抽象产品\n        (4) ;\n        // 选择数据库工厂，以后换数据源只改这一行\n        creator = new DBConverterCreator();\n        // 第(5)空：通过工厂对象调用工厂方法，拿到转换器\n        converter = (5) ;\n        // 调用转换器完成数据转换\n        convertor.transform();\n    }\n}"
      },
      {
        "type": "text",
        "content": "如果需要针对一种新的数据源进行数据转换,该系统至少需要增加\\_\\_\\_\\_(6)\\_\\_\\_\\_个类。工厂方法模式体现了以下哪些面向对象设计原则?\\_\\_\\_\\_(7)\\_\\_\\_\\_(多选)。"
      },
      {
        "type": "text",
        "content": "A. 开闭原则 B. 依赖倒转原则 C. 接口隔离原则 D. 单一职责原则 E. 合成复用原则"
      }
    ],
    "answers": [
      "(1) public Converter getConverter(); (2) return new DBConverter(); (3) return new TXTConverter(); (4) Converter convertor; (5) creator.getConvertor(); (6) 2; (7) ABD。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) public Converter getConverter(); (2) return new DBConverter(); (3) return new TXTConverter(); (4) Converter convertor; (5) creator.getConvertor(); (6) 2; (7) ABD。"
      }
    ],
    "roles": [
      [
        "ConverterCreator",
        "抽象工厂接口，声明工厂方法 getConverter()"
      ],
      [
        "DBConverterCreator、TXTConverterCreator",
        "具体工厂，各自创建一种转换器"
      ],
      [
        "Converter",
        "抽象产品接口，声明 transform()"
      ],
      [
        "DBConverter、TXTConverter",
        "具体产品，完成具体的数据转换"
      ]
    ],
    "steps": [
      {
        "title": "第一步　看空格在哪一层",
        "bullets": [
          "(1) 在工厂接口里，缺一个方法声明",
          "(2)(3) 在两个具体工厂的工厂方法里，缺返回语句",
          "(4)(5) 在客户端，缺产品变量的声明和工厂方法调用",
          "(6) 是数类的个数，(7) 是选原则"
        ],
        "code": ""
      },
      {
        "title": "第二步　顺着“谁实现谁”判断",
        "bullets": [
          "两个具体工厂都写了 public Converter getConverter()，它们实现的是 ConverterCreator，所以接口里要声明这个方法",
          "DB 工厂创建 DB 转换器，TXT 工厂创建 TXT 转换器，一个工厂只管一种产品",
          "客户端先 creator = new DBConverterCreator()，再通过 creator 拿转换器，最后调用 transform()",
          "代码中变量名有 converter 和 convertor 两种写法，方法名和参考答案也有 getConverter 与 getConvertor 两种拼写，这是原书笔误，意思都指同一个变量和同一个工厂方法"
        ],
        "code": ""
      },
      {
        "title": "第三步　逐空填写",
        "bullets": [
          "(1) public Converter getConverter()：接口只声明不实现，返回抽象产品类型",
          "(2) return new DBConverter()：DB 工厂造 DB 转换器",
          "(3) return new TXTConverter()：TXT 工厂造 TXT 转换器",
          "(4) Converter convertor：声明产品变量，类型用接口 Converter",
          "(5) creator.getConvertor()：通过工厂对象调用工厂方法拿到转换器",
          "(6) 2：新数据源要加一个具体转换器类和一个对应的具体工厂类，共 2 个",
          "(7) ABD：加数据源只加新类不改旧类，符合开闭原则；客户端依赖两个接口，符合依赖倒转原则；创建和转换分在工厂类和产品类里，符合单一职责原则"
        ],
        "code": ""
      }
    ],
    "memory": [
      "工厂方法模式每加一种产品，要配套加“具体产品＋具体工厂”两个类",
      "客户端变量一律声明成接口类型：工厂用抽象工厂，产品用抽象产品"
    ],
    "quotes": [
      {
        "text": "ConcreteCreator 角色属于具体加工这一方，它负责生成具体的产品。",
        "source": "04-FactoryMethod模式.md 第208行"
      },
      {
        "text": "在 Factory Method 模式中，父类决定实例的生成方式，但并不决定所要生成的具体的类，具体的处理全部交给子类负责。",
        "source": "04-FactoryMethod模式.md 第17行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md"
  },
  {
    "id": "E2-FILL-03",
    "type": "fill",
    "source": "习题2填空题第3题",
    "category": "创建型设计模式",
    "pattern": "抽象工厂模式",
    "stem": "某手机游戏软件公司要推出一款新的游戏软件,该软件能够支持 Symbian、Android 和 iOS 等多个主流的手机操作系统平台,针对不同的手机操作系统,该游戏软件提供了不同的游戏操作控制类和游戏界面控制类,并提供相应的工厂类来封装这些类的初始化。软件要求具有较好的扩展性以支持新的操作系统平台。为了满足上述需求,采用抽象工厂模式进行设计,所得类图如图 7-6 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图7-6 填空题3类图",
        "src": "images/written/p052-b05.png"
      },
      {
        "type": "text",
        "content": "在该设计方案中,具体工厂类如 SymbianFactory 用于创建 Symbian 操作系统平台下的游戏操作控制类 SymbianOperationController 和游戏界面控制类 SymbianInterfaceController,再通过它们的业务方法来实现对游戏软件的初始化和运行控制。"
      },
      {
        "type": "text",
        "content": "【Java 代码】"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 抽象工厂实现的多平台手机游戏\n * 1. AbstractFactory：抽象工厂，声明创建两种控制类的方法\n * 2. SymbianFactory、AndroidFactory：具体工厂，每个负责一个平台的整套控制类\n * 3. OperationController、InterfaceController：两种抽象产品\n * 4. Symbian/Android 开头的控制类：具体产品\n */\n// 抽象工厂：一个工厂要造两种产品\ninterface AbstractFactory {\n    public OperationController getOperationController();  // 创建游戏操作控制对象\n    public InterfaceController getInterfaceController();  // 创建游戏界面控制对象\n}\n\n// 抽象产品一：游戏操作控制\ninterface OperationController {\n    public void init();\n    //其他方法声明省略\n}\n\n// 抽象产品二：游戏界面控制\ninterface InterfaceController {\npublic void init();\n//其他方法声明省略\n}\n\n// 具体工厂：负责 Symbian 平台的一整套产品\nclass SymbianFactory implements AbstractFactory {\n    public OperationController getOperationController() {\n        // 第(1)空：创建 Symbian 平台的操作控制对象并返回\n        (1) ;\n    }\n\n    public InterfaceController getInterfaceController() {\n        // 第(2)空：创建 Symbian 平台的界面控制对象并返回\n        (2) ;\n    }\n}\n\n// 具体工厂：负责 Android 平台的一整套产品\n// 第(3)空：说明这个类和抽象工厂之间的关系\nclass AndroidFactory ____(3) {\n    public OperationController getOperationController() {\n        return new AndroidOperationController();\n    }\n\n    public InterfaceController getInterfaceController() {\n        return new AndroidInterfaceController();\n    }\n}\n\n// Symbian 平台的操作控制类\n// 第(4)空：说明它属于哪一种抽象产品\nclass SymbianOperationController ____(4) {\n    public void init() {\n        //实现代码省略\n    }\n    //其他方法声明省略\n}\n\n// Android 平台的操作控制类\n// 第(5)空：说明它属于哪一种抽象产品\nclass AndroidOperationController ____(5) {\n    public void init() {\n        //实现代码省略\n    }\n    //其他方法声明省略\n}\n\n// Symbian 平台的界面控制类\nclass SymbianInterfaceController implements InterfaceController {\n    public void init() {\n        //实现代码省略\n    }\n    //其他方法声明省略\n}\n\n// Android 平台的界面控制类\nclass AndroidInterfaceController implements InterfaceController {\n    public void init() {\n        //实现代码省略\n    }\n}"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 接上一段代码：AndroidInterfaceController 的结尾和客户端 Test\n */\n//其他方法声明省略\n}\n\n// 客户端：只用抽象类型，不直接 new 具体控制类\nclass Test {\n    public static void main(String args[]) {\n        AbstractFactory af;  // 工厂变量用抽象工厂类型\n        // 第(6)空：声明操作控制变量 oc 的类型，应当是抽象产品\n        (6) oc;\n        // 第(7)空：声明界面控制变量 ic 的类型，应当是抽象产品\n        (7) ic;\n        // 选择 Symbian 平台；换平台只改这一行\n        af = new SymbianFactory();\n        // 第(8)空：通过工厂 af 拿到操作控制对象\n        oc = (8);\n        // 第(9)空：通过工厂 af 拿到界面控制对象\n        ic = (9);\n        oc.init();  // 初始化操作控制\n        ic.init();  // 初始化界面控制\n    }\n}"
      },
      {
        "type": "text",
        "content": "如果需要在上述设计方案中增加对 Windows Mobile 操作系统的支持,需对该设计方案进行哪些调整? 简单说明实现过程。"
      }
    ],
    "answers": [
      "(1) return new SymbianOperationController(); (2) return new SymbianInterfaceController(); (3) implements AbstractFactory; (4) implements OperationController; (5) implements OperationController; (6) OperationController; (7) InterfaceController; (8) af. getOperationController(); (9) af. getInterfaceController()。\n\n如果要增加对 Windows Mobile 操作系统的支持, 需要增加 3 个类, 其中 WindowsOperationController 作为 OperationController 接口的子类, WindowsInterfaceController作为 InterfaceController 接口的子类,再对应增加一个具体工厂类 WindowsFactory,实现 AbstractFactory 接口,并实现在其中声明的工厂方法,创建 WindowsOperationController 对象和 WindowsInterfaceController 对象。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) return new SymbianOperationController(); (2) return new SymbianInterfaceController(); (3) implements AbstractFactory; (4) implements OperationController; (5) implements OperationController; (6) OperationController; (7) InterfaceController; (8) af. getOperationController(); (9) af. getInterfaceController()。"
      },
      {
        "type": "text",
        "content": "如果要增加对 Windows Mobile 操作系统的支持, 需要增加 3 个类, 其中 WindowsOperationController 作为 OperationController 接口的子类, WindowsInterfaceController作为 InterfaceController 接口的子类,再对应增加一个具体工厂类 WindowsFactory,实现 AbstractFactory 接口,并实现在其中声明的工厂方法,创建 WindowsOperationController 对象和 WindowsInterfaceController 对象。"
      }
    ],
    "roles": [
      [
        "AbstractFactory",
        "抽象工厂，声明创建两种控制类的方法"
      ],
      [
        "SymbianFactory、AndroidFactory",
        "具体工厂，每个负责一个平台的整套控制类"
      ],
      [
        "OperationController、InterfaceController",
        "两种抽象产品：游戏操作控制、游戏界面控制"
      ],
      [
        "Symbian/Android 开头的控制类",
        "具体产品，分属不同平台"
      ]
    ],
    "steps": [
      {
        "title": "第一步　分清产品族和产品种类",
        "bullets": [
          "产品种类有两种：操作控制类、界面控制类",
          "产品族按平台划分：Symbian 一套、Android 一套",
          "一个具体工厂负责一个平台的整套产品，这就是抽象工厂"
        ],
        "code": ""
      },
      {
        "title": "第二步　顺着类之间的实现关系判断",
        "bullets": [
          "SymbianFactory 的两个方法要返回本平台的两种控制类对象",
          "AndroidFactory 写了 getOperationController 和 getInterfaceController，它必须实现 AbstractFactory",
          "SymbianOperationController 和 AndroidOperationController 都是“操作控制”，都实现 OperationController",
          "客户端只用接口类型声明变量，再通过工厂对象拿产品"
        ],
        "code": ""
      },
      {
        "title": "第三步　逐空填写",
        "bullets": [
          "(1) return new SymbianOperationController()",
          "(2) return new SymbianInterfaceController()",
          "(3) implements AbstractFactory：具体工厂实现抽象工厂接口",
          "(4) implements OperationController",
          "(5) implements OperationController：两个平台的操作控制类实现同一个接口",
          "(6) OperationController、(7) InterfaceController：变量 oc、ic 用抽象产品接口声明",
          "(8) af.getOperationController()、(9) af.getInterfaceController()：通过工厂对象 af 拿到两种产品"
        ],
        "code": ""
      },
      {
        "title": "第四步　新增 Windows Mobile 平台要做什么",
        "bullets": [
          "新平台就是新产品族，要加 3 个类",
          "WindowsOperationController 实现 OperationController",
          "WindowsInterfaceController 实现 InterfaceController",
          "WindowsFactory 实现 AbstractFactory，在两个工厂方法里分别创建上面两个类的对象",
          "原有的接口和类都不用改，客户端只要改成 new WindowsFactory()"
        ],
        "code": ""
      }
    ],
    "memory": [
      "抽象工厂里有几种产品，具体工厂就有几个创建方法",
      "加一个产品族＝加一个具体工厂＋每种产品各加一个具体类"
    ],
    "quotes": [
      {
        "text": "如果要增加对 Windows Mobile 操作系统的支持, 需要增加 3 个类",
        "source": "07-2-创建型设计模式-参考答案及习题解析.md 第26行"
      },
      {
        "text": "在 Abstract Factory 模式中增加具体的工厂是非常容易的。",
        "source": "08-AbstractFactory模式.md 第690行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/08-AbstractFactory模式.md"
  },
  {
    "id": "E2-FILL-04",
    "type": "fill",
    "source": "习题2填空题第4题",
    "category": "创建型设计模式",
    "pattern": "建造者模式",
    "stem": "某软件公司要开发一个音频和视频播放软件,为了给用户使用提供方便,该播放软件提供了多种界面显示模式,如完整模式、精简模式、记忆模式、网络模式等。在不同的显示模式下主界面的组成元素有所差异,如在完整模式下将显示菜单、播放列表、主窗口、控制条等,在精简模式下只显示主窗口和控制条,而在记忆模式下将显示主窗口、控制条、收藏列表等。现使用建造者模式设计该软件,所得类图如图 7-7 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图7-7 填空题4类图",
        "src": "images/written/p054-b06.png"
      },
      {
        "type": "text",
        "content": "在该设计方案中,MainScreen 是播放器的主界面,它是一个复合对象,包括菜单、播放列表、主窗口和控制条等成员;ModeBuilder 是一个抽象类,定义了一组抽象方法 build×××(),用于逐步构造一个完整的 MainScreen 对象,getScreen()是工厂方法,用于返回一个构造好的 MainScreen 对象;ScreenModeController 充当指挥者,用于指导复合对象的创建,其中 construct()方法封装了具体创建流程,并向客户类返回完整的产品对象。"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 建造者模式实现的播放器界面\n * 1. MainScreen：产品，主界面由菜单、播放列表、主窗口、控制条组成\n * 2. ModeBuilder：抽象建造者，声明每个部件的构造方法\n * 3. FullModeBuilder、SimpleModeBuilder：具体建造者，对应不同显示模式\n * 4. ScreenModeController：指挥者，规定构造顺序\n * 5. Test：客户端\n */\n// 产品：一个由多个部件组成的复杂对象\nclass MainScreen {\n    public String menu;  // 菜单\n    public String playList;  // 播放列表\n    public String mainWindow;  // 主窗口\n    public String controlBar;  // 控制条\n}\n\n// 第(1)空：这个类里有抽象方法，类本身要用什么修饰\n____(1) ____ class ModeBuilder {\n    // 先准备好一个空的主界面，各个 build 方法往里面填部件\n    protected MainScreen screen = new MainScreen();\n    public abstract void buildMenu();  // 构造菜单，由子类决定怎么做\n    public abstract void buildPlayList();  // 构造播放列表\n    public abstract void buildMainWindow();  // 构造主窗口\n    public abstract void buildControlBar();  // 构造控制条\n    // 交出构造好的主界面\n    public MainScreen getScreen()\n    // 第(2)空：把成员 screen 交给调用者\n    { ____(2)____; }\n}\n\n// 具体建造者：完整模式，四个部件都显示\nclass FullModeBuilder extends ModeBuilder {\n    public void buildMenu() { //实现代码省略 }\n    public void buildPlayList() { //实现代码省略 }\n    public void buildMainWindow() { //实现代码省略 }\n    public void buildControlBar() { //实现代码省略 }\n}\n\n// 具体建造者：精简模式，只显示部分部件\nclass SimpleModeBuilder extends ModeBuilder {\n    public void buildMenu() { //实现代码省略 }\n    public void buildPlayList() { //实现代码省略 }\n    public void buildMainWindow() { //实现代码省略 }\n    public void buildControlBar() { //实现代码省略 }\n}\n\n// 指挥者：只负责按顺序调用建造步骤\nclass ScreenModeController {\n    private ModeBuilder mb;  // 持有一个抽象建造者，任何模式的建造者都能放进来\n    // 第(3)空：参数声明，方法体里用到的参数名是 mb\n    public void setModeBuilder(____(3)____) {\n        this.mb = mb;\n    }\n    // 构造流程：顺序固定，具体做法交给建造者\n    public MainScreen construct() {\n        MainScreen ms;\n        mb.buildMenu();  // 第 1 步：菜单\n        mb.buildPlayList();  // 第 2 步：播放列表\n        mb.buildMainWindow();  // 第 3 步：主窗口\nmb.buildControlBar();  // 第 4 步：控制条\n// 第(4)空：所有部件做完后，向建造者取成品\nms = ______(4) ______;\nreturn ms;\n}\n}\n\n// 客户端\nclass Test {\npublic static void main(String args[]) {\n// 第(5)空：先创建指挥者\nScreenModeController smc = ______(5) ______;\nModeBuilder mb;\nmb = new FullModeBuilder(); //构造完整模式界面\nMainScreen screen;\n// 第(6)空：把要用的建造者交给指挥者\nsmc.setModeBuilder( ______(6) ______);\n// 第(7)空：让指挥者按顺序构造，得到主界面\nscreen = ______(7) ______;\nSystem.out.println(screen.menu);  // 打印菜单部件，检查构造结果\n//其他代码省略\n}\n}"
      }
    ],
    "answers": [
      "(1)abstract; (2)return screen; (3)ModeBuilder mb; (4)mb.getScreen(); (5)new ScreenModeController(); (6)mb; (7)smc.construct()。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1)abstract; (2)return screen; (3)ModeBuilder mb; (4)mb.getScreen(); (5)new ScreenModeController(); (6)mb; (7)smc.construct()。"
      }
    ],
    "roles": [
      [
        "MainScreen",
        "产品，由菜单、播放列表、主窗口、控制条组成"
      ],
      [
        "ModeBuilder",
        "抽象建造者，声明各个 buildXxx() 和 getScreen()"
      ],
      [
        "FullModeBuilder、SimpleModeBuilder",
        "具体建造者，按不同显示模式构造界面"
      ],
      [
        "ScreenModeController",
        "指挥者，construct() 规定构造顺序"
      ]
    ],
    "steps": [
      {
        "title": "第一步　看空格位置",
        "bullets": [
          "(1) 在 class ModeBuilder 前面，缺类修饰符",
          "(2) 在 getScreen() 里，缺返回语句",
          "(3) 在 setModeBuilder 的括号里，缺参数声明",
          "(4) 在 construct() 末尾，缺取产品的调用",
          "(5)～(7) 在客户端，缺创建指挥者、传建造者、调用构造"
        ],
        "code": ""
      },
      {
        "title": "第二步　顺着建造者模式的分工判断",
        "bullets": [
          "ModeBuilder 里有 abstract 方法，含抽象方法的类必须声明为抽象类",
          "screen 是 ModeBuilder 里已经 new 好的成员，build 方法往里面填零件，getScreen() 把它交出去",
          "setModeBuilder 方法体里写的是 this.mb = mb，参数名是 mb，类型是成员 mb 的类型 ModeBuilder",
          "construct() 依次调用四个 build 方法，组装完以后向建造者要成品"
        ],
        "code": ""
      },
      {
        "title": "第三步　逐空填写",
        "bullets": [
          "(1) abstract：类里有抽象方法",
          "(2) return screen：返回构造好的主界面",
          "(3) ModeBuilder mb：参数类型用抽象建造者，任何模式的建造者都能传进来",
          "(4) mb.getScreen()：指挥者自己不保存产品，向建造者取",
          "(5) new ScreenModeController()：先创建指挥者",
          "(6) mb：把完整模式建造者交给指挥者",
          "(7) smc.construct()：由指挥者按顺序构造并返回 MainScreen"
        ],
        "code": ""
      }
    ],
    "memory": [
      "指挥者只管调用顺序，产品从建造者的 getXxx() 方法里取",
      "换显示模式只要换传给指挥者的建造者对象"
    ],
    "quotes": [
      {
        "text": "Director 角色负责使用 Builder 角色的接口（API）来生成实例。它并不依赖于 ConcreteBuilder 角色。",
        "source": "07-Builder模式.md 第294行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/07-Builder模式.md"
  },
  {
    "id": "E2-FILL-05",
    "type": "fill",
    "source": "习题2填空题第5题",
    "category": "创建型设计模式",
    "pattern": "原型模式",
    "stem": "某数据处理软件需要增加一个图表复制功能,在图表对象中包含一个数据集对象,用于封装待显示的数据,可以通过界面的“复制”按钮将该图表复制一份,复制后可以得到新的图表对象,用户可以修改新图表的编号、颜色和数据。现使用原型模式设计该软件,所得类图如图 7-8 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图 7-8 填空题 5 类图",
        "src": "images/written/p056-b05.png"
      },
      {
        "type": "text",
        "content": "在该设计方案中,DataChart 类包含一个 DataSet 对象,在复制 DataChart 对象的同时将复制 DataSet 对象,因此需要使用深克隆技术,可使用流来实现深克隆。"
      },
      {
        "type": "text",
        "content": "【Java 代码】"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 原型模式：用对象流实现图表的深克隆\n * 1. DataSet、Color：图表的成员对象\n * 2. DataChart：要被复制的图表，提供 deepClone()\n * 3. Test：检查复制结果\n * 注意：ServeOutputStream、ServeInputStream 是原书识别错误，指的是字节数组输出流、字节数组输入流\n */\nimport java.io.*;\n// 数据集：实现 Serializable 才能随图表一起写进流\nclass DataSet implements Serializable{\n    //具体实现代码省略\n}\n\n// 颜色：同样要能写进流\nclass Color implements Serializable{\n    //具体实现代码省略\n}\n\n// 图表：被复制的对象本身\nclass DataChart implements Serializable {\n    private DataSet ds = new DataSet();  // 成员对象：数据集\n    private Color color = new Color();  // 成员对象：颜色\n    private int no;  // 图表编号，基本类型\n    //成员属性的 Getter 方法和 Setter 方法省略\n    public void display() {\n        //具体实现代码省略\n    }\n    //使用流实现深克隆,复制容器的同时复制成员\n    // 第(1)空：从流里读出来的对象是什么类型，这里就返回什么类型\n    public ____(1)______ deepClone() throws IOException, ClassNotFoundException, OptionalDataException {\n        //将对象写入流中\n       // 在内存中准备一块字节缓冲区 bao，用来暂存对象\n       ServeOutputStream bao = newServeOutputStream();\n        // 第(2)空：创建对象输出流，并让它写到 bao 中\n        ObjectOutputStream oos = new ____(2)____;\n        // 第(3)空：要复制的是当前这个图表对象自己\n        oos.writeObject(______(3)____);\n\n        //将对象从流中取出\n       // 用刚才写好的字节创建输入流 bis\n       ServeInputStream bis = newServeInputStream(bao.toByteArray());\n        // 第(4)空：创建对象输入流，并让它从 bis 中读\n        ObjectInputStream ois = new ____(4)____;\n        // 第(5)空：从流里读出一个全新的对象并返回\n        return(______(5)____);\n    }\n}\n\n// 客户端：比较原图表和复制品\nclass Test {\n    public static void main(String args[]) {\n        DataChart chart1,chart2 = null;\n        chart1 = new DataChart();\n\n        try{\n            // 复制 chart1，读出来的是 Object，要强制转换成 DataChart\n            chart2 = (DataChart)chart1.deepClone();\n        }\n        catch(Exception e){\n            e.printStackTrace();\n        }\n        // 第(6)空的依据：两个图表是不是同一个对象\n        System.out.println(chart1 == chart2);\n        // 第(7)空的依据：两个图表的数据集是不是同一个对象\n        System.out.println(chart1.getDs() == chart2.getDs());\n        // 第(8)空的依据：编号是 int，== 比较的是数值\n        System.out.println(chart1.getNo() == chart2.getNo());\n    }\n}"
      },
      {
        "type": "text",
        "content": "编译并运行上述代码,输出结果为: (6) 、 (7) 、 (8) 。"
      },
      {
        "type": "text",
        "content": "在本实例中,DataChart 类和 DataSet 类需要实现 Serializable 接口的原因是 \\_\\_\\_\\_ (9)"
      }
    ],
    "answers": [
      "(1) Object; (2) ObjectOutputStream(bao); (3) this; (4) ObjectInputStream(bis); (5) ois.readObject(); (6) false; (7) false; (8) true; (9) 只有实现了 Serializable 接口的类的对象才能写入流中。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) Object; (2) ObjectOutputStream(bao); (3) this; (4) ObjectInputStream(bis); (5) ois.readObject(); (6) false; (7) false; (8) true; (9) 只有实现了 Serializable 接口的类的对象才能写入流中。"
      }
    ],
    "roles": [
      [
        "DataChart",
        "具体原型，提供 deepClone() 复制自己"
      ],
      [
        "DataSet、Color",
        "DataChart 的成员对象，深克隆时也要被复制"
      ],
      [
        "Serializable",
        "标记接口，实现后对象才能写进对象流"
      ]
    ],
    "steps": [
      {
        "title": "第一步　先弄清深克隆要做什么",
        "bullets": [
          "浅克隆只复制 DataChart 本身，成员 ds 和原图表共用同一个 DataSet",
          "题目要求复制图表时数据集也要复制一份，所以要深克隆",
          "这里的做法是：把整个对象写进内存里的字节流，再从字节流读出来，读出来的就是一套全新的对象",
          "bao 是字节数组输出流，bis 是字节数组输入流，代码中显示为 ServeOutputStream、ServeInputStream"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写 deepClone()",
        "bullets": [
          "(1) Object：readObject() 返回的是 Object，客户端再强制转成 DataChart",
          "(2) ObjectOutputStream(bao)：对象输出流要套在字节输出流 bao 外面",
          "(3) this：要复制的是当前这个图表对象自己",
          "(4) ObjectInputStream(bis)：读取时用对象输入流套在 bis 外面",
          "(5) ois.readObject()：从流里读出一个新对象并返回"
        ],
        "code": ""
      },
      {
        "title": "第三步　推出运行结果",
        "bullets": [
          "(6) false：chart2 是读出来的新对象，和 chart1 不是同一个",
          "(7) false：深克隆连 DataSet 也复制了，两个图表的 ds 是两个不同对象",
          "(8) true：no 是 int，== 比较的是数值，复制后数值相同"
        ],
        "code": ""
      },
      {
        "title": "第四步　为什么要实现 Serializable",
        "bullets": [
          "(9) 只有实现了 Serializable 接口的类的对象才能写入流中",
          "DataChart 写进流时，它的成员 DataSet、Color 也会被一起写进去，所以它们也都要实现这个接口"
        ],
        "code": ""
      }
    ],
    "memory": [
      "流式深克隆三步：写进 ObjectOutputStream → 从 ObjectInputStream 读出 → 返回",
      "对象用 == 比地址，基本类型用 == 比数值"
    ],
    "quotes": [
      {
        "text": "在进行复制时，原来实例中的字段的值也会被复制到新的实例中。",
        "source": "06-Prototype模式.md 第132行"
      },
      {
        "text": "(9) 只有实现了 Serializable 接口的类的对象才能写入流中。",
        "source": "07-2-创建型设计模式-参考答案及习题解析.md 第32行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/06-Prototype模式.md"
  },
  {
    "id": "E2-FILL-06",
    "type": "fill",
    "source": "习题2填空题第6题",
    "category": "创建型设计模式",
    "pattern": "单例模式",
    "stem": "为了避免监控数据显示不一致并节省系统资源,在某监控系统的设计方案中提供了一个主控中心类,该主控中心类使用单例模式进行设计,类图如图 7-9 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图7-9 填空题6类图",
        "src": "images/written/p058-b06.png"
      },
      {
        "type": "text",
        "content": "在图 7-9 中, 主控中心类 MainControllerCenter 是单例类, 它包含一系列成员对象并可以初始化、显示和销毁成员对象, 对应的方法分别为 init()、load() 和 destroy(), 此外还提供了静态工厂方法 getInstance() 用于创建 MainControllerCenter 类型的单例对象。"
      },
      {
        "type": "text",
        "content": "【Java 代码】"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 单例模式实现的主控中心\n * 整个系统只允许有一个 MainControllerCenter 对象，避免监控数据显示不一致\n */\nclass MainControllerCenter {\n    private Menu menu;          //主控中心菜单\n    private ToolBar tb;         //主控中心工具栏\n    private MainForm mf;        //主控中心主窗口\n    // 第(1)空：保存唯一实例的变量，要属于整个类，并且能在静态方法中使用\n    private ____(1)___MainControllerCenter mcc;\n\n    // 第(2)空：构造方法的访问权限，要让外部无法直接 new\n    ____(2)___MainControllerCenter {\n}\n\n// 初始化：创建菜单、工具栏、主窗口\npublic void init() {\n    menu = new Menu();\n    tb = new ToolBar();\n    mf = new MainForm();\n}\n\n// 显示：让三个成员对象显示出来\npublic void load() {\n    menu.display();\n    tb.display();\n    mf.display();\n\n}\n\n// 销毁：释放三个成员对象\npublic void destroy() {\n    menu.destroy();\n    tb.destroy();\nmf.destroy();\n}\n\n// 静态工厂方法：全系统通过它拿到主控中心\npublic static MainControllerCenter getInstance() {\n    // 还没有创建过实例时，才去创建\n    if(mcc == null) {\n        // 第(3)空：创建实例并保存到 mcc 中\n        (3) ;\n    }\n    return mcc;  // 以后每次调用都返回同一个实例\n}\n}\n\n// 客户端：检验是否只有一个实例\nclass Test {\n    public static void main(String args[]) {\n        MainControllerCenter mcc1,mcc2;\n        // 第一次获取\n        mcc1 = MainControllerCenter.getInstance();\n        // 第二次获取\n        mcc2 = MainControllerCenter.getInstance();\n        // 第(4)空的依据：两次拿到的是不是同一个对象\n        System.out.println(mcc1 == mcc2);\n    }\n}\n//其他代码省略"
      },
      {
        "type": "text",
        "content": "编译并运行上述代码,输出结果为\\_\\_\\_\\_(4)\\_\\_\\_\\_。"
      },
      {
        "type": "text",
        "content": "在本实例中,使用了\\_\\_\\_\\_(5)\\_\\_\\_\\_(懒汉式或饿汉式)单例模式,其主要优点是\\_\\_\\_\\_(6),主要缺点是\\_\\_\\_\\_(7)\\_\\_\\_\\_。"
      }
    ],
    "answers": [
      "(1) static; (2) private; (3) mcc = new MainControllerCenter(); (4) true; (5) 懒汉式; (6) 使用的时候再实例化可节约资源; (7) 必须处理好多线程访问问题, 速度和反应时间相对“饿汉式”较慢。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) static; (2) private; (3) mcc = new MainControllerCenter(); (4) true; (5) 懒汉式; (6) 使用的时候再实例化可节约资源; (7) 必须处理好多线程访问问题, 速度和反应时间相对“饿汉式”较慢。"
      }
    ],
    "roles": [
      [
        "MainControllerCenter",
        "单例类，自己保存唯一实例 mcc"
      ],
      [
        "getInstance()",
        "静态工厂方法，全系统通过它拿到唯一的主控中心"
      ]
    ],
    "steps": [
      {
        "title": "第一步　看单例的三处关键代码",
        "bullets": [
          "(1) 在保存实例的成员变量前，缺修饰符",
          "(2) 在构造方法前，缺修饰符",
          "(3) 在 getInstance() 的 if 里，缺创建实例的语句"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写",
        "bullets": [
          "(1) static：getInstance() 是静态方法，只能访问静态变量，而且实例要属于整个类",
          "(2) private：构造方法私有，外面就不能 new，只能通过 getInstance() 拿",
          "(3) mcc = new MainControllerCenter()：第一次调用时 mcc 为空，这时才创建",
          "(4) true：两次调用拿到的是同一个对象"
        ],
        "code": ""
      },
      {
        "title": "第三步　判断懒汉式还是饿汉式",
        "bullets": [
          "饿汉式在类加载时就 new 好实例；懒汉式等到第一次调用 getInstance() 才 new",
          "本题的 mcc 一开始没有赋值，在 getInstance() 里判空后才创建，所以 (5) 是懒汉式",
          "(6) 优点：用到时才创建，没用到就不占资源",
          "(7) 缺点：多个线程同时第一次调用时可能各 new 一个，必须处理多线程问题；加锁后速度和反应时间比饿汉式慢"
        ],
        "code": ""
      }
    ],
    "memory": [
      "单例三件套：private 构造方法、private static 实例变量、public static getInstance()",
      "实例在声明时就 new 是饿汉式，在 getInstance() 里判空再 new 是懒汉式"
    ],
    "quotes": [
      {
        "text": "程序运行后，在第一次调用 getInstance 方法时，Singleton 类会被初始化。也就是在这个时候，static 字段 singleton 被初始化，生成了唯一的一个实例。",
        "source": "05-Singleton模式.md 第142行"
      },
      {
        "text": "Singleton 角色中有一个返回唯一实例的 static 方法。该方法总是会返回同一个实例。",
        "source": "05-Singleton模式.md 第114行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/05-Singleton模式.md"
  },
  {
    "id": "E2-COMP-01",
    "type": "comprehensive",
    "source": "习题2综合题第1题",
    "category": "创建型设计模式",
    "pattern": "简单工厂模式",
    "stem": "使用简单工厂模式模拟女娲(Nvwa)造人(Person), 如果传入参数“M”, 则返回一个Man对象, 如果传入参数“W”, 则返回一个Woman对象, 用Java语言实现该场景。现需要增加一个新的Robot类, 如果传入参数“R”, 则返回一个Robot对象, 对代码进行修改并注意“女娲”的变化。",
    "materials": [],
    "answers": [
      "简单工厂模式。参考类图如图 7-11 所示。\n\n![图 7-11 综合题 1 参考类图](images/written/p061-b10.png)\n\n图 7-11 综合题 1 参考类图\n\n解析:在本实例中，Nvwa 类充当工厂类，其中定义了工厂方法 makePerson(); Person 类充当抽象产品类；Man、Woman 和 Robot 充当具体产品类。工厂方法 makePerson() 的代码如下:\n\n```java\npublic static Person makePerson(char arg) {\n    Person person = null;\n    switch(arg) {\n        case 'M':\n        person = new Man();break;\n        case 'W':\n        person = new Woman();break;\n        case 'R':\n        person = new Robot();break;\n    }\n    return person;\n}\n```\n\n如果要增加一个新的具体产品,则必须修改 makePerson()方法中的判断语句,须增加一个新的 case 语句,违背了开闭原则。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "简单工厂模式。参考类图如图 7-11 所示。"
      },
      {
        "type": "image",
        "alt": "图 7-11 综合题 1 参考类图",
        "src": "images/written/p061-b10.png"
      },
      {
        "type": "text",
        "content": "解析:在本实例中，Nvwa 类充当工厂类，其中定义了工厂方法 makePerson(); Person 类充当抽象产品类；Man、Woman 和 Robot 充当具体产品类。工厂方法 makePerson() 的代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 女娲（Nvwa）类中的静态工厂方法\n * 根据传入的字符决定造男人、女人还是机器人\n */\n// static：直接用 Nvwa.makePerson('M') 调用；返回类型是抽象产品 Person\npublic static Person makePerson(char arg) {\n    Person person = null;  // 保存造出来的“人”\n    // 根据参数分情况创建\n    switch(arg) {\n        // 传入 'M'：造男人\n        case 'M':\n        person = new Man();break;\n        // 传入 'W'：造女人\n        case 'W':\n        person = new Woman();break;\n        // 传入 'R'：造机器人\n        // 这是后来新增的分支，说明每加一种产品都要修改工厂，违背开闭原则\n        case 'R':\n        person = new Robot();break;\n    }\n    return person;  // 把造好的对象交给调用者\n}"
      },
      {
        "type": "text",
        "content": "如果要增加一个新的具体产品,则必须修改 makePerson()方法中的判断语句,须增加一个新的 case 语句,违背了开闭原则。"
      }
    ],
    "roles": [
      [
        "Nvwa（女娲）",
        "工厂类，静态工厂方法 makePerson(char arg)"
      ],
      [
        "Person",
        "抽象产品"
      ],
      [
        "Man、Woman、Robot",
        "具体产品"
      ]
    ],
    "steps": [
      {
        "title": "第一步　找出谁造、造什么",
        "bullets": [
          "女娲负责造人，是工厂",
          "造出来的 Man、Woman 都是“人”，共同父类是 Person",
          "女娲根据传入的字符决定造谁，这正是简单工厂“按参数返回不同实例”的做法"
        ],
        "code": ""
      },
      {
        "title": "第二步　写出工厂方法",
        "bullets": [
          "makePerson 声明为 static，返回类型是 Person",
          "方法里用 switch 判断参数：'M' 造 Man，'W' 造 Woman，加入 Robot 后再多一个 'R'",
          "客户端只写 Nvwa.makePerson('M')，不需要知道 Man 怎么创建"
        ],
        "code": "/**\n * 女娲的静态工厂方法：按参数创建不同的人\n */\n// 返回抽象产品 Person，调用方不用知道具体类\npublic static Person makePerson(char arg) {\n    Person person = null;  // 保存造出来的对象\n    // 根据参数分情况创建\n    switch(arg) {\n        case 'M': person = new Man(); break;\n        case 'W': person = new Woman(); break;\n        // 新增 Robot 时必须加这一行，也就是修改了工厂类\n        case 'R': person = new Robot(); break;\n    }\n    return person;  // 交出产品\n}"
      },
      {
        "title": "第三步　加入 Robot 时女娲发生了什么变化",
        "bullets": [
          "新增 Robot 类本身没问题，它继承 Person 就行",
          "但女娲的 makePerson 必须加一个 case 'R'，也就是要修改工厂类的源代码",
          "每加一种产品都要改工厂，这违背了开闭原则，是简单工厂的主要缺点"
        ],
        "code": ""
      },
      {
        "title": "第四步　写在试卷上的答案要点",
        "bullets": [
          "使用简单工厂模式：Nvwa 是工厂类，Person 是抽象产品，Man、Woman、Robot 是具体产品",
          "给出 makePerson() 的 switch 代码",
          "指出增加 Robot 需要在 makePerson() 中增加 case 语句，修改了工厂类，违背开闭原则"
        ],
        "code": ""
      }
    ],
    "memory": [
      "简单工厂加新产品＝改工厂里的判断语句，这就是题目要你注意的“女娲的变化”",
      "答题必写：角色对应、工厂方法代码、违背开闭原则"
    ],
    "quotes": [
      {
        "text": "如果要增加一个新的具体产品,则必须修改 makePerson()方法中的判断语句,须增加一个新的 case 语句,违背了开闭原则。",
        "source": "07-2-创建型设计模式-参考答案及习题解析.md 第63行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/197254.md"
  },
  {
    "id": "E2-COMP-02",
    "type": "comprehensive",
    "source": "习题2综合题第2题",
    "category": "创建型设计模式",
    "pattern": "工厂方法模式",
    "stem": "现需要设计一个程序来读取多种不同类型的图片格式,针对每一种图片格式都设计一个图片读取器(ImageReader),如 GIF 图片读取器(GifReader)用于读取 GIF 格式的图片,JPG 图片读取器(JpgReader)用于读取 JPG 格式的图片。图片读取器对象通过图片读取器工厂 ImageReaderFactory 来创建,ImageReaderFactory 是一个抽象类,用于定义创建图片读取器的工厂方法,其子类 GifReaderFactory 和 JpgReaderFactory 用于创建具体的图片读取器对象。使用工厂方法模式实现该程序的设计。",
    "materials": [],
    "answers": [
      "工厂方法模式。参考类图如图 7-12 所示。\n\n![图7-12 综合题2参考类图](images/written/p062-b05.png)\n\n图7-12 综合题2参考类图\n\n解析:在本实例中，ImageReaderFactory 充当抽象工厂，GitReaderFactory 和 JpgReaderFactory 充当具体工厂，ImageReader 充当抽象产品，GitReader 和 JpgReader 充当具体产品。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "工厂方法模式。参考类图如图 7-12 所示。"
      },
      {
        "type": "image",
        "alt": "图7-12 综合题2参考类图",
        "src": "images/written/p062-b05.png"
      },
      {
        "type": "text",
        "content": "解析:在本实例中，ImageReaderFactory 充当抽象工厂，GitReaderFactory 和 JpgReaderFactory 充当具体工厂，ImageReader 充当抽象产品，GitReader 和 JpgReader 充当具体产品。"
      }
    ],
    "roles": [
      [
        "ImageReaderFactory",
        "抽象工厂，声明 createImageReader()"
      ],
      [
        "GifReaderFactory、JpgReaderFactory",
        "具体工厂，各造一种读取器"
      ],
      [
        "ImageReader",
        "抽象产品，声明 readImage()"
      ],
      [
        "GifReader、JpgReader",
        "具体产品，读取对应格式的图片"
      ]
    ],
    "steps": [
      {
        "title": "第一步　找出会变的东西",
        "bullets": [
          "图片格式会越来越多：今天有 GIF、JPG，以后可能有 PNG",
          "每种格式要一个读取器，每个读取器要一个专门的工厂来创建",
          "目标是加新格式时不改已有的工厂和读取器"
        ],
        "code": ""
      },
      {
        "title": "第二步　对应工厂方法模式的四个角色",
        "bullets": [
          "ImageReaderFactory 是抽象工厂，只声明创建读取器的方法，返回类型是 ImageReader",
          "GifReaderFactory 创建 GifReader，JpgReaderFactory 创建 JpgReader，一个工厂对应一个产品",
          "ImageReader 是抽象产品，GifReader、JpgReader 实现它的 readImage()",
          "参考答案文字中的 GitReaderFactory、GitReader 是原书笔误，类图中写的是 GifReaderFactory、GifReader"
        ],
        "code": ""
      },
      {
        "title": "第三步　客户端怎么协作",
        "bullets": [
          "客户端声明 ImageReaderFactory factory 和 ImageReader reader 两个抽象类型的变量",
          "factory = new GifReaderFactory()，再 reader = factory.createImageReader()，最后 reader.readImage()",
          "要换成读 JPG，只换 new 的那个具体工厂"
        ],
        "code": ""
      },
      {
        "title": "第四步　新增格式时改哪里",
        "bullets": [
          "加 PngReader 实现 ImageReader，加 PngReaderFactory 继承 ImageReaderFactory",
          "原有的四个类一行不改，符合开闭原则",
          "代价是每加一种格式要多写两个类"
        ],
        "code": ""
      }
    ],
    "memory": [
      "工厂方法：一个产品配一个工厂，客户端只依赖抽象工厂和抽象产品",
      "画类图时两棵继承树：工厂树和产品树，具体工厂用虚线指向它创建的具体产品"
    ],
    "quotes": [
      {
        "text": "解析:在本实例中，ImageReaderFactory 充当抽象工厂，GitReaderFactory 和 JpgReaderFactory 充当具体工厂，ImageReader 充当抽象产品，GitReader 和 JpgReader 充当具体产品。",
        "source": "07-2-创建型设计模式-参考答案及习题解析.md 第71行"
      },
      {
        "text": "Creator 角色属于框架这一方，它是负责生成 Product 角色的抽象类，但具体的处理则由子类 ConcreteCreator 角色决定。",
        "source": "04-FactoryMethod模式.md 第198行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md"
  },
  {
    "id": "E2-COMP-03",
    "type": "comprehensive",
    "source": "习题2综合题第3题",
    "category": "创建型设计模式",
    "pattern": "抽象工厂模式",
    "stem": "计算机包含内存(RAM)、CPU 等硬件设备,根据图 7-10 所示“产品等级结构—产品族”示意图,使用抽象工厂模式实现计算机设备创建过程并绘制相应的类图。",
    "materials": [],
    "answers": [
      "抽象工厂模式。参考类图如图 7-13 所示。\n\n![图7-13 综合题3参考类图](images/written/p062-b09.png)\n\n图7-13 综合题3参考类图\n\n解析:在本实例中，AbstractFactory 充当抽象工厂，PcFactory 和 MacFactory 充当具体工厂，CPU 和 RAM 充当抽象产品，PcCPU、MacCPU、PcRAM 和 MacRAM 充当具体产品。CPU、PcCPU 和 MacCPU 构成一个产品等级结构，RAM、PcRAM 和 MacRAM 构成一个产品等级结构，PcCPU 和 PcRAM 构成一个产品族，MacCPU 和 MacRAM 构成一个产品族。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "抽象工厂模式。参考类图如图 7-13 所示。"
      },
      {
        "type": "image",
        "alt": "图7-13 综合题3参考类图",
        "src": "images/written/p062-b09.png"
      },
      {
        "type": "text",
        "content": "解析:在本实例中，AbstractFactory 充当抽象工厂，PcFactory 和 MacFactory 充当具体工厂，CPU 和 RAM 充当抽象产品，PcCPU、MacCPU、PcRAM 和 MacRAM 充当具体产品。CPU、PcCPU 和 MacCPU 构成一个产品等级结构，RAM、PcRAM 和 MacRAM 构成一个产品等级结构，PcCPU 和 PcRAM 构成一个产品族，MacCPU 和 MacRAM 构成一个产品族。"
      }
    ],
    "roles": [
      [
        "AbstractFactory",
        "抽象工厂，声明 getCPU() 和 getRAM()"
      ],
      [
        "PcFactory、MacFactory",
        "具体工厂，各造一整套本品牌的硬件"
      ],
      [
        "CPU、RAM",
        "两种抽象产品"
      ],
      [
        "PcCPU、MacCPU、PcRAM、MacRAM",
        "具体产品"
      ]
    ],
    "steps": [
      {
        "title": "第一步　从示意图里读出两个方向",
        "bullets": [
          "竖着看是产品等级结构：CPU 下面有 PcCPU、MacCPU；RAM 下面有 PcRAM、MacRAM",
          "横着看是产品族：PcCPU 和 PcRAM 是 PC 一族，MacCPU 和 MacRAM 是 Mac 一族",
          "一台计算机要用同一族的 CPU 和内存，不能混搭"
        ],
        "code": ""
      },
      {
        "title": "第二步　为什么用抽象工厂",
        "bullets": [
          "要成套创建同一族的多个产品，正是抽象工厂解决的问题",
          "每个具体工厂负责一族：PcFactory 只造 PC 的 CPU 和内存，MacFactory 只造 Mac 的",
          "客户端选定一个工厂，拿到的零件一定是配套的"
        ],
        "code": ""
      },
      {
        "title": "第三步　类图怎么画",
        "bullets": [
          "AbstractFactory 接口里有 getRAM(): RAM 和 getCPU(): CPU 两个方法",
          "PcFactory、MacFactory 用虚线三角实现 AbstractFactory",
          "CPU、RAM 是两个接口，四个具体产品分别实现它们",
          "具体工厂用虚线箭头指向自己创建的两个具体产品"
        ],
        "code": ""
      },
      {
        "title": "第四步　扩展时改哪里",
        "bullets": [
          "加一个新品牌（新产品族）：加一个具体工厂和该品牌的 CPU、RAM，旧代码不改",
          "加一种新硬件（新产品种类），比如硬盘：要在 AbstractFactory 里加方法，所有具体工厂都得改"
        ],
        "code": ""
      }
    ],
    "memory": [
      "竖着是等级结构（同一种产品），横着是产品族（同一个工厂）",
      "抽象工厂里方法的个数＝产品种类数，具体工厂的个数＝产品族数"
    ],
    "quotes": [
      {
        "text": "CPU、PcCPU 和 MacCPU 构成一个产品等级结构，RAM、PcRAM 和 MacRAM 构成一个产品等级结构，PcCPU 和 PcRAM 构成一个产品族，MacCPU 和 MacRAM 构成一个产品族。",
        "source": "07-2-创建型设计模式-参考答案及习题解析.md 第81行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/08-AbstractFactory模式.md"
  },
  {
    "id": "E2-COMP-04",
    "type": "comprehensive",
    "source": "习题2综合题第4题",
    "category": "创建型设计模式",
    "pattern": "建造者模式",
    "stem": "计算机组装工厂可以将 CPU、内存、硬盘、主机、显示器等硬件设备组装在一起，构成一台完整的计算机，且构成的计算机可以是笔记本，也可以是台式机，还可以是不提供显示器的服务器主机。对于用户而言，无须关心计算机的组成设备和组装过程，工厂返回给用户的是完整的计算机对象。使用建造者模式实现计算机组装过程，要求绘制类图并编程实现。",
    "materials": [
      {
        "type": "image",
        "alt": "图 7-10 “产品等级结构—产品族”示意图",
        "src": "images/written/p060-b03.png"
      }
    ],
    "answers": [
      "建造者模式。参考类图如图 7-14 所示。\n\n![图7-14 综合题4参考类图](images/written/p063-b06.png)\n\n图7-14 综合题4参考类图\n\n解析:在本实例中，Computer 充当复合产品；ComputerBuilder 充当抽象建造者；Notebook、Desktop 和 Server 充当具体建造者；ComputerAssembleDirector 充当指挥者，其 assemble() 方法用于定义产品的构造过程。ComputerAssembleDirector 代码如下:\n\n```java\npublic Computer assemble() {\n    cb.buildCpu();\n    cb.buildRam();\ncb.buildHarddisk();\n    cb.buildMainframe();\n    cb.buildMonitor();\n    return cb.produceComputer();\n}\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "建造者模式。参考类图如图 7-14 所示。"
      },
      {
        "type": "image",
        "alt": "图7-14 综合题4参考类图",
        "src": "images/written/p063-b06.png"
      },
      {
        "type": "text",
        "content": "解析:在本实例中，Computer 充当复合产品；ComputerBuilder 充当抽象建造者；Notebook、Desktop 和 Server 充当具体建造者；ComputerAssembleDirector 充当指挥者，其 assemble() 方法用于定义产品的构造过程。ComputerAssembleDirector 代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 指挥者 ComputerAssembleDirector 的组装方法\n * cb 是指挥者持有的抽象建造者 ComputerBuilder\n */\n// 组装流程：顺序固定，每一步具体装什么由建造者决定\npublic Computer assemble() {\n    cb.buildCpu();  // 第 1 步：装 CPU\n    cb.buildRam();  // 第 2 步：装内存\ncb.buildHarddisk();  // 第 3 步：装硬盘\n    cb.buildMainframe();  // 第 4 步：装主机\n    cb.buildMonitor();  // 第 5 步：装显示器，服务器建造者可以什么都不装\n    return cb.produceComputer();  // 向建造者取出组装好的计算机\n}"
      }
    ],
    "roles": [
      [
        "Computer",
        "复合产品，含 cpu、ram、harddisk、mainframe、monitor"
      ],
      [
        "ComputerBuilder",
        "抽象建造者，声明 buildXxx() 和 produceComputer()"
      ],
      [
        "Notebook、Desktop、Server",
        "具体建造者，各自决定装什么零件"
      ],
      [
        "ComputerAssembleDirector",
        "指挥者，assemble() 规定组装顺序"
      ]
    ],
    "steps": [
      {
        "title": "第一步　找出不变和会变的部分",
        "bullets": [
          "不变的是组装顺序：装 CPU → 内存 → 硬盘 → 主机 → 显示器",
          "会变的是每一步装什么：笔记本、台式机、服务器的零件不同，服务器还不带显示器",
          "用户只要成品，不关心零件和组装过程"
        ],
        "code": ""
      },
      {
        "title": "第二步　对应建造者模式的角色",
        "bullets": [
          "ComputerBuilder 是抽象类，持有一个 computer 成员，声明五个 build 方法和 produceComputer()",
          "Notebook、Desktop、Server 继承它，各自实现五个 build 方法；Server 的 buildMonitor() 可以什么都不装",
          "ComputerAssembleDirector 持有一个 ComputerBuilder，通过 setComputerBuilder() 换建造者"
        ],
        "code": ""
      },
      {
        "title": "第三步　指挥者的组装代码",
        "bullets": [
          "assemble() 按固定顺序调用建造者的各个步骤，最后向建造者要成品",
          "指挥者只认抽象建造者，换成哪种计算机都不用改这段代码"
        ],
        "code": "/**\n * 指挥者按固定顺序调用建造者的各个步骤\n */\npublic Computer assemble() {\n    cb.buildCpu();  // 装 CPU\n    cb.buildRam();  // 装内存\n    cb.buildHarddisk();  // 装硬盘\n    cb.buildMainframe();  // 装主机\n    cb.buildMonitor();  // 装显示器\n    return cb.produceComputer();  // 取出成品\n}"
      },
      {
        "title": "第四步　客户端和扩展",
        "bullets": [
          "客户端：创建指挥者，setComputerBuilder(new Notebook())，调用 assemble() 得到一台笔记本",
          "新增一种计算机（比如一体机）只要加一个新的具体建造者，指挥者和其他建造者不改"
        ],
        "code": ""
      }
    ],
    "memory": [
      "建造者模式：指挥者定顺序，建造者定内容，最后由建造者交出成品",
      "类图里指挥者关联抽象建造者，抽象建造者组合产品"
    ],
    "quotes": [
      {
        "text": "ComputerAssembleDirector 充当指挥者，其 assemble() 方法用于定义产品的构造过程。",
        "source": "07-2-创建型设计模式-参考答案及习题解析.md 第89行"
      },
      {
        "text": "Director 角色负责使用 Builder 角色的接口（API）来生成实例。它并不依赖于 ConcreteBuilder 角色。",
        "source": "07-Builder模式.md 第294行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/07-Builder模式.md"
  },
  {
    "id": "E2-COMP-05",
    "type": "comprehensive",
    "source": "习题2综合题第5题",
    "category": "创建型设计模式",
    "pattern": "原型模式",
    "stem": "设计一个客户类 Customer, 其中客户地址存储在地址类 Address 中, 用浅克隆和深克隆分别实现 Customer 对象的复制并比较这两种克隆方式的异同。绘制类图并编程实现。",
    "materials": [],
    "answers": [
      "原型模式。浅克隆参考类图如图 7-15 所示。\n\n![图 7-15 综合题 5 参考类图(浅克隆)](images/written/p064-b05.png)\n\n图 7-15 综合题 5 参考类图(浅克隆)\n\n解析:本实例实现了浅克隆，Object 类充当抽象原型类，Customer 类充当具体原型类，浅克隆只复制容器对象，不复制成员对象。Customer 类的代码片段如下:\n\n```java\npublic class Customer implements Cloneable {\n    private Address address = null;\n    public Customer() {\n        this.address = new Address();\n    }\n    //浅克隆方法\n    public Object clone() {\n        Object obj = null;\n        try {\n            obj = super.clone();\n        }\n        catch(CloneNotSupportedException e) {\n            System.out.println(\"Clone failure!\");\n        }\n        return obj;\n    }\n    //其他代码省略\n}\n```\n\n深克隆参考类图如图 7-16 所示。\n\n解析:本实例实现了深克隆，Customer 类和 Address 类均实现了 Serializable 接口，深克隆既复制容器对象，又复制成员对象。Customer 类的代码如下:\n\n![图 7-16 综合题 5 参考类图(深克隆)](images/written/p065-b04.png)\n\n图 7-16 综合题 5 参考类图(深克隆)\n\n```java\nimport java.io.*;\npublic class Customer implements Serializable {\n    private Address address = null;\n    public Customer() {\n        this.address = new Address();\n    }\n    //深克隆方法\n    public Object deepClone() throws IOException, ClassNotFoundException, OptionalDataException {\n        //将对象写入流中\n       ServeOutputStream bao = newServeOutputStream();\n        ObjectOutputStream oos = new ObjectOutputStream(bao);\n        oos.writeObject(this);\n\n        //将对象从流中取出\n       ServeInputStream bis = newServeInputStream(bao.toByteArray());\n        ObjectOutputStream ois = new ObjectOutputStream(bis);\n        return(ois.readObject());\n    }\n    //其他代码省略\n}\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "原型模式。浅克隆参考类图如图 7-15 所示。"
      },
      {
        "type": "image",
        "alt": "图 7-15 综合题 5 参考类图(浅克隆)",
        "src": "images/written/p064-b05.png"
      },
      {
        "type": "text",
        "content": "解析:本实例实现了浅克隆，Object 类充当抽象原型类，Customer 类充当具体原型类，浅克隆只复制容器对象，不复制成员对象。Customer 类的代码片段如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 浅克隆版本的 Customer\n * Object 充当抽象原型，Customer 充当具体原型\n */\n// 实现 Cloneable：表示允许被复制，否则 clone() 会抛异常\npublic class Customer implements Cloneable {\n    private Address address = null;  // 成员对象：地址\n    public Customer() {\n        this.address = new Address();  // 创建客户时同时创建一个地址对象\n    }\n    //浅克隆方法\n    // 重写 clone 方法，对外提供复制功能\n    public Object clone() {\n        Object obj = null;\n        try {\n            // 调用 Object 的 clone 完成复制\n            // 只复制 Customer 自己，address 只复制引用，新旧客户共用同一个地址对象\n            obj = super.clone();\n        }\n        // 没有实现 Cloneable 时会进入这里\n        catch(CloneNotSupportedException e) {\n            System.out.println(\"Clone failure!\");\n        }\n        return obj;  // 返回复制出来的新客户\n    }\n    //其他代码省略\n}"
      },
      {
        "type": "text",
        "content": "深克隆参考类图如图 7-16 所示。"
      },
      {
        "type": "text",
        "content": "解析:本实例实现了深克隆，Customer 类和 Address 类均实现了 Serializable 接口，深克隆既复制容器对象，又复制成员对象。Customer 类的代码如下:"
      },
      {
        "type": "image",
        "alt": "图 7-16 综合题 5 参考类图(深克隆)",
        "src": "images/written/p065-b04.png"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 深克隆版本的 Customer：借助对象流复制\n * Customer 和 Address 都要实现 Serializable\n * 注意：ServeOutputStream、ServeInputStream 是原书识别错误，指字节数组输出流、输入流\n * 注意：读取时原书写成了 ObjectOutputStream，按流程应为 ObjectInputStream\n */\nimport java.io.*;\n// 实现 Serializable：对象才能写进流\npublic class Customer implements Serializable {\n    private Address address = null;  // 成员对象：地址\n    public Customer() {\n        this.address = new Address();\n    }\n    //深克隆方法\n    // 深克隆方法：客户和地址都会被复制\n    public Object deepClone() throws IOException, ClassNotFoundException, OptionalDataException {\n        //将对象写入流中\n       // 在内存中准备一块字节缓冲区\n       ServeOutputStream bao = newServeOutputStream();\n        // 对象输出流，写到缓冲区里\n        ObjectOutputStream oos = new ObjectOutputStream(bao);\n        // 把当前客户连同它的地址一起写进去\n        oos.writeObject(this);\n\n        //将对象从流中取出\n       // 用写好的字节创建输入流\n       ServeInputStream bis = newServeInputStream(bao.toByteArray());\n        // 这里应为对象输入流，用来把对象读回来\n        ObjectOutputStream ois = new ObjectOutputStream(bis);\n        // 读出来的是一整套新对象，地址也是新的\n        return(ois.readObject());\n    }\n    //其他代码省略\n}"
      }
    ],
    "roles": [
      [
        "Customer",
        "具体原型，提供克隆方法"
      ],
      [
        "Address",
        "Customer 的成员对象，用来检验成员是否被复制"
      ],
      [
        "Object / Cloneable",
        "浅克隆时 Object 充当抽象原型，Cloneable 允许调用 clone()"
      ],
      [
        "Serializable",
        "深克隆时允许对象写进流"
      ]
    ],
    "steps": [
      {
        "title": "第一步　先说清浅克隆和深克隆的区别",
        "bullets": [
          "Customer 里有一个 Address 成员，题目就是要看复制 Customer 时 Address 有没有被复制",
          "浅克隆：只复制 Customer 自己，新旧两个 Customer 指向同一个 Address",
          "深克隆：Customer 和 Address 都复制，新旧对象完全独立"
        ],
        "code": ""
      },
      {
        "title": "第二步　浅克隆怎么写",
        "bullets": [
          "Customer 实现 Cloneable 接口，重写 clone()",
          "在 clone() 里调用 super.clone()，由 Object 完成复制",
          "Object 的 clone() 只复制成员的引用地址，所以 address 还是原来那一个"
        ],
        "code": ""
      },
      {
        "title": "第三步　深克隆怎么写",
        "bullets": [
          "Customer 和 Address 都实现 Serializable",
          "deepClone() 把 this 写进对象输出流，再从字节数组构造输入流读出来",
          "读出来的是一整套新对象，Address 也是新的",
          "参考代码读取那一行写成了 ObjectOutputStream ois，读对象应使用 ObjectInputStream，和填空题第 5 题 (4) 的写法一致"
        ],
        "code": ""
      },
      {
        "title": "第四步　比较两种方式的异同",
        "bullets": [
          "相同点：都得到一个新的 Customer 对象，克隆体和原对象 == 比较为 false",
          "不同点：浅克隆的 address 与原对象相同，改一个另一个也变；深克隆的 address 是独立的新对象",
          "实现上：浅克隆靠 Cloneable 和 super.clone()，简单；深克隆要让成员也能被复制，这里借助序列化"
        ],
        "code": ""
      }
    ],
    "memory": [
      "浅克隆只复制外壳，成员共用；深克隆外壳和成员都复制",
      "检验方法：比较 c1.getAddress() == c2.getAddress()，浅克隆为 true，深克隆为 false"
    ],
    "quotes": [
      {
        "text": "解析:本实例实现了浅克隆，Object 类充当抽象原型类，Customer 类充当具体原型类，浅克隆只复制容器对象，不复制成员对象。",
        "source": "07-2-创建型设计模式-参考答案及习题解析.md 第110行"
      },
      {
        "text": "深克隆既复制容器对象，又复制成员对象。",
        "source": "07-2-创建型设计模式-参考答案及习题解析.md 第135行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/06-Prototype模式.md"
  },
  {
    "id": "E2-COMP-06",
    "type": "comprehensive",
    "source": "习题2综合题第6题",
    "category": "创建型设计模式",
    "pattern": "单例模式",
    "stem": "使用单例模式的思想实现多例模式,确保系统中某个类的对象只能存在有限个,如两个或三个,设计并编写代码实现一个多例类。",
    "materials": [],
    "answers": [
      "单例模式。参考类图如图 7-17 所示。\n\n![图 7-17 综合题 6 参考类图](images/written/p065-b08.png)\n\n图 7-17 综合题 6 参考类图\n\n解析:多例模式(Multiton Pattern)是单例模式的一种扩展形式,多例类可以有多个实例,而且必须自行创建和管理实例,并向外界提供自己的实例,可以通过静态集合对象来存储这些实例。多例类 Multiton 的代码如下:\n\n```java\nimport java.util.*;\n\npublic class Multiton {\n    //定义一个数组,用于存储 4 个实例\n    private static Multiton[] array = {new Multiton(), new Multiton(), new Multiton(), new Multiton()};\n    //私有构造函数\n    private Multiton(){\n    }\n    //静态工厂方法,随机返回数组中的一个实例\n    public static Multiton getInstance() {\n        return array[random()];\n    }\n    //随机生成一个整数,作为数组下标\n    public static int random() {\n        Random random = new Random();\n        int value = Math.abs(random.nextInt());\n        value = value % 4;\n        return value;\n    }\n    public static void main(String args[]) {\n        Multiton m1,m2,m3,m4;\n        m1 = Multiton.getInstance();\n        m2 = Multiton.getInstance();\n        m3 = Multiton.getInstance();\n        m4 = Multiton.getInstance();\n\n        System.out.println(m1 == m2);\n        System.out.println(m1 == m3);\n        System.out.println(m1 == m4);\n    }\n}\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "单例模式。参考类图如图 7-17 所示。"
      },
      {
        "type": "image",
        "alt": "图 7-17 综合题 6 参考类图",
        "src": "images/written/p065-b08.png"
      },
      {
        "type": "text",
        "content": "解析:多例模式(Multiton Pattern)是单例模式的一种扩展形式,多例类可以有多个实例,而且必须自行创建和管理实例,并向外界提供自己的实例,可以通过静态集合对象来存储这些实例。多例类 Multiton 的代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 多例类：在单例的基础上，允许有固定个数的实例\n * 三个要点：构造方法私有；类自己创建并保存实例；通过静态方法向外提供实例\n */\nimport java.util.*;\n\npublic class Multiton {\n    //定义一个数组,用于存储 4 个实例\n    // 类加载时就创建好 4 个实例，放进静态数组\n    private static Multiton[] array = {new Multiton(), new Multiton(), new Multiton(), new Multiton()};\n    //私有构造函数\n    // 构造方法私有：外部无法再 new，实例个数只能是 4 个\n    private Multiton(){\n    }\n    //静态工厂方法,随机返回数组中的一个实例\n    // 对外提供实例：每次随机返回 4 个中的一个\n    public static Multiton getInstance() {\n        return array[random()];\n    }\n    //随机生成一个整数,作为数组下标\n    // 生成 0～3 的随机下标\n    public static int random() {\n        Random random = new Random();\n        int value = Math.abs(random.nextInt());  // 取一个非负的随机整数\n        value = value % 4;  // 对 4 取余，结果只能是 0、1、2、3\n        return value;\n    }\n    // 测试：连续取 4 次实例\n    public static void main(String args[]) {\n        Multiton m1,m2,m3,m4;\n        m1 = Multiton.getInstance();\n        m2 = Multiton.getInstance();\n        m3 = Multiton.getInstance();\n        m4 = Multiton.getInstance();\n\n        // 下标随机，所以比较结果有时为 true，有时为 false\n        System.out.println(m1 == m2);\n        System.out.println(m1 == m3);\n        System.out.println(m1 == m4);\n    }\n}"
      }
    ],
    "roles": [
      [
        "Multiton",
        "多例类，自己创建并保存有限个实例"
      ],
      [
        "array",
        "private static 数组，存放全部实例"
      ],
      [
        "getInstance()",
        "静态工厂方法，向外提供其中一个实例"
      ]
    ],
    "steps": [
      {
        "title": "第一步　从单例出发想多例",
        "bullets": [
          "单例靠三点保证只有一个实例：构造方法私有、类自己保存实例、提供静态方法取实例",
          "多例只是把“保存一个”改成“保存有限几个”，其他两点照搬"
        ],
        "code": ""
      },
      {
        "title": "第二步　对照参考代码看三点怎么落实",
        "bullets": [
          "private Multiton()：外面不能 new，实例个数只能由类自己控制",
          "private static Multiton[] array：类加载时就创建好固定个数的实例放进数组，参考代码放了 4 个",
          "public static getInstance()：用 random() 生成 0～3 的下标，返回数组中的一个实例"
        ],
        "code": ""
      },
      {
        "title": "第三步　运行结果怎么理解",
        "bullets": [
          "m1～m4 都来自同一个数组，所以只会是这 4 个实例之一",
          "下标随机，所以 m1 == m2 等比较有时为 true，有时为 false",
          "无论调用多少次，系统中 Multiton 对象最多只有 4 个"
        ],
        "code": ""
      },
      {
        "title": "第四步　写在试卷上的答案要点",
        "bullets": [
          "多例模式是单例模式的扩展：可以有多个实例，但个数有限",
          "多例类必须自己创建和管理实例，并向外提供实例，用静态集合（数组）存放",
          "给出私有构造方法、静态数组、静态 getInstance() 的代码"
        ],
        "code": ""
      }
    ],
    "memory": [
      "单例改多例：把一个静态变量换成一个静态集合，构造方法仍然私有",
      "实例的个数由类自己控制，外界只能通过 getInstance() 拿"
    ],
    "quotes": [
      {
        "text": "解析:多例模式(Multiton Pattern)是单例模式的一种扩展形式,多例类可以有多个实例,而且必须自行创建和管理实例,并向外界提供自己的实例,可以通过静态集合对象来存储这些实例。",
        "source": "07-2-创建型设计模式-参考答案及习题解析.md 第172行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/05-Singleton模式.md"
  },
  {
    "id": "E3-FILL-01",
    "type": "fill",
    "source": "习题3填空题第1题",
    "category": "结构型设计模式",
    "pattern": "适配器模式",
    "stem": "某公司要开发一款儿童玩具汽车,为了更好地吸引小朋友的注意力,该玩具汽车在移动过程中伴随着灯光闪烁和声音提示,在该公司以往的产品中已经实现了控制灯光闪烁和声音提示的程序,为了重用先前的代码并且使汽车控制软件具有更好的灵活性和扩展性,使用适配器模式设计该系统,所得类图如图 8-5 所示。",
    "materials": [
      {
        "type": "text",
        "content": "在图 8-5 中, CarController 类是汽车控制器, 它包括 3 个方法用于控制汽车的行为, 其中 move() 用于控制汽车的移动, sound() 用于控制汽车的声音, light() 用于控制汽车灯光的闪烁, sound() 和 light() 是抽象方法; Sound 类是抽象声音类, 其方法 phonate() 用于实现声音提示, 在其子类 ConcreteSound 中实现了该方法; Lamp 类是灯光类, 其方法 twinkle() 用于实现灯光闪烁, 在其子类 ConcreteLamp 中实现了该方法; CarAdapter 充当适配器, 它通过分别调用 Sound 类的 phonate() 方法和 Lamp 类的 twinkle() 方法实现声音播放和灯光闪烁。"
      },
      {
        "type": "image",
        "alt": "图8-5 填空题1类图",
        "src": "images/written/p073-b04.png"
      },
      {
        "type": "text",
        "content": "Java 代码"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 适配器模式实现的玩具汽车控制\n * 1. Sound、Lamp：以前写好的声音类和灯光类（被适配者）\n * 2. CarController：新的汽车控制器（目标），要求有 sound() 和 light()\n * 3. CarAdapter：适配器，把 sound()、light() 转成对旧方法的调用\n * 4. Client：客户端，只认 CarController\n */\n//抽象声音类\n// 被适配者一：旧代码中的声音类，方法名叫 phonate\nabstract class Sound {\n    public abstract void phonate();\n}\n\n//具体声音类\n// 旧代码中真正发声的类\nclass ConcreteSound extends Sound {\n    public void phonate() {\n        System.out.println(\"声音播放!\");\n    }\n}\n\n//抽象灯光类\n// 被适配者二：旧代码中的灯光类，方法名叫 twinkle\nabstract class Lamp {\n    public abstract void twinkle();\n}\n\n//具体灯光类\n// 旧代码中真正闪灯的类\nclass ConcreteLamp extends Lamp {\n    public void twinkle() {\n        System.out.println(\"灯光闪烁!\");\n    }\n}\n\n//汽车控制器\n// 第(1)空：这个类里有抽象方法，类本身要用什么修饰\n(1) CarController {\n    // 汽车移动：控制器自己就能完成\n    public void move() {\n        System.out.println(\"汽车移动!\");\n    }\n    public abstract void sound();  // 新接口要求的“发声”，名字和旧方法 phonate 不同\npublic abstract void light();  // 新接口要求的“闪灯”，名字和旧方法 twinkle 不同\n}\n\n//汽车适配器\n// 第(2)空：适配器要能被当作 CarController 使用\nclass CarAdapter ____(2)____ {\n    private Sound sound;  // 持有一个旧的声音对象\n    private Lamp lamp;  // 持有一个旧的灯光对象\n\n    // 构造方法：接收两个旧对象\n    public CarAdapter(Sound sound,Lamp lamp) {\n        // 第(3)空：保存传进来的声音对象（参数和成员同名）\n        ____(3)____;\n        // 第(4)空：保存传进来的灯光对象\n        ____(4)____;\n    }\n\n    // 实现新接口的 sound()\n    public void sound() {\n        // 第(5)空：转去调用旧的声音方法\n        ____(5)____; //声音播放\n    }\n\n    // 实现新接口的 light()\n    public void light() {\n        // 第(6)空：转去调用旧的灯光方法\n        ____(6)____; //灯光闪烁\n    }\n}\n\n// 客户端\nclass Client {\n    public static void main(String args[]) {\n        Sound sound;\n        Lamp lamp;\n        CarController car;  // 变量类型是目标类，客户端看不到适配器内部\n\n        sound = new ConcreteSound();  // 准备旧的声音对象\n        lamp = new ConcreteLamp();  // 准备旧的灯光对象\n        // 第(7)空：用两个旧对象创建适配器\n        car = ____(7)____;\n\n        car.move();  // 移动\n        car.sound();  // 发声：实际执行的是旧的 phonate\n        car.light();  // 闪灯：实际执行的是旧的 twinkle\n    }\n}"
      },
      {
        "type": "text",
        "content": "在本实例中,使用了 (8) (填写类适配器或对象适配器)模式。"
      }
    ],
    "answers": [
      "(1) abstract class; (2) extends CarController; (3) this. sound = sound; (4) this. lamp = lamp; (5) sound. phonate(); (6) lamp. twinkle(); (7) new CarAdapter(sound, lamp); (8) 对象适配器。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) abstract class; (2) extends CarController; (3) this. sound = sound; (4) this. lamp = lamp; (5) sound. phonate(); (6) lamp. twinkle(); (7) new CarAdapter(sound, lamp); (8) 对象适配器。"
      }
    ],
    "roles": [
      [
        "CarController",
        "目标类，客户端要用的 move()、sound()、light()"
      ],
      [
        "Sound、Lamp",
        "适配者，已有的 phonate() 和 twinkle()"
      ],
      [
        "CarAdapter",
        "适配器，把 sound()、light() 转成对已有方法的调用"
      ],
      [
        "Client",
        "客户端，只认 CarController"
      ]
    ],
    "steps": [
      {
        "title": "第一步　看出谁和谁对不上",
        "bullets": [
          "新的汽车控制器想调用 sound() 和 light()",
          "以前写好的代码叫 phonate() 和 twinkle()，方法名对不上",
          "适配器 CarAdapter 站在中间：对外提供 sound()、light()，对内调用 phonate()、twinkle()"
        ],
        "code": ""
      },
      {
        "title": "第二步　从代码细节判断每个空",
        "bullets": [
          "CarController 里有 abstract 方法，它自己必须是抽象类",
          "客户端把 CarAdapter 对象赋给 CarController 类型的 car，所以 CarAdapter 要继承 CarController",
          "CarAdapter 有成员 sound、lamp，构造方法参数同名，要用 this. 区分",
          "sound()、light() 里要转去调用成员对象的已有方法"
        ],
        "code": ""
      },
      {
        "title": "第三步　逐空填写",
        "bullets": [
          "(1) abstract class：类里有抽象方法",
          "(2) extends CarController：适配器要能当作 CarController 使用",
          "(3) this.sound = sound；(4) this.lamp = lamp：保存传进来的两个适配者对象",
          "(5) sound.phonate()：sound() 转成调用已有的声音方法",
          "(6) lamp.twinkle()：light() 转成调用已有的灯光方法",
          "(7) new CarAdapter(sound, lamp)：把两个适配者交给适配器",
          "(8) 对象适配器：CarAdapter 没有继承 Sound 或 Lamp，而是持有它们的对象"
        ],
        "code": ""
      }
    ],
    "memory": [
      "适配器继承或实现目标，持有适配者对象，在目标方法里调用适配者方法",
      "持有对象就是对象适配器，继承适配者才是类适配器"
    ],
    "quotes": [
      {
        "text": "在类适配器模式中，Adapter 角色通过继承来使用 Adaptee 角色，而在对象适配器模式中，Adapter 角色通过委托来使用 Adaptee 角色。",
        "source": "02-Adapter模式.md 第227行"
      },
      {
        "text": "使用 Adaptee 角色的方法来满足 Target 角色的需求，这是 Adapter 模式的目的，也是 Adapter 角色的作用。",
        "source": "02-Adapter模式.md 第213行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/02-Adapter模式.md"
  },
  {
    "id": "E3-FILL-02",
    "type": "fill",
    "source": "习题3填空题第2题",
    "category": "结构型设计模式",
    "pattern": "桥接模式",
    "stem": "现要实现一个图像浏览系统,要求该系统能够显示 BMP、JPEG 和 GIF 3 种格式的文件,并且能够在 Windows 和 Linux 两种操作系统上运行。系统首先将 BMP、JPEG 和 GIF 3 种格式的文件解析为像素矩阵,然后将像素矩阵显示在屏幕上。系统需具有较好的扩展性以支持新的文件格式和操作系统。为满足上述需求并减少所需生成的子类数目,采用桥接设计模式进行设计,所得类图如图 8-6 所示。",
    "materials": [
      {
        "type": "text",
        "content": "采用该设计模式的原因在于:系统解析 BMP、JPEG 与 GIF 文件的代码仅与文件格式相关，而在屏幕上显示像素矩阵的代码则仅与操作系统相关。"
      },
      {
        "type": "image",
        "alt": "图8-6 填空题2类图",
        "src": "images/written/p075-b04.png"
      },
      {
        "type": "text",
        "content": "Java 代码"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 桥接模式实现的跨平台图像浏览\n * 维度一（抽象部分）：文件格式 Image → BMP、GIF、JPEG，负责解析文件\n * 维度二（实现部分）：操作系统 ImageImp → WinImp、LinuxImp，负责把像素画到屏幕上\n * 两边通过 Image 里的成员 imp 连在一起，这个成员就是“桥”\n */\nclass Matrix { //各种格式的文件最终都被转化为像素矩阵\n    //此处代码省略\n}\n// 实现部分的接口：只管“怎么显示”\ninterface ImageImp {\n    public void doPaint(Matrix m); //显示像素矩阵 m\n}\n\n// 在 Windows 上显示\nclass WinImp implements ImageImp {\n    public void doPaint(Matrix m) {/* 调用 Windows 系统的绘制函数绘制像素矩阵 */}\n}\n\n// 在 Linux 上显示\nclass LinuxImp implements ImageImp {\n    public void doPaint(Matrix m) {/* 调用 Linux 系统的绘制函数绘制像素矩阵 */}\n}\n\n// 抽象部分的父类：只管“解析什么格式”\nabstract class Image {\n    // 设置用哪个操作系统来显示\n    public void setImp(ImageImp imp) {\n        // 第(1)空：把参数保存到成员变量中\n        (1) = imp; }\n    public abstract void parseFile(String fileName);  // 解析文件，由各个格式的子类实现\n    // 第(2)空：成员 imp 的类型，应当是实现部分的接口\n    protected (2) imp;\n}\n\n// BMP 格式：解析 BMP 文件\nclass BMP extends Image {\n    public void parseFile(String fileName) {\n        //此处解析 BMP 文件并获得一个像素矩阵对象 m\n        // 第(3)空：解析完后交给当前操作系统的实现去显示\n        (3); //显示像素矩阵 m\n    }\n}\n\n// GIF 格式\nclass GIF extends Image {\n    //此处代码省略\n}\n\n// JPEG 格式\nclass JPEG extends Image {\n//此处代码省略\n}\n\npublic class Main{\n    public static void main(String[] args)\n    {\n        //在 Windows 操作系统上查看 demo.bmp 图像文件\n        // 第(4)空：选择文件格式\n        Image image1 = ______(4) ______;\n        // 第(5)空：选择操作系统\n        ImageImp imageImp1 = ______(5) ______;\n        // 第(6)空：把操作系统的实现接到图像对象上\n        ______(6) ______;\n        image1.parseFile(\"demo.bmp\");  // 解析并显示 demo.bmp\n    }\n}"
      },
      {
        "type": "text",
        "content": "现假设该系统需要支持 10 种格式的图像文件和 5 种操作系统, 不考虑类 Matrix 和类 Main, 若采用桥接模式, 则至少需要设计 \\_\\_\\_\\_ (7) \\_\\_\\_\\_ 个类。"
      }
    ],
    "answers": [
      "(1) this. imp; (2) ImageImp; (3) imp. doPaint(m); (4) new BMP(); (5) new WinImp(); (6) image1.setImp(imageImpl); (7) 17。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) this. imp; (2) ImageImp; (3) imp. doPaint(m); (4) new BMP(); (5) new WinImp(); (6) image1.setImp(imageImpl); (7) 17。"
      }
    ],
    "roles": [
      [
        "Image",
        "抽象部分，按文件格式扩展，持有 ImageImp"
      ],
      [
        "BMP、GIF、JPEG",
        "扩充抽象部分，各自解析一种格式"
      ],
      [
        "ImageImp",
        "实现部分接口，声明 doPaint(Matrix m)"
      ],
      [
        "WinImp、LinuxImp",
        "具体实现，在各自操作系统上绘制"
      ]
    ],
    "steps": [
      {
        "title": "第一步　找出两个独立变化的维度",
        "bullets": [
          "维度一是文件格式：解析 BMP、JPEG、GIF 的代码只和格式有关",
          "维度二是操作系统：把像素矩阵画到屏幕上的代码只和系统有关",
          "如果每种组合写一个子类，会有“格式数 × 系统数”个类；桥接让两边各自扩展，再用关联连起来"
        ],
        "code": ""
      },
      {
        "title": "第二步　看代码里的“桥”",
        "bullets": [
          "Image 里有一个成员 imp，setImp 方法给它赋值，这个 imp 就是连接两边的桥",
          "BMP 解析完文件得到矩阵 m 后，不自己画，而是交给 imp 去画",
          "客户端先选格式对象，再选系统对象，最后用 setImp 把两者接上"
        ],
        "code": ""
      },
      {
        "title": "第三步　逐空填写",
        "bullets": [
          "(1) this.imp：把参数 imp 存进成员变量",
          "(2) ImageImp：成员 imp 的类型是实现部分的接口",
          "(3) imp.doPaint(m)：解析完交给当前系统的实现去显示",
          "(4) new BMP()：要看的是 demo.bmp",
          "(5) new WinImp()：在 Windows 上显示",
          "(6) image1.setImp(imageImpl)：把 Windows 实现接到 BMP 对象上；参考答案写作 imageImpl，代码中的变量名是 imageImp1，二者指同一个变量"
        ],
        "code": ""
      },
      {
        "title": "第四步　计算 (7) 的类数",
        "bullets": [
          "格式一侧：10 个具体格式类 + 1 个抽象类 Image = 11",
          "系统一侧：5 个具体实现类 + 1 个接口 ImageImp = 6",
          "两侧相加：11 + 6 = 17",
          "用加法而不是乘法，是因为桥接把两个维度分开了，不需要为每种组合各写一个类"
        ],
        "code": ""
      }
    ],
    "memory": [
      "桥接模式的类数＝两个维度的类数相加（各自再加一个抽象层），继承方案才是相乘",
      "抽象部分持有实现部分的接口，具体工作通过 imp.xxx() 交出去"
    ],
    "quotes": [
      {
        "text": "该角色位于“类的功能层次结构”的最上层。它使用 Implementor 角色的方法定义了基本的功能。该角色中保存了 Implementor 角色的实例。",
        "source": "09-Bridge模式.md 第297行"
      },
      {
        "text": "因此，我们需要将“类的功能层次结构”与“类的实现层次结构”分离为两个独立的类层次结构。",
        "source": "09-Bridge模式.md 第93行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/09-Bridge模式.md"
  },
  {
    "id": "E3-FILL-03",
    "type": "fill",
    "source": "习题3填空题第3题",
    "category": "结构型设计模式",
    "pattern": "组合模式",
    "stem": "某公司的组织结构图如图 8-7 所示, 现采用组合设计模式来设计, 得到如图 8-8 所示的类图。",
    "materials": [
      {
        "type": "image",
        "alt": "图8-7 某公司组织结构图",
        "src": "images/written/p076-b06.png"
      },
      {
        "type": "image",
        "alt": "图8-8 填空题3类图",
        "src": "images/written/p076-b08.png"
      },
      {
        "type": "text",
        "content": "在图 8-8 中, Company 为抽象类, 定义了在组织结构图上添加 (Add) 和删除 (Delete) 分公司/办事处或者部门的方法接口; 类 ConcreteCompany 表示具体的分公司或者办事处, 分公司或办事处下可以设置不同的部门; 类 HRDepartment 和 FinanceDepartment 分别表示人力资源部和财务部。"
      },
      {
        "type": "text",
        "content": "Java 代码"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 组合模式实现的公司组织结构\n * 1. Company：抽象构件，声明添加和删除下级的方法\n * 2. ConcreteCompany：容器构件，分公司或办事处，可以挂下级\n * 3. HRDepartment、FinanceDepartment：叶子构件，部门下面不再挂单位\n * 4. Test：按组织结构图把树搭起来\n */\nimport java.util.*;\n// 第(1)空：这个类里有抽象方法，类本身要用什么修饰\n(1) Company {\nprotected String name;  // 单位名称\n// 第(2)空：参数和成员同名，要把参数赋给成员 name\npublic Company(String name) { (2) = name; }\npublic abstract void Add(Company c); // 增加子公司、办事处或部门\npublic abstract void Delete(Company c); // 删除子公司、办事处或部门\n}\n\n// 容器构件：下面可以放部门，也可以放分公司\nclass ConcreteCompany extends Company {\n// 第(3)(4)空：列表里既可能放部门也可能放分公司，元素类型要写它们共同的父类\nprivate List < (3) > children = new ArrayList < (4)>();// 存储子公司、办事\n//处或部门\n// 把名称交给父类保存\npublic ConcreteCompany(String name) { super(name); }\n// 第(5)空：添加下级，是对保存子节点的列表操作\npublic void Add(Company c) { (5).add(c); }\n// 第(6)空：删除下级，同样是对子节点列表操作\npublic void Delete(Company c) { (6).remove(c); }\n}\n\n// 叶子构件：人力资源部\nclass HRDepartment extends Company {\npublic HRDepartment(String name) { super(name); }\n// 其他代码省略\n}\n\n// 叶子构件：财务部\nclass FinanceDepartment extends Company {\npublic FinanceDepartment(String name) { super(name); }\n// 其他代码省略\n}\n\n// 客户端：搭建组织结构树\npublic class Test {\npublic static void main(String[] args) {\n// 树根：北京总部\nConcreteCompany root = new ConcreteCompany(\"北京公司总部\");\n// 总部下面挂两个部门\nroot.Add(new HRDepartment(\"总公司人力资源部\"));\nroot.Add(new FinanceDepartment(\"总公司财务部\"));\n// 上海分公司，它自己下面也有两个部门\nConcreteCompany comp = new ConcreteCompany(\"上海分公司\");\ncomp.Add(new HRDepartment(\"上海分公司人力资源部\"));\ncomp.Add(new FinanceDepartment(\"上海分公司财务部\"));\n// 第(7)空：按结构图，把上海分公司挂到正确的上级下面\n(7);\n// 南京办事处，下面也有两个部门\nConcreteCompany comp1 = new ConcreteCompany(\"南京办事处\");\ncomp1.Add(new HRDepartment(\"南京办事处人力资源部\"));\ncomp1.Add(new FinanceDepartment(\"南京办事处财务部\"));\n// 第(8)空：按结构图，把南京办事处挂到正确的上级下面\n(8); // 其他代码省略\n}\n}"
      }
    ],
    "answers": [
      "(1) abstract class; (2) this. name; (3) Company; (4) Company; (5) children; (6) children; (7) root. Add(comp); (8) comp. Add(comp1)."
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) abstract class; (2) this. name; (3) Company; (4) Company; (5) children; (6) children; (7) root. Add(comp); (8) comp. Add(comp1)."
      }
    ],
    "roles": [
      [
        "Company",
        "抽象构件，声明 Add、Delete"
      ],
      [
        "ConcreteCompany",
        "容器构件，分公司或办事处，可以再放下级单位"
      ],
      [
        "HRDepartment、FinanceDepartment",
        "叶子构件，部门下面不再挂单位"
      ]
    ],
    "steps": [
      {
        "title": "第一步　对照组织结构图找出树",
        "bullets": [
          "总部下面有部门和上海分公司，上海分公司下面有部门和南京办事处",
          "分公司、办事处能继续挂下级，是容器；人力资源部、财务部不能再挂，是叶子",
          "容器和叶子都继承 Company，所以容器里存的元素类型统一写 Company"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写类定义",
        "bullets": [
          "(1) abstract class：Company 里有抽象方法 Add、Delete",
          "(2) this.name：构造方法参数和成员同名，用 this. 给成员赋值",
          "(3) Company、(4) Company：children 里既可能放部门，也可能放分公司，只能用父类 Company 作为元素类型",
          "(5) children、(6) children：添加和删除都是对子节点列表操作"
        ],
        "code": ""
      },
      {
        "title": "第三步　根据组织结构图搭树",
        "bullets": [
          "(7) root.Add(comp)：上海分公司挂在北京总部下面",
          "(8) comp.Add(comp1)：南京办事处挂在上海分公司下面，而不是直接挂在总部下",
          "这一步要对照组织结构图看清上下级，填错父节点整棵树就错了"
        ],
        "code": ""
      }
    ],
    "memory": [
      "容器里的集合元素类型写抽象构件，这样叶子和容器都能放进去",
      "搭树时谁 Add 谁，要对照结构图的上下级"
    ],
    "quotes": [
      {
        "text": "表示容器的角色。可以在其中放入 Leaf 角色和 Composite 角色。",
        "source": "11-Composite模式.md 第306行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/11-Composite模式.md"
  },
  {
    "id": "E3-FILL-04",
    "type": "fill",
    "source": "习题3填空题第4题",
    "category": "结构型设计模式",
    "pattern": "装饰模式",
    "stem": "某公司要开发一套手机来电提示程序,在最简单的版本中,手机在接收到来电时会发出声音来提醒用户; 在振动版本中,除了声音外,在来电时手机还能产生振动; 在更高级的版本中,手机不仅能够发声和产生振动,还会有灯光闪烁提示。现采用装饰设计模式来设计,得到如图 8-9 所示的类图。",
    "materials": [
      {
        "type": "image",
        "alt": "图8-9 填空题4类图",
        "src": "images/written/p078-b04.png"
      },
      {
        "type": "text",
        "content": "在图 8-9 中, Cellphone 为抽象类, 声明了来电方法 receiveCall(); SimplePhone 为简单手机类, 提供了声音提示; JarPhone 和 ComplexPhone 分别提供了振动提示和灯光闪烁提示; PhoneDecorator 是抽象装饰者, 它维持一个对父类对象的引用。"
      },
      {
        "type": "text",
        "content": "【Java 代码】"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 装饰模式实现的手机来电提示\n * 1. Cellphone：抽象构件，声明来电方法\n * 2. SimplePhone：具体构件，只有声音提示\n * 3. PhoneDecorator：抽象装饰，既是手机，又包着一部手机\n * 4. JarPhone、ComplexPhone：具体装饰，分别加上振动和灯光\n */\n// 抽象构件：所有手机（包括装饰后的）都是 Cellphone\nabstract class Cellphone {\n    public abstract void receiveCall();\n}\n\n// 最基础的手机：来电时只发声\nclass SimplePhone extends Cellphone {\n    public void receiveCall() {\n        System.out.println(\"声音提示\");\n    }\n}\n\n// 抽象装饰：继承 Cellphone，所以装饰后仍然是手机，可以继续被装饰\nclass PhoneDecorator extends Cellphone {\n    // 第(1)空：被包在里面的手机，类型要能装下任何一种手机\n    private ____(1)____ phone = null;\n    public PhoneDecorator(Cellphone phone) {\n        // 传进来的手机不为空时\n        if(phone!= null) {\n            // 第(2)空：保存被装饰的手机\n            ____(2)____;\n        }\n        else {\n            // 没传手机时，默认包一部最基础的手机\n            this.phone = new SimplePhone();\n}\n}\n// 来电时先执行被包手机原有的提示\npublic void receiveCall() {\n    // 第(3)空：调用被包手机的来电方法\n    (3)__;\n}\n}\n\n// 具体装饰一：加振动\nclass JarPhone extends PhoneDecorator {\n    public JarPhone(Cellphone phone) {\n        // 第(4)空：把被装饰的手机交给父类保存\n        (4)__;\n    }\n    public void receiveCall() {\n        // 先完成原有提示\n        super.receiveCall();\n        System.out.println(\"振动提示\");  // 再加上自己的振动提示\n    }\n}\n\n// 具体装饰二：加灯光\nclass ComplexPhone extends PhoneDecorator {\n    public ComplexPhone(Cellphone phone) {\n        // 第(5)空：同样把被装饰的手机交给父类保存\n        (5)__;\n    }\n    public void receiveCall() {\n        // 先完成里面所有层的提示\n        super.receiveCall();\n        System.out.println(\"灯光闪烁提示\");  // 再加上灯光提示\n    }\n}\n\n// 客户端：一层层包装\nclass Client {\n    public static void main(String args[]) {\n        // 第(6)空：最基础的手机\n        Cellphone p1 = new (6) ; //创建具有声音提示的手机\n        p1.receiveCall();\n        // 第(7)空：在 p1 外面包一层振动\n        Cellphone p2 = new (7) ; //创建具有声音提示和振动提示的手机\n        p2.receiveCall();\n        // 第(8)空：在 p2 外面再包一层灯光\n        Cellphone p3 = new (8) ; //创建具有声音提示、振动提示和灯光提示的手机\n        p3.receiveCall();\n    }\n}"
      }
    ],
    "answers": [
      "(1) Cellphone; (2) this. phone = phone; (3) phone. receiveCall(); (4) super (phone); (5) super (phone); (6) SimplePhone(); (7) JarPhone(p1); (8) ComplexPhone (p2)."
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) Cellphone; (2) this. phone = phone; (3) phone. receiveCall(); (4) super (phone); (5) super (phone); (6) SimplePhone(); (7) JarPhone(p1); (8) ComplexPhone (p2)."
      }
    ],
    "roles": [
      [
        "Cellphone",
        "抽象构件，声明 receiveCall()"
      ],
      [
        "SimplePhone",
        "具体构件，只有声音提示"
      ],
      [
        "PhoneDecorator",
        "抽象装饰，继承 Cellphone 又持有一个 Cellphone"
      ],
      [
        "JarPhone、ComplexPhone",
        "具体装饰，分别加振动和灯光"
      ]
    ],
    "steps": [
      {
        "title": "第一步　看装饰器的两层关系",
        "bullets": [
          "PhoneDecorator 继承 Cellphone，所以装饰后的手机还是手机，可以再被装饰",
          "PhoneDecorator 又持有一个 Cellphone 成员 phone，它要把原来的功能转交给这个成员"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写装饰器类",
        "bullets": [
          "(1) Cellphone：被装饰的对象类型用抽象构件，简单手机和已装饰的手机都能放进来",
          "(2) this.phone = phone：保存传进来的被装饰手机",
          "(3) phone.receiveCall()：先执行被装饰手机原有的提示",
          "(4) super(phone)、(5) super(phone)：子类构造方法把被装饰对象交给父类 PhoneDecorator 保存"
        ],
        "code": ""
      },
      {
        "title": "第三步　客户端一层层套",
        "bullets": [
          "(6) SimplePhone()：最基础的手机，只有声音",
          "(7) JarPhone(p1)：在 p1 外面套一层振动，输出“声音提示、振动提示”",
          "(8) ComplexPhone(p2)：在 p2 外面再套一层灯光，输出三种提示",
          "JarPhone 的 receiveCall 先调用 super.receiveCall()，原有提示先出来，再加自己的提示"
        ],
        "code": ""
      }
    ],
    "memory": [
      "装饰器＝继承抽象构件＋持有抽象构件，具体装饰器用 super(phone) 传参",
      "客户端写法是一层套一层：new 装饰B(new 装饰A(new 基础对象()))"
    ],
    "quotes": [
      {
        "text": "该角色具有与 Component 角色相同的接口（API）。在它内部保存了被装饰对象——Component 角色。",
        "source": "12-Decorator模式.md 第305行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/12-Decorator模式.md"
  },
  {
    "id": "E3-FILL-05",
    "type": "fill",
    "source": "习题3填空题第5题",
    "category": "结构型设计模式",
    "pattern": "外观模式",
    "stem": "某信息系统要提供一个数据读取和报表显示模块,可以将来自不同类型文件中的数据转换成 XML 格式,并对数据进行统计和分析,然后以报表方式显示数据。由于该过程涉及多个类,因此使用外观模式进行设计,其类图如图 8-10 所示。",
    "materials": [
      {
        "type": "text",
        "content": "在图 8-10 中, FileOperation 类用于读取文件, XMLDataConverter 类用于将不同格式的文件转换为 XML 格式, DataAnalysis 类用于对 XML 数据进行统计分析, ReportDisplay 类用于显示报表。为了让系统具有更好的扩展性, 在系统设计中引入了抽象外观类 AbstractFacade, 它拥有多个不同的子类, 如 XMLFacade 类用于与读取、分析和显示 XML 数据的类交互, ExtendedFacade 类用于与读取、转换、分析和显示非 XML 数据的类交互。"
      },
      {
        "type": "image",
        "alt": "图8-10 填空题5类图",
        "src": "images/written/p080-b03.png"
      },
      {
        "type": "text",
        "content": "Java 代码"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 外观模式实现的数据读取和报表显示\n * 1. FileOperation、XMLDataConverter、DataAnalysis、ReportDisplay：子系统，各做一步\n * 2. AbstractFacade：抽象外观，客户端只调用它的 execute\n * 3. XMLFacade：处理 XML 文件，不需要转换\n * 4. ExtendedFacade：处理非 XML 文件，多一步转换\n * 数据流：读文件 → (转换成 XML) → 分析 → 显示，每一步的结果是下一步的输入\n * 注意：XMLDataConvertor 是原书拼写不一致，指的就是 XMLDataConverter\n */\n// 子系统一：读文件，返回文件内容字符串\nclass FileOperation {\n    public String read(String fileName) {  //读取文件代码省略 }\n}\n\n// 子系统二：把文件内容转换成 XML\nclass XMLDataConverter {\n    public String convert(String fileStr) {  //文件格式转换代码省略 }\n}\n\n// 子系统三：分析 XML 数据，返回结果\nclass DataAnalysis {\n    public String handle(String xmlStr) {  //数据分析统计代码省略 }\n}\n\n// 子系统四：把结果显示成报表\nclass ReportDisplay {\n    public void display(String xmlStr) {  //报表显示代码省略 }\n}\n\n// 第(1)空：这个类里有抽象方法，类本身要用什么修饰\n____ (1) __AbstractFacade {\n    public abstract void execute(String fileName);  // 一键完成全部处理的入口\n}\n\n// 外观一：处理本来就是 XML 的文件\nclass XMLFacade extends AbstractFacade {\n    private FileOperation fo;\n    private DataAnalysis da;\n    private ReportDisplay rd;\n\n    // 创建时准备好要用到的三个子系统对象\n    public XMLFacade() {\n        fo = new FileOperation();\n        da = new DataAnalysis();\nrd = new ReportDisplay();\n}\n\npublic void execute(String fileName) {\n    // 第(2)空：第一步，读文件\n    String str = ______(2) ______; //读取文件\n    // 第(3)空：第二步，分析上一步得到的 str\n    String strResult = ______(3) ______; //分析数据\n    // 第(4)空：第三步，显示分析结果\n    ______(4) ______; //显示报表\n}\n}\n\n// 外观二：处理非 XML 文件，要多一步转换\nclass ExtendedFacade extends AbstractFacade {\n    private FileOperation fo;\n    private XMLDataConvertor dc;\n    private DataAnalysis da;\n    private ReportDisplay rd;\n\n    public ExtendedFacade() {\n        fo = new FileOperation();\n        dc = new XMLDataConvertor();\n        da = new DataAnalysis();\n        rd = new ReportDisplay();\n    }\n\n    public void execute(String fileName) {\n        // 第(5)空：读文件\n        String str = ______(5) ______; //读取文件\n        // 第(6)空：把读到的内容转换成 XML\n        String strXml = ______(6) ______; //转换文件\n        // 第(7)空：分析的是转换后的内容\n        String strResult = ______(7) ______; //分析数据\n        // 第(8)空：显示结果\n        ______(8) ______; //显示报表\n    }\n}\n\n// 客户端：只和外观打交道\nclass Test {\n    public static void main(String args[]) {\n        AbstractFacade facade;  // 变量类型用抽象外观，换外观子类时客户端不用改\n        // 第(9)空：要处理的是 file.xml，选择对应的外观\n        facade = ______(9) ______; \n        facade.execute(\"file.xml\");  // 一行代码完成读取、分析、显示\n    }\n}"
      }
    ],
    "answers": [
      "(1) abstract class; (2) fo. read(fileName); (3) da. handle(str); (4) rd. display(strResult); (5) fo. read(fileName); (6) dc. convert(str); (7) da. handle(strXml); (8) rd. display(strResult); (9) new XMLFacade()。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) abstract class; (2) fo. read(fileName); (3) da. handle(str); (4) rd. display(strResult); (5) fo. read(fileName); (6) dc. convert(str); (7) da. handle(strXml); (8) rd. display(strResult); (9) new XMLFacade()。"
      }
    ],
    "roles": [
      [
        "FileOperation、XMLDataConverter、DataAnalysis、ReportDisplay",
        "子系统类：读文件、转 XML、分析、显示"
      ],
      [
        "AbstractFacade",
        "抽象外观，声明 execute(fileName)"
      ],
      [
        "XMLFacade",
        "具体外观，处理本来就是 XML 的文件"
      ],
      [
        "ExtendedFacade",
        "具体外观，处理非 XML 文件，多一步转换"
      ]
    ],
    "steps": [
      {
        "title": "第一步　理清数据怎么流动",
        "bullets": [
          "read 读文件得到字符串 → convert 转成 XML → handle 分析得到结果 → display 显示报表",
          "每一步的输出是下一步的输入，填空就是把变量按这个顺序传下去",
          "XML 文件不用转换，所以 XMLFacade 少一步"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写 XMLFacade",
        "bullets": [
          "(1) abstract class：AbstractFacade 里有抽象方法 execute",
          "(2) fo.read(fileName)：先读文件",
          "(3) da.handle(str)：XML 内容直接分析",
          "(4) rd.display(strResult)：显示分析结果"
        ],
        "code": ""
      },
      {
        "title": "第三步　逐空填写 ExtendedFacade 和客户端",
        "bullets": [
          "(5) fo.read(fileName)",
          "(6) dc.convert(str)：非 XML 内容先转换",
          "(7) da.handle(strXml)：分析转换后的 XML，而不是原始的 str",
          "(8) rd.display(strResult)",
          "(9) new XMLFacade()：客户端处理的是 file.xml",
          "代码中成员类型写作 XMLDataConvertor，类定义是 XMLDataConverter，属于原书拼写不一致，指的是同一个类"
        ],
        "code": ""
      },
      {
        "title": "第四步　为什么要加抽象外观",
        "bullets": [
          "客户端只声明 AbstractFacade facade，只调用 execute()",
          "要换处理流程时换一个外观子类，客户端代码不变，符合开闭原则"
        ],
        "code": ""
      }
    ],
    "memory": [
      "外观类的方法就是“按顺序调用各个子系统”，填空时顺着变量往下传",
      "引入抽象外观后，换外观子类不用改客户端"
    ],
    "quotes": [
      {
        "text": "Facade 角色是代表构成系统的许多其他角色的“简单窗口”。Facade 角色向系统外部提供高层接口（API）。",
        "source": "15-Facade模式.md 第235行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/15-Facade模式.md"
  },
  {
    "id": "E3-FILL-06",
    "type": "fill",
    "source": "习题3填空题第6题",
    "category": "结构型设计模式",
    "pattern": "享元模式",
    "stem": "某软件公司要开发一个多功能文本编辑器，在文本中可以插入图片、动画、视频等多媒体资料。为了节约系统资源，使用享元模式设计该系统，所得类图如图 8-11 所示。",
    "materials": [
      {
        "type": "text",
        "content": "在图 8-11 中, MultimediaFile 表示抽象享元, 其子类 Image、Animation 和 Video 表示具体享元; 对于相同的多媒体文件, 其大小 (Size) 和位置 (Location) 可以不同, 因此需要通过 Setter 方法来设置这些外部状态; MultimediaFileFactory 是享元工厂, 在其中定义一个 Hashtable 对象作为享元池, 存储和维护享元对象。"
      },
      {
        "type": "text",
        "content": ";"
      },
      {
        "type": "image",
        "alt": "图8-11 填空题6类图",
        "src": "images/written/p082-b04.png"
      },
      {
        "type": "text",
        "content": "【Java代码】"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 享元模式实现的多媒体文本编辑器（第一部分）\n * 1. Location、Size：外部状态，同一个文件在不同地方可以不同\n * 2. MultimediaFile：抽象享元\n * 3. Image、Animation、Video：具体享元，文件名是可共享的内部状态\n * 4. MultimediaFileFactory：享元工厂，用 Hashtable 做享元池\n */\nimport java.util.*;\n\n//位置类:外部状态类\n// 外部状态：显示位置\nclass Location {\n    private int x;\n    private int y;\n    public Location(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n    //Getter 方法和 Setter 方法省略\n}\n\n//大小类:外部状态类\n// 外部状态：显示大小\nclass Size {\n    private int width;\n    private int height;\n    public Size(int width, int height) {\n        this.width = width;\n        this.height = height;\n    }\n//Getter 方法和 Setter 方法省略\n}\n\n//多媒体文件类:抽象享元类\n// 第(1)空：这个类里有抽象方法，类本身要用什么修饰\n__(1) MultimediaFile {\nprotected Size size;  // 外部状态不在创建时写死，而是用下面的 Setter 在使用时设置\nprotected Location location;\npublic abstract void display();  // 显示文件，由具体享元实现\npublic void setSize(Size size) {\nthis.size = size;\n}\npublic void setLocation(Location location) {\nthis.location = location;\n}\n}\n\n//图片文件类:具体享元类\n// 具体享元：图片\nclass Image extends MultimediaFile {\nprivate String fileName;  // 内部状态：文件名，同一个文件可以共享\npublic Image(String fileName) {\nthis.fileName = fileName;\n}\npublic void display() {\n//导入和显示图片文件代码省略,在显示图片时将使用 size 和 location 对象\n}\n}\n\n//动画文件类:具体享元类\n// 具体享元：动画\nclass Animation extends MultimediaFile {\n//动画文件类代码省略\n}\n\n//视频文件类:具体享元类\n// 具体享元：视频\nclass Video extends MultimediaFile {\n//视频文件类代码省略\n}\n\n//多媒体文件工厂类:享元工厂类\n// 享元工厂：保证同名文件只创建一次\nclass MultimediaFileFactory {\nprivate Hashtable ht; //享元池\nprivate int fileNum = 0; //享元对象计数器\npublic MultimediaFileFactory() {\n// 第(2)空：创建享元池对象，类型和成员 ht 一致\nht = (2) ;\n}\n//从享元池中获取对象\n// 第(3)空：返回享元对象，用抽象享元类型\npublic (3) getMultimediaFile(String fileName) {\n//根据文件后缀名判断文件类型\n// 按点号拆开文件名，例如 sun.jpg 拆成 sun 和 jpg\nString[] strArray = fileName.split(\"\\\\.\");\nint ubound = strArray.length;"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 享元模式实现的多媒体文本编辑器（第二部分，接上一段）\n */\n// 取最后一段作为后缀名，用来判断文件类型\nString extendName = strArray[ubound - 1];\n\n// 享元池里已经有这个文件\nif(ht.containsKey(fileName)) {\n    // 第(4)空：直接从池里取出已有的对象\n    return (MultimediaFile)____(4)____;\n}\n// 池里没有：新建、放进池子、计数\nelse {\n    if(extendName.equalsIgnoreCase(\"gif\") || extendName.equalsIgnoreCase(\"jpg\"))\n    {\n        // gif 或 jpg：创建图片对象\n        MultimediaFile file = new Image(fileName);\n        ht.put(fileName,file);\n        fileNum++;  // 新建了一个享元对象，计数加 1\n    }\n    else if(extendName.equalsIgnoreCase(\"swf\")) {\n        // swf：创建动画对象\n        MultimediaFile file = new Animation(fileName);\n        ht.put(fileName,file);\n        // 第(5)空：和上面图片分支一样，新建后要做的事\n        ____(5)____;\n    }\n    //其他代码省略\n}\n}\n\n//返回享元对象数量\n// 返回一共创建了多少个享元对象\npublic int getFileNum() {\n    return fileNum;\n}\n}\n\n// 客户端：取四次文件，其中两次是同一个文件\nclass Test {\n    public static void main(String args[]) {\n        MultimediaFile file1,file2,file3,file4;\n        MultimediaFileFactory factory;\n        factory = new MultimediaFileFactory();\n\n        // 第一次取 sun.jpg：池里没有，新建\n        file1 = factory.getMultimediaFile(\"sun.jpg\");\n        file1.setSize(new Size(300,400));\n        file1.setLocation(new Location(3,5));  // 外部状态在使用时设置\n\n        // 第二次取 sun.jpg：池里已有，直接返回\n        file2 = factory.getMultimediaFile(\"sun.jpg\");\n        file2.setSize(new Size(300,400));\n        file2.setLocation(new Location(6,5));\n\n        // 取 star.swf：新建\n        file3 = factory.getMultimediaFile(\"star.swf\");\n        file3.setSize(new Size(200,200));\n        file3.setLocation(new Location(10,1));\n\n        // 取 moon.swf：新建\n        file4 = factory.getMultimediaFile(\"moon.swf\");\n        file4.setSize(new Size(400,400));\nfile4.setLocation(new Location(15,2));\n\n// 第(6)空的依据：file1 和 file2 是不是同一个对象\nSystem.out.println(file1 == file2);          //输出语句 1\n// 第(7)空的依据：一共新建了几个享元对象\nSystem.out.println(factory.getFileNum());   //输出语句 2\n}\n}"
      },
      {
        "type": "text",
        "content": "在 Test 类中，“输出语句 1”输出结果为 \\_\\_\\_\\_（6）\\_\\_\\_\\_，“输出语句 2”输出结果为 \\_\\_\\_\\_（7）。"
      }
    ],
    "answers": [
      "(1) abstract class; (2) new Hashtable(); (3) MultimediaFile; (4) ht. get (fileName); (5) fileNum++; (6) true; (7) 3。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) abstract class; (2) new Hashtable(); (3) MultimediaFile; (4) ht. get (fileName); (5) fileNum++; (6) true; (7) 3。"
      }
    ],
    "roles": [
      [
        "MultimediaFile",
        "抽象享元，size 和 location 是外部状态，通过 Setter 设置"
      ],
      [
        "Image、Animation、Video",
        "具体享元，文件名是可共享的内部状态"
      ],
      [
        "MultimediaFileFactory",
        "享元工厂，用 Hashtable 做享元池"
      ],
      [
        "Location、Size",
        "外部状态类"
      ]
    ],
    "steps": [
      {
        "title": "第一步　分清共享的和不共享的",
        "bullets": [
          "同一个文件（比如 sun.jpg）内容一样，可以共享同一个对象",
          "同一个文件可以出现在不同位置、显示成不同大小，所以位置和大小不能存死在共享对象里，要每次用时再设置"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写",
        "bullets": [
          "(1) abstract class：MultimediaFile 里有抽象方法 display()",
          "(2) new Hashtable()：成员 ht 的类型是 Hashtable，构造时创建享元池",
          "(3) MultimediaFile：方法返回享元对象，用抽象享元类型",
          "(4) ht.get(fileName)：池里已有就直接取出来",
          "(5) fileNum++：新建了一个享元对象，计数加 1，和上面 Image 分支写法一致"
        ],
        "code": ""
      },
      {
        "title": "第三步　推算两条输出",
        "bullets": [
          "file1 取 sun.jpg：池里没有，新建，计数 1",
          "file2 取 sun.jpg：池里已有，直接返回同一个对象，计数不变",
          "file3 取 star.swf：新建，计数 2",
          "file4 取 moon.swf：新建，计数 3",
          "(6) true：file1 和 file2 是同一个对象",
          "(7) 3：一共只创建了 3 个享元对象"
        ],
        "code": ""
      }
    ],
    "memory": [
      "享元工厂：池里有就 get，池里没有就 new、put、计数",
      "数享元个数时，同名文件只算一次"
    ],
    "quotes": [
      {
        "text": "FlyweightFactory 角色是生成 Flyweight 角色的工厂。在工厂中生成 Flyweight 角色可以实现共享实例。",
        "source": "20-Flyweight模式.md 第268行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/20-Flyweight模式.md"
  },
  {
    "id": "E3-FILL-07",
    "type": "fill",
    "source": "习题3填空题第7题",
    "category": "结构型设计模式",
    "pattern": "代理模式",
    "stem": "某信息咨询公司推出收费的在线商业信息查询模块,需要对查询用户进行身份验证并记录查询日志,以便根据查询次数收取查询费用,现使用代理模式设计该系统,所得类图如图 8-12 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图8-12 填空题7类图",
        "src": "images/written/p085-b07.png"
      },
      {
        "type": "text",
        "content": "在图 8-12 中, AccessValidator 类用于验证用户身份, 它提供方法 validate() 来实现身份验证; Logger 类用于记录用户查询日志, 它提供方法 log() 来保存日志; RealSearcher 类实现查询功能, 它提供方法 doSearch() 来查询信息; ProxySearcher 类作为查询代理, 维持对 RealSearcher 对象、AccessValidator 对象和 Logger 对象的引用。"
      },
      {
        "type": "text",
        "content": "【Java 代码】"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 代理模式实现的收费信息查询\n * 1. Searcher：抽象主题，声明查询方法\n * 2. RealSearcher：真实主题，真正执行查询\n * 3. ProxySearcher：代理，查询前验证身份、查询后记录日志\n * 4. AccessValidator、Logger：代理用到的辅助类\n */\n// 辅助类：验证用户身份\nclass AccessValidator {\n    public boolean validate(String userId) {\n        //身份验证实现代码省略\n    }\n}\n\n// 辅助类：记录查询日志，用于按次数收费\nclass Logger {\n    public void log(String userId) {\n//日志记录实现代码省略\n}\n}\n\n// 抽象主题：代理和真实查询类都实现它，客户端分不出谁是谁\ninterface Searcher {\n    public String doSearch(String userId,String keyword);\n}\n\n// 真实主题：只负责查询\nclass RealSearcher implements Searcher {\n    public String doSearch(String userId,String keyword) {\n        //信息查询实现代码省略\n    }\n}\n\n// 第(1)空：代理要和真实主题实现同一个接口\nclass ProxySearcher ____(1)__ {\n    private RealSearcher searcher = new RealSearcher();  // 代理内部持有真实查询对象\n    private AccessValidator validator;\n    private Logger logger;\n\n    // 代理的查询方法：在真实查询前后加上额外工作\n    public String doSearch(String userId,String keyword) {\n        //如果身份验证成功,则执行查询\n        // 第(2)空：先验证身份，调用代理自己的验证方法\n        if(____(2)____) {\n            String result = searcher.doSearch(userId,keyword);  // 验证通过：交给真实对象查询\n            // 第(3)空：查完记日志\n            ____(3)____;          //记录查询日志\n            // 第(4)空：把查询结果交回客户端\n            ____(4)____;          //返回查询结果\n        }\n        else {\n            return null;  // 验证失败：不查询\n        }\n    }\n\n    // 代理的验证方法：交给 AccessValidator 完成\n    public boolean validate(String userId) {\n        validator = new AccessValidator();\n        // 第(5)空：方法要返回 boolean，返回验证器的结果\n        ____(5)____;\n    }\n\n    // 代理的日志方法：交给 Logger 完成\n    public void log(String userId) {\n        logger = new Logger();\n        // 第(6)空：让 Logger 记录这个用户的日志\n        ____(6)____;\n    }\n}\n\n// 客户端\nclass Test {\n    public static void main(String args[]) {\n        // 第(7)空：声明变量 searcher，类型用抽象主题\n        ____(7)____;          //针对抽象编程,客户端无须分辨真实主题类和代理类\n        searcher = new ProxySearcher();  // 实际使用的是代理\n        // 调用查询时，自动经过验证和日志\n        String result = searcher.doSearch(\"Sunny\",\"Money\");"
      },
      {
        "type": "code",
        "language": "json",
        "content": "/**\n * 接上一段代码：客户端 Test 的结尾\n */\n//此处省略后续处理代码\n}\n}"
      }
    ],
    "answers": [
      "(1) implements Searcher; (2) validate(userId); (3) log(userId); (4) return result;\n(5) return validator.validate(userId); (6) logger.log(userId); (7) Searcher searcher。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) implements Searcher; (2) validate(userId); (3) log(userId); (4) return result;\n(5) return validator.validate(userId); (6) logger.log(userId); (7) Searcher searcher。"
      }
    ],
    "roles": [
      [
        "Searcher",
        "抽象主题，声明 doSearch()"
      ],
      [
        "RealSearcher",
        "真实主题，真正执行查询"
      ],
      [
        "ProxySearcher",
        "代理主题，查询前验证身份，查询后记录日志"
      ],
      [
        "AccessValidator、Logger",
        "代理调用的辅助类"
      ]
    ],
    "steps": [
      {
        "title": "第一步　看代理要多做哪些事",
        "bullets": [
          "真实查询只管查",
          "收费系统还要求：先验证身份，查完记日志，按次数收费",
          "这些附加工作放在代理类里，真实查询类不用改"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写代理类",
        "bullets": [
          "(1) implements Searcher：代理和真实主题实现同一个接口，客户端才能一视同仁",
          "(2) validate(userId)：调用代理自己的验证方法，通过才查询",
          "(3) log(userId)：查完记日志",
          "(4) return result：把真实查询的结果交回客户端",
          "(5) return validator.validate(userId)：验证方法要返回 boolean",
          "(6) logger.log(userId)：日志方法交给 Logger 完成"
        ],
        "code": ""
      },
      {
        "title": "第三步　客户端针对抽象编程",
        "bullets": [
          "(7) Searcher searcher：注释要求客户端分不出是真实对象还是代理，所以变量类型用接口 Searcher",
          "随后 searcher = new ProxySearcher()，调用 doSearch 时自动走验证和日志"
        ],
        "code": ""
      }
    ],
    "memory": [
      "代理和真实主题实现同一接口，代理在调用真实对象前后加料",
      "客户端变量声明成抽象主题类型"
    ],
    "quotes": [
      {
        "text": "Access Proxy 用于在调用 RealSubject 角色的功能时设置访问限制。",
        "source": "21-Proxy模式.md 第287行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/21-Proxy模式.md"
  },
  {
    "id": "E3-COMP-01",
    "type": "comprehensive",
    "source": "习题3综合题第1题",
    "category": "结构型设计模式",
    "pattern": "适配器模式",
    "stem": "实现一个双向适配器实例,使得猫(Cat)可以学狗(Dog)叫,狗可以学猫抓老鼠。绘制相应类图并使用代码编程模拟。",
    "materials": [],
    "answers": [
      "适配器模式。参考类图如图 8-14 所示。\n\n解析:在图 8-14 中，Adapter 充当适配器；Cat 和 Dog 既充当抽象目标，又充当抽象适配者。如果客户端针对 Cat 编程，则 Cat 充当抽象目标，Dog 充当抽象适配者，ConcreteDog 充当具体适配者；如果客户端针对 Dog 编程，则 Dog 充当抽象目标，Cat 充当抽象适配者，ConcreteCat 充当具体适配者。本实例使用对象适配器，Adapter 类的代码如下:\n\n![图8-14 综合题1参考类图](images/written/p089-b04.png)\n\n图8-14 综合题1参考类图\n\n```java\nclass Adapter implements Cat, Dog {\n    private Cat cat;\n    private Dog dog;\n    public void setCat(Cat cat) {\n        this.cat = cat;\n    }\n    public void setDog(Dog dog) {\n        this.dog = dog;\n    }\n    //猫学狗叫\n    public void cry() {\n        dog.wang();\n    }\n    public void catchMouse() {\n        cat.catchMouse();\n    }\n    public void wang() {\n        dog.wang();\n    }\n    //狗学猫抓老鼠\n    public void action() {\n        cat.catchMouse();\n    }\n}\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "适配器模式。参考类图如图 8-14 所示。"
      },
      {
        "type": "text",
        "content": "解析:在图 8-14 中，Adapter 充当适配器；Cat 和 Dog 既充当抽象目标，又充当抽象适配者。如果客户端针对 Cat 编程，则 Cat 充当抽象目标，Dog 充当抽象适配者，ConcreteDog 充当具体适配者；如果客户端针对 Dog 编程，则 Dog 充当抽象目标，Cat 充当抽象适配者，ConcreteCat 充当具体适配者。本实例使用对象适配器，Adapter 类的代码如下:"
      },
      {
        "type": "image",
        "alt": "图8-14 综合题1参考类图",
        "src": "images/written/p089-b04.png"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 双向适配器：同时实现 Cat 和 Dog 两个接口\n * 当作猫用时：cry() 实际执行狗的 wang()，即“猫学狗叫”\n * 当作狗用时：action() 实际执行猫的 catchMouse()，即“狗学猫抓老鼠”\n */\n// 实现两个接口：既能冒充猫，也能冒充狗\nclass Adapter implements Cat, Dog {\n    private Cat cat;  // 持有一只真正的猫\n    private Dog dog;  // 持有一只真正的狗\n    // 设置被适配的猫\n    public void setCat(Cat cat) {\n        this.cat = cat;\n    }\n    // 设置被适配的狗\n    public void setDog(Dog dog) {\n        this.dog = dog;\n    }\n    //猫学狗叫\n    // Cat 接口的“叫”\n    public void cry() {\n        dog.wang();  // 转给狗去叫\n    }\n    // Cat 接口的“抓老鼠”：交给真正的猫\n    public void catchMouse() {\n        cat.catchMouse();\n    }\n    // Dog 接口的“叫”：交给真正的狗\n    public void wang() {\n        dog.wang();\n    }\n    //狗学猫抓老鼠\n    // Dog 接口的“行动”\n    public void action() {\n        cat.catchMouse();  // 转给猫去抓老鼠\n    }\n}"
      }
    ],
    "roles": [
      [
        "Cat、Dog",
        "两个接口，既当目标又当适配者"
      ],
      [
        "ConcreteCat、ConcreteDog",
        "具体的猫和狗，是被适配的真实对象"
      ],
      [
        "Adapter",
        "双向适配器，同时实现 Cat 和 Dog，并持有一只猫和一只狗"
      ]
    ],
    "steps": [
      {
        "title": "第一步　弄清“双向”是什么意思",
        "bullets": [
          "猫学狗叫：客户端把适配器当猫用，调用 cry()，实际执行的是狗的 wang()",
          "狗学猫抓老鼠：客户端把适配器当狗用，调用 action()，实际执行的是猫的 catchMouse()",
          "同一个适配器两头都能接，所以叫双向适配器"
        ],
        "code": ""
      },
      {
        "title": "第二步　说明角色怎么随用法切换",
        "bullets": [
          "客户端针对 Cat 编程时：Cat 是目标，Dog 是适配者，ConcreteDog 是具体适配者",
          "客户端针对 Dog 编程时：Dog 是目标，Cat 是适配者，ConcreteCat 是具体适配者"
        ],
        "code": ""
      },
      {
        "title": "第三步　适配器类怎么写",
        "bullets": [
          "Adapter implements Cat, Dog：两个接口都实现，才能两头冒充",
          "成员 cat、dog 加上 setCat、setDog：持有对方对象，这是对象适配器",
          "cry() 里调用 dog.wang()；action() 里调用 cat.catchMouse()",
          "catchMouse() 和 wang() 交给原来的猫和狗自己做"
        ],
        "code": "/**\n * 双向适配器中最关键的两个方法\n */\npublic void cry() { dog.wang(); }        // 猫学狗叫\npublic void action() { cat.catchMouse(); } // 狗学猫抓老鼠"
      },
      {
        "title": "第四步　写在试卷上的答案要点",
        "bullets": [
          "画出 Cat、Dog 两个接口及各自的实现类，Adapter 同时实现两个接口，并关联 Cat 和 Dog",
          "说明两种使用方式下目标和适配者的对应关系",
          "给出 Adapter 代码，指出使用的是对象适配器"
        ],
        "code": ""
      }
    ],
    "memory": [
      "双向适配器＝同时实现两个目标接口＋同时持有两个适配者对象",
      "谁被客户端当作接口用，谁就是目标"
    ],
    "quotes": [
      {
        "text": "如果客户端针对 Cat 编程，则 Cat 充当抽象目标，Dog 充当抽象适配者，ConcreteDog 充当具体适配者",
        "source": "08-2-结构型设计模式-参考答案及习题解析.md 第38行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/02-Adapter模式.md"
  },
  {
    "id": "E3-COMP-02",
    "type": "comprehensive",
    "source": "习题3综合题第2题",
    "category": "结构型设计模式",
    "pattern": "桥接模式",
    "stem": "海尔（Haier）、TCL、海信（Hisense）都是家电制造商，它们都生产电视机（Television）、空调（Air Conditioner）、冰箱（Refrigeratory）。现要设计一个系统，描述这些家电制造商以及他们所制造的电器，要求绘制类图并用代码模拟实现。",
    "materials": [],
    "answers": [
      "桥接模式。参考类图如图 8-15 所示。\n\n解析:在图 8-15 中，Manufacturer 充当抽象类角色，Haier、TCL 和 Hisense 充当扩充抽象类角色，Appliance 充当抽象实现类，Television、AirConditioner 和 Refrigeratory 充当具体实现类。本实例部分代码如下:\n\n![图8-15 综合题2参考类图](images/written/p090-b03.png)\n\n图8-15 综合题2参考类图\n\n```java\nabstract class Manufacturer {\n    protected Appliance appliance;\n    public abstract void produce();\n    public void setAppliance(Appliance appliance) {\n        this.appliance = appliance;\n    }\n}\n\nclass Haier extends Manufacturer {\n    public void produce() {\n        System.out.println(\"生产海尔电器!\");\n        appliance.assemble();      //调用实现类的业务方法\n    }\n}\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "桥接模式。参考类图如图 8-15 所示。"
      },
      {
        "type": "text",
        "content": "解析:在图 8-15 中，Manufacturer 充当抽象类角色，Haier、TCL 和 Hisense 充当扩充抽象类角色，Appliance 充当抽象实现类，Television、AirConditioner 和 Refrigeratory 充当具体实现类。本实例部分代码如下:"
      },
      {
        "type": "image",
        "alt": "图8-15 综合题2参考类图",
        "src": "images/written/p090-b03.png"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 桥接模式实现的家电制造商\n * 维度一：制造商 Manufacturer → Haier、TCL、Hisense\n * 维度二：电器 Appliance → Television、AirConditioner、Refrigeratory\n * 制造商持有一个电器对象，两个维度可以自由搭配\n */\n// 抽象类：表示制造商\nabstract class Manufacturer {\n    protected Appliance appliance;  // 桥：持有一个电器接口，具体是哪种电器运行时再设置\n    public abstract void produce();  // 生产电器，由各个制造商实现\n    // 设置要生产的电器\n    public void setAppliance(Appliance appliance) {\n        this.appliance = appliance;\n    }\n}\n\n// 扩充抽象类：海尔\nclass Haier extends Manufacturer {\n    public void produce() {\n        // 先做制造商自己的部分\n        System.out.println(\"生产海尔电器!\");\n        appliance.assemble();      //调用实现类的业务方法\n    }\n}"
      }
    ],
    "roles": [
      [
        "Manufacturer",
        "抽象类，表示制造商，持有 Appliance"
      ],
      [
        "Haier、TCL、Hisense",
        "扩充抽象类，具体的制造商"
      ],
      [
        "Appliance",
        "实现类接口，表示电器，声明 assemble()"
      ],
      [
        "Television、AirConditioner、Refrigeratory",
        "具体实现类，具体的电器"
      ]
    ],
    "steps": [
      {
        "title": "第一步　找出两个维度",
        "bullets": [
          "维度一：制造商，有海尔、TCL、海信",
          "维度二：电器种类，有电视、空调、冰箱",
          "任意制造商都能生产任意电器，两个维度可以自由组合，而且以后都可能增加"
        ],
        "code": ""
      },
      {
        "title": "第二步　为什么不用继承",
        "bullets": [
          "如果为每种组合写一个类（海尔电视、TCL 空调……），要 3 × 3 = 9 个类",
          "以后每加一个品牌或一种电器，类数都会成倍增长",
          "桥接模式让两个维度各自成一棵继承树，再用关联连起来，类数只是相加"
        ],
        "code": ""
      },
      {
        "title": "第三步　类和对象如何协作",
        "bullets": [
          "Manufacturer 持有一个 Appliance 成员，通过 setAppliance() 设置要生产的电器",
          "Haier 的 produce() 先输出“生产海尔电器!”，再调用 appliance.assemble() 让电器完成组装",
          "客户端：new Haier()，setAppliance(new Television())，再 produce()，就得到海尔电视"
        ],
        "code": ""
      },
      {
        "title": "第四步　扩展时改哪里",
        "bullets": [
          "加一个品牌（如格力）：只加一个 Manufacturer 的子类",
          "加一种电器（如洗衣机）：只加一个 Appliance 的实现类",
          "两边互不影响，原有类都不用改"
        ],
        "code": ""
      }
    ],
    "memory": [
      "“谁 × 生产什么”两个维度自由组合，就用桥接",
      "抽象类那一侧持有实现接口，业务方法里调用 appliance.assemble()"
    ],
    "quotes": [
      {
        "text": "解析:在图 8-15 中，Manufacturer 充当抽象类角色，Haier、TCL 和 Hisense 充当扩充抽象类角色，Appliance 充当抽象实现类，Television、AirConditioner 和 Refrigeratory 充当具体实现类。",
        "source": "08-2-结构型设计模式-参考答案及习题解析.md 第75行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/09-Bridge模式.md"
  },
  {
    "id": "E3-COMP-03",
    "type": "comprehensive",
    "source": "习题3综合题第3题",
    "category": "结构型设计模式",
    "pattern": "组合模式",
    "stem": "某教育机构组织结构如图 8-13 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图 8-13 某教育机构组织结构图",
        "src": "images/written/p087-b09.png"
      },
      {
        "type": "text",
        "content": "在该教育机构的 OA 系统中可以给各级办公室下发公文,现采用组合模式设计该机构的组织结构,绘制相应的类图并编程模拟实现,在客户端代码中模拟下发公文。"
      }
    ],
    "answers": [
      "组合模式。参考类图如图 8-16 所示。\n\n![图 8-16 综合题 3 参考类图](images/written/p090-b07.png)\n\n图 8-16 综合题 3 参考类图\n\n解析:本实例使用了安全组合模式。在图 8-16 中，Unit 充当抽象构件角色，Office 充当叶子构件角色，Institution 充当容器构件角色。本实例代码如下:\n\n```java\nabstract class Unit {\n    public abstract void handleArchives();\n}\n\nclass Office extends Unit {\n    private String name;\n    public Office(String name) {\n        this.name = name;\n    }\n    public void handleArchives() {\n        System.out.println(this.name + \"处理公文!\");\n    }\n}\n\nclass Institution extends Unit {\n    private ArrayList list = new ArrayList();\n    private String name;\n    public Institution(String name) {\n        this.name = name;\n    }\n    public void add(Unit unit) {\n        list.add(unit);\n    }\n    public void handleArchives() {\n        System.out.println(this.name + \"接收并下发公文:\");\n        for(Object obj : list) {\n            ((Unit)obj).handleArchives();\n        }\n    }\n}\n```\n\n在客户类中创建树形结构,代码如下所示:\n\n```java\nclass Client {\n    public static void main(String args[]) {\n        Institution bjHeadquarters,hnSubSchool,csTeachingPost,xtTeachingPost;\n        Unit tOffice1,tOffice2,tOffice3,tOffice4,aOffice1,aOffice2,aOffice3,aOffice4;\n        bjHeadquarters = new Institution(\"北京总部\");\n        hnSubSchool = new Institution(\"湖南分校\");\n        csTeachingPost = new Institution(\"长沙教学点\");\n        xtTeachingPost = new Institution(\"湘潭教学点\");\n        tOffice1 = new Office(\"北京教务办公室\");\n        tOffice2 = new Office(\"湖南教务办公室\");\n        tOffice3 = new Office(\"长沙教务办公室\");\n        tOffice4 = new Office(\"湘潭教务办公室\");\naOffice1 = new Office(\"北京行政办公室\");\naOffice2 = new Office(\"湖南行政办公室\");\naOffice3 = new Office(\"长沙行政办公室\");\naOffice4 = new Office(\"湘潭行政办公室\");\ncsTeachingPost.add(tOffice3);\ncsTeachingPost.add(aOffice3);\nxtTeachingPost.add(tOffice4);\nxtTeachingPost.add(aOffice4);\nhnSubSchool.add(csTeachingPost);\nhnSubSchool.add(xtTeachingPost);\nhnSubSchool.add(tOffice2);\nhnSubSchool.add(aOffice2);\nbjHeadquarters.add(hnSubSchool);\nbjHeadquarters.add(tOffice1);\nbjHeadquarters.add(aOffice1);\nbjHeadquarters.handleArchives();\n}\n}\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "组合模式。参考类图如图 8-16 所示。"
      },
      {
        "type": "image",
        "alt": "图 8-16 综合题 3 参考类图",
        "src": "images/written/p090-b07.png"
      },
      {
        "type": "text",
        "content": "解析:本实例使用了安全组合模式。在图 8-16 中，Unit 充当抽象构件角色，Office 充当叶子构件角色，Institution 充当容器构件角色。本实例代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 组合模式实现的公文下发（安全组合模式）\n * 1. Unit：抽象构件，只声明处理公文的方法\n * 2. Office：叶子构件，办公室，直接处理公文\n * 3. Institution：容器构件，机构，先接收再下发给所有下级\n * add 方法只定义在 Institution 中，办公室没有 add，避免误往叶子里加东西\n */\n// 抽象构件：机构和办公室的共同父类\nabstract class Unit {\n    public abstract void handleArchives();\n}\n\n// 叶子构件：办公室\nclass Office extends Unit {\n    private String name;\n    public Office(String name) {\n        this.name = name;\n    }\n    // 办公室收到公文后直接处理\n    public void handleArchives() {\n        System.out.println(this.name + \"处理公文!\");\n    }\n}\n\n// 容器构件：总部、分校、教学点\nclass Institution extends Unit {\n    private ArrayList list = new ArrayList();  // 保存下级单位，可能是办公室，也可能是下级机构\n    private String name;\n    public Institution(String name) {\n        this.name = name;\n    }\n    // 添加下级单位\n    public void add(Unit unit) {\n        list.add(unit);\n    }\n    // 机构收到公文：先输出自己接收，再逐个下发\n    public void handleArchives() {\n        System.out.println(this.name + \"接收并下发公文:\");\n        // 遍历所有下级\n        for(Object obj : list) {\n            ((Unit)obj).handleArchives();  // 下级如果也是机构，会继续往下发，形成递归\n        }\n    }\n}"
      },
      {
        "type": "text",
        "content": "在客户类中创建树形结构,代码如下所示:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：按组织结构图搭树，再从总部下发公文\n */\nclass Client {\n    public static void main(String args[]) {\n        // 四个机构：总部、分校、两个教学点\n        Institution bjHeadquarters,hnSubSchool,csTeachingPost,xtTeachingPost;\n        // 八个办公室：t 开头是教务办公室，a 开头是行政办公室\n        Unit tOffice1,tOffice2,tOffice3,tOffice4,aOffice1,aOffice2,aOffice3,aOffice4;\n        // 创建机构\n        bjHeadquarters = new Institution(\"北京总部\");\n        hnSubSchool = new Institution(\"湖南分校\");\n        csTeachingPost = new Institution(\"长沙教学点\");\n        xtTeachingPost = new Institution(\"湘潭教学点\");\n        // 创建办公室\n        tOffice1 = new Office(\"北京教务办公室\");\n        tOffice2 = new Office(\"湖南教务办公室\");\n        tOffice3 = new Office(\"长沙教务办公室\");\n        tOffice4 = new Office(\"湘潭教务办公室\");\naOffice1 = new Office(\"北京行政办公室\");\naOffice2 = new Office(\"湖南行政办公室\");\naOffice3 = new Office(\"长沙行政办公室\");\naOffice4 = new Office(\"湘潭行政办公室\");\n// 长沙教学点下面挂两个办公室\ncsTeachingPost.add(tOffice3);\ncsTeachingPost.add(aOffice3);\n// 湘潭教学点下面挂两个办公室\nxtTeachingPost.add(tOffice4);\nxtTeachingPost.add(aOffice4);\n// 湖南分校下面挂两个教学点和两个办公室\nhnSubSchool.add(csTeachingPost);\nhnSubSchool.add(xtTeachingPost);\nhnSubSchool.add(tOffice2);\nhnSubSchool.add(aOffice2);\n// 北京总部下面挂湖南分校和两个办公室\nbjHeadquarters.add(hnSubSchool);\nbjHeadquarters.add(tOffice1);\nbjHeadquarters.add(aOffice1);\n// 从树根下发公文，会一路传到所有办公室\nbjHeadquarters.handleArchives();\n}\n}"
      }
    ],
    "roles": [
      [
        "Unit",
        "抽象构件，声明 handleArchives()"
      ],
      [
        "Office",
        "叶子构件，教务办公室、行政办公室"
      ],
      [
        "Institution",
        "容器构件，总部、分校、教学点"
      ]
    ],
    "steps": [
      {
        "title": "第一步　把组织结构图看成一棵树",
        "bullets": [
          "北京总部下面有湖南分校和两个办公室",
          "湖南分校下面有长沙、湘潭两个教学点和两个办公室",
          "每个教学点下面又各有两个办公室",
          "办公室是最底层，不能再往下挂单位，是叶子；其他单位都能挂下级，是容器"
        ],
        "code": ""
      },
      {
        "title": "第二步　下发公文为什么适合组合模式",
        "bullets": [
          "给任何一级单位发公文，这个单位都要把公文继续发给下面所有单位",
          "不管收到公文的是机构还是办公室，客户端都只调用 handleArchives()",
          "机构收到后递归调用下级的 handleArchives()，办公室收到后直接处理"
        ],
        "code": ""
      },
      {
        "title": "第三步　类怎么写",
        "bullets": [
          "Unit 是抽象类，只声明 handleArchives()",
          "Office 实现 handleArchives()：输出“xx 处理公文!”",
          "Institution 用一个 list 保存下级 Unit，add() 只定义在 Institution 中；handleArchives() 先输出“接收并下发公文”，再遍历 list 逐个调用",
          "add() 不放在 Unit 里，叶子就没有 add 方法，避免对叶子误调用，这叫安全组合模式"
        ],
        "code": ""
      },
      {
        "title": "第四步　客户端模拟下发",
        "bullets": [
          "按组织结构图依次 add，把树搭起来",
          "最后调用 bjHeadquarters.handleArchives()，公文从总部一路传到所有办公室"
        ],
        "code": ""
      }
    ],
    "memory": [
      "容器的业务方法＝做自己的事＋遍历子节点调用同名方法",
      "add 只放在容器里是安全组合，放在抽象构件里是透明组合"
    ],
    "quotes": [
      {
        "text": "解析:本实例使用了安全组合模式。在图 8-16 中，Unit 充当抽象构件角色，Office 充当叶子构件角色，Institution 充当容器构件角色。",
        "source": "08-2-结构型设计模式-参考答案及习题解析.md 第108行"
      },
      {
        "text": "因为只有 Directory 类可以使用 add 方法，所以可以不在 Entry 类中定义 add 方法，而是只将其定义在 Directory 类中。",
        "source": "11-Composite模式.md 第362行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/11-Composite模式.md"
  },
  {
    "id": "E3-COMP-04",
    "type": "comprehensive",
    "source": "习题3综合题第4题",
    "category": "结构型设计模式",
    "pattern": "装饰模式",
    "stem": "某系统中的文本显示组件类(TextView)和图片显示组件类(PictureView)都继承了组件类(Component)，分别用于显示文本内容和图片内容。现要构造带有滚动条，或者带有黑色边框，或者既有滚动条又有黑色边框的文本显示组件和图片显示组件，为了减少类的个数可使用装饰模式进行设计，绘制类图并编程模拟实现。",
    "materials": [],
    "answers": [
      "装饰模式。参考类图如图 8-17 所示。\n\n![图8-17 综合题4参考类图](images/written/p092-b05.png)\n\n图8-17 综合题4参考类图\n\n解析:本实例使用了透明装饰模式。在图 8-17 中, Component 充当抽象组件角色, TextView 和 PictureView 充当具体组件角色, Decorator 充当抽象装饰角色, ScrollBarDecorator 和 BlackBorderDecorator 充当具体装饰角色。其中, Decorator 类和 ScrollBarDecorator 类示例代码如下:\n\n```java\nclass Decorator extends Component {\n    private Component component;\n    public Decorator(Component component) {\nthis.component = component;\n}\npublic void display() {\n    component.display();\n}\n}\n\nclass ScrollBarDecorator extends Decorator {\n    public ScrollBarDecorator(Component component) {\n        super(component);\n    }\n    public void display() {\n        System.out.println(\"增加滚动条\");\n        super.display();\n    }\n}\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "装饰模式。参考类图如图 8-17 所示。"
      },
      {
        "type": "image",
        "alt": "图8-17 综合题4参考类图",
        "src": "images/written/p092-b05.png"
      },
      {
        "type": "text",
        "content": "解析:本实例使用了透明装饰模式。在图 8-17 中, Component 充当抽象组件角色, TextView 和 PictureView 充当具体组件角色, Decorator 充当抽象装饰角色, ScrollBarDecorator 和 BlackBorderDecorator 充当具体装饰角色。其中, Decorator 类和 ScrollBarDecorator 类示例代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 装饰模式实现的带滚动条、带边框组件\n * 1. Decorator：抽象装饰，继承 Component 并持有一个 Component\n * 2. ScrollBarDecorator：具体装饰，加滚动条\n * 黑边框装饰 BlackBorderDecorator 写法相同，原书省略\n */\n// 继承 Component：装饰后仍然是组件，可以继续被装饰\nclass Decorator extends Component {\n    private Component component;  // 被装饰的组件，可能是文本、图片，也可能是已经装饰过的组件\n    // 构造时传入要装饰的组件\n    public Decorator(Component component) {\nthis.component = component;\n}\n// 默认做法：原样转交给被装饰的组件\npublic void display() {\n    component.display();\n}\n}\n\n// 具体装饰：加滚动条\nclass ScrollBarDecorator extends Decorator {\n    public ScrollBarDecorator(Component component) {\n        super(component);  // 把被装饰的组件交给父类保存\n    }\n    // 先加上自己的功能，再显示原组件\n    public void display() {\n        System.out.println(\"增加滚动条\");  // 新增的功能\n        super.display();  // 调用原组件的显示\n    }\n}"
      }
    ],
    "roles": [
      [
        "Component",
        "抽象组件，声明 display()"
      ],
      [
        "TextView、PictureView",
        "具体组件，显示文本或图片"
      ],
      [
        "Decorator",
        "抽象装饰，继承 Component 并持有一个 Component"
      ],
      [
        "ScrollBarDecorator、BlackBorderDecorator",
        "具体装饰，加滚动条、加黑边框"
      ]
    ],
    "steps": [
      {
        "title": "第一步　算一算用继承要多少类",
        "bullets": [
          "两种组件 × 三种外观（滚动条、黑边框、两者都有）= 6 个子类",
          "以后再加一种组件或一种装饰，子类数还会成倍增加",
          "题目明确要求减少类的个数，所以改用装饰模式"
        ],
        "code": ""
      },
      {
        "title": "第二步　装饰模式怎么减少类",
        "bullets": [
          "每种装饰只写一个类：一个滚动条装饰，一个黑边框装饰",
          "装饰类能包住任何 Component，所以对文本和图片都能用",
          "既要滚动条又要黑边框，就把两个装饰叠起来：new BlackBorderDecorator(new ScrollBarDecorator(new TextView()))"
        ],
        "code": ""
      },
      {
        "title": "第三步　关键代码",
        "bullets": [
          "Decorator 保存被装饰的 component，display() 里转调 component.display()",
          "ScrollBarDecorator 构造方法用 super(component) 交给父类保存，display() 先加滚动条再调用 super.display()",
          "客户端把变量都声明成 Component，看不出有没有被装饰，这叫透明装饰模式"
        ],
        "code": ""
      },
      {
        "title": "第四步　扩展时改哪里",
        "bullets": [
          "加一种新装饰（如阴影）：加一个 Decorator 的子类",
          "加一种新组件（如表格）：加一个 Component 的子类，现有装饰都能直接用在它上面"
        ],
        "code": ""
      }
    ],
    "memory": [
      "装饰模式把“组件数 × 装饰组合数”的子类，变成“组件数 + 装饰数”个类",
      "叠加多个功能就一层层嵌套构造"
    ],
    "quotes": [
      {
        "text": "解析:本实例使用了透明装饰模式。",
        "source": "08-2-结构型设计模式-参考答案及习题解析.md 第186行"
      },
      {
        "text": "Decorator 模式可以在不改变被装饰物的接口（API）的前提下，为被装饰物添加边框（透明性）。",
        "source": "12-Decorator模式.md 第415行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/12-Decorator模式.md"
  },
  {
    "id": "E3-COMP-05",
    "type": "comprehensive",
    "source": "习题3综合题第5题",
    "category": "结构型设计模式",
    "pattern": "外观模式",
    "stem": "在计算机主机(Mainframe)中, 只需要按下主机的开机按钮(on()), 即可调用其他硬件设备和软件的启动方法, 如内存(Memory)的自检(check())、CPU 的运行(run())、硬盘(HardDisk)的读取(read())、操作系统(OS)的载入(load())等, 如果某一过程发生错误则计算机启动失败。使用外观模式模拟该过程, 绘制类图并编程模拟实现。",
    "materials": [],
    "answers": [
      "外观模式。参考类图如图 8-18 所示。\n\n![图8-18 综合题5参考类图](images/written/p093-b06.png)\n\n图8-18 综合题5参考类图\n\n解析:在图 8-18 中，Mainframe 充当外观角色，Memory、CPU、HardDisk 和 OS 充当子系统角色。其中，Mainframe 类代码如下:\n\n```java\nclass Mainframe {\n    private Memory memory;\n    private CPU cpu;\n    private HardDisk harddisk;\n    private OS os;\n    public Mainframe() {\n        memory = new Memory();\n        cpu = new CPU();\n        harddisk = new HardDisk();\n        os = new OS();\n    }\npublic void on() {\n    try {\n        memory.check();\n        cpu.run();\n        harddisk.read();\n        os.load();\n    }\n    catch(Exception e) {\n        System.out.println(\"启动失败!\");\n    }\n}\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "外观模式。参考类图如图 8-18 所示。"
      },
      {
        "type": "image",
        "alt": "图8-18 综合题5参考类图",
        "src": "images/written/p093-b06.png"
      },
      {
        "type": "text",
        "content": "解析:在图 8-18 中，Mainframe 充当外观角色，Memory、CPU、HardDisk 和 OS 充当子系统角色。其中，Mainframe 类代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 外观模式：主机 Mainframe 提供一键开机\n * 用户只调用 on()，内部依次调用内存、CPU、硬盘、操作系统四个子系统\n */\nclass Mainframe {\n    private Memory memory;  // 子系统：内存\n    private CPU cpu;  // 子系统：CPU\n    private HardDisk harddisk;  // 子系统：硬盘\n    private OS os;  // 子系统：操作系统\n    // 创建主机时准备好所有子系统对象\n    public Mainframe() {\n        memory = new Memory();\n        cpu = new CPU();\n        harddisk = new HardDisk();\n        os = new OS();\n    }\n// 开机按钮：按固定顺序调用各子系统\npublic void on() {\n    try {\n        memory.check();  // 1. 内存自检\n        cpu.run();  // 2. CPU 运行\n        harddisk.read();  // 3. 硬盘读取\n        os.load();  // 4. 载入操作系统\n    }\n    // 任何一步出错都会跳到这里，表示启动失败\n    catch(Exception e) {\n        System.out.println(\"启动失败!\");\n    }\n}"
      }
    ],
    "roles": [
      [
        "Mainframe",
        "外观，提供 on() 一键开机"
      ],
      [
        "Memory、CPU、HardDisk、OS",
        "子系统，分别有 check()、run()、read()、load()"
      ]
    ],
    "steps": [
      {
        "title": "第一步　找出复杂的部分",
        "bullets": [
          "开机要依次做四件事：内存自检、CPU 运行、硬盘读取、系统载入",
          "如果让用户自己逐个调用，用户要认识四个类，还要记住顺序",
          "用户真正想要的只是“按一下开机键”"
        ],
        "code": ""
      },
      {
        "title": "第二步　外观类怎么分工",
        "bullets": [
          "Mainframe 在构造方法里创建四个子系统对象并保存为成员",
          "on() 按顺序调用 memory.check()、cpu.run()、harddisk.read()、os.load()",
          "整个过程放在 try 里，任一步抛出异常就输出“启动失败!”，对应题目“某一过程出错则启动失败”"
        ],
        "code": ""
      },
      {
        "title": "第三步　类图怎么画",
        "bullets": [
          "Mainframe 用关联箭头分别指向 Memory、CPU、HardDisk、OS",
          "四个子系统类之间没有关系，也不知道 Mainframe 的存在"
        ],
        "code": ""
      },
      {
        "title": "第四步　这样设计解决了什么问题",
        "bullets": [
          "客户端只和 Mainframe 打交道，调用一个 on() 就完成开机",
          "以后开机流程变了，只改 Mainframe.on()，客户端不受影响"
        ],
        "code": ""
      }
    ],
    "memory": [
      "外观类＝持有多个子系统对象＋一个按顺序调用它们的高层方法",
      "子系统不知道外观存在，外观单方面调用子系统"
    ],
    "quotes": [
      {
        "text": "解析:在图 8-18 中，Mainframe 充当外观角色，Memory、CPU、HardDisk 和 OS 充当子系统角色。",
        "source": "08-2-结构型设计模式-参考答案及习题解析.md 第218行"
      },
      {
        "text": "在 Facade 模式中，Facade 角色单方面地使用其他角色来提供高层接口（API）。",
        "source": "15-Facade模式.md 第297行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/15-Facade模式.md"
  },
  {
    "id": "E3-COMP-06",
    "type": "comprehensive",
    "source": "习题3综合题第6题",
    "category": "结构型设计模式",
    "pattern": "享元模式",
    "stem": "在屏幕中显示一个文本文档, 其中相同的字符串“Java”共享同一个对象, 而这些字符串的颜色和大小可以不同。现使用享元模式设计一个方案实现字符串对象的共享, 要求绘制类图并编程实现。",
    "materials": [],
    "answers": [
      "享元模式。参考类图如图 8-19 所示。\n\n![图 8-19 综合题 6 参考类图](images/written/p094-b05.png)\n\n图 8-19 综合题 6 参考类图\n\n解析:在图 8-19 中，省略了抽象享元角色，SharedString 充当具体享元角色，SharedStringFactory 充当享元工厂角色，Color 和 Size 充当外部状态类。本实例代码如下:\n\n```java\nimport java.util.*;\nclass Color {\n    private String color;\n    public Color(String color) {\n        this.color = color;\n    }\n    public void setColor(String color) {\n        this.color = color;\n    }\n    public String getColor() {\n        return this.color;\n    }\n}\nclass Size {\n    private int value;\n    public Size(int value) {\n        this.value = value;\n    }\n    public void setValue(int value) {\n        this.value = value;\n    }\n    public int getValue() {\n        return this.value;\n    }\n}\n\nclass SharedString {\n    private String content;\n    private Color color;\n    private Size size;\n    public SharedString(String content) {\n        this.content = content;\n    }\n    public void setColor(Color color) {\n        this.color = color;\n    }\n    public void setSize(Size size) {\n        this.size = size;\n    }\n    public void display() {\n        System.out.println(\"内容:\" + this.content + \",颜色:\" + this.coloraffle() + \",大小:\" + this.size.getValue());\n    }\n}\n\nclass SharedStringFactory {\n    private Hashtable ht;\n    public SharedStringFactory() {\n        ht = new Hashtable();\n    }\n    public SharedString getSharedString(String arg) {\n        if(ht.containsKey(arg)) {\n            return (SharedString)ht.get(arg);\n        }\n        else {\n            SharedString str = new SharedString(arg);\n            ht.put(arg,str);\n            return (SharedString)ht.get(arg);\n        }\n    }\n}\n```\n\n在客户类中,如果需要显示两个颜色和大小不同的字符串“Java”,代码如下所示:\n\n```java\nclass Client {\n    public static void main(String args[]) {\n        SharedString str1,str2;\n        SharedStringFactory factory = new SharedStringFactory();\n        str1 = factory.getSharedString(\"Java\");\n        str1.setColor(new Color(\"红色\"));\n        str1.setSize(new Size(5));\n        str1.display();                      //输出\"内容:Java,颜色:红色,大小:5\"\n        str2 = factory.getSharedString(\"Java\");\n        str2.setColor(new Color(\"黑色\"));\n        str2.setSize(new Size(10));\n        str2.display();                      //输出\"内容:Java,颜色:黑色,大小:10\"\n        System.out.println(str1 == str2);    //输出\"true\"\n    }\n}\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "享元模式。参考类图如图 8-19 所示。"
      },
      {
        "type": "image",
        "alt": "图 8-19 综合题 6 参考类图",
        "src": "images/written/p094-b05.png"
      },
      {
        "type": "text",
        "content": "解析:在图 8-19 中，省略了抽象享元角色，SharedString 充当具体享元角色，SharedStringFactory 充当享元工厂角色，Color 和 Size 充当外部状态类。本实例代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 享元模式实现的字符串共享\n * 1. Color、Size：外部状态类，每次显示前设置\n * 2. SharedString：具体享元，content 是共享的内部状态\n * 3. SharedStringFactory：享元工厂，相同内容只创建一个对象\n * 注意：display() 中的 this.coloraffle() 是原书识别错误，按 Color 类应为 this.color.getColor()\n */\nimport java.util.*;\n// 外部状态：颜色\nclass Color {\n    private String color;\n    public Color(String color) {\n        this.color = color;\n    }\n    public void setColor(String color) {\n        this.color = color;\n    }\n    public String getColor() {\n        return this.color;\n    }\n}\n// 外部状态：大小\nclass Size {\n    private int value;\n    public Size(int value) {\n        this.value = value;\n    }\n    public void setValue(int value) {\n        this.value = value;\n    }\n    public int getValue() {\n        return this.value;\n    }\n}\n\n// 具体享元：被共享的字符串对象\nclass SharedString {\n    private String content;  // 内部状态：字符串内容，可以共享\n    private Color color;  // 外部状态：颜色，使用前设置\n    private Size size;  // 外部状态：大小，使用前设置\n    public SharedString(String content) {\n        this.content = content;\n    }\n    public void setColor(Color color) {\n        this.color = color;\n    }\n    public void setSize(Size size) {\n        this.size = size;\n    }\n    // 显示：内容来自内部状态，颜色和大小来自外部状态\n    public void display() {\n        System.out.println(\"内容:\" + this.content + \",颜色:\" + this.coloraffle() + \",大小:\" + this.size.getValue());\n    }\n}\n\n// 享元工厂\nclass SharedStringFactory {\n    private Hashtable ht;  // 享元池：键是字符串内容，值是共享对象\n    public SharedStringFactory() {\n        ht = new Hashtable();\n    }\n    public SharedString getSharedString(String arg) {\n        // 池里已有这个内容：直接返回同一个对象\n        if(ht.containsKey(arg)) {\n            return (SharedString)ht.get(arg);\n        }\n        // 池里没有：新建、放进池子、再返回\n        else {\n            SharedString str = new SharedString(arg);\n            ht.put(arg,str);\n            return (SharedString)ht.get(arg);\n        }\n    }\n}"
      },
      {
        "type": "text",
        "content": "在客户类中,如果需要显示两个颜色和大小不同的字符串“Java”,代码如下所示:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：显示两个颜色和大小不同的 \"Java\"\n */\nclass Client {\n    public static void main(String args[]) {\n        SharedString str1,str2;\n        SharedStringFactory factory = new SharedStringFactory();\n        // 第一次取 \"Java\"：工厂新建\n        str1 = factory.getSharedString(\"Java\");\n        // 设置外部状态：红色、大小 5\n        str1.setColor(new Color(\"红色\"));\n        str1.setSize(new Size(5));\n        str1.display();                      //输出\"内容:Java,颜色:红色,大小:5\"\n        // 第二次取 \"Java\"：工厂返回同一个对象\n        str2 = factory.getSharedString(\"Java\");\n        // 重新设置外部状态：黑色、大小 10\n        str2.setColor(new Color(\"黑色\"));\n        str2.setSize(new Size(10));\n        str2.display();                      //输出\"内容:Java,颜色:黑色,大小:10\"\n        // 两个变量指向同一个对象，说明共享成功\n        System.out.println(str1 == str2);    //输出\"true\"\n    }\n}"
      }
    ],
    "roles": [
      [
        "SharedString",
        "具体享元，content（字符串内容）是共享的内部状态"
      ],
      [
        "SharedStringFactory",
        "享元工厂，用 Hashtable 保存已创建的字符串对象"
      ],
      [
        "Color、Size",
        "外部状态类，每次显示前设置"
      ]
    ],
    "steps": [
      {
        "title": "第一步　分清内部状态和外部状态",
        "bullets": [
          "文档里的“Java”内容都一样，这部分可以共享，是内部状态",
          "每处“Java”的颜色、大小可以不同，不能共享，是外部状态",
          "所以 SharedString 里固定保存 content，颜色和大小用 setColor、setSize 在使用时传入"
        ],
        "code": ""
      },
      {
        "title": "第二步　享元工厂怎么保证共享",
        "bullets": [
          "getSharedString(arg) 先查 Hashtable",
          "已经有这个字符串就直接返回池里的对象",
          "没有就新建一个，放进池里再返回",
          "这道题没有多种字符串对象类型，所以省略了抽象享元角色"
        ],
        "code": ""
      },
      {
        "title": "第三步　客户端演示",
        "bullets": [
          "str1、str2 都通过工厂取“Java”，拿到的是同一个对象，所以 str1 == str2 输出 true",
          "每次 display 前先设置颜色和大小，所以两次输出的颜色、大小不同",
          "参考代码 display() 中的 this.coloraffle() 是识别错误，按 Color 类的定义应理解为取颜色值的 getColor() 调用"
        ],
        "code": ""
      },
      {
        "title": "第四步　写在试卷上的答案要点",
        "bullets": [
          "画出 SharedStringFactory 聚合 SharedString，SharedString 关联 Color、Size",
          "说明 content 是内部状态，Color、Size 是外部状态",
          "给出工厂 get 的“有则返回、无则创建并放入池”代码和客户端代码"
        ],
        "code": ""
      }
    ],
    "memory": [
      "享元对象只存内部状态；外部状态由客户端在使用时设置",
      "判断是否共享成功：从工厂拿两次同名对象，== 应为 true"
    ],
    "quotes": [
      {
        "text": "解析:在图 8-19 中，省略了抽象享元角色，SharedString 充当具体享元角色，SharedStringFactory 充当享元工厂角色，Color 和 Size 充当外部状态类。",
        "source": "08-2-结构型设计模式-参考答案及习题解析.md 第253行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/20-Flyweight模式.md"
  },
  {
    "id": "E3-COMP-07",
    "type": "comprehensive",
    "source": "习题3综合题第7题",
    "category": "结构型设计模式",
    "pattern": "代理模式",
    "stem": "应用软件所提供的桌面快捷方式是快速启动应用程序的代理, 桌面快捷方式一般使用一张小图片来表示 (Picture), 通过调用快捷方式的 run() 方法将调用应用软件 (Application) 的 run() 方法。使用代理模式模拟该过程, 绘制类图并编程模拟实现。",
    "materials": [],
    "answers": [
      "代理模式。参考类图如图 8-20 所示。\n\n![图 8-20 综合题 7 参考类图](images/written/p096-b06.png)\n\n图 8-20 综合题 7 参考类图\n\n解析:在图 8-20 中, Subject 充当抽象主题角色, Application 充当真实主题角色, Picture 充当代理主题角色。其中, 代理类 Picture 类代码如下:\n\n```java\nclass Picture implements Subject {\n    private Application obj;\n    public Picture() {\n        obj = new Application();\n    }\n    public void run() {\n        obj.run();\n    }\n}\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "代理模式。参考类图如图 8-20 所示。"
      },
      {
        "type": "image",
        "alt": "图 8-20 综合题 7 参考类图",
        "src": "images/written/p096-b06.png"
      },
      {
        "type": "text",
        "content": "解析:在图 8-20 中, Subject 充当抽象主题角色, Application 充当真实主题角色, Picture 充当代理主题角色。其中, 代理类 Picture 类代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 代理模式：桌面快捷方式 Picture 代理应用程序 Application\n * Picture 和 Application 都实现 Subject 接口，用户分不出点的是快捷方式还是程序本身\n */\n// 代理：快捷方式\nclass Picture implements Subject {\n    private Application obj;  // 持有真正的应用程序\n    // 创建快捷方式时准备好它指向的应用程序\n    public Picture() {\n        obj = new Application();\n    }\n    // 用户双击快捷方式\n    public void run() {\n        obj.run();  // 实际启动的是应用程序\n    }\n}"
      }
    ],
    "roles": [
      [
        "Subject",
        "抽象主题，声明 run()"
      ],
      [
        "Application",
        "真实主题，真正的应用程序"
      ],
      [
        "Picture",
        "代理主题，即桌面快捷方式"
      ]
    ],
    "steps": [
      {
        "title": "第一步　把快捷方式对上代理模式",
        "bullets": [
          "双击快捷方式，实际运行的是背后的应用程序",
          "快捷方式本身不是程序，只是替程序接收用户的操作，这就是代理",
          "为了让用户“点快捷方式”和“点程序”用法一样，两者要实现同一个接口"
        ],
        "code": ""
      },
      {
        "title": "第二步　类和接口如何分工",
        "bullets": [
          "Subject 接口声明 run()",
          "Application implements Subject，run() 里真正启动程序",
          "Picture implements Subject，持有一个 Application 对象 obj"
        ],
        "code": ""
      },
      {
        "title": "第三步　代理类代码",
        "bullets": [
          "Picture 的构造方法创建 Application 对象",
          "Picture 的 run() 只做一件事：调用 obj.run()",
          "客户端写 Subject s = new Picture(); s.run(); 就能启动应用"
        ],
        "code": "/**\n * 快捷方式（代理）持有应用程序（真实主题），run() 时转交给它\n */\nclass Picture implements Subject {\n    private Application obj;\n    public Picture() { obj = new Application(); }\n    public void run() { obj.run(); }\n}"
      },
      {
        "title": "第四步　这样设计的好处",
        "bullets": [
          "客户端只依赖 Subject，分不出是快捷方式还是程序本身",
          "以后想在启动前加检查或记录，只改 Picture，Application 不用动"
        ],
        "code": ""
      }
    ],
    "memory": [
      "代理三角：抽象主题接口、真实主题、代理，代理持有真实主题并转调",
      "生活中的快捷方式、经纪人都可以按代理模式来答"
    ],
    "quotes": [
      {
        "text": "解析:在图 8-20 中, Subject 充当抽象主题角色, Application 充当真实主题角色, Picture 充当代理主题角色。",
        "source": "08-2-结构型设计模式-参考答案及习题解析.md 第346行"
      },
      {
        "text": "Subject 角色定义了使 Proxy 角色和 RealSubject 角色之间具有一致性的接口。",
        "source": "21-Proxy模式.md 第209行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/21-Proxy模式.md"
  },
  {
    "id": "E4-FILL-01",
    "type": "fill",
    "source": "习题4填空题第1题",
    "category": "行为型设计模式",
    "pattern": "职责链模式",
    "stem": "已知某企业的采购审批是分级进行的,即根据采购金额的不同由不同层次的主管人员来审批,主任可以审批5万元以下(不包括5万元)的采购单,副董事长可以审批5万元至10万元(不包括10万元)的采购单,董事长可以审批10万元至50万元(不包括50万元)的采购单,50万元及以上的采购单就需要开会讨论决定。",
    "materials": [
      {
        "type": "text",
        "content": "采用职责链设计模式对上述过程进行设计后得到的类图如图 9-6 所示。"
      },
      {
        "type": "image",
        "alt": "图9-6 填空题1类图",
        "src": "images/written/p104-b04.png"
      },
      {
        "type": "text",
        "content": "【Java 代码】"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 职责链模式实现的分级采购审批\n * 1. PurchaseRequest：请求，保存采购金额等信息\n * 2. Approver：抽象处理者，保存“下一个审批人” successor\n * 3. Director（主任）、VicePresident（副董事长）、President（董事长）、Congress（会议）：具体审批人\n * 4. Test：把审批人按权限从低到高串成一条链，再把请求交给链头\n * 权限范围：主任 < 5万；副董事长 5万～10万；董事长 10万～50万；会议 ≥ 50万\n */\n// 请求对象：一张采购单\nclass PurchaseRequest {\n    public double amount;                  //一个采购的金额\n    public int number;                   //采购单编号\n    public String purpose;               //采购目的\n}\n\n//审批者类\n// 抽象处理者：所有审批人的父类\nclass Approver {\n    // 刚创建时还没有下一个审批人\n    public Approver() { successor = null; }\n    // 默认处理方式：自己不处理，交给下一个审批人\n    public void processRequest(PurchaseRequest aRequest){\n        // 第(1)空：有下一个审批人时，把同一个请求原样交给它处理\n        if(successor!= null) {successor.____(1)____;}\n    }\n    // 设置下一个审批人，用来把审批人串成链\n    public void setSuccessor(Approver aSuccessor) { successor = aSuccessor;}\n    // 第(2)空：下一个审批人可能是任何一级，类型用它们共同的父类\n    private ____(2)____successor;\n}\n\n// 会议：链的最后一环，处理 50 万元及以上\nclass Congress extends Approver{\n    public void processRequest(PurchaseRequest aRequest){\n        // 金额在自己的权限内：开会决定\n        if(aRequest.amount >= 500000) {/* 决定是否审批的代码省略 */}\n        // 第(3)空：不在权限内时，调用父类的默认处理方式（交给下一个审批人）\n        else ____(3)____.processRequest(aRequest);\n    }\n}\n\n// 主任：处理 5 万元以下，代码省略\nclass Director extends Approver{\n    public void processRequest(PurchaseRequest aRequest){// * 此处代码省略 */}\n}\n\n// 董事长：处理 10 万～50 万元，代码省略\nclass President extends Approver{\npublic void processRequest(PurchaseRequest aRequest){// *此处代码省略 */}\n}\n\n// 副董事长：处理 5 万～10 万元，代码省略\nclass VicePresident extends Approver{\n    public void processRequest(PurchaseRequest aRequest){// *此处代码省略 */}\n}\n\n// 客户端：组装职责链\npublic class Test {\n    public static void main(String[] args) throws IOException{\n        // meeting 是会议\n        Congress meeting = new Congress();\n        // sam 是副董事长\n        VicePresident sam = new VicePresident();\n        // larry 是主任\n        Director larry = new Director();\n        // tammy 是董事长\n        President tammy = new President();\n        //构造职责链\n        // 会议是最后一环，后面没有人了\n        meeting.setSuccessor(null);\n        // 第(4)空：副董事长的下一个审批人（权限更高的一级）\n        sam.setSuccessor(____(4)____);\n        // 第(5)空：董事长的下一个审批人\n        tammy.setSuccessor(____(5)____);\n        // 第(6)空：主任的下一个审批人\n        larry.setSuccessor(____(6)____);\n        //构造一个采购审批请求\n        PurchaseRequest aRequest = new PurchaseRequest();\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // 从键盘读入采购金额\n        aRequest.amount = Double.parseDouble(br.readLine());\n        // 第(7)空：请求要交给链头，也就是权限最低的审批人\n        ____(7)____.processRequest(aRequest);\n    }\n}"
      }
    ],
    "answers": [
      "(1)processRequest(aRequest); (2)Approver; (3)super; (4)tammy; (5)meeting;\n(6)sam; (7)larry。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1)processRequest(aRequest); (2)Approver; (3)super; (4)tammy; (5)meeting;\n(6)sam; (7)larry。"
      }
    ],
    "roles": [
      [
        "Approver",
        "抽象处理者，保存下一个处理者 successor"
      ],
      [
        "Director（主任）",
        "处理 5 万元以下"
      ],
      [
        "VicePresident（副董事长）",
        "处理 5 万～10 万元"
      ],
      [
        "President（董事长）",
        "处理 10 万～50 万元"
      ],
      [
        "Congress（会议）",
        "处理 50 万元及以上，是链的最后一环"
      ]
    ],
    "steps": [
      {
        "title": "第一步　先排出审批链的顺序",
        "bullets": [
          "金额从小到大，权限从低到高：主任 → 副董事长 → 董事长 → 会议",
          "代码里的对象名：larry 是主任，sam 是副董事长，tammy 是董事长，meeting 是会议",
          "请求要从权限最低的人开始，自己批不了就交给下一个"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写 Approver 和 Congress",
        "bullets": [
          "(1) processRequest(aRequest)：父类的默认做法是把请求原样交给后继者",
          "(2) Approver：successor 可能是任何一级审批者，类型用父类 Approver",
          "(3) super：会议处理不了时调用父类的 processRequest，由父类决定要不要继续往下传"
        ],
        "code": ""
      },
      {
        "title": "第三步　按顺序把链接起来",
        "bullets": [
          "(4) tammy：副董事长的下一个是董事长",
          "(5) meeting：董事长的下一个是会议",
          "(6) sam：主任的下一个是副董事长",
          "(7) larry：请求交给链头，也就是权限最低的主任"
        ],
        "code": ""
      }
    ],
    "memory": [
      "职责链填空先排顺序：谁先处理、谁是下一个，再填 setSuccessor",
      "客户端总是把请求交给链的第一个处理者"
    ],
    "quotes": [
      {
        "text": "Client 角色是向第一个 ConcreteHandler 角色发送请求的角色。",
        "source": "14-ChainofResponsibility模式.md 第273行"
      },
      {
        "text": "1. (1)processRequest(aRequest); (2)Approver; (3)super; (4)tammy; (5)meeting;",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第25行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/14-ChainofResponsibility模式.md"
  },
  {
    "id": "E4-FILL-02",
    "type": "fill",
    "source": "习题4填空题第2题",
    "category": "行为型设计模式",
    "pattern": "命令模式",
    "stem": "已知某企业要开发一个家用电器遥控系统, 即用户使用一个遥控器即可控制某些家用电器的开与关。遥控器如图 9-7 所示。该遥控器共有 4 个按钮, 编号分别为 0\\~3, 按钮 0 和 2 能够遥控打开电器 1 和电器 2, 按钮 1 和 3 则能遥控关闭电器 1 和电器 2。由于遥控系统需要支持形式多样的电器, 因此, 该系统的设计要求具有较高的扩展性。现假设需要控制客厅电视和卧室电灯, 对该遥控系统进行设计, 所得类图如图 9-8 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图9-7 遥控器",
        "src": "images/written/p105-b06.png"
      },
      {
        "type": "image",
        "alt": "图 9-8 填空题 2 类图",
        "src": "images/written/p105-b08.png"
      },
      {
        "type": "text",
        "content": "在图 9-8 中, 类 RemoteController 的方法 onPressButton(int button) 表示当遥控器按钮按下时调用的方法, 参数为按键的编号; Command 接口中 on 和 off 方法分别用于控制电器的开与关; Light 中 turnLight(int degree) 方法用于调整电灯灯光的强弱, 参数 degree 值为 0 时表示关灯, 值为 100 时表示开灯并且将灯光亮度调整到最大; TV 中 setChannel(int channel) 方法表示设置电视播放的频道, 参数 channel 值为 0 时表示关闭电视, 为 1 时表示打开电视并将频道切换为第 1 频道。"
      },
      {
        "type": "text",
        "content": "Java 代码"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 命令模式实现的家电遥控器\n * 1. RemoteController：调用者，4 个按钮各对应一个命令对象\n * 2. Command：抽象命令，声明 on() 和 off()\n * 3. LightCommand、TVCommand：具体命令\n * 4. Light、TV：接收者，真正执行开关动作\n * 遥控器只认 Command，不知道背后是电灯还是电视\n */\n// 接收者一：电灯\nclass Light{\n    //电灯类\n    public void turnLight(int degree) {//调整灯光亮度,0 表示关灯,100 表示亮度最大}\n}\n\n// 接收者二：电视\nclass TV{\n    //电视机类\n    public void setChannel(int channel) {//0 表示关闭电视,1 表示打开电视并切换到第 1 频道}\n}\n\n// 抽象命令：把“开”和“关”两个动作统一起来\ninterface Command{\n    //抽象命令类\n    void on();  // 打开电器\n    void off();  // 关闭电器\n}\n\n// 调用者：遥控器\nclass RemoteController{\n    //遥控器类\n    //遥控器有 4 个按钮,按照编号分别对应 4 个 Command 对象\n    protected Command[] commands = new Command[4];  // 4 个位置，按钮编号 0～3\n    //按钮被按下时执行命令对象中的命令\n    public void onPressButton(int button) {\n        // 偶数号按钮（0、2）执行“开”\n        if(button % 2 == 0) commands[button].on();\n        // 奇数号按钮（1、3）执行“关”\n        else commands[button].off();\n    }\n\n    // 给某个按钮绑定一个命令对象\n    public void setCommand(int button, Command command){\n        // 第(1)空：把命令放到按钮编号对应的数组位置\n        (1)_ = command;          //设置每个按钮对应的命令对象\n    }\n}\n\n// 具体命令一：控制电灯\nclass LightCommand implements Command{\n    //电灯命令类\n    protected Light light;\n    //指向要控制的电灯对象\n    // 开灯：亮度调到最大\n    public void on() {light.turnLight(100);}\n    // 第(2)空：关灯，题目说明亮度为 0 表示关灯\n    public void off() {light. (2) ;}\n    // 创建命令时指定要控制哪盏灯\n    public LightCommand(Light light) {this.light = light; }\n}\n\n// 具体命令二：控制电视\nclass TVCommand implements Command{\n    //电视机命令类\n    protected TV tv;\n    // 第(3)空：开电视，题目说明频道为 1 表示打开并切到第 1 频道\n    public void on() {tv. (3) ;}\n    // 关电视：频道为 0 表示关闭\n    public void off() {tv.setChannel(0);}\npublic TVCommand(TV tv) {this.tv = tv;}\n}\n\npublic class Test {\n    public static void main(String args[]) {\n        //创建电灯和电视对象\n        Light light = new Light();\n        TV tv = new TV();\n        // 把电灯包装成命令\n        LightCommand lightCommand = new LightCommand(light);\n        // 把电视包装成命令\n        TVCommand tvCommand = new TVCommand(tv);\n        RemoteController remoteController = new RemoteController();\n        //设置按钮和命令对象\n        // 第(4)空：按钮 0 负责打开电器 1，绑定其中一个命令\n        remoteController.setCommand(0, ____(4)_);\n        ...//此处省略设置按钮 1、按钮 2 和按钮 3 的命令对象代码\n    }\n}"
      },
      {
        "type": "text",
        "content": "本题中,应用命令模式能够有效地让类\\_\\_\\_\\_(5)\\_\\_\\_\\_和类\\_\\_\\_\\_(6)\\_\\_\\_\\_、类\\_\\_\\_\\_(7)之间的耦合性降至最小。"
      }
    ],
    "answers": [
      "(1) commands[button]; (2) turnLight(0); (3) setChannel(1); (4) lightCommand 或 tvCommand; (5) RemoteController; (6) Light; (7) TV。【注:(6) 和 (7) 可以互换】"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) commands[button]; (2) turnLight(0); (3) setChannel(1); (4) lightCommand 或 tvCommand; (5) RemoteController; (6) Light; (7) TV。【注:(6) 和 (7) 可以互换】"
      }
    ],
    "roles": [
      [
        "RemoteController",
        "调用者，4 个按钮各对应一个命令对象"
      ],
      [
        "Command",
        "抽象命令，声明 on() 和 off()"
      ],
      [
        "LightCommand、TVCommand",
        "具体命令，分别控制电灯和电视"
      ],
      [
        "Light、TV",
        "接收者，真正执行开关动作"
      ]
    ],
    "steps": [
      {
        "title": "第一步　看遥控器怎么用命令",
        "bullets": [
          "遥控器只保存 Command 数组，按下按钮时偶数号调用 on()，奇数号调用 off()",
          "遥控器不知道背后是电灯还是电视，只认 Command 接口"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写",
        "bullets": [
          "(1) commands[button]：把命令放到对应编号的按钮位置",
          "(2) turnLight(0)：题目说 degree 为 0 表示关灯",
          "(3) setChannel(1)：题目说 channel 为 1 表示开电视并切到第 1 频道",
          "(4) lightCommand 或 tvCommand：按钮 0 负责打开电器 1，两种命令都可以作为电器 1"
        ],
        "code": ""
      },
      {
        "title": "第三步　判断谁和谁解耦",
        "bullets": [
          "(5) RemoteController：发出请求的遥控器",
          "(6) Light、(7) TV：真正执行请求的电器，两空可以互换",
          "遥控器和电器之间隔着命令对象，新增电器只需加一个新的命令类，遥控器代码不变"
        ],
        "code": ""
      }
    ],
    "memory": [
      "命令模式解耦的是“调用者”和“接收者”，命令对象夹在中间",
      "具体命令持有接收者，在 on()/off() 里调用接收者的方法"
    ],
    "quotes": [
      {
        "text": "Receiver 角色是 Command 角色执行命令时的对象，也可以称其为命令接收者。",
        "source": "22-Command模式.md 第363行"
      },
      {
        "text": "(5) RemoteController; (6) Light; (7) TV。【注:(6) 和 (7) 可以互换】",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第28行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/22-Command模式.md"
  },
  {
    "id": "E4-FILL-03",
    "type": "fill",
    "source": "习题4填空题第3题",
    "category": "行为型设计模式",
    "pattern": "解释器模式",
    "stem": "使用解释器模式设计一个简单的加法/减法解释器, 可以对加法/减法表达式进行解释, 如用户输入表达式“2+3-4+1”, 输出结果为 2。现采用解释器模式进行设计, 类图如图 9-9 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图9-9 填空题3类图",
        "src": "images/written/p107-b07.png"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 解释器模式实现的加减法计算（第一部分）\n * 1. Node：抽象表达式，声明 interpret()\n * 2. ValueNode：终结符表达式，表示一个数字\n * 3. SymbolNode：抽象的非终结符表达式，保存左右两个子表达式\n * 注意：原书注释写成“抽象终结符”，按题意应为“抽象非终结符”\n */\nimport java.util.*;\n// 所有语法树节点的共同接口\ninterface Node {\n    public int interpret();  // 解释（计算）这个节点，返回结果\n}\n\n//终结符表达式类,用于解释一个整型数值\n// 叶子节点：一个整数\nclass ValueNode implements Node {\n    private int value;\n    public ValueNode(int value) { this.value = value; }\n\n    // 数字节点的计算结果就是它自己的值\n    public int interpret() { return this.value; }\n}\n\n//抽象终结符表达式类\n// 第(1)空：这个类只保存左右节点、不实现 interpret，类本身要用什么修饰\n_(1)_ SymbolNode implements Node {\n    protected Node left;  // 左边的子表达式\n    protected Node right;  // 右边的子表达式\n    public SymbolNode(Node left, Node right) {\n        this.left = left;"
      },
      {
        "type": "text",
        "content": "在图 9-9 中, Node 类充当抽象表达式, 声明了抽象解释方法 interpret(); ValueNode 是值节点类, 充当终结符表达式; SymbolNode 充当抽象的非终结符表达式, 其子类 AddNode 和 SubNode 充当具体的非终结符表达式, 分别对应加法解释和减法解释; Calculator 类表示计算器, 封装了对表达式类的 interpret() 方法的调用。如果在客户类中输入字符串 \"2+3-4+1\", 在 Calculator 类中, 该字符串将以空格为分界符转换成一个字符串数组。根据对该字符串数组的分析, 将构造如下表达式: newAddNode(new SubNode(new AddNode(new ValueNode(2), new ValueNode(3)), new ValueNode(4)), ValueNode(1)), 该表达式对应一棵抽象语法树, 如图 9-10 所示。"
      },
      {
        "type": "image",
        "alt": "图9-10 抽象语法树",
        "src": "images/written/p108-b05.png"
      },
      {
        "type": "text",
        "content": "【Java 代码】"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 解释器模式实现的加减法计算（第二部分，接上一段）\n * AddNode、SubNode：具体的非终结符表达式；Calculator：用栈把字符串构造成语法树\n */\nthis.right = right;\n}\n}\n\n// 加法节点\nclass AddNode extends SymbolNode {\n    public AddNode(Node left, Node right) {\n        super(left, right);\n    }\n\n    //加法解释\n    public int interpret() {\n        // 第(2)空：先算左边，再算右边，两者相加\n        return ____(2);\n    }\n}\n\n// 减法节点\nclass SubNode extends SymbolNode {\n    public SubNode(Node left, Node right) {\n        super(left, right);\n    }\n\n    //减法解释\n    public int interpret() {\n        // 第(3)空：左边结果减去右边结果\n        return ____(3);\n    }\n}\n\n// 计算器：负责构造语法树并计算\nclass Calculator {\n    private String statement;\n    private Node node;  // 构造好的整棵语法树的根\n\n    public void build(String statement) {\n        Node left = null, right = null;\n        Stack stack = new Stack();                      //使用栈存储表达式\n        // 第(4)空：把输入字符串按空格拆成数组，例如 2、+、3、-、4、+、1\n        String[] statementArr = statement.____(4)\";   //使用空格分割输入字符串\n        // 从左到右扫描每一个符号\n        for(int i = 0; i < statementArr.length; i++) {\n            //如果输入的符号是加号, 则将存储在栈中的表达式弹出后作为其左表达式, 而将之\n            //后的数值作为其右表达式, 创建一个新的 AddNode 对象并存入栈中\n            if (statementArr[i].equalsIgnoreCase(\" + \")) {\n                // 弹出前面已经组好的整个表达式，作为左边\n                left = (Node)stack.pop();\n                // 读取加号后面的数字，作为右边\n                int val = Integer.parseInt(statementArr[++i]);\n                right = new ValueNode(val);\n                // 第(5)空：用左右两边组成一个加法节点，再压回栈中\n                ____(5);\n            }\n            // 遇到减号：做法和加号相同\n            else if (statementArr[i].equalsIgnoreCase(\"- \"))\n            left = (Node)stack.pop();\n            int val = Integer.parseInt(statementArr[++i]);\n            right = new ValueNode(val);\n            // 第(6)空：用左右两边组成一个减法节点，再压回栈中\n            ____(6);\n        }\n    }"
      },
      {
        "type": "text",
        "content": ":"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 解释器模式实现的加减法计算（第三部分，接上一段）\n */\n//如果输入的符号既不是加号也不是减号,则为数值,创建一个新的 ValueNode 对象\n//并存入栈中\nelse {\n    // 第(7)空：当前符号是数字，把它包装成数字节点压入栈\n    stack.push(____(7)____);\n}\n}\n// 第(8)空：扫描结束后栈里只剩整棵树，把它取出来\nthis.node = (Node)____(8)____; //弹出完整的表达式\n}\n\n// 计算：从根节点开始解释，会递归计算整棵树\npublic int compute() {\n    return node.interpret();\n}\n}\n\n// 客户端\nclass Test {\n    public static void main(String args[]) {\n        // 要计算的表达式，符号之间用空格分开\n        String statement = \"2 + 3 - 4 + 1\";\n        Calculator calculator = new Calculator();\n        calculator.build(statement);  // 先构造语法树\n        int result = calculator.compute();  // 再计算结果：2+3=5，5-4=1，1+1=2\n        System.out.println(statement + \"=\" + result);\n    }\n}"
      }
    ],
    "answers": [
      "(1) abstract class; (2) left. interpret()+ right. interpret(); (3) left. interpret()-right. interpret(); (4) split(\" \"); (5) stack. push(new AddNode(left, right)); (6) stack.push(new SubNode(left, right)); (7) new ValueNode(Integer. parseInt(statementArr[i]));\n(8) stack. pop()。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) abstract class; (2) left. interpret()+ right. interpret(); (3) left. interpret()-right. interpret(); (4) split(\" \"); (5) stack. push(new AddNode(left, right)); (6) stack.push(new SubNode(left, right)); (7) new ValueNode(Integer. parseInt(statementArr[i]));\n(8) stack. pop()。"
      }
    ],
    "roles": [
      [
        "Node",
        "抽象表达式，声明 interpret()"
      ],
      [
        "ValueNode",
        "终结符表达式，表示一个数"
      ],
      [
        "SymbolNode",
        "抽象非终结符表达式，保存左右两个子表达式"
      ],
      [
        "AddNode、SubNode",
        "具体非终结符表达式，做加法和减法"
      ],
      [
        "Calculator",
        "用栈把输入字符串构造成语法树并计算"
      ]
    ],
    "steps": [
      {
        "title": "第一步　看语法树长什么样",
        "bullets": [
          "“2 + 3 - 4 + 1”按从左到右计算，最后一个运算 +1 在树根",
          "数字是叶子（ValueNode），运算符是带左右子树的节点（AddNode、SubNode）",
          "算一个节点就是先算左边、再算右边，再做本节点的运算"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写表达式类",
        "bullets": [
          "(1) abstract class：SymbolNode 只保存左右节点，没有实现 interpret()，是抽象类（代码注释写作“抽象终结符”，题目文字说明它是抽象的非终结符表达式）",
          "(2) left.interpret() + right.interpret()：加法节点把左右结果相加",
          "(3) left.interpret() - right.interpret()：减法节点用左边减右边"
        ],
        "code": ""
      },
      {
        "title": "第三步　逐空填写 build()",
        "bullets": [
          "(4) split(\" \")：按空格把字符串拆成数组，例如 [2, +, 3, -, 4, +, 1]",
          "(5) stack.push(new AddNode(left, right))：遇到加号，弹出前面的整个表达式作左边，下一个数作右边，组成新节点再压回栈",
          "(6) stack.push(new SubNode(left, right))：减号同理",
          "(7) new ValueNode(Integer.parseInt(statementArr[i]))：既不是加号也不是减号，就是数字",
          "(8) stack.pop()：循环结束后栈里只剩一棵完整的树，弹出来作为根",
          "按这个过程计算：2+3=5，5-4=1，1+1=2，和题目给的结果一致"
        ],
        "code": ""
      }
    ],
    "memory": [
      "解释器模式：叶子返回自身的值，非叶子先解释左右子节点再合并结果",
      "用栈构造语法树：数字直接压栈，遇到运算符就弹出左边、读入右边、组合后压回"
    ],
    "quotes": [
      {
        "text": "NonterminalExpression 角色对应 BNF 中的非终结符表达式。",
        "source": "23-Interpreter模式.md 第614行"
      },
      {
        "text": "TerminalExpression 角色对应 BNF 中的终结符表达式。",
        "source": "23-Interpreter模式.md 第610行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/23-Interpreter模式.md"
  },
  {
    "id": "E4-FILL-04",
    "type": "fill",
    "source": "习题4填空题第4题",
    "category": "行为型设计模式",
    "pattern": "迭代器模式",
    "stem": "某软件公司要基于迭代器模式开发一套用于遍历数组元素的类库, 其基本结构如图 9-11 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图 9-11 填空题 4 类图",
        "src": "images/written/p110-b06.png"
      },
      {
        "type": "text",
        "content": "在图 9-11 中, Collection 类是抽象聚合类, ConcreteCollection 类是具体聚合类, Iterator 类是抽象迭代器类, ConcreteIterator 类是具体迭代器类。在聚合类中提供了创建迭代器的工厂方法 createIterator() 和数组的 Setter 和 Getter 方法; 在迭代器中提供了用于遍历数组元素的相关方法, 如 first()、last()、next() 等。"
      },
      {
        "type": "text",
        "content": "Java 代码"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 迭代器模式实现的数组遍历\n * 1. Collection：抽象聚合，负责保存数组和创建迭代器\n * 2. Iterator：抽象迭代器，负责在数组中前后移动\n * 3. ConcreteCollection、ConcreteIterator：具体实现\n * 注意：this.obj、McCreterCollection 是原书识别错误，应分别为 this.objs、ConcreteCollection\n */\n// 抽象聚合：只管存数据和创建迭代器，不管怎么遍历\ninterface Collection {\n    public void setArray(Object objs[]);          //设置数组\n    public Object[] getArray();                  //获取数组\n    public Iterator createIterator();            //创建迭代器\n}\n\n// 抽象迭代器：所有遍历操作都在这里\ninterface Iterator {\n    public void first();                   //索引指向第一个元素\n    public void last();                   //索引指向最后一个元素\n    public void next();                   //索引指向下一个元素\n    public void previous();                  //索引指向上一个元素\n    public boolean isLast();                  //判断是否最后一个元素\n    public boolean isFirst();                  //判断是否第一个元素\n    public Object getItem();                  //获取当前索引所指向的元素\n}\n\n// 具体聚合：用数组保存元素\nclass ConcreteCollection implements Collection {\n    private Object[] objs;\n\n    public void setArray(Object objs[]) { this.obj = objs; }\n\n    public Object[] getArray() { return this.obj; }\n\n    // 第(1)空：创建具体迭代器，并把聚合自己交给它\n    public Iterator createIterator() { return ____(1)____; }\n}\n\n// 具体迭代器：用 index 记录当前位置\nclass ConcreteIterator implements Iterator {\n    private Object[] objs;\n    private int index = 0;                  //索引变量,初值为 0\n\n    // 第(2)空：从聚合对象中取出数组保存起来\n    public ConcreteIterator(ConcreteCollection collection) {\n        this.obj = ____(2)____;\n    }\n    // 回到第一个元素\n    public void first() { index = 0; }\n    // 第(3)空：让 index 指向最后一个元素的下标\n    public void last() { ____(3)____; }\n    // 往后移一格\n    public void next() {\n        if(index < objs.length) {\n            // 第(4)空：index 加 1\n            ____(4)____;\n        }\n    }\n    // 往前移一格\n    public void previous() {\n        if(index >= 0) {\n// 第(5)空：index 减 1\n(5) ;\n}\n}\n// 第(6)空：index 已经越过最后一个元素时返回 true\npublic boolean isLast() { (6)_; }\n// 第(7)空：index 已经越过第一个元素（变成 -1）时返回 true\npublic boolean isFirst() { (7)_; }\n// 取出当前位置的元素\npublic Object getItem() { return objs[index]; }\n}\n\n// 客户端：逆向遍历 5 个城市\nclass Test {\n    public static void main(String args[]) {\n        Collection collection;\n        collection = new McCreterCollection();\n        Object[] objs = {\"北京\",\"上海\",\"广州\",\"深圳\",\"长沙\"};\n        // 把数组交给聚合保存\n        collection.setArray(objs);\n        // 第(8)空：通过聚合拿到迭代器\n        Iterator i = (8) ;\n        i.last();  // 从最后一个元素开始\n        //逆向遍历所有元素\n        // 第(9)空：还没越过第一个元素就继续循环\n        while( (9) ) {\n            // 输出当前元素\n            System.out.println(i.getItem().toString());\n            // 第(10)空：输出后往前移一格\n            (10) ;\n        }\n    }\n}"
      }
    ],
    "answers": [
      "(1) new ConcreteIterator(this); (2) collection.getArray(); (3) objs.length-1;  \n(4) index++; (5) index--; (6) return index==objs.length; (7) return index==-1;\n(8) collection.createIterator(); (9)! i.isFirst(); (10)i.previous()。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) new ConcreteIterator(this); (2) collection.getArray(); (3) objs.length-1;  \n(4) index++; (5) index--; (6) return index==objs.length; (7) return index==-1;\n(8) collection.createIterator(); (9)! i.isFirst(); (10)i.previous()。"
      }
    ],
    "roles": [
      [
        "Collection",
        "抽象聚合，声明 createIterator()"
      ],
      [
        "ConcreteCollection",
        "具体聚合，保存数组 objs"
      ],
      [
        "Iterator",
        "抽象迭代器，声明 first、last、next、previous 等"
      ],
      [
        "ConcreteIterator",
        "具体迭代器，用 index 记录当前位置"
      ]
    ],
    "steps": [
      {
        "title": "第一步　看聚合和迭代器的分工",
        "bullets": [
          "聚合只负责存数据和创建迭代器",
          "迭代器拿到聚合的数组后，用 index 在数组里前后移动",
          "代码中的 this.obj、McCreterCollection 是识别错误，应分别对应成员 objs 和类 ConcreteCollection"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写两个具体类",
        "bullets": [
          "(1) new ConcreteIterator(this)：迭代器构造方法要一个聚合对象，传自己",
          "(2) collection.getArray()：迭代器从聚合里取出数组保存",
          "(3) objs.length-1：last() 要让 index 指向最后一个元素，参考答案只写了右边的值，放进代码就是 index = objs.length-1",
          "(4) index++、(5) index--：next 往后移一格，previous 往前移一格"
        ],
        "code": ""
      },
      {
        "title": "第三步　看懂 isLast 和 isFirst 的判断",
        "bullets": [
          "(6) return index==objs.length：index 已经越过最后一个元素，说明正向遍历结束",
          "(7) return index==-1：index 已经越过第一个元素，说明逆向遍历结束",
          "这里的 isFirst 不是“正指向第一个”，而是“已经走到第一个的前面”，所以循环里第一个元素也能被输出"
        ],
        "code": ""
      },
      {
        "title": "第四步　写出逆向遍历",
        "bullets": [
          "(8) collection.createIterator()：通过聚合拿迭代器",
          "先 i.last() 指向“长沙”",
          "(9) !i.isFirst()：还没越过第一个元素就继续",
          "(10) i.previous()：输出当前元素后往前移",
          "输出顺序是：长沙、深圳、广州、上海、北京"
        ],
        "code": ""
      }
    ],
    "memory": [
      "聚合 createIterator() 里 new 具体迭代器并把自己传进去",
      "逆向遍历：last() 开始，previous() 移动，用“越过开头”作为结束条件"
    ],
    "quotes": [
      {
        "text": "该角色负责实现 Aggregate 角色所定义的接口（API）。它会创建出具体的 Iterator 角色，即 ConcreteIterator 角色。",
        "source": "01-Iterator模式.md 第268行"
      },
      {
        "text": "(8) collection.createIterator(); (9)! i.isFirst(); (10)i.previous()。",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第35行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/01-Iterator模式.md"
  },
  {
    "id": "E4-FILL-05",
    "type": "fill",
    "source": "习题4填空题第5题",
    "category": "行为型设计模式",
    "pattern": "中介者模式",
    "stem": "某公司要开发一套窗体图形界面类库。该类库需要包含若干预定义的窗格(Pane)对象,例如 TextPane、ListPane、GraphicPane 等,窗格之间不允许直接引用。基于该类库的应用由一个包含一组窗格的窗口(Window)组成,并需要协调窗格之间的行为。基于该类库,在相互之间不直接引用的前提下需要实现窗格之间的协作。现采用中介者模式设计该系统,类图如图 9-12 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图 9-12 填空题 5 类图",
        "src": "images/written/p112-b05.png"
      },
      {
        "type": "text",
        "content": "在图 9-12 中, 抽象类 Window 充当抽象中介者, 其中定义的 action() 方法用于协调窗格之间的相互调用, ConcreteWindow 作为其子类充当具体中介者; 抽象类 Pane 充当抽象同事类, 包含改变方法 modify() 和响应方法 update(), 一个窗格的改变将引起其他窗格的响应, 而且窗格与窗格之间不发生直接的相互引用。"
      },
      {
        "type": "text",
        "content": "Java 代码"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 中介者模式实现的窗格协作\n * 1. Window：抽象中介者，声明协调方法 action\n * 2. ConcreteWindow：具体中介者，认识所有窗格，负责协调\n * 3. Pane：抽象同事，只认识中介者\n * 4. TextPane、ListPane、GraphicPane：具体同事\n * 窗格之间互不引用：一个窗格变了，先告诉中介者，再由中介者通知其他窗格\n * 注意：MainClass 中从“forecasting window = ...”开始的大量重复行是原书识别时混入的乱码\n * 按参考答案，客户端应依次创建三个窗格，并把它们登记到 window 的 tp、lp、gp 中\n */\n//抽象中介者类\n// 抽象中介者\nabstract class Window {\n    //协调窗格之间的相互调用\n    public abstract void action(Pane pane,String value);  // 参数 pane 表示哪个窗格发生了变化，value 是新值\n}\n\n//具体中介者类\n// 具体中介者：保存所有窗格\nclass ConcreteWindow extends Window {\n    public TextPane tp;\n    public ListPane lp;\n    public GraphicPane gp;\n    // 根据是哪个窗格变了，决定通知谁\n    public void action(Pane pane,String value) {\n        //文本窗格发生改变,列表窗格和图形窗格得到响应\n        if(pane == tp) {\n            // 第(1)(2)空：文本窗格变了，让另外两个窗格更新显示\n            (1) ;\n            (2) ;\n        }\n        //列表窗格发生改变\n        else if(pane == lp) {    //代码省略    }\n        //图形窗格发生改变\n        else if(pane == gp) {    //代码省略    }\n    }\n}\n\n//抽象同事类\n// 抽象同事\nabstract class Pane {\n    protected Window window;  // 每个窗格只保存中介者，不保存其他窗格\n    public Pane(Window window) {\n        this.window = window;\n    }\n    // 窗格自己发生变化时调用\n    public void modify(String value) {\n        // 第(3)空：告诉中介者“我变了”，把自己和新值都交过去\n        (3) ;    //向中介者转发调用\n    }\n    public abstract void update(String value);  // 收到中介者通知后更新显示\n}\n\n//具体同事类:文本窗格\n// 具体同事：文本窗格\nclass TextPane extends Pane {\n    public TextPane(Window window) {\n        // 第(4)空：把中介者交给父类保存\n        (4) ;\n    }\npublic void update(String value) {\n    System.out.println(\"文本窗格值更新,显示值为:\" + value);\n}\n}\n\n//具体同事类:列表窗格\nclass ListPane extends Pane {      //代码省略      }\n\n//具体同事类:图形窗格\nclass GraphicPane extends Pane {      //代码省略      }\n\n// 客户端\nclass MainClass {\n    public static void main(String args[]) {\n        // 先创建中介者\n        ConcreteWindow window = new ConcreteWindow();\n        // 第(5)(6)(7)空：依次创建文本、列表、图形三个窗格，创建时都要传入中介者\n        forecasting window = ____(5)____;\n        forecasting window = ____(6)____;\n        forecasting window = ____(7)____;\n        forecasting window = tp;\n        forecasting window = lp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window = gp;\n        forecasting window ="
      },
      {
        "type": "text",
        "content": "结合该实例,说明中介者模式的内涵。"
      }
    ],
    "answers": [
      "(1) lp.update(value); (2) gp.update(value); 【注:(1) 和 (2) 可以互换】(3) window.action(this, value); (4) super(window); (5) new TextPane(window); (6) new ListPane(window); (7) new GraphicPane(window)。\n\n中介者模式内涵:通过一个中介对象来封装一系列对象之间的交互，使得各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) lp.update(value); (2) gp.update(value); 【注:(1) 和 (2) 可以互换】(3) window.action(this, value); (4) super(window); (5) new TextPane(window); (6) new ListPane(window); (7) new GraphicPane(window)。"
      },
      {
        "type": "text",
        "content": "中介者模式内涵:通过一个中介对象来封装一系列对象之间的交互，使得各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。"
      }
    ],
    "roles": [
      [
        "Window",
        "抽象中介者，声明 action(pane, value)"
      ],
      [
        "ConcreteWindow",
        "具体中介者，知道所有窗格，负责协调"
      ],
      [
        "Pane",
        "抽象同事，持有中介者 window"
      ],
      [
        "TextPane、ListPane、GraphicPane",
        "具体同事，各种窗格"
      ]
    ],
    "steps": [
      {
        "title": "第一步　看窗格之间怎么通信",
        "bullets": [
          "窗格之间不允许直接引用，一个窗格改变时只告诉中介者",
          "中介者判断是谁变了，再去更新其他窗格",
          "所以同事只认识中介者，中介者认识所有同事"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写中介者和同事",
        "bullets": [
          "(1) lp.update(value)、(2) gp.update(value)：文本窗格变了，让列表窗格和图形窗格响应，两空可以互换",
          "(3) window.action(this, value)：窗格改变时把“我是谁”和新值交给中介者",
          "(4) super(window)：子类构造方法把中介者交给父类 Pane 保存"
        ],
        "code": ""
      },
      {
        "title": "第三步　客户端创建窗格",
        "bullets": [
          "(5) new TextPane(window)、(6) new ListPane(window)、(7) new GraphicPane(window)：每个窗格创建时都要告诉它中介者是谁",
          "题目给出的客户端代码在识别时混入了大量重复的乱码行，按参考答案理解，这三空就是创建三个窗格，然后把它们登记到 window 的 tp、lp、gp 中"
        ],
        "code": ""
      },
      {
        "title": "第四步　说明中介者模式的内涵",
        "bullets": [
          "用一个中介对象封装一组对象之间的交互",
          "各对象不需要互相引用，耦合变松",
          "想改变交互方式，只改中介者，窗格类不用动"
        ],
        "code": ""
      }
    ],
    "memory": [
      "同事改变 → window.action(this, value) → 中介者 update 其他同事",
      "同事构造时要拿到中介者，中介者要登记所有同事"
    ],
    "quotes": [
      {
        "text": "中介者模式内涵:通过一个中介对象来封装一系列对象之间的交互，使得各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第39行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/16-Mediator模式.md"
  },
  {
    "id": "E4-FILL-06",
    "type": "fill",
    "source": "习题4填空题第6题",
    "category": "行为型设计模式",
    "pattern": "备忘录模式",
    "stem": "某数据处理软件需要提供一个数据恢复功能,用户在操作过程中如果发生异常操作,可以将数据恢复到初始状态。采用备忘录模式设计该系统,要求初始数据能够独立保存且不能被当前数据对象以外的其他对象读取。设计类图如图 9-13 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图9-13 填空题6类图",
        "src": "images/written/p114-b06.png"
      },
      {
        "type": "text",
        "content": "在图 9-13 中, Data 类封装了数据, 充当原发器角色; DataMemento 作为 Data 类的备忘录; MementoCaretaker 用于管理备忘录。Data 类的 save() 方法用于创建备忘录, 并通过 MementoCaretaker 的 setMemento() 方法保存备忘录; Data 类的 restore() 方法用于从备忘录中恢复数据。"
      },
      {
        "type": "text",
        "content": "Java 代码"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 备忘录模式实现的数据恢复\n * 1. Data：原发器，save() 生成备忘录，restore() 从备忘录恢复\n * 2. DataMemento：备忘录，保存 value；方法不加 public，只有同包的 Data 能用\n * 3. MementoCaretaker：负责人，只保管备忘录，不看也不改内容\n */\n// 原发器：需要被保存和恢复状态的对象\nclass Data {\n    private int value;  // 要保存的状态\n    public int getValue() { return this.value; }\n    public void setValue(int value) { this.value = value; }\n    // 恢复：从备忘录中取回旧状态\n    public void restore(DataMemento memento) {\n        // 第(1)空：从备忘录中取出保存的值\n        this.value = ____(1);\n    }\n    // 保存：用当前状态生成一个备忘录\n    public DataMemento save() {\n        // 第(2)空：用当前的 value 创建一个新的备忘录\n        return ____(2);\n    }\n    // 打印当前状态\n    public void handle() {\n        System.out.println(this.value);\n    }\n}\n\n// 备忘录：方法都没写 public，包外的类无法读取或修改\nclass DataMemento {\n    private int value;\n    // 构造方法：保存传进来的状态\n    DataMemento(int value) {\n        // 第(3)空：参数和成员同名，把参数赋给成员\n        ____(3);\n    }\n    int getValue() {\n        return this.value;\n    }\n    void setValue(int value) {\n        this.value = value;\n    }\n}\n\n// 负责人：只负责保管备忘录\nclass MementoCaretaker {\n    private DataMemento memento;\n    public DataMemento getMemento() {\n        return this.memento;\n    }\n    public void setMemento(DataMemento memento) {\n        this.memento = memento;\n    }\n}\n\nclass Test {\n    public static void main(String args[]) {\n// 创建原发器\nData data = new Data();\ndata.setValue(60);  // 初始状态为 60\nMementoCaretaker mc = new MementoCaretaker();\n// 第(4)空：让原发器生成备忘录，交给负责人保管\nmc.setMemento(____(4)____);\nSystem.out.println(\"**** 状态一****\");\ndata.handle();\nint temp = data.getValue();\ntemp = (temp + 3 - 4) % 10;  // 修改数据：(60 + 3 - 4) % 10 = 9\ndata.setValue(temp);\nSystem.out.println(\"**** 状态二****\");\ndata.handle();\n// 第(5)空：从负责人那里取回备忘录，恢复到 60\ndata.restore(____(5)____);\nSystem.out.println(\"**** 恢复状态一****\");\ndata.handle();\n}\n}"
      },
      {
        "type": "text",
        "content": "在备忘录模式中需要实现对备忘录的封装,不允许除原发器以外的其他对象访问备忘录,Java 语言可以通过何种方式来实现?"
      }
    ],
    "answers": [
      "(1)memento.getValue(); (2)new DataMemento(this.value); (3)this.value = value; (4)data.save(); (5)mc.getMemento()。\n\n将备忘录 Memento 类和原发器 Originator 类定义在同一个包 package 中, 并将 Memento 类的可见性设置为包内可见, 即使用缺省访问标识符, 只有 Originator 可以直接访问备忘录对象中的 Setter() 和 Getter() 方法, 用于设置和获取对象状态。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1)memento.getValue(); (2)new DataMemento(this.value); (3)this.value = value; (4)data.save(); (5)mc.getMemento()。"
      },
      {
        "type": "text",
        "content": "将备忘录 Memento 类和原发器 Originator 类定义在同一个包 package 中, 并将 Memento 类的可见性设置为包内可见, 即使用缺省访问标识符, 只有 Originator 可以直接访问备忘录对象中的 Setter() 和 Getter() 方法, 用于设置和获取对象状态。"
      }
    ],
    "roles": [
      [
        "Data",
        "原发器，save() 生成备忘录，restore() 从备忘录恢复"
      ],
      [
        "DataMemento",
        "备忘录，保存 value"
      ],
      [
        "MementoCaretaker",
        "负责人，只负责保管备忘录"
      ]
    ],
    "steps": [
      {
        "title": "第一步　理清保存和恢复的过程",
        "bullets": [
          "保存：Data 用自己的 value 创建一个备忘录，交给负责人保管",
          "修改：Data 的 value 被改成新值",
          "恢复：从负责人那里取回备忘录，Data 读出里面的 value"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写",
        "bullets": [
          "(1) memento.getValue()：恢复时从备忘录取值",
          "(2) new DataMemento(this.value)：保存时用当前值创建备忘录",
          "(3) this.value = value：备忘录构造方法保存传进来的值",
          "(4) data.save()：让原发器生成备忘录，再交给负责人",
          "(5) mc.getMemento()：从负责人那里取回备忘录"
        ],
        "code": ""
      },
      {
        "title": "第三步　推一下运行过程",
        "bullets": [
          "状态一输出 60",
          "temp = (60 + 3 - 4) % 10 = 59 % 10 = 9，状态二输出 9",
          "恢复后再次输出 60"
        ],
        "code": ""
      },
      {
        "title": "第四步　怎样只让原发器访问备忘录",
        "bullets": [
          "把 DataMemento 和 Data 放在同一个包里",
          "DataMemento 的构造方法、getValue、setValue 都不加 public，使用默认的包内可见",
          "负责人只能拿着备忘录对象，却不能读取或修改里面的状态",
          "题目代码里 DataMemento 的方法没写 public，正是这个用意"
        ],
        "code": ""
      }
    ],
    "memory": [
      "save() 返回 new 备忘录(当前状态)；restore() 用备忘录的 get 方法取回状态",
      "Java 用“同包＋默认访问权限”保证只有原发器能访问备忘录"
    ],
    "quotes": [
      {
        "text": "将备忘录 Memento 类和原发器 Originator 类定义在同一个包 package 中, 并将 Memento 类的可见性设置为包内可见, 即使用缺省访问标识符",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第43行"
      },
      {
        "text": "Memento 角色会将 Originator 角色的内部信息整合在一起。在 Memento 角色中虽然保存了 Originator 角色的信息，但它不会向外部公开这些信息。",
        "source": "18-Memento模式.md 第313行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/18-Memento模式.md"
  },
  {
    "id": "E4-FILL-07",
    "type": "fill",
    "source": "习题4填空题第7题",
    "category": "行为型设计模式",
    "pattern": "观察者模式",
    "stem": "某公司要开发一套机房监控系统,如果机房达到某一指定温度,传感器将作出反应,将信号传递给响应设备,如警示灯将闪烁、报警器将发出警报、安全逃生门将自动开启、隔热门将自动关闭等,每一种响应设备的行为由专门的程序来控制。为支持将来引入新类型的响应设备,采用观察者模式设计该系统,类图如图 9-14 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图9-14 填空题7类图",
        "src": "images/written/p116-b06.png"
      },
      {
        "type": "text",
        "content": "在图 9-14 中, ThermoSensor 是温度传感器, 定义了增加响应设备的方法 register() 和触发方法 trigger(); AlarmListener 接口是抽象响应设备类, 声明了警示方法 alarm(); 而警示灯类 CautionLight、报警器类 Annunciator 和安全门类 ExitGate 是具体响应设备类, 它们实现了警示方法 alarm()。ExitGate 是抽象类 Gate 类的子类, 它将实现在 Gate 类中声明的 open() 方法和 close() 方法, 用于开启逃生门并关闭隔热门, Gate 类中的 action() 方法用于同时执行 open() 方法和 close() 方法。"
      },
      {
        "type": "text",
        "content": "【Java 代码】"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 观察者模式实现的机房温度监控\n * 1. ThermoSensor：观察目标，保存所有响应设备，温度到达时逐个通知\n * 2. AlarmListener：抽象观察者，声明 alarm()\n * 3. CautionLight、Annunciator、ExitGate：具体观察者，各自响应\n * 4. Gate：门的抽象类，action() 依次开逃生门、关隔热门\n * 注意：Test 中的 alarmListener 首字母小写是原书笔误，应为接口 AlarmListener\n */\nimport java.util.*;\n// 第(1)空：只有方法声明、被其他类 implements，应当是什么类型\n(1) {\n    public void alarm();  // 收到报警时要做的事\n}\n\n// 门：固定流程是先开逃生门、再关隔热门\nabstract class Gate {\n    public void action() {\n        open();\n        close();\n    }\n\n    public abstract void open();\n    public abstract void close();\n}\n\n// 具体观察者一：警示灯\nclass CautionLight implements AlarmListener {\n    public void alarm() {\n        System.out.println(\"警示灯闪烁!\");\n    }\n}\n\n// 具体观察者二：报警器\nclass Annunciator implements AlarmListener {\n    public void alarm() {\n        System.out.println(\"报警器发出警报!\");\n    }\n}\n\n// 第(2)空：安全门既要用 Gate 的开关流程，又要能接收报警\nclass ExitGate ____(2) {\n    public void alarm() {\n        // 第(3)空：报警时执行父类 Gate 的 action 流程\n        ____(3)__;\n    }\n\n    public void open() {\n        System.out.println(\"逃生门开启!\");\n    }\n\n    public void close() {\n        System.out.println(\"隔热门关闭!\");\n    }\n}\n\n// 观察目标：温度传感器\nclass ThermoSensor {\n    private ArrayList alarmListeners = new ArrayList();  // 保存所有注册的响应设备\n// 注册一个响应设备\npublic void register(AlarmListener al) {\n    // 第(4)空：把设备加入列表\n    (4);\n}\n\n// 温度达到时触发：通知所有设备\npublic void trigger() {\n    for(Object obj:alarmListeners) {\n        // 第(5)空：列表元素是 Object，先转换成 AlarmListener 再调用报警方法\n        (5);\n    }\n}\n}\n\n// 客户端\nclass Test {\n    public static void main(String args[]) {\n        alarmListener light,annunciator,exitGate;\n        // 创建三个响应设备\n        light = new CautionLight();\n        annunciator = new Annunciator();\n        exitGate = new ExitGate();\n\n        ThermoSensor sensor;\n        // 第(6)空：创建传感器\n        (6);\n        // 依次注册三个设备\n        sensor.register(light);\n        sensor.register(annunciator);\n        sensor.register(exitGate);\n        // 第(7)空：让传感器触发，通知所有设备\n        (7); //触发警报\n    }\n}"
      }
    ],
    "answers": [
      "(1) interface AlarmListener; (2) extends Gate implements AlarmListener;  \n(3) super.action(); (4) alarmListeners.add(al); (5)((AlarmListener)obj).alarm();\n(6) sensor = new ThermoSensor(); (7) sensor.trigger()。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) interface AlarmListener; (2) extends Gate implements AlarmListener;  \n(3) super.action(); (4) alarmListeners.add(al); (5)((AlarmListener)obj).alarm();\n(6) sensor = new ThermoSensor(); (7) sensor.trigger()。"
      }
    ],
    "roles": [
      [
        "ThermoSensor",
        "观察目标，register() 登记设备，trigger() 通知设备"
      ],
      [
        "AlarmListener",
        "抽象观察者，声明 alarm()"
      ],
      [
        "CautionLight、Annunciator、ExitGate",
        "具体观察者，收到通知后各自响应"
      ],
      [
        "Gate",
        "抽象类，action() 依次调用 open() 和 close()"
      ]
    ],
    "steps": [
      {
        "title": "第一步　看谁通知谁",
        "bullets": [
          "温度传感器是被观察的对象，警示灯、报警器、安全门是观察者",
          "传感器只保存一个 AlarmListener 列表，触发时逐个调用 alarm()",
          "加新设备只要实现 AlarmListener 并注册，传感器不用改"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写接口和安全门",
        "bullets": [
          "(1) interface AlarmListener：只有方法声明，且后面的类用 implements AlarmListener",
          "(2) extends Gate implements AlarmListener：ExitGate 既要用 Gate 的 open/close 流程，又要能被传感器通知",
          "(3) super.action()：安全门报警时执行父类的 action()，即开逃生门、关隔热门"
        ],
        "code": ""
      },
      {
        "title": "第三步　逐空填写传感器和客户端",
        "bullets": [
          "(4) alarmListeners.add(al)：注册就是加入列表",
          "(5) ((AlarmListener)obj).alarm()：列表元素是 Object，先强转再调用",
          "(6) sensor = new ThermoSensor()：先创建传感器",
          "(7) sensor.trigger()：温度到了，通知所有设备"
        ],
        "code": ""
      }
    ],
    "memory": [
      "观察目标三件事：保存观察者列表、register 加入、notify 时循环调用 update",
      "一个类可以同时 extends 一个父类并 implements 观察者接口"
    ],
    "quotes": [
      {
        "text": "ConcreteSubject 角色表示具体的被观察对象。当自身状态发生变化后，它会通知所有已经注册的 Observer 角色。",
        "source": "17-Observer模式.md 第225行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/17-Observer模式.md"
  },
  {
    "id": "E4-FILL-08",
    "type": "fill",
    "source": "习题4填空题第8题",
    "category": "行为型设计模式",
    "pattern": "状态模式",
    "stem": "传输门是传输系统中的重要装置。传输门具有 Open(打开)、Closed(关闭)、Opening(正在打开)、StayOpen(保持打开)、Closing(正在关闭)5 种状态。触发状态的转换事件有 click、complete 和 timeout 3 种。事件与其相应的状态转换如图 9-15 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图 9-15 传输门响应事件与其状态转换图",
        "src": "images/written/p118-b05.png"
      },
      {
        "type": "text",
        "content": "下面的【Java 代码 1】与【Java 代码 2】分别用两种不同的设计思路对传输门进行状态模拟,请填补代码中的空缺。"
      },
      {
        "type": "text",
        "content": "【Java 代码 1】"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 传输门：代码 1 用整数和 if 判断来表示状态\n * 五种状态：CLOSED 关闭、OPENING 正在打开、OPEN 打开、CLOSING 正在关闭、STAYOPEN 保持打开\n * 三种事件：click 点击、complete 动作完成、timeout 超时\n * 缺点：所有状态的判断都堆在 Door 里，加一个状态就要改每个事件方法\n */\npublic class Door {\n    //定义状态变量,用不同的整数表示不同状态\n    // 用不同整数代表不同状态\n    public static final int CLOSED = 1;\n    public static final int OPENING = 2;\n    public static final int OPEN = 3;\n    public static final int CLOSING = 4;\n    public static final int STAYOPEN = 5;\n    private int state = CLOSED;  // 门一开始是关闭的\n\n    private void setState(int state) {\n        this.state = state;                 //设置传输门当前状态\n    }\n    public void getState() {\n        //此处代码省略,本方法输出状态字符串,\n        //例如,当前状态为 CLOSED 时,输出字符串为\"CLOSED\"\n    }\n    // 点击事件：根据当前状态决定转到哪个状态\n    public void click() {\n        // 第(1)空：哪些状态下点击会变成“正在打开”（看状态图，有两种）\n        if(____(1)____) setState(OPENING);\n        // 第(2)空：哪些状态下点击会变成“正在关闭”（也有两种）\n        else if(____(2)____) setState(CLOSING);\n        // 第(3)空：哪个状态下点击会变成“保持打开”\n        else if(____(3)____) setState(STAYOPEN);\n    }\n    //发生 timeout 事件时进行状态转换\n    public void timeout() {\n        // 打开状态下超时：开始关闭\n        if(state == OPEN) setState(CLOSING);\n    }\n    public void complete() {                 //发生 complete 事件时进行状态转换\n        // 打开动作完成：变为打开\n        if(state == OPENING) setState(OPEN);\n        // 关闭动作完成：变为关闭\n        else if(state == CLOSING) setState(CLOSED);\n    }\n    // 测试：交替输出状态和触发事件\n    public static void main(String[] args) {\n        Door aDoor = new Door();\n        aDoor.getState();aDoor.click();aDoor.getState();aDoor.complete();\n        aDoor.getState();aDoor.click();aDoor.getState();aDoor.click();\n        aDoor.getState();return;\n    }\n}"
      },
      {
        "type": "text",
        "content": "【Java 代码 2】"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 传输门：代码 2 用状态模式，每个状态是一个对象\n * 1. Door：环境类，持有当前状态，事件到来时直接交给状态对象处理\n * 2. DoorState：抽象状态，声明三个事件方法\n * 3. DoorClosed 等：具体状态，各自决定事件发生后转到哪个状态\n * 注意：DoorState 中 abstract 方法后面带了 {}，原书写法有误，抽象方法不应有方法体\n */\npublic class Door {\n    // 事先创建好五个状态对象，并把门自己传给它们\n    public final DoorState CLOSED = new DoorClosed(this);\npublic final DoorState OPENING = new DoorOpening(this);\npublic final DoorState OPEN = new DoorOpen(this);\npublic final DoorState CLOSING = new DoorClosing(this);\npublic final DoorState STAYOPEN = new DoorStayOpen(this);\nprivate DoorState state = CLOSED;  // 当前状态，一开始是关闭\n\n//设置传输门当前状态\n// 由状态对象调用，完成状态切换\npublic void setState(DoorState state) {\n    this.state = state;\n}\npublic void getState() {                  //根据当前状态输出对应的状态字符串\n    System.out.println(state.getClass().getName());\n}\n// 第(4)(5)(6)空：门自己不判断，把事件交给当前状态对象\npublic void click() {__(4)____;}      //发生 click 事件时进行状态转换\npublic void timeout() {__(5)____;}      //发生 timeout 事件时进行状态转换\npublic void complete() {__(6)____;}      //发生 complete 事件时进行状态转换\npublic static void main(String[] args){\n    Door aDoor = new Door();\n    aDoor.getState();aDoor.click();aDoor.getState();aDoor.complete();\n    aDoor.getState();aDoor.timeout();aDoor.getState();return;\n}\n}\n// 抽象状态\npublic abstract class DoorState {                  //定义所有状态类的基类\nprotected Door door;  // 状态对象要能改门的状态，所以保存门\npublic DoorState(Door door) {\n    this.door = door;\n}\npublic abstract void click() {}\npublic abstract void complete() {}\npublic abstract void timeout() {}\n}\n\n// 具体状态：关闭\nclass DoorClosed extends DoorState {                 //定义一个基本的 Closed 状态\n    public DoorClosed (Door door) {super(door); }\n    // 第(7)空：关闭状态下点击，让门切换到“正在打开”\n    public void click() {__(7)____;}\n//该类定义的其余代码省略\n}\n//其余代码省略"
      }
    ],
    "answers": [
      "(1) state == CLOSED || state == CLOSING; (2) state == OPENING || state == STAYOPEN; (3) state == OPEN; (4) state. click(); (5) state. timeout(); (6) state. complete(); (7) door. setState(door. OPENING)."
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) state == CLOSED || state == CLOSING; (2) state == OPENING || state == STAYOPEN; (3) state == OPEN; (4) state. click(); (5) state. timeout(); (6) state. complete(); (7) door. setState(door. OPENING)."
      }
    ],
    "roles": [
      [
        "Door",
        "环境类，持有当前状态"
      ],
      [
        "DoorState",
        "抽象状态，声明 click、complete、timeout"
      ],
      [
        "DoorClosed 等五个子类",
        "具体状态，各自决定事件发生后转到哪个状态"
      ]
    ],
    "steps": [
      {
        "title": "第一步　从状态图读出 click 的转换",
        "bullets": [
          "Closed 或 Closing 时点击 → Opening",
          "Opening 或 StayOpen 时点击 → Closing",
          "Open 时点击 → StayOpen",
          "timeout：Open → Closing；complete：Opening → Open，Closing → Closed"
        ],
        "code": ""
      },
      {
        "title": "第二步　代码 1：用整数和 if 判断",
        "bullets": [
          "(1) state == CLOSED || state == CLOSING",
          "(2) state == OPENING || state == STAYOPEN",
          "(3) state == OPEN",
          "这种写法把所有状态的判断堆在 Door 里，加一个状态就要改每个事件方法"
        ],
        "code": ""
      },
      {
        "title": "第三步　代码 2：用状态对象",
        "bullets": [
          "(4) state.click()、(5) state.timeout()、(6) state.complete()：Door 不判断，直接交给当前状态对象处理",
          "(7) door.setState(door.OPENING)：关闭状态下点击，由 DoorClosed 自己把门的状态改成正在打开",
          "状态对象通过构造时传入的 door 访问门，并调用 setState 完成转换"
        ],
        "code": ""
      },
      {
        "title": "第四步　两种写法的区别",
        "bullets": [
          "代码 1 用条件语句集中判断，状态多了 if 会越来越长",
          "代码 2 把每个状态的行为放进各自的类，环境类只做转发，加新状态主要是加新类"
        ],
        "code": ""
      }
    ],
    "memory": [
      "状态模式中环境类的事件方法只写一句：state.事件()",
      "状态转换写在具体状态类里：door.setState(door.下一个状态)"
    ],
    "quotes": [
      {
        "text": "Context 角色持有表示当前状态的 ConcreteState 角色。",
        "source": "19-State模式.md 第479行"
      },
      {
        "text": "(4) state. click(); (5) state. timeout(); (6) state. complete(); (7) door. setState(door. OPENING).",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第49行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/19-State模式.md"
  },
  {
    "id": "E4-FILL-09",
    "type": "fill",
    "source": "习题4填空题第9题",
    "category": "行为型设计模式",
    "pattern": "策略模式",
    "stem": "某软件公司现要开发一款飞机模拟系统,该系统主要模拟不同种类飞机的飞行特征与起飞特征。需要模拟的飞机种类及其特征如表 9-1 所示。",
    "materials": [
      {
        "type": "text",
        "content": "为支持将来模拟更多种类的飞机,采用策略设计模式(Strategy)设计的类图如图 9-16 所示。"
      },
      {
        "type": "text",
        "content": "表 9-1 需要模拟的飞机种类及其特征一览表"
      },
      {
        "type": "table",
        "headers": [
          "飞机种类",
          "起飞特征",
          "飞行特征"
        ],
        "rows": [
          [
            "直升机(Helicopter)",
            "垂直起飞(VerticalTakeOff)",
            "亚音速飞行(SubSonicFly)"
          ],
          [
            "客机(AirPlane)",
            "长距离起飞(LongDistanceTakeOff)",
            "亚音速飞行(SubSonicFly)"
          ],
          [
            "歼击机(Fighter)",
            "长距离起飞(LongDistanceTakeOff)",
            "超音速飞行(SuperSonicFly)"
          ],
          [
            "鹞式战斗机(Harrier)",
            "垂直起飞(VerticalTakeOff)",
            "超音速飞行(SuperSonicFly)"
          ]
        ]
      },
      {
        "type": "image",
        "alt": "图9-16 填空题9类图",
        "src": "images/written/p121-b06.png"
      },
      {
        "type": "text",
        "content": "在图 9-16 中, AirCraft 为抽象类, 描述了抽象的飞机, 而类 Helicopter、AirPlane、Fighter 和 Harrier 分别描述具体的飞机种类, 方法 fly() 和 takeOff() 分别表示不同飞机都具有飞行特征和起飞特征; 类 FlyBehavior 与 TakeOffBehavior 为抽象类, 分别用于表示抽象的飞行行为与起飞行为; 类 SubSonicFly 与 SuperSonicFly 分别描述亚音速飞行和超音速飞行的行为; 类 VerticalTakeOff 与 LongDistanceTakeOff 分别描述垂直起飞与长距离起飞的行为。"
      },
      {
        "type": "text",
        "content": "【Java 代码】"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 策略模式实现的飞机模拟\n * 两组策略：飞行行为 FlyBehavior（亚音速、超音速）、起飞行为 TakeOffBehavior（垂直、长距离）\n * 飞机 AirCraft 持有这两种策略，具体飞机在构造时选好要用的策略\n */\n// 抽象策略一：飞行方式\ninterface FlyBehavior{\n    public void fly();\n}\n\n// 具体策略：亚音速飞行\nclass SubSonicFly implements FlyBehavior{\n    public void fly() {System.out.println(\"亚音速飞行!\");}\n}\n\n// 具体策略：超音速飞行\nclass SuperSonicFly implements FlyBehavior{\n    public void fly() {System.out.println(\"超音速飞行!\");}\n}\n\n// 抽象策略二：起飞方式\ninterface TakeOffBehavior{\npublic void takeOff();\n}\n\n// 具体策略：垂直起飞\nclass VerticalTakeOff implements TakeOffBehavior{\n    public void takeOff() {System.out.println(\"垂直起飞!\");}\n}\n\n// 具体策略：长距离起飞\nclass LongDistanceTakeOff implements TakeOffBehavior{\n    public void takeOff() {System.out.println(\"长距离起飞!\");}\n}\n\n// 环境类：飞机\nabstract class AirCraft{\n    // 第(1)(2)空：保存两种策略的成员变量，变量名要和子类构造方法中用到的一致\n    protected (1) ;\n    protected (2) ;\n    // 第(3)空：飞行交给飞行策略去做\n    public void fly() { (3) ; }\n    // 第(4)空：起飞交给起飞策略去做\n    public void takeOff() { (4) ; }\n}\n\n// 第(5)空：直升机和抽象类 AirCraft 的关系\nclass Helicopter (5) AirCraft {\n    public Helicopter() {\n        // 第(6)空：直升机的飞行方式\n        flyBehavior = new (6) ;\n        // 第(7)空：直升机的起飞方式\n        takeOffBehavior = new (7) ;\n    }\n}\n//其他代码省略"
      }
    ],
    "answers": [
      "(1) FlyBehavior flyBehavior; (2) TakeOffBehavior takeOffBehavior; (3) flyBehavior.fly();\n(4) takeOffBehavior.takeOff(); (5) extends; (6) SubSonicFly(); (7) VerticalTakeOff()。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) FlyBehavior flyBehavior; (2) TakeOffBehavior takeOffBehavior; (3) flyBehavior.fly();\n(4) takeOffBehavior.takeOff(); (5) extends; (6) SubSonicFly(); (7) VerticalTakeOff()。"
      }
    ],
    "roles": [
      [
        "AirCraft",
        "环境类，持有飞行行为和起飞行为两个策略"
      ],
      [
        "FlyBehavior、TakeOffBehavior",
        "两组抽象策略"
      ],
      [
        "SubSonicFly、SuperSonicFly",
        "具体飞行策略"
      ],
      [
        "VerticalTakeOff、LongDistanceTakeOff",
        "具体起飞策略"
      ],
      [
        "Helicopter 等",
        "具体飞机，在构造时选好策略"
      ]
    ],
    "steps": [
      {
        "title": "第一步　找出变化的行为",
        "bullets": [
          "不同飞机的飞行方式有亚音速、超音速两种，起飞方式有垂直、长距离两种",
          "把飞行和起飞都抽成策略接口，飞机只持有策略，不自己写具体做法"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写 AirCraft",
        "bullets": [
          "(1) FlyBehavior flyBehavior、(2) TakeOffBehavior takeOffBehavior：子类构造方法里用的就是这两个变量名",
          "(3) flyBehavior.fly()、(4) takeOffBehavior.takeOff()：飞机的 fly、takeOff 委托给策略对象"
        ],
        "code": ""
      },
      {
        "title": "第三步　逐空填写 Helicopter",
        "bullets": [
          "(5) extends：AirCraft 是抽象类，用继承",
          "(6) SubSonicFly()：直升机亚音速飞行",
          "(7) VerticalTakeOff()：直升机垂直起飞",
          "表 9-1 在题库数据中没有显示出来，飞机特征以参考答案为准"
        ],
        "code": ""
      },
      {
        "title": "第四步　为什么这样设计",
        "bullets": [
          "飞行和起飞是两个独立的变化点，各自一组策略，可以自由搭配",
          "新增一种飞机只要选好两个策略；新增一种起飞方式只要加一个策略类"
        ],
        "code": ""
      }
    ],
    "memory": [
      "环境类持有抽象策略变量，方法里写“策略变量.方法()”",
      "具体子类在构造方法里 new 具体策略"
    ],
    "quotes": [
      {
        "text": "负责使用 Strategy 角色。Context 角色保存了 ConcreteStrategy 角色的实例，并使用 ConcreteStrategy 角色去实现需求",
        "source": "10-Strategy模式.md 第388行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/10-Strategy模式.md"
  },
  {
    "id": "E4-FILL-10",
    "type": "fill",
    "source": "习题4填空题第10题",
    "category": "行为型设计模式",
    "pattern": "模板方法模式",
    "stem": "已知某类库开发商提供了一套类库, 类库中定义了 Application 类和 Document 类, 它们之间的关系如图 9-17 所示。其中, Application 类表示应用程序自身, 而 Document 类则表示应用程序打开的文档。Application 类负责打开一个已有的以外部形式存储的文档, 如一个文件, 一旦从该文件中读出信息后, 它就由一个 Document 对象表示。",
    "materials": [
      {
        "type": "image",
        "alt": "图9-17 填空题10类图",
        "src": "images/written/p122-b05.png"
      },
      {
        "type": "text",
        "content": "当开发一个具体的应用程序时,开发者需要分别创建自己的 Application 和 Document 子类,例如图 9-17 中的类 MyApplication 和类 MyDocument,并分别实现 Application 和 Document 类中的某些方法。"
      },
      {
        "type": "text",
        "content": "已知 Application 类中的 openDocument() 方法采用了模板方法设计模式, 该方法定义了打开文档的每一个步骤, 如下所示:"
      },
      {
        "type": "text",
        "content": "(1) 检查文档是否能够被打开, 若不能打开, 则给出出错信息并返回。"
      },
      {
        "type": "text",
        "content": "(2) 创建文档对象。"
      },
      {
        "type": "text",
        "content": "(3) 通过文档对象打开文档。"
      },
      {
        "type": "text",
        "content": "（4）通过文档对象读取文档信息。"
      },
      {
        "type": "text",
        "content": "(5) 将文档对象加入到 Application 的文档对象集合中。"
      },
      {
        "type": "text",
        "content": "Java 代码"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 模板方法模式：打开文档的固定流程\n * openDocument() 是模板方法，五个步骤：检查能否打开 → 创建文档 → 打开 → 读取 → 加入集合\n * 其中“创建什么文档”和“怎么读取”由子类决定\n */\n// 抽象文档：save、open、close 已实现，read 留给子类\nabstract class Document {\n    public void save() { /* 存储文档数据,此处代码省略 */}\n    public void open(String docName) { /* 打开文档,此处代码省略 */}\n    public void close() { /* 关闭文档,此处代码省略 */}\n    public abstract void read(String docName);  // 读取方式随文档类型不同，由子类实现\n}\n\n// 抽象应用程序：定义打开文档的流程\nabstract class Application {\n    // 第(1)空：集合里存放的元素类型\n    private Vector <__(1)> docs; /* 文档对象集合 */\n    public boolean canOpenDocument(String docName){\n        /* 判断是否可以打开指定文档,返回真值时表示可以打开,\n        返回假值时表示不可打开,此处代码省略 */\n    }\n    // 把文档加入集合\n    public void addDocument(Document aDocument){\n        /* 将文档对象添加到文档对象集合中 */\n        // 第(2)空：要加入的是传进来的参数\n        docs.add(____(2)));\n    }\n    // 创建文档：由子类决定创建哪种文档（这一步同时是工厂方法）\n    public abstract Document doCreateDocument();      /* 创建一个文档对象 */\n    // 模板方法：步骤顺序在这里固定\n    public void openDocument(String docName) {       /* 打开文档 */\n        // 第(3)空：步骤 1，不能打开时报错返回，注意条件要取反\n        if(____(3)) {\n            System.out.println(\"文档无法打开!\");\n            return;\n        }\n        // 第(4)(5)空：步骤 2，用父类类型接收子类创建的文档\n        (4) adoc = ____(5);\n        // 第(6)(7)(8)空：步骤 3～5，依次打开、读取、加入集合\n        (6);\n        (7);\n        (8);\n    }\n}"
      }
    ],
    "answers": [
      "(1) Document; (2) aDocument; (3)! canOpenDocument(docName); (4) Document;\n(5)doCreateDocument(); (6) adoc.open(docName); (7) adoc.read(docName);\n\n:\n\n(8) addDocument(adoc)。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) Document; (2) aDocument; (3)! canOpenDocument(docName); (4) Document;\n(5)doCreateDocument(); (6) adoc.open(docName); (7) adoc.read(docName);"
      },
      {
        "type": "text",
        "content": ":"
      },
      {
        "type": "text",
        "content": "(8) addDocument(adoc)。"
      }
    ],
    "roles": [
      [
        "Application",
        "抽象父类，openDocument() 是模板方法"
      ],
      [
        "Document",
        "抽象文档，read() 由子类实现"
      ],
      [
        "MyApplication、MyDocument",
        "具体子类，实现 doCreateDocument() 和 read()"
      ]
    ],
    "steps": [
      {
        "title": "第一步　把五个步骤对应到方法",
        "bullets": [
          "检查能否打开 → canOpenDocument(docName)",
          "创建文档对象 → doCreateDocument()，由子类决定创建哪种文档",
          "打开文档 → adoc.open(docName)",
          "读取信息 → adoc.read(docName)",
          "加入集合 → addDocument(adoc)"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写",
        "bullets": [
          "(1) Document：集合里存放的是文档对象",
          "(2) aDocument：把参数加入集合",
          "(3) !canOpenDocument(docName)：不能打开时才输出错误并返回，所以要取反",
          "(4) Document、(5) doCreateDocument()：用父类类型接收子类创建的文档",
          "(6) adoc.open(docName)、(7) adoc.read(docName)、(8) addDocument(adoc)：按步骤顺序写"
        ],
        "code": ""
      },
      {
        "title": "第三步　模板方法体现在哪",
        "bullets": [
          "openDocument() 在父类里把五个步骤的顺序写死，子类不能改顺序",
          "其中“创建什么文档”和“怎么读文档”留给子类实现",
          "doCreateDocument() 让子类决定创建哪个类，这一步同时是工厂方法"
        ],
        "code": ""
      }
    ],
    "memory": [
      "模板方法填空：按题目给出的步骤顺序逐行写调用",
      "条件判断“不能……就返回”时注意加 ! 取反"
    ],
    "quotes": [
      {
        "text": "像这样在父类中定义处理流程的框架，在子类中实现具体处理的模式就称为 Template Method 模式。",
        "source": "03-TemplateMethod模式.md 第27行"
      },
      {
        "text": "Factory Method 模式是将 Template Method 模式用于生成实例的一个典型例子。",
        "source": "03-TemplateMethod模式.md 第283行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/03-TemplateMethod模式.md"
  },
  {
    "id": "E4-FILL-11",
    "type": "fill",
    "source": "习题4填空题第11题",
    "category": "行为型设计模式",
    "pattern": "访问者模式",
    "stem": "某图书管理系统中,需要处理每一个书库中资料的页数和作者等信息。书库中的资料包括图书、期刊和论文,其中有些论文是独立存在的,有些论文作为期刊的一部分。使用访问者模式设计该系统,类图如图 9-18 所示。",
    "materials": [
      {
        "type": "image",
        "alt": "图 9-18 填空题 11 类图",
        "src": "images/written/p124-b03.png"
      },
      {
        "type": "text",
        "content": "在图 9-18 中, ItemHandler 是抽象访问者, 声明了访问不同类型元素的方法, PageHandler 和 AuthorHandler 作为具体访问者, 分别用于对页数和作者信息进行处理; Item 是抽象元素类, 其子类 Book 表示图书、Magazine 表示期刊、Paper 表示论文; Library 充当对象结构, 用于存储图书、期刊和论文等资料信息。"
      },
      {
        "type": "text",
        "content": "【Java 代码】"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 访问者模式实现的书库资料处理（第一部分）\n * 1. ItemHandler：抽象访问者，为三种资料各声明一个 handle 方法\n * 2. PageHandler、AuthorHandler：具体访问者，分别处理页数和作者\n * 3. Item：抽象元素，声明 accept 方法\n * 4. Book、Magazine、Paper：具体元素\n * 注意：item_magazineName 是原书识别错误，应为 item.magazineName\n */\nimport java.util.*;\n// 抽象访问者：每种资料对应一个同名的 handle 重载方法\nabstract class ItemHandler {\n    public abstract void handle(Book item);\n    public abstract void handle(Magazine item);\n    public abstract void handle(Paper item);\n}\n\n// 具体访问者：处理页数\nclass PageHandler extends ItemHandler {\n    //图书页数处理\n    public void handle(Book item) {\n        System.out.println(\"图书:«\" + item.bookName + \"»页数:\" + item.totalPages);\n    }\n\n    //期刊页数处理\n    // 期刊的页数：把所有论文的页数加起来\n    public void handle(Magazine item) {\nint pages = 0;\nfor(Object obj : item.papers) {\n    // 第(1)空：在已有页数上加上当前这篇论文的页数\n    pages = ______(1) ______; //计算期刊总页数\n}\nSystem.out.println(\"杂志:《\" + item_magazineName + item.magazineNo + \"》页数:\" +\npages);\nSystem.out.println(\"包含论文如下:\");\nfor(Object obj : item.papers) {\n    System.out.println(\" 论文:《\" + ((Paper)obj).paperTitle + \"》页数:\" +\n((Paper)obj).pages);\n}\n}\n\n//论文页数处理\npublic void handle(Paper item){\n    System.out.println(\"论文:《\" + item.paperTitle + \"》页数:\" + item.pages);\n}\n}\n\n// 具体访问者：处理作者，代码省略\nclass AuthorHandler extends ItemHandler {\n    public void handle(Book item) { //图书作者处理,代码省略 }\n    public void handle(Magazine item) { //期刊作者处理,代码省略 }\n    public void handle(Paper item) { //论文作者处理,代码省略 }\n}\n\n// 抽象元素：每种资料都要能接受访问者\ninterface Item {\n    public void accept(ItemHandler handler);\n}\n\n// 具体元素：期刊，里面包含多篇论文\nclass Magazine implements Item {\n    public List papers = new ArrayList();\n    public String magazineName;\n    public String magazineNo;\n    // 第(2)空：把论文加入期刊的论文列表\n    public void addPaper(Paper paper) {\n        ______(2) ______;\n    }\n    // 第(3)空：接受访问，把自己交给访问者处理\n    public void accept(ItemHandler handler) {\n        ______(3) ______;\n    }\n}\n\n// 具体元素：图书\nclass Book implements Item {\n    public String bookName;\n    public String author;\n    public int totalPages;\n    public void accept(ItemHandler handler) {\n        // 第(4)空：写法和期刊的 accept 完全相同\n        ______(4) ______;"
      },
      {
        "type": "text",
        "content": ":"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 访问者模式实现的书库资料处理（第二部分，接上一段）\n * Library：对象结构，保存所有资料，并让访问者逐个访问\n */\n}\n}\n\n// 具体元素：论文\nclass Paper implements Item {\n    public String paperTitle;\n    public String author;\n    public int pages;\n    public void accept(ItemHandler handler) {\n        // 第(5)空：写法同样是把自己交给访问者\n        (5) ;\n    }\n}\n\n// 对象结构：书库\nclass Library {\n    private List items = new ArrayList();\n    public void addItem(Item item) {\n        // 第(6)空：把资料加入列表\n        (6) ;\n    }\n    // 让访问者访问书库中的所有资料\n    public void accept(ItemHandler handler) {\n        for(Object obj : items) {\n            // 第(7)空：列表元素是 Object，先转换成 Item 再调用它的 accept\n            (7) ;\n        }\n    }\n}\n\nclass Test {\n    public static void main(String args[]) {\n        // 准备一本图书\n        Book book = new Book();\n        book.bookName = \"21 天精通九阳神功\";\n        book.author = \"张无忌\";\n        book.totalPages = 450;\n        // 准备一本期刊\n        Magazine magazine = new Magazine();\n        magazine.magazineName = \"功夫学报\";\n        magazine.magazineNo = \"2018 年第 1 期\";\n        Paper paper1 = new Paper();\n        paper1.paperTitle = \"如何单手制服敌人\";\n        paper1.author = \"杨过\";\n        paper1.pages = 12;\n        Paper paper2 = new Paper();\n        paper2.paperTitle = \"我和杨过的功夫情缘\";\n        paper2.author = \"小龙女\";\n        paper2.pages = 8;\n        Paper paper3 = new Paper();\n        paper3.paperTitle = \"研究报告 - 靖哥哥的九大弱点\";\n        paper3.author = \"黄蓉\";\n        paper3.pages = 30;\n        // paper1、paper2 属于期刊；paper3 是独立论文\n        magazine.addPaper(paper1);\n        magazine.addPaper(paper2);\n\n        // 把三份资料放进书库\n        Library lib = new Library();\nlib.addItem(book);\n    lib.addItem(magazine);\n    lib.addItem(paper3);\n    // 选择“处理页数”的访问者\n    ItemHandler handler = new PageHandler();\n    // 第(8)空：把访问者交给书库，逐个处理所有资料\n    (8) ;  //访问对象结构\n}\n}"
      }
    ],
    "answers": [
      "(1) pages + ((Paper) obj). pages; (2) papers. add(paper); (3) handler. handle(this); (4) handler. handle(this); (5) handler. handle(this); (6) items. add(item); (7)((Item) obj). accept(handler); (8) lib. accept(handler)。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "(1) pages + ((Paper) obj). pages; (2) papers. add(paper); (3) handler. handle(this); (4) handler. handle(this); (5) handler. handle(this); (6) items. add(item); (7)((Item) obj). accept(handler); (8) lib. accept(handler)。"
      }
    ],
    "roles": [
      [
        "ItemHandler",
        "抽象访问者，为三种资料各声明一个 handle()"
      ],
      [
        "PageHandler、AuthorHandler",
        "具体访问者，处理页数或作者"
      ],
      [
        "Item",
        "抽象元素，声明 accept(handler)"
      ],
      [
        "Book、Magazine、Paper",
        "具体元素"
      ],
      [
        "Library",
        "对象结构，保存所有资料并让访问者逐个访问"
      ]
    ],
    "steps": [
      {
        "title": "第一步　看清“双重分派”",
        "bullets": [
          "Library 对每个资料调用 accept(handler)",
          "资料在 accept 里调用 handler.handle(this)，把自己交给访问者",
          "this 的类型是 Book、Magazine 或 Paper，Java 据此选中对应的 handle 方法"
        ],
        "code": ""
      },
      {
        "title": "第二步　逐空填写访问者和元素",
        "bullets": [
          "(1) pages + ((Paper)obj).pages：期刊总页数是各篇论文页数的累加",
          "(2) papers.add(paper)：期刊收录论文",
          "(3)(4)(5) handler.handle(this)：三个元素的 accept 写法完全一样"
        ],
        "code": ""
      },
      {
        "title": "第三步　逐空填写对象结构和客户端",
        "bullets": [
          "(6) items.add(item)：书库加入资料",
          "(7) ((Item)obj).accept(handler)：遍历时让每个资料接受访问",
          "(8) lib.accept(handler)：客户端把页数访问者交给书库",
          "代码里的 item_magazineName 是识别错误，应为 item.magazineName"
        ],
        "code": ""
      },
      {
        "title": "第四步　扩展时改哪里",
        "bullets": [
          "要加一种新处理（比如统计价格），只加一个新的 ItemHandler 子类",
          "要加一种新资料（比如报纸），所有访问者都要加一个 handle 方法"
        ],
        "code": ""
      }
    ],
    "memory": [
      "元素的 accept 固定写 handler.handle(this) 或 visitor.visit(this)",
      "对象结构的 accept 是遍历所有元素，逐个调用它们的 accept"
    ],
    "quotes": [
      {
        "text": "Element 角色表示 Visitor 角色的访问对象。它声明了接受访问者的 accept 方法。",
        "source": "13-Visitor模式.md 第366行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/13-Visitor模式.md"
  },
  {
    "id": "E4-COMP-01",
    "type": "comprehensive",
    "source": "习题4综合题第1题",
    "category": "行为型设计模式",
    "pattern": "职责链模式",
    "stem": "在军队中,一般根据战争规模的大小和重要性由不同级别的长官(Officer)来下达作战命令,情报人员向上级递交军情(如敌人的数量),作战命令需要上级批准,如果直接上级不具备下达命令的权力,则上级又传给上级,直到有人可以决定为止。现使用职责链模式来模拟该过程,客户类(Client)模拟情报人员,首先向级别最低的班长(Banzhang)递交任务书(Mission),即军情,如果超出班长的权力范围,则传递给排长(Paizhang),排长如果也不能处理,则传递给营长(Yingzhang),如果营长也不能处理,则需要开会讨论。设置这几级长官的权力范围分别是:",
    "materials": [
      {
        "type": "text",
        "content": "(1) 敌人数量<10, 班长下达作战命令;"
      },
      {
        "type": "text",
        "content": "(2)  10 ≤  敌人数量 < 50, 排长下达作战命令;"
      },
      {
        "type": "text",
        "content": "(3)  50 ≤  敌人数量 <200, 营长下达作战命令;"
      },
      {
        "type": "text",
        "content": "(4) 敌人数量≥200, 需要开会讨论再下达作战命令。"
      },
      {
        "type": "text",
        "content": "绘制类图并编程实现。"
      }
    ],
    "answers": [
      "职责链模式。参考类图如图 9-19 所示。\n\n![图9-19 综合题1参考类图](images/written/p130-b08.png)\n\n图9-19 综合题1参考类图\n\n解析:在图 9-19 中，Mission 充当请求角色，Officer 充当抽象传递者角色，Banzhang、Paizhang 和 Yingzhang 充当具体传递者角色。其中，Officer 类、Banzhang 类和 Yingzhang 类的代码如下(其他类代码省略):\n\n```java\nabstract class Officer {\n    protected String name;\n    protected Officer successor;\n    public Officer(String name) {\n        this.name = name;\n    }\n    public void setSuccessor(Officer successor) {\nthis.successor = successor;\n}\npublic abstract void handleRequest(Mission request);\n}\n\nclass Banzhang extends Officer {\n    public Banzhang(String name) {\n        super(name);\n    }\n\n    public void handleRequest(Mission request) {\n        if(request.getEnemyNumber)<10) {\n            System.out.println(\"班长\" + name + \"下达代号为\" + request.getCode() + \"的作战任务,敌人数量为\" + request.getEnemyNumber());\n        }\n        else {\n            if(this.successor!= null) {\n                this.successor.handleRequest(request);\n            }\n        }\n    }\n}\n\nclass Yingzhang extends Officer {\n    public Yingzhang(String name) {\n        super(name);\n    }\n\n    public void handleRequest(Mission request) {\n        if(request.getEnemyNumber)<200) {\n            System.out.println(\"营长\" + name + \"下达代号为\" + request.getCode() + \"的作战任务,敌人数量为\" + request.getEnemyNumber());\n        }\n        else {\n            System.out.println(\"开会讨论代号为\" + request.getCode() + \"的作战任务,敌人数量为\" + request.getEnemyNumber());\n        }\n    }\n}\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "职责链模式。参考类图如图 9-19 所示。"
      },
      {
        "type": "image",
        "alt": "图9-19 综合题1参考类图",
        "src": "images/written/p130-b08.png"
      },
      {
        "type": "text",
        "content": "解析:在图 9-19 中，Mission 充当请求角色，Officer 充当抽象传递者角色，Banzhang、Paizhang 和 Yingzhang 充当具体传递者角色。其中，Officer 类、Banzhang 类和 Yingzhang 类的代码如下(其他类代码省略):"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 职责链模式模拟军队逐级下达命令\n * 1. Officer：抽象传递者，保存上级 successor\n * 2. Banzhang（班长）、Paizhang（排长，原书省略）、Yingzhang（营长）：具体传递者\n * 3. Mission：请求，保存任务代号和敌人数量\n * 权限：敌人 < 10 班长处理；< 50 排长处理；< 200 营长处理；≥ 200 开会讨论\n * 注意：request.getEnemyNumber)<10 是原书识别错误，应为 request.getEnemyNumber()<10\n */\n// 抽象传递者：所有长官的父类\nabstract class Officer {\n    protected String name;  // 长官姓名\n    protected Officer successor;  // 上级长官：自己处理不了时交给他\n    public Officer(String name) {\n        this.name = name;\n    }\n    // 设置上级，用来把长官串成链\n    public void setSuccessor(Officer successor) {\nthis.successor = successor;\n}\n// 处理军情，由各级长官实现\npublic abstract void handleRequest(Mission request);\n}\n\n// 班长：链的第一环\nclass Banzhang extends Officer {\n    public Banzhang(String name) {\n        super(name);\n    }\n\n    public void handleRequest(Mission request) {\n        // 敌人少于 10：在班长权限内，直接下达命令\n        if(request.getEnemyNumber)<10) {\n            System.out.println(\"班长\" + name + \"下达代号为\" + request.getCode() + \"的作战任务,敌人数量为\" + request.getEnemyNumber());\n        }\n        // 超出权限：有上级就交给上级\n        else {\n            if(this.successor!= null) {\n                this.successor.handleRequest(request);  // 把同一份军情交给上级处理\n            }\n        }\n    }\n}\n\n// 营长：链的最后一环，负责兜底\nclass Yingzhang extends Officer {\n    public Yingzhang(String name) {\n        super(name);\n    }\n\n    public void handleRequest(Mission request) {\n        // 敌人少于 200：营长下达命令\n        if(request.getEnemyNumber)<200) {\n            System.out.println(\"营长\" + name + \"下达代号为\" + request.getCode() + \"的作战任务,敌人数量为\" + request.getEnemyNumber());\n        }\n        // 200 及以上：营长也不能决定，开会讨论\n        else {\n            System.out.println(\"开会讨论代号为\" + request.getCode() + \"的作战任务,敌人数量为\" + request.getEnemyNumber());\n        }\n    }\n}"
      }
    ],
    "roles": [
      [
        "Mission",
        "请求，保存任务代号和敌人数量"
      ],
      [
        "Officer",
        "抽象传递者，保存上级 successor"
      ],
      [
        "Banzhang、Paizhang、Yingzhang",
        "具体传递者，各管一个敌人数量范围"
      ],
      [
        "Client",
        "情报人员，把任务书交给班长"
      ]
    ],
    "steps": [
      {
        "title": "第一步　把权力范围排成链",
        "bullets": [
          "敌人 < 10：班长处理",
          "10～49：排长处理",
          "50～199：营长处理",
          "≥ 200：营长那一层也处理不了，开会讨论",
          "所以链是：班长 → 排长 → 营长，营长兜底处理“开会讨论”"
        ],
        "code": ""
      },
      {
        "title": "第二步　抽象传递者怎么写",
        "bullets": [
          "Officer 保存 name 和 successor，提供 setSuccessor()",
          "声明抽象方法 handleRequest(Mission request)，每级长官各自实现"
        ],
        "code": ""
      },
      {
        "title": "第三步　具体长官怎么写",
        "bullets": [
          "班长：敌人数量 < 10 就下达命令，否则如果有上级就调用 successor.handleRequest(request)",
          "排长写法相同，只是判断范围换成 < 50",
          "营长：< 200 就下达命令，否则输出“开会讨论”",
          "参考代码中的 request.getEnemyNumber)<10 是识别错误，应为 request.getEnemyNumber()<10"
        ],
        "code": ""
      },
      {
        "title": "第四步　客户端和扩展",
        "bullets": [
          "客户端创建三级长官，班长.setSuccessor(排长)，排长.setSuccessor(营长)，再把 Mission 交给班长",
          "要加一级（比如连长），只加一个 Officer 子类，并在客户端重新串链，已有长官类不用改"
        ],
        "code": ""
      }
    ],
    "memory": [
      "职责链的每个处理者：能处理就处理，不能就交给 successor",
      "链的顺序在客户端组装，最后一环要兜底"
    ],
    "quotes": [
      {
        "text": "解析:在图 9-19 中，Mission 充当请求角色，Officer 充当抽象传递者角色，Banzhang、Paizhang 和 Yingzhang 充当具体传递者角色。",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第73行"
      },
      {
        "text": "Handler 角色定义了处理请求的接口（API）。Handler 角色知道“下一个处理者”是谁",
        "source": "14-ChainofResponsibility模式.md 第265行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/14-ChainofResponsibility模式.md"
  },
  {
    "id": "E4-COMP-02",
    "type": "comprehensive",
    "source": "习题4综合题第2题",
    "category": "行为型设计模式",
    "pattern": "命令模式",
    "stem": "为了用户使用方便,某系统提供了一系列功能键,用户可以自定义功能键的功能,如功能键 FunctionButton 可以用于退出系统(SystemExitClass),也可以用于打开帮助界面(DisplayHelpClass)。用户可以通过修改配置文件来改变功能键的用途。现使用命令模式来设计该系统,使得功能键类与功能类之间解耦,相同的功能键可以对应不同的功能。",
    "materials": [],
    "answers": [
      "命令模式。参考类图如图 9-20 所示。\n\n解析:在图 9-20 中，FunctionButton 充当请求调用者，SystemExitClass 和 DisplayHelpClass 充当请求接收者，而 ExitCommand 和 HelpCommand 充当具体命令类。其中，FunctionButton 类、Command 类、ExitCommand 类和 SystemExitClass 类代码如下:\n\n![图 9-20 综合题 2 参考类图](images/written/p132-b03.png)\n\n图 9-20 综合题 2 参考类图\n\n```java\nclass FunctionButton {\n    private Command command;\n    public void setCommand(Command command) {\n        this.command = command;\n    }\n    public void click() {\n        command.execute();\n    }\n}\n\nabstract class Command {\n    public abstract void execute();\n}\n\nclass ExitCommand extends Command {\n    private SystemExitClass seObj;\n    public ExitCommand() {\n        seObj = new SystemExitClass();\n    }\n    public void execute() {\n        seObj.exit();\n    }\n}\n\nclass SystemExitClass {\n    public void exit() {\n        System.out.println(\"退出系统!\");\n    }\n}\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "命令模式。参考类图如图 9-20 所示。"
      },
      {
        "type": "text",
        "content": "解析:在图 9-20 中，FunctionButton 充当请求调用者，SystemExitClass 和 DisplayHelpClass 充当请求接收者，而 ExitCommand 和 HelpCommand 充当具体命令类。其中，FunctionButton 类、Command 类、ExitCommand 类和 SystemExitClass 类代码如下:"
      },
      {
        "type": "image",
        "alt": "图 9-20 综合题 2 参考类图",
        "src": "images/written/p132-b03.png"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 命令模式实现的自定义功能键\n * 1. FunctionButton：调用者，只持有抽象命令\n * 2. Command：抽象命令\n * 3. ExitCommand：具体命令，持有接收者 SystemExitClass\n * 4. SystemExitClass：接收者，真正执行退出\n * HelpCommand 和 DisplayHelpClass 写法相同，原书省略\n */\n// 调用者：功能键\nclass FunctionButton {\n    private Command command;  // 功能键只认抽象命令，不知道具体功能\n    // 设置这个键对应的命令，换功能只需换命令对象\n    public void setCommand(Command command) {\n        this.command = command;\n    }\n    // 按下功能键\n    public void click() {\n        command.execute();  // 执行命令，具体做什么由命令决定\n    }\n}\n\n// 抽象命令\nabstract class Command {\n    public abstract void execute();\n}\n\n// 具体命令：退出系统\nclass ExitCommand extends Command {\n    private SystemExitClass seObj;  // 持有接收者\n    public ExitCommand() {\n        seObj = new SystemExitClass();\n    }\n    // 执行命令：转交给接收者\n    public void execute() {\n        seObj.exit();\n    }\n}\n\n// 接收者：真正完成退出系统的类\nclass SystemExitClass {\n    public void exit() {\n        System.out.println(\"退出系统!\");\n    }\n}"
      }
    ],
    "roles": [
      [
        "FunctionButton",
        "请求调用者，持有一个 Command"
      ],
      [
        "Command",
        "抽象命令，声明 execute()"
      ],
      [
        "ExitCommand、HelpCommand",
        "具体命令"
      ],
      [
        "SystemExitClass、DisplayHelpClass",
        "请求接收者，真正退出系统或显示帮助"
      ]
    ],
    "steps": [
      {
        "title": "第一步　找出要解耦的两方",
        "bullets": [
          "功能键只负责“被按下”，不应该知道自己具体干什么",
          "退出系统、打开帮助是具体功能，以后还会增加",
          "题目要求同一个功能键能对应不同功能，还能通过配置文件更换"
        ],
        "code": ""
      },
      {
        "title": "第二步　中间加一层命令对象",
        "bullets": [
          "FunctionButton 只持有抽象 Command，click() 里调用 command.execute()",
          "ExitCommand 持有 SystemExitClass，execute() 里调用 seObj.exit()",
          "HelpCommand 同理持有 DisplayHelpClass，调用显示帮助的方法"
        ],
        "code": ""
      },
      {
        "title": "第三步　怎样通过配置文件切换功能",
        "bullets": [
          "把具体命令类名写在配置文件里",
          "程序读取类名，用反射创建命令对象，再 setCommand() 给功能键",
          "换功能只改配置文件，FunctionButton 的源代码不动"
        ],
        "code": ""
      },
      {
        "title": "第四步　写在试卷上的答案要点",
        "bullets": [
          "画出 FunctionButton → Command，Command 下有 ExitCommand、HelpCommand，各自指向接收者",
          "说明调用者、命令、接收者三方的对应关系",
          "给出 FunctionButton、Command、ExitCommand、SystemExitClass 的代码"
        ],
        "code": ""
      }
    ],
    "memory": [
      "调用者持有抽象命令；具体命令持有接收者；execute() 里调用接收者方法",
      "新增功能＝新增一个接收者类和一个具体命令类"
    ],
    "quotes": [
      {
        "text": "解析:在图 9-20 中，FunctionButton 充当请求调用者，SystemExitClass 和 DisplayHelpClass 充当请求接收者，而 ExitCommand 和 HelpCommand 充当具体命令类。",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第125行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/22-Command模式.md"
  },
  {
    "id": "E4-COMP-03",
    "type": "comprehensive",
    "source": "习题4综合题第3题",
    "category": "行为型设计模式",
    "pattern": "解释器模式",
    "stem": "使用解释器模式设计一个简单的解释器, 使得系统可以解释 0 和 1 的或 (or) 运算和与 (and) 运算 (不考虑或运算和与运算的优先级), 语句表达式和输出结果的几个实例如表 9-2 所示。",
    "materials": [
      {
        "type": "text",
        "content": "表 9-2 语句表达式和输出结果实例一览表"
      },
      {
        "type": "table",
        "headers": [
          "表达式",
          "输出结果",
          "表达式",
          "输出结果"
        ],
        "rows": [
          [
            "1 and 0",
            "0",
            "0 or 0",
            "0"
          ],
          [
            "1 or 1",
            "1",
            "1 and 1 or 0",
            "1"
          ],
          [
            "1 or 0",
            "1",
            "0 or 1 and 0",
            "0"
          ],
          [
            "1 and 1",
            "1",
            "0 or 1 and 1 or 1",
            "1"
          ],
          [
            "0 and 0",
            "0",
            "1 or 0 and 1 and 0 or 0",
            "0"
          ]
        ]
      }
    ],
    "answers": [
      "解释器模式。参考类图如图 9-21 所示。\n\n![图9-21 综合题3参考类图](images/written/p133-b05.png)\n\n图9-21 综合题3参考类图\n\n解析:在图 9-21 中，Node 充当抽象表达式角色，AndNode 和 OrNode 充当非终结符表达式角色，ValueNode 充当终结符表达式角色。本实例代码如下:\n\n```java\nimport java.util.*;\ninterface Node {\n    public int interpret();\n}\n\nclass ValueNode implements Node {\n    private int value;\n    public ValueNode(int value) { this.value = value; }\n\n    public int interpret() { return this.value; }\n}\n\nclass AndNode implements Node {\n    private Node left;\n    private Node right;\n    public AndNode(Node left,Node right) {\n        this.left = left;\n        this.right = right;\n    }\n\n    public int interpret() {\n        if(left.interpret() == 1&&right.interpret() == 1) {\n            return 1;\n        }\n}\nelse {\n    return 0;\n}\n}\n}\n\nclass OrNode implements Node {\n    private Node left;\n    private Node right;\n    public OrNode(Node left, Node right) {\n        this.left = left;\n        this.right = right;\n    }\n\n    public int interpret() {\n        if(left.interpret() == 1||right.interpret() == 1) {\n            return 1;\n        }\n        else {\n            return 0;\n        }\n    }\n}\n\nclass Context {\n    private String statement;\n    private Node node;\n\n    public void parse(String statement) {\n        Node left = null, right = null;\n        Stack stack = new Stack();\n        String[] statementArr = statement.split(\" \"); //分割输入字符串\n        for(int i = 0; i < statementArr.length; i++) {\n            if(statementArr[i].equalsIgnoreCase(\"and\")) {\n                left = (Node)stack.pop();\n                int val = Integer.parseInt(statementArr[++i]);\n                right = new ValueNode(val);\n                stack.push(new AndNode(left, right));\n            }\n            else if(statementArr[i].equalsIgnoreCase(\"or\")) {\n                left = (Node)stack.pop();\n                int val = Integer.parseInt(statementArr[++i]);\n                right = new ValueNode(val);\n                stack.push(new OrNode(left, right));\n            }\n            else {\n                stack.push(new ValueNode(Integer.parseInt(statementArr[i]));\n            }\n        }\n    }\n```\n\n```java\nthis.node = (Node)stack.pop();\n}\n\npublic int execute() {\n    return node.interpret();\n}\n}\n\nclass Test {\n    public static void main(String args[]) {\n        String statement = \"0 or 1 and 1 or 1\";\n        Context ctx = new Context();\n        ctx.parse(statement);\n        int result = ctx.execute();\n        System.out.println(statement + \" = \" + result);\n    }\n}\n//输出结果如下:\n//0 or 1 and 1 or 1 = 1\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "解释器模式。参考类图如图 9-21 所示。"
      },
      {
        "type": "image",
        "alt": "图9-21 综合题3参考类图",
        "src": "images/written/p133-b05.png"
      },
      {
        "type": "text",
        "content": "解析:在图 9-21 中，Node 充当抽象表达式角色，AndNode 和 OrNode 充当非终结符表达式角色，ValueNode 充当终结符表达式角色。本实例代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 解释器模式实现 0/1 的 and、or 运算（第一部分）\n * 1. Node：抽象表达式\n * 2. ValueNode：终结符表达式，表示 0 或 1\n * 3. AndNode、OrNode：非终结符表达式\n * 4. Context：把语句解析成语法树\n * 不考虑优先级，从左到右依次计算\n */\nimport java.util.*;\n// 所有语法树节点的共同接口\ninterface Node {\n    public int interpret();\n}\n\n// 叶子节点：一个 0 或 1\nclass ValueNode implements Node {\n    private int value;\n    public ValueNode(int value) { this.value = value; }\n\n    public int interpret() { return this.value; }\n}\n\n// 与运算节点\nclass AndNode implements Node {\n    private Node left;\n    private Node right;\n    public AndNode(Node left,Node right) {\n        this.left = left;\n        this.right = right;\n    }\n\n    public int interpret() {\n        // 左右都为 1 才返回 1，否则返回 0\n        if(left.interpret() == 1&&right.interpret() == 1) {\n            return 1;\n        }\n}\nelse {\n    return 0;\n}\n}\n}\n\n// 或运算节点\nclass OrNode implements Node {\n    private Node left;\n    private Node right;\n    public OrNode(Node left, Node right) {\n        this.left = left;\n        this.right = right;\n    }\n\n    public int interpret() {\n        // 左右有一个为 1 就返回 1\n        if(left.interpret() == 1||right.interpret() == 1) {\n            return 1;\n        }\n        else {\n            return 0;\n        }\n    }\n}\n\n// 解析器：用栈把语句构造成语法树\nclass Context {\n    private String statement;\n    private Node node;\n\n    public void parse(String statement) {\n        Node left = null, right = null;\n        Stack stack = new Stack();\n        // 按空格拆开语句\n        String[] statementArr = statement.split(\" \"); //分割输入字符串\n        for(int i = 0; i < statementArr.length; i++) {\n            // 遇到 and：弹出前面已组好的表达式作左边\n            // 读下一个数字作右边，组成与运算节点后压回栈\n            if(statementArr[i].equalsIgnoreCase(\"and\")) {\n                left = (Node)stack.pop();\n                int val = Integer.parseInt(statementArr[++i]);\n                right = new ValueNode(val);\n                stack.push(new AndNode(left, right));\n            }\n            // 遇到 or：做法相同，组成或运算节点\n            else if(statementArr[i].equalsIgnoreCase(\"or\")) {\n                left = (Node)stack.pop();\n                int val = Integer.parseInt(statementArr[++i]);\n                right = new ValueNode(val);\n                stack.push(new OrNode(left, right));\n            }\n            // 数字：包装成叶子节点压入栈\n            else {\n                stack.push(new ValueNode(Integer.parseInt(statementArr[i]));\n            }\n        }\n    }"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 解释器模式实现 0/1 的 and、or 运算（第二部分，接上一段）\n */\n// 扫描结束，栈里剩下的就是整棵语法树\nthis.node = (Node)stack.pop();\n}\n\n// 从根节点开始解释，递归算出结果\npublic int execute() {\n    return node.interpret();\n}\n}\n\nclass Test {\n    public static void main(String args[]) {\n        // 从左到右：0 or 1 = 1，1 and 1 = 1，1 or 1 = 1\n        String statement = \"0 or 1 and 1 or 1\";\n        Context ctx = new Context();\n        ctx.parse(statement);\n        int result = ctx.execute();\n        System.out.println(statement + \" = \" + result);\n    }\n}\n//输出结果如下:\n//0 or 1 and 1 or 1 = 1"
      }
    ],
    "roles": [
      [
        "Node",
        "抽象表达式，声明 interpret()"
      ],
      [
        "ValueNode",
        "终结符表达式，表示 0 或 1"
      ],
      [
        "AndNode、OrNode",
        "非终结符表达式，做与运算、或运算"
      ],
      [
        "Context",
        "把字符串解析成语法树并执行"
      ]
    ],
    "steps": [
      {
        "title": "第一步　定出文法",
        "bullets": [
          "句子由 0、1 和 and、or 组成，用空格隔开",
          "题目说不考虑优先级，所以从左往右依次计算",
          "数字是终结符，and、or 连接左右两个表达式，是非终结符"
        ],
        "code": ""
      },
      {
        "title": "第二步　每条规则写成一个类",
        "bullets": [
          "ValueNode.interpret() 直接返回自己的值",
          "AndNode：左右都为 1 才返回 1",
          "OrNode：左右有一个为 1 就返回 1"
        ],
        "code": ""
      },
      {
        "title": "第三步　用栈构造语法树",
        "bullets": [
          "把字符串按空格拆开，从左往右扫描",
          "遇到数字：压入一个 ValueNode",
          "遇到 and 或 or：弹出栈顶作为左边，读下一个数字作为右边，组成 AndNode 或 OrNode 压回",
          "扫描完弹出栈顶，就是整棵树的根"
        ],
        "code": ""
      },
      {
        "title": "第四步　代入例子验证",
        "bullets": [
          "“0 or 1 and 1 or 1”：0 or 1 = 1，1 and 1 = 1，1 or 1 = 1，结果为 1",
          "要加新运算（比如 not），只需加一个新的表达式类，并在解析时识别它"
        ],
        "code": ""
      }
    ],
    "memory": [
      "解释器模式：一条文法规则一个类，叶子是终结符，运算符是非终结符",
      "不考虑优先级时，用栈从左往右组合即可"
    ],
    "quotes": [
      {
        "text": "解析:在图 9-21 中，Node 充当抽象表达式角色，AndNode 和 OrNode 充当非终结符表达式角色，ValueNode 充当终结符表达式角色。",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第173行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/23-Interpreter模式.md"
  },
  {
    "id": "E4-COMP-04",
    "type": "comprehensive",
    "source": "习题4综合题第4题",
    "category": "行为型设计模式",
    "pattern": "迭代器模式",
    "stem": "某教务管理系统中一个班级(Class)包含多个学生(Student)，使用 Java 内置迭代器实现对学生信息的遍历，要求按学生年龄由大到小的次序输出学生信息。用 Java 语言模拟实现该过程。",
    "materials": [],
    "answers": [
      "迭代器模式。参考类图如图 9-22 所示。\n\n![图9-22 综合题4参考类图](images/written/p135-b06.png)\n\n图9-22 综合题4参考类图\n\n解析:在图 9-22 中，Class 类充当聚合类，在其中定义了一个 ArrayList 类型的集合用于存储 Student 对象，为了实现按学生年龄由大到小的次序输出学生信息，自定义一个比较器类 MyComparator 实现了 Comparator 接口并实现在接口中声明的 compare() 方法。在 Class 类的 displayStudents() 方法中创建一个比较器对象用于排序，再创建一个迭代器对象用于遍历集合。本实例代码如下:\n\n```java\nimport java.util.*;\n\nclass Class {\n    private ArrayList<Student>students = new ArrayList<Student>();\n\n}\n```\n\n:\n\n```java\npublic void addStudent(Student student) {\n    students.add(student);\n}\n\npublic void displayStudents() {\n    Comparator comp = new MyComparator();\n    Collections.sort(students,comp);\n    Iterator i = students.iterator();\n    while(i.hasNext()) {\n        Student student = (Student)i.next();\n        System.out.println(\"姓名:\" + student.getSName() + \",年龄:\" + student.getSAge());\n    }\n}\n}\n\nclass MyComparator implements Comparator {\n    public int compare(Object obj1,Object obj2) {\n        Student s1 = (Student)obj1;\n        Student s2 = (Student)obj2;\n        if(s1.getSAge()<s2.getSAge()) {\n            return 1;\n        }\n        else {\n            return 0;\n        }\n    }\n}\n\nclass Student {\n    private String sName;\n    private int sAge;\n    private String sSex;\n\n    public Student(String sName,int sAge,String sSex) {\n        this.sName = sName;\n        this.sAge = sAge;\n        this.sSex = sSex;\n    }\n\n    public void setSName(String sName) {\n        this.sName = sName;\n    }\n\n    public void setSAge(int sAge) {\n        this.sAge = sAge;\n    }\n\n    public void setSSex(String sSex) {\n        this.sSex = sSex;\n    }\n\n    public String getSName() {\nreturn (this.sName);\n}\n\npublic int getSAge() {\n    return (this.sAge);\n}\n\npublic String getSSex() {\n    return (this.sSex);\n}\n}\n\nclass MainClass {\n    public static void main(String args[]) {\n        Class obj = new Class();\n        Student student1, student2, student3, student4;\n        student1 = new Student(\"杨过\", 20, \"男\");\n        student2 = new Student(\"令狐冲\", 22, \"男\");\n        student3 = new Student(\"小龙女\", 18, \"女\");\n        student4 = new Student(\"王语嫣\", 19, \"女\");\n        obj.addStudent(student1);\n        obj.addStudent(student2);\n        obj.addStudent(student3);\n        obj.addStudent(student4);\n        obj.displayStudents();\n    }\n}\n//输出结果如下:\n//姓名:令狐冲, 年龄:22\n//姓名:杨过, 年龄:20\n//姓名:王语嫣, 年龄:19\n//姓名:小龙女, 年龄:18\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "迭代器模式。参考类图如图 9-22 所示。"
      },
      {
        "type": "image",
        "alt": "图9-22 综合题4参考类图",
        "src": "images/written/p135-b06.png"
      },
      {
        "type": "text",
        "content": "解析:在图 9-22 中，Class 类充当聚合类，在其中定义了一个 ArrayList 类型的集合用于存储 Student 对象，为了实现按学生年龄由大到小的次序输出学生信息，自定义一个比较器类 MyComparator 实现了 Comparator 接口并实现在接口中声明的 compare() 方法。在 Class 类的 displayStudents() 方法中创建一个比较器对象用于排序，再创建一个迭代器对象用于遍历集合。本实例代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 迭代器模式：用 Java 内置迭代器遍历班级学生（第一部分）\n * Class：聚合类，用 ArrayList 保存学生\n */\nimport java.util.*;\n\nclass Class {\n    private ArrayList<Student>students = new ArrayList<Student>();  // 保存本班所有学生\n\n}"
      },
      {
        "type": "text",
        "content": ":"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 迭代器模式：用 Java 内置迭代器遍历班级学生（第二部分，接上一段）\n * 先用比较器按年龄从大到小排序，再用迭代器逐个输出\n */\n// 添加学生\npublic void addStudent(Student student) {\n    students.add(student);\n}\n\n// 按年龄从大到小输出所有学生\npublic void displayStudents() {\n    // 创建比较器，规定排序规则\n    Comparator comp = new MyComparator();\n    Collections.sort(students,comp);  // 按比较器的规则排序\n    // 由集合自己创建 Java 内置迭代器\n    Iterator i = students.iterator();\n    // 还有下一个学生就继续\n    while(i.hasNext()) {\n        // 取出下一个学生\n        Student student = (Student)i.next();\n        System.out.println(\"姓名:\" + student.getSName() + \",年龄:\" + student.getSAge());\n    }\n}\n}\n\n// 比较器：年龄大的排在前面\nclass MyComparator implements Comparator {\n    public int compare(Object obj1,Object obj2) {\n        Student s1 = (Student)obj1;\n        Student s2 = (Student)obj2;\n        // s1 比 s2 小时返回 1，表示 s1 排在后面\n        // 原书这里只返回 1 或 0，严格来说比较器还应在相反情况返回负数\n        if(s1.getSAge()<s2.getSAge()) {\n            return 1;\n        }\n        else {\n            return 0;\n        }\n    }\n}\n\n// 学生：姓名、年龄、性别\nclass Student {\n    private String sName;\n    private int sAge;\n    private String sSex;\n\n    public Student(String sName,int sAge,String sSex) {\n        this.sName = sName;\n        this.sAge = sAge;\n        this.sSex = sSex;\n    }\n\n    public void setSName(String sName) {\n        this.sName = sName;\n    }\n\n    public void setSAge(int sAge) {\n        this.sAge = sAge;\n    }\n\n    public void setSSex(String sSex) {\n        this.sSex = sSex;\n    }\n\n    public String getSName() {\nreturn (this.sName);\n}\n\npublic int getSAge() {\n    return (this.sAge);\n}\n\npublic String getSSex() {\n    return (this.sSex);\n}\n}\n\n// 客户端：添加四个学生后输出\nclass MainClass {\n    public static void main(String args[]) {\n        Class obj = new Class();\n        Student student1, student2, student3, student4;\n        student1 = new Student(\"杨过\", 20, \"男\");\n        student2 = new Student(\"令狐冲\", 22, \"男\");\n        student3 = new Student(\"小龙女\", 18, \"女\");\n        student4 = new Student(\"王语嫣\", 19, \"女\");\n        obj.addStudent(student1);\n        obj.addStudent(student2);\n        obj.addStudent(student3);\n        obj.addStudent(student4);\n        // 输出顺序：令狐冲 22、杨过 20、王语嫣 19、小龙女 18\n        obj.displayStudents();\n    }\n}\n//输出结果如下:\n//姓名:令狐冲, 年龄:22\n//姓名:杨过, 年龄:20\n//姓名:王语嫣, 年龄:19\n//姓名:小龙女, 年龄:18"
      }
    ],
    "roles": [
      [
        "Class",
        "聚合类，用 ArrayList 保存学生"
      ],
      [
        "Student",
        "元素，有姓名、年龄、性别"
      ],
      [
        "MyComparator",
        "比较器，规定按年龄从大到小排序"
      ],
      [
        "java.util.Iterator",
        "Java 内置迭代器，负责逐个取出学生"
      ]
    ],
    "steps": [
      {
        "title": "第一步　题目要两件事",
        "bullets": [
          "用 Java 自带的迭代器遍历，不自己写迭代器类",
          "输出顺序按年龄从大到小，所以遍历前要先排序"
        ],
        "code": ""
      },
      {
        "title": "第二步　排序怎么做",
        "bullets": [
          "MyComparator 实现 Comparator 接口的 compare()",
          "s1 年龄小于 s2 时返回 1，表示 s1 排在后面，于是年龄大的排前面",
          "displayStudents() 里先 Collections.sort(students, comp)"
        ],
        "code": ""
      },
      {
        "title": "第三步　遍历怎么做",
        "bullets": [
          "Iterator i = students.iterator()：由集合自己创建迭代器",
          "while (i.hasNext()) 判断还有没有下一个，next() 取出学生并输出",
          "客户端看不到 ArrayList 的内部结构，只通过迭代器访问"
        ],
        "code": ""
      },
      {
        "title": "第四步　代入数据看输出",
        "bullets": [
          "四个学生年龄：令狐冲 22、杨过 20、王语嫣 19、小龙女 18",
          "排好序后依次输出这四个人"
        ],
        "code": ""
      }
    ],
    "memory": [
      "Java 内置迭代器三步：集合.iterator()、hasNext()、next()",
      "自定义顺序用 Comparator，排序在遍历之前完成"
    ],
    "quotes": [
      {
        "text": "在 Class 类的 displayStudents() 方法中创建一个比较器对象用于排序，再创建一个迭代器对象用于遍历集合。",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第283行"
      },
      {
        "text": "Iterator 模式用于在数据集合中按照顺序遍历集合。",
        "source": "01-Iterator模式.md 第40行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/01-Iterator模式.md"
  },
  {
    "id": "E4-COMP-05",
    "type": "comprehensive",
    "source": "习题4综合题第5题",
    "category": "行为型设计模式",
    "pattern": "中介者模式",
    "stem": "使用中介者模式来说明联合国的作用,要求绘制相应的类图并分析每个类的作用(注:可以将联合国定义为抽象中介者类,联合国下属机构如 WTO、WHO 等作为具体中介者类,国家作为抽象同事类,而将中国、美国等国家作为具体同事类)。",
    "materials": [],
    "answers": [
      "中介者模式。参考类图如图 9-23 所示。\n\n![图 9-23 综合题 5 参考类图](images/written/p137-b06.png)\n\n图 9-23 综合题 5 参考类图\n\n解析:在图 9-23 中，UnitedNations 充当抽象中介者角色，WTO 充当具体中介者角色，Country 充当抽象同事角色，China 和 America 充当具体同事角色。本实例代码如下:\n\n```java\nabstract class UnitedNations {\n    public abstract void declare(String message, Country country);\n}\n\nabstract class Country {\n    protected UnitedNations un;\n    public void setUnitedNations(UnitedNations un) {\n        this.un = un;\n    }\n    public void declare(String message) {\n        un.declare(message,this);\n    }\n    public abstract void getMessage(String message);\n}\n\nclass China extends Country {\n    public void getMessage(String message) {\n        System.out.println(\"中国获取信息:\" + message);\n    }\n}\n\nclass America extends Country {\n    public void getMessage(String message) {\n        System.out.println(\"美国获取信息:\" + message);\n    }\n}\n\nclass WTO extends UnitedNations {\n    private China cn;\n    private America us;\n    public void setChina(China cn) {\n        this.cn = cn;\n    }\n    public void setAmerica(America us) {\n        this.us = us;\n    }\n    public void declare(String message, Country country) {\n        if(country == cn) {\n            us.getMessage(message);\n        }\n        else {\n            cn.getMessage(message);\n        }\n}\n}\n\nclass MainClass {\n    public static void main(String args[]) {\n        WTO wto = new WTO();\n        China cn = new China();\n        America us = new America();\n        cn.setUnitedNations(wto);\n        us.setUnitedNations(wto);\n        wto.setChina(cn);\n        wto.setAmerica(us);\n        cn.declare(\"中国是一个爱好和平的国家!\");\n        us.declare(\"美国将会为世界和平而努力!\");\n    }\n}\n//输出结果如下:\n//美国获取信息:中国是一个爱好和平的国家!\n//中国获取信息:美国将会为世界和平而努力!\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "中介者模式。参考类图如图 9-23 所示。"
      },
      {
        "type": "image",
        "alt": "图 9-23 综合题 5 参考类图",
        "src": "images/written/p137-b06.png"
      },
      {
        "type": "text",
        "content": "解析:在图 9-23 中，UnitedNations 充当抽象中介者角色，WTO 充当具体中介者角色，Country 充当抽象同事角色，China 和 America 充当具体同事角色。本实例代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 中介者模式模拟联合国\n * 1. UnitedNations：抽象中介者\n * 2. WTO：具体中介者，知道中国和美国，负责转达消息\n * 3. Country：抽象同事，只认识联合国机构\n * 4. China、America：具体同事\n * 国家之间不直接通信：发言先交给 WTO，再由 WTO 转给对方\n */\n// 抽象中介者\nabstract class UnitedNations {\n    public abstract void declare(String message, Country country);  // 转达消息：message 是内容，country 是发言国\n}\n\n// 抽象同事：国家\nabstract class Country {\n    protected UnitedNations un;  // 国家只保存联合国机构，不保存其他国家\n    public void setUnitedNations(UnitedNations un) {\n        this.un = un;\n    }\n    // 国家发言\n    public void declare(String message) {\n        un.declare(message,this);  // 交给联合国机构转达，并说明是谁发的\n    }\n    public abstract void getMessage(String message);  // 接收别国的消息\n}\n\n// 具体同事：中国\nclass China extends Country {\n    public void getMessage(String message) {\n        System.out.println(\"中国获取信息:\" + message);\n    }\n}\n\n// 具体同事：美国\nclass America extends Country {\n    public void getMessage(String message) {\n        System.out.println(\"美国获取信息:\" + message);\n    }\n}\n\n// 具体中介者：世界贸易组织\nclass WTO extends UnitedNations {\n    private China cn;  // 中介者认识所有成员国\n    private America us;\n    public void setChina(China cn) {\n        this.cn = cn;\n    }\n    public void setAmerica(America us) {\n        this.us = us;\n    }\n    // 根据发言国决定把消息转给谁\n    public void declare(String message, Country country) {\n        // 中国发言：转给美国\n        if(country == cn) {\n            us.getMessage(message);\n        }\n        // 美国发言：转给中国\n        else {\n            cn.getMessage(message);\n        }\n}\n}\n\n// 客户端：双向登记后各自发言\nclass MainClass {\n    public static void main(String args[]) {\n        WTO wto = new WTO();\n        China cn = new China();\n        America us = new America();\n        // 国家登记所属机构\n        cn.setUnitedNations(wto);\n        us.setUnitedNations(wto);\n        // 机构登记成员国\n        wto.setChina(cn);\n        wto.setAmerica(us);\n        cn.declare(\"中国是一个爱好和平的国家!\");\n        us.declare(\"美国将会为世界和平而努力!\");\n    }\n}\n//输出结果如下:\n//美国获取信息:中国是一个爱好和平的国家!\n//中国获取信息:美国将会为世界和平而努力!"
      }
    ],
    "roles": [
      [
        "UnitedNations",
        "抽象中介者，声明 declare(message, country)"
      ],
      [
        "WTO",
        "具体中介者，知道中国和美国，负责转达消息"
      ],
      [
        "Country",
        "抽象同事，持有联合国机构，declare() 时交给中介者"
      ],
      [
        "China、America",
        "具体同事，getMessage() 接收消息"
      ]
    ],
    "steps": [
      {
        "title": "第一步　联合国在现实中起什么作用",
        "bullets": [
          "国家很多，如果两两直接交涉，关系会织成一张网",
          "有了联合国机构，各国把声明交给机构，由机构转达给其他国家",
          "国家只需要认识机构，不需要认识每一个国家"
        ],
        "code": ""
      },
      {
        "title": "第二步　每个类的作用",
        "bullets": [
          "UnitedNations：规定转达消息的接口",
          "WTO：保存中国和美国，declare() 判断是谁发的，再把消息交给另一方",
          "Country：保存所属的联合国机构，declare(message) 里调用 un.declare(message, this)",
          "China、America：实现 getMessage()，输出收到的消息"
        ],
        "code": ""
      },
      {
        "title": "第三步　对象如何协作",
        "bullets": [
          "客户端创建 WTO 和两个国家，国家 setUnitedNations(wto)，WTO 登记两个国家",
          "cn.declare(…) → wto.declare(…, cn) → us.getMessage(…)",
          "中国和美国的代码里互相没有引用"
        ],
        "code": ""
      },
      {
        "title": "第四步　这样设计的好处",
        "bullets": [
          "国家之间的网状关系变成以机构为中心的星形关系",
          "新加一个国家只需让机构认识它；换一种转达规则只需换一个具体中介者"
        ],
        "code": ""
      }
    ],
    "memory": [
      "同事 → 中介者 → 其他同事，同事之间不直接引用",
      "中介者模式把多对多的关系变成一对多"
    ],
    "quotes": [
      {
        "text": "解析:在图 9-23 中，UnitedNations 充当抽象中介者角色，WTO 充当具体中介者角色，Country 充当抽象同事角色，China 和 America 充当具体同事角色。",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第395行"
      },
      {
        "text": "即不让各个对象之间互相通信，而是增加一个仲裁者角色，让他们各自与仲裁者通信。",
        "source": "16-Mediator模式.md 第87行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/16-Mediator模式.md"
  },
  {
    "id": "E4-COMP-06",
    "type": "comprehensive",
    "source": "习题4综合题第6题",
    "category": "行为型设计模式",
    "pattern": "备忘录模式",
    "stem": "某中国象棋软件允许用户多次悔棋, 即需要在系统中存储棋子的多个历史状态(如棋子所处位置等)。使用备忘录模式模拟实现该过程。",
    "materials": [],
    "answers": [
      "备忘录模式。参考类图如图 9-24 所示。\n\n![图9-24 综合题6参考类图](images/written/p139-b06.png)\n\n图9-24 综合题6参考类图\n\n解析:在图 9-24 中，Chessman 充当原发器，ChessmanMemento 充当备忘录，MementoCaretaker 充当负责人。在 MementoCaretaker 中定义了一个 ArrayList，用于存储多个备忘录。本实例代码如下:\n\n```java\nimport java.util.*;\nclass Chessman {\n    private String label;\n    private int x;\n```\n\n:\n\n```java\nprivate int y;\npublic Chessman(String label, int x, int y) {\n    this.label = label;\n    this.x = x;\n    this.y = y;\n}\n\npublic void setLabel(String label) {\n    this.label = label;\n}\n\npublic void setX(int x) {\n    this.x = x;\n}\n\npublic void setY(int y) {\n    this.y = y;\n}\n\npublic String getLabel() {\n    return (this.label);\n}\n\npublic int getX() {\n    return (this.x);\n}\n\npublic int getY() {\n    return (this.y);\n}\n\npublic ChessmanMemento save() {\n    return new ChessmanMemento(this.label,this.x,this.y);\n}\n\npublic void restore(ChessmanMemento memento) {\n    this.label = memento Campbell();\n    this.x = memento.getX();\n    this.y = memento.getY();\n}\n}\n\nclass ChessmanMemento {\n    private String label;\n    private int x;\n    private int y;\n    public ChessmanMemento(String label,int x,int y) {\n        this.label = label;\n        this.x = x;\nthis.y = y;\n}\n\npublic void setLabel(String label) {\n    this.label = label;\n}\n\npublic void setX(int x) {\n    this.x = x;\n}\n\npublic void setY(int y) {\n    this.y = y;\n}\n\npublic String getLabel() {\n    return (this.label);\n}\n\npublic int getX() {\n    return (this.x);\n}\n\npublic int getY() {\n    return (this.y);\n}\n}\n\nclass MementoCaretaker {\n    private ArrayList mementolist = new ArrayList();\n    public ChessmanMemento getMemento(int i) {\n        return (ChessmanMemento)mementolist.get(i);\n    }\n    public void setMemento(ChessmanMemento memento) {\n        mementolist.add(memento);\n    }\n}\n\nclass Test {\n    private static int index = -1;\n    private static MementoCaretaker mc = new MementoCaretaker();\n    public static void main(String args[]) {\n        Chessman chess = new Chessman(\"车\",1,1);\n        play(chess);\n        chess.setY(4);\n        play(chess);\n        chess.setX(5);\n        play(chess);\n        undo(chess,index);\n```\n\n```java\nundo(chess,index);\nredo(chess,index);\nredo(chess,index);\n}\n//下棋\npublic static void play(Chessman chess) {\nmc.setMemento(chess.save());\nindex ++;\nSystem.out.println(\"棋子\" + chess.getLabel() + \"当前位置为:\" + \"第\" + chess.getX() + \"行\" + \"第\" + chess.getY() + \"列。\");\n}\n//悔棋\npublic static void undo(Chessman chess,int i) {\nSystem.out.println(\"******** 悔棋 ******** \");\nindex --;\nchess.restore(mc.getMemento(i-1));\nSystem.out.println(\"棋子\" + chess.getLabel() + \"当前位置为:\" + \"第\" + chess.getX() + \"行\" + \"第\" + chess.getY() + \"列。\");\n}\n//撤销悔棋\npublic static void redo(Chessman chess,int i) {\nSystem.out.println(\"******** 撤销悔棋 ******** \");\nindex ++;\nchess.restore(mc.getMemento(i+1));\nSystem.out.println(\"棋子\" + chess.getLabel() + \"当前位置为:\" + \"第\" + chess.getX() + \"行\" + \"第\" + chess.getY() + \"列。\");\n}\n//输出结果如下:\n//棋子车当前位置为:第1行第1列。\n//棋子车当前位置为:第1行第4列。\n//棋子车当前位置为:第5行第4列。\n//****** 悔棋 ********\n//棋子车当前位置为:第1行第4列。\n//****** 悔棋 ********\n//棋子车当前位置为:第1行第1列。\n//****** 撤销悔棋 ********\n//棋子车当前位置为:第1行第4列。\n//****** 撤销悔棋 ********\n//棋子车当前位置为:第5行第4列。\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "备忘录模式。参考类图如图 9-24 所示。"
      },
      {
        "type": "image",
        "alt": "图9-24 综合题6参考类图",
        "src": "images/written/p139-b06.png"
      },
      {
        "type": "text",
        "content": "解析:在图 9-24 中，Chessman 充当原发器，ChessmanMemento 充当备忘录，MementoCaretaker 充当负责人。在 MementoCaretaker 中定义了一个 ArrayList，用于存储多个备忘录。本实例代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 备忘录模式实现的多次悔棋（第一部分）\n * Chessman：原发器，棋子\n */\nimport java.util.*;\nclass Chessman {\n    private String label;  // 棋子名称\n    private int x;  // 所在行"
      },
      {
        "type": "text",
        "content": ":"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 备忘录模式实现的多次悔棋（第二部分，接上一段）\n * 1. Chessman：原发器，save() 生成备忘录，restore() 恢复\n * 2. ChessmanMemento：备忘录，保存名称和坐标\n * 3. MementoCaretaker：负责人，用列表保存多个备忘录，支持多次悔棋\n * 注意：memento Campbell() 是原书识别错误，应为 memento.getLabel()\n */\nprivate int y;  // 所在列\npublic Chessman(String label, int x, int y) {\n    this.label = label;\n    this.x = x;\n    this.y = y;\n}\n\npublic void setLabel(String label) {\n    this.label = label;\n}\n\npublic void setX(int x) {\n    this.x = x;\n}\n\npublic void setY(int y) {\n    this.y = y;\n}\n\npublic String getLabel() {\n    return (this.label);\n}\n\npublic int getX() {\n    return (this.x);\n}\n\npublic int getY() {\n    return (this.y);\n}\n\n// 保存：用当前名称和坐标生成备忘录\npublic ChessmanMemento save() {\n    return new ChessmanMemento(this.label,this.x,this.y);\n}\n\n// 恢复：把备忘录中的值写回棋子\npublic void restore(ChessmanMemento memento) {\n    this.label = memento Campbell();\n    this.x = memento.getX();\n    this.y = memento.getY();\n}\n}\n\n// 备忘录：只负责存放棋子的状态\nclass ChessmanMemento {\n    private String label;\n    private int x;\n    private int y;\n    public ChessmanMemento(String label,int x,int y) {\n        this.label = label;\n        this.x = x;\nthis.y = y;\n}\n\npublic void setLabel(String label) {\n    this.label = label;\n}\n\npublic void setX(int x) {\n    this.x = x;\n}\n\npublic void setY(int y) {\n    this.y = y;\n}\n\npublic String getLabel() {\n    return (this.label);\n}\n\npublic int getX() {\n    return (this.x);\n}\n\npublic int getY() {\n    return (this.y);\n}\n}\n\n// 负责人：保管所有历史备忘录\nclass MementoCaretaker {\n    private ArrayList mementolist = new ArrayList();  // 按下棋顺序保存每一步的备忘录\n    // 取第 i 步的备忘录\n    public ChessmanMemento getMemento(int i) {\n        return (ChessmanMemento)mementolist.get(i);\n    }\n    // 保存新的一步\n    public void setMemento(ChessmanMemento memento) {\n        mementolist.add(memento);\n    }\n}\n\n// 客户端：走三步，悔棋两次，再撤销悔棋两次\nclass Test {\n    private static int index = -1;  // 当前是第几步，还没走时为 -1\n    private static MementoCaretaker mc = new MementoCaretaker();\n    public static void main(String args[]) {\n        // 初始位置：第 1 行第 1 列\n        Chessman chess = new Chessman(\"车\",1,1);\n        play(chess);\n        chess.setY(4);  // 走到第 1 行第 4 列\n        play(chess);\n        chess.setX(5);  // 走到第 5 行第 4 列\n        play(chess);\n        // 第一次悔棋：回到第 1 行第 4 列\n        undo(chess,index);"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 备忘录模式实现的多次悔棋（第三部分，接上一段）\n */\n// 第二次悔棋：回到第 1 行第 1 列\nundo(chess,index);\n// 第一次撤销悔棋：回到第 1 行第 4 列\nredo(chess,index);\nredo(chess,index);\n}\n//下棋\n// 下棋：保存当前状态，步数加 1\npublic static void play(Chessman chess) {\nmc.setMemento(chess.save());\nindex ++;\nSystem.out.println(\"棋子\" + chess.getLabel() + \"当前位置为:\" + \"第\" + chess.getX() + \"行\" + \"第\" + chess.getY() + \"列。\");\n}\n//悔棋\n// 悔棋：步数减 1，恢复到前一个备忘录\npublic static void undo(Chessman chess,int i) {\nSystem.out.println(\"******** 悔棋 ******** \");\nindex --;\nchess.restore(mc.getMemento(i-1));  // i 是悔棋前的步数，取它前一步\nSystem.out.println(\"棋子\" + chess.getLabel() + \"当前位置为:\" + \"第\" + chess.getX() + \"行\" + \"第\" + chess.getY() + \"列。\");\n}\n//撤销悔棋\n// 撤销悔棋：步数加 1，恢复到后一个备忘录\npublic static void redo(Chessman chess,int i) {\nSystem.out.println(\"******** 撤销悔棋 ******** \");\nindex ++;\nchess.restore(mc.getMemento(i+1));  // 取当前步的后一步\nSystem.out.println(\"棋子\" + chess.getLabel() + \"当前位置为:\" + \"第\" + chess.getX() + \"行\" + \"第\" + chess.getY() + \"列。\");\n}\n//输出结果如下:\n//棋子车当前位置为:第1行第1列。\n//棋子车当前位置为:第1行第4列。\n//棋子车当前位置为:第5行第4列。\n//****** 悔棋 ********\n//棋子车当前位置为:第1行第4列。\n//****** 悔棋 ********\n//棋子车当前位置为:第1行第1列。\n//****** 撤销悔棋 ********\n//棋子车当前位置为:第1行第4列。\n//****** 撤销悔棋 ********\n//棋子车当前位置为:第5行第4列。"
      }
    ],
    "roles": [
      [
        "Chessman",
        "原发器，棋子，save() 和 restore()"
      ],
      [
        "ChessmanMemento",
        "备忘录，保存棋子名和坐标"
      ],
      [
        "MementoCaretaker",
        "负责人，用 ArrayList 保存多个备忘录"
      ]
    ],
    "steps": [
      {
        "title": "第一步　为什么要存多个备忘录",
        "bullets": [
          "题目要求可以多次悔棋，只存一份旧状态不够",
          "所以负责人用 ArrayList 按顺序保存每一步的备忘录"
        ],
        "code": ""
      },
      {
        "title": "第二步　每个类做什么",
        "bullets": [
          "Chessman.save()：用当前 label、x、y 创建一个备忘录",
          "Chessman.restore(m)：把备忘录里的值写回自己",
          "MementoCaretaker：setMemento() 加入列表，getMemento(i) 取第 i 个",
          "参考代码 restore 中的 memento Campbell() 是识别错误，按上下文应为 memento.getLabel()"
        ],
        "code": ""
      },
      {
        "title": "第三步　悔棋和撤销悔棋怎么走",
        "bullets": [
          "index 记录当前是第几步，每走一步就保存一份并 index++",
          "走三步后 index 为 2，列表里有 3 个备忘录",
          "悔棋：index--，恢复到前一个备忘录",
          "撤销悔棋：index++，恢复到后一个备忘录",
          "例子中两次悔棋回到 (1,1)，两次撤销悔棋又回到 (5,4)"
        ],
        "code": ""
      },
      {
        "title": "第四步　为什么用备忘录模式",
        "bullets": [
          "保存和恢复都由棋子自己完成，外部不直接改棋子的私有字段",
          "负责人只管存取，不看内容，棋子的封装没有被破坏"
        ],
        "code": ""
      }
    ],
    "memory": [
      "多次撤销＝负责人用列表存多个备忘录，再用下标前后移动",
      "原发器 save() 生成备忘录，restore() 用备忘录恢复"
    ],
    "quotes": [
      {
        "text": "在 MementoCaretaker 中定义了一个 ArrayList，用于存储多个备忘录。",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第470行"
      },
      {
        "text": "当 Caretaker 角色想要保存当前的 Originator 角色的状态时，会通知 Originator 角色。",
        "source": "18-Memento模式.md 第333行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/18-Memento模式.md"
  },
  {
    "id": "E4-COMP-07",
    "type": "comprehensive",
    "source": "习题4综合题第7题",
    "category": "行为型设计模式",
    "pattern": "观察者模式",
    "stem": "某在线游戏支持多人联机对战,每个玩家都可以加入某一战队组成联盟,当战队中某一成员受到敌人攻击时将给所有盟友发送通知,盟友收到通知后将作出响应。使用观察者模式设计并实现该过程。",
    "materials": [],
    "answers": [
      "观察者模式。参考类图如图 9-25 所示。\n\n解析:在图 9-25 中，Observer 充当抽象观察者角色，Player 充当具体观察者角色，Ally 充当观察目标角色。本实例代码如下:\n\n![图9-25 综合题7参考类图](images/written/p143-b04.png)\n\n图9-25 综合题7参考类图\n\n```java\nimport java.util.ArrayList;\n\n//抽象观察类\ninterface Observer {\n    public String getName();\n    public void setName(String name);\n    public void help();                      //声明支援盟友方法\n    public void beAttacked(Ally ally);         //声明遭受攻击方法\n}\n\n//具体观察者\nclass Player implements Observer {\n    private String name;\n\n    public Player(String name) {\n        this.name = name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public void help() {\n        System.out.println(\"坚持住,\" + this.name + \"来救你!\");\n    }\n\n    public void beAttacked(Ally ally) {\n        System.out.println(this.name + \"被攻击!\");\nally.notifyObserver(name);\n}\n}\n\n//观察目标\nclass Ally {\n    private ArrayList<Observer> players = new ArrayList<Observer>();\n\n    public void join(Observer obs) {\n        players.add(obs);\n    }\n\n    public void quit(Observer obs) {\n        players.remove(obs);\n    }\n\n    public void notifyObserver(String name) {\n        System.out.println(\"紧急通知,盟友\" + name + \"遭受敌人攻击!\");\n        for(Object obs : players) {\n            if (!(Observer)obs).getName().equalsIgnoreCase(name)) {\n                ((Observer)obs).help();\n            }\n        }\n    }\n}\n\nclass Client {\n    public static void main(String args[]) {\n        //定义观察目标对象\n        Ally acc = new Ally();\n\n        //定义 4 个观察者对象\n        Observer player1,player2,player3,player4;\n\n        player1 = new Player(\"杨过\");\n        acc.join(player1);\n\n        player2 = new Player(\"令狐冲\");\n        acc.join(player2);\n\n        player3 = new Player(\"张无忌\");\n        acc.join(player3);\n\n        player4 = new Player(\"段誉\");\n        acc.join(player4);\n\n        //某成员遭受攻击\n        player1.beAttacked(acc);\n```\n\n```text\n}\n}\n//输出结果如下:\n//杨过被攻击!\n//紧急通知,盟友杨过遭受敌人攻击!\n//坚持住,令狐冲来救你!\n//坚持住,张无忌来救你!\n//坚持住,段誉来救你!\n```\n\n在本实例中,应用了两次观察者模式,当一个游戏玩家 Player 对象的 beAttacked() 方法被调用时,将调用 Ally 的 notifyObserver() 方法进行处理,而在 notifyObserver() 方法中又将调用其他 Player 对象的 help() 方法。Player 的 beAttacked() 方法、Ally 的 notifyObserver() 方法以及 Player 的 help() 方法构成了一个简单的触发链。"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "观察者模式。参考类图如图 9-25 所示。"
      },
      {
        "type": "text",
        "content": "解析:在图 9-25 中，Observer 充当抽象观察者角色，Player 充当具体观察者角色，Ally 充当观察目标角色。本实例代码如下:"
      },
      {
        "type": "image",
        "alt": "图9-25 综合题7参考类图",
        "src": "images/written/p143-b04.png"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 观察者模式实现的战队互助\n * 1. Observer：抽象观察者，声明支援和被攻击的方法\n * 2. Player：具体观察者，玩家\n * 3. Ally：观察目标，战队，保存所有盟友\n * 触发链：玩家被攻击 → 通知战队 → 战队通知其他盟友前来支援\n */\nimport java.util.ArrayList;\n\n//抽象观察类\n// 抽象观察者：所有玩家都要实现\ninterface Observer {\n    public String getName();\n    public void setName(String name);\n    public void help();                      //声明支援盟友方法\n    public void beAttacked(Ally ally);         //声明遭受攻击方法\n}\n\n//具体观察者\n// 具体观察者：玩家\nclass Player implements Observer {\n    private String name;  // 玩家名字\n\n    public Player(String name) {\n        this.name = name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    // 收到通知后去支援盟友\n    public void help() {\n        System.out.println(\"坚持住,\" + this.name + \"来救你!\");\n    }\n\n    // 自己被攻击时调用\n    public void beAttacked(Ally ally) {\n        System.out.println(this.name + \"被攻击!\");\nally.notifyObserver(name);  // 通知战队：我被攻击了\n}\n}\n\n//观察目标\n// 观察目标：战队\nclass Ally {\n    private ArrayList<Observer> players = new ArrayList<Observer>();  // 保存所有加入战队的玩家\n\n    // 玩家加入战队，即注册观察者\n    public void join(Observer obs) {\n        players.add(obs);\n    }\n\n    // 玩家退出战队，即注销观察者\n    public void quit(Observer obs) {\n        players.remove(obs);\n    }\n\n    // 通知所有盟友\n    public void notifyObserver(String name) {\n        System.out.println(\"紧急通知,盟友\" + name + \"遭受敌人攻击!\");\n        // 逐个检查战队成员\n        for(Object obs : players) {\n            // 跳过被攻击的那个人，其他人前去支援\n            // 原书这一行括号不完整，应为 if (!((Observer)obs).getName().equalsIgnoreCase(name))\n            if (!(Observer)obs).getName().equalsIgnoreCase(name)) {\n                ((Observer)obs).help();\n            }\n        }\n    }\n}\n\nclass Client {\n    public static void main(String args[]) {\n        //定义观察目标对象\n        // 创建战队\n        Ally acc = new Ally();\n\n        //定义 4 个观察者对象\n        Observer player1,player2,player3,player4;\n\n        // 创建四个玩家并依次加入战队\n        player1 = new Player(\"杨过\");\n        acc.join(player1);\n\n        player2 = new Player(\"令狐冲\");\n        acc.join(player2);\n\n        player3 = new Player(\"张无忌\");\n        acc.join(player3);\n\n        player4 = new Player(\"段誉\");\n        acc.join(player4);\n\n        //某成员遭受攻击\n        // 杨过被攻击，触发整个通知过程\n        player1.beAttacked(acc);"
      },
      {
        "type": "code",
        "language": "text",
        "content": "/**\n * 接上一段代码：客户端结尾和运行结果\n * 被攻击的杨过不会收到支援通知，其余三人都来支援\n */\n}\n}\n//输出结果如下:\n//杨过被攻击!\n//紧急通知,盟友杨过遭受敌人攻击!\n//坚持住,令狐冲来救你!\n//坚持住,张无忌来救你!\n//坚持住,段誉来救你!"
      },
      {
        "type": "text",
        "content": "在本实例中,应用了两次观察者模式,当一个游戏玩家 Player 对象的 beAttacked() 方法被调用时,将调用 Ally 的 notifyObserver() 方法进行处理,而在 notifyObserver() 方法中又将调用其他 Player 对象的 help() 方法。Player 的 beAttacked() 方法、Ally 的 notifyObserver() 方法以及 Player 的 help() 方法构成了一个简单的触发链。"
      }
    ],
    "roles": [
      [
        "Ally",
        "观察目标，战队，保存所有盟友"
      ],
      [
        "Observer",
        "抽象观察者，声明 help() 和 beAttacked()"
      ],
      [
        "Player",
        "具体观察者，玩家"
      ]
    ],
    "steps": [
      {
        "title": "第一步　找出一对多的通知关系",
        "bullets": [
          "一个战队有多个玩家",
          "某个玩家被攻击时，战队要通知其他所有盟友",
          "这是“一个目标通知多个观察者”，用观察者模式"
        ],
        "code": ""
      },
      {
        "title": "第二步　每个类怎么写",
        "bullets": [
          "Ally 用列表保存 Observer，join() 加入，quit() 退出",
          "notifyObserver(name) 遍历列表，跳过被攻击的那个人，其他人调用 help()",
          "Player.beAttacked(ally) 先输出被攻击，再调用 ally.notifyObserver(name)",
          "Player.help() 输出前去支援的信息"
        ],
        "code": ""
      },
      {
        "title": "第三步　看懂这条触发链",
        "bullets": [
          "player1.beAttacked(acc) → acc.notifyObserver(\"杨过\") → 其余三人的 help()",
          "玩家先作为“报信的人”通知战队，战队再作为目标通知其他玩家",
          "参考答案说本例应用了两次观察者模式，指的就是这两次通知"
        ],
        "code": ""
      },
      {
        "title": "第四步　这样设计的好处",
        "bullets": [
          "玩家之间不用互相保存引用，只认识战队",
          "新玩家加入只需 join，战队和其他玩家的代码都不改"
        ],
        "code": ""
      }
    ],
    "memory": [
      "观察目标保存列表，通知时循环调用每个观察者的方法",
      "通知时可以按条件跳过某些观察者（比如受攻击者自己）"
    ],
    "quotes": [
      {
        "text": "解析:在图 9-25 中，Observer 充当抽象观察者角色，Player 充当具体观察者角色，Ally 充当观察目标角色。",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第627行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/17-Observer模式.md"
  },
  {
    "id": "E4-COMP-08",
    "type": "comprehensive",
    "source": "习题4综合题第8题",
    "category": "行为型设计模式",
    "pattern": "状态模式",
    "stem": "某纸牌游戏软件中,人物角色具有入门级(Primary)、熟练级(Secondary)、高手级(Professional)和骨灰级(Final)4种等级,角色的等级与其积分相对应,游戏胜利将增加积分,失败则扣除积分。入门级具有最基本的游戏功能 play(); 熟练级增加了游戏胜利积分加倍功能 doubleScore(); 高手级在熟练级基础上再增加换牌功能 changeCards(); 骨灰级在高手级基础上再增加偷看他人的牌功能 peekCards()。现使用状态模式来设计该系统,绘制类图并编程实现。",
    "materials": [],
    "answers": [
      "状态模式。参考类图如图 9-26 所示。\n\n![图 9-26 综合题 8 参考类图](images/written/p145-b07.png)\n\n图 9-26 综合题 8 参考类图\n\n解析:在图 9-26 中，PlayerRole 充当环境类角色，RoleState 充当抽象状态类，PrimaryState、SecondaryState、ProfessionalState 和 FinalState 充当具体状态类。本实例部分代码如下:\n\n```java\n//环境类\nclass PlayerRole {\n    private String nickname;\n```\n\n:\n\n```java\nprivate RoleState state;\npublic PlayerRole(String nickname) {\n    this.nickname = nickname;\n}\n\npublic String getNickname() {\n    return this.nickname;\n}\n\npublic void setState(RoleState state) {\n    this.state = state;\n}\n\npublic void play(int score, String result) {\n    state.play(score,result);\n}\n\npublic void doubleScore(int score, String result) {\n    state.doubleScore(score,result);\n}\n\npublic void changeCards() {\n    state.changeCards();\n}\n\npublic void peekCards() {\n    state.peekCards();\n}\n}\n\n//抽象状态类\nabstract class RoleState {\n    protected PlayerRole role;\n    protected int point;          //积分\n    protected String grade;         //等级\n    public abstract void play(int score, String result);\n    public abstract void doubleScore(int score, String result);\n    public abstract void changeCards();\n    public abstract void peekCards();\n    public abstract void check();\n}\n\n//具体状态类\nclass PrimaryState extends RoleState {\n    public PrimaryState(PlayerRole role) {\n        this.point = 0;\n        this.grade = \"入门级\";\n        this.role = role;\n    }\npublic PrimaryState(RoleState state) {\n    this.point = state.point;\n    this.grade = \"入门级\";\n    this.role = state.role;\n}\n\npublic void play(int score, String result) {\n    //获胜\n    if(result.equalsIgnoreCase(\"win\")) {\n        this.point += score;\n        System.out.println(\"玩家\" + this.role.getNickname() + \"获胜,增加积分\" + score + \",当前积分为\" + this.point + \"。\");\n    }\n    //失利\n    else if(result.equalsIgnoreCase(\"lose\")) {\n        this.point -= score;\n        System.out.println(\"玩家\" + this.role.getNickname() + \"失利,减少积分\" + score + \",当前积分为\" + this.point + \"。\");\n    }\n    this.check();\n}\n\npublic void doubleScore(int score, String result) {\n    System.out.println(\"暂不支持该功能!\");\n}\n\npublic void changeCards() {\n    System.out.println(\"暂不支持该功能!\");\n}\n\npublic void peekCards() {\n    System.out.println(\"暂不支持该功能!\");\n}\n\n//状态转换\npublic void check() {\n    if(this.point >= 10000) {\n        this.role.setState(new FinalState(this));\n    }\n    else if(this.point >= 5000) {\n        this.role.setState(new ProfessionalState(this));\n    }\n    else if(this.point >= 1000) {\n        this.role.setState(new SecondaryState(this));\n    }\n}\n//其他具体状态类代码省略\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "状态模式。参考类图如图 9-26 所示。"
      },
      {
        "type": "image",
        "alt": "图 9-26 综合题 8 参考类图",
        "src": "images/written/p145-b07.png"
      },
      {
        "type": "text",
        "content": "解析:在图 9-26 中，PlayerRole 充当环境类角色，RoleState 充当抽象状态类，PrimaryState、SecondaryState、ProfessionalState 和 FinalState 充当具体状态类。本实例部分代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 状态模式实现的纸牌游戏等级（第一部分）\n * PlayerRole：环境类，玩家角色\n */\n//环境类\nclass PlayerRole {\n    private String nickname;  // 玩家昵称"
      },
      {
        "type": "text",
        "content": ":"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 状态模式实现的纸牌游戏等级（第二部分，接上一段）\n * 1. PlayerRole：环境类，持有当前等级状态，所有操作都交给状态对象\n * 2. RoleState：抽象状态，保存积分和等级名称\n * 3. PrimaryState 等四个子类：入门级、熟练级、高手级、骨灰级\n * 等级越高，开放的功能越多；积分变化后由 check() 自动切换等级\n */\nprivate RoleState state;  // 当前等级状态\npublic PlayerRole(String nickname) {\n    this.nickname = nickname;\n}\n\npublic String getNickname() {\n    return this.nickname;\n}\n\n// 切换等级，由状态对象的 check() 调用\npublic void setState(RoleState state) {\n    this.state = state;\n}\n\n// 以下四个方法都直接转给当前状态，自己不做判断\npublic void play(int score, String result) {\n    state.play(score,result);\n}\n\npublic void doubleScore(int score, String result) {\n    state.doubleScore(score,result);\n}\n\npublic void changeCards() {\n    state.changeCards();\n}\n\npublic void peekCards() {\n    state.peekCards();\n}\n}\n\n//抽象状态类\n// 抽象状态\nabstract class RoleState {\n    protected PlayerRole role;  // 所属的玩家，切换等级时要用\n    protected int point;          //积分\n    protected String grade;         //等级\n    public abstract void play(int score, String result);\n    public abstract void doubleScore(int score, String result);\n    public abstract void changeCards();\n    public abstract void peekCards();\n    public abstract void check();  // 检查积分，决定是否升级\n}\n\n//具体状态类\n// 入门级：只有最基本的 play 功能\nclass PrimaryState extends RoleState {\n    // 新玩家创建时使用：积分从 0 开始\n    public PrimaryState(PlayerRole role) {\n        this.point = 0;\n        this.grade = \"入门级\";\n        this.role = role;\n    }\n// 从别的等级切换过来时使用：沿用原来的积分和玩家\npublic PrimaryState(RoleState state) {\n    this.point = state.point;\n    this.grade = \"入门级\";\n    this.role = state.role;\n}\n\n// 打一局：赢加分，输扣分，然后检查等级\npublic void play(int score, String result) {\n    //获胜\n    if(result.equalsIgnoreCase(\"win\")) {\n        this.point += score;\n        System.out.println(\"玩家\" + this.role.getNickname() + \"获胜,增加积分\" + score + \",当前积分为\" + this.point + \"。\");\n    }\n    //失利\n    else if(result.equalsIgnoreCase(\"lose\")) {\n        this.point -= score;\n        System.out.println(\"玩家\" + this.role.getNickname() + \"失利,减少积分\" + score + \",当前积分为\" + this.point + \"。\");\n    }\n    this.check();\n}\n\n// 入门级不支持以下三个高级功能\npublic void doubleScore(int score, String result) {\n    System.out.println(\"暂不支持该功能!\");\n}\n\npublic void changeCards() {\n    System.out.println(\"暂不支持该功能!\");\n}\n\npublic void peekCards() {\n    System.out.println(\"暂不支持该功能!\");\n}\n\n//状态转换\n// 按积分从高到低判断应处的等级\npublic void check() {\n    // 10000 分及以上：骨灰级\n    if(this.point >= 10000) {\n        this.role.setState(new FinalState(this));\n    }\n    // 5000 分及以上：高手级\n    else if(this.point >= 5000) {\n        this.role.setState(new ProfessionalState(this));\n    }\n    // 1000 分及以上：熟练级\n    else if(this.point >= 1000) {\n        this.role.setState(new SecondaryState(this));\n    }\n}\n//其他具体状态类代码省略"
      }
    ],
    "roles": [
      [
        "PlayerRole",
        "环境类，玩家角色，持有当前等级状态"
      ],
      [
        "RoleState",
        "抽象状态，声明 play、doubleScore、changeCards、peekCards、check"
      ],
      [
        "PrimaryState、SecondaryState、ProfessionalState、FinalState",
        "具体状态，四个等级"
      ]
    ],
    "steps": [
      {
        "title": "第一步　看出“等级”就是状态",
        "bullets": [
          "同样调用 changeCards()，入门级不能用，高手级能用",
          "角色的行为随等级变化，而等级又随积分变化",
          "这正是状态模式：行为取决于内部状态，状态会自动切换"
        ],
        "code": ""
      },
      {
        "title": "第二步　每个类怎么分工",
        "bullets": [
          "PlayerRole 只保存 state，play、doubleScore 等方法都转给 state 去做",
          "每个具体状态实现自己支持的功能，不支持的输出“暂不支持该功能!”",
          "高一级的状态在低一级的基础上多开放一个功能"
        ],
        "code": ""
      },
      {
        "title": "第三步　等级怎么切换",
        "bullets": [
          "每次 play 改变积分后调用 check()",
          "check() 按积分判断：≥10000 骨灰级，≥5000 高手级，≥1000 熟练级",
          "切换时 new 一个新状态对象，把旧状态的积分带过去，再 role.setState(新状态)"
        ],
        "code": ""
      },
      {
        "title": "第四步　和 if-else 写法比较",
        "bullets": [
          "不用状态模式，每个功能方法里都要先判断等级，判断散落各处",
          "用状态模式后，每个等级的规则集中在一个类里，加新等级主要是加新状态类"
        ],
        "code": ""
      }
    ],
    "memory": [
      "环境类方法只写 state.xxx()；状态切换写在状态类的 check() 里",
      "状态切换时要把共享数据（积分）传给新状态"
    ],
    "quotes": [
      {
        "text": "解析:在图 9-26 中，PlayerRole 充当环境类角色，RoleState 充当抽象状态类，PrimaryState、SecondaryState、ProfessionalState 和 FinalState 充当具体状态类。",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第739行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/19-State模式.md"
  },
  {
    "id": "E4-COMP-09",
    "type": "comprehensive",
    "source": "习题4综合题第9题",
    "category": "行为型设计模式",
    "pattern": "策略模式",
    "stem": "某系统需要对重要数据(如用户密码)进行加密,并提供了几种加密方案(如恺撒加密、DES加密等),对该加密模块进行设计,使得用户可以动态选择加密方式。要求绘制类图并编程模拟实现。",
    "materials": [],
    "answers": [
      "策略模式。参考类图如图 9-27 所示。\n\n![图9-27 综合题9参考类图](images/written/p148-b04.png)\n\n图9-27 综合题9参考类图\n\n解析:在图 9-27 中，DataOperation 充当环境类角色，Cipher 充当抽象策略角色，CaesarCipher 和 ModCipher 充当具体策略角色。其中，DataOperation 类的代码如下:\n\n```java\nclass DataOperation {\n    private Cipher cipher;\n    public void setCipher(Cipher cipher) {\n        this.cipher = cipher;\n    }\n    public String doEncrypt(int key, String plainText) {\n        return cipher.doEncrypt(key,plainText);\n    }\n}\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "策略模式。参考类图如图 9-27 所示。"
      },
      {
        "type": "image",
        "alt": "图9-27 综合题9参考类图",
        "src": "images/written/p148-b04.png"
      },
      {
        "type": "text",
        "content": "解析:在图 9-27 中，DataOperation 充当环境类角色，Cipher 充当抽象策略角色，CaesarCipher 和 ModCipher 充当具体策略角色。其中，DataOperation 类的代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 策略模式：环境类 DataOperation\n * Cipher 是抽象策略，CaesarCipher、ModCipher 是具体加密策略（代码省略）\n */\nclass DataOperation {\n    private Cipher cipher;  // 当前使用的加密策略，类型是抽象策略\n    // 用户选择加密方式时调用，可以随时更换\n    public void setCipher(Cipher cipher) {\n        this.cipher = cipher;\n    }\n    public String doEncrypt(int key, String plainText) {\n        return cipher.doEncrypt(key,plainText);  // 加密工作交给当前策略完成\n    }\n}"
      }
    ],
    "roles": [
      [
        "DataOperation",
        "环境类，持有一个加密策略"
      ],
      [
        "Cipher",
        "抽象策略，声明 doEncrypt(key, plainText)"
      ],
      [
        "CaesarCipher、ModCipher",
        "具体策略，不同的加密算法"
      ]
    ],
    "steps": [
      {
        "title": "第一步　找出可替换的部分",
        "bullets": [
          "加密算法有多种，而且用户要能动态选择",
          "不管用哪种算法，调用方式都一样：给密钥和明文，得到密文"
        ],
        "code": ""
      },
      {
        "title": "第二步　每种算法写成一个策略",
        "bullets": [
          "Cipher 声明 doEncrypt(int key, String plainText)",
          "CaesarCipher、ModCipher 各自实现一种加密",
          "以后加 DES 等算法，只要再写一个 Cipher 的子类"
        ],
        "code": ""
      },
      {
        "title": "第三步　环境类怎么用策略",
        "bullets": [
          "DataOperation 持有 Cipher cipher，通过 setCipher() 设置",
          "doEncrypt() 里直接 return cipher.doEncrypt(key, plainText)",
          "用户选哪种加密，就 setCipher 哪个对象，DataOperation 的代码不变"
        ],
        "code": ""
      },
      {
        "title": "第四步　这样设计解决了什么",
        "bullets": [
          "去掉了“if 选择算法”的分支",
          "算法之间可以互相替换，新增算法不改原有代码"
        ],
        "code": ""
      }
    ],
    "memory": [
      "策略模式：环境类持有抽象策略，用 setter 换策略，方法里委托给策略",
      "“用户可选的多种算法”就用策略"
    ],
    "quotes": [
      {
        "text": "解析:在图 9-27 中，DataOperation 充当环境类角色，Cipher 充当抽象策略角色，CaesarCipher 和 ModCipher 充当具体策略角色。",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第856行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/10-Strategy模式.md"
  },
  {
    "id": "E4-COMP-10",
    "type": "comprehensive",
    "source": "习题4综合题第10题",
    "category": "行为型设计模式",
    "pattern": "模板方法模式",
    "stem": "某银行软件的利息计算流程如下:系统根据账户查询用户信息；根据用户信息判断用户类型；不同类型的用户使用不同的利息计算方式计算利息（如活期账户 CurrentAccount 和定期账户 SavingAccount 具有不同的利息计算方式）；显示利息。现使用模板方法模式来设计该系统，绘制类图并编程实现。",
    "materials": [],
    "answers": [
      "模板方法模式。参考类图如图 9-28 所示。\n\n![图9-28 综合题10参考类图](images/written/p148-b09.png)\n\n图9-28 综合题10参考类图\n\n解析:在图 9-28 中，Account 充当抽象父类角色，CurrentAccount 和 SavingAccount 充当具体子类角色。其中，Account 和 CurrentAccount 的模拟代码如下:\n\n```java\nabstract class Account {\n    public abstract void getUserType();\n    public abstract void calculateInterest();\n    public void findUser() {\n        System.out.println(\"查询用户信息!\");\n    }\n    public void display() {\n        System.out.println(\"显示利息!\");\n    }\n    public void handle() {\n        findUser();\n        getUserType();\n        calculateInterest();\n        display();\n    }\n}\n\nclass CurrentAccount extends Account {\n    public void getUserType() {\n        System.out.println(\"活期账户!\");\n    }\n    public void calculateInterest() {\n        System.out.println(\"按活期利率计算利息!\");\n    }\n}\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "模板方法模式。参考类图如图 9-28 所示。"
      },
      {
        "type": "image",
        "alt": "图9-28 综合题10参考类图",
        "src": "images/written/p148-b09.png"
      },
      {
        "type": "text",
        "content": "解析:在图 9-28 中，Account 充当抽象父类角色，CurrentAccount 和 SavingAccount 充当具体子类角色。其中，Account 和 CurrentAccount 的模拟代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 模板方法模式实现的利息计算\n * Account 的 handle() 是模板方法：查询用户 → 判断类型 → 计算利息 → 显示利息\n * 判断类型和计算利息因账户而异，交给子类实现；SavingAccount 写法相同，原书省略\n */\nabstract class Account {\n    public abstract void getUserType();  // 可变步骤：判断用户类型\n    public abstract void calculateInterest();  // 可变步骤：计算利息\n    // 固定步骤：查询用户信息\n    public void findUser() {\n        System.out.println(\"查询用户信息!\");\n    }\n    // 固定步骤：显示利息\n    public void display() {\n        System.out.println(\"显示利息!\");\n    }\n    // 模板方法：把四个步骤按顺序串起来，子类不能改顺序\n    public void handle() {\n        findUser();\n        getUserType();\n        calculateInterest();\n        display();\n    }\n}\n\n// 活期账户：只实现两个可变步骤\nclass CurrentAccount extends Account {\n    public void getUserType() {\n        System.out.println(\"活期账户!\");\n    }\n    public void calculateInterest() {\n        System.out.println(\"按活期利率计算利息!\");\n    }\n}"
      }
    ],
    "roles": [
      [
        "Account",
        "抽象父类，handle() 是模板方法"
      ],
      [
        "CurrentAccount",
        "活期账户，实现自己的用户类型和利息计算"
      ],
      [
        "SavingAccount",
        "定期账户，实现自己的用户类型和利息计算"
      ]
    ],
    "steps": [
      {
        "title": "第一步　拆出流程里不变和会变的步骤",
        "bullets": [
          "四个步骤顺序固定：查询用户 → 判断用户类型 → 计算利息 → 显示利息",
          "查询用户、显示利息对所有账户都一样",
          "判断类型和计算利息因账户种类而不同"
        ],
        "code": ""
      },
      {
        "title": "第二步　父类怎么写",
        "bullets": [
          "Account 实现 findUser() 和 display()，这是共同步骤",
          "getUserType() 和 calculateInterest() 声明为抽象方法，留给子类",
          "handle() 按顺序调用四个方法，这就是模板方法"
        ],
        "code": ""
      },
      {
        "title": "第三步　子类怎么写",
        "bullets": [
          "CurrentAccount 实现两个抽象方法：输出活期账户、按活期利率计算",
          "SavingAccount 同样实现，只是换成定期的规则",
          "客户端写 Account a = new CurrentAccount(); a.handle(); 就跑完整个流程"
        ],
        "code": ""
      },
      {
        "title": "第四步　这样设计的好处",
        "bullets": [
          "流程只在父类写一次，子类不能打乱顺序",
          "新增一种账户只需写一个子类，实现两个可变步骤"
        ],
        "code": ""
      }
    ],
    "memory": [
      "模板方法：父类写流程和公共步骤，可变步骤声明为抽象方法",
      "子类只填空，不改顺序"
    ],
    "quotes": [
      {
        "text": "解析:在图 9-28 中，Account 充当抽象父类角色，CurrentAccount 和 SavingAccount 充当具体子类角色。",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第876行"
      },
      {
        "text": "在 Template Method 模式中，可以使用继承改变程序的行为。这是因为 Template Method 模式在父类中定义程序行为的框架，在子类中决定具体的处理。",
        "source": "03-TemplateMethod模式.md 第287行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/03-TemplateMethod模式.md"
  },
  {
    "id": "E4-COMP-11",
    "type": "comprehensive",
    "source": "习题4综合题第11题",
    "category": "行为型设计模式",
    "pattern": "访问者模式",
    "stem": "某公司 OA 系统中包含一个员工信息管理子系统,该公司员工包括正式员工和临时工,每周人力资源部和财务部等部门需要对员工数据进行汇总,汇总数据包括员工工作时间、员工工资等。该公司基本制度如下:",
    "materials": [
      {
        "type": "text",
        "content": "(1) 正式员工每周工作时间为 40 小时, 不同级别、不同部门的员工每周基本工资不同; 如果超过 40 小时, 超出部分按照 100 元/小时作为加班费; 如果少于 40 小时, 所缺时间按照请假处理, 请假所扣工资以 80 元/小时计算, 直到基本工资扣除到零为止。除了记录实际工作时间外, 人力资源部需记录加班时长或请假时长, 作为员工平时表现的一项依据。"
      },
      {
        "type": "text",
        "content": "(2) 临时工每周工作时间不固定,基本工资按小时计算,不同岗位的临时工小时工资不同。人力资源部只需记录实际工作时间。"
      },
      {
        "type": "text",
        "content": "现使用访问者模式设计该系统,绘制类图并编码实现。"
      }
    ],
    "answers": [
      "访问者模式。参考类图如图 9-29 所示。\n\n解析:在图 9-29 中，FADepartment 表示财务部，HRDepartment 表示人力资源部，它们充当具体访问者角色，其抽象父类 Department 充当抽象访问者角色；EmployeeList 充当对象结构，用于存储员工列表；FulltimeEmployee 表示正式员工，ParttimeEmployee 表示临时工，它们充当具体元素角色，其父接口 Employee 充当抽象元素角色。本实例代码如下:\n\n```java\nimport java.util.*;\ninterface Employee {\n    public void accept(Department handler);\n}\n\nclass FulltimeEmployee implements Employee {\n    private String name;\n    private double weeklyWage;\n    private int workTime;\n    public FulltimeEmployee(String name,double weeklyWage,int workTime) {\n        this.name = name;\n        this.weeklyWage = weeklyWage;\n        this.workTime = workTime;\n    }\n    public void setName(String name) {\n```\n\n![图9-29 综合题11参考类图](images/written/p150-b03.png)\n\n图9-29 综合题11参考类图\n\n```java\nthis.name = name;\n}\npublic void setWeeklyWage(double weeklyWage) {\n    this.weeklyWage = weeklyWage;\n}\npublic void setWorkTime(int workTime) {\n    this.workTime = workTime;\n}\npublic String getName() {\n    return (this.name);\n}\npublic double getWeeklyWage() {\n    return (this.weeklyWage);\n}\npublic int getWorkTime() {\nreturn (this.workTime);\n}\npublic void accept(Department handler) {\nhandler.visit(this);\n}\n}\n\nclass ParttimeEmployee implements Employee {\nprivate String name;\nprivate double hourWage;\nprivate int workTime;\npublic ParttimeEmployee(String name,double hourWage,int workTime) {\nthis.name = name;\nthis.hourWage = hourWage;\nthis.workTime = workTime;\n}\npublic void setName(String name) {\nthis.name = name;\n}\npublic void setHourWage(double hourWage) {\nthis.hourWage = hourWage;\n}\npublic void setWorkTime(int workTime) {\nthis.workTime = workTime;\n}\npublic String getName() {\nreturn (this.name);\n}\npublic double getHourWage() {\nreturn (this.hourWage);\n}\npublic int getWorkTime() {\nreturn (this.workTime);\n}\npublic void accept(Department handler) {\nhandler.visit(this);\n}\n}\n\nabstract class Department {\npublic abstract void visit(FulltimeEmployee employee);\npublic abstract void visit(ParttimeEmployee employee);\n}\n\nclass FADepartment extends Department {\npublic void visit(FulltimeEmployee employee) {\nint workTime = employee.workTime();\ndouble weekWage = employee.getWeeklyWage();\nif(workTime > 40) {\n```\n\n```java\nweekWage = weekWage + (workTime - 40) * 100;\n}\nelse if(workTime < 40) {\n    weekWage = weekWage - (40 - workTime) * 80;\n    if(weekWage < 0) {\n        weekWage = 0;\n    }\n}\nSystem.out.println(\"正式员工\" + employee.getName() + \"实际工资为:\" + weekWage + \"元。\");\n}\n\npublic void visit(ParttimeEmployee employee) {\n    int workTime = employee.getWorkTime();\n    double hourWage = employee.getHourWage();\n    System.out.println(\"临时工\" + employee.getName() + \"实际工资为:\" + workTime * hourWage + \"元。\");\n}\n}\n\nclass HRDepartment extends Department {\n    public void visit(FulltimeEmployee employee) {\n        int workTime = employee.getWorkTime();\n        System.out.println(\"正式员工\" + employee.getName() + \"实际工作时间为:\" + workTime + \"小时。\");\n        if(workTime > 40) {\n            System.out.println(\"正式员工\" + employee.getName() + \"加班时间为:\" + (workTime - 40) + \"小时。\");\n        }\n        else if(workTime < 40) {\n            System.out.println(\"正式员工\" + employee.getName() + \"请假时间为:\" + (40 - workTime) + \"小时。\");\n        }\n    }\n\n    public void visit(ParttimeEmployee employee) {\n        int workTime = employee.getWorkTime();\n        System.out.println(\"临时工\" + employee.getName() + \"实际工作时间为:\" + workTime + \"小时。\");\n    }\n}\n\nclass EmployeeList {\n    private ArrayList list = new ArrayList();\n    public void addEmployee(Employee employee) {\n        list.add(employee);\n    }\n\n    public void accept(Department handler) {\nfor(Object obj : list) {\n    ((Employee)obj).accept(handler);\n}\n}\n}\n\nclass Client {\n    public static void main(String args[]) {\n        EmployeeList list = new EmployeeList();\n        Employee fte1,fte2,fte3,pte1,pte2;\n        fte1 = new FulltimeEmployee(\"张无忌\",3200.00,45);\n        fte2 = new FulltimeEmployee(\"杨过\",2000.00,40);\n        fte3 = new FulltimeEmployee(\"段誉\",2400.00,38);\n        pte1 = new ParttimeEmployee(\"洪七公\",80.00,20);\n        pte2 = new ParttimeEmployee(\"郭靖\",60.00,18);\n        list.addEmployee(fte1);\n        list.addEmployee(fte2);\n        list.addEmployee(fte3);\n        list.addEmployee(pte1);\n        list.addEmployee(pte2);\n        Department fa,hr;\n        fa = new FADepartment();\n        hr = new HRDepartment();\n        System.out.println(\"财务部处理数据:\");\n        list.accept(fa);\n        System.out.println(\"------------------------------------------------\")]\n        System.out.println(\"人力资源部处理数据:\");\n        list.accept(hr);\n    }\n}\n//输出结果如下:\n//财务部处理数据:\n//正式员工张无忌实际工资为:3700.0元。\n//正式员工杨过实际工资为:2000.0元。\n//正式员工段誉实际工资为:2240.0元。\n//临时工洪七公实际工资为:1600.0元。\n//临时工郭靖实际工资为:1080.0元。\n//---------------------------------------------------\n//人力资源部处理数据:\n//正式员工张无忌实际工作时间为:45小时。\n//正式员工张无忌加班时间为:5小时。\n//正式员工杨过实际工作时间为:40小时。\n//正式员工段誉实际工作时间为:38小时。\n//正式员工段誉请假时间为:2小时。\n//临时工洪七公实际工作时间为:20小时。\n//临时工郭靖实际工作时间为:18小时。\n```"
    ],
    "answerMaterials": [
      {
        "type": "text",
        "content": "访问者模式。参考类图如图 9-29 所示。"
      },
      {
        "type": "text",
        "content": "解析:在图 9-29 中，FADepartment 表示财务部，HRDepartment 表示人力资源部，它们充当具体访问者角色，其抽象父类 Department 充当抽象访问者角色；EmployeeList 充当对象结构，用于存储员工列表；FulltimeEmployee 表示正式员工，ParttimeEmployee 表示临时工，它们充当具体元素角色，其父接口 Employee 充当抽象元素角色。本实例代码如下:"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 访问者模式实现的员工数据汇总（第一部分）\n * 1. Employee：抽象元素，声明 accept\n * 2. FulltimeEmployee、ParttimeEmployee：具体元素，正式员工和临时工\n * 3. Department：抽象访问者；FADepartment 财务部、HRDepartment 人力资源部：具体访问者\n * 4. EmployeeList：对象结构，保存所有员工\n */\nimport java.util.*;\n// 抽象元素：每种员工都要能接受部门的访问\ninterface Employee {\n    public void accept(Department handler);\n}\n\n// 正式员工\nclass FulltimeEmployee implements Employee {\n    private String name;\n    private double weeklyWage;  // 每周基本工资\n    private int workTime;  // 本周实际工作小时数\n    public FulltimeEmployee(String name,double weeklyWage,int workTime) {\n        this.name = name;\n        this.weeklyWage = weeklyWage;\n        this.workTime = workTime;\n    }\n    public void setName(String name) {"
      },
      {
        "type": "image",
        "alt": "图9-29 综合题11参考类图",
        "src": "images/written/p150-b03.png"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 访问者模式实现的员工数据汇总（第二部分，接上一段）\n * 注意：employee.workTime() 是原书识别错误，应为 employee.getWorkTime()\n */\nthis.name = name;\n}\npublic void setWeeklyWage(double weeklyWage) {\n    this.weeklyWage = weeklyWage;\n}\npublic void setWorkTime(int workTime) {\n    this.workTime = workTime;\n}\npublic String getName() {\n    return (this.name);\n}\npublic double getWeeklyWage() {\n    return (this.weeklyWage);\n}\npublic int getWorkTime() {\nreturn (this.workTime);\n}\n// 接受访问：把自己交给部门，部门会调用对应的 visit\npublic void accept(Department handler) {\nhandler.visit(this);\n}\n}\n\n// 临时工\nclass ParttimeEmployee implements Employee {\nprivate String name;\nprivate double hourWage;  // 每小时工资\nprivate int workTime;\npublic ParttimeEmployee(String name,double hourWage,int workTime) {\nthis.name = name;\nthis.hourWage = hourWage;\nthis.workTime = workTime;\n}\npublic void setName(String name) {\nthis.name = name;\n}\npublic void setHourWage(double hourWage) {\nthis.hourWage = hourWage;\n}\npublic void setWorkTime(int workTime) {\nthis.workTime = workTime;\n}\npublic String getName() {\nreturn (this.name);\n}\npublic double getHourWage() {\nreturn (this.hourWage);\n}\npublic int getWorkTime() {\nreturn (this.workTime);\n}\n// 同样把自己交给部门\npublic void accept(Department handler) {\nhandler.visit(this);\n}\n}\n\n// 抽象访问者：两种员工各对应一个 visit 方法\nabstract class Department {\npublic abstract void visit(FulltimeEmployee employee);\npublic abstract void visit(ParttimeEmployee employee);\n}\n\n// 财务部：计算实际工资\nclass FADepartment extends Department {\n// 正式员工的工资计算\npublic void visit(FulltimeEmployee employee) {\nint workTime = employee.workTime();\ndouble weekWage = employee.getWeeklyWage();\n// 超过 40 小时：超出部分每小时加 100 元\nif(workTime > 40) {"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 访问者模式实现的员工数据汇总（第三部分，接上一段）\n */\nweekWage = weekWage + (workTime - 40) * 100;\n}\n// 不足 40 小时：每小时扣 80 元\nelse if(workTime < 40) {\n    weekWage = weekWage - (40 - workTime) * 80;\n    // 最多扣到 0，不会出现负工资\n    if(weekWage < 0) {\n        weekWage = 0;\n    }\n}\nSystem.out.println(\"正式员工\" + employee.getName() + \"实际工资为:\" + weekWage + \"元。\");\n}\n\n// 临时工工资：工作时间 × 小时工资\npublic void visit(ParttimeEmployee employee) {\n    int workTime = employee.getWorkTime();\n    double hourWage = employee.getHourWage();\n    System.out.println(\"临时工\" + employee.getName() + \"实际工资为:\" + workTime * hourWage + \"元。\");\n}\n}\n\n// 人力资源部：记录工作时间\nclass HRDepartment extends Department {\n    // 正式员工：记录实际工时，以及加班或请假时长\n    public void visit(FulltimeEmployee employee) {\n        int workTime = employee.getWorkTime();\n        System.out.println(\"正式员工\" + employee.getName() + \"实际工作时间为:\" + workTime + \"小时。\");\n        if(workTime > 40) {\n            System.out.println(\"正式员工\" + employee.getName() + \"加班时间为:\" + (workTime - 40) + \"小时。\");\n        }\n        else if(workTime < 40) {\n            System.out.println(\"正式员工\" + employee.getName() + \"请假时间为:\" + (40 - workTime) + \"小时。\");\n        }\n    }\n\n    // 临时工：只记录实际工时\n    public void visit(ParttimeEmployee employee) {\n        int workTime = employee.getWorkTime();\n        System.out.println(\"临时工\" + employee.getName() + \"实际工作时间为:\" + workTime + \"小时。\");\n    }\n}\n\n// 对象结构：员工列表\nclass EmployeeList {\n    private ArrayList list = new ArrayList();\n    public void addEmployee(Employee employee) {\n        list.add(employee);\n    }\n\n    // 让某个部门访问所有员工\n    public void accept(Department handler) {\nfor(Object obj : list) {\n    ((Employee)obj).accept(handler);  // 每个员工接受访问\n}\n}\n}\n\nclass Client {\n    public static void main(String args[]) {\n        EmployeeList list = new EmployeeList();\n        Employee fte1,fte2,fte3,pte1,pte2;\n        // 三个正式员工、两个临时工\n        fte1 = new FulltimeEmployee(\"张无忌\",3200.00,45);\n        fte2 = new FulltimeEmployee(\"杨过\",2000.00,40);\n        fte3 = new FulltimeEmployee(\"段誉\",2400.00,38);\n        pte1 = new ParttimeEmployee(\"洪七公\",80.00,20);\n        pte2 = new ParttimeEmployee(\"郭靖\",60.00,18);\n        list.addEmployee(fte1);\n        list.addEmployee(fte2);\n        list.addEmployee(fte3);\n        list.addEmployee(pte1);\n        list.addEmployee(pte2);\n        Department fa,hr;\n        // 两个访问者：财务部和人力资源部\n        fa = new FADepartment();\n        hr = new HRDepartment();\n        System.out.println(\"财务部处理数据:\");\n        // 财务部处理一遍：算工资\n        list.accept(fa);\n        // 原书这一行末尾的 ] 是识别错误，应为分号\n        System.out.println(\"------------------------------------------------\")]\n        System.out.println(\"人力资源部处理数据:\");\n        // 人力资源部再处理一遍：记工时\n        list.accept(hr);\n    }\n}\n//输出结果如下:\n//财务部处理数据:\n//正式员工张无忌实际工资为:3700.0元。\n//正式员工杨过实际工资为:2000.0元。\n//正式员工段誉实际工资为:2240.0元。\n//临时工洪七公实际工资为:1600.0元。\n//临时工郭靖实际工资为:1080.0元。\n//---------------------------------------------------\n//人力资源部处理数据:\n//正式员工张无忌实际工作时间为:45小时。\n//正式员工张无忌加班时间为:5小时。\n//正式员工杨过实际工作时间为:40小时。\n//正式员工段誉实际工作时间为:38小时。\n//正式员工段誉请假时间为:2小时。\n//临时工洪七公实际工作时间为:20小时。\n//临时工郭靖实际工作时间为:18小时。"
      }
    ],
    "roles": [
      [
        "Department",
        "抽象访问者，为两种员工各声明一个 visit()"
      ],
      [
        "FADepartment、HRDepartment",
        "具体访问者，财务部算工资，人力资源部记工时"
      ],
      [
        "Employee",
        "抽象元素，声明 accept(Department)"
      ],
      [
        "FulltimeEmployee、ParttimeEmployee",
        "具体元素，正式员工和临时工"
      ],
      [
        "EmployeeList",
        "对象结构，保存员工列表"
      ]
    ],
    "steps": [
      {
        "title": "第一步　看出“员工类型 × 部门处理”的组合",
        "bullets": [
          "员工只有两种，比较稳定",
          "对员工数据的处理方式有多种（财务算工资、人事记工时），以后还可能增加",
          "处理方式随“员工类型”和“部门”两者一起变化，适合访问者模式"
        ],
        "code": ""
      },
      {
        "title": "第二步　两个访问者分别怎么算",
        "bullets": [
          "财务部看正式员工：超过 40 小时，超出部分每小时加 100 元；不足 40 小时，每小时扣 80 元，最低扣到 0",
          "财务部看临时工：工资＝工作时间 × 小时工资",
          "人事部看正式员工：记录实际工时，并记录加班或请假时长",
          "人事部看临时工：只记录实际工时",
          "参考代码 FADepartment 里的 employee.workTime() 是识别错误，应为 employee.getWorkTime()"
        ],
        "code": ""
      },
      {
        "title": "第三步　对象之间怎样协作",
        "bullets": [
          "员工的 accept(handler) 里调用 handler.visit(this)，把自己交给部门",
          "EmployeeList.accept(handler) 遍历所有员工，逐个调用 accept",
          "客户端：list.accept(fa) 得到工资，list.accept(hr) 得到工时"
        ],
        "code": ""
      },
      {
        "title": "第四步　扩展时改哪里",
        "bullets": [
          "加一个新部门（比如考勤处）：只加一个 Department 子类",
          "加一种新员工（比如实习生）：Department 及所有子类都要加 visit 方法，比较麻烦"
        ],
        "code": ""
      }
    ],
    "memory": [
      "访问者模式：元素稳定、操作多变时使用",
      "元素 accept 里写 visitor.visit(this)，对象结构负责遍历"
    ],
    "quotes": [
      {
        "text": "EmployeeList 充当对象结构，用于存储员工列表",
        "source": "09-2-行为型设计模式-参考答案及习题解析.md 第910行"
      },
      {
        "text": "虽然使用 Visitor 模式可以很容易地增加 ConcreteVisitor 角色，不过它却很难应对 ConcreteElement 角色的增加。",
        "source": "13-Visitor模式.md 第446行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/13-Visitor模式.md"
  }
]
