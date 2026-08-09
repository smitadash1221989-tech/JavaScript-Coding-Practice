# 💻 JavaScript Array Coding Practice

This section contains basic **JavaScript Array coding problems** designed to build strong problem-solving and logical thinking skills for automation testing and SDET interviews.

## 📚 Array Problems

|  # | Problem              | Main Logic                            |
| -: | -------------------- | ------------------------------------- |
|  1 | Reverse an Array     | Start from the last index             |
|  2 | Find Maximum Element | Compare using `>`                     |
|  3 | Find Minimum Element | Compare using `<`                     |
|  4 | Find Sum of Array    | `sum + arr[i]`                        |
|  5 | Find Average         | `sum / arr.length`                    |
|  6 | Count Even Numbers   | `num % 2 === 0`                       |
|  7 | Count Odd Numbers    | `num % 2 !== 0`                       |
|  8 | Remove Duplicates    | `includes()`                          |
|  9 | Find Second Largest  | Track `largest` and `secondLargest`   |
| 10 | Find Second Smallest | Track `smallest` and `secondSmallest` |

---

## 1. Reverse an Array

### Logic

Start from the **last index** and move towards the first index.

```javascript
let arr = [1, 2, 3, 4, 5];
let reverse = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
}

console.log(reverse);
```

**Output:**

```text
[5, 4, 3, 2, 1]
```

---

## 2. Find Maximum Element

### Logic

Compare each element with the current maximum.

```javascript
let arr = [10, 25, 5, 40, 15];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);
```

**Output:**

```text
40
```

---

## 3. Find Minimum Element

### Logic

Compare each element with the current minimum.

```javascript
let arr = [10, 25, 5, 40, 15];

let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(min);
```

**Output:**

```text
5
```

---

## 4. Find Sum of Array

### Logic

Add every element to `sum`.

```javascript
let arr = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

console.log(sum);
```

**Output:**

```text
15
```

---

## 5. Find Average of Array

### Logic

First calculate the sum and then divide by the array length.

```javascript
let arr = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

let average = sum / arr.length;

console.log(average);
```

**Output:**

```text
30
```

---

## 6. Count Even Numbers

### Logic

An even number is divisible by `2`.

```javascript
let arr = [1, 2, 3, 4, 5, 6];

let count = 0;

for (let num of arr) {
    if (num % 2 === 0) {
        count++;
    }
}

console.log(count);
```

**Output:**

```text
3
```

---

## 7. Count Odd Numbers

### Logic

An odd number leaves a remainder when divided by `2`.

```javascript
let arr = [1, 2, 3, 4, 5, 6];

let count = 0;

for (let num of arr) {
    if (num % 2 !== 0) {
        count++;
    }
}

console.log(count);
```

**Output:**

```text
3
```

---

## 8. Remove Duplicates

### Logic

Check whether the element already exists in the new array.

```javascript
let arr = [1, 2, 3, 2, 4, 1, 5];

let unique = [];

for (let num of arr) {
    if (!unique.includes(num)) {
        unique.push(num);
    }
}

console.log(unique);
```

**Output:**

```text
[1, 2, 3, 4, 5]
```

> **Interview challenge:** Try solving this without using `includes()` or `Set`.

---

## 9. Find Second Largest Element

### Logic

Maintain two variables:

* `largest`
* `secondLargest`

```javascript
let arr = [10, 25, 5, 40, 30];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {

    if (num > largest) {
        secondLargest = largest;
        largest = num;
    }
    else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);
```

**Output:**

```text
Largest: 40
Second Largest: 30
```

---

## 10. Find Second Smallest Element

### Logic

Maintain two variables:

* `smallest`
* `secondSmallest`

```javascript
let arr = [10, 25, 5, 40, 30];

let smallest = Infinity;
let secondSmallest = Infinity;

for (let num of arr) {

    if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
    }
    else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
    }
}

console.log("Smallest:", smallest);
console.log("Second Smallest:", secondSmallest);
```

**Output:**

```text
Smallest: 5
Second Smallest: 10
```

---

# 🎯 Interview Practice Rules

For each problem, try solving it in three ways:

### Level 1 — Basic `for` loop

```javascript
for (let i = 0; i < arr.length; i++) {
    // logic
}
```

### Level 2 — `for...of`

```javascript
for (let num of arr) {
    // logic
}
```

### Level 3 — Without Built-in Methods

Try avoiding:

```text
includes()
indexOf()
sort()
reverse()
filter()
map()
reduce()
Set
```

This will help build the **core logic required for JavaScript/SDET interviews**.

---

## 🚀 Next Array Problems

After completing these 10 problems, practice:

1. Find duplicate elements
2. Find missing number
3. Move all zeros to the end
4. Rotate array left
5. Rotate array right
6. Merge two sorted arrays
7. Find frequency of each element
8. Find common elements in two arrays
9. Find intersection of two arrays
10. Find the largest difference between two elements
11. Find pairs whose sum equals a target
12. Find the first non-repeating element
13. Find the first repeating element
14. Check whether an array is sorted
15. Remove a specific element from an array

---

## 🧠 Key Concepts to Master

```text
Arrays
  │
  ├── Traversal
  ├── Searching
  ├── Comparison
  ├── Counting
  ├── Sorting Logic
  ├── Duplicate Handling
  ├── Two-Pointer Logic
  └── Frequency Counting
```

These fundamentals are particularly useful for **JavaScript automation and SDET coding interviews**.
