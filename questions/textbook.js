window.REVIEW_TEXTBOOK = [
  {
    "id": "TEXTBOOK-01-01",
    "chapter": "第1章",
    "pattern": "迭代器模式",
    "source": "《图解设计模式》习题1-1",
    "stem": "在示例程序的 BookShelf 类（代码清单 1-4）中，当书的数量超过最初指定的书架容量时，就无法继续向书架中添加书本了。请大家不使用数组，而是用 java.util.ArrayList 修改程序，确保当书的数量超过最初指定的书架容量时也能继续向书架中添加书本。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "答案如下。无需对 Main 类中的 while 循环做任何修改。"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 迭代器模式：用 ArrayList 实现的书架\n * BookShelf 扮演 ConcreteAggregate（具体的集合），对外提供 iterator()\n * 内部改用 ArrayList 后可以自动扩容，但对外的方法名和参数都没变\n */\nimport java.util.ArrayList;\n\npublic class BookShelf implements Aggregate {\n    private ArrayList books;  // 原来是固定长度的数组，现在改成会自动变大的 ArrayList\n    // initialsize 只是初始容量，放满后 ArrayList 会自动扩容\n    public BookShelf(int initialsize) {\n        this.books = new ArrayList(initialsize);\n    }\n    // 取第 index 本书，ArrayList 取出的是 Object，要强制转换成 Book\n    public Book getBookAt(int index) {\n        return (Book)books.get(index);\n    }\n    // 放一本书，不用再担心超过容量\n    public void appendBook(Book book) {\n        books.add(book);\n    }\n    // 书的数量就是列表的大小\n    public int getLength() {\n        return books.size();\n    }\n    // 创建迭代器，并把书架自己交给它\n    public Iterator iterator() {\n        return new BookShelfIterator(this);\n    }\n}"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：放 8 本书，再用迭代器逐本输出\n * 这段代码和原来完全一样，说明书架内部的改动不影响遍历的代码\n */\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // 初始容量给 4\n        BookShelf bookShelf = new BookShelf(4);\n        bookShelf.appendBook(new Book(\"Around the World in 80 Days\"));\n        bookShelf.appendBook(new Book(\"Bible\"));\n        bookShelf.appendBook(new Book(\"Cinderella\"));\n        bookShelf.appendBook(new Book(\"Daddy-Long-Legs\"));\n        // 第 5 本：原来的数组版本到这里就放不下了\n        bookShelf.appendBook(new Book(\"East of Eden\"));\n        bookShelf.appendBook(new Book(\"Frankenstein\"));\n        bookShelf.appendBook(new Book(\"Gulliver's Travels\"));\n        bookShelf.appendBook(new Book(\"Hamlet\"));\n        // 向书架要一个迭代器\n        Iterator it = bookShelf.iterator();\n        // 还有下一本就继续\n        while (it.hasNext()) {\n            Book book = (Book)it.next();  // 取出下一本书\n            System.out.println(book.getName());\n        }\n    }\n}"
      },
      {
        "type": "text",
        "content": "图A1-1 运行结果"
      },
      {
        "type": "code",
        "language": "text",
        "content": "Around the World in 80 Days Bible\nCinderella\nDaddy-Long-Legs\nEast of Eden\nFrankenstein\nGulliver's Travels\nHamlet"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要解决什么",
        "bullets": [
          "原来的 BookShelf 用固定长度的数组存书，构造时给 4 就只能放 4 本",
          "Main 里放了 8 本书，第 5 本开始就放不进去",
          "要求改用 ArrayList，让书架能自动变大"
        ]
      },
      {
        "title": "第二步　哪些角色参与",
        "bullets": [
          "Aggregate（集合接口）：BookShelf 实现它，对外提供 iterator()",
          "Iterator：BookShelfIterator 负责一本本取书",
          "ConcreteAggregate：BookShelf，内部怎么存书只有它自己知道"
        ]
      },
      {
        "title": "第三步　答案为什么这样改",
        "bullets": [
          "把数组字段换成 ArrayList books，构造方法里的 initialsize 只作为初始容量，放满后 ArrayList 会自动扩容",
          "getBookAt 改用 books.get(index)，appendBook 改用 books.add(book)，getLength 改用 books.size()",
          "这几个方法的名字和参数都没变，所以 BookShelfIterator 和 Main 的 while 循环一行都不用改"
        ]
      },
      {
        "title": "第四步　如果没有迭代器会怎样",
        "bullets": [
          "如果 Main 直接用 books[i] 这种数组写法遍历，换成 ArrayList 后 Main 也得跟着改",
          "迭代器把“怎么遍历”和“怎么存”隔开了，内部存储换了，遍历代码不受影响"
        ]
      }
    ],
    "memory": [
      "改集合内部的存储方式时，只要对外的方法不变，使用迭代器的代码就不用改",
      "这道题体现的就是迭代器“遍历与实现分离”的好处"
    ],
    "quotes": [
      {
        "text": "无需对 Main 类中的 while 循环做任何修改。",
        "source": "A01-Iterator模式-习题解答.md 第9行"
      },
      {
        "text": "一个重要的理由是，引入 Iterator 后可以将遍历与实现分离开来。",
        "source": "01-Iterator模式.md 第284行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/01-Iterator模式.md"
  },
  {
    "id": "TEXTBOOK-02-01",
    "chapter": "第2章",
    "pattern": "适配器模式",
    "source": "《图解设计模式》习题2-1",
    "stem": "Java 在示例程序中生成 PrintBanner 类的实例时，我们采用了如下方法，即使用 Print 类型的变量来保存 PrintBanner 实例。",
    "materials": [
      {
        "type": "code",
        "language": "text",
        "content": "// 变量类型是接口 Print，实际对象是适配器 PrintBanner\nPrint p = new PrintBanner(\"Hello\");"
      },
      {
        "type": "text",
        "content": "请问我们为什么不像下面这样使用 PrintBanner 类型的变量来保存 PrintBanner 的实例呢？"
      },
      {
        "type": "code",
        "language": "text",
        "content": "// 题目问的另一种写法：变量类型直接用 PrintBanner\n// 原书这里 PrintBanner 和 p 之间缺了一个空格\nPrintBannerp = new PrintBanner(\"Hello\");"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "这是想强调“只使用了 Print 接口的方法”。在本章的示例程序中，PrintBanner 类和 Print 接口对外提供的方法是相同的。但是在有些情况下，PrintBanner 类中的方法可能会比 Print 接口中的方法多。通过将对象保存在 Print 类型的变量中并使用该变量，可以明确地表明程序的意图，即“并不是使用 PrintBanner 类中的方法，而是使用 Print 接口中的方法”。"
      },
      {
        "type": "text",
        "content": "补充说明 即使将变量保存在 Print 类型的变量中，如果对象的实际类型是 PrintBanner 类型，那么依然可以通过下面这样的类型转换来调用 PrintBanner 类中独有的方法。"
      },
      {
        "type": "code",
        "language": "text",
        "content": "// 先把 p 强制转换成 PrintBanner，才能调用 PrintBanner 独有的方法\n// 如果 p 里放的不是 PrintBanner，运行时会抛 ClassCastException\n((PrintBanner)p).methodWhichExistsOnlyInPrintBanner();"
      },
      {
        "type": "text",
        "content": "如果变量 p 中保存的不是 PrintBanner 类以及它的子类，那么程序在运行时会出错（抛出 java.lang.ClassCastException 异常）。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "两种写法都能运行：Print p = new PrintBanner(\"Hello\") 和 PrintBanner p = new PrintBanner(\"Hello\")",
          "题目问为什么示例选了第一种"
        ]
      },
      {
        "title": "第二步　变量类型表达了什么",
        "bullets": [
          "Print 是 Target（客户端需要的接口），PrintBanner 是适配器",
          "把变量声明成 Print，就等于告诉读代码的人：这里只用 Print 规定的方法",
          "PrintBanner 以后可能会多出一些自己的方法，用 Print 类型的变量就不会不小心用到它们"
        ]
      },
      {
        "title": "第三步　这样写带来什么好处",
        "bullets": [
          "Main 只依赖 Print 接口，以后换成别的适配器，只改 new 后面的类名",
          "这就是“针对接口编程”"
        ]
      },
      {
        "title": "第四步　真要用子类独有的方法怎么办",
        "bullets": [
          "可以写 ((PrintBanner)p).方法名() 强制转换",
          "但如果 p 里放的不是 PrintBanner 或它的子类，运行时会抛 ClassCastException",
          "所以平时用接口类型，只在确实需要时才转换"
        ]
      }
    ],
    "memory": [
      "变量声明成接口类型，表明只使用接口的方法，也方便以后替换实现",
      "需要子类特有方法时要强制转换，类型不对会抛 ClassCastException"
    ],
    "quotes": [
      {
        "text": "通过将对象保存在 Print 类型的变量中并使用该变量，可以明确地表明程序的意图，即“并不是使用 PrintBanner 类中的方法，而是使用 Print 接口中的方法”。",
        "source": "A02-Adapter模式-习题解答.md 第11行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/02-Adapter模式.md"
  },
  {
    "id": "TEXTBOOK-02-02",
    "chapter": "第2章",
    "pattern": "适配器模式",
    "source": "《图解设计模式》习题2-2",
    "stem": "在 java.util.Properties 类中，可以像下面这样管理键值对（属性）。",
    "materials": [
      {
        "type": "code",
        "language": "text",
        "content": "year=2004\nmonth=4\nday=21"
      },
      {
        "type": "text",
        "content": "java.util.Properties 类提供了以下方法，可以帮助我们方便地从流中取出属性或将属性写入流中。"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * java.util.Properties 提供的两个现成方法（相当于被适配者 Adaptee）\n */\n// 从输入流读出所有属性\nvoid load(InputStream in) throws IOException\n从 InputStream 中取出属性集合\n// 把所有属性写进输出流，header 会作为注释写在文件开头\nvoid store(OutputStream out, String header) throws IOException\n向 OutputStream 写入属性集合。header 是注释文字"
      },
      {
        "type": "text",
        "content": "请使用 Adapter 模式编写一个将属性集合保存至文件中的 FileProperties 类。"
      },
      {
        "type": "text",
        "content": "这里，我们假设在代码清单 2-7 中的 FileIO 接口（Target 角色）中声明了将属性集合保存至文件的方法，并假设 FileProperties 类会实现这个 FileIO 接口。"
      },
      {
        "type": "text",
        "content": "输入文件 file.txt 以及输出文件 newfile.txt 的内容请参见代码清单 2-9 和代码清单 2-10（以 # 开始的内容是 java.util.Properties 类自动附加的注释文字）。"
      },
      {
        "type": "text",
        "content": "当FileProperties类编写完成后，即使FileProperties类不了解java.util.Properties类的方法，只要知道FileIO接口的方法也可以对属性进行处理。还是以本章开头的电源的例子来说，java.util.Properties类相当于现在家庭中使用的100伏特交流电压，FileIO接口相当于所需要的直流12伏特电源，而FileProperties类则相当于适配器。"
      },
      {
        "type": "text",
        "content": "代码清单 2-7 FileIO 接口 (FileIO.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * FileIO 接口：Main 需要的功能（Target 角色）\n */\nimport java.io.*;\n\npublic interface FileIO {\n    // 从文件读属性\n    public void readFromFile(String filename) throws IOException;\n    // 把属性写到文件\n    public void writeToFile(String filename) throws IOException;\n    public void setValue(String key, String value);  // 设置一个属性\n    public String getValue(String key);  // 读取一个属性\n}"
      },
      {
        "type": "text",
        "content": "代码清单 2-8 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：只使用 FileIO 接口，不知道背后用的是 Properties\n */\nimport java.io.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // 变量类型是接口，实际对象是适配器\n        FileIO f = new FileProperties();\n        try {\n            f.readFromFile(\"file.txt\");  // 读入原有属性\n            // 修改或新增三个属性\n            f.setValue(\"year\", \"2004\");\n            f.setValue(\"month\", \"4\");\n            f.setValue(\"day\", \"21\");\n            f.writeToFile(\"newfile.txt\");  // 写到新文件\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 2-10 输出文件 (newfile.txt)"
      },
      {
        "type": "code",
        "language": "text",
        "content": "#written by FileProperties\n#Wed Apr 21 18:21:00 JST 2004\nday=21\nyear=2004\nmonth=4"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "答案如下。这里使用了基于类的Adapter模式。"
      },
      {
        "type": "text",
        "content": "代码清单 A2-1 FileProperties 类 (FileProperties.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 适配器 FileProperties（类适配器写法）\n * extends Properties：继承得到 load、store 等现成功能（Adaptee）\n * implements FileIO：对外满足 Main 需要的接口（Target）\n * 每个 FileIO 方法里只做一件事：转调 Properties 的对应方法\n */\nimport java.io.*;\nimport java.util.*;\n\npublic class FileProperties extends Properties implements FileIO {\n    // 读文件 → 调用继承来的 load\n    public void readFromFile(String filename) throws IOException {\n        load(new FileInputStream(filename));\n    }\n    // 写文件 → 调用继承来的 store，第二个参数会成为文件开头的注释\n    public void writeToFile(String filename) throws IOException {\n        store(new FileOutputStream(filename), \"written by FileProperties\");\n    }\n    // 设置属性 → 调用 setProperty\n    public void setValue(String key, String value) {\n        setProperty(key, value);\n}\n// 读取属性 → 调用 getProperty，找不到时返回空字符串\npublic String getValue(String key) {\n    return getProperty(key, \"\");\n}\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要解决什么",
        "bullets": [
          "Main 只认识 FileIO 接口：readFromFile、writeToFile、setValue、getValue",
          "真正能读写属性文件的是 java.util.Properties：load、store、setProperty、getProperty",
          "两边方法名对不上，需要一个 FileProperties 在中间转换"
        ]
      },
      {
        "title": "第二步　对应适配器的角色",
        "bullets": [
          "Target：FileIO，相当于需要的直流 12 伏",
          "Adaptee：Properties，相当于现成的交流 100 伏",
          "Adapter：FileProperties",
          "Client：Main"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "class FileProperties extends Properties implements FileIO：继承 Properties 拿到现成功能，实现 FileIO 满足 Main 的要求，这是类适配器",
          "readFromFile 里调用 load(new FileInputStream(filename))",
          "writeToFile 里调用 store(new FileOutputStream(filename), \"written by FileProperties\")，所以输出文件第一行是这句注释",
          "setValue 转成 setProperty，getValue 转成 getProperty(key, \"\")，找不到时返回空字符串"
        ]
      },
      {
        "title": "第四步　换成对象适配器会怎样",
        "bullets": [
          "也可以不继承，而是在 FileProperties 里放一个 Properties 成员，四个方法分别转调这个成员",
          "这样 FileProperties 不会把 Properties 的其他几十个方法也暴露出去，但要多写一个字段"
        ]
      }
    ],
    "memory": [
      "适配器的每个目标方法里只做一件事：转调适配者的对应方法",
      "extends 适配者 implements 目标，就是类适配器"
    ],
    "quotes": [
      {
        "text": "答案如下。这里使用了基于类的Adapter模式。",
        "source": "A02-Adapter模式-习题解答.md 第25行"
      },
      {
        "text": "Adaptee 是一个持有既定方法的角色。",
        "source": "02-Adapter模式.md 第207行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/02-Adapter模式.md"
  },
  {
    "id": "TEXTBOOK-03-01",
    "chapter": "第3章",
    "pattern": "模板方法模式",
    "source": "《图解设计模式》习题3-1",
    "stem": "Java java.io.InputStream 类使用了 Template Method 模式。请阅读官方文档（JDK 的 API 参考资料），从中找出需要用 java.io.InputStream 的子类去实现的方法。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "在子类中需要实现的方法是 java.io.InputStream 的 read() 方法 (不带参数)。read() 方法会被 java.io.InputStream 的模板方法 read(byte[] b, int off, int len) 循环调用。"
      },
      {
        "type": "text",
        "content": "也就是说，程序中是子类负责实现具体的“读取1个字节”的处理，而在java.io.InputStream中只定义了“将指定数量的字节读取到数组中的指定位置”这个模板方法。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要找什么",
        "bullets": [
          "InputStream 是抽象类，题目问它的子类必须自己实现哪个方法"
        ]
      },
      {
        "title": "第二步　谁是模板方法，谁是要填的步骤",
        "bullets": [
          "AbstractClass：java.io.InputStream",
          "模板方法：read(byte[] b, int off, int len)，负责把指定数量的字节读进数组的指定位置",
          "抽象步骤：不带参数的 read()，每次只读 1 个字节"
        ]
      },
      {
        "title": "第三步　为什么答案是 read()",
        "bullets": [
          "批量读取的流程对所有输入流都一样：循环调用 read()，一个字节一个字节放进数组",
          "但“从哪里读 1 个字节”因数据来源而不同，文件、网络、内存各不相同",
          "所以父类写好循环，子类只实现 read()"
        ]
      },
      {
        "title": "第四步　如果反过来会怎样",
        "bullets": [
          "如果每个子类都自己写批量读取的循环，同样的代码要重复很多遍",
          "模板方法把重复的流程留在父类，子类只写差异"
        ]
      }
    ],
    "memory": [
      "InputStream 子类必须实现无参的 read()；带数组参数的 read 是模板方法",
      "模板方法负责流程，抽象方法负责差异"
    ],
    "quotes": [
      {
        "text": "在子类中需要实现的方法是 java.io.InputStream 的 read() 方法 (不带参数)。",
        "source": "A03-TemplateMethod模式-习题解答.md 第11行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/03-TemplateMethod模式.md"
  },
  {
    "id": "TEXTBOOK-03-02",
    "chapter": "第3章",
    "pattern": "模板方法模式",
    "source": "《图解设计模式》习题3-2",
    "stem": "Java 示例程序中的 AbstractDisplay 类（代码清单 3-1）的 display 方法如下所示。",
    "materials": [
      {
        "type": "code",
        "language": "java",
        "content": "// display 是模板方法，规定了 open → print → close 的流程\n// final 表示子类不能重写它，流程不能被改\npublic final void display() {\n    ...\n}"
      },
      {
        "type": "text",
        "content": "这里使用了修饰符final，请问这是想表达什么意思呢？"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "这表示在子类中无法重写 display 方法。"
      },
      {
        "type": "text",
        "content": "该类的编写者强硬地要求子类的编写者“如果想要继承这个类，不要重写display方法，请编写其他方法”。"
      },
      {
        "type": "text",
        "content": "在 GoF 书（请参见附录 E [GoF]）中明确写着不应该重写模板方法。如果想让模板方法无法被重写，那么请使用 final 修饰符。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "AbstractDisplay 的 display 方法前面加了 final，问这样写的用意"
        ]
      },
      {
        "title": "第二步　display 在模式中的身份",
        "bullets": [
          "display 是模板方法，规定了 open → 循环 print 5 次 → close 的流程",
          "open、print、close 才是留给子类实现的步骤"
        ]
      },
      {
        "title": "第三步　final 起什么作用",
        "bullets": [
          "final 方法不能被子类重写",
          "子类只能改 open、print、close 的内容，不能改整个流程",
          "这样所有子类的显示流程都保证一致"
        ]
      },
      {
        "title": "第四步　不加 final 会怎样",
        "bullets": [
          "子类可以重写 display，把流程改掉，父类定义的“模板”就失效了",
          "GoF 书中也明确说模板方法不应该被重写"
        ]
      }
    ],
    "memory": [
      "模板方法加 final：流程固定，子类只能改步骤",
      "final 方法不能被重写"
    ],
    "quotes": [
      {
        "text": "在 GoF 书（请参见附录 E [GoF]）中明确写着不应该重写模板方法。如果想让模板方法无法被重写，那么请使用 final 修饰符。",
        "source": "A03-TemplateMethod模式-习题解答.md 第23行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/03-TemplateMethod模式.md"
  },
  {
    "id": "TEXTBOOK-03-03",
    "chapter": "第3章",
    "pattern": "模板方法模式",
    "source": "《图解设计模式》习题3-3",
    "stem": "Java 如果想要让示例程序中的 open、print、close 方法可以被具有继承关系的类和同一程序包中的类调用，但是不能被无关的其他类调用，应当怎么做呢？",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "可以将 AbstractDisplay 类中的 open, print, close 方法的可见性声明为 protected。这样就可以让继承该类的子类调用这些方法，而其他包中的类无法调用这些方法（不过同一个包中的类依然可以调用这些方法）。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要的访问范围",
        "bullets": [
          "open、print、close 要能被子类调用，也能被同一个包里的类调用",
          "但不想被无关的其他类调用"
        ]
      },
      {
        "title": "第二步　对照 Java 的四种访问权限",
        "bullets": [
          "public：谁都能调用，范围太大",
          "private：只有本类能调用，子类也用不了，范围太小",
          "默认（不写）：只有同包能调用，别的包里的子类用不了",
          "protected：同包的类和所有子类都能调用"
        ]
      },
      {
        "title": "第三步　为什么答案是 protected",
        "bullets": [
          "这三个方法是模板方法流程里的步骤，只该被父类的 display 和子类使用",
          "protected 正好满足“子类能用、无关的类不能用”",
          "代价是同一个包里的类依然可以调用，答案里也特别说明了这一点"
        ]
      }
    ],
    "memory": [
      "模板方法里的步骤方法常用 protected：子类可见，外部不可见",
      "protected = 同包 + 子类"
    ],
    "quotes": [
      {
        "text": "可以将 AbstractDisplay 类中的 open, print, close 方法的可见性声明为 protected。",
        "source": "A03-TemplateMethod模式-习题解答.md 第29行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/03-TemplateMethod模式.md"
  },
  {
    "id": "TEXTBOOK-03-04",
    "chapter": "第3章",
    "pattern": "模板方法模式",
    "source": "《图解设计模式》习题3-4",
    "stem": "Java 中的接口与抽象类很相似。接口同样也是抽象方法的集合，但是在 Template Method 模式中，我们却无法使用接口来扮演 AbstractClass 角色，请问这是为什么呢？",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "这是因为 TemplateMethod 模式中的 AbstractClass 角色必须实现处理的流程。在抽象类中可以实现一部分方法（例如 AbstractDisplay 类中的 display 方法），但是在接口中是无法实现方法的。因此，在 TemplateMethod 模式中，无法用接口替代抽象类。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "接口和抽象类都能放抽象方法，为什么 AbstractClass 角色只能用抽象类"
        ]
      },
      {
        "title": "第二步　AbstractClass 角色要做哪两件事",
        "bullets": [
          "声明抽象步骤，比如 open、print、close",
          "亲自实现模板方法 display，把步骤按顺序串起来"
        ]
      },
      {
        "title": "第三步　为什么接口做不到",
        "bullets": [
          "按书中的说法，接口里只能声明方法，不能写方法体，模板方法的流程代码没地方放",
          "抽象类可以一部分方法是抽象的、一部分方法有实现，正好符合要求",
          "即使后来的 Java 允许接口写 default 方法，它也不能加 final，子类照样能重写流程，接口也不能有实例字段，所以抽象类仍然更合适"
        ]
      }
    ],
    "memory": [
      "模板方法模式需要“既有实现、又有抽象”的父类，所以用抽象类",
      "接口只规定“能做什么”，抽象类还能规定“按什么顺序做”"
    ],
    "quotes": [
      {
        "text": "这是因为 TemplateMethod 模式中的 AbstractClass 角色必须实现处理的流程。",
        "source": "A03-TemplateMethod模式-习题解答.md 第35行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/03-TemplateMethod模式.md"
  },
  {
    "id": "TEXTBOOK-04-01",
    "chapter": "第4章",
    "pattern": "工厂方法模式",
    "source": "《图解设计模式》习题4-1",
    "stem": "Java 在示例程序中，IDCard类（代码清单4-3）的构造函数并不是public，请问这是想表达什么意思呢？",
    "materials": [
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * IDCard：工厂方法模式中的具体产品\n */\npublic class IDCard extends Product {\n    ...\n    // 构造方法前面没有 public，只有同一个包（idcard）中的类能调用\n    // 这样包外的类只能通过 IDCardFactory 来创建 ID 卡\n    IDCard(String owner) {\n        ...\n        this.owner = owner;\n    }\n    ...\n}"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "这是因为想让 idcard 包外的类无法 new 出 IDCard 类的实例。这样就可以强迫外部必须通过 IDCardFactory 来生成 IDCard 的实例。"
      },
      {
        "type": "text",
        "content": "例如，在Main类（无名包）中，是无法像下面这样生成IDCard的实例的。在编译时，这行代码会报错。"
      },
      {
        "type": "code",
        "language": "text",
        "content": "// 在包外的 Main 中直接 new，会因为构造方法不可见而编译报错\nIDCard idcard = new IDCard(\"小明\");"
      },
      {
        "type": "text",
        "content": "补充说明 在 Java 中，只有同一个包中的类可以访问不带 public、protected、private 等修饰符的构造函数和方法。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "IDCard 的构造方法前面没有 public，问这样写的目的"
        ]
      },
      {
        "title": "第二步　谁应该负责创建 IDCard",
        "bullets": [
          "Product：IDCard 是具体产品",
          "ConcreteCreator：IDCardFactory 负责生成 IDCard，并在生成后登记",
          "工厂方法模式希望所有产品都经过工厂创建"
        ]
      },
      {
        "title": "第三步　不写修饰符起什么作用",
        "bullets": [
          "不写修饰符就是包内可见，只有 idcard 包里的类能调用这个构造方法",
          "IDCardFactory 在 idcard 包里，可以 new；Main 在包外，写 new IDCard(\"小明\") 会编译报错",
          "这样就强迫外部只能通过 IDCardFactory 拿到 ID 卡"
        ]
      },
      {
        "title": "第四步　如果改成 public 会怎样",
        "bullets": [
          "外部可以绕过工厂直接 new，工厂里的登记步骤就会被跳过",
          "工厂方法“统一创建”的约束就形同虚设"
        ]
      }
    ],
    "memory": [
      "产品构造方法设成包内可见，可以强制外部必须经过工厂创建",
      "不写访问修饰符＝只有同包可以访问"
    ],
    "quotes": [
      {
        "text": "这是因为想让 idcard 包外的类无法 new 出 IDCard 类的实例。这样就可以强迫外部必须通过 IDCardFactory 来生成 IDCard 的实例。",
        "source": "A04-FactoryMethod模式-习题解答.md 第11行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md"
  },
  {
    "id": "TEXTBOOK-04-02",
    "chapter": "第4章",
    "pattern": "工厂方法模式",
    "source": "《图解设计模式》习题4-2",
    "stem": "请修改示例程序，为 IDCard 类（代码清单 4-3）添加卡的编号，并在 IDCardFactory 类中保存编号与所有者之间的对应表。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "代码请参见代码清单 A4-1 和代码清单 A4-2。不用修改 framework.Product 类（代码清单 4-1）、framework.Factory 类（代码清单 4-2）和 Main 类（代码清单 4-5）。请注意，即使修改了 IDCard 类和 IDCardFactory 类，也完全不用修改框架的代码。"
      },
      {
        "type": "text",
        "content": "编号是从100开始的，但是这并没有什么特别的意思。"
      },
      {
        "type": "text",
        "content": "之所以将 IDCardFactory 类的 createProduct 方法定义为 synchronized 方法，是为了防止程序在多线程运行时为不同的实例分配相同的编号。"
      },
      {
        "type": "text",
        "content": "代码清单 A4-1 添加了编号的 IDCard 类 (IDCard.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 增加了编号的 IDCard（具体产品）\n */\npackage idcard;\nimport framework.*;\n\npublic class IDCard extends Product {\n    private String owner;  // 所有者\n    private int serial;  // 新增：卡的编号\n    // 构造方法多接收一个编号，仍然只在包内可见\n    IDCard(String owner, int serial) {\n        System.out.println(\"制作\" + owner + \"(\" + serial + \")\" + \"的ID卡。\");\n        this.owner = owner;\n        this.serial = serial;\n    }\n    // 使用时连编号一起显示\n    public void use() {\n        System.out.println(\"使用\" + owner + \"(\" + serial + \")\" + \"的ID卡。\");\n    }\n    public String getOwner() {\n        return owner;\n    }\n    // 新增：让工厂能读到编号\n    public int getSerial() {\n        return serial;\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A4-2 添加了编号的 IDCardFactory 类（IDCardFactory.java）"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 增加了编号对应表的 IDCardFactory（具体工厂）\n * 框架中的 Factory 规定了“先创建、再登记”的流程，这里只实现这两步\n */\npackage idcard;\nimport framework.*;\nimport java.util.*;\n\npublic class IDCardFactory extends Factory {\n    private HashMap database = new HashMap();  // 对应表：编号 → 所有者\n    private int serial = 100;  // 编号从 100 开始\n    // 创建产品：每创建一张卡，编号加 1\n    // synchronized 防止多个线程同时创建时拿到相同的编号\n    protected synchronized Product createProduct(String owner) {\n        return new IDCard(owner, serial++);\n    }\n    // 登记产品：把编号和所有者放进对应表\n    protected void registerProduct(Product product) {\n\n// 参数是父类 Product，要转换成 IDCard 才能取编号\nIDCard card = (IDCard)product;\ndatabase.put(new Integer(card.getSerial()), card.getOwner());\n}\n// 让外部读取对应表\npublic Hashtable getDatabase() {\nreturn database;\n}\n}"
      },
      {
        "type": "text",
        "content": "图A4-1 运行结果"
      },
      {
        "type": "code",
        "language": "text",
        "content": "制作小明（100）的ID卡。  \n制作小红（101）的ID卡。  \n制作小刚（102）的ID卡。  \n使用小明（100）的ID卡。  \n使用小红（101）的ID卡。  \n使用小刚（102）的ID卡。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要加什么功能",
        "bullets": [
          "每张 ID 卡要有编号",
          "工厂要保存“编号 → 所有者”的对应表"
        ]
      },
      {
        "title": "第二步　改动落在哪些角色上",
        "bullets": [
          "框架一方（Product、Factory）和 Main 都不改",
          "只改具体加工一方：ConcreteProduct 是 IDCard，ConcreteCreator 是 IDCardFactory"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "IDCard 多一个 serial 字段，构造方法多收一个编号，并提供 getSerial()",
          "IDCardFactory 用 serial 从 100 开始计数，createProduct 里 new IDCard(owner, serial++)",
          "registerProduct 里把编号和所有者放进 HashMap database，这就是对应表",
          "createProduct 加 synchronized，防止多个线程同时创建时拿到同一个编号"
        ]
      },
      {
        "title": "第四步　这道题说明了什么",
        "bullets": [
          "Factory 的 create 方法规定了“先创建、再登记”的流程，具体怎么创建、怎么登记由子类决定",
          "所以增加编号功能时框架代码完全不用碰，只改具体工厂和具体产品"
        ]
      }
    ],
    "memory": [
      "工厂方法模式中，新需求只改 ConcreteProduct 和 ConcreteCreator，框架不动",
      "计数器类的创建方法在多线程下要加 synchronized"
    ],
    "quotes": [
      {
        "text": "请注意，即使修改了 IDCard 类和 IDCardFactory 类，也完全不用修改框架的代码。",
        "source": "A04-FactoryMethod模式-习题解答.md 第27行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md"
  },
  {
    "id": "TEXTBOOK-04-03",
    "chapter": "第4章",
    "pattern": "工厂方法模式",
    "source": "《图解设计模式》习题4-3",
    "stem": "Java 为了强制调用方向 Product 类（代码清单 4-1）的子类的构造函数中传入“产品名字”作为参数，我们采用了如下的定义方式。但是在编译代码时却出现了编译错误，请问这是为什么呢？",
    "materials": [
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 题目中的错误写法：试图用抽象构造方法逼子类接收产品名\n */\npublic abstract class Product {\n    // 这一行会编译报错：Java 不允许 abstract 的构造方法\n    // 构造方法不会被继承，也就谈不上被子类重写\n    public abstract Product(String name);\n    public abstract void use();  // 普通抽象方法是合法的\n}"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "这是因为在 Java 中无法定义 abstract 的构造函数。在 Java 中，构造函数是不会被继承的，因此定义 abstract 的构造函数没有任何意义。"
      },
      {
        "type": "text",
        "content": "要想实现习题中的需求，不应当在构造函数中设置产品的名字，而应当另外声明一个设置产品名字的专用方法。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目的意图",
        "bullets": [
          "想用 public abstract Product(String name) 逼子类的构造方法必须接收产品名",
          "结果编译报错，问原因"
        ]
      },
      {
        "title": "第二步　为什么不能这样写",
        "bullets": [
          "abstract 的意思是“父类不写，留给子类重写”",
          "构造方法不会被子类继承，也就谈不上被子类重写",
          "所以 Java 不允许把构造方法声明为 abstract"
        ]
      },
      {
        "title": "第三步　想达到目的应该怎么做",
        "bullets": [
          "答案建议：不在构造方法里设置名字，而是另外声明一个专门设置名字的方法",
          "这个方法可以在 Product 里声明为抽象方法，子类就必须实现它"
        ]
      }
    ],
    "memory": [
      "构造方法不能是 abstract，也不能被继承",
      "要强制子类提供某项设置，就声明一个普通的抽象方法"
    ],
    "quotes": [
      {
        "text": "这是因为在 Java 中无法定义 abstract 的构造函数。在 Java 中，构造函数是不会被继承的，因此定义 abstract 的构造函数没有任何意义。",
        "source": "A04-FactoryMethod模式-习题解答.md 第100行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/04-FactoryMethod模式.md"
  },
  {
    "id": "TEXTBOOK-05-01",
    "chapter": "第5章",
    "pattern": "单例模式",
    "source": "《图解设计模式》习题5-1",
    "stem": "在下面的 TicketMaker 类（代码清单 5-3）中，每次调用 getNextTicketNumber 方法都会返回 1000,1001,1002... 的数列。我们可以用它生成票的编号或是其他序列号。在现在该类的实现方式下，我们可以生成多个该类的实例。请修改代码，运用 Singleton 模式确保只能生成一个该类的实例。",
    "materials": [
      {
        "type": "text",
        "content": "代码清单 5-3 非 Singleton 模式的 TicketMaker 类 (TicketMaker.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 修改前的 TicketMaker：可以 new 出多个对象，编号会重复\n */\npublic class TicketMaker {\n    private int ticket = 1000;  // 下一个要发出的编号\n    public int getNextTicketNumber() {\n        return ticket++;  // 先返回当前编号，再加 1\n    }\n}"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "代码请参见代码清单 A5-1。"
      },
      {
        "type": "text",
        "content": "这里稍微有些偏离了 Singleton 模式的话题。请注意 getNextTicketNumber 方法是 synchronized 方法，这是为了能让 getNextTicketNumber 在多线程环境下正常工作。如果没有将它定义为 synchronized 方法，在多线程环境中可能会返回相同的编号。"
      },
      {
        "type": "text",
        "content": "代码清单 A5-1 Singleton 模式的 TicketMaker 类 (TicketMaker.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 单例模式的 TicketMaker：整个程序只有一个发号器\n */\npublic class TicketMaker {\n    private int ticket = 1000;\n    // 类加载时就创建唯一实例\n    private static TicketMaker singleton = new TicketMaker();\n    // 构造方法私有，外部不能 new\n    private TicketMaker() {\n    }\n\n    // 全局访问点：总是返回同一个实例\n    public static TicketMaker getInstance() {\n        return singleton;\n    }\n\n    // synchronized：多个线程同时取号时不会拿到相同编号\n    public synchronized int getNextTicketNumber() {\n        return ticket++;\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A5-2 调用 TicketMaker 类的 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：连续取 10 个编号\n */\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Start.\");\n        // 每次都通过 getInstance() 拿到同一个发号器，编号连续\n        for (int i = 0; i < 10; i++) {\n            System.out.println(i + \":\" + TicketMaker.getInstance() . getNextTicketNumber());\n        }\n        System.out.println(\"End.\");\n    }\n}"
      },
      {
        "type": "text",
        "content": "图A5-1 运行结果"
      },
      {
        "type": "code",
        "language": "text",
        "content": "Start.\n0:1000\n1:1001\n2:1002\n3:1003\n4:1004\n5:1005\n6:1006\n7:1007\n8:1008\n9:1009\nEnd."
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要解决什么",
        "bullets": [
          "TicketMaker 每调用一次返回下一个编号",
          "如果能 new 出多个 TicketMaker，每个都从 1000 开始，编号就会重复",
          "所以要保证整个程序只有一个 TicketMaker"
        ]
      },
      {
        "title": "第二步　Singleton 角色要具备什么",
        "bullets": [
          "私有的构造方法，外面不能 new",
          "一个 static 字段保存唯一实例",
          "一个 static 的 getInstance() 返回这个实例"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "private static TicketMaker singleton = new TicketMaker()：类加载时就创建好",
          "private TicketMaker()：禁止外部创建",
          "getInstance() 直接返回 singleton，所以 Main 循环 10 次拿到的都是同一个对象，编号连续输出 1000～1009",
          "getNextTicketNumber 加 synchronized，是为了多线程同时取号时不会拿到相同编号"
        ]
      }
    ],
    "memory": [
      "单例三件套：private 构造、private static 实例、public static getInstance()",
      "单例里有可变状态（计数器）时，修改它的方法要考虑加 synchronized"
    ],
    "quotes": [
      {
        "text": "请注意 getNextTicketNumber 方法是 synchronized 方法，这是为了能让 getNextTicketNumber 在多线程环境下正常工作。",
        "source": "A05-Singleton模式-习题解答.md 第13行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/05-Singleton模式.md"
  },
  {
    "id": "TEXTBOOK-05-02",
    "chapter": "第5章",
    "pattern": "单例模式",
    "source": "《图解设计模式》习题5-2",
    "stem": "请编写 Triple 类，实现最多只能生成 3 个 Triple 类的实例，实例编号分别为 0,1,2 且可以通过 getInstance(int id) 来获取该编号对应的实例（在第 10 章中也出现了这样的类）。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "让 Triple 类（代码清单 A5-3）的实例持有自己的编号（id）和一个静态 Triple 类型的数组，并事先在数组中保存 3 个 Triple 类的实例。getInstance 方法接收的参数是数组的下标，它会返回 1 个数组下标所对应的 Triple 的实例。"
      },
      {
        "type": "text",
        "content": "为了在用字符串表示 Triple 的实例时能看到它的编号，我们实现了 toString 方法。"
      },
      {
        "type": "text",
        "content": "代码清单 A5-3 Triple 类 (Triple.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * Triple：最多只有 3 个实例（编号 0、1、2）\n * 做法和单例一样，只是把一个静态字段换成一个静态数组\n */\npublic class Triple {\n    // 类加载时创建 3 个实例放进静态数组\n    // 必须是 static：只初始化一次，否则每创建一个实例又要创建数组，会无限递归\n    private static Triple[] triple = new Triple[] {\n        new Triple(0),\n        new Triple(1),\n        new Triple(2),\n    };\n    private int id;  // 实例自己的编号\n    // 构造方法私有，外部不能再创建\n    private Triple(int id) {\n        System.out.println(\"The instance \" + id + \" is created.\");\n        this.id = id;\n    }\n    // 按编号返回对应的实例\n    public static Triple getInstance(int id) {\n        return triple[id];\n    }\n    // 打印时显示编号，便于看出是哪个实例\n    public String toString() {\n        return \"[Triple id=\" + id + \"]\";\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A5-4 调用 Triple 类的 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：循环 9 次，用 i % 3 依次取 0、1、2 号实例\n */\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Start.\");\n        for (int i = 0; i < 9; i++) {\n            // 反复取到的只会是这 3 个实例\n            Triple triple = Triple.getInstance(i % 3);\n            System.out.println(i + \":\" + triple);\n        }\n        System.out.println(\"End.\");\n    }\n}"
      },
      {
        "type": "text",
        "content": "图A5-2 运行结果"
      },
      {
        "type": "code",
        "language": "text",
        "content": "Start.\nThe instance 0 is created.\nThe instance 1 is created.\nThe instance 2 is created.\n0:[Triple id=0]\n1:[Triple id=1]\n2:[Triple id=2]\n3:[Triple id=0]\n4:[Triple id=1]\n5:[Triple id=2]\n6:[Triple id=0]\n7:[Triple id=1]\n8:[Triple id=2]\nEnd."
      },
      {
        "type": "list",
        "items": [
          "请不习惯静态字段的读者注意"
        ]
      },
      {
        "type": "text",
        "content": "在代码清单 A5-3 中，Triple 类的 triple 字段会在生成 Triple 类的实例时被初始化，但这并不会形成无限循环。大家可能会有“在生成 Triple 类的实例时需要 Triple 类的实例”这种错觉，其实不然。之所以不会形成无限循环，是因为 triple 字段并不是实例的字段，而是静态字段。triple 字段的初始化只会在第一次生成时进行，之后生成 Triple 类的实例时不会再初始化 triple 字段。如果不将 triple 字段定义为静态字段，就会进入无限循环，在运行时会报错（堆栈溢出）。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要解决什么",
        "bullets": [
          "Triple 类最多只能有 3 个实例，编号 0、1、2",
          "外部通过 getInstance(id) 拿到对应编号的实例"
        ]
      },
      {
        "title": "第二步　从单例到“三例”",
        "bullets": [
          "保留单例的做法：构造方法私有，由类自己创建实例",
          "把“一个静态字段”换成“一个静态数组”，数组里事先放好 3 个实例"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "private static Triple[] triple 在类加载时创建 3 个 Triple，并分别带上 id",
          "getInstance(int id) 返回 triple[id]，所以 Main 里 i % 3 循环拿到的只会是这 3 个",
          "toString() 输出 [Triple id=…]，方便从运行结果里看出是哪一个实例",
          "运行结果里“The instance … is created.”只出现 3 次，说明对象没有被重复创建"
        ]
      },
      {
        "title": "第四步　为什么不会无限循环",
        "bullets": [
          "数组字段是 static 的，只在类第一次使用时初始化一次",
          "如果去掉 static，每创建一个 Triple 就要先创建一个数组和 3 个 Triple，会一直递归下去，最终栈溢出"
        ]
      }
    ],
    "memory": [
      "限制实例为 N 个：私有构造＋静态数组＋按下标返回",
      "保存实例的字段必须是 static，否则创建实例时会无限递归"
    ],
    "quotes": [
      {
        "text": "之所以不会形成无限循环，是因为 triple 字段并不是实例的字段，而是静态字段。",
        "source": "A05-Singleton模式-习题解答.md 第136行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/05-Singleton模式.md"
  },
  {
    "id": "TEXTBOOK-05-03",
    "chapter": "第5章",
    "pattern": "单例模式",
    "source": "《图解设计模式》习题5-3",
    "stem": "某位开发人员编写了如下的 Singleton 类（代码清单 5-4）。但这并非严格的 Singleton 模式。请问是为什么呢？",
    "materials": [
      {
        "type": "text",
        "content": "代码清单 5-4 为何不是严格的 Singleton 模式 (Singleton.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 题目给出的单例：单线程下没问题，多线程下不严格\n */\npublic class Singleton {\n    private static Singleton singleton = null;  // 一开始不创建，用到时再创建\n    private Singleton() {\n        System.out.println(\"生成了一个实例。\");\n    }\n    public static Singleton getInstance() {\n        // 问题出在这里：两个线程可能同时判断为 null\n        // 于是各自 new 一个，产生多个实例\n        if (singleton == null) {\n            singleton = new Singleton();\n        }\n        return singleton;\n    }\n}"
      },
      {
        "type": "text",
        "content": "提示 该问题与多线程有关。该问题参考了 Java in Practice 一书（请参见附录 E 中的 [Warren]）。"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "这是因为在多个线程几乎同时调用 Singleton.getInstances 方法时，可能会生成多个实例。"
      },
      {
        "type": "text",
        "content": "代码清单 A5-5 多个线程调用 Singleton.getInstances 方法 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 用 3 个线程同时调用 getInstance()，检验是否会产生多个实例\n * 原书排版中 run 和构造方法被放到了类的花括号外面，它们本应属于 Main 类\n */\n// Main 继承 Thread，每个 Main 对象就是一个线程\npublic class Main extends Thread {\n    public static void main(String[] args) {\n        System.out.println(\"Start.\");\n        // 启动三个线程 A、B、C\n        new Main(\"A\").start();\n        new Main(\"B\").start();\n        new Main(\"C\").start();\n        System.out.println(\"End.\");\n    }\n}\n// 每个线程要做的事：取单例并打印它\npublic void run() {\n    Singleton obj = Singleton.getInstance();\n    System.out.println(getName() + \": obj = \" + obj);\n}\n// 构造方法：给线程起名字\npublic Main(String name) {\n    super(name);\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A5-5 的运行结果会根据运行时计算机的状态不同而不同，为了确保能生成多个实例，我们将 Singleton 类修改为代码清单 A5-6 中的代码。图 A5-3 是运行结果示例。"
      },
      {
        "type": "text",
        "content": "代码清单 A5-6 为了确保能生成多个实例，我们故意降低了程序处理速度（Singleton.java）"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 故意放慢创建速度，让多线程问题一定出现\n */\npublic class Singleton {\n    private static Singleton singleton = null;\n    private Singleton() {\n        System.out.println(\"生成了一个实例。\");\n        slowdown();  // 构造时停 1 秒，其他线程有足够时间也通过 null 判断\n    }\n    public static Singleton getInstance() {\n        if (singleton == null) {\n            singleton = new Singleton();\n        }\n        return singleton;\n    }\n    // 让当前线程休眠 1000 毫秒\n    private void slowdown() {\n        try {\n            Thread.sleep(1000);\n        } catch (InterruptedException e) {\n        }\n    }"
      },
      {
        "type": "text",
        "content": "图A5-3 运行结果示例"
      },
      {
        "type": "code",
        "language": "text",
        "content": "Start.\nEnd.\n生成了一个实例。          ←生成多个实例\n生成了一个实例。\n生成了一个实例。\nA: obj = Singleton@6ec612      ←A, B, C中实例的内容不同\nB: obj = Singleton@dd1f7\nC: obj = Singleton@53c015"
      },
      {
        "type": "text",
        "content": "在以上代码中，如下条件判断是线程不安全的。"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 线程不安全的地方：判断和赋值之间可能被其他线程插进来\n */\n// 线程 A 判断为 null\nif (singleton == null) {\n    // A 还没赋值时，线程 B 也判断为 null，两者都会执行这一行\n    singleton = new Singleton();\n}"
      },
      {
        "type": "text",
        "content": "在使用 singleton == null 判断第一个实例是否为 null 后，执行了下面的语句。"
      },
      {
        "type": "code",
        "language": "text",
        "content": "// 在这行赋值完成之前，其他线程看到的 singleton 仍然是 null\nsingleton = new Singleton();"
      },
      {
        "type": "text",
        "content": "但是，在赋值之前，其他线程可能会进行 singleton == null 判断。"
      },
      {
        "type": "text",
        "content": "因此，只有像代码清单 A5-7 中那样，定义 getInstance 方法为 synchronized 方法后才是严谨的 Singleton 模式（该解决方案参考了 Warren 书（请参见附录 E [Warren]）。详细内容请参见笔者的另外一本拙著《图解设计模式:多线程》 ① （附录 E [Yuki02]）中的附录 B。"
      },
      {
        "type": "text",
        "content": "代码清单 A5-7 严谨的 Singleton 模式（Singleton.java）"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 严谨的单例：给 getInstance() 加上 synchronized\n */\npublic class Singleton {\n    private static Singleton singleton = null;\n    private Singleton() {\n        System.out.println(\"生成了一个实例。\");\n        slowdown();\n    }\n    // synchronized：同一时刻只允许一个线程进入\n    // 第一个线程创建并赋值后，后面的线程再判断就不是 null 了\n    public static synchronized Singleton getInstance() {\n        if (singleton == null) {\n            singleton = new Singleton();\n        }\n        return singleton;\n    }\n    private void slowdown() {\n        try {\n            Thread.sleep(1000);\n        } catch (InterruptedException e) {\n        }\n    }\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　这段代码哪里看着没问题",
        "bullets": [
          "构造方法是私有的",
          "getInstance() 先判断 singleton 是否为 null，为空才创建",
          "单线程运行时确实只会创建一个实例"
        ]
      },
      {
        "title": "第二步　多线程下会发生什么",
        "bullets": [
          "线程 A 判断 singleton == null 为真，还没来得及赋值",
          "这时线程 B 也来判断，singleton 仍然是 null，也进入 if",
          "两个线程各 new 了一个，单例被破坏",
          "答案故意在构造方法里 sleep 1 秒放大这个时间差，运行结果中输出了 3 次“生成了一个实例。”"
        ]
      },
      {
        "title": "第三步　答案怎么修正",
        "bullets": [
          "把 getInstance() 声明为 static synchronized",
          "同一时刻只允许一个线程进入方法，第一个线程创建完并赋值后，后面的线程再判断就不为 null 了"
        ]
      },
      {
        "title": "第四步　还有什么写法",
        "bullets": [
          "也可以像习题 5-1 那样在声明字段时就直接 new，类加载时创建，天然只有一个，不需要判断"
        ]
      }
    ],
    "memory": [
      "“判空再 new”的懒汉式单例在多线程下不安全",
      "给 getInstance() 加 synchronized，或者改成声明时直接 new"
    ],
    "quotes": [
      {
        "text": "这是因为在多个线程几乎同时调用 Singleton.getInstances 方法时，可能会生成多个实例。",
        "source": "A05-Singleton模式-习题解答.md 第142行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/05-Singleton模式.md"
  },
  {
    "id": "TEXTBOOK-06-01",
    "chapter": "第6章",
    "pattern": "原型模式",
    "source": "《图解设计模式》习题6-1",
    "stem": "在示例程序中，MessageBox类（代码清单6-3）和UnderlinePen类（代码清单6-4）中的createClone方法的处理完全相同。从管理的角度来讲，在一个程序的多个地方出现完全相同的方法不太好，因此我们想让这两个类共用该方法，请问应该如何做呢？",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "例如，有以下两种方法。"
      },
      {
        "type": "list",
        "items": [
          "将 Product 接口修改为 Product 类, 在 Product 类中实现 createClone 方法 (Template Method 模式)"
        ]
      },
      {
        "type": "list",
        "items": [
          "定义一个 ConcreteProduct 类作为 UnderlinePen 类和 MessagePen 类的父类，让 ConcreteProduct 类实现 Product 接口，并实现 createClone 方法"
        ]
      },
      {
        "type": "text",
        "content": "不论哪种解决方法，都是通过继承来共用 createClone 方法。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要解决什么",
        "bullets": [
          "MessageBox 和 UnderlinePen 的 createClone 写得一模一样",
          "同样的代码出现在两处，以后要改就得改两遍"
        ]
      },
      {
        "title": "第二步　参考答案给出的两种办法",
        "bullets": [
          "原书列出两条做法，题库答案中这两条没有显示出来，内容见附录 A",
          "办法一：把 Product 接口改成 Product 抽象类，在里面实现 createClone，子类直接继承使用",
          "办法二：新建一个 ConcreteProduct 类，让它实现 Product 接口并实现 createClone，再让 MessageBox 和 UnderlinePen 继承它"
        ]
      },
      {
        "title": "第三步　两种办法的共同点",
        "bullets": [
          "都是把重复的方法上移到一个公共父类里，通过继承共用",
          "办法一中父类写好通用流程、子类负责其余方法，就是模板方法模式的思路"
        ]
      }
    ],
    "memory": [
      "多个子类有完全相同的方法时，把它提到公共父类中",
      "接口里不能写实现，所以要么改成抽象类，要么加一个中间父类"
    ],
    "quotes": [
      {
        "text": "不论哪种解决方法，都是通过继承来共用 createClone 方法。",
        "source": "A06-Prototype模式-习题解答.md 第17行"
      },
      {
        "text": "将 Product 接口修改为 Product 类, 在 Product 类中实现 createClone 方法 (Template Method 模式)",
        "source": "A06-Prototype模式-习题解答.md 第13行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/06-Prototype模式.md"
  },
  {
    "id": "TEXTBOOK-06-02",
    "chapter": "第6章",
    "pattern": "原型模式",
    "source": "《图解设计模式》习题6-2",
    "stem": "Java 在 java.lang.Object 中定义了 clone 方法, 那么请问 java.lang.Object 类实现了 java.lang.Clonable 接口了吗?",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "没有，java.lang.Object 类并没有实现 java.lang.Cloneable 接口。"
      },
      {
        "type": "text",
        "content": "如果 Object 类实现了 Cloneable 接口，那么无论是哪个类的实例调用 clone 方法，都不会抛出 CloneNotSupportedException 异常。"
      },
      {
        "type": "text",
        "content": "<small>① 原书名为『Java 言語で学ぶデザインパターン入門 マルチスレッド編』, 人民邮电出版社即将引进出版。——译者注</small>"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "所有类都继承 Object，Object 里有 clone 方法",
          "问 Object 自己有没有实现 Cloneable 接口"
        ]
      },
      {
        "title": "第二步　Cloneable 起什么作用",
        "bullets": [
          "Cloneable 里没有任何方法，它只是一个“允许复制”的标记",
          "调用 clone 时，Java 会检查这个对象的类有没有实现 Cloneable，没有就抛 CloneNotSupportedException"
        ]
      },
      {
        "title": "第三步　为什么答案是“没有”",
        "bullets": [
          "如果 Object 实现了 Cloneable，所有类都会自动带上这个标记",
          "那么任何对象调用 clone 都不会抛异常，这个检查就失去了意义",
          "所以 Object 只提供 clone 方法，是否允许复制由每个类自己决定"
        ]
      }
    ],
    "memory": [
      "Object 有 clone 方法，但没有实现 Cloneable",
      "想让自己的类能被 clone，必须自己 implements Cloneable"
    ],
    "quotes": [
      {
        "text": "如果 Object 类实现了 Cloneable 接口，那么无论是哪个类的实例调用 clone 方法，都不会抛出 CloneNotSupportedException 异常。",
        "source": "A06-Prototype模式-习题解答.md 第25行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/06-Prototype模式.md"
  },
  {
    "id": "TEXTBOOK-07-01",
    "chapter": "第7章",
    "pattern": "建造者模式",
    "source": "《图解设计模式》习题7-1",
    "stem": "Java 请将示例程序中的 Builder 类（代码清单 7-1）修改为接口并相应地修改其他类。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "需要修改如下3个地方。代码清单7-2中的Director类和7-5中的Main类则无需修改。"
      },
      {
        "type": "list",
        "items": [
          "Builder类（代码清单7-1）中的修改点"
        ]
      },
      {
        "type": "code",
        "language": "java",
        "content": "// 修改点一：Builder 从抽象类改为接口（↓ 下方是修改后的写法）\npublic abstract class Builder\n    ↓\npublic interface Builder"
      },
      {
        "type": "list",
        "items": [
          "TextBuilder 类（代码清单 7-3）中的修改点"
        ]
      },
      {
        "type": "code",
        "language": "java",
        "content": "// 修改点二：TextBuilder 从继承改为实现接口\npublic class TextBuilder extends Builder\n    ↓\npublic class TextBuilder implements Builder"
      },
      {
        "type": "list",
        "items": [
          "HTMLBuilder 类（代码清单 7-4）中的修改点"
        ]
      },
      {
        "type": "code",
        "language": "java",
        "content": "// 修改点三：HTMLBuilder 从继承改为实现接口\npublic class HTMLBuilder extends Builder\n    ↓\npublic class HTMLBuilder implements Builder"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要做什么",
        "bullets": [
          "原来的 Builder 是抽象类，题目要求改成接口",
          "改完后其他类要相应调整，程序照常运行"
        ]
      },
      {
        "title": "第二步　要改的三处",
        "bullets": [
          "原书列出了三处修改点，题库答案中这三条标题没有显示出来，从代码可以看出分别是 Builder、TextBuilder、HTMLBuilder",
          "Builder：public abstract class Builder 改为 public interface Builder",
          "TextBuilder：extends Builder 改为 implements Builder",
          "HTMLBuilder：extends Builder 改为 implements Builder"
        ]
      },
      {
        "title": "第三步　为什么 Director 和 Main 不用改",
        "bullets": [
          "Director 只调用 Builder 声明的 makeTitle、makeString、makeItems、close",
          "这些方法名和参数都没变，不管 Builder 是抽象类还是接口，Director 的调用方式都一样",
          "Main 也只是把具体建造者传给 Director"
        ]
      },
      {
        "title": "第四步　什么时候不能改成接口",
        "bullets": [
          "原来的 Builder 里只有抽象方法，没有字段和方法实现，所以可以直接改成接口",
          "如果像习题 7-2 那样要在 Builder 里写检查顺序的代码和字段，就只能用抽象类"
        ]
      }
    ],
    "memory": [
      "Director 只依赖 Builder 的方法声明，所以 Builder 是抽象类还是接口不影响 Director",
      "只有抽象方法的抽象类可以改成接口；有实现代码或字段时不行"
    ],
    "quotes": [
      {
        "text": "需要修改如下3个地方。代码清单7-2中的Director类和7-5中的Main类则无需修改。",
        "source": "A07-Builder模式-习题解答.md 第11行"
      },
      {
        "text": "为了确保不论 ConcreteBuilder 角色是如何被定义的，Director 角色都能正常工作，它只调用在Builder 角色中被定义的方法。",
        "source": "07-Builder模式.md 第294行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/07-Builder模式.md"
  },
  {
    "id": "TEXTBOOK-07-02",
    "chapter": "第7章",
    "pattern": "建造者模式",
    "source": "《图解设计模式》习题7-2",
    "stem": "在示例程序中的 HTMLBuilder 类（代码清单 7-4）中，需要首先调用 makeTitle 方法，但是在 TextBuilder 类（代码清单 7-3）中，则对方法调用的顺序没有要求。",
    "materials": [
      {
        "type": "text",
        "content": "请修改 Builder 类（代码清单 7-1）、TextBuilder 类（代码清单 7-3）和 HTMLBuilder 类（代码清单 7-4），确保“在调用 makeString 方法、makeItems 方法和 close 方法之前必须且只能调用一次 makeTitle 方法”。"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "在 Builder 类中加入检查调用顺序的方法。然后，像下面这样修改子类中需要实现的方法（Template Method 模式）。"
      },
      {
        "type": "code",
        "language": "text",
        "content": "/**\n * 方法改名对照：左边是父类对外的 public 方法，右边是子类要实现的 protected 方法\n * 父类的 makeXxx 负责检查调用顺序，再调用子类的 buildXxx 做真正的工作\n */\nmakeTitle → buildTitle\nmakeString → buildString\nmakeItems → buildItems\nclose      → buildDone"
      },
      {
        "type": "text",
        "content": "由于只有 Builder 类的子类需要使用以上这些方法，所以我们将这些方法的可见性从 public 变为 protected。"
      },
      {
        "type": "text",
        "content": "这样一来，就无需对 Director 类做任何修改了。"
      },
      {
        "type": "text",
        "content": "代码清单 A7-1 Builder 类 ( Builder.java )"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 加入调用顺序检查的 Builder（模板方法模式的写法）\n * 规则：makeTitle 必须最先调用且只能调用一次，之后才能调用其他方法\n */\npublic abstract class Builder {\n    private boolean initialized = false;  // 记录标题是否已经生成\n    // 生成标题：只有第一次调用才有效\n    public void makeTitle(String title) {\n        if (!initialized) {\n            buildTitle(title);\n            initialized = true;  // 标记已生成标题，以后再调用 makeTitle 不起作用\n        }\n    }\n    // 生成文字：必须先生成过标题\n    public void makeString(String str) {\n        if (initialized) {\n            buildString(str);\n        }\n    }\n\n// 生成条目：必须先生成过标题\npublic void makeItems(String[] items) {\n    if (initialized) {\n        buildItems(items);\n    }\n}\n// 完成文档：必须先生成过标题\npublic void close() {\n    if (initialized) {\n        buildDone();\n    }\n}\n// 以下四个方法由子类实现真正的生成工作\n// protected：只给子类用，外部只能调用上面的 makeXxx\nprotected abstract void buildTitle(String title);\nprotected abstract void buildString(String str);\nprotected abstract void buildItems(String[] items);\nprotected abstract void buildDone();"
      },
      {
        "type": "text",
        "content": "代码清单 A7-2 HTMLBuilder 类 (HTMLBuilder.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * HTMLBuilder：生成 HTML 文件的具体建造者\n * 原来的 makeXxx 改名为 buildXxx 并改成 protected，调用顺序由父类检查\n */\nimport java.io.*;\n\npublic class HTMLBuilder extends Builder {\n    private String filename;                          // 文件名\n    private PrintWriter writer;                          // 用于编写文件的 PrintWriter\n    // 生成标题时才创建文件，所以它必须最先被调用\n    protected void buildTitle(String title) {            // HTML 文件的标题\n        filename = title + \".html\";                  // 将标题作为文件名\n        try {\n            writer = new PrintWriter(new FileWriter(filename));   // 生成 PrintWriter\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n        writer.println(\"<html><head><title>\" + title + \"</title></head><body>\"); // 输出标题\n        writer.println(\"<h1>\" + title + \"</h1>\");\n    }\n    // 把一段文字写成 <p> 段落\n    protected void buildString(String str) {                 // HTML 中的文字\n        writer.println(\"<p>\" + str + \"</p>\");\n    }\n    // 把条目写成 <ul> 列表\n    protected void buildItems(String[] items) {                // HTML 中的条目\n        writer.println(\"<ul>\");\n        for (int i = 0; i < items.length; i++) {\n            writer.println(\"<li>\" + items[i] + \"</li>\");\n        }\n        writer.println(\"</ul>\");\n    }\n    // 写结尾标签并关闭文件\n    protected void buildDone() {                          // 完成文档\n        writer.println(\"</body></html>\");\n        writer.close();                                // 关闭文件\n    }\n    // 取得结果：返回生成的文件名\n    public String getResult() {\n        return filename;                                // 返回文件名\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A7-3 TextBuilder 类 (TextBuilder.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * TextBuilder：生成纯文本的具体建造者，同样只实现 buildXxx\n * 注意：new *StringBuffer() 中的 * 是原书识别错误，应为 new StringBuffer()\n */\npublic class TextBuilder extends Builder {\n    private StringBuffer buffer = new *StringBuffer();          // 文档内容保存在该字段中\n    // 标题：装饰线加书名号\n    protected void buildTitle(String title) {                    // 纯文本的标题\n        buffer.append(\"=====================\\n\");   // 装饰线\n        buffer.append(\"『\" + title + \"』\\n \");                 // 为标题添加「」\nbuffer.append(\"\\n\");\n}\n// 文字：前面加 ■\nprotected void buildString(String str) {\nbuffer.append('■' + str + \"\\n\");\nbuffer.append(\"\\n\");\n}\n// 条目：每项前面加 ·\nprotected void buildItems(String[] items) {\nfor (int i = 0; i < items.length; i++) {\nbuffer.append(\"·\" + items[i] + \"\\n\");\n}\nbuffer.append(\"\\n\");\n}\n// 结尾的装饰线\nprotected void buildDone() {\nbuffer.append(\"==================\\n\");\n}\n// 返回拼好的整篇文本\npublic String getResult() {\nreturn buffer.toString();\n}\n}"
      },
      {
        "type": "text",
        "content": "然后，我们还可以在程序中加上 “close 方法处理完成后，不能再调用其他方法” 等限制。"
      },
      {
        "type": "text",
        "content": "以上只是一种答案。除此之外，还有很多方法可以解答该题。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要解决什么",
        "bullets": [
          "HTMLBuilder 在 makeTitle 里才创建文件，如果先调用 makeString，writer 还没创建就会出错",
          "题目要求：makeTitle 必须最先调用，而且只能调用一次，之后才能调用其他方法"
        ]
      },
      {
        "title": "第二步　检查放在哪个角色里",
        "bullets": [
          "这个规则对所有具体建造者都一样，所以检查应该写在父类 Builder 里，而不是每个子类各写一遍",
          "子类只负责“真正怎么生成内容”"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "Builder 加一个 initialized 字段，记录标题是否已经生成",
          "makeTitle：还没初始化才调用 buildTitle，然后把 initialized 设为 true，所以第二次调用不起作用",
          "makeString、makeItems、close：只有 initialized 为 true 才调用对应的 buildXxx",
          "子类原来的四个方法改名为 buildTitle、buildString、buildItems、buildDone，并改成 protected 抽象方法，只给子类实现",
          "这就是模板方法模式：父类的 public 方法负责检查流程，子类实现具体步骤"
        ]
      },
      {
        "title": "第四步　为什么 Director 不用改",
        "bullets": [
          "Director 调用的仍然是 makeTitle、makeString 等 public 方法，名字没变",
          "检查逻辑藏在父类里，对 Director 透明"
        ]
      }
    ],
    "memory": [
      "所有子类都要遵守的规则写在父类里，子类只实现具体步骤",
      "public 方法负责检查和流程，protected 抽象方法交给子类实现"
    ],
    "quotes": [
      {
        "text": "在 Builder 类中加入检查调用顺序的方法。然后，像下面这样修改子类中需要实现的方法（Template Method 模式）。",
        "source": "A07-Builder模式-习题解答.md 第41行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/07-Builder模式.md"
  },
  {
    "id": "TEXTBOOK-07-03",
    "chapter": "第7章",
    "pattern": "建造者模式",
    "source": "《图解设计模式》习题7-3",
    "stem": "请为示例程序中的Builder类（代码清单7-1）编写一个子类，让其扮演ConcreteBuilder的角色，实现可以编写纯文本文档、HTML文件以外的任意一种文档的功能。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "这里，我们编写了一个基于JFC（Java Foundation Classes）的GUI界面来扮演ConcreteBuilder角色。在 FrameBuilder类中，我们使用窗口上的标签（JLabel）实现了makeString部分，使用窗口上的按钮（JButton）实现了makeItems部分。而Builder类和Director类则与示例程序完全相同。"
      },
      {
        "type": "text",
        "content": "程序运行后会显示图 A7-1 中的窗口。点击按钮中，按钮中的“早上好”会在标准输出中显示出来。"
      },
      {
        "type": "text",
        "content": "代码清单 A7-4 FrameBuilder 类 (FrameBuilder.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * FrameBuilder：用图形窗口表示“文档”的具体建造者\n * Builder 和 Director 都不用改，它只需实现 Builder 的四个方法\n * 同时实现 ActionListener，用来响应按钮点击\n */\nimport javax.swing.*;\nimport java.awt.event.*;\nimport java.awt.*;\n\npublic class FrameBuilder extends Builder implements ActionListener {\n    private JFrame frame = new JFrame();  // 整个窗口就是最终产品\n    private Box box = new Box(BoxLayout.Y_AXIS);  // 竖着排列内容的容器\n    // 标题 → 窗口标题栏\n    public void makeTitle(String title) {\n        frame.setTitle(title);\n    }\n    // 文字 → 一个标签 JLabel\n    public void makeString(String str) {\n        box.add(new JLabel(str));\n    }\n    // 条目 → 每项一个按钮 JButton\n    public void makeItems(String[] items) {\n        Box innerbox = new Box(BoxLayout.Y_AXIS);\n        for (int i = 0; i < items.length; i++) {\n            JButton button = new JButton(items[i]);\n            button.addActionListener(this);  // 按钮被点击时调用本类的 actionPerformed\n            innerbox.add(button);\n        }\n        box.add(innerbox);\n}\n// 完成：把内容放进窗口，调整大小，关闭窗口时退出程序\npublic void close() {\n    frame.getContentPane().add(box);\n    frame.pack();\n    frame.addWindowListener(new WindowAdapter() {\n        public void windowClosing(WindowEvent e) {\n            System.exit(0);\n        }\n    });\n}\n// 取得结果：返回做好的窗口\npublic JFrame getResult() {\n    return frame;\n}\n// 点击按钮时，把按钮上的文字打印出来\npublic void actionPerformed(ActionEvent e) {\n    System.out.println(e.getActionCommand());\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A7-5 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：用同一个 Director 构造出一个窗口\n */\nimport javax.swing.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        FrameBuilder framebuilder = new FrameBuilder();\n        // 把窗口建造者交给指挥者\n        Director director = new Director(framebuilder);\n        director.construct();  // 指挥者按固定顺序调用建造步骤\n        // 成品从建造者那里取，而不是从指挥者取\n        JFrame frame = framebuilder.getResult();\n        frame.setVisible(true);  // 显示窗口\n    }\n}"
      },
      {
        "type": "text",
        "content": "图A7-1 运行结果"
      },
      {
        "type": "image",
        "src": "images/textbook/p339-b07.png",
        "alt": "图A7-1 运行结果"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要做什么",
        "bullets": [
          "再写一个 ConcreteBuilder，生成纯文本和 HTML 以外的另一种“文档”",
          "答案选择了用图形界面窗口来表示文档"
        ]
      },
      {
        "title": "第二步　Builder 的每个方法对应到窗口的什么部分",
        "bullets": [
          "makeTitle：设置窗口标题",
          "makeString：往窗口里加一个文字标签 JLabel",
          "makeItems：每个条目做成一个按钮 JButton",
          "close：把内容放进窗口并调整大小",
          "getResult：返回做好的 JFrame"
        ]
      },
      {
        "title": "第三步　为什么 Builder 和 Director 完全不用改",
        "bullets": [
          "Director 只按顺序调用 Builder 的四个方法，不关心结果是文本、HTML 还是窗口",
          "FrameBuilder 继承 Builder 并实现这四个方法，就能被 Director 直接使用",
          "Main 把 FrameBuilder 交给 Director，构造完从 FrameBuilder 取出窗口显示"
        ]
      },
      {
        "title": "第四步　这道题体现了什么",
        "bullets": [
          "同样的构建过程（Director.construct）得到了完全不同的表示（窗口）",
          "这正是“构建与表示分离”的效果"
        ]
      }
    ],
    "memory": [
      "新增一种文档格式＝新增一个 ConcreteBuilder，Director 不变",
      "成品从具体建造者的 getResult() 取，而不是从 Director 取"
    ],
    "quotes": [
      {
        "text": "而Builder类和Director类则与示例程序完全相同。",
        "source": "A07-Builder模式-习题解答.md 第166行"
      },
      {
        "text": "建造者模式(Builder Pattern): 将一个复杂对象的构建与它的表示分离, 使得同样的构建过程可以创建不同的表示。",
        "source": "A-常用设计模式的定义及结构图.md 第53行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/07-Builder模式.md"
  },
  {
    "id": "TEXTBOOK-07-04",
    "chapter": "第7章",
    "pattern": "建造者模式",
    "source": "《图解设计模式》习题7-4",
    "stem": "Java 在示例程序中的 TextBuilder 类（代码清单 7-3）中，编写的文档被保存在了 buffer 字段中，但 buffer 字段并非是 String 类型的，而是 StringBuffer 类型的，请问是为什么呢？如果使用了 String 类型会有什么问题呢？",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "可以像下面这样，使用 String 类型的变量作为参数，然后将 append 修改为 += 即可。不过当像示例程序中这样，频繁地改变和连接字符串时，使用 StringBuffer 的效率比使用 String更高。这是因为，在使用 String 修改和连接字符串时，每次都会生成一个新的 String 类的实例，产生额外的开销。"
      },
      {
        "type": "text",
        "content": "代码清单 A7-6 TextBuilder 类 (TextBuilder.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 用 String 代替 StringBuffer 的 TextBuilder：能运行，但效率较低\n * String 的内容不能修改，每次 += 都会生成一个新的 String 对象\n */\npublic class TextBuilder extends Builder {\n    private String buffer = \"\";  // 从空字符串开始拼接\n    // 每一次 += 都会产生一个新对象，旧对象被丢弃\n    public void makeTitle(String title) {\n        buffer += \"==================\\n\";\n        buffer += \"『\" + title + \"』\\n\";\n        buffer += \"\\n\";\n    }\n    public void makeString(String str) {\n        buffer += '■' + str + \"\\n\";\n        buffer += \"\\n\";\n    }\n    public void makeItems(String[] items) {\n        for (int i = 0; i < items.length; i++) {\n            buffer += \" ·\" + items[i] + \"\\n\";\n        }\n        buffer += \"\\n\";\n    }\n    public void close() {\n        buffer += \"==================\\n\";\n    }\n    public String getResult() {\n        return buffer;\n    }\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "TextBuilder 用 StringBuffer 拼接文档，问为什么不用 String，用了又有什么问题"
        ]
      },
      {
        "title": "第二步　用 String 能不能写",
        "bullets": [
          "能写：把 buffer 声明成 String，append 改成 +=，答案给出了这样的代码",
          "运行结果和原来一样"
        ]
      },
      {
        "title": "第三步　为什么还是选 StringBuffer",
        "bullets": [
          "String 的内容不能改，每次 += 都会新建一个 String 对象，旧的被丢掉",
          "建造者要一段一段地往文档后面追加内容，次数多时会产生大量临时对象",
          "StringBuffer 在原来的对象上直接追加，不用反复创建，效率更高"
        ]
      }
    ],
    "memory": [
      "频繁拼接字符串用 StringBuffer 或 StringBuilder",
      "String 每次修改都生成新对象"
    ],
    "quotes": [
      {
        "text": "这是因为，在使用 String 修改和连接字符串时，每次都会生成一个新的 String 类的实例，产生额外的开销。",
        "source": "A07-Builder模式-习题解答.md 第238行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/07-Builder模式.md"
  },
  {
    "id": "TEXTBOOK-08-01",
    "chapter": "第8章",
    "pattern": "抽象工厂模式",
    "source": "《图解设计模式》习题8-1",
    "stem": "Java Tray 类（代码清单 8-3）中的 tray 字段是 protected，子类也可以访问。请指出如果将其修改为 private，会有哪些优点和缺点。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "可见性设置为 private 的优点是 Tray 的子类（即具体的零件）不会依赖于 tray 字段的实现。可见性设置为 private 的缺点是必须重新编写一些方法，让外部可以访问自身。"
      },
      {
        "type": "text",
        "content": "通常，与将字段的可见性设置为protected相比，将字段的可见性设置为private，然后编写用于访问字段的方法会更安全。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "Tray 是抽象零件，它的 tray 字段存放托盘里的零件，现在是 protected",
          "问改成 private 有什么好处和坏处"
        ]
      },
      {
        "title": "第二步　谁会用到 tray 字段",
        "bullets": [
          "ListTray、TableTray 这些具体零件在生成 HTML 时要遍历 tray",
          "现在是 protected，子类可以直接读写这个字段"
        ]
      },
      {
        "title": "第三步　改成 private 的优点和缺点",
        "bullets": [
          "优点：子类不再依赖“tray 是一个 ArrayList”这个内部细节，以后父类换存储方式，子类不受影响",
          "缺点：子类拿不到字段了，Tray 需要另外写方法（比如获取元素的方法）让子类访问",
          "答案的结论：一般来说，private 字段加访问方法更安全"
        ]
      }
    ],
    "memory": [
      "字段用 private＋访问方法，子类不依赖父类的内部实现",
      "代价是多写几个访问方法"
    ],
    "quotes": [
      {
        "text": "通常，与将字段的可见性设置为protected相比，将字段的可见性设置为private，然后编写用于访问字段的方法会更安全。",
        "source": "A08-AbstractFactory模式-习题解答.md 第13行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/08-AbstractFactory模式.md"
  },
  {
    "id": "TEXTBOOK-08-02",
    "chapter": "第8章",
    "pattern": "抽象工厂模式",
    "source": "《图解设计模式》习题8-2",
    "stem": "请在示例程序的 Factory 类（代码清单 8-5）中定义一个“生成只含有雅虎网站（http://www.yahoo.com）超链接的 HTML 页面的具象方法”。",
    "materials": [
      {
        "type": "code",
        "language": "text",
        "content": "// 题目要求在抽象工厂 Factory 中新增的方法：生成只含 Yahoo! 链接的页面\npublic Page createYahooPage();"
      },
      {
        "type": "text",
        "content": "请把页面的作者和标题都设置为 \"Yahoo!\"。这时，具体工厂类和具体零件类又需要如何修改呢？"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "修改方法如下。需要修改的只有Factory类和Main类。"
      },
      {
        "type": "text",
        "content": "代码清单 A8-1 Factory 类 (Factory.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 抽象工厂 Factory：新增了有具体实现的 createYahooPage()\n * 它只调用抽象的 createLink 和 createPage，所以对所有具体工厂都适用\n * 注意：Class.forName ammonia() 是原书识别错误，应为 Class.forName(classname)\n */\npackage factory;\n\npublic abstract class Factory {\n    // 根据类名字符串创建具体工厂（例如 listfactory.ListFactory）\n    public static Factory getFactory(String classname) {\n        Factory factory = null;\n        try {\n            factory = (Factory)Class.forName ammonia().newInstance();\n\n} catch (ClassNotFoundException e) {\n    System.err.println(\"没有找到 \" + classname + \"类。\");\n} catch (Exception e) {\n    e.printStackTrace();\n}\nreturn factory;\n}\n// 以下三个抽象方法由具体工厂实现\npublic abstract Link createLink(String caption, String url);\npublic abstract Tray createTray(String caption);\npublic abstract Page createPage(String title, String author);\n// 新增方法：组合抽象零件生成一个现成的页面\npublic Page createYahooPage() {\n    // 创建链接，具体是哪种链接由当前的具体工厂决定\n    Link link = createLink(\"Yahoo!\", \"http://www.yahoo.com/-\");\n    // 创建页面，标题和作者都是 Yahoo!\n    Page page = createPage(\"Yahoo!\", \"Yahoo!\");\n    page.add(link);  // 把链接放进页面\n    return page;\n}"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：运行时通过命令行参数选择具体工厂\n */\nimport factory.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // 没有给出具体工厂的类名时，提示用法后退出\n        if (args.length != 1) {\n            System.out.println(\"Usage: java Main class.name.of.ConcreteFactory\");\n            System.out.println(\"Example 1: java Main listfactory.ListFactory\");\n            System.out.println(\"Example 2: java Main tablefactory.TableFactory\");\n            System.exit(0);\n        }\n        // 按类名创建具体工厂\n        Factory factory = Factory.getFactory(args[0]);\n        // 调用新方法，得到 Yahoo! 页面\n        Page page = factory.createYahooPage();\n        page.output();  // 输出 HTML 文件\n    }\n}"
      },
      {
        "type": "text",
        "content": "图A8-1 使用了listfactory的指向Yahoo!的链接"
      },
      {
        "type": "image",
        "src": "images/textbook/p341-b05.png",
        "alt": "图A8-1 使用了listfactory的指向Yahoo!的链接"
      },
      {
        "type": "text",
        "content": "图 A8-2 使用了 tablefactory 的指向 Yahoo! 的链接"
      },
      {
        "type": "image",
        "src": "images/textbook/p342-b04.png",
        "alt": "图 A8-2 使用了 tablefactory 的指向 Yahoo! 的链接"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要加什么",
        "bullets": [
          "在抽象工厂 Factory 里加一个有实现的方法 createYahooPage()，生成只含 Yahoo! 链接的页面",
          "并问具体工厂和具体零件要不要改"
        ]
      },
      {
        "title": "第二步　createYahooPage 用到了哪些角色",
        "bullets": [
          "AbstractFactory：Factory，已经声明了 createLink、createPage",
          "AbstractProduct：Link、Page",
          "createYahooPage 只调用这两个抽象方法，把链接放进页面后返回"
        ]
      },
      {
        "title": "第三步　为什么只改 Factory 和 Main",
        "bullets": [
          "createYahooPage 只依赖抽象的创建方法，具体用哪个工厂，由运行时传入的类名决定",
          "ListFactory、TableFactory 和各种具体零件都不用改",
          "用 ListFactory 运行得到列表风格的页面，用 TableFactory 运行得到表格风格的页面",
          "题库答案代码中 Class.forName 后面的 ammonia() 是识别错误，原意是用 classname 加载类"
        ]
      },
      {
        "title": "第四步　这道题说明了什么",
        "bullets": [
          "在抽象工厂里组合抽象零件，就能写出对所有具体工厂都适用的“套餐”方法",
          "Abstract Factory 模式只依赖接口来组装产品"
        ]
      }
    ],
    "memory": [
      "抽象工厂里可以写具体方法，只要它只调用抽象的创建方法",
      "这种方法对所有具体工厂自动生效"
    ],
    "quotes": [
      {
        "text": "修改方法如下。需要修改的只有Factory类和Main类。",
        "source": "A08-AbstractFactory模式-习题解答.md 第19行"
      },
      {
        "text": "Abstract Factory 模式通过调用抽象产品的接口（API）来组装抽象产品，生成具有复杂结构的实例。",
        "source": "08-AbstractFactory模式.md 第710行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/08-AbstractFactory模式.md"
  },
  {
    "id": "TEXTBOOK-08-03",
    "chapter": "第8章",
    "pattern": "抽象工厂模式",
    "source": "《图解设计模式》习题8-3",
    "stem": "Java ListLink 类（代码清单 8-8）的构造函数如下所示。",
    "materials": [
      {
        "type": "code",
        "language": "java",
        "content": "// 构造方法不能继承，子类要带参数的构造方法必须自己写\npublic ListLink(String caption, String url) {\n    super(caption, url);  // 把参数交给父类 Link 保存\n}"
      },
      {
        "type": "text",
        "content": "也就是说，它只是调用了父类的构造函数。如果不需要其他处理，为什么还要特意定义 ListLink 类的构造函数呢？"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "这是因为在 Java 中无法继承构造函数。"
      },
      {
        "type": "text",
        "content": "即使在父类中有 Link(String caption, String url) 构造函数，如果在 ListLink 类中不定义 ListLink(String caption, String url) 构造函数，就无法像下面这样生成实例，还会在编译代码时出错。"
      },
      {
        "type": "text",
        "content": "new ListLink(\"Yahoo!\", \"http://www.yahoo.com/\")"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "ListLink 的构造方法只写了一句 super(caption, url)，看起来什么也没做",
          "问为什么还要写它"
        ]
      },
      {
        "title": "第二步　关键知识",
        "bullets": [
          "Java 的构造方法不会被子类继承",
          "子类如果不写构造方法，编译器只会给它一个无参构造方法"
        ]
      },
      {
        "title": "第三步　不写会怎样",
        "bullets": [
          "ListFactory 要用 new ListLink(\"Yahoo!\", \"http://www.yahoo.com/\") 创建链接",
          "如果 ListLink 没有两个参数的构造方法，这行代码会编译报错",
          "所以必须写出这个构造方法，再用 super 把参数交给父类 Link 保存"
        ]
      }
    ],
    "memory": [
      "构造方法不能继承，子类需要带参数的构造方法就得自己写，再调用 super(...)"
    ],
    "quotes": [
      {
        "text": "这是因为在 Java 中无法继承构造函数。",
        "source": "A08-AbstractFactory模式-习题解答.md 第84行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/08-AbstractFactory模式.md"
  },
  {
    "id": "TEXTBOOK-08-04",
    "chapter": "第8章",
    "pattern": "抽象工厂模式",
    "source": "《图解设计模式》习题8-4",
    "stem": "Page 类（代码清单 8-4）的处理与 Tray 类的处理（代码清单 8-3）相似，那为什么没有让 Page 类继承 Tray 类呢？",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "这是因为无法向 Tray 中添加 Page（不符合 HTML 规范）。如果将 Page 类定义为 Tray 类的子类，那么 Page 也就变成了 Item 类的子类，导致其可以被添加至 Tray 中。"
      },
      {
        "type": "text",
        "content": "我们没有这么做，因此我们需要在 Page 类中声明 makeHTML 方法。当然，如果像下面这样定义一个 Java 接口 HTMLable，在其中声明一个 makeHTML 方法，然后让 Item 类和 Page 类都实现（implements）HTMLable 接口，代码会变得更加简洁和干净。"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 答案建议的接口：表示“能生成 HTML”的能力\n * 让 Item 和 Page 都实现它：两者都能生成 HTML，但 Page 不是 Item，不能被放进 Tray\n */\npublic interface HTMLable {\n    public abstract String makeHTML();  // 返回自己对应的 HTML 字符串\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "Page 和 Tray 都能往里加东西、都会生成 HTML，代码很像",
          "问为什么不让 Page 继承 Tray"
        ]
      },
      {
        "title": "第二步　Tray 在继承树里的位置",
        "bullets": [
          "Tray 继承自 Item，Link 也继承自 Item",
          "Tray 里可以放任何 Item，所以托盘里能放链接，也能放托盘"
        ]
      },
      {
        "title": "第三步　如果 Page 继承 Tray 会怎样",
        "bullets": [
          "Page 就变成了 Item 的子类",
          "那么 Page 也能被放进 Tray 里，相当于一个网页里嵌着一个完整网页，不符合 HTML 规范",
          "所以宁可让 Page 自己声明 makeHTML，也不让它继承 Tray"
        ]
      },
      {
        "title": "第四步　更干净的写法",
        "bullets": [
          "答案建议定义一个 HTMLable 接口，只声明 makeHTML()",
          "让 Item 和 Page 都实现它：都能生成 HTML，但 Page 不是 Item，不能被放进托盘"
        ]
      }
    ],
    "memory": [
      "不能只因为代码相似就继承，要看子类放到父类的位置上是否合理",
      "共同能力用接口表达，避免错误的“是一种”关系"
    ],
    "quotes": [
      {
        "text": "这是因为无法向 Tray 中添加 Page（不符合 HTML 规范）。",
        "source": "A08-AbstractFactory模式-习题解答.md 第94行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/08-AbstractFactory模式.md"
  },
  {
    "id": "TEXTBOOK-09-01",
    "chapter": "第9章",
    "pattern": "桥接模式",
    "source": "《图解设计模式》习题9-1",
    "stem": "请在本章的示例程序中增加一个类，实现“显示字符串若干（随机）次”的功能。请注意此时应当扩展（继承）哪个类。",
    "materials": [
      {
        "type": "text",
        "content": "提示 用于显示的方法是 void randomDisplay(int times)，它的作用是将字符串随机显示 0 \\~ times 次。"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "这里应该在 “类的功能层次” 中增加类。"
      },
      {
        "type": "text",
        "content": "直接让 RandomCountDisplay 类（代码清单 A9-1）继承 Display 类也可以，不过这里我们让它继承 CountDisplay 类。"
      },
      {
        "type": "text",
        "content": "java.util.Random 是一个随机数生成器，nextInt(n) 方法会随机生成和返回一个大于 0 小于 n 的随机数。"
      },
      {
        "type": "text",
        "content": "Main 类（代码清单 A9-2）调用了 RandomCountDisplay 的 randomDisplay 方法。程序运行后，会随机显示 0 至 9 次 \"Hello, China.\"。"
      },
      {
        "type": "code",
        "language": "text",
        "content": "+----------+\n+----------+"
      },
      {
        "type": "text",
        "content": "代码清单 A9-1 RandomCountDisplay 类 (RandomCountDisplay.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * RandomCountDisplay：加在“功能层次”中的新类\n * 继承 CountDisplay，可以直接复用 multiDisplay(n)\n */\nimport java.util.Random;\n\npublic class RandomCountDisplay extends CountDisplay {\n    private Random random = new Random();  // 随机数生成器\n    // 构造时传入实现对象（怎么显示）\n    public RandomCountDisplay(DisplayImpl impl) {\n        super(impl);  // 交给父类保存，这就是连接两个层次的桥\n    }\n    // 随机显示 0～times-1 次\n    public void randomDisplay(int times) {\n        multiDisplay(random.nextInt(times));  // nextInt(times) 返回 0 到 times-1 的随机整数\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A9-2 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：功能用 RandomCountDisplay，显示方式用 StringDisplayImpl\n * 原书这一行少了一个右括号，应为 new RandomCountDisplay(new StringDisplayImpl(\"Hello, China.\"))\n */\npublic class Main {\n    public static void main(String[] args) {\n        RandomCountDisplay d = new RandomCountDisplay(new StringDisplayImpl(\"Hello, China.\");\n        d.randomDisplay(10);  // 随机显示 0～9 次\n    }\n}"
      },
      {
        "type": "text",
        "content": "图 A9-1 程序运行结果示例 1（重复运行了 4 次。每次运行结果可能都不同）"
      },
      {
        "type": "code",
        "language": "text",
        "content": "+-------------------+\n|Hello, China.|  \n|Hello, China.|  \n|Hello, China.|  \n|Hello, China.|  \n+------------------+"
      },
      {
        "type": "text",
        "content": "图A9-2 程序运行结果示例2（重复运行了8次）"
      },
      {
        "type": "code",
        "language": "text",
        "content": "+-------------------+\n|Hello, China.|\n|Hello, China.|\n|Hello, China.|\n|Hello, China.|\n|Hello, China.|\n|Hello, China.|\n|Hello, China.|\n|Hello, China.|\n+------------------+"
      },
      {
        "type": "text",
        "content": "图A9-2 程序运行结果示例3（重复运行了0次）"
      },
      {
        "type": "text",
        "content": "类图请参见图A9-4。"
      },
      {
        "type": "text",
        "content": "图 A9-4 增加 RandomCountDisplay类后的类图"
      },
      {
        "type": "image",
        "src": "images/textbook/p344-b04.png",
        "alt": "图 A9-4 增加 RandomCountDisplay类后的类图"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要加什么功能",
        "bullets": [
          "要一个 randomDisplay(int times)，把字符串随机显示 0～times 次",
          "还要判断新类应该放在哪一边"
        ]
      },
      {
        "title": "第二步　放在功能层次还是实现层次",
        "bullets": [
          "Bridge 模式把类分成两边：功能层次（Display、CountDisplay）管“做什么”，实现层次（DisplayImpl、StringDisplayImpl）管“怎么显示”",
          "“随机显示若干次”是新的用法，显示方式本身没变，所以加在功能层次"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "RandomCountDisplay 继承 CountDisplay，可以直接用父类的 multiDisplay(n)",
          "randomDisplay 里调用 multiDisplay(random.nextInt(times))，随机次数交给已有方法完成",
          "构造方法 super(impl) 把实现对象交给父类保存，这就是桥",
          "Main 里传入 StringDisplayImpl，运行结果随机显示 0～9 次"
        ]
      },
      {
        "title": "第四步　为什么不继承 Display",
        "bullets": [
          "继承 Display 也可以，但要自己写循环",
          "继承 CountDisplay 能复用 multiDisplay，代码更少"
        ]
      }
    ],
    "memory": [
      "增加“新用法”放功能层次，增加“新的显示方式”放实现层次",
      "功能类通过 super(impl) 接上实现类"
    ],
    "quotes": [
      {
        "text": "这里应该在 “类的功能层次” 中增加类。",
        "source": "A09-Bridge模式-习题解答.md 第11行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/09-Bridge模式.md"
  },
  {
    "id": "TEXTBOOK-09-02",
    "chapter": "第9章",
    "pattern": "桥接模式",
    "source": "《图解设计模式》习题9-2",
    "stem": "请在本章的示例程序中增加一个类，实现“显示文本文件的内容”的功能。请注意此时应当扩展（继承）哪个类。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "这里应该在“类的实现层次”中添加类，我们编写了一个DisplayImpl类的子类——FileDisplayImpl类。"
      },
      {
        "type": "text",
        "content": "在代码清单 A9-3 中的 FileDisplayImpl 类中，只是负责显示太过简单了，所以我们用其添加了一些装饰。"
      },
      {
        "type": "text",
        "content": "代码清单 A9-4 中的 Main 类调用 CountDisplay 类和 FileDisplayImpl 类来显示 3 次 star.txt 文件中的内容（代码清单 A9-5）。"
      },
      {
        "type": "text",
        "content": "如果使用上一道习题中的 RandomCountDisplay 类和 FileDisplayImpl 类，则可以显示随机次 star.txt 文件中的内容。"
      },
      {
        "type": "text",
        "content": "代码清单 A9-3 FileDisplayImpl 类 (FileDisplayImpl.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * FileDisplayImpl：加在“实现层次”中的新类，负责显示文本文件\n * rawOpen 打开文件并画上边框，rawPrint 输出文件内容，rawClose 画下边框并关闭文件\n * 原书排版中 rawOpen 的花括号位置有误，打印上边框的语句本应在 rawOpen 里面\n */\nimport java.io.*;\n\npublic class FileDisplayImpl extends DisplayImpl {\n    private String filename;  // 要显示的文件名\n    private BufferedReader reader;  // 读文件用的对象\n    private final int MAX_READAHEAD_LIMIT = 4096; // 循环显示的极限(缓存大小限制)\n    public FileDisplayImpl(String filename) {\n        this.filename = filename;\n    }\n    // 打开文件\n    public void rawOpen() {\n        try {\n            reader = new BufferedReader(new FileReader(filename));\n            reader.mark(MAX_READAHEAD_LIMIT);  // 在文件开头做个记号，之后可以回到这里重复读\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\nSystem.out.println(\"====================\" + filename + \" =====================\"); // 装饰框\n}\n// 输出一遍文件内容\npublic void rawPrint() {\n    try {\n        String line;\n        reader.reset(); // 回到 mark 的位置\n        // 一行一行读，读到末尾为止\n        while ((line = reader.readLine()) != null) {\n            System.out.println(\"> \" + line);\n        }\n    } catch (IOException e) {\n        e.printStackTrace();\n    }\n}\n// 画下边框并关闭文件\npublic void rawClose() {\n    System.out.println(\"====================\"); // 装饰框\n    try {\n        reader.close();\n    } catch (IOException e) {\n        e.printStackTrace();\n    }\n}\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A9-4 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：功能用已有的 CountDisplay，显示方式换成 FileDisplayImpl\n */\npublic class Main {\n    public static void main(String[] args) {\n        CountDisplay d = new CountDisplay(new FileDisplayImpl(\"star.txt\"));\n        d.multiDisplay(3);  // 把 star.txt 的内容显示 3 遍\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A9-5 要显示的文件（Star.txt）"
      },
      {
        "type": "code",
        "language": "text",
        "content": "Twinkle, twinkle, little star,\nHow I wonder what you are."
      },
      {
        "type": "text",
        "content": "图A9-5 运行结果"
      },
      {
        "type": "code",
        "language": "text",
        "content": "======================== star.txt ======================>\n> Twinkle, twinkle, little star,\n> How I wonder what you are.\n> Twinkle, twinkle, little star,\n> How I wonder what you are.\n> Twinkle, twinkle, little star,\n> How I wonder what you are.\n========================"
      },
      {
        "type": "text",
        "content": "类图请参见图 A9-6。"
      },
      {
        "type": "text",
        "content": "图 A9-6 增加 FileDisplayImpl类后的类图"
      },
      {
        "type": "image",
        "src": "images/textbook/p346-b04.png",
        "alt": "图 A9-6 增加 FileDisplayImpl类后的类图"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要加什么功能",
        "bullets": [
          "要显示一个文本文件的内容",
          "要判断新类该加在哪一边"
        ]
      },
      {
        "title": "第二步　为什么加在实现层次",
        "bullets": [
          "“显示几次”这些用法没变，变的是“显示什么、怎么显示”",
          "所以写一个 DisplayImpl 的子类 FileDisplayImpl"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "rawOpen：打开文件并用 mark 记住开头位置，打印上方的装饰框",
          "rawPrint：每次先 reset 回到开头，再逐行输出，所以能重复显示多次",
          "rawClose：打印下方的装饰框并关闭文件",
          "Main 用 CountDisplay 配 FileDisplayImpl，调用 multiDisplay(3) 显示 3 遍"
        ]
      },
      {
        "title": "第四步　两边可以自由搭配",
        "bullets": [
          "把 FileDisplayImpl 交给上一题的 RandomCountDisplay，就能随机次数显示文件",
          "功能类和实现类各写一个，就能得到所有组合"
        ]
      }
    ],
    "memory": [
      "改变“显示方式”就在实现层次加 DisplayImpl 的子类",
      "新实现类可以直接配合所有已有的功能类"
    ],
    "quotes": [
      {
        "text": "这里应该在“类的实现层次”中添加类，我们编写了一个DisplayImpl类的子类——FileDisplayImpl类。",
        "source": "A09-Bridge模式-习题解答.md 第93行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/09-Bridge模式.md"
  },
  {
    "id": "TEXTBOOK-09-03",
    "chapter": "第9章",
    "pattern": "桥接模式",
    "source": "《图解设计模式》习题9-3",
    "stem": "请在本章的示例程序中增加类，以实现图9-4和图9-5的输出效果。",
    "materials": [
      {
        "type": "text",
        "content": "图9-4 输出结果例1"
      },
      {
        "type": "image",
        "src": "images/textbook/p135-b14.png",
        "alt": "图9-4 输出结果例1"
      },
      {
        "type": "text",
        "content": "图9-5 输出结果例2"
      },
      {
        "type": "image",
        "src": "images/textbook/p135-b16.png",
        "alt": "图9-5 输出结果例2"
      },
      {
        "type": "text",
        "content": "输出结果是将“起始字符 → 显示装饰字符若干次 → 结束字符和换行”作为一行，然后循环输出若干行。请注意，每一行的装饰字符的个数都要比前一行多。"
      },
      {
        "type": "text",
        "content": "请思考我们是应当在“类的功能层次结构”中增加类呢？还是应当在“类的实现层次结构”中增加类呢？"
      },
      {
        "type": "text",
        "content": "需要一种新的显示方式，那么应当是在“类的功能层次结构”中增加类吧？不过，又好像只要增加一个新的显示字符串的方法就可以了，那么还是在“类的实现层次结构”中增加类会更好吧？究竟应该如何在 Bridge 模式中增加这个类呢？"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "习题让我们将一个类同时加入到类的功能层次结构中和类的实现层次结构中。但是，如果我们将要增加的类从功能上和实现上分为两个类，将“功能类”加入到类的功能层次结构中，将“实现类”加入类的实现层次结构中，Bridge模式就非常适用于这种场景了。而且，采用这样的实现方法，“功能类”还可以被其他类（CountDisplay类和RandomCountDisplay类）使用，“实现类”也可以在其他类（StringDisplayImpl类和FileDisplayImpl类）上正常工作。"
      },
      {
        "type": "text",
        "content": "我们将习题中的类从实现和功能上分为以下两个类。"
      },
      {
        "type": "list",
        "items": [
          "IncreaseDisplay 类（代码清单 A9-6）:表示逐渐增加显示次数的“功能上”的类"
        ]
      },
      {
        "type": "list",
        "items": [
          "CharDisplayImpl 类（代码清单 A9-7）:表示以字符显示的“实现上”的类"
        ]
      },
      {
        "type": "text",
        "content": "代码清单 A9-6 IncreaseDisplay 类 (IncreaseDisplay.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * IncreaseDisplay：“功能上”的类，负责让每行的显示次数逐渐增加\n */\npublic class IncreaseDisplay extends CountDisplay {\n    private int step; // 递增步长\n    // 传入显示方式和每次增加的步长\n    public IncreaseDisplay(DisplayImpl impl, int step) {\n        super(impl);\n        this.step = step;\n    }\n    // 一共显示 level 行\n    public void increaseDisplay(int level) {\n        int count = 0;\n        for (int i = 0; i < level; i++) {\n            multiDisplay(count);  // 这一行显示 count 次装饰字符\n            count += step;  // 下一行多 step 次\n        }\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A9-7 CharDisplayImpl 类 (CharDisplayImpl.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * CharDisplayImpl：“实现上”的类，用开头、中间、结尾三个字符拼出一行\n */\npublic class CharDisplayImpl extends DisplayImpl {\n    private char head;  // 开头字符\n    private char body;  // 中间重复的装饰字符\n    private char foot;  // 结尾字符\n    public CharDisplayImpl(char head, char body, char foot) {\n        this.head = head;\n        this.body = body;\n        this.foot = foot;\n    }\n    // 打印开头字符，不换行\n    public void rawOpen() {\n        System.out.print(head);\n    }\n    // 打印一个装饰字符，不换行\n    public void rawPrint() {\n        System.out.print(body);\n    }\n    // 打印结尾字符并换行\n    public void rawClose() {\n        System.out.println(foot);\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A9-8 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：两个对象使用不同的字符和步长\n * 原书第一行少了一个右括号，应为 new IncreaseDisplay(new CharDisplayImpl('<', '*', '>'), 1)\n */\npublic class Main {\n    public static void main(String[] args) {\n        IncreaseDisplay d1 = new IncreaseDisplay(new CharDisplayImpl('<', '*', '>', 1);\n        IncreaseDisplay d2 = new IncreaseDisplay(new CharDisplayImpl('|', '#', '-') , 2);\n        d1.increaseDisplay(4);  // 4 行，每行多 1 个 *\n        d2.increaseDisplay(6);  // 6 行，每行多 2 个 #\n    }\n}"
      },
      {
        "type": "text",
        "content": "图A9-7 运行结果"
      },
      {
        "type": "code",
        "language": "text",
        "content": "<>\n<*>>\n<**>\n<***>\n|- \n| # - \n| # # # - \n| # # # # # - \n| # # # # # # - \n| # # # # # # # -"
      },
      {
        "type": "text",
        "content": "类图请参见图 A9-8。类图中包含了示例程序中的所有类和练习题中的所有类。大家可以看出图中左侧是类的功能层次结构，右侧是类的实现层次结构，中间是通过委托连接它们二者的桥梁吗？"
      },
      {
        "type": "text",
        "content": "图A9-8 增加了IncreaseDisplay类和CharDisplayImpl类的类图"
      },
      {
        "type": "image",
        "src": "images/textbook/p348-b04.png",
        "alt": "图A9-8 增加了IncreaseDisplay类和CharDisplayImpl类的类图"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目难在哪",
        "bullets": [
          "要输出“开头字符＋若干装饰字符＋结尾字符”，而且每行比上一行多",
          "这既像新用法（逐行递增），又像新显示方式（用字符拼），不知道该加在哪一边"
        ]
      },
      {
        "title": "第二步　答案的思路：拆成两个类",
        "bullets": [
          "原书在这里列出两个类，题库答案中这两条没有显示出来，内容见附录 A",
          "IncreaseDisplay：功能上的类，负责“每行次数逐渐增加”，加到功能层次",
          "CharDisplayImpl：实现上的类，负责“用开头、中间、结尾三个字符显示”，加到实现层次"
        ]
      },
      {
        "title": "第三步　两个类的代码怎么配合",
        "bullets": [
          "IncreaseDisplay 继承 CountDisplay，increaseDisplay(level) 循环 level 次，每次调用 multiDisplay(count)，count 每次加 step",
          "CharDisplayImpl 的 rawOpen 打印开头字符，rawPrint 打印一个装饰字符，rawClose 打印结尾字符并换行",
          "multiDisplay(count) 会先 open，再 print count 次，再 close，正好拼出一行",
          "d1 用 '<' '*' '>' 和步长 1，得到 <>、<*>、<**>、<***>"
        ]
      },
      {
        "title": "第四步　拆开的好处",
        "bullets": [
          "IncreaseDisplay 也能配 StringDisplayImpl、FileDisplayImpl 使用",
          "CharDisplayImpl 也能被 CountDisplay、RandomCountDisplay 使用",
          "如果写成一个类，这两种能力就绑死在一起，不能再和别的类组合"
        ]
      }
    ],
    "memory": [
      "需求同时涉及“用法”和“显示方式”时，拆成一个功能类和一个实现类",
      "Bridge 模式的价值就在两边可以自由组合"
    ],
    "quotes": [
      {
        "text": "IncreaseDisplay 类（代码清单 A9-6）:表示逐渐增加显示次数的“功能上”的类",
        "source": "A09-Bridge模式-习题解答.md 第195行"
      },
      {
        "text": "CharDisplayImpl 类（代码清单 A9-7）:表示以字符显示的“实现上”的类",
        "source": "A09-Bridge模式-习题解答.md 第197行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/09-Bridge模式.md"
  },
  {
    "id": "TEXTBOOK-10-01",
    "chapter": "第10章",
    "pattern": "策略模式",
    "source": "《图解设计模式》习题10-1",
    "stem": "请编写一个随机出手势的 RandomStrategy 类。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "如代码清单 A10-1 所示。由于我们让其随意出手势，因此 study 方法是空方法。"
      },
      {
        "type": "text",
        "content": "代码清单 A10-1 RandomStrategy 类 (RandomStrategy.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * RandomStrategy：随机出手势的具体策略，实现 Strategy 接口\n */\nimport java.util.Random;\n\npublic class RandomStrategy implements Strategy {\n    private Random random;  // 随机数生成器\n    // 用种子创建随机数生成器，同一个种子会得到同样的随机序列\n    public RandomStrategy(int seed) {\n        random = new Random(seed);\n    }\n    // 随机出拳不需要根据输赢学习，所以是空方法\n    public void study(boolean win) {\n    }\n    // 下一局出什么\n    public Hand nextHand() {\n        return Hand.getHand(random.nextInt(3));  // 从 0、1、2（石头、剪刀、布）中随机选一个\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A10-2 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：Taro 用 ProbStrategy，Hana 用新写的 RandomStrategy，对战 10000 局\n * Player 类不用改，换策略只是换传进去的对象\n */\npublic class Main {\n    public static void main(String[] args) {\n        if (args.length != 2) {\n            System.out.println(\"Usage: java Main randomseed1 randomseed2\");\n            System.out.println(\"Example: java Main 314 15\");\n            System.exit(0);\n        }\n        // 从命令行读入两个随机种子\n        int seed1 = Integer.parseInt(args[0]);\n        int seed2 = Integer.parseInt(args[1]);\n        // 选手 1 使用概率策略\n        Player player1 = new Player(\"Taro\", new ProbStrategy(seed1));\n        // 选手 2 使用随机策略\n        Player player2 = new Player(\"Hana\", new RandomStrategy(seed2));\n        for (int i = 0; i < 10000; i++) {\n            // 双方各自按自己的策略出拳\n            Hand nextHand1 = player1.nextHand();\n            Hand nextHand2 = player2.nextHand();\n// 选手 1 赢\nif (nextHand1.isStrongerThan(nextHand2)) {\n    System.out.println(\"Winner:\" + player1);\n    player1.win();\n    player2.lose();\n// 选手 2 赢\n} else if (nextHand2.isStrongerThan(nextHand1)) {\n    System.out.println(\"Winner:\" + player2);\n    player1.lose();\n    player2.win();\n// 平局\n} else {\n    System.out.println(\"Even...\");\n    player1.even();\n    player2.even();\n}\n}\n// 最后输出双方的总战绩\nSystem.out.println(\"Total result:\");\nSystem.out.println(player1.toString());\nSystem.out.println(player2.toString());"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要做什么",
        "bullets": [
          "猜拳程序里已有 WinningStrategy、ProbStrategy 两种策略",
          "再写一个完全随机出手势的策略"
        ]
      },
      {
        "title": "第二步　要实现哪个角色",
        "bullets": [
          "Strategy 接口规定了 nextHand()（出什么）和 study(win)（根据输赢学习）",
          "新类 RandomStrategy 是 ConcreteStrategy"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "构造方法接收随机种子，创建 Random",
          "nextHand() 返回 Hand.getHand(random.nextInt(3))，在石头、剪刀、布中随机选一个",
          "随机出拳不需要学习，所以 study 是空方法",
          "Main 让 Taro 用 ProbStrategy、Hana 用 RandomStrategy 对战，Player 类本身不用改"
        ]
      }
    ],
    "memory": [
      "新策略只要实现 Strategy 接口，就能交给 Player 使用",
      "接口里的方法即使用不上，也要写一个空实现"
    ],
    "quotes": [
      {
        "text": "由于我们让其随意出手势，因此 study 方法是空方法。",
        "source": "A10-Strategy模式-习题解答.md 第11行"
      },
      {
        "text": "ConcreteStrategy 角色负责实现 Strategy 角色的接口（API），即负责实现具体的策略（战略、方向、方法和算法）。",
        "source": "10-Strategy模式.md 第384行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/10-Strategy模式.md"
  },
  {
    "id": "TEXTBOOK-10-02",
    "chapter": "第10章",
    "pattern": "策略模式",
    "source": "《图解设计模式》习题10-2",
    "stem": "Java 在本章的示例程序中，Hand 类（代码清单 10-1）的 fight 方法负责判断平局。在进行判断时，它使用的表达式不是 this.handValue == h.value，而是 this == h，请问为什么可以这样写？",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "这是因为本来 Hand 类的实例就只有 3 个（石头、剪刀、布）。如果两个实例中的 handvalue 字段的值相等，那么也就意味着它们是相同的实例。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "Hand 判断平局时写的是 this == h，比较的是对象地址，而不是手势值",
          "问为什么这样也是对的"
        ]
      },
      {
        "title": "第二步　Hand 的实例是怎么来的",
        "bullets": [
          "Hand 类事先创建好石头、剪刀、布三个实例，外部只能通过 getHand() 取",
          "同一种手势永远是同一个对象"
        ]
      },
      {
        "title": "第三步　所以可以直接比地址",
        "bullets": [
          "两个手势值相同，就一定是同一个实例，== 为真",
          "这和单例的思路一样：实例个数固定，就可以用 == 判断相等"
        ]
      }
    ],
    "memory": [
      "实例数量固定且不会重复创建时，可以用 == 判断是否相同"
    ],
    "quotes": [
      {
        "text": "这是因为本来 Hand 类的实例就只有 3 个（石头、剪刀、布）。",
        "source": "A10-Strategy模式-习题解答.md 第73行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/10-Strategy模式.md"
  },
  {
    "id": "TEXTBOOK-10-03",
    "chapter": "第10章",
    "pattern": "策略模式",
    "source": "《图解设计模式》习题10-3",
    "stem": "Java 某位开发人员在编写 WinningStrategy 类（代码清单 10-3）时，won 字段的定义不是 private boolean won = false;，而是写成了如下这样。",
    "materials": [
      {
        "type": "text",
        "content": "但是，从运行结果来看，却与加上“= false”时是完全一样的。请问这是为什么呢？"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "在 Java 中，没有被显式地初始化的字段会被自动初始化。boolean 类型的字段会被初始化为 false；数值类型的字段会被初始化为 0；引用类型的字段会被初始化为 null。"
      },
      {
        "type": "text",
        "content": "注意 虽然字段会被自动初始化，但局部变量不会被自动初始化。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "WinningStrategy 的 won 字段没有写 = false，运行结果却和写了一样"
        ]
      },
      {
        "title": "第二步　Java 的默认值规则",
        "bullets": [
          "类的字段没有显式赋值时，Java 会自动给默认值",
          "boolean 默认 false，数字默认 0，引用类型默认 null",
          "所以 won 一开始就是 false"
        ]
      },
      {
        "title": "第三步　要注意的例外",
        "bullets": [
          "方法里的局部变量不会自动初始化，不赋值就使用会编译报错"
        ]
      }
    ],
    "memory": [
      "字段有默认值：boolean 为 false，数字为 0，引用为 null",
      "局部变量没有默认值"
    ],
    "quotes": [
      {
        "text": "在 Java 中，没有被显式地初始化的字段会被自动初始化。",
        "source": "A10-Strategy模式-习题解答.md 第79行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/10-Strategy模式.md"
  },
  {
    "id": "TEXTBOOK-10-04",
    "chapter": "第10章",
    "pattern": "策略模式",
    "source": "《图解设计模式》习题10-4",
    "stem": "下面的代码清单 10-7 至代码清单 10-10 定义了用于排序的类和接口。程序的运行结果如图 10-4 所示。这里使用的排序算法是选择排序 (selection sort)。请编写一个表示其他算法（任何算法都行）的类，并让它实现 Sorter 接口。",
    "materials": [
      {
        "type": "text",
        "content": "代码清单 10-7 Sorter 接口 (Sorter.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * Sorter：策略接口，所有排序算法都实现它\n */\nimport java.lang.Comparable;\n\npublic interface Sorter {\n    public abstract void sort(Comparable[] data);  // 对数组排序；元素实现 Comparable，才能用 compareTo 比大小\n}"
      },
      {
        "type": "text",
        "content": "代码清单 10-8 SelectionSorter 类 (SelectionSorter.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * SelectionSorter：选择排序（一个具体策略）\n * 每一轮从剩下的元素中找出最小的，放到前面\n */\npublic class SelectionSorter implements Sorter {\n    public void sort(Comparable[] data) {\n        // 第 i 轮：确定第 i 个位置放谁\n        for (int i = 0; i < data.length - 1; i++) {\n            int min = i;  // 先假设第 i 个最小\n            for (int j = i + 1; j < data.length; j++) {\n                // 发现更小的，就记下它的位置\n                if (data[min].compareTo(data[j]) > 0) {\n                    min = j;\n                }\n            }\n            // 把最小的和第 i 个交换位置\n            Comparable passingplace = data[min];\n            data[min] = data[i];\n            data[i] = passingplace;\n        }\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 10-9 SortAndPrint 类 (SortAndPrint.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * SortAndPrint：环境类（Context），持有一个排序策略\n */\npublic class SortAndPrint {\n    Comparable[] data;\n    Sorter sorter;  // 使用哪种排序算法，由构造时传入\n    public SortAndPrint(Comparable[] data, Sorter sorter) {\n        this.data = data;\n        this.sorter = sorter;\n    }\n    // 排序前打印一次，排序，再打印一次\n    public void execute() {\n        print();\n        sorter.sort(data);  // 具体怎么排交给策略对象\n        print();\n    }\n    // 逐个打印数组元素\n    public void print() {\n        for (int i = 0; i < data.length; i++) {\n            System.out.print(data[i] + \", \");\n        }\n        System.out.println(\"\");\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 10-10 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：使用选择排序\n * 原书数组第一个元素写作 Dummy，运行结果中是 Dumpty，应以 Dumpty 为准\n */\npublic class Main {\n    public static void main(String[] args) {\n        String[] data = {\n            \"Dummy\", \"Bowman\", \"Carroll\", \"Elfland\", \"Alice\",\n        };\n        // 把数据和排序策略交给环境类\n        SortAndPrint sap = new SortAndPrint(data, new SelectionSorter());\n        sap.execute();\n    }\n}"
      },
      {
        "type": "text",
        "content": "图10-4 运行结果"
      },
      {
        "type": "code",
        "language": "text",
        "content": "Dumpty, Bowman, Carroll, Elfland, Alice,      ←排序前\nAlice, Bowman, Carroll, Dumpty, Elfland,   ←排序后"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "QuickSorter 类（代码清单 A10-3）使用了快速排序算法。"
      },
      {
        "type": "text",
        "content": "代码清单 A10-3 QuickSorter 类 (QuickSorter.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * QuickSorter：快速排序（新的具体策略）\n * 思路：取中间元素作基准，小的换到左边、大的换到右边，再分别对左右两部分递归排序\n */\npublic class QuickSorter implements Sorter {\n    Comparable[] data;\n    // 实现 Sorter 接口：对整个数组排序\n    public void sort(Comparable[] data) {\n        this.data = data;\n        qsort(0, data.length - 1);\n    }\n    // 对 pre 到 post 这一段排序\n    private void qsort(int pre, int post) {\n        int saved_pre = pre;\n        int saved_post = post;\n        Comparable mid = data[(pre + post) / 2];  // 取中间元素作为基准\n        do {\n            // 从左往右，找到第一个不小于基准的元素\n            while (data[pre].compareTo(mid) < 0) {\n                pre++;\n            }\n            // 从右往左，找到第一个不大于基准的元素\n            while (mid.compareTo(data[post]) < 0) {\n                post--;\n}\n    // 把这两个元素交换，然后两边各前进一步\n    if (pre <= post) {\n        Comparable tmp = data[pre];\n        data[pre] = data[post];\n        data[post] = tmp;\n        pre++;\n        post--;\n    }\n} while (pre <= post);\n// 左半部分还有元素，继续排序\nif (saved_pre < post) {\n    qsort(saved_pre, post);\n}\n// 右半部分还有元素，继续排序\nif (pre < saved_post) {\n    qsort(pre, saved_post);\n}\n}\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A10-4 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：只把排序策略换成 QuickSorter，SortAndPrint 一行不改\n */\npublic class Main {\n    public static void main(String[] args) {\n        String[] data = {\n            \"Dumpty\", \"Bowman\", \"Carroll\", \"Elfland\", \"Alice\",\n        };\n        // 换算法只需换这个参数\n        SortAndPrint sap = new SortAndPrint(data, new QuickSorter());\n        sap.execute();\n    }\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要做什么",
        "bullets": [
          "已有 Sorter 接口和选择排序 SelectionSorter",
          "再写一个别的排序算法，也实现 Sorter"
        ]
      },
      {
        "title": "第二步　对应策略模式的角色",
        "bullets": [
          "Strategy：Sorter 接口，声明 sort(Comparable[] data)",
          "ConcreteStrategy：SelectionSorter，以及新写的 QuickSorter",
          "Context：SortAndPrint，持有一个 Sorter，execute() 时调用它排序"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "QuickSorter 实现 sort，内部用快速排序：取中间元素作基准，小的放左边、大的放右边，再分别递归",
          "元素类型是 Comparable，所以用 compareTo 比较大小，对字符串也适用",
          "Main 只把 new SelectionSorter() 换成 new QuickSorter()，SortAndPrint 一行不改",
          "两种算法输出的排序结果相同，只是速度不同"
        ]
      }
    ],
    "memory": [
      "换算法只换传给 Context 的策略对象",
      "所有策略实现同一个接口，Context 才能无差别调用"
    ],
    "quotes": [
      {
        "text": "QuickSorter 类（代码清单 A10-3）使用了快速排序算法。",
        "source": "A10-Strategy模式-习题解答.md 第87行"
      },
      {
        "text": "使用 Strategy 模式可以整体地替换算法。",
        "source": "10-Strategy模式.md 第422行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/10-Strategy模式.md"
  },
  {
    "id": "TEXTBOOK-11-01",
    "chapter": "第11章",
    "pattern": "组合模式",
    "source": "《图解设计模式》习题11-1",
    "stem": "请思考一下，除了文件系统以外，还有哪些地方使用了 Composite 模式。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "例如，HTML 中的列表（ul 标签、ol 标签、dl 标签）和表格等都可以用 Composite 模式表示。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "文件系统是组合模式的典型例子，题目要再找几个类似的场景"
        ]
      },
      {
        "title": "第二步　判断一个场景能不能用组合模式",
        "bullets": [
          "看它是不是“容器里能放内容，也能放容器”的树形结构",
          "再看容器和内容能不能用同一种方式处理"
        ]
      },
      {
        "title": "第三步　为什么答案举 HTML 列表和表格",
        "bullets": [
          "列表 ul 里放 li，li 里还能再放一个 ul，层层嵌套",
          "表格里的单元格中也能再放一个表格",
          "生成 HTML 时，不管是一个列表项还是整个列表，都是“输出自己的标签和内容”，处理方式一致"
        ]
      }
    ],
    "memory": [
      "能层层嵌套、并且对整体和部分一视同仁的结构，就可以用组合模式",
      "例子：文件夹、HTML 列表、表格、公司组织架构"
    ],
    "quotes": [
      {
        "text": "例如，HTML 中的列表（ul 标签、ol 标签、dl 标签）和表格等都可以用 Composite 模式表示。",
        "source": "A11-Composite模式-习题解答.md 第11行"
      },
      {
        "text": "Composite 模式通过 Component 角色使容器（Composite 角色）和内容（Leaf 角色）具有一致性。",
        "source": "11-Composite模式.md 第382行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/11-Composite模式.md"
  },
  {
    "id": "TEXTBOOK-11-02",
    "chapter": "第11章",
    "pattern": "组合模式",
    "source": "《图解设计模式》习题11-2",
    "stem": "请为示例程序中的 Entry 类（子类）的实例增加一个获取完整路径的功能。例如，我们需要从 File 的实例中获取如下的完整路径。",
    "materials": [
      {
        "type": "text",
        "content": "\"/root/usr/yuki/Composite.java\""
      },
      {
        "type": "text",
        "content": "这时，应该修改示例程序中的哪些类呢？应该怎样修改呢？"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "有许多实现方法。这里我们在Entry类中定义一个parent字段（它表示当前目录条目的上一级文件夹）。根目录（最上级目录）的parent是null。然后通过从Entry类接收到的实例，即parent字段开始向上追溯来显示出完整的目录路径。需要修改的是Entry类和Directory类。可以通过Directory类的add方法改变parent字段。"
      },
      {
        "type": "text",
        "content": "代码清单 A11-1 修改后的 Entry 类（Entry.java）"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * Entry：组合模式中的 Component，新增 parent 字段和 getFullName()\n * 注意：getFullName 中的 StringBufferfullname、Torque、Entity 是原书识别错误\n * 原意是：StringBuffer fullname = new StringBuffer(); 循环中 fullname.insert(0, \"/\" + entry.getName()); entry = entry.parent;\n */\npublic abstract class Entry {\n    protected Entry parent;  // 新增：上一级文件夹，根目录的 parent 为 null\n    public abstract String getName();\n    public abstract int getSize();\n    // 默认不能添加子项，只有 Directory 会重写它\n    public Entry add(Entry entry) throws FileTreatmentException {\nthrow new FileTreatmentException();\n}\npublic void printList() {\n    printList(\"\");\n}\nprotected abstract void printList(String prefix);\npublic String toString() {\n    return getName() + \" (\" + getSize() + \")\";\n}\n// 从自己开始，一级级往上找，把名字依次插到最前面\npublic String getFullName() {\n    StringBufferfullname = new StringBuffer();\n    Entry entry = this;\n    do {\n        Torque\n        Entity.insert(0, \"/\" + entry.getName());\n        Entity = entry.parent;\n    } while (entry != null);  // 走到根目录（parent 为 null）时结束\n    return fullname.toString();\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A11-2 修改后的 Directory 类 (Directory.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * Directory：组合模式中的 Composite（文件夹）\n * add 时顺便设置子项的 parent，建树的同时接好“向上”的链接\n */\nimport java.util.Iterator;\nimport java.util.ArrayList;\n\npublic class Directory extends Entry {\n    private String name;\n    private ArrayList directory = new ArrayList();  // 保存子项：文件或文件夹\n    public Directory(String name) {\n        this.name = name;\n    }\n    public String getName() {\n        return name;\n    }\n    // 文件夹大小：把所有子项的大小加起来（子文件夹会递归计算）\n    public int getSize() {\n        int size = 0;\n        Iterator it = directory.iterator();\n        while (it.hasNext()) {\n            Entry entry = (Entry)it.next();\n            size += entry.getSize();\n        }\n        return size;\n    }\n    // 添加子项\n    public Entry add(Entry entry) {\n        directory.add(entry);\n        entry.parent = this;  // 新增：告诉子项“我是你的上一级”\n        return this;\n    }\n    // 打印自己，再递归打印所有子项\n    protected void printList(String prefix) {\n        System.out.println(prefix + \"/\" + this);\n        Iterator it = directory.iterator();\n        while (it.hasNext()) {\n            Entry entry = (Entry)it.next();\n            entry.printList(prefix + \"/\" + name);\n        }\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A11-3 修改后的 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：搭建 /root/usr/yuki/Composite.java，再输出完整路径\n * 注意：getFullYear、getIDFullName 是原书识别错误，都应为 getFullName\n */\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            Directory rootdir = new Directory(\"root\");\n\n            Directory usrdir = new Directory(\"usr\");\n            rootdir.add(usrdir);  // root 下面放 usr\n\n            Directory yuki = new Directory(\"yuki\");\n            usrdir.add(yuki);  // usr 下面放 yuki\n\n            File file = new File(\"Composite.java\", 100);\n            yuki.add(file);  // yuki 下面放 Composite.java\n            rootdir.printList();\n\n            System.out.println(\"\");\n            // 输出文件的完整路径\n            System.out.println(\"file = \" + file.getFullYear());\n            System.out.println(\"yuki = \" + yuki.getIDFullName());\n        } catch (FileTreatmentException e) {\n            e.printStackTrace();\n        }\n    }\n}"
      },
      {
        "type": "text",
        "content": "图A11-1 运行结果"
      },
      {
        "type": "code",
        "language": "text",
        "content": "/root (100)\n/root/usr (100)\n/root/usr/yuki (100)\n/root/usr/yuki/Composite.java (100)\n\nfile = /root/usr/yuki/Composite.java\nyuki = /root/usr/yuki"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要加什么功能",
        "bullets": [
          "要从一个文件或文件夹得到完整路径，例如 /root/usr/yuki/Composite.java",
          "原来的树只记录“父找子”，没办法从子节点往上找"
        ]
      },
      {
        "title": "第二步　改动落在哪些角色",
        "bullets": [
          "Component：Entry，所有节点的父类，加一个 parent 字段和 getFullName() 方法",
          "Composite：Directory，在 add 时顺便告诉子节点“我是你的上级”",
          "Leaf：File 不用改"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "Directory.add(entry) 里加一句 entry.parent = this，建树的同时把向上的链接也接好",
          "根目录没有被 add 到别处，所以它的 parent 是 null",
          "getFullName() 从自己开始，不断在前面插入“/名字”，再走到 parent，直到 parent 为 null",
          "题库答案代码在 getFullName 和 Main 中有识别错误（如 Torque、Entity、getFullYear），按上下文应分别是对 fullname、entry 的操作和 getFullName() 调用"
        ]
      },
      {
        "title": "第四步　为什么放在 Entry 里",
        "bullets": [
          "文件和文件夹都需要完整路径，放在共同的父类里，两者都能直接用",
          "这体现了组合模式“容器和内容一致”的好处"
        ]
      }
    ],
    "memory": [
      "树形结构要往上找，就给每个节点加 parent 字段",
      "parent 在容器的 add 方法里设置，根节点的 parent 为 null"
    ],
    "quotes": [
      {
        "text": "需要修改的是Entry类和Directory类。可以通过Directory类的add方法改变parent字段。",
        "source": "A11-Composite模式-习题解答.md 第17行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/11-Composite模式.md"
  },
  {
    "id": "TEXTBOOK-12-01",
    "chapter": "第12章",
    "pattern": "装饰模式",
    "source": "《图解设计模式》习题12-1",
    "stem": "请在本章的示例程序中增加一个 UpDownBorder 类，用于为字符串装饰上下两条边框。UpDownBorder 类的使用方法如代码清单 12-7 所示，运行结果如图 12-6 所示。",
    "materials": [
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * UpDownBorder 的使用方法：装饰器可以任意组合、层层嵌套\n * 原书最后几行的括号和逗号排版有误，意思是用 FullBorder 包住整套嵌套装饰\n */\npublic class Main {\n    public static void main(String[] args) {\n        // b1：不加装饰的字符串\n        Display b1 = new StringDisplay(\"Hello, world.\");\n        // b2：在 b1 上下加 - 边框\n        Display b2 = new UpDownBorder(b1, '-');\n        // b3：在 b2 左右再加 * 边框\n        Display b3 = new SideBorder(b2, '*');\n        b1.show();\n        b2.show();\n        b3.show();\n        // b4：从里到外依次是 字符串 → 左右 * → 上下 = → 左右 | → 上下 / → 整圈边框\n        // 阅读时从最里层的 new StringDisplay 往外看\n        Display b4 =\n            new FullBorder(\n                new UpDownBorder(\n                    new SideBorder(\n                        new UpDownBorder(\n                            new SideBorder(\n                                new StringDisplay(\"你好，世界。\"),\n                                '*'\n                            ),\n                            '='\n                        ),\n                            '|'\n                        ),\n                            '/', )\n    );\n    b4.show();\n}\n}"
      },
      {
        "type": "text",
        "content": "图12-6 运行结果①"
      },
      {
        "type": "code",
        "language": "text",
        "content": "Hello, world.\n-----------------\nHello, world.\n-----------------\n*--------*\n*Hello, world.*\n*--------*\n+----------+\n|\"/\"/\"/\"/\"/|\"/\n||========================||\n||* 你好，世界。* ||\n||========================||\n|\"/\"/\"/\"/\"/\"/|\"/\n+----------+\n←b1.show()的显示结果\n←b2.show()的显示结果\n←b3.show()的显示结果\n←b4.show()的显示结果"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "答案如下。"
      },
      {
        "type": "text",
        "content": "代码清单 A12-1 UpDownBorder 类 (UpDownBorder.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * UpDownBorder：新的具体装饰器（ConcreteDecorator），只加上下两条边框\n * 继承 Border，Border 中保存着被装饰的 display\n */\npublic class UpDownBorder extends Border {\n    private char borderChar;                      // 表示装饰边框的字符\n    public UpDownBorder(Display display, char ch) { // 通过构造函数指定 Display 和装饰边框字符\n        super(display);  // 把被装饰的对象交给父类 Border 保存\n        this.borderChar = ch;\n    }\n    public int getColumns() {                       // 字符数与要显示的内容的字符数相同\n        // 上下边框不改变宽度\n        return display.getColumns();\n    }\n    public int getRows() {                       // 行数是内容的行数加上上下边框\n// 高度：上边框 1 行 + 内容行数 + 下边框 1 行\nreturn 1 + display.getRows() + 1;\n}\npublic String getRowText(int row) { // 获取指定行的内容\n    // 第一行和最后一行是边框\n    if (row == 0 || row == getRows() - 1) {\n        return makeLine(borderChar, getColumns());\n    } else {\n        // 中间的行取被装饰物的内容，因为上面多了一行，行号要减 1\n        return display.getRowText(row - 1);\n    }\n}\nprivate String makeLine(char ch, int count) { // 生成一个由 count 个字符 ch 连续组成\n// 的字符串\n    StringBuffer buf = new StringBuffer();\n    for (int i = 0; i < count; i++) {\n        buf.append(ch);\n    }\n    return buf.toString();\n}\n}"
      },
      {
        "type": "text",
        "content": "在FullBorder类（代码清单12-5）中也有一个makeLine方法。因此，我们也可以将makeLine方法放置在父类Border类中，并设置它的可见性为protected。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要加什么",
        "bullets": [
          "新写一个装饰 UpDownBorder，只在内容的上下各加一条边框",
          "要能和 SideBorder、FullBorder 任意叠加"
        ]
      },
      {
        "title": "第二步　它扮演哪个角色",
        "bullets": [
          "Component：Display，规定 getColumns、getRows、getRowText",
          "Decorator：Border，持有被装饰的 display",
          "UpDownBorder 是新的 ConcreteDecorator，继承 Border"
        ]
      },
      {
        "title": "第三步　三个方法为什么这样写",
        "bullets": [
          "getColumns：上下边框不改变宽度，直接返回被装饰内容的宽度",
          "getRows：上下各多一行，所以是 1 + display.getRows() + 1",
          "getRowText：第 0 行和最后一行返回边框线，中间行返回 display.getRowText(row - 1)，减 1 是因为上面多了一行边框",
          "makeLine 生成 count 个相同字符组成的线"
        ]
      },
      {
        "title": "第四步　可以怎样改进",
        "bullets": [
          "FullBorder 里也有一样的 makeLine，可以把它移到父类 Border 并设成 protected，两个子类共用"
        ]
      }
    ],
    "memory": [
      "写装饰器：宽、高、每行内容三个方法都要考虑“比被装饰物多了什么”",
      "取内部内容时注意行号要减去新增的边框行"
    ],
    "quotes": [
      {
        "text": "因此，我们也可以将makeLine方法放置在父类Border类中，并设置它的可见性为protected。",
        "source": "A12-Decorator模式-习题解答.md 第48行"
      },
      {
        "text": "Decorator 模式可以像改变被装饰物的边框或是为被装饰物添加多重边框那样，来增加类的功能。",
        "source": "12-Decorator模式.md 第421行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/12-Decorator模式.md"
  },
  {
    "id": "TEXTBOOK-12-02",
    "chapter": "第12章",
    "pattern": "装饰模式",
    "source": "《图解设计模式》习题12-2",
    "stem": "请为示例程序编写一个可以显示多行字符串MultiStringDisplay类，它在Decorator模式中扮演ConcreteComponent角色。MultiStringDisplay类的使用方法如代码清单12-8所示，运行结果如图12-7所示。",
    "materials": [
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * MultiStringDisplay 的使用方法：多行内容也能被已有的边框装饰\n */\npublic class Main {\n    public static void main(String[] args) {\n        MultiStringDisplay md = new MultiStringDisplay();\n        // 依次添加三行文字\n        md.add(\"早上好。\");\n        md.add(\"下午好。\");\n        md.add(\"晚安，明天见。\");\n        md.show();  // 不加装饰直接显示\n\n        // 左右加 # 边框\n        Display d1 = new SideBorder(md, '#');\n        d1.show();\n\n        // 加整圈边框\n        Display d2 = new FullBorder(md);\n        d2.show();\n    }\n}"
      },
      {
        "type": "text",
        "content": "<small>① 原文源代码的编码标准是 Shift\\_JIS，翻译为中文后编码标准变为了 UTF-8，一个全角字符占用的字节发生了变化，因此实际代码的运行结果与图 12-6 不同。——译者注</small>"
      },
      {
        "type": "text",
        "content": "图12-7 运行结果①"
      },
      {
        "type": "text",
        "content": "<table><tr><td>早上好。</td><td>←md.show()的显示结果</td></tr><tr><td>下午好。</td><td></td></tr><tr><td>晚安,明天见。</td><td></td></tr><tr><td>#早上好。</td><td rowspan=\"3\">←b1.show()的显示结果</td></tr><tr><td>#下午好。</td></tr><tr><td>#晚安,明天见。</td></tr><tr><td>+----+</td><td rowspan=\"4\">←b2.show()的显示结果</td></tr><tr><td>|早上好。</td></tr><tr><td>|下午好。</td></tr><tr><td>|晚安,明天见。</td></tr><tr><td>+----+</td><td></td></tr></table>"
      },
      {
        "type": "text",
        "content": "<small>① 原文源代码的编码标准是 Shift\\_JIS，翻译为中文后编码标准变为了 UTF-8，一个全角字符占用的字节发生了变化，因此实际代码的运行结果与图 12-7 不同。——译者注</small>"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "答案如下。为了保持宽度固定，updateColumn 方法会在字符串的最后补上空格。"
      },
      {
        "type": "text",
        "content": "代码清单 A12-2 MultiStringDisplay 类 (MultiStringDisplay.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * MultiStringDisplay：新的被装饰物（ConcreteComponent），可以显示多行\n * 只要实现 getColumns、getRows、getRowText，已有的装饰器就能直接用\n * 为了让外面的边框对齐，较短的行会在末尾补空格\n */\nimport java.util.ArrayList;\n\npublic class MultiStringDisplay extends Display {\n    private ArrayList body = new ArrayList();          // 要显示的字符串\n    private int columns = 0;                       // 最大字符数\n    // 加一行，并重新计算宽度\n    public void add(String msg) {                    // 添加字符串\n        body.add(msg);\n        updateColumn(msg);\n    }\n    public int getColumns() {                     // 获取字符数\n        return columns;\n    }\n    public int getRows() {                      // 获取行数\n        return body.size();\n    }\n    public String getRowText(int row) {                 // 获取指定行的内容\n        return (String)body.get(row);\n    }\n    // 更新最大宽度，并把所有行补成一样宽\n    private void updateColumn(String msg) {           // 更新字符数\n        // 新行更长，就把它的长度作为最大宽度\n        if (msg.getBytes().length > columns) {\n            columns = msg.getBytes().length;\n        }\n        // 检查每一行，不够宽的在末尾补空格\n        for (int row = 0; row < body.size(); row++) {\n            int fills = columns - ((String)body.get(row)).getBytes().length;\n            if (fills > 0) {\n                body.set(row, body.get(row) + spaces(fills));\n            }\n        }\n    }\n    // 生成 count 个空格\n    private String spaces(int count) {                 // 补上空格\nStringBuffer buf = new StringBuffer();\nfor (int i = 0; i < count; i++) {\n    buf.append(' ');\n}\nreturn buf.toString();\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要加什么",
        "bullets": [
          "原来的 StringDisplay 只能显示一行",
          "要写一个能显示多行的 MultiStringDisplay，并且能被已有的边框装饰"
        ]
      },
      {
        "title": "第二步　它扮演哪个角色",
        "bullets": [
          "它是 ConcreteComponent（被装饰的具体内容），继承 Display",
          "只要实现好 getColumns、getRows、getRowText，SideBorder、FullBorder 就能直接装饰它"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "body 用 ArrayList 保存每一行，add 时加入新行",
          "getRows 返回行数，getRowText 返回指定行",
          "columns 记录最长那一行的宽度",
          "updateColumn 在每次加行后，给较短的行末尾补空格，让所有行一样宽，这样外面的边框才能对齐"
        ]
      },
      {
        "title": "第四步　这道题说明了什么",
        "bullets": [
          "新增被装饰对象时，装饰器一行都不用改",
          "装饰器只依赖 Display 接口，不关心里面是一行还是多行"
        ]
      }
    ],
    "memory": [
      "新增 ConcreteComponent 只需实现 Component 的方法，已有装饰器自动可用",
      "多行显示要补齐宽度，否则边框对不齐"
    ],
    "quotes": [
      {
        "text": "为了保持宽度固定，updateColumn 方法会在字符串的最后补上空格。",
        "source": "A12-Decorator模式-习题解答.md 第54行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/12-Decorator模式.md"
  },
  {
    "id": "TEXTBOOK-13-01",
    "chapter": "第13章",
    "pattern": "访问者模式",
    "source": "《图解设计模式》习题13-1",
    "stem": "请在本章的示例程序中增加一个 FileFindVisitor 类，用于将带有指定后缀名的文件汇集起来。FileFindVisitor 类的使用方法如代码清单 13-9 所示，运行结果如图 13-5 所示。在本例中，它将所有后缀名为 .html 的文件都汇集起来了。",
    "materials": [
      {
        "type": "text",
        "content": "代码清单 13-9 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * FileFindVisitor 的使用方法（第一部分）：先搭一棵文件树\n * 本段末尾的 HTML files are: 等三行是运行结果，被识别时混进了代码中\n */\nimport java.util.Iterator;\n\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            // 根目录下有 bin、tmp、usr 三个文件夹\n            Directory rootdir = new Directory(\"root\");\n            Directory bindir = new Directory(\"bin\");\n            Directory tmpdir = new Directory(\"tmp\");\n            Directory usrdir = new Directory(\"usr\");\n            rootdir.add(bindir);\n            rootdir.add(tmpdir);\n            rootdir.add(usrdir);\n            // bin 下放两个文件\n            bindir.add(new File(\"vi\", 10000));\n            bindir.add(new File(\"latex\", 20000));\n\n            // usr 下准备三个用户文件夹\n            Directory yuki = new Directory(\"yuki\");\n            Directory hanako = new Directory(\"hanako\");\n            Directory tomura = new Directory(\"tomura\");\nHTML files are:\ndiary.html (100)\nindex.html (350)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * FileFindVisitor 的使用方法（第二部分，接上一段）\n */\nusrdir.add(yuki);\nusrdir.add(hanako);\nusrdir.add(tomura);\n// 各用户文件夹中放入不同后缀的文件\nyuki.add(new File(\"diary.html\", 100));\nyuki.add(new File(\"Composite.java\", 200));\nhanako.add(new File(\"memo.tex\", 300));\nhanako.add(new File(\"index.html\", 350));\ntomura.add(new File(\"game.doc\", 400));\ntomura.add(new File(\"junk.mail\", 500));\n\n// 创建访问者：要找所有 .html 文件\nFileFindVisitor ffv = new FileFindVisitor(\".html\");\nrootdir.accept(ffv);  // 从根目录开始，让访问者走遍整棵树\n\nSystem.out.println(\"HTML files are:\");\n// 取出访问者找到的文件，逐个输出\nIterator it = ffv.getFoundFiles();\nwhile (it.hasNext()) {\n    File file = (File)it.next();\n    System.out.println(file.toString());\n}\n} catch (FileTreatmentException e) {\n    e.printStackTrace();\n}\n}\n}"
      },
      {
        "type": "text",
        "content": "图13-5 运行结果"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "代码请参见代码清单 A13-1。不需要修改 File.java（代码清单 13-4）和 Directory.java（代码清单 13-5）。"
      },
      {
        "type": "text",
        "content": "代码清单 A13-1 FileFindVisitor 类 (FileFindVisitor.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * FileFindVisitor：新的具体访问者，汇集指定后缀的文件\n * File 和 Directory 不用改，新操作全部写在访问者里\n * 注意：visit(File) 中的 filepath 是原书识别错误，应为字段 filetype\n */\nimport java.util.Iterator;\nimport java.util.ArrayList;\n\npublic class FileFindVisitor extends Visitor {\n    private String filetype;  // 要找的后缀，例如 .html\n    private ArrayList found = new ArrayList();  // 保存找到的文件\n    public FileFindVisitor(String filetype) {      // 指定.后面的文件后缀名, 如 \".txt\"\n        this.filetype = filetype;\n    }\n    // 让外部遍历找到的文件\n    public Iterator getFoundFiles() {              // 获取已经找到的文件\n        return found.iterator();\n\n    // 访问文件：后缀符合就收集起来\n    public void visit(File file) {                 // 在访问文件时被调用\n        if (file.getName().endsWith(filepath)) {\n            found.add(file);\n        }\n    }\n    // 访问文件夹：让里面的每个条目接受访问，形成递归\n    public void visit(Directory directory) {       // 在访问文件夹时被调用\n        Iterator it = directory.iterator();\n        while (it.hasNext()) {\n            Entry entry = (Entry)it.next();\n            entry.accept(this);  // 子条目是文件夹时，会再次进入 visit(Directory)\n        }\n    }\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要加什么",
        "bullets": [
          "在文件树里找出所有指定后缀（如 .html）的文件，汇集起来供外部遍历"
        ]
      },
      {
        "title": "第二步　为什么写成一个访问者",
        "bullets": [
          "“找文件”是对文件树的一种新操作",
          "访问者模式下，新操作写成一个新的 Visitor 子类即可，File、Directory 不用改"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "构造时记住要找的后缀 filetype，用 ArrayList found 保存找到的文件",
          "visit(File)：文件名以 filetype 结尾就加入 found",
          "visit(Directory)：遍历文件夹里的每个条目，调用 entry.accept(this)，让访问继续往下走",
          "getFoundFiles() 返回 found 的迭代器，Main 用它输出结果",
          "题库答案 visit(File) 中写成了 filepath，按上下文应为字段 filetype"
        ]
      },
      {
        "title": "第四步　为什么能递归遍历整棵树",
        "bullets": [
          "文件夹的 accept 会调用 visit(Directory)，里面又让子条目 accept，于是一层层走到底",
          "这是访问者模式和组合模式配合使用的典型写法"
        ]
      }
    ],
    "memory": [
      "加一种新操作＝写一个新访问者，元素类不改",
      "访问文件夹时要让每个子条目 accept(this)，才能遍历整棵树"
    ],
    "quotes": [
      {
        "text": "不需要修改 File.java（代码清单 13-4）和 Directory.java（代码清单 13-5）。",
        "source": "A13-Visitor模式-习题解答.md 第11行"
      },
      {
        "text": "有时访问者所访问的数据结构会使用 Composite 模式。",
        "source": "13-Visitor模式.md 第472行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/13-Visitor模式.md"
  },
  {
    "id": "TEXTBOOK-13-02",
    "chapter": "第13章",
    "pattern": "访问者模式",
    "source": "《图解设计模式》习题13-2",
    "stem": "在示例程序中，Directory 类（代码清单 13-5）的 getSize 方法的作用是获取文件夹大小。请编写一个获取大小的 SizeVisitor 类，用它替换掉 Directory 类的 getSize 方法。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "代码请参见代码清单 A13-2 和代码清单 A13-3。运行结果与修改 Directory 类前相同。"
      },
      {
        "type": "text",
        "content": "代码清单 A13-2 Directory 类 (Directory.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 修改后的 Directory：getSize 不再自己遍历，而是交给 SizeVisitor 计算\n */\nimport java.util.Iterator;\nimport java.util.ArrayList;\n\npublic class Directory extends Entry {\nprivate String name;                          // 文件夹名字\nprivate ArrayList dir = new ArrayList(); // 目录条目的集合\npublic Directory(String name) {            // 构造函数\n    this.name = name;\n}\npublic String getName() {                    // 获取名字\n    return name;\n}\npublic int getSize() {                   // 获取大小\n    // 创建计算大小的访问者\n    SizeVisitor v = new SizeVisitor();\n    accept(v);  // 让访问者访问自己（以及所有子条目）\n    return v.getSize();  // 从访问者那里取出累加的结果\n}\npublic Entry add(Entry entry) {           // 添加目录条目\n    dir.add(entry);\n    return this;\n}\npublic Iterator iterator() {\n    return dir.iterator();\n}\n// 接受访问：把自己交给访问者\npublic void accept(Visitor v) {\n    v.visit(this);\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A13-3 SizeVisitor 类 (SizeVisitor.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * SizeVisitor：计算大小的具体访问者，用 size 字段累加\n */\nimport java.util.Iterator;\n\npublic class SizeVisitor extends Visitor {\n    private int size = 0;  // 累计的大小\n    public int getSize() {\n        return size;\n    }\n    // 访问文件：加上它的大小\n    public void visit(File file) {\n        size += file.getSize();\n    }\n    // 访问文件夹：让每个子条目接受访问，文件夹里的文件也会被加进来\n    public void visit(Directory directory) {\n        Iterator it = directory.iterator();\n        while (it.hasNext()) {\n            Entry entry = (Entry)it.next();\n            entry.accept(this);\n        }\n    }\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要做什么",
        "bullets": [
          "原来 Directory 自己写了 getSize：遍历子条目把大小加起来",
          "题目要求把“算大小”改成由 SizeVisitor 完成"
        ]
      },
      {
        "title": "第二步　SizeVisitor 怎么写",
        "bullets": [
          "用 size 字段累加",
          "visit(File)：加上这个文件的大小",
          "visit(Directory)：遍历子条目，让每个条目 accept(this)，文件夹里的文件也会被累加进来"
        ]
      },
      {
        "title": "第三步　Directory 怎么改",
        "bullets": [
          "getSize() 里不再自己遍历，而是 new 一个 SizeVisitor，accept(v) 后返回 v.getSize()",
          "运行结果和修改前完全一样"
        ]
      },
      {
        "title": "第四步　这样改的意义",
        "bullets": [
          "计算逻辑从数据结构里移到了访问者里，Directory 只负责存条目",
          "以后要换一种统计方式，只换访问者"
        ]
      }
    ],
    "memory": [
      "访问者模式把“对数据的处理”从数据类里搬出来",
      "访问者用字段累积结果，最后通过 getter 取出"
    ],
    "quotes": [
      {
        "text": "代码请参见代码清单 A13-2 和代码清单 A13-3。运行结果与修改 Directory 类前相同。",
        "source": "A13-Visitor模式-习题解答.md 第47行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/13-Visitor模式.md"
  },
  {
    "id": "TEXTBOOK-13-03",
    "chapter": "第13章",
    "pattern": "访问者模式",
    "source": "《图解设计模式》习题13-3",
    "stem": "请基于 java.util.ArrayList 类编写一个具有 Element 接口的 ElementArrayList 类，使得 Directory 类和 File 类可以被 add 至 ElementArrayList 中，而且它还可以接受 (accept) ListVisitor 的实例访问它。ElementArrayList 类的使用方法如代码清单 13-10 所示，运行结果如图 13-6 所示。",
    "materials": [
      {
        "type": "text",
        "content": "代码清单 13-10 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * ElementArrayList 的使用方法：把文件夹和文件放进同一个列表，再整体交给访问者\n */\nimport java.util.Iterator;\n\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            // root1 下有两个文件\n            Directory root1 = new Directory(\"root1\");\n            root1.add(new File(\"diary.html\", 10));\n            root1.add(new File(\"index.html\", 20));\n\n            Directory root2 = new Directory(\"root2\");\nroot2.add(new File(\"diary.html\", 1000));\nroot2.add(new File(\"index.html\", 2000));\n\n// 可以接受访问者的列表\nElementArrayList list = new ElementArrayList();\nlist.add(root1);\nlist.add(root2);\n// 列表中也可以直接放文件\nlist.add(new File(\"etc.html\", 1234));\n\n// 列表整体接受访问，里面每个元素都会被访问到\nlist.accept(new ListVisitor());\n} catch (FileTreatmentException e) {\n    e.printStackTrace();\n}\n}\n}"
      },
      {
        "type": "text",
        "content": "图13-6 运行结果"
      },
      {
        "type": "code",
        "language": "text",
        "content": "/root1 (30)\n/root1/diary.html (10)\n/root1/index.html (20)\n/root2 (3000)\n/root2/diary.html (1000)\n/root2/index.html (2000)\n/etc.html (1234)"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "我们定义了一个实现了 Element 接口并继承了 java.util.ArrayList 类的 ElementArrayList 类（代码清单 A13-4）。这里没有必要定义 add 方法，因为它是继承于 ArrayList 类。"
      },
      {
        "type": "text",
        "content": "代码清单 A13-4 ElementArrayList 类 (ElementArrayList.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * ElementArrayList：继承 ArrayList 得到 add 等方法，实现 Element 得到 accept\n * 在访问者模式中，它扮演对象结构（ObjectStructure）的角色\n */\nimport java.util.ArrayList;\nimport java.util.Iterator;\n\nclass ElementArrayList extends ArrayList implements Element {\n// 接受访问：逐个让列表中的元素接受同一个访问者\npublic void accept(Visitor v) {\n    Iterator it = iterator();\n    while (it.hasNext()) {\n        Element e = (Element)it.next();  // 列表元素是 Object，先转换成 Element\n        e.accept(v);\n    }\n}\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要做什么",
        "bullets": [
          "要一个列表，既能 add 文件和文件夹，又能整体接受访问者",
          "也就是让列表本身也成为一个 Element"
        ]
      },
      {
        "title": "第二步　答案为什么这样设计",
        "bullets": [
          "ElementArrayList extends ArrayList implements Element",
          "继承 ArrayList，add 等方法直接继承下来，不用自己写",
          "实现 Element，就必须实现 accept(Visitor v)"
        ]
      },
      {
        "title": "第三步　accept 怎么写",
        "bullets": [
          "遍历列表里的每个元素，转成 Element，再调用它的 accept(v)",
          "文件夹会继续把访问传给自己的子条目，所以输出中能看到 root1、root2 下的所有文件"
        ]
      },
      {
        "title": "第四步　这个列表在模式里是什么",
        "bullets": [
          "它装着一组元素并让访问者逐个访问，扮演的就是对象结构 ObjectStructure 的角色"
        ]
      }
    ],
    "memory": [
      "让集合实现 Element，就能把整个集合交给访问者",
      "集合的 accept 就是逐个调用元素的 accept"
    ],
    "quotes": [
      {
        "text": "这里没有必要定义 add 方法，因为它是继承于 ArrayList 类。",
        "source": "A13-Visitor模式-习题解答.md 第110行"
      },
      {
        "text": "ObjectStructur 角色负责处理 Element 角色的集合。",
        "source": "13-Visitor模式.md 第374行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/13-Visitor模式.md"
  },
  {
    "id": "TEXTBOOK-13-04",
    "chapter": "第13章",
    "pattern": "访问者模式",
    "source": "《图解设计模式》习题13-4",
    "stem": "Java 使用 final 关键字定义的类是无法被继承的。例如，java.lang.String 类是 final 类，因此我们无法像下面这样定义 MyString 类。",
    "materials": [
      {
        "type": "code",
        "language": "java",
        "content": "× 编译错误\n// String 被声明为 final，不能有子类，所以这一行会编译报错\n// 原因是 Java 以“String 不会被继承”为前提做了性能优化\nclass MyString extends String {\n    ...\n}"
      },
      {
        "type": "text",
        "content": "这么看，String 类似乎违背了开闭原则，但实际上这是有正当理由的。请问是什么理由呢？"
      },
      {
        "type": "text",
        "content": "The image contains no discernible text or characters in the provided image. Therefore, there is no OCR result to output."
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "是效率原因。"
      },
      {
        "type": "text",
        "content": "String 类是 Java 语言中用于处理字符串的基本类，扮演着非常重要的角色。因此，Java 编译器以 “不能继承 String 类” 为前提对 String 类的处理速度和内存消耗量都进行了优化。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "开闭原则希望类“对扩展开放”，可 String 是 final 类，谁都不能继承它",
          "问 Java 为什么要这样设计"
        ]
      },
      {
        "title": "第二步　答案的理由",
        "bullets": [
          "String 是最常用的基础类，几乎每个程序都在大量使用",
          "编译器和运行环境以“String 不会有子类”为前提，对它的速度和内存做了专门优化",
          "如果允许继承，这些优化就不能放心使用"
        ]
      },
      {
        "title": "第三步　怎么理解和开闭原则的关系",
        "bullets": [
          "设计原则是权衡，不是必须无条件遵守的规定",
          "对 String 这样的基础类，效率比可扩展性更重要",
          "需要扩展字符串功能时，可以写一个新类持有 String 对象，而不是继承它"
        ]
      }
    ],
    "memory": [
      "String 设成 final 是为了效率，设计原则要结合实际权衡",
      "不能继承时可以用组合来扩展功能"
    ],
    "quotes": [
      {
        "text": "Java 编译器以 “不能继承 String 类” 为前提对 String 类的处理速度和内存消耗量都进行了优化。",
        "source": "A13-Visitor模式-习题解答.md 第137行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/13-Visitor模式.md"
  },
  {
    "id": "TEXTBOOK-14-01",
    "chapter": "第14章",
    "pattern": "职责链模式",
    "source": "《图解设计模式》习题14-1",
    "stem": "在视窗系统中经常会使用到 Chain of Responsibility 模式。",
    "materials": [
      {
        "type": "text",
        "content": "在视窗系统的窗口中，有按钮和文本输入框、勾选框等组件（也称为部件或控件）。当点击鼠标时，鼠标点击事件的处理是如何传播的呢？Chain of Responsibility 模式中的 next（要推卸给的对象）是哪个组件呢？"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "next 字段中保存的多是控件父窗口。当控件自身无法处理接收到的请求时，会将请求转交给它的父窗口。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "窗口里有按钮、文本框、勾选框，点击鼠标后事件怎么传递",
          "职责链里的 next（下一个处理者）是谁"
        ]
      },
      {
        "title": "第二步　对应职责链的角色",
        "bullets": [
          "请求：鼠标点击事件",
          "处理者：各个控件和它们所在的窗口",
          "next：控件的父窗口"
        ]
      },
      {
        "title": "第三步　事件怎么传",
        "bullets": [
          "事件先交给被点击的控件",
          "控件能处理就自己处理；处理不了就交给父窗口",
          "父窗口再处理不了，还可以继续往外层传"
        ]
      }
    ],
    "memory": [
      "图形界面中，控件的 next 通常是它的父窗口"
    ],
    "quotes": [
      {
        "text": "next 字段中保存的多是控件父窗口。当控件自身无法处理接收到的请求时，会将请求转交给它的父窗口。",
        "source": "A14-ChainofResponsibility模式-习题解答.md 第11行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/14-ChainofResponsibility模式.md"
  },
  {
    "id": "TEXTBOOK-14-02",
    "chapter": "第14章",
    "pattern": "职责链模式",
    "source": "《图解设计模式》习题14-2",
    "stem": "我们再看看另外一个在视窗系统的窗口中使用 Chain of Responsibility 模式的问题。",
    "materials": [
      {
        "type": "text",
        "content": "例如，我们看看图 14-5 中的小对话框。当焦点移动至 “字体” 列表框上时，按下键盘上的 ↑↓ 键可以选择相应的字体。但是，当焦点移动至 “显示均衡字体” 勾选框上时，如果按下 ↑键，焦点会移动至 “字体” 列表框，之后，即使按下 ↓键，焦点也不会返回到勾选框上。请运用 Chain of Responsibility 模式的思考方法来说明这个问题。"
      },
      {
        "type": "text",
        "content": "图14-5 选择字体的小对话框"
      },
      {
        "type": "image",
        "src": "images/textbook/p203-b08.png",
        "alt": "图14-5 选择字体的小对话框"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "图 A14-1 展示了图 14-5 中的对话框的责任链。箭头指向要推卸给的对象，即 next。"
      },
      {
        "type": "text",
        "content": "“键盘方向键被按下”的事件（请求）会被发送给当前焦点所处的列表框或是勾选框。如果当时焦点在列表框中，列表框会自己处理↑↓键被按下的事件，不会将请求推卸给 next 所对应的父对话框；但如果当时焦点在勾选框中，它则不会自己处理↑↓键被按下的事件，而是将请求推卸给 next 所对应的父对话框。当父对话框接收到↑↓键被按下的事件时，会将焦点移动至列表框中。这样就解释了习题 14-2 中描述的现象。"
      },
      {
        "type": "text",
        "content": "图A14-1 对话框、列表、勾选框之间的关系图"
      },
      {
        "type": "image",
        "src": "images/textbook/p356-b17.png",
        "alt": "图A14-1 对话框、列表、勾选框之间的关系图"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　要解释的现象",
        "bullets": [
          "焦点在“字体”列表框时，↑↓ 键用来选字体",
          "焦点在“显示均衡字体”勾选框时，按 ↑ 焦点跳到列表框，之后再按 ↓ 也回不到勾选框"
        ]
      },
      {
        "title": "第二步　画出这里的职责链",
        "bullets": [
          "列表框和勾选框的 next 都是它们所在的对话框",
          "方向键事件先发给当前有焦点的控件"
        ]
      },
      {
        "title": "第三步　用职责链解释现象",
        "bullets": [
          "勾选框不处理 ↑↓ 键，就把事件推给 next，也就是对话框",
          "对话框收到 ↑↓ 键后，把焦点移到列表框",
          "焦点到了列表框以后，列表框自己就会处理 ↑↓ 键（用来换字体），不再往上传",
          "所以对话框收不到这个 ↓，也就不会把焦点移回勾选框"
        ]
      }
    ],
    "memory": [
      "链上谁先处理，请求就停在谁那里，后面的处理者收不到",
      "同一个按键在不同控件上效果不同，是因为链的起点不同"
    ],
    "quotes": [
      {
        "text": "如果当时焦点在列表框中，列表框会自己处理↑↓键被按下的事件，不会将请求推卸给 next 所对应的父对话框",
        "source": "A14-ChainofResponsibility模式-习题解答.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/14-ChainofResponsibility模式.md"
  },
  {
    "id": "TEXTBOOK-14-03",
    "chapter": "第14章",
    "pattern": "职责链模式",
    "source": "《图解设计模式》习题14-3",
    "stem": "Java 在示例程序中的 Support 类（代码清单 14-2）中，support 方法的可见性是 public 的，而 resolve 方法的可见性是 protected 的。请问设计者为什么要这样区别开来呢？",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "这表示设计者希望 Support 类接收到 “解决问题” 的请求后，不要使用 resolve 方法，而是使用 support 方法。"
      },
      {
        "type": "text",
        "content": "如果将 resolve 方法的可见性设为 public，那么与 Support 类无关的其他类就都可以调用 resolve 方法了。这样可能会导致外部对 resolve 方法的使用方法与 Support 类所期待的使用方法不符。"
      },
      {
        "type": "text",
        "content": "此外，如果将 resolve 方法的可见性设为 public，可能会发生当 resolve 方法的名字和签名发生改变时，必须修改散落在程序中各个地方的代码的问题。"
      },
      {
        "type": "text",
        "content": "注意 在 Java 中，如果方法的可见性是 protected，不仅该类的子类可以看到该方法，同一个包中的其他类也可以看到该方法。因此，像在示例中这样所有代码放在一个包中时，可见性设置为 public 和 protected 是没有区别的。不过假如将来将它们分别放在不同的包中，protected 就可以发挥出它的威力了。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "Support 里 support 是 public，resolve 是 protected，问为什么要区分"
        ]
      },
      {
        "title": "第二步　两个方法分别做什么",
        "bullets": [
          "support：对外的入口，先试着自己解决，不行就交给 next，失败再报告",
          "resolve：每个具体处理者“自己能不能解决”的判断，由子类实现"
        ]
      },
      {
        "title": "第三步　为什么 resolve 不公开",
        "bullets": [
          "外部应该走 support，这样才会按链传递",
          "如果 resolve 是 public，外部可能直接调用它，绕开了推卸的流程",
          "而且以后改 resolve 的名字或参数，要修改所有调用它的地方",
          "答案也提醒：同一个包内 protected 和 public 没区别，分到不同包后 protected 才起作用"
        ]
      }
    ],
    "memory": [
      "对外入口设 public，给子类实现的步骤设 protected",
      "这和模板方法模式的做法一致"
    ],
    "quotes": [
      {
        "text": "这表示设计者希望 Support 类接收到 “解决问题” 的请求后，不要使用 resolve 方法，而是使用 support 方法。",
        "source": "A14-ChainofResponsibility模式-习题解答.md 第31行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/14-ChainofResponsibility模式.md"
  },
  {
    "id": "TEXTBOOK-14-04",
    "chapter": "第14章",
    "pattern": "职责链模式",
    "source": "《图解设计模式》习题14-4",
    "stem": "请将示例程序中的 Support 类（代码清单 14-2）修改为不使用递归调用，而是循环。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "使用循环来实现的代码请参见代码清单 A14-1。"
      },
      {
        "type": "text",
        "content": "代码清单 A14-1 修改后的 Support 类 (Support.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 用循环代替递归的 Support（职责链中的处理者）\n * 沿着 next 一个个往后找，直到有人解决，或者链走到尽头\n */\npublic abstract class Support {\n    private String name;                          // 解决问题的实例的名字\n    private Support next;                          // 要推卸给的对象\n    public Support(String name) {            // 生成解决问题的实例\n        this.name = name;\n    }\n    public Support setNext(Support next) {   // 设置要推卸给的对象\n        this.next = next;\n        return next;\n    }\n    // 处理问题的入口，final 防止子类改掉这个流程\n    public final void support(Trouble trouble) {\n        // 从自己开始，每轮换成下一个处理者\n        for (Support obj = this; true; obj = obj.next) {\n            // 当前处理者能解决：报告解决并结束\n            if (obj.resolve(trouble)) {\n                obj.done(trouble);\n                break;\n            // 没有下一个处理者了：报告失败并结束\n            } else if (obj.next == null) {\n                obj.fail(trouble);\n                break;\n            }\n        }\n    }\n    public String toString() {                 // 显示字符串\n        return \"[\" + name + \"]\";\n    }\n    // 能否解决由各个具体处理者实现\n    protected abstract boolean resolve(Trouble trouble); // 解决问题的方法\n    protected void done(Trouble trouble) {   // 解决\n        System.out.println(trouble + \" is resolved by \" + this + \".\");\n    }\n    protected void fail(Trouble trouble) {   // 未解决\n        System.out.println(trouble + \" cannot be resolved.\");\n    }\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要做什么",
        "bullets": [
          "原来 support 里处理不了就调用 next.support(trouble)，是递归",
          "题目要求改成循环"
        ]
      },
      {
        "title": "第二步　循环怎么写",
        "bullets": [
          "用变量 obj 从 this 开始，每轮 obj = obj.next，沿着链往后走",
          "obj.resolve 成功：调用 done，跳出循环",
          "没有下一个了（obj.next == null）：调用 fail，跳出循环",
          "support 加 final，防止子类改掉这个流程"
        ]
      },
      {
        "title": "第三步　两种写法的区别",
        "bullets": [
          "递归：每传一次就多一层方法调用，链很长时可能栈溢出",
          "循环：只在一个方法里往后走，不会因为链长而栈溢出",
          "两种写法的处理顺序和结果一样"
        ]
      }
    ],
    "memory": [
      "职责链的传递可以写成递归，也可以写成沿 next 前进的循环",
      "循环版注意两个出口：处理成功、链走到尽头"
    ],
    "quotes": [
      {
        "text": "使用循环来实现的代码请参见代码清单 A14-1。",
        "source": "A14-ChainofResponsibility模式-习题解答.md 第43行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/14-ChainofResponsibility模式.md"
  },
  {
    "id": "TEXTBOOK-15-01",
    "chapter": "第15章",
    "pattern": "外观模式",
    "source": "《图解设计模式》习题15-1",
    "stem": "Java 为了能够方便地对程序进行扩展和改善，作为设计者，我们想让 pagemaker 包外部的程序只能使用 PageMaker 类，而不能使用 Database 类和 HtmlWriter 类。那么我们应该如何修改示例程序呢？",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "在 Database 类（代码清单 15-1）和 HtmlWriter 类（代码清单 15-2）的定义中，像下面这样将 public 去掉后，就无法从 pagemaker 包外部使用 Database 类和 HtmlWriter 类的名字了（即使不删除它们中的方法所带有的 public 修饰符也无所谓）。"
      },
      {
        "type": "image",
        "src": "images/textbook/p358-b07.png",
        "alt": "题目图片"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要做什么",
        "bullets": [
          "pagemaker 包外的程序只能用 PageMaker，不能直接用 Database 和 HtmlWriter"
        ]
      },
      {
        "title": "第二步　谁是外观，谁是子系统",
        "bullets": [
          "Facade：PageMaker，对外提供 makeWelcomePage",
          "子系统：Database、HtmlWriter，只该被 PageMaker 使用"
        ]
      },
      {
        "title": "第三步　答案怎么做",
        "bullets": [
          "把 Database 和 HtmlWriter 类声明前的 public 去掉，类变成包内可见",
          "包外连这两个类的名字都用不了，方法上的 public 留着也没关系",
          "PageMaker 在同一个包里，仍然能正常使用它们"
        ]
      },
      {
        "title": "第四步　这样做的好处",
        "bullets": [
          "外部只能走 PageMaker 这一个窗口",
          "以后改动 Database、HtmlWriter 的内部，不会影响包外的程序"
        ]
      }
    ],
    "memory": [
      "想让外部只能用外观类，就把子系统类设成包内可见",
      "类不是 public，包外就看不到它"
    ],
    "quotes": [
      {
        "text": "在 Database 类（代码清单 15-1）和 HtmlWriter 类（代码清单 15-2）的定义中，像下面这样将 public 去掉后，就无法从 pagemaker 包外部使用 Database 类和 HtmlWriter 类的名字了",
        "source": "A15-Facade模式-习题解答.md 第11行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/15-Facade模式.md"
  },
  {
    "id": "TEXTBOOK-15-02",
    "chapter": "第15章",
    "pattern": "外观模式",
    "source": "《图解设计模式》习题15-2",
    "stem": "Java 请在 PageMaker 类中增加一个 makeLinkPage 方法，使其可以根据 maildata.txt（代码清单 15-2）中的用户的邮件地址制作出邮件地址超链接集合。makeLinkPage 的调用方法如代码清单 15-6 所示。制作完成的超链接集合如图 15-8 所示（界面效果如图 15-9 所示）。",
    "materials": [
      {
        "type": "text",
        "content": "代码清单 15-6 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：只调用外观类 PageMaker 的一个方法\n */\nimport pagemaker.PageMaker;\n\npublic class Main {\n    public static void main(String[] args) {\n        PageMaker.makeLinkPage(\"linkpage.html\");  // 生成邮件地址链接页面，内部细节都藏在 PageMaker 里\n    }\n}"
      },
      {
        "type": "text",
        "content": "图15-7 编译和运行结果"
      },
      {
        "type": "code",
        "language": "text",
        "content": "javac Main.java\njava Main\nlinkpage.html is created.\n(这之后，在浏览器中查看到的 linkage.html 如图 15-9 所示)"
      },
      {
        "type": "text",
        "content": "图15-8 制作完成的linkpage.html"
      },
      {
        "type": "code",
        "language": "text",
        "content": "<html><head><title>Link page</title></head><body>\n<h1>Link page</h1>\n<p><a href=\"mailto:hanako@hyuki.com\">Hanako Sato</a></p>\n<p><a href=\"mailto:mamoru@hyuki.com\">Mamoru Takahashi</a></p>\n<p><a href=\"mailto:hyuki@hyuki.com\">Hiroshi Yuki</a></p>\n<p><a href=\"mailto:tomura@hyuki.com\">Tomura</a></p>\n</body></html>"
      },
      {
        "type": "text",
        "content": "图15-9 在浏览器中查看linkpage.html"
      },
      {
        "type": "image",
        "src": "images/textbook/p213-b04.png",
        "alt": "图15-9 在浏览器中查看linkpage.html"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "答案如下面的代码清单15-1所示。"
      },
      {
        "type": "text",
        "content": "代码清单 A15-1 修改后的 PageMaker 类 (PageMaker.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * PageMaker：外观（Facade），对外只提供静态方法\n * 内部使用两个子系统：Database 读取邮件数据，HtmlWriter 写 HTML\n * 原书排版中 makeWelcomePage 之后多了花括号，makeLinkPage 本应也在 PageMaker 类中\n */\npackage pagemaker;\n\nimport java.io.FileWriter;\nimport java.io.IOException;\nimport java.util.Properties;\nimport java.util.Enumeration;\n\npublic class PageMaker {\n    // 构造方法私有：这个类只提供静态方法，不需要创建对象\n    private PageMaker() {   // 不允许生成 PageMaker 类的实例，因此将构造函数设为 private\n    }\n    // 原有方法：为一个用户生成欢迎页面\n    public static void makeWelcomePage(String mailaddr, String filename) {\n        try {\n            Properties mailprop = Database.getProperties(\"maildata\");\n            String username = mailprop.getProperty(mailaddr);\n            HtmlWriter writer = new HtmlWriter(new FileWriter(filename));\n            writer.title(\"Welcome to \" + username + \"'s page!\");\n            writer.paragraph(\" 欢迎来到 \" + username + \" 的主页。\");\n            writer.paragraph(\" 等着你的邮件哦！ \");\n            writer.mailto(mailaddr, username);\n            writer.close();\n            System.out.println(filename + \" is created for \" + mailaddr + \" (\" +\nusername + \")\");\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n}\n// 新增方法：为所有用户生成邮件链接页面\npublic static void makeLinkPage(String filename) {\n    try {\n        HtmlWriter writer = new HtmlWriter(new FileWriter(filename));\n        writer.title(\"Link page\");\n        // 读出“邮件地址 → 用户名”对应表\n        Properties mailprop = Database.getProperties(\"maildata\");\n        // 取得所有邮件地址\n        Enumeration en = mailprop.propertyNames();\n        while (en.hasMoreElements()) {\n            String mailaddr = (String)en.nextElement();\n            // 查不到用户名时显示 (unknown)\n            String username = mailprop.getProperty(mailaddr, \"(unknown)\");\n            writer.mailto(mailaddr, username);  // 写一个 mailto 链接\n        }\n        writer.close();\n        System.out.println(filename + \" is created.\");\n    } catch (IOException e) {\n        e.printStackTrace();\n    }\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要加什么",
        "bullets": [
          "在 PageMaker 里加一个 makeLinkPage(filename)",
          "读取 maildata 里的所有用户，生成一个邮件链接列表页面"
        ]
      },
      {
        "title": "第二步　新方法用到哪些子系统",
        "bullets": [
          "Database.getProperties(\"maildata\")：读出“邮件地址 → 用户名”的对应表",
          "HtmlWriter：写标题、写 mailto 链接、关闭文件"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "先创建 HtmlWriter 并写标题 Link page",
          "用 propertyNames() 得到所有邮件地址，逐个取出用户名，调用 writer.mailto 写链接",
          "最后 close 并输出“linkpage.html is created.”",
          "makeLinkPage 和 makeWelcomePage 一样是 static，构造方法是 private，PageMaker 不需要实例"
        ]
      },
      {
        "title": "第四步　为什么加在外观类里",
        "bullets": [
          "Main 只调用 PageMaker.makeLinkPage(\"linkpage.html\") 一行",
          "怎么读数据、怎么写 HTML 都被藏在外观类后面"
        ]
      }
    ],
    "memory": [
      "外观类的新功能＝按顺序调用已有子系统",
      "客户端只需要一行调用"
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
    "id": "TEXTBOOK-16-01",
    "chapter": "第16章",
    "pattern": "中介者模式",
    "source": "《图解设计模式》习题16-1",
    "stem": "请修改示例程序，实现“仅当用户名与密码的长度都大于4个字符（包含4个字符）的时候，OK按钮才有效”的需求。请仔细思考究竟需要修改哪个类。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "对 LoginFrame 类（代码清单 16-6）中的 userpassChanged 方法做如下修改即可，无需对其他类做任何修改。"
      },
      {
        "type": "code",
        "language": "text",
        "content": "/**\n * 修改点：上面一行是原来的条件，↓ 下面一行是修改后的条件\n * 原来：密码不为空 OK 按钮就可用；现在：用户名和密码都至少 4 个字符才可用\n */\nif (textPass.getText().length() > 0) {\n↓\nif (textUser.getText().length() >= 4 && textPass.getText().length() >= 4) {"
      },
      {
        "type": "text",
        "content": "图 A16-1 当密码输入框中只输入了三个字符时，无法按下 OK 按钮"
      },
      {
        "type": "text",
        "content": "<table><tr><td colspan=\"2\">Mediator Sample</td></tr><tr><td>Guest</td><td>Login</td></tr><tr><td>Username:</td><td>Yuki</td></tr><tr><td>Password:</td><td>***|</td></tr><tr><td>OK</td><td>Cancel</td></tr></table>"
      },
      {
        "type": "text",
        "content": "图 A16-2 当密码输入框中输入了四个字符后，可以按下 OK 按钮"
      },
      {
        "type": "text",
        "content": "<table><tr><td colspan=\"2\">Mediator Sample</td></tr><tr><td>Guest</td><td>Login</td></tr><tr><td>Username:</td><td>Yuki</td></tr><tr><td>Password:</td><td>*****</td></tr><tr><td>OK</td><td>Cancel</td></tr></table>"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 修改后的 LoginFrame：中介者（Mediator）\n * 按钮、输入框、勾选框都是同事（Colleague），只负责通知中介者“我变了”\n * 所有“谁该启用、谁该禁用”的判断都集中在这里，所以改规则只改这个类\n * 注意：BurgUser、thenUser、thenPass、thenOk 是原书识别错误，应分别为 textUser、textUser、textPass、buttonOk\n */\nimport java.awt.Frame;\nimport java.awt.Label;\nimport java.awt.Color;\nimport java.awt.CheckboxGroup;\nimport java.awt.GridLayout;\nimport java.awt.event.ActionListener;\nimport java.awt.event.ActionEvent;\n\n// 既是窗口，又是中介者\npublic class LoginFrame extends Frame implements ActionListener, Mediator {\n    // 六个同事：两个勾选框、两个输入框、两个按钮\n    private ColleagueCheckbox checkGuest;\n    private ColleagueCheckbox checkLogin;\n    private ColleagueTextField textUser;\n    private ColleagueTextField textPass;\n    private ColleagueButton buttonOk;\n    private ColleagueButton buttonCancel;\n\n    // 构造函数\n    // 生成并配置各个 Colleague 后，显示对话框\n    public LoginFrame(String title) {\n        super(title);\n        setBackground(Color.lightGray);\n        // 使用布局管理器生成 4×2 窗格\n        setLayout(new GridLayout(4, 2));\n        // 生成各个 Colleague\n        createColleagues();\n        // 配置\n        add(checkGuest);\n        add(checkLogin);\n        add(new Label(\"Username:\"));\n        add(textUser);\n        add(new Label(\"Password:\"));\n        add(textPass);\n        add(buttonOk);\n        add(buttonCancel);\n        // 设置初始的启用 / 禁用状态\n        colleagueChanged();\n        // 显示\n        pack();\n        show();\n    }\n\n    // 生成各个 Colleague\n    // 创建同事，并让每个同事都认识中介者（setMediator(this)）\n    public void createColleagues() {\n        // 生成\n        CheckboxGroup g = new CheckboxGroup();\n        checkGuest = new ColleagueCheckbox(\"Guest\", g, true);\n        checkLogin = new ColleagueCheckbox(\"Login\", g, false);\n        BurgUser = new ColleagueTextField(\"\", 10);\n        textPass = new ColleagueTextField(\"\", 10);\n        textPass.setEchoChar('*');\n        buttonOk = new ColleagueButton(\"OK\");\n        buttonCancel = new ColleagueButton(\"Cancel\");\n        // 设置 Mediator\n        checkGuest.setMediator(this);\n        checkLogin.setMediator(this);\n        BurgUser.setMediator(this);\n        textPass.setMediator(this);\n        buttonOk.setMediator(this);\nbuttonCancel.setMediator(this);\n// 设置 Listener\ncheckGuest.addItemListener(checkGuest);\ncheckLogin.addItemListener(checkLogin);\ntextUser.addTextListener(textUser);\ntextPass.addTextListener(textPass);\nbuttonOk.addActionListener(this);\nbuttonCancel.addActionListener(this);\n}\n\n// 接收来自于 Colleage 的通知并判断各 Colleage 的启用 / 禁用状态\n// 任何同事发生变化时都会调用这里，统一重新判断\npublic void colleagueChanged() {\n    // 游客模式：用户名和密码都不可用，OK 可用\n    if (checkGuest.getState()) { // Guest mode\n        thenUser.setColleagueEnabled(false);\n        thenPass.setColleagueEnabled(false);\n        thenOk.setColleagueEnabled(true);\n    // 登录模式：用户名可用，再根据输入内容判断其余控件\n    } else { // Login mode\n        thenUser.setColleagueEnabled(true);\n        userpassChanged();\n    }\n}\n// 当 textUser 或是 textPass 文本输入框中的文字发生变化时\n// 判断各 Colleage 的启用 / 禁用状态\n// 根据两个输入框的内容决定密码框和 OK 按钮\nprivate void userpassChanged() {\n    if (textUser.getText().length() > 0) {\n        thenPass.setColleagueEnabled(true);\n        // 本题唯一的修改：两个都至少 4 个字符，OK 才可用\n        if (textUser.getText().length() >= 4 && textPass.getText().length() >= 4) {\n            buttonOk.setColleagueEnabled(true);\n        } else {\n            buttonOk.setColleagueEnabled(false);\n        }\n    } else {\n        thenPass.setColleagueEnabled(false);\n        buttonOk.setColleagueEnabled(false);\n    }\n}\npublic void actionPerformed(ActionEvent e) {\n    System.out.println(e.toString());\n    System.exit(0);\n}\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要改什么规则",
        "bullets": [
          "原来只要密码不为空，OK 按钮就能按",
          "现在要求用户名和密码都至少 4 个字符，OK 按钮才可用"
        ]
      },
      {
        "title": "第二步　规则由谁负责",
        "bullets": [
          "按钮、输入框、勾选框都是 Colleague，它们只负责报告“我变了”",
          "“哪个控件该启用、哪个该禁用”的判断全部集中在 Mediator，即 LoginFrame"
        ]
      },
      {
        "title": "第三步　答案怎么改",
        "bullets": [
          "只改 LoginFrame 的 userpassChanged 方法中的条件",
          "把 textPass.getText().length() > 0 改成 textUser.getText().length() >= 4 && textPass.getText().length() >= 4",
          "其他类一行不改"
        ]
      },
      {
        "title": "第四步　如果没有中介者会怎样",
        "bullets": [
          "启用规则会散落在各个控件里，输入框要知道按钮，按钮要知道输入框",
          "改一条规则就要改好几个类，还容易漏改"
        ]
      }
    ],
    "memory": [
      "中介者模式下，改交互规则只改中介者",
      "同事类只负责通知中介者，不做判断"
    ],
    "quotes": [
      {
        "text": "对 LoginFrame 类（代码清单 16-6）中的 userpassChanged 方法做如下修改即可，无需对其他类做任何修改。",
        "source": "A16-Mediator模式-习题解答.md 第11行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/16-Mediator模式.md"
  },
  {
    "id": "TEXTBOOK-16-02",
    "chapter": "第16章",
    "pattern": "中介者模式",
    "source": "《图解设计模式》习题16-2",
    "stem": "Java 请仔细阅读示例程序中的 ColleagueButton 类(代码清单 16-3)、ColleagueTextField 类(代码清单 16-4)和 ColleagueCheckbox 类(代码清单 16-5)，在它们内部都定义了 mediator 字段。而且，它们的 setMediator 方法的实现也是完全一样的。那么请问，为了简化程序，我们可以在 Colleague 接口中定义 mediator 字段和实现 setMediator 方法吗？",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "无法实现。"
      },
      {
        "type": "text",
        "content": "因为在接口中是无法定义实例字段（实例变量），也无法实现具体方法（非抽象方法）的。"
      },
      {
        "type": "text",
        "content": "如果只是将 Colleague 从接口变为类，那么也无法实现习题中的需求。而如果不仅将 Colleague 从接口变为类，还让 ColleagueButton 类继承它，那么 ColleagueButton 类会无法继承 Button 类，因为在 Java 中，只能继承于一个父类。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "三个 Colleague 类里都有一样的 mediator 字段和 setMediator 方法",
          "能不能把它们挪到 Colleague 接口里共用"
        ]
      },
      {
        "title": "第二步　接口为什么放不下",
        "bullets": [
          "接口里不能定义实例字段",
          "接口里也不能写普通方法的实现（书中所用的 Java 版本如此）",
          "所以 mediator 字段和 setMediator 的实现都放不进接口"
        ]
      },
      {
        "title": "第三步　把接口改成类行不行",
        "bullets": [
          "如果把 Colleague 改成类，ColleagueButton 就要继承它",
          "但 ColleagueButton 已经继承了 Button，Java 只能有一个父类",
          "所以这条路也走不通，只能在每个类里各写一遍"
        ]
      }
    ],
    "memory": [
      "接口不能有实例字段；Java 单继承，已有父类的类不能再继承另一个类",
      "这就是重复代码只能保留的原因"
    ],
    "quotes": [
      {
        "text": "因为在接口中是无法定义实例字段（实例变量），也无法实现具体方法（非抽象方法）的。",
        "source": "A16-Mediator模式-习题解答.md 第139行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/16-Mediator模式.md"
  },
  {
    "id": "TEXTBOOK-17-01",
    "chapter": "第17章",
    "pattern": "观察者模式",
    "source": "《图解设计模式》习题17-1",
    "stem": "请编写一个继承 NumberGenerator 类（代码清单 17-2），并具有数值递增功能的子类 IncrementalNumberGenerator。它的构造函数有以下 3 个 int 型参数。",
    "materials": [
      {
        "type": "list",
        "items": [
          "初始数值"
        ]
      },
      {
        "type": "list",
        "items": [
          "结束数值（不包含该数值自身）"
        ]
      },
      {
        "type": "list",
        "items": [
          "递增步长"
        ]
      },
      {
        "type": "text",
        "content": "接着，请编写程序让 DigitObserver 类和 GraphObserver 类观察 IncrementalNumberGenerator 类的变化。"
      },
      {
        "type": "text",
        "content": "IncrementalNumberGenerator 类的使用方法如代码清单 17-7 所示。图 17-4 展示了初始数值为 10，结束数值为 50，递增步长为 5 时的运行结果。"
      },
      {
        "type": "text",
        "content": "代码清单 17-7 使用了 IncrementalNumberGenerator 类的 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * IncrementalNumberGenerator 的使用方法：从 10 开始，每次加 5，到 50 之前停止\n */\npublic class Main {\n    public static void main(String[] args) {\n        // 参数依次是：初始数值、结束数值（不包含）、递增步长\n        NumberGenerator generator = new IncrementalNumberGenerator(10, 50, 5);\n        Observer observer1 = new DigitObserver();\n        Observer observer2 = new GraphObserver();\n        // 注册两个观察者\n        generator.addObserver(observer1);\ngenerator.addObserver(observer2);\n        generator.execute();  // 开始生成数值，每变一次都会通知观察者\n    }\n}"
      },
      {
        "type": "text",
        "content": "图17-4 运行结果"
      },
      {
        "type": "code",
        "language": "text",
        "content": "DigitObserver:10\nGraphObserver:**********\nDigitObserver:15\nGraphObserver:**********\nDigitObserver:20\nGraphObserver:**********\nDigitObserver:25\nGraphObserver:**********\nDigitObserver:30\nGraphObserver:**********\nDigitObserver:35\nGraphObserver:**********\nDigitObserver:40\nGraphObserver:**********\nDigitObserver:45\nGraphObserver:**********"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "代码请参见代码清单 A17-1。"
      },
      {
        "type": "text",
        "content": "代码清单 A17-1 具有数值递增功能的 IncrementalNumberGenerator (IncrementalNumberGenerator.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * IncrementalNumberGenerator：新的具体被观察对象（ConcreteSubject）\n * 数值每变化一次，就调用父类的 notifyObservers() 通知所有观察者\n */\npublic class IncrementalNumberGenerator extends NumberGenerator {\n    private int number;                          // 当前数值\n    private int end;                           // 结束数值 (不包含该值)\n    private int inc;                          // 递增步长\n    // 保存起点、终点和步长\n    public IncrementalNumberGenerator(int start, int end, int inc) {\n        this.number = start;\n        this.end = end;\n        this.inc = inc;\n    }\n    // 观察者收到通知后，通过它读取当前数值\n    public int getNumber() {                 // 获取当前数值\n        return number;\n    }\n    // 开始生成数值\n    public void execute() {\n        while (number < end) {  // 用 <，所以不包含结束数值本身\n            notifyObservers();  // 先通知所有观察者当前数值\n            number += inc;  // 再按步长增加\n        }\n    }\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要做什么",
        "bullets": [
          "写一个 NumberGenerator 的子类，数值从起点开始按步长递增，到终点前停止",
          "构造方法的三个参数在原书中是：初始数值、结束数值（不包含该数值自身）、递增步长，题干中这三条没有显示出来",
          "DigitObserver 和 GraphObserver 要能观察到每一次变化"
        ]
      },
      {
        "title": "第二步　它在观察者模式中的位置",
        "bullets": [
          "Subject：NumberGenerator，已经写好了 addObserver 和 notifyObservers",
          "ConcreteSubject：新写的 IncrementalNumberGenerator",
          "Observer：DigitObserver、GraphObserver 不用改"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "number 存当前数值，end 存结束数值，inc 存步长",
          "getNumber() 让观察者取得当前数值",
          "execute() 中 while (number < end)：先 notifyObservers() 通知所有观察者，再 number += inc",
          "用 < 而不是 <=，所以 10 到 50、步长 5 时输出 10～45，不包含 50"
        ]
      },
      {
        "title": "第四步　这道题说明了什么",
        "bullets": [
          "新增一种被观察对象，只需写一个子类并在数值变化时调用 notifyObservers",
          "观察者类一行都不用改，因为它们只依赖 NumberGenerator"
        ]
      }
    ],
    "memory": [
      "ConcreteSubject 的套路：状态变化后调用 notifyObservers()",
      "观察者通过 getXxx() 主动取最新状态"
    ],
    "quotes": [
      {
        "text": "结束数值（不包含该数值自身）",
        "source": "17-Observer模式.md 第371行"
      },
      {
        "text": "ConcreteSubject 角色表示具体的被观察对象。当自身状态发生变化后，它会通知所有已经注册的 Observer 角色。",
        "source": "17-Observer模式.md 第225行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/17-Observer模式.md"
  },
  {
    "id": "TEXTBOOK-17-02",
    "chapter": "第17章",
    "pattern": "观察者模式",
    "source": "《图解设计模式》习题17-2",
    "stem": "请在示例程序中增加一个新的 ConcreteObserver 角色，并修改 Main 类（代码清单 17-6），在其中使用这个新的 ConcreteObserver 角色接收通知。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "我们编写了一个带 GUI 界面的 ConcreteObserver 角色，它使用饼图来显示变化（图 A17-1）。"
      },
      {
        "type": "text",
        "content": "此外，这里一共有 3 个 ConcreteObserver 角色，但实际上 RandomNumberGenerator 调用的只有 FrameObserver（代码清单 17-2）。FrameObserver 会调用（委托）GraphText 和 GraphCanvas。"
      },
      {
        "type": "text",
        "content": "图A17-1 运行状态"
      },
      {
        "type": "image",
        "src": "images/textbook/p362-b14.png",
        "alt": "图A17-1 运行状态"
      },
      {
        "type": "text",
        "content": "代码清单 17-2 使用 GUI 界面来显示变化的 FrameObserver 类 (FrameObserver.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * FrameObserver：新的具体观察者，用图形窗口显示数值的变化\n * 它自己不画，而是把收到的通知再转交给文字条 GraphText 和饼图 GraphCanvas\n * 注意：java.awt.BorderStyle 应为 java.awt.BorderLayout；text += '*',; 中多了一个逗号，均为原书识别错误\n */\nimport java.awt.Frame;\nimport java.awt.TextField;\nimport java.awt.Canvas;\nimport java.awt.Color;\nimport java.awt.Button;\nimport java.awt.Graphics;\nimport java.awt.BorderStyle;\nimport java.awt.event.ActionListener;\nimport java.awt.event.ActionEvent;\n\n// 既是窗口，又是观察者，还能响应按钮\npublic class FrameObserver extends Frame implements Observer, ActionListener {\n    private GraphText textGraph = new GraphText(60);  // 上方：用 * 表示数值的文字条\n    private GraphCanvas canvasGraph = new GraphCanvas();  // 中间：用饼图表示数值\n    private Button buttonClose = new Button(\"Close\");\n\n    // 创建窗口并摆放三个部件\n    public FrameObserver() {\n        super(\"FrameObserver\");\n        setLayout(new BorderLayout());\n        setBackground(Color.lightGray);\n        textGraph.setEditable(false);\n        canvasGraph.setSize(500, 500);\n        add(textGraph, BorderLayout.NORTH);\n        add(canvasGraph, BorderLayout.CENTER);\n        add(buttonClose, BorderLayout.SOUTH);\n        buttonClose.addActionListener(this);\n        pack();\n        show();\n    }\n    // 点击 Close 按钮时退出程序\n    public void actionPerformed(ActionEvent e) {\n        System.out.println(e.toString());\n        System.exit(0);\n    }\n    // 收到数值变化的通知\n    public void update(NumberGenerator generator) {\n        textGraph.update(generator);  // 转交给文字条更新\n        canvasGraph.update(generator);  // 转交给饼图更新\n    }\n}\n// 文字条：数值是几就显示几个 *\nclass GraphText extends TextField implements Observer {\n    public GraphText(int columns) {\n        super(columns);\n    }\n    public void update(NumberGenerator generator) {\n        int number = generator.getNumber();\n        String text = number + \":\";\n        for (int i = 0; i < number; i++) {\n            text += '*',;\n        }\n        setText(text);\n    }\n}\n// 饼图：数值越大，红色扇形越大\nclass GraphCanvas extends Canvas implements Observer {\n    private int number;\n    public void update(NumberGenerator generator) {\n        number = generator.getNumber();\n        repaint();\n    }\n    // 先画白色整圆，再画红色扇形（满分按 50 计算）\n    public void paint(Graphics g) {\n        int width = getWidth();\nint height = getHeight();\ng.setColor(Color.white);\ng.fillArc(0, 0, width, height, 0, 360);\ng.setColor(Color.red);\ng.fillArc(0, 0, width, height, 90, - number * 360 / 50);\n}\n}"
      },
      {
        "type": "text",
        "content": "代码清单 17-3 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：在原有两个观察者之外，再注册新的 FrameObserver\n * 被观察者 RandomNumberGenerator 不需要做任何修改\n */\npublic class Main {\n    public static void main(String[] args) {\n        NumberGenerator generator = new RandomNumberGenerator();\n        Observer observer1 = new DigitObserver();\n        Observer observer2 = new GraphObserver();\n        // 新增的观察者\n        Observer observer3 = new FrameObserver();\n        generator.addObserver(observer1);\n        generator.addObserver(observer2);\n        generator.addObserver(observer3);  // 注册后就能收到通知\n        generator.execute();\n    }\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要做什么",
        "bullets": [
          "再写一个 ConcreteObserver，并在 Main 里注册，让它也能收到数值变化的通知"
        ]
      },
      {
        "title": "第二步　新观察者要满足什么",
        "bullets": [
          "实现 Observer 接口的 update 方法",
          "在 update 里从生成器取当前数值，再用自己的方式显示"
        ]
      },
      {
        "title": "第三步　答案的做法",
        "bullets": [
          "FrameObserver 继承 Frame 并实现 Observer，用图形窗口显示数值",
          "窗口里有文字条 GraphText 和饼图 GraphCanvas，FrameObserver 收到通知后把显示工作委托给它们",
          "Main 只多两行：创建 FrameObserver，并 addObserver 注册"
        ]
      },
      {
        "title": "第四步　这道题说明了什么",
        "bullets": [
          "被观察者 RandomNumberGenerator 不知道有几个观察者、也不知道它们怎么显示",
          "加一个观察者只需注册，原有的生成器和观察者都不用改"
        ]
      }
    ],
    "memory": [
      "新增观察者＝实现 Observer＋在客户端注册",
      "被观察者不关心观察者的具体类型"
    ],
    "quotes": [
      {
        "text": "我们编写了一个带 GUI 界面的 ConcreteObserver 角色，它使用饼图来显示变化（图 A17-1）。",
        "source": "A17-Observer模式-习题解答.md 第41行"
      },
      {
        "text": "ConcreteObserver 角色表示具体的 Observer。当它的 update 方法被调用后，会去获取要观察的对象的最新状态。",
        "source": "17-Observer模式.md 第233行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/17-Observer模式.md"
  },
  {
    "id": "TEXTBOOK-18-01",
    "chapter": "第18章",
    "pattern": "备忘录模式",
    "source": "《图解设计模式》习题18-1",
    "stem": "Caretaker 角色只能通过窄接口（API）来操作 Memento 角色。如果 Caretaker 角色可以随意地操作 Memento 角色，会发生什么问题呢？",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "这会导致 Caretaker 角色失去与 Originator 角色和 Memento 角色之间的独立性。"
      },
      {
        "type": "text",
        "content": "如果 Caretaker 角色可以随意地操作 Memento 角色，当要修改 Originator 角色内部的代码时，就必须要同样地修改 Caretaker 角色。"
      },
      {
        "type": "text",
        "content": "而如果 Caretaker 角色只能使用窄接口（API），只要不修改那个接口（API），就可以自由地修改 Originator 角色和 Memento 角色。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "Caretaker 只能用窄接口操作 Memento",
          "如果 Caretaker 能随意读写 Memento 内部，会出什么问题"
        ]
      },
      {
        "title": "第二步　两种接口分别给谁用",
        "bullets": [
          "宽接口：能读取和恢复全部状态，只给 Originator 用",
          "窄接口：只能拿到很少的信息（示例中只有 getMoney），给 Caretaker 用"
        ]
      },
      {
        "title": "第三步　放开后会怎样",
        "bullets": [
          "Caretaker 的代码会依赖 Memento 和 Originator 的内部细节",
          "以后改 Originator 内部要保存什么，Caretaker 也得跟着改",
          "只用窄接口时，只要窄接口不变，Originator 和 Memento 内部可以随便改"
        ]
      }
    ],
    "memory": [
      "窄接口让 Caretaker 和 Originator 保持独立",
      "Caretaker 只保管备忘录，不碰内容"
    ],
    "quotes": [
      {
        "text": "而如果 Caretaker 角色只能使用窄接口（API），只要不修改那个接口（API），就可以自由地修改 Originator 角色和 Memento 角色。",
        "source": "A18-Memento模式-习题解答.md 第15行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/18-Memento模式.md"
  },
  {
    "id": "TEXTBOOK-18-02",
    "chapter": "第18章",
    "pattern": "备忘录模式",
    "source": "《图解设计模式》习题18-2",
    "stem": "在示例程序中，游戏的状态仅由所持金钱和水果这两个项目来决定。如果在必须保存大量信息才能保存对象的状态时，为了能够保存 Memento 的实例，需要花费大量的内存空间或是磁盘空间。请思考一下有没有好的解决办法（本习题参考了 GoF 书（请参见附录 E[GoF]）。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "如果计算一下与上次保存的 Memento 之间的差值，可能就可以以较少的内存空间保存数据。另外还有一种方法是将数据压缩后再保存，这样也可以减少所需的内存空间（我们将在习题 18-4 的答案中稍微接触一下数据压缩的例子）。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要解决什么",
        "bullets": [
          "状态信息很多时，每保存一个 Memento 都要占大量内存或磁盘"
        ]
      },
      {
        "title": "第二步　答案给出的两个思路",
        "bullets": [
          "只保存差值：和上一次保存的 Memento 比较，只记录变化的部分",
          "压缩后保存：把数据压缩再存，读出时解压"
        ]
      },
      {
        "title": "第三步　为什么可行",
        "bullets": [
          "Memento 本来就只需要“恢复时用得到”的信息，不必是对象的完整拷贝",
          "习题 18-4 的答案演示了压缩保存的写法"
        ]
      }
    ],
    "memory": [
      "备忘录太大时：存差值或压缩",
      "Memento 只保存恢复所需的那部分信息"
    ],
    "quotes": [
      {
        "text": "如果计算一下与上次保存的 Memento 之间的差值，可能就可以以较少的内存空间保存数据。",
        "source": "A18-Memento模式-习题解答.md 第21行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/18-Memento模式.md"
  },
  {
    "id": "TEXTBOOK-18-03",
    "chapter": "第18章",
    "pattern": "备忘录模式",
    "source": "《图解设计模式》习题18-3",
    "stem": "Java 假设在 Memento 类（代码清单 18-1）中加入了一个新的字段。",
    "materials": [
      {
        "type": "code",
        "language": "text",
        "content": "// 题目假设要在 Memento 中新增的字段\nint number;"
      },
      {
        "type": "text",
        "content": "现在我们需要加上如下可见性，应该怎么做呢？"
      },
      {
        "type": "list",
        "items": [
          "Memento 类可以获取和改变 number 的值"
        ]
      },
      {
        "type": "list",
        "items": [
          "Gamer类可以获取number的值，但不能改变它"
        ]
      },
      {
        "type": "list",
        "items": [
          "Main 类既不能获取也不能改变 number 的值"
        ]
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "可以通过将 number 的可见性设置为 private，然后将获取 number 值的 getNumber 方法的可见性设置为默认（即不带 public、protected、private 修饰符）来实现习题中的需求。"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 让 number 满足三条访问要求的写法（Memento 和 Gamer 在同一个包，Main 在包外）\n * 最后一行中文是原书的说明文字，被排进了代码块中\n */\npublic class Memento {\n    ...\n    private int number;  // private：只有 Memento 自己能读写，Gamer 和 Main 都不能直接改\n    ...\n\n    // 不写访问修饰符＝包内可见：同包的 Gamer 能读，包外的 Main 读不到\n    // 不提供 setter，所以 Gamer 只能读不能改\n    int getNumber() {\n        return number;\n    }\n}\n\nGamer 类可以通过 getNumber 方法获取 number 的值。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目的三条要求",
        "bullets": [
          "原书要求如下，题干中这三条没有显示出来",
          "Memento 类可以获取和改变 number 的值",
          "Gamer 类可以获取 number 的值，但不能改变它",
          "Main 类既不能获取也不能改变 number 的值"
        ]
      },
      {
        "title": "第二步　先确定类所在的包",
        "bullets": [
          "Memento 和 Gamer 都在 game 包里，Main 在包外"
        ]
      },
      {
        "title": "第三步　答案为什么这样设",
        "bullets": [
          "number 设为 private：只有 Memento 自己能读写",
          "getNumber() 不加修饰符（包内可见）：同包的 Gamer 能读，包外的 Main 读不到",
          "不提供给外部的 setter：Gamer 不能改",
          "这样三条要求都满足"
        ]
      }
    ],
    "memory": [
      "用“private 字段＋包内可见的 getter”，实现同包只读、包外不可见",
      "这正是 Memento 宽窄接口的 Java 实现方式"
    ],
    "quotes": [
      {
        "text": "Gamer类可以获取number的值，但不能改变它",
        "source": "18-Memento模式.md 第483行"
      },
      {
        "text": "可以通过将 number 的可见性设置为 private，然后将获取 number 值的 getNumber 方法的可见性设置为默认（即不带 public、protected、private 修饰符）来实现习题中的需求。",
        "source": "A18-Memento模式-习题解答.md 第27行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/18-Memento模式.md"
  },
  {
    "id": "TEXTBOOK-18-04",
    "chapter": "第18章",
    "pattern": "备忘录模式",
    "source": "《图解设计模式》习题18-4",
    "stem": "Java 使用序列化（Serialization）功能可以将 Memento 类的实例保存为文件。请修改示例程序以实现下列功能。",
    "materials": [
      {
        "type": "text",
        "content": "(1) 在应用程序启动时，如果发现不存在 game.dat 文件时，以所持金钱数目为 100 开始游戏"
      },
      {
        "type": "text",
        "content": "(2) 当所持金钱大量增加后，将 Memento 类的实例保存为文件 game.dat"
      },
      {
        "type": "text",
        "content": "(3) 在应用程序启动时, 如果发现 game.dat 已经存在, 则以文件中所保存的状态开始游戏"
      },
      {
        "type": "text",
        "content": "在修改示例程序时，可以参考以下提示信息。"
      },
      {
        "type": "text",
        "content": "(a) 要保存的 Memento 类需要实现 java.io.Serializable 接口"
      },
      {
        "type": "text",
        "content": "(b) 在保存对象状态时，需要调用 ObjectOutputStream 的 writeObject 方法"
      },
      {
        "type": "text",
        "content": "(c) 在恢复对象状态时，需要调用 ObjectInputStream 的 readObject 方法"
      },
      {
        "type": "text",
        "content": "(d) 详细信息请参考 Java 的 API 文档中的以下相关内容。"
      },
      {
        "type": "list",
        "items": [
          "java.io.ObjectOutputStream 类"
        ]
      },
      {
        "type": "list",
        "items": [
          "java.io.ObjectInputStream类"
        ]
      },
      {
        "type": "list",
        "items": [
          "java.io.ObjectOutput 接口"
        ]
      },
      {
        "type": "list",
        "items": [
          "java.io.ObjectInput 接口"
        ]
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "代码请参见代码清单 A18-1、代码清单 A18-2。"
      },
      {
        "type": "text",
        "content": "代码清单 A18-1 对应序列化的 Memeto 类 (Memeto.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 支持序列化的 Memento：实现 Serializable 后才能写进文件\n * getMoney 是 public 的窄接口，给 Caretaker（Main）用；其余方法是包内可见的宽接口，只给 Gamer 用\n */\npackage game;\nimport java.io.*;\nimport java.util.*;\n\n// 实现 Serializable：允许用对象流保存到文件\npublic class Memento implements Serializable {\n    int money;                          // 所持金钱\n    ArrayList fruits;                   // 获得的水果\n    public int getMoney() {             // 获取当前所持金钱 (narrow interface)\n        return money;\n    }\n    Memento(int money) {                  // 构造函数 (wide interface)\n        this.money = money;\n        this.fruits = new ArrayList();\n    }\n    void addFruit(String fruit) {          // 添加水果 (wide interface)\n        fruits.add(fruit);\n    }\n    // 返回水果列表的副本，防止外部改动备忘录内部\n    List getFruits() {                   // 获取水果 (wide interface)\n        return (List)fruits.clone();\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A18-2 对应序列化的 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 支持存档的 Main（第一部分）：Main 扮演负责人 Caretaker\n * 启动时先尝试读存档：有存档就恢复，没有就从 100 元开始新游戏\n */\npublic class Main {\n    public static final String SAVEFILENAME = \"game.dat\";  // 存档文件名\n    public static void main(String[] args) {\n        Gamer gamer = new Gamer(100);                      // 最初的所持金钱数为 100\n        // 尝试从文件读出上次保存的备忘录\n        Memento memento = loadMemento();                     // 从文件中读取起始状态\n        // 读到了：把游戏恢复到存档状态\n        if (memento != null) {\n            System.out.println(\"读取上次保存存档开始游戏。\");\n            gamer.restoreMemento(memento);\n        // 没读到：新游戏，用当前状态生成第一个备忘录\n        } else {\n            System.out.println(\"新游戏。\");\n            memento = gamer.createMemento();\n        }\n        // 进行 100 轮游戏\n        for (int i = 0; i < 100; i++) {\n            System.out.println(\"====\" + i);          // 显示次数\n            System.out.println(\"当前状态:\" + gamer);    // 显示当前主人公的状态\ngamer.bet();    // 进行游戏\n\nSystem.out.println(\"所持金钱为 \" + gamer.getMoney() + \" 元。\");"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 支持存档的 Main（第二部分，接上一段）\n * 注意：loadMemento 中写成了 new ObjectOutputStream(...)，读取时应为 new ObjectInputStream(...)\n */\n// 决定如何处理 Memento\n// 钱比存档时多：生成新备忘录并写入文件\nif (gamer.getMoney() > memento.getMoney()) {\n    System.out.println(\"      (所持金钱增加了许多, 因此保存游戏当前的状态) \");\n    memento = gamer.createMemento();\n    saveMemento(memento);   // 保存至文件\n// 钱少于存档时的一半：恢复到存档状态\n} else if (gamer.getMoney() < memento.getMoney() / 2) {\n    System.out.println(\"      (所持金钱减少了许多, 因此将游戏恢复至以前的状态 \");\n    gamer.restoreMemento(memento);\n}\n\n// 等待一段时间\ntry {\n    Thread.sleep(1000);\n} catch (InterruptedException e) {\n}\nSystem.out.println(\"\");\n}\n}\n// 存档：用对象输出流把备忘录写进 game.dat\npublic static void saveMemento(Memento memento) {\n    try {\n        ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream(SAVEFILENAME));\n        out.writeObject(memento);\n        out.close();\n    } catch (IOException e) {\n        e.printStackTrace();\n    }\n}\n// 读档：用对象流从 game.dat 读出备忘录\npublic static Memento loadMemento () {\n    Memento memento = null;\n    try {\n        ObjectInput in = new ObjectOutputStream(new FileInputStream(SAVEFILENAME));\n        memento = (Memento)in.readObject();  // 读出来的是 Object，要转换成 Memento\n        in.close();\n    // 没有存档文件时进入这里，返回 null\n    } catch (FileNotFoundException e) {\n        System.out.println(e.toString());\n    } catch (IOException e) {\n        e.printStackTrace();\n    } catch (ClassNotFoundException e) {\n        e.printStackTrace();\n    }\n    return memento;\n}"
      },
      {
        "type": "text",
        "content": "如果对代码清单 A18-2 中的 Main 类做如下修改，即可压缩要保存的数据。在保存大量数据时这种方法非常有效。"
      },
      {
        "type": "code",
        "language": "text",
        "content": "/**\n * 压缩存档的第 1 处修改：导入压缩相关的类\n */\n(1) 增加 import java.util.zip.*;"
      },
      {
        "type": "code",
        "language": "text",
        "content": "/**\n * 压缩存档的第 2、3 处修改：↓ 上方是原写法，下方是修改后的写法\n * 写入时在文件流外面套一层 DeflaterOutputStream（压缩），读取时套一层 InflaterInputStream（解压）\n * 说明文字中的 InflaterOutputStream 与代码不一致，以代码中的 InflaterInputStream 为准\n */\nObjectOutput out = new ObjectOutputStream(new FileOutputStream(SAVEFILENAME));\n↓\nObjectOutput out = new ObjectOutputStream(new DeflaterOutputStream(new FileOutputStream(SAVEFILENAME)));\n(3) 在输入中加入 InflaterOutputStream\nObjectInput in = new ObjectInputStream(new FileInputStream(SAVEFILENAME));\n↓\nObjectInput in = new ObjectInputStream(new InflaterInputStream(new FileInputStream(SAVEFILENAME)));"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要做什么",
        "bullets": [
          "把 Memento 保存成文件 game.dat，下次启动时从文件恢复",
          "没有存档就从 100 元开始；金钱大量增加时存档"
        ]
      },
      {
        "title": "第二步　谁做哪部分",
        "bullets": [
          "Memento：实现 Serializable，才能被写进对象流",
          "Main（Caretaker）：负责 saveMemento 写文件、loadMemento 读文件",
          "Gamer（Originator）：仍然用 createMemento 和 restoreMemento 生成和恢复"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "启动时 loadMemento()：读到存档就 restoreMemento，读不到就当新游戏",
          "每轮游戏后，钱比存档多就 createMemento 并 saveMemento 存到文件",
          "钱少于存档的一半就恢复到存档状态",
          "saveMemento 用 ObjectOutputStream.writeObject，loadMemento 用 ObjectInputStream.readObject"
        ]
      },
      {
        "title": "第四步　顺带演示了压缩",
        "bullets": [
          "在输出流外面套一层 DeflaterOutputStream，输入流外面套一层 InflaterInputStream，就能压缩存档",
          "这呼应了习题 18-2 中“压缩后保存”的思路",
          "题库答案中“在输入中加入 InflaterOutputStream”的说明文字与下方代码不一致，代码里实际使用的是 InflaterInputStream"
        ]
      }
    ],
    "memory": [
      "Memento 持久化：implements Serializable＋对象流读写",
      "保存和读取文件属于 Caretaker 的工作"
    ],
    "quotes": [
      {
        "text": "(a) 要保存的 Memento 类需要实现 java.io.Serializable 接口",
        "source": "18-Memento模式.md 第519行"
      },
      {
        "text": "当 Caretaker 角色想要保存当前的 Originator 角色的状态时，会通知 Originator 角色。",
        "source": "18-Memento模式.md 第333行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/18-Memento模式.md"
  },
  {
    "id": "TEXTBOOK-19-01",
    "chapter": "第19章",
    "pattern": "状态模式",
    "source": "《图解设计模式》习题19-1",
    "stem": "Java 本来应当将 Context 定义为抽象类而非接口，然后让 Context 类持有 state 字段，这样更符合 State 模式的设计思想。但是在示例程序中我们并没有这么做，而是将 Context 角色定义为 Context 接口，让 SafeFrame 类持有 state 字段，请问这是为什么呢？",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "因为在 Java 中只能单一继承，所以如果将 Context 角色定义为类，那么由于 SafeFrame 类已经是 Frame 类的子类了，它将无法再继承 Context 类。"
      },
      {
        "type": "text",
        "content": "不过，如果另外编写一个 Context 类的子类，并将它的实例保存在 SafeFrame 类的字段中，那么通过将处理委托给这个实例是可以实现习题中的需求的。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "按 State 模式的思路，Context 最好是抽象类，自己持有 state 字段",
          "示例却把 Context 写成接口，让 SafeFrame 持有 state，问为什么"
        ]
      },
      {
        "title": "第二步　关键限制",
        "bullets": [
          "SafeFrame 已经继承了 Frame（窗口类）",
          "Java 只能单继承，SafeFrame 不能再继承一个 Context 类",
          "所以只能让 Context 成为接口，SafeFrame 去实现它"
        ]
      },
      {
        "title": "第三步　还有什么办法",
        "bullets": [
          "另外写一个 Context 子类，把它的实例放进 SafeFrame 的字段里",
          "SafeFrame 把状态相关的处理委托给这个对象，也能满足需求"
        ]
      }
    ],
    "memory": [
      "已有父类的类不能再继承另一个类，这时用接口或委托",
      "Java 单继承是很多设计取舍的原因"
    ],
    "quotes": [
      {
        "text": "因为在 Java 中只能单一继承，所以如果将 Context 角色定义为类，那么由于 SafeFrame 类已经是 Frame 类的子类了，它将无法再继承 Context 类。",
        "source": "A19-State模式-习题解答.md 第11行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/19-State模式.md"
  },
  {
    "id": "TEXTBOOK-19-02",
    "chapter": "第19章",
    "pattern": "状态模式",
    "source": "《图解设计模式》习题19-2",
    "stem": "如果要对示例程序中的“白天”和“晚上”的时间区间做如下变更，请问应该怎样修改程序呢？",
    "materials": [
      {
        "type": "table",
        "headers": [
          "",
          "白天",
          "晚上"
        ],
        "rows": [
          [
            "现在",
            "9:00~16:59",
            "17:00~23:59以及0:00~8:59"
          ],
          [
            "变更为",
            "8:00~20:59",
            "21:00~23:59以及0:00~7:59"
          ]
        ]
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "需要修改 DayState 类（代码清单 19-4）以及 NightState 类（代码清单 19-5）的 doClock 方法。"
      },
      {
        "type": "text",
        "content": "如果事先在 SafeFrame 类中定义一个 isDay 方法和一个 isNight 方法，让外部可以判断当前究竟是白天还是晚上，那么就可以将白天和晚上的具体时间范围限制在 SafeFrame 类内部。这样修改后，当时间范围发生变更时，只需要修改 SafeFrame 类即可。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要改什么",
        "bullets": [
          "原书要求：白天从 9:00～16:59 改为 8:00～20:59，晚上相应变为 21:00～23:59 和 0:00～7:59，题干中的这张表没有显示出来"
        ]
      },
      {
        "title": "第二步　时间判断写在哪里",
        "bullets": [
          "状态切换写在各个状态类的 doClock 方法里",
          "DayState 判断“该不该切到晚上”，NightState 判断“该不该切到白天”",
          "所以要改 DayState 和 NightState 的 doClock"
        ]
      },
      {
        "title": "第三步　更好的写法",
        "bullets": [
          "答案建议在 SafeFrame 里定义 isDay() 和 isNight()",
          "时间范围只写在 SafeFrame 一处，状态类调用这两个方法判断",
          "以后时间范围再变，只改 SafeFrame"
        ]
      },
      {
        "title": "第四步　为什么这样更好",
        "bullets": [
          "如果每个状态类都写死时间，规则变一次就要改多个类，还容易改漏",
          "把会变的数字集中在一处，就是“封装变化点”"
        ]
      }
    ],
    "memory": [
      "状态迁移条件分散在各状态类里，改条件要改多个类",
      "把条件集中成一个判断方法，可以减少修改点"
    ],
    "quotes": [
      {
        "text": "需要修改 DayState 类（代码清单 19-4）以及 NightState 类（代码清单 19-5）的 doClock 方法。",
        "source": "A19-State模式-习题解答.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/19-State模式.md"
  },
  {
    "id": "TEXTBOOK-19-03",
    "chapter": "第19章",
    "pattern": "状态模式",
    "source": "《图解设计模式》习题19-3",
    "stem": "请在示例程序中增加一个新的“午餐时间（12:00\\~12:59）”状态。",
    "materials": [
      {
        "type": "list",
        "items": [
          "在午餐时间使用金库的话，会向警报中心通知紧急情况"
        ]
      },
      {
        "type": "list",
        "items": [
          "在午餐时间按下警铃的话，会向警报中心通知紧急情况"
        ]
      },
      {
        "type": "list",
        "items": [
          "在午餐时间使用电话的话，会呼叫警报中心的留言电话"
        ]
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "这里我们编写一个扮演 ConcreteState 角色的表示 “午餐时间” 的状态 NoonState 类（代码清单 A19-1）。此外，还需要修改 DayState 类（代码清单 19-4）以及 NightState 类（代码清单 19-5）的 doClock 方法（代码清单 A19-2、代码清单 A19-3）。"
      },
      {
        "type": "text",
        "content": "代码清单 A19-1 NoonState 类 ( NoonState.java )"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * NoonState：新增的“午餐时间”状态（ConcreteState），和其他状态一样做成单例\n * 午餐时间：使用金库和按警铃都通知警报中心，打电话转到留言录音\n */\npublic class NoonState implements State {\n    // 状态类没有自己的字段，全程只需要一个实例\n    private static NoonState singleton = new NoonState();\n    private NoonState() {                          // 构造函数的可见性是 private\n}\n    public static State getInstance() {                 // 获取唯一实例\n        return singleton;\n    }\n    // 时间变化时决定是否切换状态\n    public void doClock(Context context, int hour) {      // 设置时间\n        // 到了晚上：切换为夜间状态\n        if (hour < 9 || 17 <= hour) {\n            context.changeState(NightState.getInstance());\n        // 回到白天的时间段：切换为白天状态\n        } else if (9 <= hour && hour < 12 || 13 <= hour && hour < 17) {\n            context.changeState(DayState.getInstance());\n        }\n    }\n    // 午餐时间使用金库：通知警报中心\n    public void doUse(Context context) {                 // 使用金库\n        context.callSecurityCenter(\"紧急: 午餐时间使用金库! \");\n}\npublic void doAlarm(Context context) {                  // 按下警铃\n    context.callSecurityCenter(\"按下警铃(午餐时间)\");\n}\n// 午餐时间打电话：留言录音\npublic void doPhone(Context context) {                  // 正常通话\n    context.recordLog(\"午餐时间的通话录音\");\n}\npublic String toString() {                    // 显示表示类的文字\n    return \"[午餐时间]\";\n}\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A19-2 DayState 类 (DayState.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 修改后的 DayState：加入“到 12 点切换到午餐时间”的判断\n */\npublic class DayState implements State {\n    private static DayState singleton = new DayState();\n    private DayState() {                          // 构造函数的可见性是 private\n}\npublic static State getInstance() {                   // 获取唯一实例\n    return singleton;\n}\npublic void doClock(Context context, int hour) {      // 设置时间\n    if (hour < 9 || 17 <= hour) {\n        context.changeState(NightState.getInstance());\n    // 新增：12 点整进入午餐时间\n    } else if (12 <= hour && hour < 13) {\n        context.changeState(NoonState.getInstance());\n    }\n}\npublic void doUse(Context context) {                   // 使用金库\n    context.recordLog(\"使用金库 (白天)\");\n}\npublic void doAlarm(Context context) {                   // 按下警铃\n    context.callSecurityCenter(\"按下警铃 (白天)\");\n}\npublic void doPhone(Context context) {                   // 正常通话\n    context.callSecurityCenter(\"正常通话 (白天)\");\n}\npublic String toString() {                    // 显示表示类的文字\n    return \"[白天]\";\n}\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A19-3 NightState 类 (NightState.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 修改后的 NightState：加入“到 12 点切换到午餐时间”的判断\n */\npublic class NightState implements State {\n    private static NightState singleton = new NightState();\n    private NightState() {                          // 构造函数的可见性是 private\n}\npublic static State getInstance() {                   // 获取唯一实例\n    return singleton;\n}\npublic void doClock(Context context, int hour) {   // 设置时间\n    // 新增：12 点整进入午餐时间\n    if (12 <= hour && hour < 13) {\n        context.changeState(NoonState.getInstance());\n    // 其余白天时间：切换为白天状态\n    } else if (9 <= hour && hour < 17) {\n        context.changeState(DayState.getInstance()) ;\n    }\n}\npublic void doUse(Context context) {                  // 使用金库\n    context.callSecurityCenter(\"紧急: 晚上使用金库! \");\n}\npublic void doAlarm(Context context) {                 // 按下警铃\n    context.callSecurityCenter(\"按下警铃 (晚上) \");\n}\npublic void doPhone(Context context) {                // 正常通话\n    context.recordLog(\"晚上的通话录音 \");\n}\npublic String toString() {                    // 显示表示类的文字\n    return \"[晚上]\";\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要加什么",
        "bullets": [
          "新增“午餐时间（12:00～12:59）”状态",
          "原书列出的要求（题干中未显示）：午餐时间使用金库要通知警报中心，按警铃要通知警报中心，打电话要呼叫留言电话"
        ]
      },
      {
        "title": "第二步　要写什么、要改什么",
        "bullets": [
          "新写 NoonState，实现 State 接口，和其他状态一样做成单例",
          "DayState、NightState 的 doClock 要加上“到 12 点就切到午餐时间”的判断",
          "SafeFrame 不用改，它只调用当前状态对象"
        ]
      },
      {
        "title": "第三步　NoonState 的代码为什么这样写",
        "bullets": [
          "doClock：小于 9 或大于等于 17 切到晚上；9～11 点或 13～16 点切回白天",
          "doUse、doAlarm：调用 callSecurityCenter 通知警报中心",
          "doPhone：调用 recordLog，即留言电话录音",
          "toString 返回“[午餐时间]”，便于在界面上显示当前状态"
        ]
      },
      {
        "title": "第四步　这道题暴露的问题",
        "bullets": [
          "加一个状态，除了新类，还要改已有状态的迁移条件",
          "这说明状态模式加新状态容易，但不是完全不用改旧代码"
        ]
      }
    ],
    "memory": [
      "新增状态＝新写一个 ConcreteState＋修改相邻状态的迁移条件",
      "不同状态下同名方法的行为不同，这就是状态模式的核心"
    ],
    "quotes": [
      {
        "text": "在午餐时间使用金库的话，会向警报中心通知紧急情况",
        "source": "19-State模式.md 第630行"
      },
      {
        "text": "此外，还需要修改 DayState 类（代码清单 19-4）以及 NightState 类（代码清单 19-5）的 doClock 方法（代码清单 A19-2、代码清单 A19-3）。",
        "source": "A19-State模式-习题解答.md 第27行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/19-State模式.md"
  },
  {
    "id": "TEXTBOOK-19-04",
    "chapter": "第19章",
    "pattern": "状态模式",
    "source": "《图解设计模式》习题19-4",
    "stem": "请在示例程序中增加一个新的“紧急情况”状态。不论是什么时间，只要处于“紧急情况”下，就向警报中心通知紧急情况。",
    "materials": [
      {
        "type": "list",
        "items": [
          "按下警铃后，系统状态变为“紧急情况”状态"
        ]
      },
      {
        "type": "list",
        "items": [
          "如果“紧急情况”下使用金库的话，会向警报中心通知紧急情况（与当时的时间无关）"
        ]
      },
      {
        "type": "list",
        "items": [
          "如果“紧急情况”下按下警铃的话，会向警报中心通知紧急情况（与当时的时间无关）"
        ]
      },
      {
        "type": "list",
        "items": [
          "如果“紧急情况”下使用电话的话，会呼叫警报中心的留言电话（与当时的时间无关）"
        ]
      },
      {
        "type": "text",
        "content": "不过，这份需求中也有一些问题，大家看出来了吗？"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "这里我们编写一个表示“紧急状态”的 UrgentState 类（代码清单 A19-5）。此外，我们还需要在 DayState 类以及 NightState 类的 doAlarm 方法中加入状态迁移的代码（请参见代码清单 A19-5、代码清单 A19-6）。"
      },
      {
        "type": "text",
        "content": "习题中的需求中有一个问题点，就是一旦进入了紧急状态就没有办法恢复至原来的状态。"
      },
      {
        "type": "text",
        "content": "代码清单 A19-4 UrgentState 类 (UrgentState.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * UrgentState：新增的“紧急情况”状态，任何操作都和时间无关\n * 参考答案中 doPhone 调用的是 callSecurityCenter，而题目要求紧急时打电话呼叫留言电话（recordLog）\n */\npublic class UrgentState implements State {\n    private static UrgentState singleton = new UrgentState();\n    private UrgentState() {                          // 构造函数的可见性是 private\n}\n    public static State getInstance() {                   // 获取唯一实例\n        return singleton;\n    }\n    // 时间变化不会让它切换回白天或晚上，所以一旦进入就无法离开\n    public void doClock(Context context, int hour) {   // 设置时间\n        // 在设置时间处理中什么都不做\n    }\n    // 紧急时使用金库：通知警报中心\n    public void doUse(Context context) {                 // 使用金库\n        context.callSecurityCenter(\"紧急:紧急时使用金库! \");\n    }\n    // 紧急时按警铃：通知警报中心\n    public void doAlarm(Context context) {                   // 按下警铃\n        context.callSecurityCenter(\"按下警铃(紧急时)\");\n    }\n    public void doPhone(Context context) {                 // 正常通话\n        context.callSecurityCenter(\"正常通话(紧急时)\");\n}\n    public String toString() {                          // 显示表示类的文字\n        return \"[紧急时]\";\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A19-5 DayState 类 (DayState.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 修改后的 DayState：按警铃后切换到紧急状态\n */\npublic class DayState implements State {\n    private static DayState singleton = new DayState();\n    private DayState() {                          // 构造函数的可见性是 private\n}\npublic static State getInstance() {                 // 获取唯一实例\n    return singleton;\n}\npublic void doClock(Context context, int hour) {      // 设置时间\n    if (hour < 9 || 17 <= hour) {\n        context.changeState(NightState.getInstance());\n    }\n}\npublic void doUse(Context context) {                  // 使用金库\n    context.recordLog(\"使用金库 (白天)\");\n}\npublic void doAlarm(Context context) {                 // 按下警铃\n    context.callSecurityCenter(\"按下警铃 (白天)\");\n    // 新增：状态迁移到紧急情况\n    context.changeState(UrgentState.getInstance());\n}\npublic void doPhone(Context context) {                  // 正常通话\n    context.callSecurityCenter(\"正常通话 (白天)\");\n}\npublic String toString() {                    // 显示表示类的文字\n    return \"[白天]\";\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A19-6 NightState 类 (NightState.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 修改后的 NightState：按警铃后同样切换到紧急状态\n * 原书 callSecurityCenter(\"按下警铃(晚上)\") 后面少了分号\n */\npublic class NightState implements State {\n    private static NightState singleton = new NightState();\n    private NightState() {                          // 构造函数的可见性是 private\n}\n    public static State getInstance() {                 // 获取唯一实例\n        return singleton;\n    }\n    public void doClock(Context context, int hour) {      // 设置时间\n        if (9 <= hour && hour < 17) {\n            context.changeState(DayState.getInstance());\n        }\n    }\n    public void doUse(Context context) {                 // 使用金库\n        context.callSecurityCenter(\"紧急: 晚上使用金库! \");\n    }\n    public void doAlarm(Context context) {                 // 按下警铃\n        context.callSecurityCenter(\"按下警铃(晚上)\")\n            // 新增：状态迁移到紧急情况\n            context.changeState(UrgentState.getInstance());\n    }\n    public void doPhone(Context context) {                 // 正常通话\n        context.recordLog(\"晚上的通话录音\");\n    }\n    public String toString() {                  // 显示表示类的文字\n        return \"[晚上]\";\n    }\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要加什么",
        "bullets": [
          "原书列出的要求（题干中未显示）：按下警铃后进入“紧急情况”；紧急情况下使用金库、按警铃都通知警报中心，打电话呼叫留言电话，而且都和时间无关"
        ]
      },
      {
        "title": "第二步　要写什么、要改什么",
        "bullets": [
          "新写 UrgentState，实现 State 接口",
          "DayState、NightState 的 doAlarm 里，在通知警报中心后加一句 changeState(UrgentState.getInstance())"
        ]
      },
      {
        "title": "第三步　UrgentState 的代码为什么这样写",
        "bullets": [
          "doClock 什么都不做：紧急情况和时间无关，时间变化不会让它切回白天或晚上",
          "doUse、doAlarm 都调用 callSecurityCenter",
          "参考答案的 doPhone 也调用了 callSecurityCenter，而题目要求是“呼叫留言电话”，示例中留言电话对应的是 recordLog，这一处按参考答案保留"
        ]
      },
      {
        "title": "第四步　需求里的问题",
        "bullets": [
          "答案指出：一旦进入紧急状态，就再也回不到原来的状态",
          "因为没有任何事件会让 UrgentState 切换出去，实际系统需要增加“解除紧急”的操作"
        ]
      }
    ],
    "memory": [
      "状态迁移可以由普通操作触发，比如按警铃",
      "设计状态时要检查每个状态有没有出口"
    ],
    "quotes": [
      {
        "text": "习题中的需求中有一个问题点，就是一旦进入了紧急状态就没有办法恢复至原来的状态。",
        "source": "A19-State模式-习题解答.md 第134行"
      },
      {
        "text": "如果“紧急情况”下使用电话的话，会呼叫警报中心的留言电话（与当时的时间无关）",
        "source": "19-State模式.md 第749行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/19-State模式.md"
  },
  {
    "id": "TEXTBOOK-20-01",
    "chapter": "第20章",
    "pattern": "享元模式",
    "source": "《图解设计模式》习题20-1",
    "stem": "请为示例程序中的BigString类（代码清单20-14）增加如下构造函数。",
    "materials": [
      {
        "type": "code",
        "language": "text",
        "content": "// 要新增的构造方法：shared 为 true 时共享 BigChar，为 false 时不共享\nBigString(String string, boolean shared)"
      },
      {
        "type": "text",
        "content": "当 shared 为 true 时，程序中会共享 BigChar 类的实例；当 shared 为 false 时则不会共享实例。"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "如果不共享 BigChar，就不使用 BigCharFactory，直接 new BigChar 即可。在代码清单 A20-1 中，为了使程序更容易理解，我们编写了两个间接负责生成初始化的 private 的 initShared 方法和 initUnshared 方法。"
      },
      {
        "type": "text",
        "content": "代码清单 A20-1 BigString 类 (BigString.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * BigString：可以选择是否共享 BigChar 的版本\n * 共享：通过享元工厂取；不共享：每个字符都直接 new\n */\npublic class BigString {\n    // 大型文字的数组\n    private BigChar[] bigchars;\n    // 构造函数\n    // 原来的构造方法：默认共享\n    public BigString(String string) {\n        initShared(string);\n    }\n    // 构造函数\n    // 新增的构造方法：按参数选择方式\n    public BigString(String string, boolean shared) {\n        if (shared) {\n            initShared(string);\n        } else {\n            initUnshared(string);\n        }\n    }\n    // 共享方式初始化\n    // 共享方式：同一个字符只会创建一次\n    private void initShared(String string) {\n        bigchars = new BigChar[string.length()];\n        BigCharFactory factory = BigCharFactory.getInstance();\n        for (int i = 0; i < bigchars.length; i++) {\n            // 从工厂取，工厂里已有就直接返回\n            bigchars[i] = factory.getBigChar(string.charAt(i));\n        }\n    }\n    // 非共享方式初始化\n    // 非共享方式：不经过工厂\n    private void initUnshared(String string) {\n        bigchars = new BigChar[string.length()];\n        for (int i = 0; i < bigchars.length; i++) {\n            // 每个字符都新建一个对象\n            bigchars[i] = new BigChar(string.charAt(i));\n        }\n    }\n    // 显示\n    public void print() {\n        for (int i = 0; i < bigchars.length; i++) {\n            bigchars[i].print();\n        }\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A20-2 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：同一个数字串分别用非共享和共享方式显示\n * 注意：BaString 是原书识别错误，应为 BigString\n */\npublic class Main {\n    public static void main(String[] args) {\n        if (args.length == 0) {\n            System.out.println(\"Usage: java Main digits\");\n            System.out.println(\"Example: java Main 1212123\");\nSystem.exit(0);\n}\n    BigString bs;\n    bs = new BaString(args[0], false);      // 非共享\n    bs.print();\n    bs = new BaString(args[0], true);       // 共享\n    bs.print();\n}\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要做什么",
        "bullets": [
          "给 BigString 加一个构造方法 BigString(String, boolean shared)",
          "shared 为 true 共享 BigChar，为 false 不共享"
        ]
      },
      {
        "title": "第二步　共享和不共享差在哪",
        "bullets": [
          "共享：通过 BigCharFactory.getBigChar() 取，同一个字符只创建一次",
          "不共享：直接 new BigChar()，每个字符都新建一个"
        ]
      },
      {
        "title": "第三步　答案的代码为什么这样写",
        "bullets": [
          "把两种初始化分成 initShared 和 initUnshared 两个 private 方法",
          "新构造方法根据 shared 调用其中一个；原来的单参数构造方法调用 initShared，保持原有行为",
          "题库答案 Main 中的 BaString 是识别错误，应为 BigString"
        ]
      }
    ],
    "memory": [
      "享元的共享靠工厂：经过工厂就共享，直接 new 就不共享"
    ],
    "quotes": [
      {
        "text": "如果不共享 BigChar，就不使用 BigCharFactory，直接 new BigChar 即可。",
        "source": "A20-Flyweight模式-习题解答.md 第11行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/20-Flyweight模式.md"
  },
  {
    "id": "TEXTBOOK-20-02",
    "chapter": "第20章",
    "pattern": "享元模式",
    "source": "《图解设计模式》习题20-2",
    "stem": "请使用习题 20-1 中修改后的 BigString 类（代码清单 A20-1），来比较共享 BigChar 类的实例时和不共享 BigChar 类的实例时内存的使用量。",
    "materials": [
      {
        "type": "text",
        "content": "参考 可以通过以下方法大致知道程序当前的内存使用量。为了能获取比较准确的内存使用量，我们会先使用 gc 方法进行垃圾回收后再进行计算。"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 获取当前内存使用量的方法\n */\nRuntime.getRuntime().gc();  // 先做一次垃圾回收，让结果更准确\n// 已用内存 = 总内存 - 空闲内存\nlong used = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().\nfreeMemory();\nSystem.out.println(\" 使用内存 = \" + used);"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "在代码清单 A20-3 中的 Main 类中，为 1000 个 \"1212123\" 对应的 BigString 类的实例分配了内存空间，并比较了两种情况下的内存使用量。从对比结果中我们可以发现，在共享的情况下确实大幅减少了内存使用量。"
      },
      {
        "type": "text",
        "content": "此外，运行程序后我们还可以发现，在非共享的情况下，运行速度也变慢了。这是因为在非共享的情况下生成BigChar的实例时，需要每次都读取文件。"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 比较共享与不共享时的内存用量：各创建 1000 个“1212123”的 BigString\n */\npublic class Main {\n    // 用数组保存 1000 个对象，防止被垃圾回收\n    private static BigString[] bsarray = new BigString[1000];\n    public static void main(String[] args) {\n        System.out.println(\"共享时:\");\n        testAllocation(true);\n        System.out.println(\"非共享时:\");\n        testAllocation(false);\n    }\n    // 按指定方式创建 1000 个 BigString，然后显示内存\n    public static void testAllocation(boolean shared) {\n        for (int i = 0; i < bsarray.length; i++) {\n            bsarray[i] = new BigString(\"1212123\", shared);\n        }\n        showMemory();\n    }\n    // 回收垃圾后计算并输出已用内存\n    public static void showMemory() {\n        Runtime.getRuntime().gc();\n        long used = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();\n        System.out.println(\"使用内存 = \" + used);\n    }\n}"
      },
      {
        "type": "text",
        "content": "图 A20-1 运行结果（结果根据环境不同而不同）"
      },
      {
        "type": "code",
        "language": "text",
        "content": "共享时：\n使用内存 = 162176\n非共享时：\n使用内存 = 2515032"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要比较什么",
        "bullets": [
          "用上一题的 BigString，比较共享和不共享 BigChar 时的内存用量"
        ]
      },
      {
        "title": "第二步　怎么测",
        "bullets": [
          "创建 1000 个“1212123”的 BigString，分别用共享和不共享两种方式",
          "先调用 gc 回收垃圾，再用 totalMemory - freeMemory 得到已用内存"
        ]
      },
      {
        "title": "第三步　结果怎么解释",
        "bullets": [
          "共享时约 16 万字节，不共享时约 250 万字节，差了十几倍",
          "“1212123”只有 1、2、3 三种字符，共享时全程只需要 3 个 BigChar",
          "不共享时每个 BigString 7 个，1000 个就是 7000 个",
          "不共享还更慢，因为每个 BigChar 都要读一次文件"
        ]
      }
    ],
    "memory": [
      "重复的对象越多，享元省得越多",
      "共享还能省掉重复创建对象的时间"
    ],
    "quotes": [
      {
        "text": "从对比结果中我们可以发现，在共享的情况下确实大幅减少了内存使用量。",
        "source": "A20-Flyweight模式-习题解答.md 第80行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/20-Flyweight模式.md"
  },
  {
    "id": "TEXTBOOK-20-03",
    "chapter": "第20章",
    "pattern": "享元模式",
    "source": "《图解设计模式》习题20-3",
    "stem": "在示例程序的BigCharFactory类（代码清单20-13）中，getBigChar方法是synchronized方法。如果不使用synchronized修饰符，会有什么问题呢？",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "当多个线程几乎同时调用该方法时，在判断是否已经生成实例时可能会出错，导致 new 出多个实例。"
      },
      {
        "type": "text",
        "content": "我们看看以下代码。"
      },
      {
        "type": "text",
        "content": "代码清单 A20-4 没有加上 synchronized 修饰符的情况（为了便于讲解，我们在最左边加上了数字）"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 去掉 synchronized 后的 getBigChar：多线程下可能创建出多个相同的 BigChar\n */\npublic BigChar getBigChar(char charname) {\n    // 第 2 行：从享元池取\n    BigChar bc = (BigChar)pool.get(\"\" + charname);\n    // 第 3 行：池里没有\n    if (bc == null) {\n        // 第 4 行：新建；两个线程可能都走到这里\n        bc = new BigChar(charname);\n        // 第 5 行：放进池子\n        pool.put(\"\" + charname, bc);\n    }\n    return bc;\n}"
      },
      {
        "type": "text",
        "content": "假设线程A和线程B同时调用getBigChar方法，且传递参数charname也相同，那么其结果可能会如图A20-2所示。"
      },
      {
        "type": "text",
        "content": "图 A20-2 不使用 synchronized 修饰符可能会导致 new 出多个实例"
      },
      {
        "type": "code",
        "language": "text",
        "content": "线程A 线程B\n在2: 获取bc的值\n在3: 判断bc是否为null\n在4: new BigChar\n在2: 获取bc的值(※B)\n在3: 判断bc是否为null\n在4: new BigChar\n在5: pool.put\n在7: return\n在5: pool.put(※A)\n在7: return"
      },
      {
        "type": "text",
        "content": "这种情况下，线程 A 和线程 B 都会 new BigChar。这是因为在（※A）之前先执行了（※B）的缘故。"
      },
      {
        "type": "text",
        "content": "为了防止这种现象发生，必须在获取 bc 值与 pool.put 之间，防止其他线程的中断处理。我们可以使用 synchronized 关键字来达到这个目的。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "BigCharFactory.getBigChar 加了 synchronized，问去掉会怎样"
        ]
      },
      {
        "title": "第二步　方法里的三步",
        "bullets": [
          "从 pool 中取字符对应的 BigChar",
          "取不到（为 null）就 new 一个",
          "把新对象 put 进 pool"
        ]
      },
      {
        "title": "第三步　多线程下出什么错",
        "bullets": [
          "线程 A 发现没有，正在 new，还没 put",
          "线程 B 也来取同一个字符，同样发现没有，也 new 一个",
          "结果同一个字符有了两个 BigChar，共享失败"
        ]
      },
      {
        "title": "第四步　synchronized 怎么解决",
        "bullets": [
          "保证“取—判断—创建—放入”这一串动作执行完之前，别的线程进不来",
          "这和习题 5-3 单例在多线程下出错是同一个道理"
        ]
      }
    ],
    "memory": [
      "“先查再创建”的代码在多线程下要加 synchronized",
      "否则享元池和单例都会被重复创建"
    ],
    "quotes": [
      {
        "text": "当多个线程几乎同时调用该方法时，在判断是否已经生成实例时可能会出错，导致 new 出多个实例。",
        "source": "A20-Flyweight模式-习题解答.md 第120行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/20-Flyweight模式.md"
  },
  {
    "id": "TEXTBOOK-21-01",
    "chapter": "第21章",
    "pattern": "代理模式",
    "source": "《图解设计模式》习题21-1",
    "stem": "Java 在示例程序中，PrinterProxy 类（代码清单 21-3）知道 Printer 类（代码清单 21-1）。即在 PrinterProxy 类中显式地写明了 Printer 类的类名。 请修改 PrinterProxy 类，让其不必知道 Printer 类。",
    "materials": [
      {
        "type": "text",
        "content": "提示 有许多不同的实现方法。这里请大家试着将 RealSubject 角色的类名作为字符串传递给PrinterProxy类的构造函数。"
      },
      {
        "type": "text",
        "content": "Java 在示例程序中，PrinterProxy 类（代码清单 21-3）的 setPrinterName 方法和 realize 方法都是 synchronized 方法。如果不使用 synchronized 方法会有什么问题呢？请举例说明。"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "代码请参见代码清单 A21-1、代码清单 A21-2。生成实例的部分被修改为如下代码。"
      },
      {
        "type": "code",
        "language": "text",
        "content": "// 按类名字符串加载类并创建对象，代理中不再出现 Printer 这个名字\nreal = (Printable)Class.forName(className).newInstance();"
      },
      {
        "type": "text",
        "content": "此外，real 的类型也从 Printer 类型变为了 Printable 类型。"
      },
      {
        "type": "text",
        "content": "这样，PrinterProxy 类可以从 Printer 类中分离出来作为独立的组件使用，而且只要是实现了 Printable 接口的类都可以扮演 Proxy 的角色。"
      },
      {
        "type": "text",
        "content": "注意 在编译代码时，必须像下面这样，不仅指定 Main.java，还需要指定 Printer.java（因为 Printer 类并没有被直接使用）。"
      },
      {
        "type": "code",
        "language": "text",
        "content": "javac Main.java Printer.java"
      },
      {
        "type": "text",
        "content": "关于 Class 类和 forName 方法，请参见 Abstract Factory 模式（本书第 8 章）中的详细讲解。"
      },
      {
        "type": "text",
        "content": "代码清单 A21-1 PrinterProxy 类 (PrinterProxy.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 不依赖 Printer 类的 PrinterProxy\n * “本人”的类名作为字符串传进来，真正需要时才用反射创建\n */\npublic class PrinterProxy implements Printable {\n    private String name;          // 名字\n    // 类型从 Printer 改为接口 Printable\n    private Printable real;       // \"本人\"\n    private String className;      // \"本人\" 的类名\n    // 构造时只记录名字和“本人”的类名，并不创建本人\n    public PrinterProxy(String name, String className) {      // 构造函数\n        this.name = name;\n        this.className = className;\n    }\n    // 改名：本人已存在就一起改\n    public synchronized void setPrinterName(String name) {  // 设置名字\n        if (real != null) {\n            real.setPrinterName(name);   // 同时设置 \"本人\" 的名字\n        }\n        this.name = name;\n    }\n    // 查名字：代理自己就能回答，不需要创建本人\n    public String getPrinterName() {     // 获取名字\n        return name;\n    }\n    // 打印：必须由本人完成，所以先确保本人已创建\n    public void print(String string) {  // 显示\n        realize();\n        real.print(string);\n    }\n    // 创建本人：只在第一次需要时创建\n    private synchronized void realize() {   // 生成 \"本人\"\n        if (real == null) {\n            try {\n                real = (Printable)Class.forName(className).newInstance();\n                real.setPrinterName(name);  // 无参构造创建后，再把名字设进去\n            } catch (ClassNotFoundException e) {\n                System.err.println(\"没有找到 \" + className + \" 类。\");\n            } catch (Exception e) {\n                e.printStackTrace();\n            }\n        }\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 21-2 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 客户端：通过字符串 \"Printer\" 指定本人的类\n */\npublic class Main {\n    public static void main(String[] args) {\n        // 此时还没有创建 Printer\n        Printable p = new PrinterProxy(\"Alice\", \"Printer\");\n        System.out.println(\"现在的名字是\" + p.getPrinterName() + \"。\");\n        p.setPrinterName(\"Bob\");\n        System.out.println(\"现在的名字是\" + p.getPrinterName() + \"。\");\n        p.print(\"Hello, world.\");  // 第一次打印时才真正创建 Printer\n    }\n}"
      },
      {
        "type": "text",
        "content": "图 A21-1 编译和运行结果"
      },
      {
        "type": "code",
        "language": "text",
        "content": "javac Main.java Printer.java\njava Main\n现在的名字是 Alice。\n现在的名字是 Bob。\nPrinter 的实例生成中……结束。\n=== Bob ===\nHello, world."
      },
      {
        "type": "text",
        "content": "请大家仔细对比一下示例程序的运行结果（图 21-3）与图 A21-1 中的运行结果。在图 A21-1 中，在 “Printer 的实例生成中” 处并没有显示名字（Bob）。这是因为实例是通过 newInstance 方法生成的，调用的是 Printer 类的不带参数的构造函数。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要解决什么",
        "bullets": [
          "原来 PrinterProxy 里写死了 new Printer(name)，代理离不开 Printer 类",
          "要让代理不认识具体的 Printer 类"
        ]
      },
      {
        "title": "第二步　怎样让代理不依赖具体类",
        "bullets": [
          "把“本人”的类名作为字符串传给代理的构造方法",
          "真正需要时用 Class.forName(className).newInstance() 按名字创建",
          "real 的类型也从 Printer 改成接口 Printable"
        ]
      },
      {
        "title": "第三步　改完的效果",
        "bullets": [
          "PrinterProxy 可以当作独立组件，代理任何实现了 Printable 的类",
          "因为代码里不再直接出现 Printer，编译时要手动把 Printer.java 一起编译",
          "newInstance 调用的是无参构造方法，所以生成时不显示名字，随后用 setPrinterName 把名字设进去"
        ]
      }
    ],
    "memory": [
      "代理只依赖主题接口，具体类名作为参数传入，用反射创建",
      "这样代理和真实主题彻底分开"
    ],
    "quotes": [
      {
        "text": "这样，PrinterProxy 类可以从 Printer 类中分离出来作为独立的组件使用，而且只要是实现了 Printable 接口的类都可以扮演 Proxy 的角色。",
        "source": "A21-Proxy模式-习题解答.md 第19行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/21-Proxy模式.md"
  },
  {
    "id": "TEXTBOOK-21-02",
    "chapter": "第21章",
    "pattern": "代理模式",
    "source": "《图解设计模式》习题21-2",
    "stem": "请根据题目材料完成本题",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "如果没有使用修饰符 synchronized，当多个线程分别调用 setPrinterName 方法和 realize 方法时，可能会导致 PrinterProxy 类的 name 与 Printer 类的 name 不同。"
      },
      {
        "type": "text",
        "content": "代码清单 A21-3 展示了不使用修饰符 synchronized 的程序。"
      },
      {
        "type": "text",
        "content": "代码清单 A21-3 不使用修饰符 synchronized 时（为了便于讲解，我们在最左边加上了字母和数字）"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 去掉 synchronized 后的两个方法，用来说明多线程下可能出现的问题\n * 原书用 1～5 标记 setPrinterName 的步骤，用 a～c 标记 realize 的步骤\n */\npublic void setPrinterName(String name) { // 设置名字\n    // 线程 A 在这里判断 real 为 null，所以不改本人的名字\n    if (real != null) {\n        real.setPrinterName(name);          // 同时设置“本人”的名字\n    }\n    // A 稍后才把代理的名字改成 Bob\n    this.name = name;\n}\n...\nprivate void realize() {                  // 生成“本人”\n    // 线程 B 在 A 改名之前插进来，判断 real 为 null\n    if (real == null) {\n        // B 用旧名字 Alice 创建了本人，最终代理叫 Bob、本人叫 Alice\n        real = new Printer(name);\n    }\n}"
      },
      {
        "type": "text",
        "content": "图 A21-2 不使用 synchronized 修饰符时导致名字不同"
      },
      {
        "type": "code",
        "language": "text",
        "content": "name的值 real的值 线程A 线程B\n\"Alice\" null 运行至1:\n\"Alice\" null 在2:判断real是否为null\n    切换至线程B\n\"Alice\" null 运行至a:\n\"Alice\" null 在b:判断real是否为null\n\"Alice\" 非null 在c:生成名叫Alice的Printer的实例并将它赋值给real\n    切换至线程A\n\"Bob\" 非null 在5:将Bob赋值给name\n※这时,PrinterProxy类的name变成了Bob,但Printer类的name却是Alice。"
      },
      {
        "type": "text",
        "content": "最开始时，PrinterProxy 类的 name 字段的值是 \"Alice\"，real 字段的值是 null（即还没有生成 Printer 类的实例）。"
      },
      {
        "type": "text",
        "content": "假设线程 A 在执行 setPrinterName(\"Bob\") 的同时，线程 B（通过 print 方法）调用了 realize 方法。这时，如果发生了图 A21-2 所示的线程切换，会出现 PrinterProxy 类的 name 字段的值是 \"Bob\"，但 Printer 类的 name 却是 Alice 的问题。"
      },
      {
        "type": "text",
        "content": "通过将 setPrinterName 方法和 realize 方法定义为 synchronized 方法，可以避免发生这样的线程切换，防止分别进行判断 real 字段值的处理和设置 real 字段值的处理。可以说，synchronized 方法 “守护着” real 字段。"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目在问什么",
        "bullets": [
          "这道题的题干在题库中只显示为“请根据题目材料完成本题”，完整题目被并入了上一题的题干末尾",
          "原题是：PrinterProxy 的 setPrinterName 和 realize 都是 synchronized，如果不加会有什么问题，请举例"
        ]
      },
      {
        "title": "第二步　两个方法都碰同一个字段",
        "bullets": [
          "setPrinterName：如果 real 已经存在，就同时改 real 的名字，再改代理自己的 name",
          "realize：如果 real 为 null，就用当前 name 创建 Printer"
        ]
      },
      {
        "title": "第三步　不加 synchronized 时的出错过程",
        "bullets": [
          "开始时 name 是 Alice，real 是 null",
          "线程 A 调用 setPrinterName(\"Bob\")，判断 real 为 null，所以不改 real，正要改 name",
          "这时切到线程 B，它通过 print 调用 realize，用 Alice 创建了 Printer",
          "再切回线程 A，把代理的 name 改成 Bob",
          "结果代理叫 Bob，真实打印机却叫 Alice"
        ]
      },
      {
        "title": "第四步　synchronized 起什么作用",
        "bullets": [
          "两个方法都加 synchronized 后，一个执行完另一个才能开始",
          "“判断 real”和“设置 real”不会被打断，名字就不会不一致"
        ]
      }
    ],
    "memory": [
      "多个方法读写同一个字段时，要一起加 synchronized",
      "代理延迟创建真实对象时，要防止创建和改名交叉执行"
    ],
    "quotes": [
      {
        "text": "如果没有使用修饰符 synchronized，当多个线程分别调用 setPrinterName 方法和 realize 方法时，可能会导致 PrinterProxy 类的 name 与 Printer 类的 name 不同。",
        "source": "A21-Proxy模式-习题解答.md 第104行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/21-Proxy模式.md"
  },
  {
    "id": "TEXTBOOK-22-01",
    "chapter": "第22章",
    "pattern": "命令模式",
    "source": "《图解设计模式》习题22-1",
    "stem": "请在示例程序中增加“设置颜色”的功能。就像手中握有多支不同颜色的笔一样，设置了新的颜色后，当拖动鼠标时，会画出新颜色的点。",
    "materials": [
      {
        "type": "text",
        "content": "提示 新建一个 ColorCommand 类，用来表示设置颜色命令。"
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "有多种方法可以实现习题中的要求。这里我们采用的方法如下:"
      },
      {
        "type": "text",
        "content": "① 在 drawer 包中增加表示 “设置颜色的命令” 的 ColorCommand 类（代码清单 A22-1）"
      },
      {
        "type": "text",
        "content": "② 在 Drawable 接口中增加“改变颜色的方法”setColor 方法（代码清单 A22-2）"
      },
      {
        "type": "text",
        "content": "③ 根据以上修改内容相应地修改 DrawCanvas 类（代码清单 A22-3）"
      },
      {
        "type": "text",
        "content": "④ 在 Main 类中增加 “红色” “绿色” “蓝色” 按钮（代码清单 A22-4）"
      },
      {
        "type": "text",
        "content": "无需对 command 包中的类和接口做任何修改。"
      },
      {
        "type": "text",
        "content": "图A22-1 在示例程序中添加了设置颜色的功能"
      },
      {
        "type": "image",
        "src": "images/textbook/p376-b16.png",
        "alt": "图A22-1 在示例程序中添加了设置颜色的功能"
      },
      {
        "type": "text",
        "content": "代码清单 A22-1 ColorCommand 类 (ColorCommand.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * ColorCommand：新增的“设置颜色”命令（ConcreteCommand）\n * 它和画点命令一样被保存在历史记录中，重绘时会按顺序重放，颜色不会丢\n */\nimport command.Command;\nimport java.awt.Color;\n\n// 实现 command 包中已有的 Command 接口，command 包本身不用改\npublic class ColorCommand implements Command {\n    // 绘制对象\n    // 接收者：要改颜色的画布\n    protected Drawable drawable;\n    // 颜色\n// 要设置成的颜色\nprivate Color color;\n// 构造函数\npublic ColorCommand(Drawable drawable, Color color) {\n    this.drawable = drawable;\n    this.color = color;\n}\n// 执行\n// 执行命令：让画布换颜色\npublic void execute() {\n    drawable.setColor(color);\n}\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A22-2 Drawable 接口 (Drawable.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * Drawable：画布要提供给命令使用的方法\n */\nimport java.awt.Color;\n\npublic interface Drawable {\n    public abstract void init();  // 初始化画布\n    public abstract void draw(int x, int y);  // 在 (x, y) 画一个点\n    public abstract void setColor(Color color);  // 新增：设置之后画点的颜色\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A22-3 DrawCanvas 类 (DrawCanvas.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * DrawCanvas：画布，即命令的接收者（Receiver）\n * 重绘时把历史记录中的所有命令再执行一遍\n */\npackage drawer;\n\nimport command.*;\n\nimport java.util.*;\nimport java.awt.*;\nimport java.awt.event.*;\nimport javax.swing.*;\n\npublic class DrawCanvas extends Canvas implements Drawable {\n    // 颜色\n    // 当前画笔颜色\n    private Color color;\n\n    // 要绘制的圆点的半径\n    private int radius;\n\n    // 命令的历史记录\n    // 历史记录：保存所有执行过的命令\n    private MacroCommand history;\n    // 构造函数\n    public DrawCanvas(int width, int height, MacroCommand history) {\n        setSize(width, height);\n        setBackground(Color.white);\n        this.history = history;\n        init();\n    }\n    // 重新全部绘制\n    // 重绘：按顺序重放历史中的命令\n    public void paint(Graphics g) {\n        history.execute();\n    }\n    // 初始化\n    // 初始化：默认红色、半径 6\n    public void init() {\n        color = Color.red;\n        radius = 6;\n        history.append(new ColorCommand(this,color));  // 把初始颜色也记成一条命令，这样清空后重放时颜色正确\n    }\n// 用当前颜色画一个圆点\npublic void draw(int x, int y) {\n    Graphics g = getGraphics();\n    g.setColor(color);\n    g.fillOval(x - radius, y - radius, radius * 2, radius * 2);\n}\n// 新增：改变当前颜色，由 ColorCommand 调用\npublic void setColor(Color color) {\n    this.color = color;\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A22-4 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 增加了红、绿、蓝三个颜色按钮的 Main\n * 按下颜色按钮 → 创建 ColorCommand → 加入历史 → 立即执行\n * 注意：eervaPoint() 是原书识别错误，应为 e.getPoint()\n */\nimport command.*;\nimport drawer.*;\n\nimport java.awt.*;\nimport java.awt.event.*;\nimport javax.swing.*;\n\npublic class Main extends JFrame implements ActionListener, MouseMotionListener,\nWindowListener {\n    // 绘制的历史记录\n    // 所有命令的历史记录\n    private MacroCommand history = new MacroCommand();\n    // 绘制区域\n    private DrawCanvas canvas = new DrawCanvas(400, 400, history);\n    // 删除按钮\n    private JButton clearButton = new JButton(\"clear\");\n    // 红色按钮\n    // 新增的三个颜色按钮\n    private JButton redButton = new JButton(\"red\");\n    // 绿色按钮\n    private JButton greenButton = new JButton(\"green\");\n    // 蓝色按钮\n    private JButton blueButton = new JButton(\"blue\");\n\n    // 构造函数\n    public Main(String title) {\n        super(title);\n\n        this.addWindowListener(this);\n        canvas.addMouseMotionListener(this);\n        clearButton.addActionListener(this);\n        // 按钮被点击时调用本类的 actionPerformed\n        redButton.addActionListener(this);\n        greenButton.addActionListener(this);\n        blueButton.addActionListener(this);\n\n        Box buttonBox = new Box(BoxLayout.X_AXIS);\n        buttonBox.add(clearButton);\n        buttonBox.add(redButton);\n        buttonBox.add(greenButton);\n        buttonBox.add(blueButton);\n        Box mainBox = new Box(BoxLayout.Y_AXIS);\n        mainBox.add(buttonBox);\n        mainBox.add(canvas);\n        getContentPane().add(mainBox);\n\n        pack();\n        show();\n    }\n\n    // ActionListener 接口中的方法\n// 根据被点击的按钮执行对应操作\npublic void actionPerformed(ActionEvent e) {\n    // 清空：删除所有历史，重新初始化后重绘\n    if (e.getSource() == clearButton) {\n        history.clear();\n        canvas.init();\n        canvas.repaint();\n    // 红色：创建颜色命令，记入历史并执行\n    } else if (e.getSource() == redButton) {\n        Command cmd = new ColorCommand(canvas, Color.red);\n        history.append(cmd);\n        cmd.execute();\n    } else if (e.getSource() == greenButton) {\n        Command cmd = new ColorCommand(canvas, Color.green);\n        history.append(cmd);\n        cmd.execute();\n    } else if (e.getSource() == blueButton) {\n        Command cmd = new ColorCommand(canvas, Color.blue);\n        history.append(cmd);\n        cmd.execute();\n    }\n}\n\n// MouseMotionListener 接口中的方法\npublic void mouseMoved(MouseEvent e) {\n}\n// 拖动鼠标：在当前位置创建画点命令，记入历史并执行\npublic void mouseDragged(MouseEvent e) {\n    Command cmd = new DrawCommand(canvas, eervaPoint());\n    history.append(cmd);\n    cmd.execute();\n}\n\n// WindowListener 接口中的方法\n// 关闭窗口时退出程序；下面几个空方法是接口要求必须写的\npublic void windowClosing(WindowEvent e) {\n    System.exit(0);\n}\npublic void windowActivated(WindowEvent e) {}\npublic void windowClosed(WindowEvent e) {}\npublic void windowDeactivated(WindowEvent e) {}\npublic void windowDeiconified(WindowEvent e) {}\npublic void windowIconified(WindowEvent e) {}\npublic void windowOpened(WindowEvent e) {}\n\npublic static void main(String[] args) {\n    new Main(\"Command Pattern Sample\");\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要加什么",
        "bullets": [
          "绘图程序要能切换颜色，之后拖动鼠标画出新颜色的点"
        ]
      },
      {
        "title": "第二步　“设置颜色”也是一条命令",
        "bullets": [
          "示例里每画一个点就是一个 DrawCommand，保存在历史记录里",
          "把“换颜色”也做成命令 ColorCommand，它同样被保存，重绘时会按顺序重放，颜色也不会丢"
        ]
      },
      {
        "title": "第三步　答案改了哪四处",
        "bullets": [
          "新增 ColorCommand：持有 Drawable 和颜色，execute() 调用 drawable.setColor(color)",
          "Drawable 接口加 setColor 方法",
          "DrawCanvas 实现 setColor，画点时使用当前颜色",
          "Main 增加红、绿、蓝三个按钮，按下时创建 ColorCommand、加入历史并执行",
          "command 包里的 Command、MacroCommand 不用改"
        ]
      },
      {
        "title": "第四步　为什么不直接改画布颜色",
        "bullets": [
          "如果按按钮时直接改画布颜色而不记录成命令，重绘时历史里没有颜色信息，所有点会变成同一种颜色",
          "做成命令后，颜色变化和画点一样被记录，重放结果正确"
        ]
      }
    ],
    "memory": [
      "新操作做成新的命令类，能被记录、重放",
      "Receiver（画布）要提供命令需要的方法"
    ],
    "quotes": [
      {
        "text": "无需对 command 包中的类和接口做任何修改。",
        "source": "A22-Command模式-习题解答.md 第21行"
      },
      {
        "text": "用户每拖动一次鼠标，应用程序都会为“在这个位置画一个点”这条命令生成一个DrawCommand类的实例。只要保存了这条命令，以后有需要时就可以重新绘制。",
        "source": "22-Command模式.md 第27行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/22-Command模式.md"
  },
  {
    "id": "TEXTBOOK-22-02",
    "chapter": "第22章",
    "pattern": "命令模式",
    "source": "《图解设计模式》习题22-2",
    "stem": "请在示例程序中增加撤销功能，它的作用是“删除上一次画的点”。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "对 Main 类作如下修改。修改后的代码请参见代码清单 A22-5。"
      },
      {
        "type": "list",
        "items": [
          "增加撤销按钮"
        ]
      },
      {
        "type": "list",
        "items": [
          "按下撤销按钮后调用 history.undo 重新绘制 (repaint)"
        ]
      },
      {
        "type": "text",
        "content": "command 包和 draw 包中的代码无需做任何修改。"
      },
      {
        "type": "text",
        "content": "图 A22-2 对画出的图形不太满意，想重画……"
      },
      {
        "type": "image",
        "src": "images/textbook/p380-b04.png",
        "alt": "图 A22-2 对画出的图形不太满意，想重画……"
      },
      {
        "type": "text",
        "content": "图A22-3 多次撤销之后"
      },
      {
        "type": "image",
        "src": "images/textbook/p380-b06.png",
        "alt": "图A22-3 多次撤销之后"
      },
      {
        "type": "text",
        "content": "图A22-4 再次多次撤销之后"
      },
      {
        "type": "image",
        "src": "images/textbook/p380-b08.png",
        "alt": "图A22-4 再次多次撤销之后"
      },
      {
        "type": "text",
        "content": "代码清单 A22-5 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 增加了撤销按钮的 Main\n * 撤销 = 从历史记录中删掉最后一条命令，再按剩下的命令重绘\n */\nimport command.*;\nimport drawer.*;\n\nimport java.awt.*;\nimport java.awt.event.*;\nimport javax.swing.*;\n\npublic class Main extends JFrame implements ActionListener, MouseMotionListener,\nWindowListener {\n    // 绘制的历史记录\n    private MacroCommand history = new MacroCommand();\n    // 绘制区域\n    private DrawCanvas canvas = new DrawCanvas(400, 400, history);\n    // 删除按钮\n    private JButton clearButton = new JButton(\"clear\");\n    // 撤销按钮\n    // 新增：撤销按钮\n    private JButton undoButton = new JButton(\"undo\");\n\n    // 构造函数\n    public Main(String title) {\nsuper(title);\n\n    this.addWindowListener(this);\n    canvas.addMouseMotionListener(this);\n    clearButton.addActionListener(this);\n    // 撤销按钮被点击时调用 actionPerformed\n    undoButton.addActionListener(this);\n\n    Box buttonBox = new Box(BoxLayout.X_AXIS);\n    buttonBox.add(clearButton);\n    buttonBox.add(undoButton);\n    Box mainBox = new Box(BoxLayout.Y_AXIS);\n    mainBox.add(buttonBox);\n    mainBox.add(canvas);\n    getContentPane().add(mainBox);\n\n    pack();\n    show();\n}\n\n// ActionListener 接口中的方法\npublic void actionPerformed(ActionEvent e) {\n    if (e.getSource() == clearButton) {\n        history.clear();\n        canvas.repaint();\n    // 按下撤销按钮\n    } else if (e.getSource() == undoButton) {\n        history.undo();  // 删掉最后一条命令\n        canvas.repaint();\n    }\n}\n\n// MouseMotionListener 接口中的方法\npublic void mouseMoved(MouseEvent e) {\n}\n// 拖动鼠标：每画一个点就记一条命令\npublic void mouseDragged(MouseEvent e) {\n    Command cmd = new DrawCommand(canvas, e.getPoint());\n    history.append(cmd);\n    cmd.execute();\n}\n\n// WindowListener 接口中的方法\npublic void windowClosing(WindowEvent e) {\n    System.exit(0);\n}\npublic void windowActivated(WindowEvent e) {}\npublic void windowClosed(WindowEvent e) {}\npublic void windowDeactivated(WindowEvent e) {}\npublic void windowDeiconified(WindowEvent e) {}\npublic void windowIconified(WindowEvent e) {}\npublic void windowOpened(WindowEvent e) {}\n\npublic static void main(String[] args) {\n    new Main(\"Command Pattern Sample\");\n}\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要加什么",
        "bullets": [
          "增加撤销：删除上一次画的点"
        ]
      },
      {
        "title": "第二步　为什么很容易加",
        "bullets": [
          "所有画点命令都按顺序保存在 MacroCommand history 里",
          "MacroCommand 已经有 undo 方法，会删掉最后一条命令",
          "删掉后让画布按剩下的命令重画一遍，就等于撤销了上一笔"
        ]
      },
      {
        "title": "第三步　答案只改 Main",
        "bullets": [
          "原书列出的两处修改（题库中这两条未显示）：增加撤销按钮；按下撤销按钮后调用 history.undo 并重新绘制",
          "代码中加了 undoButton，在 actionPerformed 里判断是撤销按钮时调用 history.undo() 和 canvas.repaint()",
          "command 包和 drawer 包都不用改"
        ]
      }
    ],
    "memory": [
      "命令被保存成对象，撤销就是删掉最后一条命令再重放",
      "命令模式天然支持撤销"
    ],
    "quotes": [
      {
        "text": "按下撤销按钮后调用 history.undo 重新绘制 (repaint)",
        "source": "A22-Command模式-习题解答.md 第220行"
      },
      {
        "text": "undo 方法用于删除 commands 中的最后一条命令。",
        "source": "22-Command模式.md 第81行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/22-Command模式.md"
  },
  {
    "id": "TEXTBOOK-22-03",
    "chapter": "第22章",
    "pattern": "命令模式",
    "source": "《图解设计模式》习题22-3",
    "stem": "Java 请修改示例程序，在Main类中不使用MouseMotionListener接口和WindowListener接口，而是使用MouseMotionAdapter类和WindowAdapter类。",
    "materials": [],
    "answer": [
      {
        "type": "text",
        "content": "代码请参见代码清单 A22-6。"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * 用 WindowAdapter 和 MouseMotionAdapter 改写的 Main\n * Adapter 类已经给接口中的所有方法写好了空实现，只需重写真正要用的方法\n * 这里使用匿名内部类，Main 不再需要实现 MouseMotionListener 和 WindowListener\n */\nimport command.*;\nimport drawer.*;\n\nimport java.awt.*;\nimport java.awt.event.*;\nimport javax.swing.*;\n\n// 只保留按钮需要的 ActionListener\npublic class Main extends JFrame implements ActionListener {\n    // 绘制的历史记录\n    private MacroCommand history = new MacroCommand();\n    // 绘制区域\n    private DrawCanvas canvas = new DrawCanvas(400, 400, history);\n    // 删除按钮\n    private JButton clearButton = new JButton(\"clear\");\n\n    // 构造函数\n    public Main(String title) {\n        super(title);\n\n        // 只重写关闭窗口这一个方法\n        this.addWindowListener(new WindowAdapter() {\n            public void windowClosing(WindowEvent e) {\n                System.exit(0);\n            }\n        });\n        // 只重写拖动鼠标这一个方法，mouseMoved 不用再写空方法\n        canvas.addMouseMotionListener(new MouseMotionAdapter() {\n            public void mouseDragged(MouseEvent e) {\n                // 在鼠标位置创建画点命令\n                Command cmd = new DrawCommand(canvas, e.getPoint());\n                history.append(cmd);\n                cmd.execute();\n            }\n        });\n        clearButton.addActionListener(this);\n\n        Box buttonBox = new Box(BoxLayout.X_AXIS);\n        buttonBox.add(clearButton);\n        Box mainBox = new Box(BoxLayout.Y_AXIS);\n        mainBox.add(buttonBox);\n        mainBox.add(canvas);\n        getContentPane().add(mainBox);\n\n        pack();\n        show();\n    }\n\n    // ActionListener 接口中的方法\n    public void actionPerformed(ActionEvent e) {\n        if (e.getSource() == clearButton) {\n            history.clear();\n            canvas.repaint();\n        }\n    }\n\n    public static void main(String[] args) {\n        new Main(\"Command Pattern Sample\");\n    }\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要做什么",
        "bullets": [
          "Main 原来实现了 MouseMotionListener 和 WindowListener 两个接口",
          "要改成使用 MouseMotionAdapter 和 WindowAdapter"
        ]
      },
      {
        "title": "第二步　为什么要换",
        "bullets": [
          "实现接口就必须实现里面的所有方法，用不到的也要写空方法",
          "Adapter 类已经把所有方法写成空实现，只需重写真正要用的那一个"
        ]
      },
      {
        "title": "第三步　答案的写法",
        "bullets": [
          "Main 只保留 implements ActionListener",
          "addWindowListener(new WindowAdapter() { 重写 windowClosing })",
          "addMouseMotionListener(new MouseMotionAdapter() { 重写 mouseDragged，在里面创建 DrawCommand、加入历史并执行 })",
          "这里用的是匿名内部类"
        ]
      }
    ],
    "memory": [
      "Java 的 XxxAdapter 类给接口方法提供空实现，只重写需要的方法",
      "配合匿名内部类可以少写很多空方法"
    ],
    "quotes": [
      {
        "text": "代码请参见代码清单 A22-6。",
        "source": "A22-Command模式-习题解答.md 第321行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/22-Command模式.md"
  },
  {
    "id": "TEXTBOOK-23-01",
    "chapter": "第23章",
    "pattern": "解释器模式",
    "source": "《图解设计模式》习题23-1",
    "stem": "在示例程序中，我们只进行了语法解析。请修改程序，让示例程序还可以“运行”迷你语言程序。关于如何“运行”go、right和left等基本命令(<primitive command>），大家可以自由发挥。",
    "materials": [
      {
        "type": "text",
        "content": "提示 这是本书中最后一道习题了。为了同时总结一下设计模式，我们在答案中还增加了以下功能。"
      },
      {
        "type": "list",
        "items": [
          "使用GUI显示基本命令的“运行”结果"
        ]
      },
      {
        "type": "list",
        "items": [
          "使用 Facade 模式（第 15 章）使解释器更易于使用"
        ]
      },
      {
        "type": "list",
        "items": [
          "编写了一个生成基本命令的类（Factory Method 模式（第 4 章））"
        ]
      },
      {
        "type": "list",
        "items": [
          "将解释器的相关代码单独整理至一个包中"
        ]
      },
      {
        "type": "text",
        "content": "图23-4至图23-7是在学习迷你语言时给大家看过的运行结果图。"
      },
      {
        "type": "text",
        "content": "The image is too blurry to recognize any text content."
      }
    ],
    "answer": [
      {
        "type": "text",
        "content": "这里，我们将与 GUI 相关的类集中在 turtle 包中，而在 language 包中不放入任何与 GUI 相关的类。这样，只要在其他包中定义的类实现了 Executor 和 ExecutorFactory 接口，就可以在完全不修改 language 包的前提下编写另外一个程序来“运行”相同的程序。"
      },
      {
        "type": "text",
        "content": "表A23-1 类和接口的一览表"
      },
      {
        "type": "table",
        "headers": [
          "包",
          "类",
          "说明"
        ],
        "rows": [
          [
            "language",
            "InterpreterFacade",
            "使解释器更好用的类(Facade 模式中的 Facade 角色)"
          ],
          [
            "language",
            "ExecutorFactory",
            "生成基本命令的接口(Factory Method 模式中的 Creator 角色)"
          ],
          [
            "language",
            "Context",
            "与示例程序相同"
          ],
          [
            "language",
            "Node",
            "与示例程序相同"
          ],
          [
            "language",
            "Executor",
            "表示“运行”的接口"
          ],
          [
            "language",
            "ProgramNode",
            "与示例程序相同"
          ],
          [
            "language",
            "CommandNode",
            "与示例程序相同"
          ],
          [
            "language",
            "RepeatCommandNode",
            "与示例程序相同"
          ],
          [
            "language",
            "CommandListNode",
            "与示例程序相同"
          ],
          [
            "language",
            "PrimitiveCommandNode",
            "与示例程序相同"
          ],
          [
            "language",
            "ExecuteException",
            "运行时的异常类"
          ],
          [
            "language",
            "ParseException",
            "语法解析时的异常类"
          ],
          [
            "turtle",
            "TurtleCanvas",
            "实现海龟绘图的类(Factory Method 模式中的 ConcreteCreator 角色)"
          ],
          [
            "turtle",
            "TurtleExecutor",
            "(内部类)"
          ],
          [
            "turtle",
            "GoExecutor",
            "(内部类)"
          ],
          [
            "turtle",
            "DirectionExecutor",
            "(内部类)"
          ],
          [
            "无名",
            "Main",
            "测试程序行为的类"
          ]
        ]
      },
      {
        "type": "text",
        "content": "代码清单 A23-1 InterpreterFacade 类 (InterpreterFacade.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * InterpreterFacade：解释器的“窗口”（Facade 模式）\n * 外部只需调用 parse（解析）和 execute（运行）两个方法\n * 它自己也实现了 Executor，所以可以交给画布作为“要运行的程序”\n */\npackage language;\n\npublic class InterpreterFacade implements Executor {\n    private ExecutorFactory factory;  // 生成基本命令执行对象的工厂（由画布提供）\n    private Context context;\n    private Node programNode;  // 解析得到的语法树根节点\n    public InterpreterFacade(ExecutorFactory factory) {\n        this.factory = factory;\n    }\n    // 解析迷你程序，成功返回 true\n    public boolean parse(String text) {\n        boolean ok = true;\n        this.context = new Context(text);\n        this.context.setExecutorFactory(factory);  // 把工厂交给 Context，解析基本命令时要用\n        // 语法树从 <program> 开始\n        this.programNode = new ProgramNode();\n        try {\nprogramNode.parse(context);\nSystem.out.println(programNode.toString());\n} catch (ParseException e) {\n    e.printStackTrace();\n    ok = false;\n}\nreturn ok;\n}\n// 运行：从根节点开始执行整棵语法树\npublic void execute() throws ExecuteException {\n    try {\n        programNode.execute();\n    } catch (ExecuteException e) {\n        e.printStackTrace();\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A23-2 ExecutorFactory 接口 (ExecutorFactory.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * ExecutorFactory：生成基本命令执行对象的接口（Factory Method 模式中的 Creator）\n * 具体怎么执行 go、right、left，由实现这个接口的类决定\n */\npackage language;\n\npublic interface ExecutorFactory {\n    public abstract Executor createExecutor(String name);  // 根据命令名（如 go）返回对应的执行对象\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A23-3 Context 类 (Context.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * Context：解析时的“读字指针”，负责把程序文本切成一个个单词\n * 同时实现 ExecutorFactory，把创建执行对象的请求转交给真正的工厂\n */\npackage language;\n\nimport java.util.*;\n\npublic class Context implements ExecutorFactory {\n    private ExecutorFactory factory;\n    private StringTokenizer tokenizer;  // 按空格切分单词的工具\n    private String currentToken;  // 当前读到的单词\n    public Context(String text) {\n        tokenizer = new StringTokenizer(text);\n        nextToken();\n    }\n    // 读下一个单词，读完了就设为 null\n    public String nextToken() {\n        if (tokenizer.hasMoreTokens()) {\n            currentToken = tokenizer.nextToken();\n        } else {\n            currentToken = null;\n        }\n        return currentToken;\n    }\n    public String currentToken() {\n        return currentToken;\n    }\n    // 确认当前单词是期望的那个，然后跳过它；不是就报解析错误\n    public void skipToken(String token) throws ParseException {\n        if (!token.equals(currentToken)) {\n            throw new ParseException(\"Warning: \" + token + \" is expected, but \" + currentToken + \" is found.\");\n        }\n        nextToken();\n    }\n    // 把当前单词当成数字读出来（用于 repeat 后面的次数）\n    public int currentNumber() throws ParseException {\n        int number = 0;\ntry {\n    number = Integer.parseInt(currentToken);\n} catch (NumberFormatException e) {\n    throw new ParseException(\"Warning: \" + e);\n}\nreturn number;\n}\npublic void setExecutorFactory(ExecutorFactory factory) {\n    this.factory = factory;\n}\n// 转交给外部设置的工厂\npublic Executor createExecutor(String name) {\n    return factory.createExecutor(name);\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A23-4 Node 类 (Node.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * Node：语法树节点的父类，每个节点都要能解析自己，也要能执行自己（实现 Executor）\n */\npackage language;\n\npublic abstract class Node implements Executor {\n    public abstract void parse(Context context) throws ParseException;  // 从 Context 中读取单词，构造自己这一层的语法树\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A23-5 Executor 接口 (Executor.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * Executor：表示“能运行”的接口，语法树节点和基本命令执行对象都实现它\n */\npackage language;\n\npublic interface Executor {\n    public abstract void execute() throws ExecuteException;\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A23-6 ProgramNode 类 (ProgramNode.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * ProgramNode：对应文法 <program> ::= program <command list>\n */\npackage language;\n\n// <program> ::= program <command list>\npublic class ProgramNode extends Node {\n    private Node commandListNode;\n    public void parse(Context context) throws ParseException {\n        context.skipToken(\"program\");  // 先读掉关键字 program\n        commandListNode = new CommandListNode();\n        commandListNode.parse(context);  // 再解析后面的命令列表\n    }\n    // 执行：交给命令列表去执行\n    public void execute() throws ExecuteException {\n        commandListNode.execute();\n    }\n    public String toString() {\n        return \"[program \" + commandListNode + \"]\";\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A23-7 CommandNode 类 (CommandNode.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * CommandNode：对应文法 <command> ::= <repeat command> | <primitive command>\n * 注意：contextCurrentToken() 是原书识别错误，应为 context.currentToken()\n */\npackage language;\n\n// <command> ::= <repeat command> | <primitive command>\npublic class CommandNode extends Node {\n    private Node node;\npublic void parse(Context context) throws ParseException {\n    // 当前单词是 repeat：这是一个循环命令\n    if (contextCurrentToken().equals(\"repeat\")) {\n        node = new RepeatCommandNode();\n        node.parse(context);\n    // 否则是基本命令（go、right、left）\n    } else {\n        node = new PrimitiveCommandNode();\n        node.parse(context);\n    }\n}\n// 执行：交给实际的子节点\npublic void execute() throws ExecuteException {\n    node.execute();\n}\npublic String toString() {\n    return node.toString();\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A23-8 RepeatCommandNode 类 (RepeatCommandNode.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * RepeatCommandNode：对应文法 <repeat command> ::= repeat <number> <command list>\n */\npackage language;\n\n// <repeat command> ::= repeat <number> <command list>\npublic class RepeatCommandNode extends Node {\n    private int number;\n    private Node commandListNode;\n    public void parse(Context context) throws ParseException {\n        context.skipToken(\"repeat\");\n        number = context.currentNumber();  // 读出重复次数\n        context.nextToken();\n        commandListNode = new CommandListNode();\n        commandListNode.parse(context);\n    }\n    // 执行：把命令列表重复执行 number 次\n    public void execute() throws ExecuteException {\n        for (int i = 0; i < number; i++) {\n            commandListNode.execute();\n        }\n    }\n    public String toString() {\n        return \"[repeat \" + number + \" \" + commandListNode + \"]\";\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A23-9 CommandListNode 类 (CommandListNode.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * CommandListNode：对应文法 <command list> ::= <command>* end\n * 注意：contextCurrentToken() 是原书识别错误，应为 context.currentToken()\n */\npackage language;\n\nimport java.util.*;\n\n// <command list> ::= <command>* end\npublic class CommandListNode extends Node {\n    private ArrayList list = new ArrayList();  // 保存解析出的所有命令\n    public void parse(Context context) throws ParseException {\n        while (true) {\n            // 单词读完了还没遇到 end：语法错误\n            if (contextCurrentToken() == null) {\n                throw new ParseException(\"Missing 'end'\");\n            // 遇到 end：命令列表结束\n            } else if (contextCurrentToken().equals(\"end\")) {\n                context.skipToken(\"end\");\n                break;\n            } else {\n// 否则解析一条命令并加入列表\nNode commandNode = new CommandNode();\n            commandNode.parse(context);\n            list.add(commandNode);\n        }\n    }\n}\n// 执行：按顺序执行列表中的每条命令\npublic void execute() throws ExecuteException {\n    Iterator it = list.iterator();\n    while (it.hasNext()) {\n        ((CommandNode)it.next()).execute();\n    }\n}\npublic String toString() {\n    return list.toString();\n}\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A23-10 PrimitiveCommandNode 类 (PrimitiveCommandNode.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * PrimitiveCommandNode：对应文法 <primitive command> ::= go | right | left\n * 解析时就向工厂要好执行对象，执行时直接交给它\n */\npackage language;\n\n// <primitive command> ::= go | right | left\npublic class PrimitiveCommandNode extends Node {\n    private String name;\n    private Executor executor;\n    public void parse(Context context) throws ParseException {\n        name = context.currentToken();  // 记下命令名\n        context.skipToken(name);\n        executor = context.createExecutor(name);  // 通过工厂得到这个命令的执行对象\n    }\n    public void execute() throws ExecuteException {\n        // 工厂不认识这个命令：运行时报错\n        if (executor == null) {\n            throw new ExecuteException(name + \": is not defined\");\n        } else {\n            executor.execute();\n        }\n    }\n    public String toString() {\n        return name;\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A23-11 ExecuteException 类 ( ExecuteException.java )"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * ExecuteException：运行迷你程序时出错使用的异常\n */\npackage language;\n\npublic class ExecuteException extends Exception {\n    public ExecuteException(String msg) {\n        super(msg);\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A23-12 ParseException 类 ( ParseException.java )"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * ParseException：解析迷你程序时出错使用的异常\n */\npackage language;\npublic class ParseException extends Exception {\n    public ParseException(String msg) {"
      },
      {
        "type": "text",
        "content": "代码清单 A23-13 TurtleCanvas 类 (TurtleCanvas.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * TurtleCanvas：在画布上用“海龟”画线，实现 ExecutorFactory（具体的工厂）\n * 它决定 go、right、left 在图形界面中具体怎么执行\n * 注意：language FabutorFactory、language ExecuteException 是原书识别错误，应为 language.ExecutorFactory、language.ExecuteException\n */\npackage turtle;\n\nimport language.Executor;\nimport language FabutorFactory;\nimport language ExecuteException;\nimport java.awt.*;\n\npublic class TurtleCanvas extends Canvas implements ExecutorFactory {\n    // 方向用钟表刻度表示：0 上、3 右、6 下、9 左\n    final static int UNIT_LENGTH = 30;      // 前进时的长度单位\n    final static int DIRECTION_UP = 0;       // 上方\n    final static int DIRECTION_RIGHT = 3;   // 右方\n    final static int DIRECTION_DOWN = 6;     // 下方\n    final static int DIRECTION_LEFT = 9;      // 左方\n    final static int RELATIVE_DIRECTION_RIGHT = 3; // 右转\n    final static int RELATIVE_DIRECTION_LEFT = -3; // 左转\n    final static int RADIUS = 3; // 半径\n    private int direction = 0;  // 海龟当前朝向\n    private Point position;  // 海龟当前位置\n    private Executor executor;  // 要运行的程序（这里是 InterpreterFacade）\n    public TurtleCanvas(int width, int height) {\n        setSize(width, height);\n        initialize();\n    }\n    public void setExecutor(Executor executor) {\n        this.executor = executor;\n    }\n    // 相对转向：右转 +3，左转 -3\n    void setRelativeDirection(int relativeDirection) {\n        setDirection(direction + relativeDirection);\n    }\n    // 把方向规整到 0～11 之间\n    void setDirection(int direction) {\n        if (direction < 0) {\n            direction = 12 - (-direction) % 12;\n        } else {\n            direction = direction % 12;\n        }\n        this.direction = direction % 12;\n    }\n    // 沿当前方向前进 length，并在画布上画线\n    void go(int length) {\n        int newx = position.x;\n        int newy = position.y;\n        switch (direction) {\n        case DIRECTION_UP:\n            newy -= length;\n            break;\n        case DIRECTION_RIGHT:\n            newx += length;\n            break;\n        case DIRECTION_DOWN:\n            newy += length;\n            break;\n        case DIRECTION_LEFT:\n            newx -= length;\n            break;\ndefault:\n    break;\n}\nGraphics g = getGraphics();\nif (g != null) {\n    g.drawLine(position.x, position.y, newx, newy);\n    g.fillOval(newx - RADIUS, newy - RADIUS, RADIUS * 2 + 1, RADIUS * 2 + 1);\n}\nposition.x = newx;\nposition.y = newy;\n}\n// 工厂方法：根据命令名返回对应的执行对象\npublic Executor createExecutor(String name) {\n    if (name.equals(\"go\")) {\n        return new GoExecutor(this);\n    } else if (name.equals(\"right\")) {\n        return new DirectionExecutor(this, RELATIVE_DIRECTION_RIGHT);\n    } else if (name.equals(\"left\")) {\n        return new DirectionExecutor(this, RELATIVE_DIRECTION_LEFT);\n    } else {\n        return null;\n    }\n}\n// 回到中心、朝上，清空画布\npublic void initialize() {\n    Dimension size = getSize();\n    position = new Point(size.width / 2, size.height / 2);\n    direction = 0;\n    setForeground(Color.red);\n    setBackground(Color.white);\n    Graphics g = getGraphics();\n    if (g != null) {\n        g.clearRect(0, 0, size.width, size.height);\n    }\n}\n// 重绘时重新运行整段程序\npublic void paint(Graphics g) {\n    initialize();\n    if (executor != null) {\n        try {\n            executor.execute();\n        } catch (ExecuteException e) {\n        }\n    }\n}\n// 执行对象的父类：都持有画布\nabstract class TurtleExecutor implements Executor {\nprotected TurtleCanvas canvas;\npublic TurtleExecutor(TurtleCanvas canvas) {\n    this.canvas = canvas;\n}\npublic abstract void execute();\n}\n\n// go 的执行对象：前进一个单位长度\nclass GoExecutor extends TurtleExecutor {\npublic GoExecutor(TurtleCanvas canvas) {\n    super(canvas);\n}\npublic void execute() {\n    canvas.go(TurtleCanvas.UNIT_LENGTH);\n}"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * DirectionExecutor：right 和 left 的执行对象，只是转向的度数不同\n */\nclass DirectionExecutor extends TurtleExecutor {\n    private int relativeDirection;  // 右转为 3，左转为 -3\n    public DirectionExecutor(TurtleCanvas canvas, int relativeDirection) {\n        super(canvas);\n        this.relativeDirection = relativeDirection;\n    }\n    // 执行：让画布上的海龟转向\n    public void execute() {\n        canvas.setRelativeDirection(relativeDirection);\n    }\n}"
      },
      {
        "type": "text",
        "content": "代码清单 A23-14 Main 类 (Main.java)"
      },
      {
        "type": "code",
        "language": "java",
        "content": "/**\n * Main：把解释器和画布连接起来\n * 画布作为工厂交给解释器，解释器又作为“要运行的程序”交给画布\n */\nimport language.InterpreterFacade;\nimport turtle.TurtleCanvas;\n\nimport java.util.*;\nimport java.io.*;\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Main extends Frame implements ActionListener {\n    private TurtleCanvas canvas = new TurtleCanvas(400, 400);\n    // 解释器使用画布提供的工厂\n    private InterpreterFacade facade = new InterpreterFacade(canvas);\n    // 输入迷你程序的文本框，默认程序是 repeat 3 go right go left end end\n    private TextField programTextField = new TextField(\"program repeat 3 go right go left end end\");\n\n    // 构造函数\n    public Main(String title) {\n        super(title);\n\n        canvas.setExecutor(facade);  // 画布重绘时运行解释器\n\n        setLayout(new BorderLayout());\n\n        programTextField.addActionListener(this);\n\n        this.addWindowListener(new WindowAdapter() {\n            public void windowClosing(WindowEvent e) {\n                System.exit(0);\n            }\n        });\n\n        add(programTextField, BorderLayout.NORTH);\n        add(canvas, BorderLayout.CENTER);\n        pack();\n        parseAndExecute();\n        show();\n    }\n\n    // ActionListener 接口中的方法\n    // 在文本框中按回车时，重新解析并运行\n    public void actionPerformed(ActionEvent e) {\n        if (e.getSource() == programTextField) {\n            parseAndExecute();\n        }\n    }\n\n    // 解析文本框中的程序，然后重绘画布（重绘时会运行程序）\n    private void parseAndExecute() {\n        String programText = programTextField.getText();\n        System.out.println(\"programText = \" + programText);\nfacade.parse(programText);\n    canvas.repaint();\n}\n\npublic static void main(String[] args) {\n    new Main(\"Interpreter Pattern Sample\");\n}"
      }
    ],
    "analysisSteps": [
      {
        "title": "第一步　题目要做什么",
        "bullets": [
          "示例只把迷你语言解析成语法树，题目要求让程序真正“运行”起来",
          "原书提示答案额外做了四件事（题干中未显示）：用 GUI 显示运行结果；用 Facade 模式让解释器更好用；用 Factory Method 模式生成基本命令；把解释器代码单独放进一个包"
        ]
      },
      {
        "title": "第二步　每个节点都会“执行”",
        "bullets": [
          "新增 Executor 接口，只有 execute()",
          "Node 实现 Executor，于是每种语法节点都要能执行",
          "ProgramNode 执行命令列表；CommandListNode 依次执行每条命令；RepeatCommandNode 循环 number 次；PrimitiveCommandNode 交给自己的 executor 去做"
        ]
      },
      {
        "title": "第三步　其他模式在这里的分工",
        "bullets": [
          "Factory Method：ExecutorFactory 声明 createExecutor(name)，TurtleCanvas 实现它，根据 go、right、left 生成具体的执行对象",
          "Facade：InterpreterFacade 把“解析”和“运行”包装成 parse、execute 两个简单方法，Main 只和它打交道",
          "包分离：language 包里没有任何界面代码，界面相关的类都在 turtle 包"
        ]
      },
      {
        "title": "第四步　这样设计的好处",
        "bullets": [
          "只要另一个包实现 Executor 和 ExecutorFactory，就能用完全不同的方式运行同一段迷你程序，language 包不用改",
          "题库答案代码中的 contextCurrentToken()、language FabutorFactory 等是识别错误，分别应为 context.currentToken() 和 language.ExecutorFactory"
        ]
      }
    ],
    "memory": [
      "解释器模式：语法树每个节点各自解释自己，执行时从根递归往下",
      "基本命令怎么执行交给工厂生成，解释器本身不依赖界面"
    ],
    "quotes": [
      {
        "text": "这样，只要在其他包中定义的类实现了 Executor 和 ExecutorFactory 接口，就可以在完全不修改 language 包的前提下编写另外一个程序来“运行”相同的程序。",
        "source": "A23-Interpreter模式-习题解答.md 第11行"
      },
      {
        "text": "使用 Facade 模式（第 15 章）使解释器更易于使用",
        "source": "23-Interpreter模式.md 第704行"
      }
    ],
    "lessonPath": "/Users/a1/Desktop/projects/课程/设计模式 1.5/资料/图解设计模式/docs/23-Interpreter模式.md"
  }
]
