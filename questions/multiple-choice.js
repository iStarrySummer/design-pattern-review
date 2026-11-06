window.REVIEW_MULTIPLE_CHOICE = [
  {
    "id": "E1-MC-01",
    "source": "习题1选择题第1题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "关于单一职责原则,以下说法错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "一个类只负责一个功能领域中的相应职责"
      },
      {
        "key": "B",
        "text": "就一个类而言,应该有且仅有一个引起它变化的原因"
      },
      {
        "key": "C",
        "text": "一个类承担的职责越多,越容易复用,被复用的可能性越大"
      },
      {
        "key": "D",
        "text": "一个类承担的职责过多时需要将职责进行分离,将不同的职责封装在不同的类中"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：四句话里哪一句把单一职责原则说反了",
      "单一职责原则（一个类只干一类事）：一个类只应该有一个让它被修改的理由",
      "为什么选C：一个类塞进很多职责后，别人只想用其中一个功能，也得把其他功能一起带走，所以更难复用",
      "C 还有一个问题：任何一个职责变了都要改这个类，改一处可能连累其他功能",
      "A、B、D 都是这个原则的原话或做法：只负责一类职责，只有一个变化原因，职责多了就拆开"
    ],
    "memory": "职责越多，变化原因越多，越难复用；看到“职责越多越容易复用”就是错的",
    "quotes": [
      {
        "text": "在软件系统中,一个类(大到模块,小到方法)承担的职责越多,它被复用的可能性就越小。",
        "source": "06-2-面向对象设计原则-参考答案及习题解析.md 第27行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/171771.md",
    "lessonTitle": "15-单一职责原则.md"
  },
  {
    "id": "E1-MC-02",
    "source": "习题1选择题第2题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "实现开闭原则的关键在于( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "分离类的职责"
      },
      {
        "key": "B",
        "text": "对系统进行抽象化"
      },
      {
        "key": "C",
        "text": "一个类尽可能少地与其他类发生相互作用"
      },
      {
        "key": "D",
        "text": "多用关联关系, 少用继承关系"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：想做到开闭原则，最关键的一招是什么",
      "开闭原则（对扩展开放，对修改关闭）：加新功能时写新代码，不去改已经写好的旧代码",
      "为什么选B：先定义一个抽象层（接口或抽象类），旧代码只认这个抽象层，新功能写成新的子类插进来，旧代码就不用动",
      "其他三个选项各自是别的原则：A 分离职责是单一职责原则，C 少和别的类打交道是迪米特法则，D 多用关联少用继承是合成复用原则"
    ],
    "memory": "开闭原则靠抽象化；分离职责、少交互、多用组合分别是单一职责、迪米特、合成复用",
    "quotes": [
      {
        "text": "一种常见的实现方式是找出系统的变化点，并基于变化点提取抽象层，针对抽象层编程，而将不同变化的具体实现封装到一系列具体子类中。",
        "source": "06-2-面向对象设计原则-参考答案及习题解析.md 第17行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/176075.md",
    "lessonTitle": "16-开闭原则.md"
  },
  {
    "id": "E1-MC-03",
    "source": "习题1选择题第3题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "某系统通过使用配置文件,可以在不修改源代码的情况下更换数据库驱动程序,该系统满足( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "里氏代换原则"
      },
      {
        "key": "B",
        "text": "接口隔离原则"
      },
      {
        "key": "C",
        "text": "单一职责原则"
      },
      {
        "key": "D",
        "text": "开闭原则"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：不改源代码、只改配置文件就能换数据库驱动，这符合哪个原则",
      "关键条件是“不修改源代码”就能换功能",
      "为什么选D：程序只依赖驱动的抽象接口，具体用哪个驱动类写在配置文件里，换驱动只改配置，源代码保持不动，这正是开闭原则",
      "A 里氏代换讲子类能不能替换父类，B 接口隔离讲接口要不要拆小，C 单一职责讲一个类管几件事，都和“改配置不改代码”无关"
    ],
    "memory": "看到“不修改源代码就能扩展或更换功能”，优先想到开闭原则",
    "quotes": [
      {
        "text": "在引入抽象层后，系统将具有很好的灵活性，在程序中尽量使用抽象层进行编程，而将具体类写在配置文件中。这样一来，如果系统行为发生变化，只需要对抽象层进行扩展，并修改配置文件，而无须修改原有系统的源代码",
        "source": "06-2-面向对象设计原则-参考答案及习题解析.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/176075.md",
    "lessonTitle": "16-开闭原则.md"
  },
  {
    "id": "E1-MC-04",
    "source": "习题1选择题第4题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "已知 ClassA 是 ClassB 的父类, 在 ClassC 中定义了 ClassA 类型的对象 obj, 且提供了方法 setClassA(ClassA obj) 用于给 obj 对象赋值, 以下叙述错误的是 ( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "可以在 setClassA() 方法中传递一个 ClassB 类型的对象"
      },
      {
        "key": "B",
        "text": "如果在类 ClassA 中定义了方法 method1(), 在类 ClassB 中覆盖了该方法, 当 setClassA() 方法参数传递的是 ClassB 类型的对象时, 在 ClassC 中调用 obj 的method1()方法时将执行 ClassB 的 method1()方法"
      },
      {
        "key": "C",
        "text": "可以在 ClassC 中定义一个新的方法 setClassA(ClassB obj), 它与原有方法 setClassA(ClassA obj) 构成一组重载方法"
      },
      {
        "key": "D",
        "text": "如果在 ClassB 中定义了 ClassA 没有的新方法 method2(), 当 setClassA() 方法参数传递的是 ClassB 类型的对象时, 在 ClassC 中可以调用 obj 对象的 method2() 方法"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出一句错误说法",
      "已知条件：obj 的声明类型是父类 ClassA，传进来的真实对象可能是子类 ClassB",
      "为什么选D：编译器只看声明类型，ClassA 里没有 method2()，所以通过 obj 直接调用 method2() 会编译报错，必须先强制转换成 ClassB",
      "A 对：子类对象可以放进父类类型的参数，这就是里氏代换",
      "B 对：子类覆盖了 method1()，运行时按真实对象执行，所以执行 ClassB 的版本",
      "C 对：参数类型不同的同名方法可以同时存在，这叫重载（同名不同参数的方法）"
    ],
    "memory": "变量声明成什么类型，就只能调用那个类型里有的方法；具体执行哪个版本，看运行时的真实对象",
    "quotes": [
      {
        "text": "为了确保该原则的应用，一个具体类应当只实现接口或抽象类中声明过的方法，而不要给出多余的方法，否则将无法调用在子类中增加的新方法。",
        "source": "06-2-面向对象设计原则-参考答案及习题解析.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177110.md",
    "lessonTitle": "17-里式替换原则.md"
  },
  {
    "id": "E1-MC-05",
    "source": "习题1选择题第5题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "下面关于面向对象设计的描述正确的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "针对接口编程,而不是针对实现编程"
      },
      {
        "key": "B",
        "text": "针对实现编程,而不是针对接口编程"
      },
      {
        "key": "C",
        "text": "接口与实现不可分割"
      },
      {
        "key": "D",
        "text": "优先使用继承而非组合"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：哪一句是正确的面向对象设计说法",
      "为什么选A：代码依赖接口而不是具体类，以后换实现时调用方不用改，这是依赖倒转原则的核心要求",
      "B 把 A 说反了",
      "C 错在接口和实现本来就应该分开，分开以后才能随时替换实现",
      "D 也说反了，正确的是优先使用组合，少用继承"
    ],
    "memory": "针对接口编程、优先使用组合；把这两句话反过来说的选项都是错的",
    "quotes": [
      {
        "text": "依赖倒转原则要求: 要针对接口编程, 而不要针对实现编程",
        "source": "06-2-面向对象设计原则-参考答案及习题解析.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177444.md",
    "lessonTitle": "19-依赖反转原则.md",
    "lessonLinks": [
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
    "id": "E1-MC-06",
    "source": "习题1选择题第6题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "面向对象分析与设计中的(①)是指一个模块在扩展性方面应该是开放的,而在更改性方面应该是封闭的;而(②)是指子类应当可以替换父类并出现在父类能够出现的任何地方。",
    "materials": [],
    "options": [],
    "answer": [
      "①A",
      "②B"
    ],
    "parts": [
      {
        "label": "①",
        "options": [
          {
            "key": "A",
            "text": "开闭原则"
          },
          {
            "key": "B",
            "text": "里氏代换原则"
          },
          {
            "key": "C",
            "text": "依赖倒转原则"
          },
          {
            "key": "D",
            "text": "单一职责原则"
          }
        ],
        "answer": [
          "A"
        ],
        "sourceMissing": false
      },
      {
        "label": "②",
        "options": [
          {
            "key": "A",
            "text": "开闭原则"
          },
          {
            "key": "B",
            "text": "里氏代换原则"
          },
          {
            "key": "C",
            "text": "依赖倒转原则"
          },
          {
            "key": "D",
            "text": "单一职责原则"
          }
        ],
        "answer": [
          "B"
        ],
        "sourceMissing": false
      }
    ],
    "explanation": [
      "题目在问：两句定义分别对应哪个原则",
      "①“对扩展开放、对修改关闭”就是开闭原则的定义，选A",
      "②“子类可以替换父类，出现在父类能出现的任何地方”就是里氏代换原则的定义，选B",
      "依赖倒转讲依赖抽象，单一职责讲一个类只干一类事，这两句话都没提到"
    ],
    "memory": "扩展开放修改关闭是开闭原则；子类替换父类是里氏代换原则",
    "quotes": [
      {
        "text": "子类对象（object of subtype/derived class）能够替换程序（program）中父类对象（object of base/parent class）出现的任何地方",
        "source": "177110.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/176075.md",
    "lessonTitle": "16-开闭原则.md",
    "lessonLinks": [
      {
        "title": "开闭原则",
        "path": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/176075.md"
      },
      {
        "title": "里氏代换原则",
        "path": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177110.md"
      }
    ]
  },
  {
    "id": "E1-MC-07",
    "source": "习题1选择题第7题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "以下关于面向对象设计的叙述中,错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "高层模块不应该依赖于底层模块"
      },
      {
        "key": "B",
        "text": "抽象不应该依赖于细节"
      },
      {
        "key": "C",
        "text": "细节可以依赖于抽象"
      },
      {
        "key": "D",
        "text": "高层模块无法不依赖于底层模块"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出一句错误说法，内容是依赖倒转原则",
      "依赖倒转原则（依赖抽象，不依赖具体）：高层模块和底层模块都去依赖中间的接口或抽象类",
      "为什么选D：在高层和底层之间加一个抽象层，高层只调用抽象层，就可以不直接依赖底层，所以“无法不依赖”是错的",
      "A、B、C 都是依赖倒转原则的原话：高层不依赖底层，抽象不依赖细节，细节依赖抽象"
    ],
    "memory": "依赖倒转的意思是高层和底层都依赖抽象；说高层“无法不依赖”底层的就是错的",
    "quotes": [
      {
        "text": "高层模块（high-level modules）不要依赖低层模块（low-level）。高层模块和低层模块应该通过抽象（abstractions）来互相依赖。",
        "source": "177444.md 第212行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177444.md",
    "lessonTitle": "19-依赖反转原则.md",
    "lessonLinks": [
      {
        "title": "依赖倒转原则",
        "path": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177444.md"
      }
    ]
  },
  {
    "id": "E1-MC-08",
    "source": "习题1选择题第8题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "开闭原则是面向对象的可复用设计的基石。开闭原则是指一个软件实体应当对（①）开放，对（②）关闭；里氏代换原则是指任何（③）可以出现的地方，（④）一定可以出现；依赖倒转原则就是要依赖于（⑤），而不要依赖于（⑥），或者说要针对接口编程，不要针对实现编程。",
    "materials": [],
    "options": [],
    "answer": [
      "①B",
      "②A",
      "③C",
      "④D",
      "⑤D",
      "⑥C"
    ],
    "parts": [
      {
        "label": "①",
        "options": [
          {
            "key": "A",
            "text": "修改"
          },
          {
            "key": "B",
            "text": "扩展"
          },
          {
            "key": "C",
            "text": "分析"
          },
          {
            "key": "D",
            "text": "设计"
          }
        ],
        "answer": [
          "B"
        ],
        "sourceMissing": false
      },
      {
        "label": "②",
        "options": [
          {
            "key": "A",
            "text": "修改"
          },
          {
            "key": "B",
            "text": "扩展"
          },
          {
            "key": "C",
            "text": "分析"
          },
          {
            "key": "D",
            "text": "设计"
          }
        ],
        "answer": [
          "A"
        ],
        "sourceMissing": false
      },
      {
        "label": "③",
        "options": [
          {
            "key": "A",
            "text": "变量"
          },
          {
            "key": "B",
            "text": "常量"
          },
          {
            "key": "C",
            "text": "基类对象"
          },
          {
            "key": "D",
            "text": "子类对象"
          }
        ],
        "answer": [
          "C"
        ],
        "sourceMissing": false
      },
      {
        "label": "④",
        "options": [
          {
            "key": "A",
            "text": "变量"
          },
          {
            "key": "B",
            "text": "常量"
          },
          {
            "key": "C",
            "text": "基类对象"
          },
          {
            "key": "D",
            "text": "子类对象"
          }
        ],
        "answer": [
          "D"
        ],
        "sourceMissing": false
      },
      {
        "label": "⑤",
        "options": [
          {
            "key": "A",
            "text": "程序设计语言"
          },
          {
            "key": "B",
            "text": "建模语言"
          },
          {
            "key": "C",
            "text": "实现"
          },
          {
            "key": "D",
            "text": "抽象"
          }
        ],
        "answer": [
          "D"
        ],
        "sourceMissing": false
      },
      {
        "label": "⑥",
        "options": [
          {
            "key": "A",
            "text": "程序设计语言"
          },
          {
            "key": "B",
            "text": "建模语言"
          },
          {
            "key": "C",
            "text": "实现"
          },
          {
            "key": "D",
            "text": "抽象"
          }
        ],
        "answer": [
          "C"
        ],
        "sourceMissing": false
      }
    ],
    "explanation": [
      "题目在问：把三个原则的定义填完整",
      "开闭原则：对扩展开放，所以①选B 扩展；对修改关闭，所以②选A 修改",
      "里氏代换原则：基类对象能出现的地方，子类对象也一定能出现，所以③选C 基类对象，④选D 子类对象",
      "③④不能对调：子类比父类多东西，父类不一定能顶替子类",
      "依赖倒转原则：依赖抽象，不依赖实现，所以⑤选D 抽象，⑥选C 实现"
    ],
    "memory": "开闭：扩展开放修改关闭；里氏：父类能去的地方子类都能去；依赖倒转：依赖抽象不依赖实现",
    "quotes": [
      {
        "text": "软件实体（模块、类、方法等）应该“对扩展开放、对修改关闭”。",
        "source": "176075.md 第15行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/176075.md",
    "lessonTitle": "16-开闭原则.md",
    "lessonLinks": [
      {
        "title": "开闭原则",
        "path": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/176075.md"
      },
      {
        "title": "里氏代换原则",
        "path": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177110.md"
      },
      {
        "title": "依赖倒转原则",
        "path": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177444.md"
      }
    ]
  },
  {
    "id": "E1-MC-09",
    "source": "习题1选择题第9题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "关于继承复用和合成复用,以下叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "继承复用实现简单,子类可以继承父类的部分方法和属性,并且可以选择性覆盖父类的方法"
      },
      {
        "key": "B",
        "text": "继承复用会破坏系统的封装性,会将基类的实现细节暴露给子类"
      },
      {
        "key": "C",
        "text": "合成复用将已有对象纳入新对象中,使之成为新对象的一部分,新对象可以调用已有对象的方法,从而实现行为的复用"
      },
      {
        "key": "D",
        "text": "合成复用又称为“白箱”复用,与继承复用相比,其耦合度更高,成员对象的变化对容器对象影响较大,而且合成复用不能在程序运行时动态实现"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于继承复用和合成复用的错误说法",
      "合成复用：新对象里放一个已有对象当成员，通过调用它的方法来复用功能",
      "为什么选D：D 把合成复用的三个特点全说反了",
      "合成复用是“黑箱”复用，看不到成员对象内部；“白箱”复用指的是继承，子类能看到父类细节",
      "合成复用耦合度更低，成员对象变化对容器影响小",
      "合成复用可以在运行时换成员对象，所以能动态实现",
      "A、B、C 都对：继承写起来简单但会暴露父类细节，合成复用把已有对象变成新对象的一部分"
    ],
    "memory": "继承是白箱复用，耦合高，编译时定死；合成是黑箱复用，耦合低，运行时可换",
    "quotes": [
      {
        "text": "与继承复用相比,合成复用不会破坏系统的封装性,其适用范围更广,而且复用可以在运行时动态进行",
        "source": "06-2-面向对象设计原则-参考答案及习题解析.md 第23行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/169593.md",
    "lessonTitle": "10-组合优于继承.md"
  },
  {
    "id": "E1-MC-10",
    "source": "习题1选择题第10题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "如果一个方法能够接受一个基类对象作为其参数, 必然可以接受一个子类对象。该陈述是( )的定义。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "依赖倒转原则"
      },
      {
        "key": "B",
        "text": "里氏代换原则"
      },
      {
        "key": "C",
        "text": "合成复用原则"
      },
      {
        "key": "D",
        "text": "接口隔离原则"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：“能接受基类对象的方法一定能接受子类对象”是哪个原则",
      "为什么选B：里氏代换原则说的就是子类对象能顶替父类对象，放到参数里就是这句话",
      "A 依赖倒转讲依赖抽象，C 合成复用讲用组合代替继承，D 接口隔离讲接口要拆小，都不讲子类替换父类"
    ],
    "memory": "看到“子类替换父类”或“接受基类也能接受子类”，就是里氏代换原则",
    "quotes": [
      {
        "text": "子类对象（object of subtype/derived class）能够替换程序（program）中父类对象（object of base/parent class）出现的任何地方",
        "source": "177110.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177110.md",
    "lessonTitle": "17-里式替换原则.md"
  },
  {
    "id": "E1-MC-11",
    "source": "习题1选择题第11题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "类图( )完全符合依赖倒转原则。",
    "materials": [
      {
        "type": "image",
        "alt": "题目图片",
        "src": "images/multiple-choice/p038-b07.png"
      },
      {
        "type": "image",
        "alt": "题目图片",
        "src": "images/multiple-choice/p038-b08.png"
      },
      {
        "type": "image",
        "alt": "题目图片",
        "src": "images/multiple-choice/p038-b10.png"
      },
      {
        "type": "image",
        "alt": "题目图片",
        "src": "images/multiple-choice/p038-b12.png"
      },
      {
        "type": "image",
        "alt": "题目图片",
        "src": "images/multiple-choice/p038-b14.png"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": ""
      },
      {
        "key": "B",
        "text": ""
      },
      {
        "key": "C",
        "text": ""
      },
      {
        "key": "D",
        "text": ""
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：四张类图里，哪一张的依赖关系完全落在抽象类上",
      "判断方法：看带箭头的关联线连接的是哪两个类",
      "为什么选A：ClassA 关联的是父类 ClassB，两端都是最上层的抽象类，子类怎么换都不影响这条关系",
      "B 错：ClassA 直接关联具体子类 SubClassB，换一个子类就得改 ClassA",
      "C 错：SubClassA 关联 SubClassB，两端都是具体类",
      "D 错：虽然有一条线连到 ClassB，但 ClassA 还有一条线直接连到 SubClassB，所以不是“完全”符合"
    ],
    "memory": "依赖倒转看关联箭头：箭头两端都指向父类或接口才算完全符合，只要有一条指向具体子类就不算",
    "quotes": [
      {
        "text": "在程序代码中传递参数时或在关联关系中尽量引用层次高的抽象层类",
        "source": "06-2-面向对象设计原则-参考答案及习题解析.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177444.md",
    "lessonTitle": "19-依赖反转原则.md"
  },
  {
    "id": "E1-MC-12",
    "source": "习题1选择题第12题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "在某 MIS 系统设计中, 提供了一个专门用于连接数据库的类 DBConnection, 该类包含了用于连接数据库的方法, 系统提供 DAO(数据访问对象) 类负责对数据库进行增删改查等操作, 在操作数据库之前需要先连接数据库, 因此需要重用 DBConnection 中的连接方法。为了确保系统具有良好的可扩展性和可维护性, 类 DBConnection 和 DAO 之间的关系以 ( ) 最为合适。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "关联关系"
      },
      {
        "key": "B",
        "text": "依赖关系"
      },
      {
        "key": "C",
        "text": "继承关系"
      },
      {
        "key": "D",
        "text": "实现关系"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：DAO 要重复使用 DBConnection 的连接方法，两者用什么关系最好",
      "限制条件：既要复用连接方法，又要有好的可扩展性和可维护性",
      "为什么选A：让 DAO 持有一个 DBConnection 成员变量，用的时候调用它的连接方法，这就是关联关系，也是合成复用原则推荐的做法",
      "C 继承不合适：DAO 不是一种数据库连接，继承会把两者绑死，以后想换连接方式就要改 DAO 的父类",
      "B 依赖关系只是在某个方法里临时用一下，而 DAO 每次操作都要先连接，长期持有连接对象更合适",
      "D 实现关系只用于类实现接口，这里两个都是普通类"
    ],
    "memory": "想复用另一个类的功能，优先让它成为自己的成员对象（关联），不要为了复用去继承它",
    "quotes": [
      {
        "text": "合成复用是在一个新的对象里通过关联关系(包括组合关系和聚合关系)来使用一些已有的对象,使之成为新对象的一部分,新对象通过委派调用已有对象的方法达到功能复用的目的。",
        "source": "06-2-面向对象设计原则-参考答案及习题解析.md 第23行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/169593.md",
    "lessonTitle": "10-组合优于继承.md"
  },
  {
    "id": "E1-MC-13",
    "source": "习题1选择题第13题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "关于接口隔离原则,以下叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "在系统设计时,客户端不应该依赖那些它不需要的接口"
      },
      {
        "key": "B",
        "text": "当一个接口太大时,需要将它分割成一些更细小的接口,使用该接口的客户端类仅须知道与之相关的方法即可"
      },
      {
        "key": "C",
        "text": "接口应该尽量细化,同时接口中的方法应该尽可能少,理想情况是在每个接口中只定义一个方法,该接口使用起来最为方便"
      },
      {
        "key": "D",
        "text": "一个接口只代表一个角色,每个角色都有它特定的一个接口"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于接口隔离原则的错误说法",
      "接口隔离原则（接口别做太大）：客户端只依赖自己用得到的方法",
      "为什么选C：接口要细，但不是越少越好，C 把“每个接口只定义一个方法”说成理想情况，就拆过头了",
      "拆得太碎会让接口数量暴增，一个类要实现一堆小接口，反而不好用",
      "正确的尺度是一个接口对应一个角色，这个角色该有的方法都要有",
      "A、B、D 都是原则的正常表述：不依赖不需要的接口，大接口要拆小，一个接口代表一个角色"
    ],
    "memory": "接口隔离按“角色”拆分，不是按“方法个数”拆分；说“越少越好、一个方法最理想”的是错的",
    "quotes": [
      {
        "text": "每一个接口应该承担一种相对独立的角色,不干不该干的事,该干的事都要干。",
        "source": "06-2-面向对象设计原则-参考答案及习题解析.md 第29行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/177442.md",
    "lessonTitle": "18-接口隔离原则.md"
  },
  {
    "id": "E1-MC-14",
    "source": "习题1选择题第14题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "在系统设计中应用迪米特法则,以下叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "在类的划分上,应该尽量创建松耦合的类,类的耦合度越低,复用越容易"
      },
      {
        "key": "B",
        "text": "如果两个类之间不必彼此直接通信,那么这两个类就不应当发生直接的相互作用"
      },
      {
        "key": "C",
        "text": "在对其他类的引用上,一个对象对其他对象的引用应当降到最低"
      },
      {
        "key": "D",
        "text": "在类的设计上,只要有可能,一个类型应该尽量设计成抽象类或接口,且成员变量和成员函数的访问权限最好设置为公开的(public)"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：应用迪米特法则时，哪一句是错的",
      "迪米特法则（少和陌生人说话）：一个类尽量少知道别的类，彼此联系越少越好",
      "为什么选D：迪米特法则要求成员变量和方法的访问权限尽量收紧，D 却说最好都设成 public，等于把内部全部暴露出去，别人就会直接依赖这些细节",
      "A、B、C 都符合迪米特法则：类要松耦合，不必直接通信就不直接调用，对别的对象的引用降到最少"
    ],
    "memory": "迪米特法则要少暴露、少引用、少直接通信；看到“设成 public”就是反方向",
    "quotes": [
      {
        "text": "迪米特法则是希望减少类之间的耦合，让类越独立越好。每个类都应该少了解系统的其他部分。",
        "source": "179615.md 第293行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/179615.md",
    "lessonTitle": "22-迪米特法则.md"
  },
  {
    "id": "E1-MC-15",
    "source": "习题1选择题第15题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "一个软件实体应当尽可能少地与其他软件实体发生相互作用,这样,当一个模块修改时,就会尽量少地影响其他模块,扩展会相对容易。这是( )的定义。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "迪米特法则"
      },
      {
        "key": "B",
        "text": "接口隔离原则"
      },
      {
        "key": "C",
        "text": "里氏代换原则"
      },
      {
        "key": "D",
        "text": "合成复用原则"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：“尽量少地与其他软件实体发生相互作用”是哪个原则的定义",
      "为什么选A：迪米特法则也叫最少知识原则，核心就是减少和其他类的直接交往，改一个模块时少连累别人",
      "B 接口隔离讲接口要拆小，C 里氏代换讲子类替换父类，D 合成复用讲用组合代替继承"
    ],
    "memory": "“尽可能少地相互作用”“最少知识”都指迪米特法则",
    "quotes": [
      {
        "text": "不该有直接依赖关系的类之间，不要有依赖；有依赖关系的类之间，尽量只依赖必要的接口（也就是定义中的“有限知识”）。",
        "source": "179615.md 第53行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/179615.md",
    "lessonTitle": "22-迪米特法则.md"
  },
  {
    "id": "E1-MC-16",
    "source": "习题1选择题第16题",
    "category": "面向对象设计原则",
    "pattern": "面向对象设计原则",
    "stem": "( )不是迪米特法则的重构方案实例。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "为了防止界面组件之间产生复杂的引用关系, 提供一个中央控制器来负责控制界面组件间的相互引用"
      },
      {
        "key": "B",
        "text": "由于不能直接访问一个远程对象, 在本地创建一个远程对象的代理, 通过代理对象来间接访问远程对象"
      },
      {
        "key": "C",
        "text": "为了降低多层系统的耦合度, 提高类的可扩展性和复用性, 在界面表示层和业务逻辑层之间增加控制层, 由控制层来转发表示层对业务逻辑的调用"
      },
      {
        "key": "D",
        "text": "为了提高可扩展性, 在系统中增加抽象业务逻辑层, 客户类针对抽象业务逻辑层编程, 而将具体业务逻辑类类名存储在配置文件中"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：哪一个做法不是在用迪米特法则",
      "迪米特法则的典型做法：两个类不直接打交道，中间加一个“第三者”帮忙转发",
      "A 加中央控制器协调界面组件，B 通过本地代理访问远程对象，C 加控制层转发表示层的调用，三者都是加了一个中间人",
      "为什么选D：D 是增加抽象层、针对抽象编程、把具体类名写进配置文件，这是依赖倒转原则和开闭原则的做法，没有加中间人"
    ],
    "memory": "迪米特法则的重构一般是“加中间人转发”；“加抽象层＋配置文件”属于依赖倒转和开闭原则",
    "quotes": [
      {
        "text": "不该有直接依赖关系的类之间，不要有依赖；有依赖关系的类之间，尽量只依赖必要的接口（也就是定义中的“有限知识”）。",
        "source": "179615.md 第53行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/design-pattern-books-master/docs/179615.md",
    "lessonTitle": "22-迪米特法则.md"
  },
  {
    "id": "E2-MC-01",
    "source": "习题2选择题第1题",
    "category": "创建型设计模式",
    "pattern": "设计模式基础",
    "stem": "在面向对象软件开发过程中,采用设计模式( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "允许在非面向对象程序设计语言中使用面向对象的概念"
      },
      {
        "key": "B",
        "text": "以复用成功的设计和体系结构"
      },
      {
        "key": "C",
        "text": "以减少设计过程创建的实例对象的个数"
      },
      {
        "key": "D",
        "text": "以保证程序的运行速度达到最优值"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：用设计模式的目的是什么",
      "设计模式是前人对反复出现的设计问题总结出的成熟解法",
      "为什么选B：用设计模式就是把这些已经被证明好用的设计直接拿来用，也就是复用成功的设计和结构",
      "A 错：设计模式本身建立在面向对象之上，不能让非面向对象语言变成面向对象",
      "C 错：减少对象数量只是单例、享元等少数模式的效果，不是用设计模式的总目的",
      "D 错：很多模式会多加几层调用，不保证运行速度最快"
    ],
    "memory": "设计模式的核心价值是复用成功的设计经验，不是提速，也不是减少对象",
    "quotes": [
      {
        "text": "本来设计模式就是开发人员对反复遇到的问题总结出来的解决方法。",
        "source": "D-设计模式Q&A.md 第50行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/D-设计模式Q&A.md",
    "lessonTitle": "D-设计模式Q&A.md",
    "lessonLinks": [
      {
        "title": "设计模式的复用价值",
        "path": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/D-设计模式Q&A.md"
      }
    ]
  },
  {
    "id": "E2-MC-02",
    "source": "习题2选择题第2题",
    "category": "创建型设计模式",
    "pattern": "设计模式基础",
    "stem": "设计模式具有( )的优点。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "适应需求变化"
      },
      {
        "key": "B",
        "text": "程序易于理解"
      },
      {
        "key": "C",
        "text": "减少开发过程中的代码开发工作量"
      },
      {
        "key": "D",
        "text": "简化软件系统的设计"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：参考答案认定的设计模式优点是哪一项",
      "为什么选D：遇到常见问题时直接套用现成的模式，不用从零想结构，设计工作因此变简单",
      "A 说得太宽：一个模式只让某个预先找好的变化点容易改，并不能适应所有需求变化",
      "B 不一定成立：模式会增加接口和类，不熟悉模式的人读代码反而更费劲",
      "C 不成立：模式常常要多写抽象类、接口和子类，代码量往往会增加"
    ],
    "memory": "设计模式省的是“想设计”的功夫，不保证少写代码，也不保证代码更好懂",
    "quotes": [
      {
        "text": "设计模式的重要性在于，可以帮助大家很快地掌握那些经验丰富的开发人员才具有的知识和经验。",
        "source": "D-设计模式Q&A.md 第52行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/D-设计模式Q&A.md",
    "lessonTitle": "D-设计模式Q&A.md",
    "lessonLinks": [
      {
        "title": "设计模式的设计简化作用",
        "path": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/D-设计模式Q&A.md"
      }
    ]
  },
  {
    "id": "E2-MC-03",
    "source": "习题2选择题第3题",
    "category": "创建型设计模式",
    "pattern": "设计模式基础",
    "stem": "在进行面向对象设计时,采用设计模式能够( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "复用相似问题的相同解决方案"
      },
      {
        "key": "B",
        "text": "改善代码的平台可移植性"
      },
      {
        "key": "C",
        "text": "改善代码的可理解性"
      },
      {
        "key": "D",
        "text": "增强软件的已安装性"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：面向对象设计时用设计模式能带来什么",
      "为什么选A：同一类问题会反复出现，设计模式把一种好用的解法固定下来，下次遇到相似问题就复用这套解法",
      "B 平台可移植性取决于语言和运行环境，和设计模式无关",
      "C 不一定：模式增加了抽象层，代码不一定更容易读懂",
      "D “已安装性”是部署问题，和设计模式无关"
    ],
    "memory": "相似问题用相同解法，这就是设计模式的本质",
    "quotes": [
      {
        "text": "设计模式是指针对软件开发过程中重复发生的问题的解决办法。",
        "source": "D-设计模式Q&A.md 第17行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/D-设计模式Q&A.md",
    "lessonTitle": "D-设计模式Q&A.md",
    "lessonLinks": [
      {
        "title": "相似问题的方案复用",
        "path": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/D-设计模式Q&A.md"
      }
    ]
  },
  {
    "id": "E2-MC-04",
    "source": "习题2选择题第4题",
    "category": "创建型设计模式",
    "pattern": "简单工厂模式",
    "stem": "以下关于简单工厂模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "简单工厂模式可以根据参数的不同返回不同的类的实例"
      },
      {
        "key": "B",
        "text": "简单工厂模式专门定义一个类来负责创建其他类的实例, 被创建的实例通常都具有共同的父类"
      },
      {
        "key": "C",
        "text": "简单工厂模式可以减少系统中类的个数, 简化系统的设计, 使得系统更易于理解"
      },
      {
        "key": "D",
        "text": "系统的扩展困难, 一旦添加新的产品就不得不修改工厂逻辑, 违背了开闭原则"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于简单工厂模式的错误说法",
      "简单工厂模式：一个工厂类里写 if 或 switch，根据参数决定 new 哪个产品类",
      "为什么选C：简单工厂要额外增加一个工厂类，类的数量变多了，没有减少",
      "而且产品越多，工厂里的判断越长，系统更难理解",
      "A、B、D 都对：按参数返回不同实例，产品通常有共同父类，加新产品要改工厂逻辑所以违背开闭原则"
    ],
    "memory": "简单工厂的代价是多一个工厂类、工厂里判断越写越长，加产品就要改工厂",
    "quotes": [
      {
        "text": "简单工厂模式(Simple Factory Pattern): 定义一个工厂类, 它可以根据参数的不同返回不同类的实例, 被创建的实例通常都具有共同的父类。",
        "source": "A-常用设计模式的定义及结构图.md 第13行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md",
    "lessonTitle": "04-FactoryMethod模式.md"
  },
  {
    "id": "E2-MC-05",
    "source": "习题2选择题第5题",
    "category": "创建型设计模式",
    "pattern": "简单工厂模式",
    "stem": "在简单工厂模式中,如果需要增加新的具体产品,必须修改( )的源代码。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "抽象产品类"
      },
      {
        "key": "B",
        "text": "其他具体产品类"
      },
      {
        "key": "C",
        "text": "工厂类"
      },
      {
        "key": "D",
        "text": "客户类"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：简单工厂加一个新产品时，哪个类的代码非改不可",
      "为什么选C：决定 new 哪个产品的 if 或 switch 写在工厂类里，新产品要多一个分支，所以必须改工厂类",
      "A 抽象产品类只定义公共方法，新产品继承它就行，不用改",
      "B 其他具体产品类之间互不相干，不用改",
      "D 客户类只要传一个新参数，不用改源代码"
    ],
    "memory": "简单工厂的判断逻辑集中在工厂类，所以加产品一定改工厂类，这就是它违背开闭原则的地方",
    "quotes": [
      {
        "text": "对于上面两种简单工厂模式的实现方法，如果我们要添加新的parser，那势必要改动到RuleConfigParserFactory的代码",
        "source": "197254.md 第160行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md",
    "lessonTitle": "04-FactoryMethod模式.md"
  },
  {
    "id": "E2-MC-06",
    "source": "习题2选择题第6题",
    "category": "创建型设计模式",
    "pattern": "简单工厂模式",
    "stem": "关于 Java 语言实现简单工厂模式中的静态工厂方法,以下叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "工厂子类可以继承父类非私有的静态方法"
      },
      {
        "key": "B",
        "text": "工厂子类可以覆盖父类的静态方法"
      },
      {
        "key": "C",
        "text": "工厂子类的静态工厂方法可以在运行时覆盖由工厂父类声明的工厂对象的静态工厂方法"
      },
      {
        "key": "D",
        "text": "静态工厂方法支持重载"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：关于 Java 静态工厂方法，哪一句是错的",
      "关键知识：static 方法属于类本身，不属于某个对象",
      "为什么选C：调用静态方法时，Java 在编译时就按变量的声明类型决定调用哪个类的版本，运行时不会去看真实对象，所以子类的静态方法不能在运行时替换父类的",
      "A 对：子类能继承父类非私有的静态方法",
      "B 按题目说法算对：子类可以写一个同名同参数的静态方法把父类的版本盖住（Java 叫隐藏），但这不是多态",
      "D 对：静态方法也能写多个同名不同参数的版本，即重载"
    ],
    "memory": "静态方法可以继承、可以被同名方法盖住、可以重载，但不能在运行时多态替换",
    "quotes": [
      {
        "text": "实际上，简单工厂模式还叫作静态工厂方法模式（Static Factory Method Pattern）。之所以叫静态工厂方法模式，是因为其中创建对象的方法是静态的。",
        "source": "197254.md 第389行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md",
    "lessonTitle": "04-FactoryMethod模式.md"
  },
  {
    "id": "E2-MC-07",
    "source": "习题2选择题第7题",
    "category": "创建型设计模式",
    "pattern": "简单工厂模式",
    "stem": "以下代码使用了( )模式。",
    "materials": [
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 支付方式示例：三部分代码\n * 1. ExchangeMethod：所有支付方式的共同父类\n * 2. DigitalCurrency、CreditCard：两种具体的支付方式\n * 3. Factory：根据传入的字符串决定创建哪一种支付方式\n */\n// 抽象父类：只规定“支付方式都要能处理付款”，不写具体做法\npublic abstract class ExchangeMethod {\n    // 抽象方法：每种支付方式各自实现付款处理\n    public abstract void process();\n}\n\n// 具体支付方式一：数字货币\npublic class DigitalCurrency extends ExchangeMethod {\n    public void process() {...}\n}\n\n// 具体支付方式二：信用卡\npublic class CreditCard extends ExchangeMethod {\n    public void process() {...}\n}\n// 这里省略了其他支付方式\n...\n// 负责创建支付方式对象的类，调用方不用自己 new\npublic class Factory {\n    // static：不用先创建 Factory 对象，直接用类名调用\n    // 返回类型是父类 ExchangeMethod，所以能装下任何一种支付方式\n    public static ExchangeMethod createProduct(String type) {\n        // 根据参数 type 的字符串内容分情况处理\n        switch(type) {\n            // 传入 \"DigitalCurrency\" 时，创建数字货币对象\n            case \"DigitalCurrency\":\n            return new DigitalCurrency(); break;\n            // 传入 \"CreditCard\" 时，创建信用卡对象\n            case \"CreditCard\":\n            return new CreditCard(); break;\n            // 以后每增加一种支付方式，都要在这里再加一个 case\n            ...\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Simple Factory"
      },
      {
        "key": "B",
        "text": "Factory Method"
      },
      {
        "key": "C",
        "text": "Abstract Factory"
      },
      {
        "key": "D",
        "text": "未用任何设计模式"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：代码用的是哪种工厂",
      "看代码结构：只有一个 Factory 类，里面一个 static 方法 createProduct(String type)，用 switch 按字符串 new 出不同产品",
      "为什么选A：一个工厂类＋静态方法＋按参数分支创建，正是简单工厂",
      "B 工厂方法要有抽象工厂和多个具体工厂子类，每个子类只造一种产品，这里没有工厂子类",
      "C 抽象工厂要一个工厂造一整套不同种类的产品，这里只有 ExchangeMethod 一种产品"
    ],
    "memory": "一个工厂类里用 switch 或 if 按参数 new 产品，就是简单工厂",
    "quotes": [
      {
        "text": "简单工厂模式(Simple Factory Pattern): 定义一个工厂类, 它可以根据参数的不同返回不同类的实例, 被创建的实例通常都具有共同的父类。",
        "source": "A-常用设计模式的定义及结构图.md 第13行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md",
    "lessonTitle": "04-FactoryMethod模式.md"
  },
  {
    "id": "E2-MC-08",
    "source": "习题2选择题第8题",
    "category": "创建型设计模式",
    "pattern": "工厂方法模式",
    "stem": "图 7-1 是( )模式的结构图。",
    "materials": [
      {
        "type": "image",
        "alt": "图7-1 选择题8用图",
        "src": "images/multiple-choice/p045-b04.png"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Abstract Factory"
      },
      {
        "key": "B",
        "text": "Factory Method"
      },
      {
        "key": "C",
        "text": "Command"
      },
      {
        "key": "D",
        "text": "Chain of Responsibility"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：图里是哪种模式的结构",
      "看图：左边 Product 和 ConcreteProduct，右边 Creator 和 ConcreteCreator，ConcreteCreator 用虚线指向 ConcreteProduct，表示具体创建者负责造具体产品",
      "为什么选B：一个产品层次加一个创建者层次，具体创建者各造各的产品，这就是工厂方法模式",
      "A 抽象工厂会有多种产品（多棵产品继承树）",
      "C 命令模式会有 Invoker、Command、Receiver",
      "D 职责链会有一个指向自己的 successor 关联"
    ],
    "memory": "Creator＋ConcreteCreator 对应 Product＋ConcreteProduct，一对一造产品，就是工厂方法",
    "quotes": [
      {
        "text": "Creator 角色属于框架这一方，它是负责生成 Product 角色的抽象类，但具体的处理则由子类 ConcreteCreator 角色决定。",
        "source": "04-FactoryMethod模式.md 第198行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md",
    "lessonTitle": "04-FactoryMethod模式.md"
  },
  {
    "id": "E2-MC-09",
    "source": "习题2选择题第9题",
    "category": "创建型设计模式",
    "pattern": "工厂方法模式",
    "stem": "以下关于工厂方法模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "在工厂方法模式中引入了抽象工厂类,而具体产品的创建延迟到具体工厂中实现"
      },
      {
        "key": "B",
        "text": "工厂方法模式添加新的产品对象很容易,无须对原有系统进行修改,符合开闭"
      },
      {
        "key": "C",
        "text": "工厂方法模式存在的问题是在添加新产品时,需要编写新的具体产品类,而且还要提供与之对应的具体工厂类,随着类个数的增加,会给系统带来一些额外开销"
      },
      {
        "key": "D",
        "text": "工厂方法模式是所有形式的工厂模式中最为抽象和最具一般性的一种形态,工厂方法模式退化后可以演变成抽象工厂模式"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于工厂方法模式的错误说法",
      "为什么选D：工厂方法模式退化后变成的是简单工厂模式，不是抽象工厂模式",
      "退化的意思是：去掉抽象工厂，只留一个工厂类并把工厂方法改成静态方法，这正是简单工厂",
      "抽象工厂反而比工厂方法更复杂：一个工厂要造多种产品，可以看成工厂方法的推广",
      "A、B、C 都对：创建推迟到具体工厂，加产品不改旧代码，但每加一个产品要配一个具体工厂，类会变多"
    ],
    "memory": "三种工厂从简单到复杂：简单工厂 → 工厂方法 → 抽象工厂；工厂方法退化是简单工厂",
    "quotes": [
      {
        "text": "在 Factory Method 模式中，父类决定实例的生成方式，但并不决定所要生成的具体的类，具体的处理全部交给子类负责。",
        "source": "04-FactoryMethod模式.md 第17行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md",
    "lessonTitle": "04-FactoryMethod模式.md"
  },
  {
    "id": "E2-MC-10",
    "source": "习题2选择题第10题",
    "category": "创建型设计模式",
    "pattern": "工厂方法模式",
    "stem": "某银行系统采用工厂模式描述其不同账户之间的关系,设计出的类图如图 7-2 所示。其中与工厂模式中的“Creator”角色相对应的类是(①); 与“Product”角色相对应的类是(②)。",
    "materials": [
      {
        "type": "image",
        "alt": "图7-2 选择题10用图",
        "src": "images/multiple-choice/p045-b09.png"
      }
    ],
    "options": [],
    "answer": [
      "①A",
      "②B"
    ],
    "parts": [
      {
        "label": "①",
        "options": [
          {
            "key": "A",
            "text": "Bank"
          },
          {
            "key": "B",
            "text": "Account"
          },
          {
            "key": "C",
            "text": "Checking"
          },
          {
            "key": "D",
            "text": "Savings"
          }
        ],
        "answer": [
          "A"
        ],
        "sourceMissing": false
      },
      {
        "label": "②",
        "options": [
          {
            "key": "A",
            "text": "Bank"
          },
          {
            "key": "B",
            "text": "Account"
          },
          {
            "key": "C",
            "text": "Checking"
          },
          {
            "key": "D",
            "text": "Savings"
          }
        ],
        "answer": [
          "B"
        ],
        "sourceMissing": false
      }
    ],
    "explanation": [
      "题目在问：类图里谁是创建者 Creator，谁是产品 Product",
      "Creator 是有“创建方法”的类，图中只有 Bank 有 createAccount()，并用虚线指向 Account 表示它负责造账户，所以①选A",
      "Product 是被创建出来的抽象产品，Account 标着 {abstract}，下面有 Checking 和 Savings 两个子类，所以②选B",
      "Checking 和 Savings 是具体产品 ConcreteProduct，不是抽象的 Product"
    ],
    "memory": "认 Creator 看谁带 create 方法；认 Product 看谁是被造出来的抽象父类",
    "quotes": [
      {
        "text": "Creator 角色属于框架这一方，它是负责生成 Product 角色的抽象类，但具体的处理则由子类 ConcreteCreator 角色决定。",
        "source": "04-FactoryMethod模式.md 第198行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md",
    "lessonTitle": "04-FactoryMethod模式.md"
  },
  {
    "id": "E2-MC-11",
    "source": "习题2选择题第11题",
    "category": "创建型设计模式",
    "pattern": "工厂方法模式",
    "stem": "以下选项中，( )可作为工厂方法模式的应用实例。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "曲线图创建器生成曲线图, 柱状图创建器生成柱状图"
      },
      {
        "key": "B",
        "text": "通过复制已有邮件对象创建新的邮件对象"
      },
      {
        "key": "C",
        "text": "在网络上传输大图片时, 先传输对应的文字描述, 再传输真实的图片"
      },
      {
        "key": "D",
        "text": "在多个界面组件类之间添加一个控制类来协调它们之间的相互调用关系"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：哪一个场景是工厂方法模式",
      "工厂方法的特征：每种产品配一个专门的创建者，创建者各造各的",
      "为什么选A：曲线图创建器只造曲线图，柱状图创建器只造柱状图，一个创建者对应一种产品",
      "B 复制已有邮件得到新邮件是原型模式",
      "C 先传文字描述占位、真正需要时再传大图是代理模式",
      "D 用一个控制类协调多个界面组件是中介者模式"
    ],
    "memory": "“XX创建器生成XX”一对一出现时，就是工厂方法",
    "quotes": [
      {
        "text": "ConcreteCreator 角色属于具体加工这一方，它负责生成具体的产品。",
        "source": "04-FactoryMethod模式.md 第208行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md",
    "lessonTitle": "04-FactoryMethod模式.md"
  },
  {
    "id": "E2-MC-12",
    "source": "习题2选择题第12题",
    "category": "创建型设计模式",
    "pattern": "工厂方法模式",
    "stem": "不同品牌的手机应该由不同的公司制造,三星公司生产三星手机,苹果公司生产苹果手机。该场景蕴含了( )设计模式。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "Simple Factory"
      },
      {
        "key": "B",
        "text": "Factory Method"
      },
      {
        "key": "C",
        "text": "Abstract Factory"
      },
      {
        "key": "D",
        "text": "Builder"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：三星公司造三星手机、苹果公司造苹果手机，是哪种模式",
      "限制条件：不同品牌由不同公司制造，每家公司只造自己的一种手机",
      "为什么选B：每个具体工厂只生产一种具体产品，这就是工厂方法",
      "A 简单工厂是一家工厂按参数造所有品牌",
      "C 抽象工厂是每家公司造一整套产品，比如手机加平板，题目只有手机一种产品",
      "D 建造者强调一步步组装复杂对象，题目没有组装过程"
    ],
    "memory": "一家工厂造一种产品选工厂方法；一家工厂造一整套产品选抽象工厂",
    "quotes": [
      {
        "text": "ConcreteCreator 角色属于具体加工这一方，它负责生成具体的产品。",
        "source": "04-FactoryMethod模式.md 第208行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md",
    "lessonTitle": "04-FactoryMethod模式.md"
  },
  {
    "id": "E2-MC-13",
    "source": "习题2选择题第13题",
    "category": "创建型设计模式",
    "pattern": "抽象工厂模式",
    "stem": "以下关于抽象工厂模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "抽象工厂模式提供了一个创建一系列相关或相互依赖对象的接口,而无须指定它们具体的类"
      },
      {
        "key": "B",
        "text": "当系统中有多于一个产品族时可以考虑使用抽象工厂模式"
      },
      {
        "key": "C",
        "text": "当一个工厂等级结构可以创建出分属于不同产品等级结构的一个产品族中的所有对象时,抽象工厂模式比工厂方法模式更为简单、有效率"
      },
      {
        "key": "D",
        "text": "抽象工厂模式符合开闭原则,增加新的产品族和新的产品等级结构都很方便"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于抽象工厂模式的错误说法",
      "先认两个词：产品族是同一个工厂造的一整套产品，产品等级结构是同一种产品的继承树",
      "为什么选D：加新产品族只要新写一个具体工厂，不改旧代码，符合开闭原则",
      "但加新的产品等级结构（多一种新产品）要在抽象工厂里加新的创建方法，所有具体工厂都要跟着改，违背开闭原则",
      "所以 D 说“两种情况都方便”是错的",
      "A、B、C 都对：创建一系列相关对象，多个产品族时适用，一个工厂造一整族时比工厂方法更有效"
    ],
    "memory": "抽象工厂加“产品族”容易，加“产品种类”难",
    "quotes": [
      {
        "text": "请试想一下要在 Abstract Factory 模式中增加新的零件时应当如何做。例如，我们要在 factory 包中增加一个表示图像的 Picture 零件。这时，我们必须要对所有的具体工厂进行相应的修改才行。",
        "source": "08-AbstractFactory模式.md 第698行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/08-AbstractFactory模式.md",
    "lessonTitle": "08-AbstractFactory模式.md"
  },
  {
    "id": "E2-MC-14",
    "source": "习题2选择题第14题",
    "category": "创建型设计模式",
    "pattern": "简单工厂模式",
    "stem": "关于简单工厂模式、工厂方法模式和抽象工厂模式的比较,以下叙述有误的一项是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "简单工厂模式和工厂方法模式对应一个产品等级结构,而抽象工厂模式对应多个产品等级结构"
      },
      {
        "key": "B",
        "text": "3种工厂模式都隔离了产品的创建和使用,客户端类只需要使用产品,而将产品的创建过程交由工厂类来完成"
      },
      {
        "key": "C",
        "text": "3种工厂模式都提供了抽象产品角色,在工厂方法模式和抽象工厂模式中还提供了抽象工厂角色,但简单工厂模式并未提供抽象工厂"
      },
      {
        "key": "D",
        "text": "在增加新产品时,简单工厂模式违背了开闭原则,工厂方法模式和抽象工厂模式均很好地符合开闭原则"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：比较三种工厂模式，哪一句有误",
      "为什么选D：抽象工厂只在增加产品族时符合开闭原则，增加新的产品种类时要改抽象工厂和所有具体工厂，所以不能说它“均很好地符合”",
      "A 对：简单工厂和工厂方法只管一种产品，抽象工厂管多种产品",
      "B 对：三种工厂都把“创建”从“使用”里分出去了",
      "C 对：三种都有抽象产品，只有简单工厂没有抽象工厂"
    ],
    "memory": "简单工厂加产品要改工厂；工厂方法加产品不改旧代码；抽象工厂加产品族不改、加产品种类要改",
    "quotes": [
      {
        "text": "请试想一下要在 Abstract Factory 模式中增加新的零件时应当如何做。例如，我们要在 factory 包中增加一个表示图像的 Picture 零件。这时，我们必须要对所有的具体工厂进行相应的修改才行。",
        "source": "08-AbstractFactory模式.md 第698行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md",
    "lessonTitle": "04-FactoryMethod模式.md"
  },
  {
    "id": "E2-MC-15",
    "source": "习题2选择题第15题",
    "category": "创建型设计模式",
    "pattern": "抽象工厂模式",
    "stem": "关于抽象工厂模式中的产品族和产品等级结构,叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "产品等级结构是从不同的产品族中任意选取产品组成的层次结构"
      },
      {
        "key": "B",
        "text": "产品族是指位于不同产品等级结构、功能相关的产品组成的家族"
      },
      {
        "key": "C",
        "text": "抽象工厂是指一个工厂等级结构可以创建出分属于不同产品等级结构的一个产品族中的所有对象"
      },
      {
        "key": "D",
        "text": "工厂方法模式对应唯一一个产品等级结构,而抽象工厂模式则需要面对多个产品等级结构"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：产品族和产品等级结构的说法哪一句错",
      "举例：海尔电视、TCL 电视都继承“电视”，这条继承树是一个产品等级结构；海尔电视和海尔冰箱出自同一家工厂，是一个产品族",
      "为什么选A：产品等级结构是同一种产品的继承关系，不是从不同产品族里随便挑产品拼起来的",
      "B、C、D 都对：产品族跨多个等级结构，抽象工厂一个工厂造一整族，工厂方法只对应一个等级结构"
    ],
    "memory": "等级结构是“竖着”的一种产品的继承树，产品族是“横着”的同一工厂的一套产品",
    "quotes": [
      {
        "text": "AbstractFactory 角色负责定义用于生成抽象产品的接口（API）。",
        "source": "08-AbstractFactory模式.md 第656行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/08-AbstractFactory模式.md",
    "lessonTitle": "08-AbstractFactory模式.md"
  },
  {
    "id": "E2-MC-16",
    "source": "习题2选择题第16题",
    "category": "创建型设计模式",
    "pattern": "抽象工厂模式",
    "stem": "某公司要开发一个图表显示系统,在该系统中,曲线图生成器可以创建曲线图、曲线图图例和曲线图数据标签,柱状图生成器可以创建柱状图、柱状图图例和柱状图数据标签。用户要求可以很方便地增加新的类型的图形,系统需要具备较好的可扩展能力。针对这种需求,公司采用( )最为恰当。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "桥接模式"
      },
      {
        "key": "B",
        "text": "适配器模式"
      },
      {
        "key": "C",
        "text": "策略模式"
      },
      {
        "key": "D",
        "text": "抽象工厂模式"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：图表系统该用哪个模式",
      "题目条件：每种生成器都要造三样东西（图、图例、数据标签），并且要方便增加新的图形类型",
      "为什么选D：曲线图生成器造一整套曲线图产品，柱状图生成器造一整套柱状图产品，这是“一个工厂造一个产品族”，增加新图形类型只需加一个新的具体工厂",
      "A 桥接用于两个独立变化的维度，B 适配器用于接口不匹配，C 策略用于换算法，都不是“成套创建对象”"
    ],
    "memory": "一个创建者要造一整套配套对象，并且要能加新套系，就选抽象工厂",
    "quotes": [
      {
        "text": "在 Abstract Factory 模式中将会出现抽象工厂，它会将抽象零件组装为抽象产品。也就是说，我们并不关心零件的具体实现，而是只关心接口（API）。",
        "source": "08-AbstractFactory模式.md 第25行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/08-AbstractFactory模式.md",
    "lessonTitle": "08-AbstractFactory模式.md"
  },
  {
    "id": "E2-MC-17",
    "source": "习题2选择题第17题",
    "category": "创建型设计模式",
    "pattern": "工厂方法模式",
    "stem": "关于工厂模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "工厂模式隔离产品的创建和使用"
      },
      {
        "key": "B",
        "text": "在工厂类中封装产品对象的创建细节, 客户类无须关心这些细节"
      },
      {
        "key": "C",
        "text": "工厂方法模式中的工厂方法可以改为静态方法"
      },
      {
        "key": "D",
        "text": "工厂方法模式中抽象工厂声明的工厂方法返回抽象产品类型, 不能返回具体产品类型"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：关于工厂模式哪一句错",
      "为什么选C：工厂方法模式靠子类重写工厂方法来决定造什么，静态方法不能被子类按多态重写",
      "如果把工厂方法改成静态方法，就只剩一个工厂类在造东西，模式退化成简单工厂，不再是工厂方法",
      "A、B 对：工厂把创建细节藏起来，客户只管用",
      "D 对：抽象工厂声明的方法返回抽象产品类型，客户才不用依赖某个具体产品"
    ],
    "memory": "工厂方法必须是可被子类重写的普通方法；能写成静态的是简单工厂",
    "quotes": [
      {
        "text": "Creator 角色属于框架这一方，它是负责生成 Product 角色的抽象类，但具体的处理则由子类 ConcreteCreator 角色决定。",
        "source": "04-FactoryMethod模式.md 第198行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md",
    "lessonTitle": "04-FactoryMethod模式.md"
  },
  {
    "id": "E2-MC-18",
    "source": "习题2选择题第18题",
    "category": "创建型设计模式",
    "pattern": "建造者模式",
    "stem": "关于建造者模式中的 Director 类描述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "Director 类隔离了客户类及生产过程"
      },
      {
        "key": "B",
        "text": "在建造者模式中客户类指导 Director 类去生成对象或者合成一些类, 并逐步构造一个复杂对象"
      },
      {
        "key": "C",
        "text": "Director 类构建一个抽象建造者 Builder 子类的对象"
      },
      {
        "key": "D",
        "text": "Director 与抽象工厂模式中的工厂类类似, 负责返回一个产品族中的所有产品"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：关于建造者模式中 Director 的错误说法",
      "Director（指挥者）的工作：按固定顺序调用 Builder 的各个步骤方法，把一个复杂产品拼出来",
      "为什么选D：返回一整个产品族是抽象工厂的工作；建造者模式最后只得到一个复杂产品，而且通常由 Builder 返回",
      "A 对：客户不用管构建步骤，交给 Director",
      "B、C 按题目说法算对：客户告诉 Director 用哪个具体建造者，Director 拿这个建造者对象一步步构造"
    ],
    "memory": "Director 管“步骤顺序”，Builder 管“每一步怎么做”，最终只造一个复杂对象",
    "quotes": [
      {
        "text": "Director 角色负责使用 Builder 角色的接口（API）来生成实例。它并不依赖于 ConcreteBuilder 角色。",
        "source": "07-Builder模式.md 第294行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/07-Builder模式.md",
    "lessonTitle": "07-Builder模式.md"
  },
  {
    "id": "E2-MC-19",
    "source": "习题2选择题第19题",
    "category": "创建型设计模式",
    "pattern": "建造者模式",
    "stem": "以下关于建造者模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "建造者模式将一个复杂对象的构建与它的表示分离,使得同样的构建过程可以创建不同的表示"
      },
      {
        "key": "B",
        "text": "建造者模式允许用户只通过指定复杂对象的类型和内容就可以创建它们,而不需要知道内部的具体构建细节"
      },
      {
        "key": "C",
        "text": "当需要生成的产品对象有复杂的内部结构时可以考虑使用建造者模式"
      },
      {
        "key": "D",
        "text": "在建造者模式中,各个具体的建造者相互之间有较强的依赖关系,可通过指挥者类组装成一个完整的产品对象返回给客户"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于建造者模式的错误说法",
      "为什么选D：各个具体建造者之间互相独立，没有依赖关系",
      "正因为它们互相独立，才可以随时换一个建造者或新增一个建造者，Director 不用改",
      "A、B、C 都对：构建过程和表示分离，客户只给类型不管细节，适合内部结构复杂的产品"
    ],
    "memory": "具体建造者之间相互独立，所以换建造者就能换产品表示",
    "quotes": [
      {
        "text": "为了确保不论 ConcreteBuilder 角色是如何被定义的，Director 角色都能正常工作，它只调用在Builder 角色中被定义的方法。",
        "source": "07-Builder模式.md 第294行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/07-Builder模式.md",
    "lessonTitle": "07-Builder模式.md"
  },
  {
    "id": "E2-MC-20",
    "source": "习题2选择题第20题",
    "category": "创建型设计模式",
    "pattern": "建造者模式",
    "stem": "当需要创建的产品具有复杂的内部结构时,为了逐步构造完整的对象,并使得对象的创建更具弹性,可以使用( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "抽象工厂模式"
      },
      {
        "key": "B",
        "text": "原型模式"
      },
      {
        "key": "C",
        "text": "建造者模式"
      },
      {
        "key": "D",
        "text": "单例模式"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：产品内部结构复杂、需要一步步构造时用什么模式",
      "关键词是“复杂的内部结构”和“逐步构造”",
      "为什么选C：建造者模式把造对象拆成多个步骤，由 Director 控制顺序，换一个具体建造者就得到不同的结果，所以更有弹性",
      "A 抽象工厂一次造一整套产品，不强调分步组装",
      "B 原型靠复制已有对象",
      "D 单例只保证只有一个实例"
    ],
    "memory": "看到“复杂对象”“一步步构建”，选建造者",
    "quotes": [
      {
        "text": "在本章中，我们将要学习用于组装具有复杂结构的实例的 Builder 模式。",
        "source": "07-Builder模式.md 第17行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/07-Builder模式.md",
    "lessonTitle": "07-Builder模式.md"
  },
  {
    "id": "E2-MC-21",
    "source": "习题2选择题第21题",
    "category": "创建型设计模式",
    "pattern": "原型模式",
    "stem": "以下关于原型模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "原型模式通过给出一个原型对象来指明所要创建的对象的类型,然后用复制这个原型对象的办法创建出更多同类型的对象"
      },
      {
        "key": "B",
        "text": "浅克隆仅仅复制所考虑的对象,而不复制它所引用的对象,也就是其中的成员对象并不复制"
      },
      {
        "key": "C",
        "text": "在原型模式中实现深克隆时通常需要编写较为复杂的代码"
      },
      {
        "key": "D",
        "text": "在原型模式中不需要为每一个类配备一个克隆方法,因此对于原型模式的扩展很灵活,对于已有类的改造也较为容易"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于原型模式的错误说法",
      "原型模式：先有一个对象，再调用它的克隆方法复制出新对象",
      "为什么选D：原型模式恰恰要求每个类都配一个克隆方法，这是它的缺点",
      "给已有类加克隆方法就要改它的源代码，所以改造已有类并不容易",
      "A、B、C 都对：用复制原型来创建对象，浅克隆不复制成员对象，深克隆要写更多代码"
    ],
    "memory": "原型模式的缺点：每个类都要有克隆方法，改造老类要改源代码",
    "quotes": [
      {
        "text": "ConcretePrototype 角色负责实现复制现有实例并生成新实例的方法。",
        "source": "06-Prototype模式.md 第269行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/06-Prototype模式.md",
    "lessonTitle": "06-Prototype模式.md"
  },
  {
    "id": "E2-MC-22",
    "source": "习题2选择题第22题",
    "category": "创建型设计模式",
    "pattern": "原型模式",
    "stem": "以下关于 Java 语言中 clone() 方法的使用, 错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "对于任何对象 x, 都有 x.clone()==x"
      },
      {
        "key": "B",
        "text": "对于任何对象 x, 都有 x.clone().getClass()==x.getClass()"
      },
      {
        "key": "C",
        "text": "在子类的 clone() 方法中可以通过调用 super.clone() 来实现自我复制"
      },
      {
        "key": "D",
        "text": "支持浅克隆的类必须实现 Cloneable 接口, 否则将抛出 CloneNotSupportedException 异常"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：关于 Java clone() 的错误说法",
      "为什么选A：clone() 会新开一块内存做出一个新对象，新对象和原对象不是同一个，所以 x.clone()==x 为 false",
      "B 对：复制品和原对象属于同一个类",
      "C 对：子类的 clone() 里调用 super.clone() 完成复制",
      "D 对：类不实现 Cloneable 接口就调用 clone()，会抛 CloneNotSupportedException"
    ],
    "memory": "克隆出来的是新对象：地址不同（!=），类相同（getClass 相等）",
    "quotes": [
      {
        "text": "请注意，要想调用 clone 方法，被复制对象的类必须实现 java.lang.Clonable 接口",
        "source": "06-Prototype模式.md 第353行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/06-Prototype模式.md",
    "lessonTitle": "06-Prototype模式.md"
  },
  {
    "id": "E2-MC-23",
    "source": "习题2选择题第23题",
    "category": "创建型设计模式",
    "pattern": "原型模式",
    "stem": "某公司要开发一个即时聊天软件,用户在聊天过程中可以与多位好友同时聊天,在私聊时将产生多个聊天窗口,在创建聊天窗口时为了提高效率,要求根据第一个窗口快速创建其他窗口。针对这种需求,采用( )最为恰当。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "享元模式"
      },
      {
        "key": "B",
        "text": "单例模式"
      },
      {
        "key": "C",
        "text": "原型模式"
      },
      {
        "key": "D",
        "text": "组合模式"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：根据第一个聊天窗口快速创建其他窗口，用什么模式",
      "关键条件是“根据第一个窗口快速创建”",
      "为什么选C：把第一个窗口当原型，后面的窗口直接复制它，比每次从头构造更快",
      "A 享元是多个地方共用同一个对象，而每个聊天窗口要各自独立显示不同的好友",
      "B 单例只允许一个窗口，和“多个窗口”矛盾",
      "D 组合用于树形结构"
    ],
    "memory": "看到“根据已有对象快速创建新对象”，选原型",
    "quotes": [
      {
        "text": "在本章中，我们将要学习不根据类来生成实例，而是根据实例来生成新实例的 Prototype 模式。",
        "source": "06-Prototype模式.md 第35行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/06-Prototype模式.md",
    "lessonTitle": "06-Prototype模式.md"
  },
  {
    "id": "E2-MC-24",
    "source": "习题2选择题第24题",
    "category": "创建型设计模式",
    "pattern": "单例模式",
    "stem": "在( )时可使用单例模式。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "隔离菜单项对象的创建和使用"
      },
      {
        "key": "B",
        "text": "防止一个资源管理器窗口被实例化多次"
      },
      {
        "key": "C",
        "text": "使用一个已有的查找算法而不想修改既有代码"
      },
      {
        "key": "D",
        "text": "不能创建子类,需要扩展一个数据过滤类"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：什么时候用单例模式",
      "为什么选B：资源管理器窗口只允许有一个，防止被多次实例化，正是单例要解决的问题",
      "A 隔离对象的创建和使用是工厂模式",
      "C 使用已有算法又不想改代码是适配器模式",
      "D 不能创建子类又要扩展功能是装饰模式"
    ],
    "memory": "“只能有一个”“防止多次实例化”，选单例",
    "quotes": [
      {
        "text": "Singleton 角色中有一个返回唯一实例的 static 方法。该方法总是会返回同一个实例。",
        "source": "05-Singleton模式.md 第114行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/05-Singleton模式.md",
    "lessonTitle": "05-Singleton模式.md"
  },
  {
    "id": "E2-MC-25",
    "source": "习题2选择题第25题",
    "category": "创建型设计模式",
    "pattern": "单例模式",
    "stem": "以下关于单例模式的描述正确的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "它描述了只有一个方法的类的集合"
      },
      {
        "key": "B",
        "text": "它能够保证一个类只产生一个唯一的实例"
      },
      {
        "key": "C",
        "text": "它描述了只有一个属性的类的集合"
      },
      {
        "key": "D",
        "text": "它能够保证一个类的方法只能被一个唯一的类调用"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：单例模式的正确描述",
      "为什么选B：单例模式保证一个类只产生一个实例，并提供一个全局访问点",
      "A、C 把“单例”误解成“只有一个方法”或“只有一个属性”，单例限制的是对象个数",
      "D 限制的是“谁能调用方法”，和实例个数无关"
    ],
    "memory": "单例的“单”指实例只有一个，不是方法或属性只有一个",
    "quotes": [
      {
        "text": "像这样的确保只生成一个实例的模式被称作 Singleton 模式。",
        "source": "05-Singleton模式.md 第23行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/05-Singleton模式.md",
    "lessonTitle": "05-Singleton模式.md"
  },
  {
    "id": "E2-MC-26",
    "source": "习题2选择题第26题",
    "category": "创建型设计模式",
    "pattern": "单例模式",
    "stem": "( )限制了创建类的实例数量。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "原型模式"
      },
      {
        "key": "B",
        "text": "建造者模式"
      },
      {
        "key": "C",
        "text": "策略模式"
      },
      {
        "key": "D",
        "text": "单例模式"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：哪个模式限制了一个类能创建的实例数量",
      "为什么选D：单例模式把构造方法设成私有，只能通过它提供的静态方法拿到唯一实例，数量被限制为一个",
      "A 原型复制出更多对象，B 建造者负责组装对象，C 策略负责替换算法，都不限制数量"
    ],
    "memory": "限制实例数量的是单例",
    "quotes": [
      {
        "text": "Singleton 角色中有一个返回唯一实例的 static 方法。该方法总是会返回同一个实例。",
        "source": "05-Singleton模式.md 第114行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/05-Singleton模式.md",
    "lessonTitle": "05-Singleton模式.md"
  },
  {
    "id": "E2-MC-27",
    "source": "习题2选择题第27题",
    "category": "创建型设计模式",
    "pattern": "单例模式",
    "stem": "以下选项中，（）不是单例模式的要点。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "某个类只能有一个实例"
      },
      {
        "key": "B",
        "text": "单例类不能被继承"
      },
      {
        "key": "C",
        "text": "必须自行创建单个实例"
      },
      {
        "key": "D",
        "text": "必须自行向整个系统提供单个单例"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：哪一项不是单例模式的要点",
      "单例模式的三个要点：只有一个实例；自己创建这个实例；自己向整个系统提供这个实例",
      "为什么选B：“不能被继承”不在三个要点里，单例类有没有子类不影响“只有一个实例”这件事",
      "A、C、D 正好是三个要点"
    ],
    "memory": "单例三要点：一个实例、自己创建、自己提供",
    "quotes": [
      {
        "text": "像这样的确保只生成一个实例的模式被称作 Singleton 模式。",
        "source": "05-Singleton模式.md 第23行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/05-Singleton模式.md",
    "lessonTitle": "05-Singleton模式.md"
  },
  {
    "id": "E2-MC-28",
    "source": "习题2选择题第28题",
    "category": "创建型设计模式",
    "pattern": "简单工厂模式",
    "stem": "某软件公司开发了一组加密类,在使用这些加密类时要采用简单工厂模式进行设计,为了减少类的个数,将工厂类和抽象加密类合并,基本 UML 类图如图 7-3 所示。\n\n以下陈述错误的是( )。",
    "materials": [
      {
        "type": "image",
        "alt": "图7-3 选择题28用图",
        "src": "images/multiple-choice/p048-b07.png"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "在类图中, Cipher 类既充当抽象产品类, 又充当工厂类"
      },
      {
        "key": "B",
        "text": "工厂方法 createCipher() 的返回类型为 Cipher"
      },
      {
        "key": "C",
        "text": "工厂方法 createCipher() 应定义为静态方法"
      },
      {
        "key": "D",
        "text": "Cipher 类中的 encrypt() 方法必须为抽象方法"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：工厂类和抽象产品类合并成 Cipher 后，哪一句错",
      "看图：Cipher 既有 encrypt()，又有 createCipher(int args)，下面两个子类各自重写 encrypt()",
      "为什么选D：encrypt() 可以是抽象方法，也可以是有默认实现、让子类覆盖的普通方法，“必须为抽象方法”说得过死",
      "A 对：Cipher 既是产品的父类，又负责创建产品",
      "B 对：工厂方法返回抽象产品类型 Cipher，调用方才不依赖具体子类",
      "C 对：工厂方法设成静态，不用先有一个 Cipher 对象就能调用它造对象"
    ],
    "memory": "工厂和抽象产品合并时，工厂方法是静态的、返回父类型；产品方法是否抽象没有强制要求",
    "quotes": [
      {
        "text": "实际上，简单工厂模式还叫作静态工厂方法模式（Static Factory Method Pattern）。之所以叫静态工厂方法模式，是因为其中创建对象的方法是静态的。",
        "source": "197254.md 第389行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md",
    "lessonTitle": "04-FactoryMethod模式.md"
  },
  {
    "id": "E2-MC-29",
    "source": "习题2选择题第29题",
    "category": "创建型设计模式",
    "pattern": "抽象工厂模式",
    "stem": "( )设计模式提供了一个创建一系列相关或相互依赖对象的接口,而无须指定它们具体的类。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "Adapter(适配器)"
      },
      {
        "key": "B",
        "text": "Singleton(单例)"
      },
      {
        "key": "C",
        "text": "Abstract Factory(抽象工厂)"
      },
      {
        "key": "D",
        "text": "Template Method(模板方法)"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：哪个模式的定义是“创建一系列相关或相互依赖对象的接口，而无须指定具体类”",
      "为什么选C：关键词“一系列相关对象”就是产品族，这是抽象工厂的定义",
      "A 适配器转换接口，B 单例保证唯一实例，D 模板方法定义算法骨架，都不负责成套创建对象"
    ],
    "memory": "“一系列相关或相互依赖的对象”对应抽象工厂",
    "quotes": [
      {
        "text": "在 Abstract Factory 模式中将会出现抽象工厂，它会将抽象零件组装为抽象产品。也就是说，我们并不关心零件的具体实现，而是只关心接口（API）。",
        "source": "08-AbstractFactory模式.md 第25行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/08-AbstractFactory模式.md",
    "lessonTitle": "08-AbstractFactory模式.md"
  },
  {
    "id": "E2-MC-30",
    "source": "习题2选择题第30题",
    "category": "创建型设计模式",
    "pattern": "建造者模式",
    "stem": "( )设计模式将一个复杂对象的构建与它的表示分离,使同样的构建过程可以创建不同的表示。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "Builder(建造者)"
      },
      {
        "key": "B",
        "text": "Factory Method(工厂方法)"
      },
      {
        "key": "C",
        "text": "Prototype(原型)"
      },
      {
        "key": "D",
        "text": "Facade(外观)"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：哪个模式的定义是“复杂对象的构建与表示分离”",
      "为什么选A：构建指组装步骤，表示指最后的样子；同样的步骤换一个建造者就得到不同的结果，这是建造者模式的定义",
      "B 工厂方法让子类决定实例化哪个类，C 原型靠复制创建，D 外观给子系统一个统一入口"
    ],
    "memory": "“构建与表示分离”“同样的构建过程创建不同表示”对应建造者",
    "quotes": [
      {
        "text": "在本章中，我们将要学习用于组装具有复杂结构的实例的 Builder 模式。",
        "source": "07-Builder模式.md 第17行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/07-Builder模式.md",
    "lessonTitle": "07-Builder模式.md"
  },
  {
    "id": "E3-MC-01",
    "source": "习题3选择题第1题",
    "category": "结构型设计模式",
    "pattern": "代理模式",
    "stem": "某公司开发一个文档编辑器,该编辑器允许在文档中直接嵌入图形对象,但开销很大。用户在系统设计之初提出编辑器在打开文档时必须十分迅速,可以暂时通过一些符号来表示相应的图形。针对这种需求,公司可以采用( )避免同时创建这些图形对象。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "代理模式"
      },
      {
        "key": "B",
        "text": "外观模式"
      },
      {
        "key": "C",
        "text": "桥接模式"
      },
      {
        "key": "D",
        "text": "组合模式"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：打开文档要快，图形对象又很贵，用什么模式避免一开始就把图形全部创建出来",
      "关键条件：先用符号代替图形，真正需要时再创建",
      "为什么选A：代理模式里的虚拟代理先放一个轻量的“替身”，等用户真的要看图形时，替身才去创建真正的图形对象",
      "B 外观只是给子系统一个统一入口，C 桥接分离两个变化维度，D 组合处理树形结构，都不能“延迟创建”"
    ],
    "memory": "“先用占位符，用到时再创建”是虚拟代理",
    "quotes": [
      {
        "text": "Virtual Proxy 就是本章中学习的 Proxy 模式。只有当真正需要实例时，它才生成和初始化实例。",
        "source": "21-Proxy模式.md 第279行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/21-Proxy模式.md",
    "lessonTitle": "21-Proxy模式.md"
  },
  {
    "id": "E3-MC-02",
    "source": "习题3选择题第2题",
    "category": "结构型设计模式",
    "pattern": "组合模式",
    "stem": "下面的( )模式将对象组合成树形结构以表示“部分-整体”的层次结构,并使得用户对单个对象和组合对象的使用具有一致性。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "组合(Composite)"
      },
      {
        "key": "B",
        "text": "桥接(Bridge)"
      },
      {
        "key": "C",
        "text": "装饰(Decorator)"
      },
      {
        "key": "D",
        "text": "外观(Facade)"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：哪个模式把对象组成树形结构，表示“部分-整体”，并且单个对象和组合对象用法一样",
      "为什么选A：组合模式让叶子（单个对象）和容器（组合对象）继承同一个父类，客户端不用区分是哪一种",
      "B 桥接分离抽象和实现，C 装饰给对象加功能，D 外观简化子系统的使用，都不是树形结构"
    ],
    "memory": "“树形结构”“部分-整体”“一致对待单个和组合对象”就是组合模式",
    "quotes": [
      {
        "text": "能够使容器与内容具有一致性，创造出递归结构的模式就是 Composite 模式。",
        "source": "11-Composite模式.md 第21行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/11-Composite模式.md",
    "lessonTitle": "11-Composite模式.md"
  },
  {
    "id": "E3-MC-03",
    "source": "习题3选择题第3题",
    "category": "结构型设计模式",
    "pattern": "外观模式",
    "stem": "已知某子系统为外界提供功能服务,但该子系统中存在很多粒度十分小的类,不便被外界系统直接使用,采用( )设计模式可以定义一个高层接口,这个接口使得这一子系统更加容易使用。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "外观(Facade)"
      },
      {
        "key": "B",
        "text": "单例(Singleton)"
      },
      {
        "key": "C",
        "text": "参与者(Participant)"
      },
      {
        "key": "D",
        "text": "装饰(Decorator)"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：子系统里小类太多，外界不好直接用，用什么模式给它一个简单入口",
      "为什么选A：外观模式提供一个高层的“窗口”类，外界只调用这个窗口，窗口再去调用子系统里的各个小类",
      "B 单例限制实例数量，D 装饰给对象加功能，C 参与者不是 GoF 的设计模式"
    ],
    "memory": "“子系统太复杂，提供一个高层接口”就是外观模式",
    "quotes": [
      {
        "text": "使用 Facade 模式可以为互相关联在一起的错综复杂的类整理出高层接口（API）。其中的 Facade 角色可以让系统对外只有一个简单的接口（API）。",
        "source": "15-Facade模式.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/15-Facade模式.md",
    "lessonTitle": "15-Facade模式.md"
  },
  {
    "id": "E3-MC-04",
    "source": "习题3选择题第4题",
    "category": "结构型设计模式",
    "pattern": "装饰模式",
    "stem": "当不能采用生成子类的方法进行扩充时,可采用( )设计模式动态地给一个对象添加一些额外的职责。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "外观(Facade)"
      },
      {
        "key": "B",
        "text": "单例(Singleton)"
      },
      {
        "key": "C",
        "text": "参与者(Participant)"
      },
      {
        "key": "D",
        "text": "装饰(Decorator)"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：不能用继承扩展时，用什么模式动态地给对象加职责",
      "为什么选D：装饰模式用一个和原对象接口相同的“包装”对象把原对象包起来，在包装里加新功能，不需要生成子类，还能在运行时一层层叠加",
      "A 外观简化子系统，B 单例限制实例数量，C 参与者不是设计模式"
    ],
    "memory": "“不用继承，动态加职责”就是装饰模式",
    "quotes": [
      {
        "text": "像这样不断地为对象添加装饰的设计模式被称为 Decorator 模式。",
        "source": "12-Decorator模式.md 第25行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/12-Decorator模式.md",
    "lessonTitle": "12-Decorator模式.md"
  },
  {
    "id": "E3-MC-05",
    "source": "习题3选择题第5题",
    "category": "结构型设计模式",
    "pattern": "桥接模式",
    "stem": "(①) 设计模式将抽象部分与它的实现部分相分离, 使它们都可以独立地变化。图 8-1 为该设计模式的类图, 其中, (②) 用于定义实现部分的接口。",
    "materials": [
      {
        "type": "image",
        "alt": "图8-1 选择题5用图",
        "src": "images/multiple-choice/p068-b03.png"
      }
    ],
    "options": [],
    "answer": [
      "①B",
      "②D"
    ],
    "parts": [
      {
        "label": "①",
        "options": [
          {
            "key": "A",
            "text": "单例(Singleton)"
          },
          {
            "key": "B",
            "text": "桥接(Bridge)"
          },
          {
            "key": "C",
            "text": "组合(Composite)"
          },
          {
            "key": "D",
            "text": "外观(Facade)"
          }
        ],
        "answer": [
          "B"
        ],
        "sourceMissing": false
      },
      {
        "label": "②",
        "options": [
          {
            "key": "A",
            "text": "Abstraction"
          },
          {
            "key": "B",
            "text": "ConcreteImplementorA"
          },
          {
            "key": "C",
            "text": "ConcreteImplementorB"
          },
          {
            "key": "D",
            "text": "Implementor"
          }
        ],
        "answer": [
          "D"
        ],
        "sourceMissing": false
      }
    ],
    "explanation": [
      "题目在问：①哪个模式把抽象部分和实现部分分离，②类图里谁定义实现部分的接口",
      "①“抽象和实现分离，各自独立变化”是桥接模式的定义，选B",
      "②看类图右边：Implementor 带接口标记，声明了 operationImpl()，下面两个具体实现类实现它，所以定义实现接口的是 Implementor，选D",
      "Abstraction 是抽象部分的父类，它通过 impl 调用 Implementor；ConcreteImplementorA、B 是具体实现，不是接口"
    ],
    "memory": "桥接模式左边是抽象部分（Abstraction），右边是实现部分（Implementor），中间用关联连起来",
    "quotes": [
      {
        "text": "该角色位于“类的实现层次结构”的最上层。它定义了用于实现Abstraction角色的接口（API）的方法。",
        "source": "09-Bridge模式.md 第305行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/09-Bridge模式.md",
    "lessonTitle": "09-Bridge模式.md"
  },
  {
    "id": "E3-MC-06",
    "source": "习题3选择题第6题",
    "category": "结构型设计模式",
    "pattern": "单例模式",
    "stem": "(①)限制了创建类的实例数量,而(②)将一个类的接口转换成客户希望的另外一个接口,使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。",
    "materials": [],
    "options": [],
    "answer": [
      "①D",
      "②B"
    ],
    "parts": [
      {
        "label": "①",
        "options": [
          {
            "key": "A",
            "text": "命令(Command)模式"
          },
          {
            "key": "B",
            "text": "适配器(Adapter)模式"
          },
          {
            "key": "C",
            "text": "策略(Strategy)模式"
          },
          {
            "key": "D",
            "text": "单例(Singleton)模式"
          }
        ],
        "answer": [
          "D"
        ],
        "sourceMissing": false
      },
      {
        "label": "②",
        "options": [
          {
            "key": "A",
            "text": "命令(Command)模式"
          },
          {
            "key": "B",
            "text": "适配器(Adapter)模式"
          },
          {
            "key": "C",
            "text": "策略(Strategy)模式"
          },
          {
            "key": "D",
            "text": "单例(Singleton)模式"
          }
        ],
        "answer": [
          "B"
        ],
        "sourceMissing": false
      }
    ],
    "explanation": [
      "题目在问：①哪个模式限制实例数量，②哪个模式把一个接口转换成客户想要的接口",
      "①单例模式只允许一个实例，选D",
      "②适配器模式在两个不兼容的接口之间做转换，让它们能一起工作，选B",
      "命令模式把请求封装成对象，策略模式替换算法，都不符合这两句定义"
    ],
    "memory": "限制数量是单例；接口转换是适配器",
    "quotes": [
      {
        "text": "在程序世界中，经常会存在现有的程序无法直接使用，需要做适当的变换之后才能使用的情况。这种用于填补“现有的程序”和“所需的程序”之间差异的设计模式就是Adapter模式。",
        "source": "02-Adapter模式.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/05-Singleton模式.md",
    "lessonTitle": "05-Singleton模式.md"
  },
  {
    "id": "E3-MC-07",
    "source": "习题3选择题第7题",
    "category": "结构型设计模式",
    "pattern": "组合模式",
    "stem": "一个树形文件系统体现了( )模式。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "装饰(Decorator)"
      },
      {
        "key": "B",
        "text": "组合(Composite)"
      },
      {
        "key": "C",
        "text": "桥接(Bridge)"
      },
      {
        "key": "D",
        "text": "代理(Proxy)"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：树形文件系统体现了哪个模式",
      "文件夹里可以放文件，也可以放文件夹，层层嵌套成一棵树",
      "为什么选B：文件是叶子，文件夹是容器，两者都能被“打开”“统计大小”，这正是组合模式",
      "A 装饰、C 桥接、D 代理都不处理这种层层嵌套的结构"
    ],
    "memory": "文件和文件夹的树形结构是组合模式最常见的例子",
    "quotes": [
      {
        "text": "表示容器的角色。可以在其中放入 Leaf 角色和 Composite 角色。",
        "source": "11-Composite模式.md 第306行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/11-Composite模式.md",
    "lessonTitle": "11-Composite模式.md"
  },
  {
    "id": "E3-MC-08",
    "source": "习题3选择题第8题",
    "category": "结构型设计模式",
    "pattern": "享元模式",
    "stem": "当应用程序由于使用大量的对象,造成很大的存储开销时,可以采用( )设计模式运用共享技术来有效地支持大量细粒度对象的重用。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "外观(Facade)"
      },
      {
        "key": "B",
        "text": "组合(Composite)"
      },
      {
        "key": "C",
        "text": "享元(Flyweight)"
      },
      {
        "key": "D",
        "text": "适配器(Adapter)"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：大量对象造成存储开销太大时，用什么模式靠共享来节省",
      "为什么选C：享元模式把相同的部分做成共享对象，很多地方共用同一份，不再每处 new 一个",
      "A 外观、B 组合、D 适配器都不负责共享对象"
    ],
    "memory": "“共享技术”“大量细粒度对象”就是享元模式",
    "quotes": [
      {
        "text": "当需要某个实例时，并不总是通过 new 关键字来生成实例，而是尽量共用已经存在的实例。这就是 Flyweight 模式的核心内容。",
        "source": "20-Flyweight模式.md 第29行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/20-Flyweight模式.md",
    "lessonTitle": "20-Flyweight模式.md"
  },
  {
    "id": "E3-MC-09",
    "source": "习题3选择题第9题",
    "category": "结构型设计模式",
    "pattern": "适配器模式",
    "stem": "当想使用一个已经存在的类,但其接口不符合需求时,可以采用( )设计模式将该类的接口转换成我们希望的接口。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "命令(Command)"
      },
      {
        "key": "B",
        "text": "适配器(Adapter)"
      },
      {
        "key": "C",
        "text": "装饰(Decorator)"
      },
      {
        "key": "D",
        "text": "享元(Flyweight)"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：已有类能用，但接口不合要求，用什么模式把接口转换一下",
      "为什么选B：适配器模式在中间加一个适配器类，对外提供需要的接口，对内调用已有类的方法",
      "A 命令封装请求，C 装饰增加功能但不改变接口，D 享元共享对象"
    ],
    "memory": "“已有类的接口不符合需求”就是适配器",
    "quotes": [
      {
        "text": "使用 Adaptee 角色的方法来满足 Target 角色的需求，这是 Adapter 模式的目的，也是 Adapter 角色的作用。",
        "source": "02-Adapter模式.md 第213行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/02-Adapter模式.md",
    "lessonTitle": "02-Adapter模式.md"
  },
  {
    "id": "E3-MC-10",
    "source": "习题3选择题第10题",
    "category": "结构型设计模式",
    "pattern": "适配器模式",
    "stem": "以下关于适配器模式的叙述错误的是()。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "适配器模式将一个接口转换成客户希望的另一个接口,使得原本接口不兼容的那些类可以一起工作"
      },
      {
        "key": "B",
        "text": "在类适配器中,Adapter 和 Adaptee 是继承关系;而在对象适配器中,Adapter 和 Adaptee 是关联关系"
      },
      {
        "key": "C",
        "text": "类适配器比对象适配器更加灵活,在 Java、C# 等语言中可以通过类适配器一次适配多个适配者类"
      },
      {
        "key": "D",
        "text": "适配器可以在不修改原来的适配者接口 Adaptee 的情况下将一个类的接口和另一个类的接口匹配起来"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于适配器模式的错误说法",
      "两种适配器：类适配器靠继承适配者，对象适配器靠持有适配者对象",
      "为什么选C：Java、C# 一个类只能继承一个父类，类适配器一次只能适配一个适配者类",
      "对象适配器可以持有多个适配者对象，还能换成适配者的子类，所以更灵活的是对象适配器",
      "A、B、D 都对：转换接口，两种适配器的关系分别是继承和关联，不修改原有适配者"
    ],
    "memory": "Java 单继承，所以对象适配器比类适配器更灵活",
    "quotes": [
      {
        "text": "在类适配器模式中，Adapter 角色通过继承来使用 Adaptee 角色，而在对象适配器模式中，Adapter 角色通过委托来使用 Adaptee 角色。",
        "source": "02-Adapter模式.md 第227行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/02-Adapter模式.md",
    "lessonTitle": "02-Adapter模式.md"
  },
  {
    "id": "E3-MC-11",
    "source": "习题3选择题第11题",
    "category": "结构型设计模式",
    "pattern": "适配器模式",
    "stem": "现要开发一个文件转换软件, 将文件由一种格式转换为另一种格式, 如将 XML 文件转换为 PDF 文件, 将 DOC 文件转换为 TXT 文件, 有些文件格式转换代码已经存在。为了将已有的代码应用于新软件, 而不修改软件的整体结构, 可以使用( )设计模式进行系统设计。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "适配器(Adapter)"
      },
      {
        "key": "B",
        "text": "组合(Composite)"
      },
      {
        "key": "C",
        "text": "外观(Facade)"
      },
      {
        "key": "D",
        "text": "桥接(Bridge)"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：已有的格式转换代码要用到新软件里，又不改整体结构，用什么模式",
      "关键条件：代码已经存在，但和新软件的接口对不上",
      "为什么选A：为每段旧代码写一个适配器，让它对外表现成新软件要求的接口，旧代码和新结构都不用改",
      "B 组合处理树形结构，C 外观简化子系统入口，D 桥接分离两个变化维度"
    ],
    "memory": "“复用已有代码＋接口不一致＋不改结构”就是适配器",
    "quotes": [
      {
        "text": "在程序世界中，经常会存在现有的程序无法直接使用，需要做适当的变换之后才能使用的情况。这种用于填补“现有的程序”和“所需的程序”之间差异的设计模式就是Adapter模式。",
        "source": "02-Adapter模式.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/02-Adapter模式.md",
    "lessonTitle": "02-Adapter模式.md"
  },
  {
    "id": "E3-MC-12",
    "source": "习题3选择题第12题",
    "category": "结构型设计模式",
    "pattern": "适配器模式",
    "stem": "在对象适配器中,适配器类(Adapter)和适配者类(Adaptee)之间的关系为( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "关联关系"
      },
      {
        "key": "B",
        "text": "依赖关系"
      },
      {
        "key": "C",
        "text": "继承关系"
      },
      {
        "key": "D",
        "text": "实现关系"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：对象适配器里，适配器类和适配者类是什么关系",
      "为什么选A：对象适配器在类里保存一个适配者对象作为成员变量，需要时调用它的方法，这是关联关系",
      "C 继承关系是类适配器的做法",
      "B 依赖只是临时使用，D 实现关系用于实现接口，都不是对象适配器的结构"
    ],
    "memory": "类适配器用继承，对象适配器用关联",
    "quotes": [
      {
        "text": "在类适配器模式中，Adapter 角色通过继承来使用 Adaptee 角色，而在对象适配器模式中，Adapter 角色通过委托来使用 Adaptee 角色。",
        "source": "02-Adapter模式.md 第227行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/02-Adapter模式.md",
    "lessonTitle": "02-Adapter模式.md"
  },
  {
    "id": "E3-MC-13",
    "source": "习题3选择题第13题",
    "category": "结构型设计模式",
    "pattern": "适配器模式",
    "stem": "( )是适配器模式的应用实例。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "操作系统中的树形目录结构"
      },
      {
        "key": "B",
        "text": "Windows 中的应用程序快捷方式"
      },
      {
        "key": "C",
        "text": "Java 事件处理中的监听器接口"
      },
      {
        "key": "D",
        "text": "JDBC 中的数据库驱动程序"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：哪一个是适配器模式的实例",
      "为什么选D：JDBC 规定了统一的数据库接口，各数据库厂商的驱动把自己数据库的原生接口转换成 JDBC 接口，驱动就是适配器",
      "A 树形目录结构是组合模式",
      "B 快捷方式代表真正的程序去打开它，是代理模式",
      "C 监听器接口等待事件通知，是观察者模式"
    ],
    "memory": "JDBC 驱动把各家数据库的接口转成统一接口，是适配器",
    "quotes": [
      {
        "text": "在程序世界中，经常会存在现有的程序无法直接使用，需要做适当的变换之后才能使用的情况。这种用于填补“现有的程序”和“所需的程序”之间差异的设计模式就是Adapter模式。",
        "source": "02-Adapter模式.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/02-Adapter模式.md",
    "lessonTitle": "02-Adapter模式.md"
  },
  {
    "id": "E3-MC-14",
    "source": "习题3选择题第14题",
    "category": "结构型设计模式",
    "pattern": "桥接模式",
    "stem": "以下陈述不属于桥接模式优点的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "分离接口及其实现部分, 可以独立地扩展抽象和实现"
      },
      {
        "key": "B",
        "text": "可以使原本由于接口不兼容而不能一起工作的那些类一起工作"
      },
      {
        "key": "C",
        "text": "可以取代多继承方案, 比多继承方案扩展性更好"
      },
      {
        "key": "D",
        "text": "符合开闭原则, 增加新的细化抽象和具体实现都很方便"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：哪一项不是桥接模式的优点",
      "为什么选B：让接口不兼容的类一起工作是适配器模式的作用，桥接模式解决的是两个维度独立变化",
      "A、C、D 都是桥接的优点：抽象和实现分开扩展，用组合代替多层继承，加新的抽象或新的实现都不用改旧代码"
    ],
    "memory": "接口不兼容找适配器；两个维度独立变化找桥接",
    "quotes": [
      {
        "text": "Adapter 模式用于连接接口（API）不同的类，而 Bridge 模式则用于连接类的功能层次结构与实现层次结构。",
        "source": "02-Adapter模式.md 第267行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/09-Bridge模式.md",
    "lessonTitle": "09-Bridge模式.md"
  },
  {
    "id": "E3-MC-15",
    "source": "习题3选择题第15题",
    "category": "结构型设计模式",
    "pattern": "桥接模式",
    "stem": "以下关于桥接模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "桥接模式的用意是将抽象化与实现化脱耦,使得二者可以独立地变化"
      },
      {
        "key": "B",
        "text": "桥接模式将继承关系转换成关联关系,从而降低系统的耦合度"
      },
      {
        "key": "C",
        "text": "桥接模式可以动态地给一个对象增加功能,这些功能也可以动态地撤销"
      },
      {
        "key": "D",
        "text": "桥接模式可以从接口中分离实现功能,使得设计更具扩展性"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于桥接模式的错误说法",
      "为什么选C：动态给对象加功能、还能动态撤销，是装饰模式的特点，不是桥接模式",
      "A、B、D 都是桥接模式：抽象和实现脱耦，用关联代替继承，从接口中分离出实现"
    ],
    "memory": "“动态增加、动态撤销功能”是装饰模式的标签",
    "quotes": [
      {
        "text": "使用 Bridge 模式可以达到类的功能层次结构与类的实现层次结构分离的目的，并在此基础上使这些层次结构结合起来。",
        "source": "09-Bridge模式.md 第365行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/09-Bridge模式.md",
    "lessonTitle": "09-Bridge模式.md"
  },
  {
    "id": "E3-MC-16",
    "source": "习题3选择题第16题",
    "category": "结构型设计模式",
    "pattern": "桥接模式",
    "stem": "( )不是桥接模式所适用的场景。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "一个可以跨平台并支持多种格式的文件编辑器"
      },
      {
        "key": "B",
        "text": "一个支持多数据源的报表生成工具, 可以以不同图形方式显示报表信息"
      },
      {
        "key": "C",
        "text": "一个可动态选择排序算法的数据操作工具"
      },
      {
        "key": "D",
        "text": "一个支持多种编程语言的跨平台开发工具"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：哪个场景不适合用桥接模式",
      "桥接模式适合“两个维度各自变化”的场景",
      "A 平台 × 文件格式，B 数据源 × 图形显示方式，D 编程语言 × 平台，都有两个独立维度",
      "为什么选C：动态选择排序算法只有“算法”一个变化维度，用策略模式就够了"
    ],
    "memory": "两个维度用桥接，一个维度里换算法用策略",
    "quotes": [
      {
        "text": "因此，我们需要将“类的功能层次结构”与“类的实现层次结构”分离为两个独立的类层次结构。",
        "source": "09-Bridge模式.md 第93行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/09-Bridge模式.md",
    "lessonTitle": "09-Bridge模式.md"
  },
  {
    "id": "E3-MC-17",
    "source": "习题3选择题第17题",
    "category": "结构型设计模式",
    "pattern": "组合模式",
    "stem": "以下关于组合模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "组合模式对叶子对象和组合对象的使用具有一致性"
      },
      {
        "key": "B",
        "text": "组合模式可以通过类型系统来对容器中的构件实施约束,可以很方便地保证在一个容器中只能有某些特定的构件"
      },
      {
        "key": "C",
        "text": "组合模式将对象组织到树形结构中,可以用来描述整体与部分的关系"
      },
      {
        "key": "D",
        "text": "组合模式使得可以很方便地在组合体中加入新的对象构件,客户端不需要因为加入新的对象构件而更改代码"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于组合模式的错误说法",
      "为什么选B：组合模式让所有构件都继承同一个 Component，容器里放的类型都是 Component",
      "所以编译器分不出某个容器里该放哪种构件，想限制“只能放某些构件”，只能在运行时自己检查类型，很不方便",
      "B 把这个缺点说成了优点",
      "A、C、D 都对：叶子和容器用法一致，表示部分-整体，新加构件不用改客户端"
    ],
    "memory": "组合模式的缺点：很难限制容器里只能放哪些构件",
    "quotes": [
      {
        "text": "Composite 模式通过 Component 角色使容器（Composite 角色）和内容（Leaf 角色）具有一致性。",
        "source": "11-Composite模式.md 第382行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/11-Composite模式.md",
    "lessonTitle": "11-Composite模式.md"
  },
  {
    "id": "E3-MC-18",
    "source": "习题3选择题第18题",
    "category": "结构型设计模式",
    "pattern": "组合模式",
    "stem": "图 8-2 是( )模式的结构图。",
    "materials": [
      {
        "type": "image",
        "alt": "图8-2 选择题18用图",
        "src": "images/multiple-choice/p070-b03.png"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "模板方法"
      },
      {
        "key": "B",
        "text": "命令"
      },
      {
        "key": "C",
        "text": "单例"
      },
      {
        "key": "D",
        "text": "组合"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：结构图是哪个模式",
      "看图：Component 有 operation、add、remove、getChild；Leaf 和 Composite 都继承它；Composite 用 children 聚合指回 Component",
      "为什么选D：容器里装的是父类 Component，于是容器里还能再装容器，形成树，这是组合模式的标志",
      "模板方法、命令、单例的结构里都没有“容器指回父类”的聚合"
    ],
    "memory": "看到 Leaf、Composite 和一条从 Composite 指回 Component 的 children 聚合，就是组合模式",
    "quotes": [
      {
        "text": "使 Leaf 角色和 Composite 角色具有一致性的角色。Composite 角色是 Leaf 角色和 Composite 角色的父类。",
        "source": "11-Composite模式.md 第310行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/11-Composite模式.md",
    "lessonTitle": "11-Composite模式.md"
  },
  {
    "id": "E3-MC-19",
    "source": "习题3选择题第19题",
    "category": "结构型设计模式",
    "pattern": "组合模式",
    "stem": "现要开发一个 XML 文档处理软件,可以根据关键字查询指定内容,用户可以在 XML 中任意选取某一节点为查询的初始节点,无须关心该节点所处的层次结构。针对该\n\n需求,可以使用( )模式来进行设计。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "抽象工厂(Abstract Factory)"
      },
      {
        "key": "B",
        "text": "享元(Flyweight)"
      },
      {
        "key": "C",
        "text": "组合(Composite)"
      },
      {
        "key": "D",
        "text": "策略(Strategy)"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：XML 文档任选一个节点开始查询，用什么模式",
      "XML 文档本身是一棵节点树，节点下面还有节点",
      "关键条件：任选一个节点作为起点，不用关心它在第几层",
      "为什么选C：组合模式让每个节点都有相同的查询方法，从哪个节点开始都能递归往下查",
      "A 抽象工厂创建产品族，B 享元共享对象，D 策略替换算法，都不处理树形结构"
    ],
    "memory": "数据是树，又要“一视同仁”地处理任意节点，就选组合模式",
    "quotes": [
      {
        "text": "能够使容器与内容具有一致性，创造出递归结构的模式就是 Composite 模式。",
        "source": "11-Composite模式.md 第21行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/11-Composite模式.md",
    "lessonTitle": "11-Composite模式.md"
  },
  {
    "id": "E3-MC-20",
    "source": "习题3选择题第20题",
    "category": "结构型设计模式",
    "pattern": "外观模式",
    "stem": "某公司要开发一个图形控件库,要求可以在该图形控件库中方便地增加新的控件,而且可以动态地改变控件的外观或给控件增加新的行为,如可以为控件增加复杂的立体边框、增加控件的鼠标拖曳行为等。针对上述需求,使用( )模式进行设计最合适。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "适配器(Adapter)"
      },
      {
        "key": "B",
        "text": "装饰(Decorator)"
      },
      {
        "key": "C",
        "text": "外观(Facade)"
      },
      {
        "key": "D",
        "text": "命令(Command)"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：图形控件库要能动态改外观、动态加行为，用什么模式",
      "关键条件：给控件加立体边框、加拖曳行为，而且是动态加",
      "为什么选B：装饰模式用装饰器把控件包起来，每个装饰器加一种边框或行为，可以随意叠加和组合",
      "A 适配器转换接口，C 外观简化子系统，D 命令封装请求，都不能给控件一层层加功能"
    ],
    "memory": "“动态加边框、加行为”就是装饰模式",
    "quotes": [
      {
        "text": "Decorator 模式可以像改变被装饰物的边框或是为被装饰物添加多重边框那样，来增加类的功能。",
        "source": "12-Decorator模式.md 第421行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/15-Facade模式.md",
    "lessonTitle": "15-Facade模式.md"
  },
  {
    "id": "E3-MC-21",
    "source": "习题3选择题第21题",
    "category": "结构型设计模式",
    "pattern": "装饰模式",
    "stem": "以下选项中，( )不是装饰模式的适用条件。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "要扩展一个类的功能或给一个类增加附加责任"
      },
      {
        "key": "B",
        "text": "要动态地给一个对象增加功能,这些功能还可以动态撤销"
      },
      {
        "key": "C",
        "text": "要动态组合多于一个的抽象化角色和实现化角色"
      },
      {
        "key": "D",
        "text": "要通过一些基本功能的组合产生复杂功能,而不使用继承关系"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：哪一项不是装饰模式的适用条件",
      "为什么选C：“动态组合多个抽象化角色和实现化角色”说的是桥接模式，抽象化、实现化是桥接模式的两个角色名",
      "A、B、D 都是装饰模式的用途：扩展功能，动态添加和撤销，用组合代替继承得到复杂功能"
    ],
    "memory": "题目里出现“抽象化角色＋实现化角色”就是桥接模式",
    "quotes": [
      {
        "text": "像这样不断地为对象添加装饰的设计模式被称为 Decorator 模式。",
        "source": "12-Decorator模式.md 第25行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/12-Decorator模式.md",
    "lessonTitle": "12-Decorator模式.md"
  },
  {
    "id": "E3-MC-22",
    "source": "习题3选择题第22题",
    "category": "结构型设计模式",
    "pattern": "装饰模式",
    "stem": "Java IO 库的设计使用了装饰模式,局部类图如图 8-3 所示,在该类图中,类(①)充当具体构件 ConcreteComponent,类(②)充当抽象装饰器 Decorator,类(③)充当具体装饰器 ConcreteDecorator。",
    "materials": [
      {
        "type": "image",
        "alt": "图8-3 选择题22用图",
        "src": "images/multiple-choice/p071-b04.png"
      }
    ],
    "options": [],
    "answer": [
      "①B",
      "②C",
      "③D"
    ],
    "parts": [
      {
        "label": "①",
        "options": [
          {
            "key": "A",
            "text": "OutputStream"
          },
          {
            "key": "B",
            "text": "FileOutputStream"
          },
          {
            "key": "C",
            "text": "FilterOutputStream"
          },
          {
            "key": "D",
            "text": "BufferedOutputStream"
          }
        ],
        "answer": [
          "B"
        ],
        "sourceMissing": false
      },
      {
        "label": "②",
        "options": [
          {
            "key": "A",
            "text": "OutputStream"
          },
          {
            "key": "B",
            "text": "FileOutputStream"
          },
          {
            "key": "C",
            "text": "FilterOutputStream"
          },
          {
            "key": "D",
            "text": "BufferedOutputStream"
          }
        ],
        "answer": [
          "C"
        ],
        "sourceMissing": false
      },
      {
        "label": "③",
        "options": [
          {
            "key": "A",
            "text": "OutputStream"
          },
          {
            "key": "B",
            "text": "FileOutputStream"
          },
          {
            "key": "C",
            "text": "FilterOutputStream"
          },
          {
            "key": "D",
            "text": "BufferedOutputStream"
          }
        ],
        "answer": [
          "D"
        ],
        "sourceMissing": false
      }
    ],
    "explanation": [
      "题目在问：Java IO 的局部类图里，谁是具体构件、抽象装饰器、具体装饰器",
      "OutputStream 是最上层的抽象构件",
      "①具体构件是真正干活的被装饰对象，FileOutputStream 直接继承 OutputStream，负责写文件，选B",
      "②抽象装饰器既继承 OutputStream，又持有一个 OutputStream 成员 out，FilterOutputStream 正是这样，选C",
      "③具体装饰器继承抽象装饰器并增加功能，BufferedOutputStream 增加了缓冲，选D"
    ],
    "memory": "装饰器的标志是“既继承父类，又持有一个父类对象”；它的子类是具体装饰器",
    "quotes": [
      {
        "text": "该角色具有与 Component 角色相同的接口（API）。在它内部保存了被装饰对象——Component 角色。",
        "source": "12-Decorator模式.md 第305行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/12-Decorator模式.md",
    "lessonTitle": "12-Decorator模式.md"
  },
  {
    "id": "E3-MC-23",
    "source": "习题3选择题第23题",
    "category": "结构型设计模式",
    "pattern": "外观模式",
    "stem": "图 8-4 是( )模式的类图。",
    "materials": [
      {
        "type": "image",
        "alt": "图8-4 选择题23用图",
        "src": "images/multiple-choice/p071-b06.png"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "桥接(Bridge)"
      },
      {
        "key": "B",
        "text": "工厂方法(Factory Method)"
      },
      {
        "key": "C",
        "text": "模板方法(Template Method)"
      },
      {
        "key": "D",
        "text": "外观(Facade)"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：图里是哪个模式的类图",
      "看图：只有 MainFrame 一个类，用箭头分别指向 SubSystemA 和 SubSystemB",
      "为什么选D：一个类站在前面，替外界去调用多个子系统，这就是外观模式的“窗口”",
      "A 桥接要有抽象和实现两套继承树，B 工厂方法要有创建者和产品两套继承树，C 模板方法要有父类和子类，图里都没有继承"
    ],
    "memory": "一个类指向多个子系统、图里没有继承，就是外观模式",
    "quotes": [
      {
        "text": "Facade 角色是代表构成系统的许多其他角色的“简单窗口”。Facade 角色向系统外部提供高层接口（API）。",
        "source": "15-Facade模式.md 第235行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/15-Facade模式.md",
    "lessonTitle": "15-Facade模式.md"
  },
  {
    "id": "E3-MC-24",
    "source": "习题3选择题第24题",
    "category": "结构型设计模式",
    "pattern": "外观模式",
    "stem": "以下关于外观模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "外观模式中一个子系统的外部与其内部的通信可以通过一个统一的外观对象进行"
      },
      {
        "key": "B",
        "text": "在增加外观对象之后, 客户类只需要直接和外观对象交互即可, 子系统类间的复杂关系由外观类来实现, 降低了系统的耦合度"
      },
      {
        "key": "C",
        "text": "外观模式可以很好地限制客户使用子系统类, 对客户访问子系统类进行限制可以提高系统的灵活性"
      },
      {
        "key": "D",
        "text": "如果一个系统有多个子系统的话, 可以提供多个外观类"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于外观模式的错误说法",
      "为什么选C：外观只是多提供一个方便的入口，并不禁止客户绕过外观直接使用子系统类",
      "所以外观模式“不能很好地限制”客户使用子系统，C 说它“可以很好地限制”是错的",
      "而且限制得越多，客户能做的事越少，灵活性反而下降，C 的后半句也说反了",
      "A、B、D 都对：内外通信经过外观，客户只和外观打交道，多个子系统可以有多个外观"
    ],
    "memory": "外观是“方便入口”，不是“访问限制”",
    "quotes": [
      {
        "text": "这些角色各自完成自己的工作，它们并不知道 Facade 角色。",
        "source": "15-Facade模式.md 第239行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/15-Facade模式.md",
    "lessonTitle": "15-Facade模式.md"
  },
  {
    "id": "E3-MC-25",
    "source": "习题3选择题第25题",
    "category": "结构型设计模式",
    "pattern": "享元模式",
    "stem": "在享元模式中,外部状态是指( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "享元对象可共享的所有状态"
      },
      {
        "key": "B",
        "text": "享元对象可共享的部分状态"
      },
      {
        "key": "C",
        "text": "由享元对象自己保存和维护的状态"
      },
      {
        "key": "D",
        "text": "由客户端保存和维护的状态"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：享元模式里的外部状态是什么",
      "享元把对象的信息分两类：内部状态放在享元对象里，大家共享；外部状态会随使用场合变化，不能共享",
      "为什么选D：外部状态不能存在共享对象里，只能由客户端保存，使用时再传给享元对象",
      "A、B 说的“可共享状态”是内部状态",
      "C 由享元对象自己保存的也是内部状态"
    ],
    "memory": "内部状态共享、存在享元里；外部状态不共享、由客户端保存",
    "quotes": [
      {
        "text": "另一方面，不应当共享的信息被称作 Extrinsic 信息。",
        "source": "20-Flyweight模式.md 第302行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/20-Flyweight模式.md",
    "lessonTitle": "20-Flyweight模式.md"
  },
  {
    "id": "E3-MC-26",
    "source": "习题3选择题第26题",
    "category": "结构型设计模式",
    "pattern": "享元模式",
    "stem": "以下关于享元模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "享元模式运用共享技术有效地支持大量细粒度对象的复用"
      },
      {
        "key": "B",
        "text": "在享元模式中可以多次使用某个对象,通过引入外部状态使得这些对象可以有所差异"
      },
      {
        "key": "C",
        "text": "享元对象能够做到共享的关键是引入了享元池,在享元池中通过克隆的方法向客户端返回所需对象"
      },
      {
        "key": "D",
        "text": "在享元模式中,外部状态是随环境改变而改变、不可以共享的状态,而内部状态是不随环境改变而改变、可以共享的状态"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于享元模式的错误说法",
      "为什么选C：享元池返回的是池子里那个已经存在的对象本身",
      "如果每次都克隆一份再返回，就又产生了新对象，共享就没有了",
      "A、B、D 都对：共享大量细粒度对象，靠外部状态区分差异，外部状态随环境变化，内部状态不变"
    ],
    "memory": "享元池“直接给同一个对象”，不是“复制一个新对象”",
    "quotes": [
      {
        "text": "FlyweightFactory 角色是生成 Flyweight 角色的工厂。在工厂中生成 Flyweight 角色可以实现共享实例。",
        "source": "20-Flyweight模式.md 第268行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/20-Flyweight模式.md",
    "lessonTitle": "20-Flyweight模式.md"
  },
  {
    "id": "E3-MC-27",
    "source": "习题3选择题第27题",
    "category": "结构型设计模式",
    "pattern": "享元模式",
    "stem": "为了节约系统资源,提高程序的运行效率,某系统在实现数据库连接池时可以使用( )设计模式。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "外观(Facade)"
      },
      {
        "key": "B",
        "text": "原型(Prototype)"
      },
      {
        "key": "C",
        "text": "代理(Proxy)"
      },
      {
        "key": "D",
        "text": "享元(Flyweight)"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：实现数据库连接池用什么模式",
      "连接池先建好一批连接，谁要用就借出去，用完还回来给别人用",
      "为什么选D：这正是享元模式的共享思想，少量连接对象被反复复用，节省创建连接的开销",
      "B 原型是复制出新对象，不是共享",
      "C 代理控制访问，A 外观简化接口，都不是为了复用对象"
    ],
    "memory": "各种“池”（连接池、线程池、字符串常量池）都体现享元",
    "quotes": [
      {
        "text": "如果生成实例的处理需要花费较长时间，那么使用 Flyweight 模式可以提高程序的处理速度。",
        "source": "20-Flyweight模式.md 第340行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/20-Flyweight模式.md",
    "lessonTitle": "20-Flyweight模式.md"
  },
  {
    "id": "E3-MC-28",
    "source": "习题3选择题第28题",
    "category": "结构型设计模式",
    "pattern": "代理模式",
    "stem": "毕业生通过职业介绍所找工作,该过程蕴含了( )模式。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "外观(Facade)"
      },
      {
        "key": "B",
        "text": "命令(Command)"
      },
      {
        "key": "C",
        "text": "代理(Proxy)"
      },
      {
        "key": "D",
        "text": "桥接(Bridge)"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：毕业生通过职业介绍所找工作，体现哪个模式",
      "为什么选C：职业介绍所替毕业生和用人单位联系，毕业生不直接接触单位，介绍所就是代理",
      "A 外观是给复杂子系统一个统一入口，B 命令是把请求封装成对象，D 桥接是分离两个变化维度"
    ],
    "memory": "生活中的“中介”“代办”“经纪人”多半是代理模式",
    "quotes": [
      {
        "text": "当不一定需要本人亲自进行工作时，就可以寻找代理人去完成工作。",
        "source": "21-Proxy模式.md 第15行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/21-Proxy模式.md",
    "lessonTitle": "21-Proxy模式.md"
  },
  {
    "id": "E3-MC-29",
    "source": "习题3选择题第29题",
    "category": "结构型设计模式",
    "pattern": "代理模式",
    "stem": "代理模式有多种类型,其中智能引用代理是指( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "为某一个目标操作的结果提供临时的存储空间,以便多个客户端可以共享这些结果"
      },
      {
        "key": "B",
        "text": "保护目标不让恶意用户接近"
      },
      {
        "key": "C",
        "text": "使几个用户能够同时使用一个对象而没有冲突"
      },
      {
        "key": "D",
        "text": "当一个对象被引用时,提供一些额外的操作,如将此对象被调用的次数记录下来"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：智能引用代理是什么",
      "为什么选D：智能引用代理在对象被引用时顺手做些额外的事，比如记录被调用了几次",
      "A 存临时结果给多个客户共享是缓冲代理",
      "B 防止恶意用户访问是保护代理",
      "C 让多个用户同时使用一个对象不冲突是同步代理"
    ],
    "memory": "智能引用＝调用时附加额外操作（计数、日志）",
    "quotes": [
      {
        "text": "当不一定需要本人亲自进行工作时，就可以寻找代理人去完成工作。",
        "source": "21-Proxy模式.md 第15行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/21-Proxy模式.md",
    "lessonTitle": "21-Proxy模式.md"
  },
  {
    "id": "E3-MC-30",
    "source": "习题3选择题第30题",
    "category": "结构型设计模式",
    "pattern": "代理模式",
    "stem": "以下关于代理模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "代理模式能够协调调用者和被调用者,从而在一定程度上降低系统的耦合度"
      },
      {
        "key": "B",
        "text": "控制对一个对象的访问,给不同的用户提供不同级别的使用权限时可以考虑使用远程代理"
      },
      {
        "key": "C",
        "text": "代理模式的缺点是请求的处理速度会变慢,并且实现代理模式需要额外的工作"
      },
      {
        "key": "D",
        "text": "代理模式给某一个对象提供一个代理,并由代理对象控制对原对象的引用"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于代理模式的错误说法",
      "为什么选B：给不同用户不同权限，用的是保护代理",
      "远程代理是让客户调用另一台机器上的对象时，像调用本地对象一样",
      "A、C、D 都对：代理降低耦合，代价是多一层转发变慢，代理控制对原对象的访问"
    ],
    "memory": "权限控制是保护代理；访问远程对象是远程代理",
    "quotes": [
      {
        "text": "Access Proxy 用于在调用 RealSubject 角色的功能时设置访问限制。",
        "source": "21-Proxy模式.md 第287行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/21-Proxy模式.md",
    "lessonTitle": "21-Proxy模式.md"
  },
  {
    "id": "E4-MC-01",
    "source": "习题4选择题第1题",
    "category": "行为型设计模式",
    "pattern": "职责链模式",
    "stem": "图 9-1 描述了一种设计模式,该设计模式不可以( )。",
    "materials": [
      {
        "type": "image",
        "alt": "图9-1 选择题1用图",
        "src": "images/multiple-choice/p097-b06.png"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "动态决定由一组对象中某个对象处理该请求"
      },
      {
        "key": "B",
        "text": "动态指定处理一个请求的对象集合，并高效率地处理一个请求"
      },
      {
        "key": "C",
        "text": "使多个对象都有机会处理请求，避免请求的发送者和接收者之间的耦合关系"
      },
      {
        "key": "D",
        "text": "将对象连成一条链，并沿着该链传递请求"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：图中模式“不能”做到哪件事",
      "看图：Handler 有一个指向自己的 successor（后继者），具体处理者连成一条链，这是职责链模式",
      "为什么选B：请求要沿着链一个个往下传，直到有人处理，链越长越慢，所以“高效率地处理”做不到",
      "A、C、D 都是职责链能做的：运行时决定谁处理，发送者和接收者解耦，对象连成链传递请求"
    ],
    "memory": "职责链换来了灵活和解耦，代价是请求传递变慢",
    "quotes": [
      {
        "text": "确实如此，与“事先确定哪个对象负责什么样的处理，当接收到请求时，立即让相应的对象去处理请求”相比，使用 Chain of Responsibility 模式确实导致处理请求发生了延迟。",
        "source": "14-ChainofResponsibility模式.md 第313行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/14-ChainofResponsibility模式.md",
    "lessonTitle": "14-ChainofResponsibility模式.md"
  },
  {
    "id": "E4-MC-02",
    "source": "习题4选择题第2题",
    "category": "行为型设计模式",
    "pattern": "职责链模式",
    "stem": "接力赛跑体现了( )设计模式。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "职责链(Chain of Responsibility)"
      },
      {
        "key": "B",
        "text": "命令(Command)"
      },
      {
        "key": "C",
        "text": "备忘录(Memento)"
      },
      {
        "key": "D",
        "text": "工厂方法(Factory Method)"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：接力赛跑体现了哪个模式",
      "为什么选A：接力棒从第一棒传给下一棒，每个人跑完自己那段就交给后面的人，就像请求沿着链一个个传下去",
      "B 命令是把请求封装成对象，C 备忘录是保存和恢复状态，D 工厂方法是创建对象，都没有“依次传递”"
    ],
    "memory": "“一个接一个往下传”的场景想到职责链",
    "quotes": [
      {
        "text": "Handler 角色定义了处理请求的接口（API）。Handler 角色知道“下一个处理者”是谁",
        "source": "14-ChainofResponsibility模式.md 第265行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/14-ChainofResponsibility模式.md",
    "lessonTitle": "14-ChainofResponsibility模式.md"
  },
  {
    "id": "E4-MC-03",
    "source": "习题4选择题第3题",
    "category": "行为型设计模式",
    "pattern": "命令模式",
    "stem": "以下关于命令模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "命令模式将一个请求封装为一个对象,从而使我们可用不同的请求对客户进行参数化"
      },
      {
        "key": "B",
        "text": "命令模式可以将请求发送者和请求接收者解耦"
      },
      {
        "key": "C",
        "text": "使用命令模式会导致某些系统中有过多的具体命令类,也会导致有些系统中命令模式变得不切实际"
      },
      {
        "key": "D",
        "text": "命令模式是对命令的封装,命令模式把发出命令的责任和执行命令的责任集中在同一个类中,委派给统一的类来进行处理"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于命令模式的错误说法",
      "命令模式的三方：调用者负责发出命令，命令对象负责转达，接收者负责真正执行",
      "为什么选D：命令模式恰恰是把“发出命令”和“执行命令”分到不同对象里，D 说成集中在同一个类中，正好说反",
      "A、B、C 都对：请求封装成对象，发送者和接收者解耦，缺点是具体命令类可能很多"
    ],
    "memory": "命令模式的目的是把“谁发命令”和“谁执行”分开",
    "quotes": [
      {
        "text": "Receiver 角色是 Command 角色执行命令时的对象，也可以称其为命令接收者。",
        "source": "22-Command模式.md 第363行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/22-Command模式.md",
    "lessonTitle": "22-Command模式.md"
  },
  {
    "id": "E4-MC-04",
    "source": "习题4选择题第4题",
    "category": "行为型设计模式",
    "pattern": "命令模式",
    "stem": "在( )时无须使用命令模式。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "实现撤销(Undo)操作和恢复(Redo)操作"
      },
      {
        "key": "B",
        "text": "将请求的发送者和接收者解耦"
      },
      {
        "key": "C",
        "text": "不改变聚合类的前提下定义作用于聚合中元素的新操作"
      },
      {
        "key": "D",
        "text": "不同的时间指定请求,并将请求排队"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：哪种情况不需要用命令模式",
      "为什么选C：“不改变聚合类，定义作用于其中元素的新操作”是访问者模式的用途",
      "A 撤销和恢复、B 发送者和接收者解耦、D 把请求排队和延后执行，都是命令模式的典型用途",
      "它们都依赖“请求变成了对象”这一点：对象能被保存、排队、撤销"
    ],
    "memory": "命令模式管撤销、排队、解耦；“不改元素类加新操作”是访问者",
    "quotes": [
      {
        "text": "要想管理工作的历史记录，只需管理这些实例的集合即可，而且还可以随时再次执行过去的命令，或是将多个过去的命令整合为一个新命令并执行。",
        "source": "22-Command模式.md 第15行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/22-Command模式.md",
    "lessonTitle": "22-Command模式.md"
  },
  {
    "id": "E4-MC-05",
    "source": "习题4选择题第5题",
    "category": "行为型设计模式",
    "pattern": "命令模式",
    "stem": "某计算器使用命令模式设计, 其类图如图 9-2 所示, 在该类图中, (①) 充当请求调用者, (②) 充当请求接收者。",
    "materials": [
      {
        "type": "image",
        "alt": "图9-2 选择题5用图",
        "src": "images/multiple-choice/p098-b06.png"
      }
    ],
    "options": [],
    "answer": [
      "①A",
      "②D"
    ],
    "parts": [
      {
        "label": "①",
        "options": [
          {
            "key": "A",
            "text": "Calculator"
          },
          {
            "key": "B",
            "text": "Command"
          },
          {
            "key": "C",
            "text": "AddCommand"
          },
          {
            "key": "D",
            "text": "AddOperator"
          }
        ],
        "answer": [
          "A"
        ],
        "sourceMissing": false
      },
      {
        "label": "②",
        "options": [
          {
            "key": "A",
            "text": "Calculator"
          },
          {
            "key": "B",
            "text": "Command"
          },
          {
            "key": "C",
            "text": "AddCommand"
          },
          {
            "key": "D",
            "text": "AddOperator"
          }
        ],
        "answer": [
          "D"
        ],
        "sourceMissing": false
      }
    ],
    "explanation": [
      "题目在问：类图里谁是请求调用者，谁是请求接收者",
      "调用者手里拿着命令、负责触发它；接收者是最后真正干活的对象",
      "①Calculator 有一个 Command 类型的成员 command，并通过 compute() 触发命令，它是调用者，选A",
      "②AddCommand 内部持有 AddOperator，执行时调用它的 add()，真正做加法的是 AddOperator，它是接收者，选D",
      "Command 是抽象命令，AddCommand 是具体命令，两者都只负责转达"
    ],
    "memory": "调用者持有 Command；接收者被具体命令持有并真正执行操作",
    "quotes": [
      {
        "text": "Invoker 角色是开始执行命令的角色，它会调用在 Command 角色中定义的接口（API）。",
        "source": "22-Command模式.md 第371行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/22-Command模式.md",
    "lessonTitle": "22-Command模式.md"
  },
  {
    "id": "E4-MC-06",
    "source": "习题4选择题第6题",
    "category": "行为型设计模式",
    "pattern": "解释器模式",
    "stem": "以下关于解释器模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "当一个待解释的语言中的句子可以表示为一棵抽象语法树时, 可以使用解释器模式"
      },
      {
        "key": "B",
        "text": "在解释器模式中使用类来表示文法规则, 可以方便地改变或者扩展文法"
      },
      {
        "key": "C",
        "text": "解释器模式既适用于文法简单的小语言, 也适用于文法非常复杂的语言解析"
      },
      {
        "key": "D",
        "text": "需要自定义一个小语言, 如一些简单的控制指令时, 可以考虑使用解释器模式"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于解释器模式的错误说法",
      "解释器模式给每条文法规则写一个类，句子被解析成一棵语法树来执行",
      "为什么选C：文法一复杂，规则类就会非常多，难以维护，执行效率也低，所以解释器模式只适合文法简单的小语言",
      "A、B、D 都对：句子能表示成语法树时可用，用类表示规则便于扩展，适合自定义简单指令"
    ],
    "memory": "解释器模式只适合简单文法；复杂文法会导致类爆炸",
    "quotes": [
      {
        "text": "在 Interpreter 模式中，程序要解决的问题会被用非常简单的“迷你语言”表述出来",
        "source": "23-Interpreter模式.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/23-Interpreter模式.md",
    "lessonTitle": "23-Interpreter模式.md"
  },
  {
    "id": "E4-MC-07",
    "source": "习题4选择题第7题",
    "category": "行为型设计模式",
    "pattern": "中介者模式",
    "stem": "在图形界面系统开发中,如果界面组件之间存在较为复杂的相互调用关系,为了降低界面组件之间的耦合度,让它们不产生直接的相互引用,可以使用( )设计模式。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "组合(Composite)"
      },
      {
        "key": "B",
        "text": "适配器(Adapter)"
      },
      {
        "key": "C",
        "text": "中介者(Mediator)"
      },
      {
        "key": "D",
        "text": "状态(State)"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：界面组件之间互相调用太复杂，要让它们不直接引用，用什么模式",
      "为什么选C：中介者模式让所有组件只和一个中介者对象说话，由中介者统一协调，组件之间不再互相引用",
      "A 组合处理树形结构，B 适配器转换接口，D 状态根据状态改变行为，都不解决组件之间的网状调用"
    ],
    "memory": "多个对象互相调用成一张网，就加一个中介者",
    "quotes": [
      {
        "text": "即不让各个对象之间互相通信，而是增加一个仲裁者角色，让他们各自与仲裁者通信。",
        "source": "16-Mediator模式.md 第87行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/16-Mediator模式.md",
    "lessonTitle": "16-Mediator模式.md"
  },
  {
    "id": "E4-MC-08",
    "source": "习题4选择题第8题",
    "category": "行为型设计模式",
    "pattern": "迭代器模式",
    "stem": "以下关于迭代器模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "迭代器模式提供一种方法来访问聚合对象,而无须暴露这个对象的内部表示"
      },
      {
        "key": "B",
        "text": "迭代器模式支持以不同的方式遍历一个聚合对象"
      },
      {
        "key": "C",
        "text": "迭代器模式定义了一个访问聚合元素的接口,并且可以跟踪当前遍历的元素,了解哪些元素已经遍历过而哪些没有"
      },
      {
        "key": "D",
        "text": "在抽象聚合类中定义了访问和遍历元素的方法并在具体聚合类中实现这些方法"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于迭代器模式的错误说法",
      "迭代器模式把“遍历”从集合里拿出来，交给专门的迭代器对象",
      "为什么选D：访问和遍历元素的方法定义在迭代器里，抽象聚合类只负责创建迭代器",
      "D 把遍历方法放回聚合类，正好违背了迭代器模式的初衷",
      "A、B、C 都对：不暴露内部表示，支持多种遍历方式，迭代器记录遍历到哪里了"
    ],
    "memory": "聚合类只负责 createIterator()，遍历方法 hasNext()、next() 在迭代器里",
    "quotes": [
      {
        "text": "该角色负责定义创建 Iterator 角色的接口 (API)。",
        "source": "01-Iterator模式.md 第264行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/01-Iterator模式.md",
    "lessonTitle": "01-Iterator模式.md"
  },
  {
    "id": "E4-MC-09",
    "source": "习题4选择题第9题",
    "category": "行为型设计模式",
    "pattern": "迭代器模式",
    "stem": "迭代器模式用于处理具有( )性质的类。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "抽象"
      },
      {
        "key": "B",
        "text": "聚集"
      },
      {
        "key": "C",
        "text": "单例"
      },
      {
        "key": "D",
        "text": "共享"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：迭代器模式处理的类有什么性质",
      "为什么选B：迭代器是用来一个个取出元素的，所以处理的必须是装着一组元素的类，也就是聚集（集合）",
      "A 抽象、C 单例、D 共享都和“逐个遍历元素”无关"
    ],
    "memory": "迭代器对应聚集（集合）",
    "quotes": [
      {
        "text": "Iterator 模式用于在数据集合中按照顺序遍历集合。",
        "source": "01-Iterator模式.md 第40行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/01-Iterator模式.md",
    "lessonTitle": "01-Iterator模式.md"
  },
  {
    "id": "E4-MC-10",
    "source": "习题4选择题第10题",
    "category": "行为型设计模式",
    "pattern": "中介者模式",
    "stem": "中介者模式通过中介者将同事类解耦,这是( )的具体应用。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "迪米特法则"
      },
      {
        "key": "B",
        "text": "接口隔离原则"
      },
      {
        "key": "C",
        "text": "里氏代换原则"
      },
      {
        "key": "D",
        "text": "合成复用原则"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：中介者把同事类解耦，是在应用哪个原则",
      "为什么选A：迪米特法则要求不必直接通信的类不要直接交往，通过第三者转发，中介者就是这个第三者",
      "B 接口隔离讲接口拆小，C 里氏代换讲子类替换父类，D 合成复用讲用组合代替继承"
    ],
    "memory": "中介者、外观这类“加中间人”的模式都是迪米特法则的应用",
    "quotes": [
      {
        "text": "即不让各个对象之间互相通信，而是增加一个仲裁者角色，让他们各自与仲裁者通信。",
        "source": "16-Mediator模式.md 第87行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/16-Mediator模式.md",
    "lessonTitle": "16-Mediator模式.md"
  },
  {
    "id": "E4-MC-11",
    "source": "习题4选择题第11题",
    "category": "行为型设计模式",
    "pattern": "中介者模式",
    "stem": "以下关于中介者模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "中介者模式用一个中介对象来封装一系列的对象交互"
      },
      {
        "key": "B",
        "text": "中介者模式与观察者模式均可以用于降低系统的耦合度,中介者模式用于处理对象之间一对多的调用关系,而观察者模式用于处理多对多的调用关系"
      },
      {
        "key": "C",
        "text": "中介者模式简化了对象之间的交互,将原本难以理解的网状结构转换成相对简单的星型结构"
      },
      {
        "key": "D",
        "text": "中介者将原本分布于多个对象间的行为集中在一起,改变这些行为只需生成新的中介者子类即可,这使各个同事类可被重用"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于中介者模式的错误说法",
      "为什么选B：B 把两个模式说反了",
      "中介者处理的是一群对象互相调用的多对多关系，它把这张网变成以中介者为中心的星形",
      "观察者处理的是一个目标对象通知多个观察者的一对多关系",
      "A、C、D 都对：中介对象封装交互，网状变星形，行为集中到中介者后同事类更容易复用"
    ],
    "memory": "中介者：多对多变一对多；观察者：一对多通知",
    "quotes": [
      {
        "text": "团队组员之间不再互相沟通并私自做出决定，而是发生任何事情都向仲裁者报告。",
        "source": "16-Mediator模式.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/16-Mediator模式.md",
    "lessonTitle": "16-Mediator模式.md"
  },
  {
    "id": "E4-MC-12",
    "source": "习题4选择题第12题",
    "category": "行为型设计模式",
    "pattern": "备忘录模式",
    "stem": "很多软件都提供了撤销(Undo)功能，( )设计模式可以用于实现该功能。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "中介者"
      },
      {
        "key": "B",
        "text": "备忘录"
      },
      {
        "key": "C",
        "text": "迭代器"
      },
      {
        "key": "D",
        "text": "观察者"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：撤销功能用哪个模式实现",
      "为什么选B：备忘录模式在操作前把对象状态存一份，撤销时把这份旧状态拿回来恢复",
      "A 中介者协调对象交互，C 迭代器遍历集合，D 观察者发通知，都不保存历史状态"
    ],
    "memory": "撤销 Undo 要“存旧状态再恢复”，就是备忘录",
    "quotes": [
      {
        "text": "Memento 模式事先将某个时间点的实例的状态保存下来，之后在有必要时，再将实例恢复至当时的状态。",
        "source": "18-Memento模式.md 第33行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/18-Memento模式.md",
    "lessonTitle": "18-Memento模式.md"
  },
  {
    "id": "E4-MC-13",
    "source": "习题4选择题第13题",
    "category": "行为型设计模式",
    "pattern": "备忘录模式",
    "stem": "以下关于备忘录模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "备忘录模式的作用是在不破坏封装的前提下, 捕获一个对象的内部状态, 并在该对象之外保存这个状态, 这样可以以后将对象恢复到原先保存的状态"
      },
      {
        "key": "B",
        "text": "备忘录模式提供了一种状态恢复的实现机制, 使得用户可以方便地回到一个特定的历史步骤"
      },
      {
        "key": "C",
        "text": "备忘录模式的缺点在于资源消耗太大, 如果类的成员变量太多, 就不可避免地占用大量的内存, 而且每保存一次对象的状态都需要消耗内存资源"
      },
      {
        "key": "D",
        "text": "备忘录模式属于对象行为型模式, 负责人向原发器请求一个备忘录, 保留一段时间后, 将其送回给负责人, 负责人负责对备忘录的内容进行操作和检查"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于备忘录模式的错误说法",
      "三个角色：原发器（要保存状态的对象）、备忘录（装状态的盒子）、负责人（保管盒子的人）",
      "为什么选D：D 把角色搞反了，应该是负责人向原发器要一个备忘录，保管一段时间后，再交还给原发器去恢复",
      "而且负责人只能保管备忘录，不能查看或修改里面的内容，否则就破坏了封装",
      "A、B、C 都对：不破坏封装地保存状态，能回到历史步骤，缺点是占内存"
    ],
    "memory": "负责人只保管备忘录，不看不改，最后交还原发器",
    "quotes": [
      {
        "text": "它只是将 Originator 角色生成的 Memento 角色当作一个黑盒子保存起来。",
        "source": "18-Memento模式.md 第335行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/18-Memento模式.md",
    "lessonTitle": "18-Memento模式.md"
  },
  {
    "id": "E4-MC-14",
    "source": "习题4选择题第14题",
    "category": "行为型设计模式",
    "pattern": "状态模式",
    "stem": "分析如下代码:\n\nelse if(behaviour == 3) { //do something }\n... some more else if ...\n}\n}\n\n为了提高代码的扩展性和健壮性,可以使用( )设计模式来进行重构。",
    "materials": [
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 一个根据整数字段 behaviour 决定做什么的类\n * behaviour 的每一个取值对应一套不同的行为\n */\npublic class TestXYZ {\n    // 记录当前处于哪一种行为，用 0、1、2…… 这样的整数表示\n    int behaviour;\n    //Getter and Setter\n    ...\n    // 统一的处理入口：先判断 behaviour 是几，再执行对应的代码\n    // 问题：每多一种取值就要多一个 else if，这个方法会越来越长\n    public void handleAll() {\n        // 取值为 0 时的处理\n        if(behaviour == 0) { //do something }\n        // 取值为 1 时的处理\n        else if(behaviour == 1) { //do something }\n        // 取值为 2 时的处理\n        else if(behaviour == 2) { //do something }"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "访问者(Visitor)"
      },
      {
        "key": "B",
        "text": "外观(Facade)"
      },
      {
        "key": "C",
        "text": "备忘录(Memento)"
      },
      {
        "key": "D",
        "text": "状态(State)"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：一长串 if (behaviour == 0)…else if (behaviour == 1)… 该用什么模式重构",
      "代码特点：同一个方法根据 behaviour 的值做完全不同的事，以后每加一种值就要再加一个分支",
      "为什么选D：状态模式把每个 behaviour 的值写成一个状态类，各自实现自己的行为，原来的类只调用当前状态对象，长串分支就消失了",
      "A 访问者针对元素加新操作，B 外观简化子系统，C 备忘录保存状态，都不能消除这种分支"
    ],
    "memory": "根据一个状态字段写一长串 if-else，就用状态模式拆成多个状态类",
    "quotes": [
      {
        "text": "如果不使用 State 模式，那么增加新的状态时会怎样呢？这里，如果不使用 State 模式，就必须用 if 语句判断状态。",
        "source": "19-State模式.md 第557行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/19-State模式.md",
    "lessonTitle": "19-State模式.md"
  },
  {
    "id": "E4-MC-15",
    "source": "习题4选择题第15题",
    "category": "行为型设计模式",
    "pattern": "观察者模式",
    "stem": "( )设计模式定义了对象间的一种一对多的依赖关系,以便当一个对象的状态发生改变时,所有依赖于它的对象都得到通知并自动刷新。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "适配器(Adapter)"
      },
      {
        "key": "B",
        "text": "迭代器(Iterator)"
      },
      {
        "key": "C",
        "text": "原型(Prototype)"
      },
      {
        "key": "D",
        "text": "观察者(Observer)"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：“一对多依赖，一个对象变了，依赖它的对象都收到通知并自动更新”是哪个模式",
      "为什么选D：这正是观察者模式的定义，被观察者状态一变，就逐个通知所有观察者",
      "A 适配器转换接口，B 迭代器遍历集合，C 原型复制对象，都和“通知”无关"
    ],
    "memory": "“一对多”“状态改变自动通知”就是观察者",
    "quotes": [
      {
        "text": "在 Observer 模式中，当观察对象的状态发生变化时，会通知给观察者。",
        "source": "17-Observer模式.md 第17行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/17-Observer模式.md",
    "lessonTitle": "17-Observer模式.md"
  },
  {
    "id": "E4-MC-16",
    "source": "习题4选择题第16题",
    "category": "行为型设计模式",
    "pattern": "观察者模式",
    "stem": "图 9-3 所示的 UML 类图表示的是(①)设计模式,在该设计模式中,(②)。",
    "materials": [
      {
        "type": "image",
        "alt": "图9-3 选择题16用图",
        "src": "images/multiple-choice/p100-b07.png"
      }
    ],
    "options": [],
    "answer": [
      "①D",
      "②A"
    ],
    "parts": [
      {
        "label": "①",
        "options": [
          {
            "key": "A",
            "text": "备忘录(Memento)"
          },
          {
            "key": "B",
            "text": "策略(Strategy)"
          },
          {
            "key": "C",
            "text": "状态(State)"
          },
          {
            "key": "D",
            "text": "观察者(Observer)"
          }
        ],
        "answer": [
          "D"
        ],
        "sourceMissing": false
      },
      {
        "label": "②",
        "options": [
          {
            "key": "A",
            "text": "一个 Subject 对象可对应多个 Observer 对象"
          },
          {
            "key": "B",
            "text": "Subject 只能有一个 ConcreteSubject 子类"
          },
          {
            "key": "C",
            "text": "Observer 只能有一个 ConcreteObserver 子类"
          },
          {
            "key": "D",
            "text": "一个 Subject 对象必须至少对应一个 Observer 对象"
          }
        ],
        "answer": [
          "A"
        ],
        "sourceMissing": false
      }
    ],
    "explanation": [
      "题目在问：①类图是什么模式，②下面哪句说法正确",
      "看图：Subject 有 attach、detach、notify，注释里 for 循环逐个调用 obs.update()，这是观察者模式，①选D",
      "②Subject 和 Observer 之间的关联叫 observers，是一个集合，所以一个 Subject 可以对应多个 Observer，选A",
      "B、C 错：Subject 和 Observer 下面都可以有任意多个具体子类",
      "D 错：attach 是可选操作，一个观察者都没注册也可以"
    ],
    "memory": "观察者模式里 Subject 保存一个观察者集合，可以是 0 个或多个",
    "quotes": [
      {
        "text": "ConcreteSubject 角色表示具体的被观察对象。当自身状态发生变化后，它会通知所有已经注册的 Observer 角色。",
        "source": "17-Observer模式.md 第225行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/17-Observer模式.md",
    "lessonTitle": "17-Observer模式.md"
  },
  {
    "id": "E4-MC-17",
    "source": "习题4选择题第17题",
    "category": "行为型设计模式",
    "pattern": "观察者模式",
    "stem": "下面这句话隐含着( )设计模式。\n\n我和妹妹跟妈妈说:“妈妈，我和妹妹在院子里玩。饭做好了叫我们一声。”",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "外观(Facade)"
      },
      {
        "key": "B",
        "text": "职责链(Chain of Responsibility)"
      },
      {
        "key": "C",
        "text": "观察者(Observer)"
      },
      {
        "key": "D",
        "text": "迭代器(Iterator)"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：“饭做好了叫我们一声”隐含哪个模式",
      "对应关系：我和妹妹先告诉妈妈要通知自己，相当于注册观察者；妈妈是被观察者；饭做好是状态变化；叫我们一声是发出通知",
      "为什么选C：这正是观察者模式“先登记、变了再通知”的过程",
      "A 外观、B 职责链、D 迭代器都没有“登记后等通知”"
    ],
    "memory": "“好了告诉我一声”就是观察者",
    "quotes": [
      {
        "text": "Observer 角色负责接收来自 Subject 角色的状态变化的通知。为此，它声明了 update 方法。",
        "source": "17-Observer模式.md 第229行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/17-Observer模式.md",
    "lessonTitle": "17-Observer模式.md"
  },
  {
    "id": "E4-MC-18",
    "source": "习题4选择题第18题",
    "category": "行为型设计模式",
    "pattern": "状态模式",
    "stem": "(①) 设计模式允许一个对象在其内部状态改变时改变它的行为。图 9-4 为这种设计模式的类图, 已知类 State 为抽象类, 则类 (②) 的实例代表了 Context 对象的状态。",
    "materials": [
      {
        "type": "image",
        "alt": "图9-4 选择题18用图",
        "src": "images/multiple-choice/p101-b06.png"
      }
    ],
    "options": [],
    "answer": [
      "①D",
      "②B"
    ],
    "parts": [
      {
        "label": "①",
        "options": [],
        "answer": [
          "D"
        ],
        "sourceMissing": true
      },
      {
        "label": "②",
        "options": [
          {
            "key": "A",
            "text": "Context"
          },
          {
            "key": "B",
            "text": "ConcreteStateA"
          },
          {
            "key": "C",
            "text": "Handle"
          },
          {
            "key": "D",
            "text": "State"
          }
        ],
        "answer": [
          "B"
        ],
        "sourceMissing": false
      }
    ],
    "explanation": [
      "题目在问：①哪个模式让对象随内部状态改变行为，②哪个类的实例代表 Context 的状态",
      "①是状态模式的定义，参考答案为 D（原书这一空的选项文字缺失，D 对应状态模式）",
      "②看类图：Context 保存一个 State 类型的 state，State 下面有 ConcreteStateA 和 ConcreteStateB",
      "State 是抽象类，不能直接创建实例，真正放进 Context 里代表当前状态的是具体状态类的对象，所以选B ConcreteStateA",
      "Context 是拥有状态的对象本身，Handle 只是方法名，都不是状态"
    ],
    "memory": "状态模式里，代表“当前状态”的是具体状态类的实例，抽象 State 只定义接口",
    "quotes": [
      {
        "text": "Context 角色持有表示当前状态的 ConcreteState 角色。",
        "source": "19-State模式.md 第479行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/19-State模式.md",
    "lessonTitle": "19-State模式.md"
  },
  {
    "id": "E4-MC-19",
    "source": "习题4选择题第19题",
    "category": "行为型设计模式",
    "pattern": "状态模式",
    "stem": "场景( )不是状态模式的实例。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "银行账户根据余额不同拥有不同的存取款操作"
      },
      {
        "key": "B",
        "text": "游戏软件中根据虚拟角色级别的不同拥有不同的权限"
      },
      {
        "key": "C",
        "text": "某软件在不同的操作系统中呈现不同的外观"
      },
      {
        "key": "D",
        "text": "会员系统中不同的会员等级可以实现不同的行为"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：哪个场景不是状态模式",
      "状态模式的特征：对象自己的内部状态变了，它的行为跟着变",
      "A 账户余额、B 角色级别、D 会员等级，都是对象自身的属性在变化，行为跟着变",
      "为什么选C：软件在不同操作系统上外观不同，取决于外部运行平台，不是软件对象的内部状态在运行中变化，这更像桥接或抽象工厂的场景"
    ],
    "memory": "状态模式看“对象自己的状态”在变；由外部平台决定的差异不是状态模式",
    "quotes": [
      {
        "text": "以类来表示状态后，我们就能通过切换类来方便地改变对象的状态。",
        "source": "19-State模式.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/19-State模式.md",
    "lessonTitle": "19-State模式.md"
  },
  {
    "id": "E4-MC-20",
    "source": "习题4选择题第20题",
    "category": "行为型设计模式",
    "pattern": "状态模式",
    "stem": "以下关于状态模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "状态模式允许一个对象在其内部状态改变时改变它的行为, 对象看起来似乎修改了它的类"
      },
      {
        "key": "B",
        "text": "状态模式中引入了一个抽象类来专门表示对象的状态, 而具体的状态都继承了该类, 并实现了不同状态的行为, 包括各种状态之间的转换"
      },
      {
        "key": "C",
        "text": "状态模式使状态的变化更加清晰明了, 也很容易创建对象的新状态"
      },
      {
        "key": "D",
        "text": "状态模式完全符合开闭原则, 增加新的状态类无须对原有类库进行任何修改"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于状态模式的错误说法",
      "为什么选D：加一个新状态类时，原来负责切换状态的代码要知道新状态，往往要修改已有的状态类或环境类",
      "所以状态模式对开闭原则的支持并不完全，D 说“无须修改任何原有类”说过头了",
      "A、B、C 都对：行为随状态变，抽象状态类加具体状态子类，状态变化更清晰"
    ],
    "memory": "状态模式加新状态通常要改原有的状态切换代码，不完全符合开闭原则",
    "quotes": [
      {
        "text": "缺点是“每个 ConcreteState 角色都需要知道其他 ConcreteState 角色”。",
        "source": "19-State模式.md 第535行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/19-State模式.md",
    "lessonTitle": "19-State模式.md"
  },
  {
    "id": "E4-MC-21",
    "source": "习题4选择题第21题",
    "category": "行为型设计模式",
    "pattern": "策略模式",
    "stem": "以下关于策略模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "策略模式是对算法的包装, 是把算法的责任和算法本身分隔开, 委派给不同的对象管理"
      },
      {
        "key": "B",
        "text": "在 Context 类中, 维护了对各个 ConcreteStrategy 的引用实例, 提供了一个接口供 ConcreteStrategy 存储数据"
      },
      {
        "key": "C",
        "text": "策略模式让算法独立于使用它的客户而变化"
      },
      {
        "key": "D",
        "text": "策略模式中, 定义一系列算法, 并将每一个算法封装起来, 并让它们可以相互替换"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于策略模式的错误说法",
      "为什么选B：Context 只持有一个抽象策略 Strategy 的引用，运行时放哪个具体策略就用哪个",
      "B 说 Context 维护“各个具体策略”的引用，这样 Context 就和所有具体算法绑在一起了，换算法还得改 Context",
      "A、C、D 都对：算法和使用算法的地方分开，算法独立于客户变化，一系列算法可以互相替换"
    ],
    "memory": "Context 只持有一个抽象 Strategy 引用，不持有一堆具体策略",
    "quotes": [
      {
        "text": "Strategy 模式却特意将算法与其他部分分离开来，只是定义了与算法相关的接口（API），然后在程序中以委托的方式来使用算法。",
        "source": "10-Strategy模式.md 第400行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/10-Strategy模式.md",
    "lessonTitle": "10-Strategy模式.md"
  },
  {
    "id": "E4-MC-22",
    "source": "习题4选择题第22题",
    "category": "行为型设计模式",
    "pattern": "策略模式",
    "stem": "以下关于策略模式的优缺点描述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "策略模式中, 客户端无须知道所有的策略类, 系统必须自行提供一个策略类"
      },
      {
        "key": "B",
        "text": "策略模式可以避免使用多重条件转移语句"
      },
      {
        "key": "C",
        "text": "策略模式会导致产生大量的策略类"
      },
      {
        "key": "D",
        "text": "策略模式提供了管理相关算法族的办法"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：关于策略模式优缺点，哪一句错",
      "为什么选A：策略模式要求客户端自己决定用哪个策略，所以客户端必须知道有哪些策略类、它们有什么区别",
      "A 说“客户端无须知道所有策略类”正好把缺点说反了",
      "B 对：用多态代替 if-else",
      "C 对：每个算法一个类，类会变多",
      "D 对：一组相关算法统一放在策略接口下管理"
    ],
    "memory": "策略模式的缺点：客户端必须知道所有策略并自己选",
    "quotes": [
      {
        "text": "使用 Strategy 模式可以整体地替换算法。",
        "source": "10-Strategy模式.md 第422行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/10-Strategy模式.md",
    "lessonTitle": "10-Strategy模式.md"
  },
  {
    "id": "E4-MC-23",
    "source": "习题4选择题第23题",
    "category": "行为型设计模式",
    "pattern": "策略模式",
    "stem": "某系统中的用户可自行动态选择某种排序算法之一(如选择排序、冒泡排序、插入排序)来实现某功能,该系统的设计可以使用( )设计模式。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "状态"
      },
      {
        "key": "B",
        "text": "策略"
      },
      {
        "key": "C",
        "text": "模板方法"
      },
      {
        "key": "D",
        "text": "工厂方法"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：用户自己动态选择一种排序算法，用什么模式",
      "关键条件：几种算法做同一件事，由用户选用哪一种",
      "为什么选B：把每种排序写成一个策略类，系统持有抽象策略，用户选哪个就放哪个",
      "A 状态模式由对象内部状态自动切换行为，不是用户挑选",
      "C 模板方法固定步骤顺序，子类改部分步骤",
      "D 工厂方法负责创建对象"
    ],
    "memory": "用户“可选择的多种算法”就用策略",
    "quotes": [
      {
        "text": "使用Strategy模式可以整体地替换算法的实现部分。",
        "source": "10-Strategy模式.md 第17行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/10-Strategy模式.md",
    "lessonTitle": "10-Strategy模式.md"
  },
  {
    "id": "E4-MC-24",
    "source": "习题4选择题第24题",
    "category": "行为型设计模式",
    "pattern": "模板方法模式",
    "stem": "某系统中的某子模块需要为其他模块提供访问不同数据库系统(Oracle、SQL Server、DB2 UDB 等)的功能,这些数据库系统提供的访问接口有一定的差异,但访问过程却都是相同的,例如,先连接数据库,再打开数据库,最后对数据进行查询。可使用( )设计模式抽象出相同的数据库访问过程。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "观察者"
      },
      {
        "key": "B",
        "text": "访问者"
      },
      {
        "key": "C",
        "text": "模板方法"
      },
      {
        "key": "D",
        "text": "策略"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：几种数据库访问步骤一样、细节不同，用什么模式提取共同过程",
      "关键条件：步骤顺序都是连接→打开→查询，只是每一步的具体写法因数据库而异",
      "为什么选C：模板方法在父类里写好固定的步骤顺序，把每一步做成抽象方法，交给各数据库的子类去实现",
      "A 观察者负责通知，B 访问者给元素加新操作，D 策略整体替换算法而不是固定步骤"
    ],
    "memory": "“流程一样，个别步骤不同”就选模板方法",
    "quotes": [
      {
        "text": "像这样在父类中定义处理流程的框架，在子类中实现具体处理的模式就称为 Template Method 模式。",
        "source": "03-TemplateMethod模式.md 第27行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/03-TemplateMethod模式.md",
    "lessonTitle": "03-TemplateMethod模式.md"
  },
  {
    "id": "E4-MC-25",
    "source": "习题4选择题第25题",
    "category": "行为型设计模式",
    "pattern": "模板方法模式",
    "stem": "以下关于模板方法模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "模板方法模式定义了一个操作中算法的骨架,而将一些步骤延迟到子类中"
      },
      {
        "key": "B",
        "text": "模板方法模式是一种对象行为型模式"
      },
      {
        "key": "C",
        "text": "模板方法使子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤"
      },
      {
        "key": "D",
        "text": "模板方法不仅可以调用原始的操作,还可以调用定义于 AbstractClass 中的方法或其他对象中的方法"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于模板方法模式的错误说法",
      "为什么选B：模板方法靠父类和子类的继承关系来复用流程，这种关系在编译时就定死了，所以它是类行为型模式，不是对象行为型模式",
      "A、C 是模板方法的定义",
      "D 对：模板方法里既可以调用子类实现的步骤，也可以调用父类自己的方法或其他对象的方法"
    ],
    "memory": "模板方法基于继承，是类行为型模式",
    "quotes": [
      {
        "text": "在 Template Method 模式中，可以使用继承改变程序的行为。",
        "source": "03-TemplateMethod模式.md 第287行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/03-TemplateMethod模式.md",
    "lessonTitle": "03-TemplateMethod模式.md"
  },
  {
    "id": "E4-MC-26",
    "source": "习题4选择题第26题",
    "category": "行为型设计模式",
    "pattern": "访问者模式",
    "stem": "以下关于访问者模式的叙述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "访问者模式表示一个作用于某对象结构中的各元素的操作"
      },
      {
        "key": "B",
        "text": "访问者模式使我们可以在不改变各元素的类的前提下定义作用于这些元素的新操作"
      },
      {
        "key": "C",
        "text": "在访问者模式中,ObjectStructure 提供一个高层接口以允许访问者访问它的元素"
      },
      {
        "key": "D",
        "text": "访问者模式使增加新的元素变得很简单"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：找出关于访问者模式的错误说法",
      "访问者模式把“操作”从元素类里拿出来，放进访问者类，每个访问者对每种元素都有一个 visit 方法",
      "为什么选D：加一个新元素类，就要在所有访问者里各加一个 visit 方法，改动很大，所以增加新元素很难",
      "访问者模式容易的是增加新操作（新访问者），D 把两件事搞反了",
      "A、B、C 都对：表示作用于元素的操作，不改元素类就能加新操作，对象结构提供访问元素的接口"
    ],
    "memory": "访问者模式加新操作容易，加新元素难",
    "quotes": [
      {
        "text": "虽然使用 Visitor 模式可以很容易地增加 ConcreteVisitor 角色，不过它却很难应对 ConcreteElement 角色的增加。",
        "source": "13-Visitor模式.md 第446行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/13-Visitor模式.md",
    "lessonTitle": "13-Visitor模式.md"
  },
  {
    "id": "E4-MC-27",
    "source": "习题4选择题第27题",
    "category": "行为型设计模式",
    "pattern": "访问者模式",
    "stem": "关于访问者模式中的对象结构的描述错误的是( )。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "它实现了 accept() 方法, 该操作以一个具体访问者作为参数"
      },
      {
        "key": "B",
        "text": "可以提供一个高层的接口以允许访问者访问它的元素"
      },
      {
        "key": "C",
        "text": "可以是一个组合模式或是一个集合"
      },
      {
        "key": "D",
        "text": "能够枚举其中包含的元素"
      }
    ],
    "answer": [
      "A"
    ],
    "parts": [],
    "explanation": [
      "题目在问：关于对象结构 ObjectStructure 的错误说法",
      "对象结构是装着所有元素的容器，负责让访问者逐个访问元素",
      "为什么选A：accept(visitor) 方法是元素 Element 实现的，用来接收访问者，不是对象结构实现的",
      "B、C、D 都对：对象结构提供高层访问接口，可以是组合结构或集合，能枚举元素"
    ],
    "memory": "accept() 属于元素；对象结构负责装元素并让访问者遍历",
    "quotes": [
      {
        "text": "Element 角色表示 Visitor 角色的访问对象。它声明了接受访问者的 accept 方法。",
        "source": "13-Visitor模式.md 第366行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/13-Visitor模式.md",
    "lessonTitle": "13-Visitor模式.md"
  },
  {
    "id": "E4-MC-28",
    "source": "习题4选择题第28题",
    "category": "行为型设计模式",
    "pattern": "中介者模式",
    "stem": "在某飞行器模拟系统中,用户通过调节参数可以得到飞机的燃油消耗曲线和发动机燃烧效率曲线,用户可以向文本框输入参数值,也可以通过滑块来设置参数值,还可以通过下拉框来选择参数值。系统界面如图 9-5 所示。在该系统的设计中,可以使用( )设计模式。",
    "materials": [
      {
        "type": "image",
        "alt": "图9-5 飞行器模拟系统界面图",
        "src": "images/multiple-choice/p103-b04.png"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "适配器或命令"
      },
      {
        "key": "B",
        "text": "工厂方法或外观"
      },
      {
        "key": "C",
        "text": "中介者或观察者"
      },
      {
        "key": "D",
        "text": "策略或模板方法\n\n图9-5 飞行器模拟系统界面图"
      }
    ],
    "answer": [
      "C"
    ],
    "parts": [],
    "explanation": [
      "题目在问：文本框、滑块、下拉框都能设参数，曲线要跟着变，该用什么模式",
      "这几个控件要互相同步：滑块拖动后，文本框和下拉框的数字也要变，两条曲线也要重画",
      "为什么选C：中介者让控件只和中介者通信，由中介者统一协调同步；观察者让曲线和控件订阅参数，参数一变就自动通知它们更新，两种都能解决",
      "A 适配器、命令，B 工厂方法、外观，D 策略、模板方法，都不处理多个组件之间的联动"
    ],
    "memory": "多个界面组件互相联动，想到中介者；数据变了界面自动刷新，想到观察者",
    "quotes": [
      {
        "text": "在 Mediator 模式中，有时会使用 Observer 模式来实现 Mediator 角色与 Colleague 角色之间的通信。",
        "source": "17-Observer模式.md 第349行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/16-Mediator模式.md",
    "lessonTitle": "16-Mediator模式.md"
  },
  {
    "id": "E4-MC-29",
    "source": "习题4选择题第29题",
    "category": "行为型设计模式",
    "pattern": "状态模式",
    "stem": "在很多流行的交互式绘图程序中, 当用户选择不同的绘图工具时图形编辑器的行为将随当前工具的变化而改变。例如当一个“绘制椭圆”工具被激活时, 可以创建椭圆对象; 当一个“选择”工具被激活时, 可以选择图形对象; 当一个“填充”工具被激活时, 可以给图形填充颜色等。在该程序中, 可以使用( )设计模式来根据当前的工具改变编辑器的行为。",
    "materials": [],
    "options": [
      {
        "key": "A",
        "text": "工厂方法(Factory Method)"
      },
      {
        "key": "B",
        "text": "状态(State)"
      },
      {
        "key": "C",
        "text": "备忘录(Memento)"
      },
      {
        "key": "D",
        "text": "访问者(Visitor)"
      }
    ],
    "answer": [
      "B"
    ],
    "parts": [],
    "explanation": [
      "题目在问：编辑器的行为随当前选中的工具改变，用什么模式",
      "当前工具就是编辑器的状态：椭圆工具状态下点击是画椭圆，选择工具状态下点击是选中图形",
      "为什么选B：把每种工具写成一个状态类，编辑器把鼠标操作交给当前状态对象处理，换工具就是换状态",
      "A 工厂方法负责创建对象，C 备忘录保存和恢复状态，D 访问者给元素加新操作，都不是“同一操作随状态表现不同”"
    ],
    "memory": "同一个操作在不同模式下效果不同，就是状态模式",
    "quotes": [
      {
        "text": "以类来表示状态后，我们就能通过切换类来方便地改变对象的状态。",
        "source": "19-State模式.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/19-State模式.md",
    "lessonTitle": "19-State模式.md"
  },
  {
    "id": "E4-MC-30",
    "source": "习题4选择题第30题",
    "category": "行为型设计模式",
    "pattern": "职责链模式",
    "stem": "在 Java 异常处理中经常存在与下述代码片段类似的代码:\n\n分析上述代码,在 Java 异常处理机制中蕴含了( )设计模式。",
    "materials": [
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * Java 的异常处理：一个 try 后面跟着多个 catch\n * try 中抛出异常后，Java 从上往下逐个检查 catch 的异常类型\n * 类型匹配的那个 catch 负责处理，后面的 catch 不再执行\n */\n// 可能出错的代码放在 try 中\ntry {\n    ...\n}\n// 第 1 个处理者：只处理算术错误，比如除以 0\ncatch(ArithmeticException are) {\n    System.out.println(\"算术错误!\");\n}\n// 第 2 个处理者：上一个不匹配时才轮到它，处理找不到类的错误\ncatch(ClassNotFoundException e1) {\n    System.out.println(\"类没有找到!\");\n}\n// 第 3 个处理者：前两个都不匹配时才轮到它，处理数据库错误\ncatch(SQLException e2) {\n    System.out.println(\"数据库操作错误!\");\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "命令(Command)"
      },
      {
        "key": "B",
        "text": "观察者(Observer)"
      },
      {
        "key": "C",
        "text": "迭代器(Iterator)"
      },
      {
        "key": "D",
        "text": "职责链(Chain of Responsibility)"
      }
    ],
    "answer": [
      "D"
    ],
    "parts": [],
    "explanation": [
      "题目在问：一连串 catch 块体现了哪个模式",
      "异常抛出后，Java 从第一个 catch 开始逐个检查类型，匹配上的就处理，匹配不上就交给下一个",
      "为什么选D：请求沿一串处理者依次传递、直到有人处理，这就是职责链",
      "A 命令封装请求，B 观察者发通知，C 迭代器遍历集合，都没有“依次尝试处理”"
    ],
    "memory": "try-catch 多个 catch 依次匹配，是职责链的例子",
    "quotes": [
      {
        "text": "这种情况下，我们可以考虑将多个对象组成一条职责链，然后按照它们在职责链上的顺序一个一个地找出到底应该谁来负责处理。",
        "source": "14-ChainofResponsibility模式.md 第15行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/14-ChainofResponsibility模式.md",
    "lessonTitle": "14-ChainofResponsibility模式.md"
  }
]
