// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What is the complexity of adding an element to the heap?",
    answer: "O(log n) and O(h)",
    options: [
      "O(log n)",
      "O(log h)",
      "O(h)",
      "O(log n) and O(h)"
    ]
  },
    {
    numb: 2,
    question: "Which one of the following array elements represents a binary min heap?",
    answer: "8 10 12 25 14 17",
    options: [
      "12 10 8 25 14 17",
      "8 10 12 25 14 17",
      "25 17 14 12 10 8",
      "14 17 25 10 12 8"
    ]
  },
    {
    numb: 3,
    question: "What is the location of a parent node for any arbitary node i?",
    answer: "floor(i/2) position",
    options: [
      "(i/2) position",
      "(i+1)/ position",
      "floor(i/2) position",
      "ceiling(i/2) position"
    ]
  },
    {
    numb: 4,
    question: "What is the process of building a ternary heap called?",
    answer: "Heapify",
    options: [
      "Heapify",
      "Hashing",
      "Linking",
      "Merging"
    ]
  },
    {
    numb: 5,
    question: "The leaf node for a heap of height h will be at which position?",
    answer: "h or h-1",
    options: [
      "h",
      "h-1",
      "h or h-1",
      "h-2"
    ]
  },
    {
    numb: 6,
    question: "Heap can be used as _______",
    answer: "Priority Queue",
    options: [
      "Priority Queue",
      "Stack",
      "A decreasing order array",
      "None of the above"
    ]
  },
  {
    numb: 7,
    question: "7.	If we implement heap as min-heap, deleting root node(value 1) from the heap. What would be the value of root node after second iteration if leaf node(value 100) is chosen to replace the root at start?",
    answer: "2",
    options: [
      "2",
      "100",
      "17",
      "3"
    ]
  },
  {
    numb: 8,
    question: "8.	The worst case complexity of deleting any arbitrary node value element from heap is __________.",
    answer: "O(logn)",
    options: [
      "O(logn)",
      "O(n)",
      "O(nlogn)",
      "O(n^2)"
    ]
  },
  {
    numb: 9,
    question: "In which heap the root node must be greatest among the keys present at all of it’s children?",
    answer: "max-heap",
    options: [
      "min-heap",
      "max-heap",
      "min-heap and max-heap",
      "None of the above"
    ]
  },
  {
    numb: 10,
    question: "In a max-heap, element with the greatest key is always in the which node?",
    answer: "Root node",
    options: [
      "Leaf node",
      "First node of left sub tree",
      "Root node",
      "First node of right sub tree"
    ]
  },
];