
Bài viết này được dựa trên [Kaggle learn | Python](https://www.kaggle.com/learn/python) và nó khá ngắn. Chỉ dành cho *những ai có kinh nghiệm lập trình và học Python cho Data science*.

```insta-toc
---
title:
  name: Mục lục
  level: 1
  center: false
exclude: ""
style:
  listType: number
omit: []
levels:
  min: 1
  max: 6
---

# Mục lục

1. Variables
2. Operators
3. Code blocks
4. Data structures
    1. Lists
    2. Tuples
    3. Strings
    4. Dictionaries
5. Loop structure
6. List compehensions
7. Modules
```

# Variables

When you declares a variable, no need to mention the data type.

```python
pi = 3.14159
diameter = 3

# Create a variable called 'radius'
radius = diameter / 2
print(radius) # 1.5

# Create a variable called 'area'
area = pi * (radius ** 2)
print(area) # 7.0685775
```

You can convert back and forth between data types by using:
- `int(x)`.
- `str(x)`.
- `bool(x)`.

>[!note]
>- Data type `bool` includes two values are `True` and `False`.
>- There are many ways to represent data type `str` values: `'x'`, `"x"` or backticks are accpected.

# Operators

Some **arithmetic operators**:

| Operator | Name           | Description                                        |
| -------- | -------------- | -------------------------------------------------- |
| `a + b`  | Addition       | Sum of `a` and `b`                                 |
| `a - b`  | Subtraction    | Difference of `a` and `b`                          |
| `a * b`  | Multiplication | Product of `a` and `b`                             |
| `a / b`  | True division  | Quotient of `a` and `b`                            |
| `a // b` | Floor division | Quotient of `a` and `b`, removing fractional parts |
| `a % b`  | Modulus        | Integer remainder after division of `a` by `b`     |
| `a ** b` | Exponentiation | `a` raised to the power of `b`                     |
| `-a`     | Negation       | The negative of `a`                                |

Some **logical operators**:

| Operation | Description                   | -   | Operation | Description                      |
| --------- | ----------------------------- | --- | --------- | -------------------------------- |
| `a == b`  | `a` equal to `b`              | -   | `a != b`  | `a` not equal to `b`             |
| `a < b`   | `a` less than `b`             | -   | `a > b`   | `a` greater than `b`             |
| `a <= b`  | `a` less than or equal to `b` | -   | `a >= b`  | `a` greater than or equal to `b` |
| `a and b` | And                           |     |           |                                  |
| `a or b`  | Or                            |     |           |                                  |
| `not b`   | Not                           |     |           |                                  |

>[!note]
>`bool('...')` is `True` and `bool('')` is `False`.

The **ternary operator** in Python is similar to branching structure:
```python
valueIfTrue if condition else valueIfFalse
```

# Code blocks

In Python, code blocks are represented by **indenting the beginning of the line 4 spaces**, and marked with a colon (`:`) before the code block.

Eg: The braching structure defination:
```python
if condition1:
    # Code block 1
# elif conditions2:
	# Code block 2
# else:
	# Code block 3
```

>[!note]
>`elif` = `else if`.

Eg: The function defination:
```python
def func_name(a, b, c):
    # Func logical flow
    # return ...
```

# Data structures

## Lists

Lists in Python have some features like:
- **Data type**: They can contains **any** data types.
- **Indexing**: They indexed 0-based and have negative index (-1-based).
- **Slicing**: The syntax `[s:e]` returns a part of the structure, extending from index `s` to *before* `e`. By default, `s` is `0` and `e` is length of the structures.

Some general functions:

| Function                        | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| `len(L)`                        | Returns length of `L`.                                    |
| `sorted(L, reverse=False)`      | Clones `L`, then sort it in *ascending* order.            |
| `any(L)`                        | Returns if there is at least 1 truth value in `L`.        |
| `all(L)`                        | Returns if all values of `L` are truth.                   |
| `sum(L)`, `min(L)`, `max(L)`... |                                                           |
| `L.append(x)`                   | Adds value `x` at the end of `L`.                         |
| `L.pop()`                       | Removes and return the last value of `L`.                 |
| `L.index(x)`                    | Returns index of value `x`. If not found, throw an error. |
| `x in L`                        | Returns if `L` contains `x`.                              |

## Tuples

Tuples are similar to lists, but the represented by `()` instead of `[]`, and **immutable** (unchangable).

## Strings

Strings are similar to tuples, they are **immutable** and only contains **`str` values**.

Strings have some special methods like:

| Method                  | Description                                                        |
| ----------------------- | ------------------------------------------------------------------ |
| `S.upper()`             | Capitalizes `S`. Similar to `S.lower()`.                           |
| `S.startswith(s)`       | Returns if `S` starts with `s`. Similar to `S.endswith()`.         |
| `S.isdigit()`           | Returns if `S` only contains digit characters.                     |
| `S.split(separator='')` | Returns a list `S` that has been divided by `separator`.           |
| `separator.join(I)`     | Returns a string that concatenates the elements of I by separator. |

## Dictionaries

Dicts are **mutable** objects. Each value of dicts is a pair `{key: value}`.
Each values can be accessed by `D[key]`.

Dicts have some special methods like:

| Method     | Description                                            |
| ---------- | ------------------------------------------------------ |
| `D.keys()` | Return a list of keys of `D`. Similar to `D.values()`. |

# Loop structure

`for` loop in Python is **take each value from an iterable object one by one**.
```python
for item in I:
	# Block code
```

Some special iterable object:
- `range(start=0, stop=-1, step=1)`: Return a sequence of numbers.
- `enumerate(iterable, start=0)`: Return a iterable object of tuples. Each tuple contains value of origial iterable and index of it.

`while` loop:
```python
i = 0
while i < 10:
    print(i, end=' ')
    i += 1
```

# List compehensions

List compehensions is an easy and quick way to **generate a iterable object with a few simple conditions**.

Eg 1: A simple example:
```python
squares = [n**2 for n in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

Eg 1: Using with half ternary operator:
```python
short_planets = [planet for planet in planets if len(planet) < 6]
# ['Venus', 'Earth', 'Mars']
```

Eg 1: Using with full ternary operator:
```python
short_planets = [planet if len(planet) < 6 else None for planet in planets]
```

# Modules

Modules are the external Python files. Their consts or functions can be imported to your file by this syntax:
```python
import moduleName # as aliasName
```

Or:
```python
import majorName from moduleName
```
