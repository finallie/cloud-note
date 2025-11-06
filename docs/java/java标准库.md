# java标准库

## String

- 不可变、池化（字符串常量池是个hashmap）、缓存hashcode
- 数据压缩（java9后使用latin1、utf-16两种编码）

## 两类unchecked exception

严重异常 无法修复

- RuntimeException 由程序逻辑引起，应该通过修正代码来避免
- Error 由JVM引起，程序无法处理，需要修正JVM环境
  - StackOverflowError
  - OutOfMemoryError
  - NoClassDefFoundError
  - AssertionError

## Math vs StrictMath

- Math使用平台相关的实现，性能更好，不同平台可能返回不同值
- StrictMath使用统一的算法实现，保证跨平台一致性

## Random vs ThreadLocalRandom

Random虽是线程安全的，但无论单线程还是多线程性能都不如ThreadLocalRandom
Random可以手动设置种子，ThreadLocalRandom不行

## final

final类不允许有子类包括匿名类，enum的常量特化是编译器特许

## enum

enum 是 Java 编译器提供的语法糖，它将简洁的枚举定义编译成一个继承自 java.lang.Enum 的 final 类，每个枚举常量编译成该类的 static final实例；如果常量有自定义行为，则通过匿名内部子类实现多态
