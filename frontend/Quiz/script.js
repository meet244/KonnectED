// Function to hold data for the Array quiz
function arrayQuizData() {
    var questions = [
        {
            numb: 1,
            question: "Which one of the following is an application of Stack Data Structure?",
            answer: "All of the above",
            options: [
                "Managing function calls",
                "The stock span problem",
                "Arithmetic expression evaluation",
                "All of the above"

            ]
        },

        {
            numb: 2,
            question: "Process of inserting an element in stack is called ____________.",
            answer: "Push",
            options: [
                "Create",
                "Push",
                "Evaluation",
                "Pop"

            ]
        },

        {
            numb: 3,
            question: "In a stack, if a user tries to remove an element from empty stack it is called _________.",
            answer: "Underflow",
            options: [
                "Underflow",
                "Empty collection",
                "Overflow",
                "Garbage Collection"

            ]
        },

        {
            numb: 4,
            question: "Entries in a stack are . What is the meaning of this statement?",
            answer: "There is a Sequential entry that is one by one",
            options: [
                "A collection of stacks is sortable",
                "Stack entries may be compared with the '<' operation",
                "The entries are stored in a linked list",
                "There is a Sequential entry that is one by one"

            ]
        },

        {
            numb: 5,
            question: "The prefix form of A-B/ (C * D ⋀ E) is?",
            answer: "-A/B*C⋀DE",
            options: [
                "-/*⋀ACBDE",
                "ABCD*⋀DE",
                "-A/B*C⋀DE",
                "-A/BC*⋀DE"

            ]
        },

        {
            numb: 6,
            question: "What is the value of the postfix expression 6 3 2 4 + – *:",
            answer: "Something between 15 and 100",
            options: [
                "Something between -5 and -15",
                "Something between 5 and -5",
                "Something between 5 and 15",
                "Something between 15 and 100"

            ]
        },

        {
            numb: 7,
            question: "Which of the following applications may use a stack?",
            answer: "All of the mentioned",
            options: [
                "A parentheses balancing program",
                "Tracking of local variables at run time",
                "Compiler Syntax Analyzer",
                "All of the mentioned"

            ]
        },

        {
            numb: 8,
            question: "The postfix form of A*B+C/D is?",
            answer: "A*BC+/D",
            options: [
                "*AB/CD+",
                "AB*CD/+",
                "A*BC+/D",
                "ABCD+/*"

            ]
        },

        {
            numb: 9,
            question: "Process of removing an element from stack is called __________",
            answer: "Pod",
            options: [
                "Create",
                "Push",
                "Evaluation",
                "Pod"

            ]
        },

        {
            numb: 10,
            question: "Consider the usual algorithm for determining whether a sequence of parentheses is balanced.The maximum number of parentheses that appear on the stack AT ANY ONE TIME when the algorithm analyzes: (()(())(())) are:",
            answer: "3",
            options: [
                "1",
                "2",
                "3",
                "4 or more"

            ]
        },


    ];

    return questions;
}

// Function to hold data for the Heap quiz
function heapQuizData() {
    var questions = [
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

    return questions;
}
function stackQuizData() {
    var questions = [
        {
            numb: 1,
            question: "Which one of the following is an application of Stack Data Structure?",
            answer: "All of the above",
            options: [
                "Managing function calls",
                "The stock span problem",
                "Arithmetic expression evaluation",
                "All of the above"

            ]
        },

        {
            numb: 2,
            question: "Process of inserting an element in stack is called ____________.",
            answer: "Push",
            options: [
                "Create",
                "Push",
                "Evaluation",
                "Pop"

            ]
        },

        {
            numb: 3,
            question: "In a stack, if a user tries to remove an element from empty stack it is called _________.",
            answer: "Underflow",
            options: [
                "Underflow",
                "Empty collection",
                "Overflow",
                "Garbage Collection"

            ]
        },

        {
            numb: 4,
            question: "Entries in a stack are . What is the meaning of this statement?",
            answer: "There is a Sequential entry that is one by one",
            options: [
                "A collection of stacks is sortable",
                "Stack entries may be compared with the '<' operation",
                "The entries are stored in a linked list",
                "There is a Sequential entry that is one by one"

            ]
        },

        {
            numb: 5,
            question: "The prefix form of A-B/ (C * D ⋀ E) is?",
            answer: "-A/B*C⋀DE",
            options: [
                "-/*⋀ACBDE",
                "ABCD*⋀DE",
                "-A/B*C⋀DE",
                "-A/BC*⋀DE"

            ]
        },

        {
            numb: 6,
            question: "What is the value of the postfix expression 6 3 2 4 + – *:",
            answer: "Something between 15 and 100",
            options: [
                "Something between -5 and -15",
                "Something between 5 and -5",
                "Something between 5 and 15",
                "Something between 15 and 100"

            ]
        },

        {
            numb: 7,
            question: "Which of the following applications may use a stack?",
            answer: "All of the mentioned",
            options: [
                "A parentheses balancing program",
                "Tracking of local variables at run time",
                "Compiler Syntax Analyzer",
                "All of the mentioned"

            ]
        },

        {
            numb: 8,
            question: "The postfix form of A*B+C/D is?",
            answer: "A*BC+/D",
            options: [
                "*AB/CD+",
                "AB*CD/+",
                "A*BC+/D",
                "ABCD+/*"

            ]
        },

        {
            numb: 9,
            question: "Process of removing an element from stack is called __________",
            answer: "Pod",
            options: [
                "Create",
                "Push",
                "Evaluation",
                "Pod"

            ]
        },

        {
            numb: 10,
            question: "Consider the usual algorithm for determining whether a sequence of parentheses is balanced.The maximum number of parentheses that appear on the stack AT ANY ONE TIME when the algorithm analyzes: (()(())(())) are:",
            answer: "3",
            options: [
                "1",
                "2",
                "3",
                "4 or more"

            ]
        },


    ];

    return questions;
}

function heapQuizData() {
    var questions = [
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

    return questions;
}
function binarysearchQuizData() {
    var questions = [
        {
            
                numb: 1,
                question: "Which of the following is false about a binary search tree",
                answer: "In order sequence gives decreasing order of elements",
                options: [
                  "The left child is always lesser than its parent",
                  "The right child is always greater than its parent",
                  "The left and right sub-trees should also be binary search trees",
                  "In order sequence gives decreasing order of elements"
                ]
              },
                {
                numb: 2,
                question: "What is the speciality about the inorder traversal of a binary search tree?",
                answer: "It traverses in an increasing order",
                options: [
                  "It traverses in a non increasing order",
                  "It traverses in an increasing order",
                  "It traverses in a random fashion",
                  "It traverses based on priority of the node"
                  
                ]
              },
                {
                numb: 3,
                question: "What are the worst case and average case complexities of a binary search tree?",
                answer: "O(n), O(logn)",
                options: [
                  "O(n), O(n)",
                  "O(logn), O(logn)",
                  "O(logn), O(n)",
                  "O(n), O(logn)"
                  
                ]
              },
                {
                numb: 4,
                question: "What are the conditions for an optimal binary search tree and what is its advantage?",
                answer: "The tree should not be modified and you should know how often the keys are accessed, it improves the lookup cost",
                options: [
                  "The tree should not be modified and you should know how often the keys are accessed, it improves the lookup cost",
                  "You should know the frequency of access of the keys, improves the lookup time",
                  "The tree can be modified and you should know the number of elements in the tree before hand, it improves the deletion time",
                  "The tree should be just modified and improves the lookup time"
                  
                ]
              },
                {
                numb: 5,
                question: "What is the worst case time complexity for search, insert and delete operations in a general Binary Search Tree?",
                answer: "O(n) for all",
                options: [
                  "O(n) for all",
                  "O(Logn) for all",
                  "O(Logn) for search and insert, and O(n) for delete",
                  "O(Logn) for search, and O(n) for insert and delete"
                  
                ]
              },
                {
                numb: 6,
                question: "We are given a set of n distinct elements and an unlabelled binary tree with n nodes. In how many ways can we populate the tree with the given set so that it becomes a binary search tree? ",
                answer: "1",
                options: [
                  "0",
                  "1",
                  "n!",
                  "(1/(n+1)).2nCn"
                ]
              },
              {
                numb: 7,
                question: "Which of the following traversal outputs the data in sorted order in a BST?",
                answer: "Inorder",
                options: [
                  "Preorder",
                  "Inorder",
                  "Postorder",
                  "Level order"
                ]
              },
              {
                numb: 8,
                question: "The average depth of a binary search tree is:",
                answer: "O(log n)",
                options: [
                  "O(n0.5)",
                  "O(n)",
                  "O(log n)",
                  "O(n log n)"
                ]
              },
              {
                numb: 9,
                question: "The following numbers are inserted into an empty binary search tree in the given order: 10, 1, 3, 5, 15, 12, 16. What is the height of the binary search tree (the height is the maximum distance of a leaf node from the root)? ",
                answer: "3",
                options: [
                  "2",
                  "3",
                  "4",
                  "6"
                ]
              },
              {
                numb: 10,
                question: "Which of the following traversals is sufficient to construct BST from given traversals \n 1. Inorder, \n 2. Preorder,\n 3. Postorder",
                answer: "Either 2 or 3 is sufficient",
                options: [
                  "Any one of the given three traversals is sufficient",
                  "Either 2 or 3 is sufficient",
                  "2 and 3",
                  "1 and 3"
                ]
              },
    
            {
                numb: 11,
                question: "The number of edges from root to the node is called ",
                answer: "Depth",
                options: [
                  "Height", 
                  "Depth",
                  "Length",
                  "Width"
                ]
              },{
                numb:12,
                question: "The no of external nodes in a full binary tree with n internal nodes is?",
                answer: "n+1",
                options: [
                  "n",
                  "n+1",
                  "2n",
                  "2n + 1"
                 
                ]
              },{
                numb: 13,
                question: "A Binary Tree can have",
                answer: "All of the above",
                options: [
                  "Can have 2 children",
                  "Can have 1 children",
                  "Can have 0 children",
                  "All of the above"
                  
                ]
              },{
                numb: 14,
                question: "Which of the following is a true about Binary Trees?",
                answer: "None of the above",
                options: [
                  "Every complete binary tree is also a full binary tree.",
                  "Every full binary tree is also a complete binary tree.",
                  "No binary tree is both complete and full.",
                  "None of the above"
                  
                ]
              },{
                numb: 15,
                question: "Which of the following is not an advantage of trees?",
                answer: "Undo/Redo operations in a notepad",
                options: [
                  "Hierarchical structure",
                  "Faster search",
                  "Router algorithms",
                  "Undo/Redo operations in a notepad"
                ]
              },{
                numb: 16,
                question: "The difference between the external path length and the internal path length of a binary tree with n internal nodes is?",
                answer: "2n",
                options: [
                  "1",
                  "n",
                  "n + 1",
                  "2n"
                ]
              },{
                numb: 17,
                question: "If the tree is not a complete binary tree then what changes can be made for easy access of children of a node in the array ?",
                answer: "every node stores data saying which of its children exist in the array",
                options: [
                  "every node stores data saying which of its children exist in the array",
                  "no need of any changes continue with 2w and 2w+1, if node is at i",
                  "keep a seperate table telling children of a node",
                  "use another array parallel to the array with tree"
                ]
              },{
                numb: 18,
                question: "What is the time complexity of level order traversal?",
                answer: "O(n)",
                options: [
                  "O(1)",
                  "O(n)",
                  "O(logn)",
                  "O(nlogn)"
                  ]
              },{
                numb: 19,
                question: "What is the average case time complexity for finding the height of the binary tree?",
                answer: "h = O(log n)",
                options: [
                  "h = O(loglogn)",
                  "h = O(nlogn)",
                  "h = O(n)",
                  "h = O(log n)"
                ]
              },{
                numb: 20,
                question: "In a full binary tree if there are L leaves, then total number of nodes N are?",
                answer: "N = 2*L - 1",
                options: [
                  "N = 2*L",
                  "N = L + 1",
                  "N = L - 1",
                  "N = 2*L - 1"
                ]
              },
            ];
    return questions;
}
function graphsQuizData() {
    var questions = [
        {
            
                numb: 1,
                question: "Which of the following is false about a binary search tree",
                answer: "In order sequence gives decreasing order of elements",
                options: [
                  "The left child is always lesser than its parent",
                  "The right child is always greater than its parent",
                  "The left and right sub-trees should also be binary search trees",
                  "In order sequence gives decreasing order of elements"
                ]
              },
                {
                numb: 2,
                question: "What is the speciality about the inorder traversal of a binary search tree?",
                answer: "It traverses in an increasing order",
                options: [
                  "It traverses in a non increasing order",
                  "It traverses in an increasing order",
                  "It traverses in a random fashion",
                  "It traverses based on priority of the node"
                  
                ]
              },
                {
                numb: 3,
                question: "What are the worst case and average case complexities of a binary search tree?",
                answer: "O(n), O(logn)",
                options: [
                  "O(n), O(n)",
                  "O(logn), O(logn)",
                  "O(logn), O(n)",
                  "O(n), O(logn)"
                  
                ]
              },
                {
                numb: 4,
                question: "What are the conditions for an optimal binary search tree and what is its advantage?",
                answer: "The tree should not be modified and you should know how often the keys are accessed, it improves the lookup cost",
                options: [
                  "The tree should not be modified and you should know how often the keys are accessed, it improves the lookup cost",
                  "You should know the frequency of access of the keys, improves the lookup time",
                  "The tree can be modified and you should know the number of elements in the tree before hand, it improves the deletion time",
                  "The tree should be just modified and improves the lookup time"
                  
                ]
              },
                {
                numb: 5,
                question: "What is the worst case time complexity for search, insert and delete operations in a general Binary Search Tree?",
                answer: "O(n) for all",
                options: [
                  "O(n) for all",
                  "O(Logn) for all",
                  "O(Logn) for search and insert, and O(n) for delete",
                  "O(Logn) for search, and O(n) for insert and delete"
                  
                ]
              },
                {
                numb: 6,
                question: "We are given a set of n distinct elements and an unlabelled binary tree with n nodes. In how many ways can we populate the tree with the given set so that it becomes a binary search tree? ",
                answer: "1",
                options: [
                  "0",
                  "1",
                  "n!",
                  "(1/(n+1)).2nCn"
                ]
              },
              {
                numb: 7,
                question: "Which of the following traversal outputs the data in sorted order in a BST?",
                answer: "Inorder",
                options: [
                  "Preorder",
                  "Inorder",
                  "Postorder",
                  "Level order"
                ]
              },
              {
                numb: 8,
                question: "The average depth of a binary search tree is:",
                answer: "O(log n)",
                options: [
                  "O(n0.5)",
                  "O(n)",
                  "O(log n)",
                  "O(n log n)"
                ]
              },
              {
                numb: 9,
                question: "The following numbers are inserted into an empty binary search tree in the given order: 10, 1, 3, 5, 15, 12, 16. What is the height of the binary search tree (the height is the maximum distance of a leaf node from the root)? ",
                answer: "3",
                options: [
                  "2",
                  "3",
                  "4",
                  "6"
                ]
              },
              {
                numb: 10,
                question: "Which of the following traversals is sufficient to construct BST from given traversals \n 1. Inorder, \n 2. Preorder,\n 3. Postorder",
                answer: "Either 2 or 3 is sufficient",
                options: [
                  "Any one of the given three traversals is sufficient",
                  "Either 2 or 3 is sufficient",
                  "2 and 3",
                  "1 and 3"
                ]
              },
    
            {
                numb: 11,
                question: "The number of edges from root to the node is called ",
                answer: "Depth",
                options: [
                  "Height", 
                  "Depth",
                  "Length",
                  "Width"
                ]
              },{
                numb:12,
                question: "The no of external nodes in a full binary tree with n internal nodes is?",
                answer: "n+1",
                options: [
                  "n",
                  "n+1",
                  "2n",
                  "2n + 1"
                 
                ]
              },{
                numb: 13,
                question: "A Binary Tree can have",
                answer: "All of the above",
                options: [
                  "Can have 2 children",
                  "Can have 1 children",
                  "Can have 0 children",
                  "All of the above"
                  
                ]
              },{
                numb: 14,
                question: "Which of the following is a true about Binary Trees?",
                answer: "None of the above",
                options: [
                  "Every complete binary tree is also a full binary tree.",
                  "Every full binary tree is also a complete binary tree.",
                  "No binary tree is both complete and full.",
                  "None of the above"
                  
                ]
              },{
                numb: 15,
                question: "Which of the following is not an advantage of trees?",
                answer: "Undo/Redo operations in a notepad",
                options: [
                  "Hierarchical structure",
                  "Faster search",
                  "Router algorithms",
                  "Undo/Redo operations in a notepad"
                ]
              },{
                numb: 16,
                question: "The difference between the external path length and the internal path length of a binary tree with n internal nodes is?",
                answer: "2n",
                options: [
                  "1",
                  "n",
                  "n + 1",
                  "2n"
                ]
              },{
                numb: 17,
                question: "If the tree is not a complete binary tree then what changes can be made for easy access of children of a node in the array ?",
                answer: "every node stores data saying which of its children exist in the array",
                options: [
                  "every node stores data saying which of its children exist in the array",
                  "no need of any changes continue with 2w and 2w+1, if node is at i",
                  "keep a seperate table telling children of a node",
                  "use another array parallel to the array with tree"
                ]
              },{
                numb: 18,
                question: "What is the time complexity of level order traversal?",
                answer: "O(n)",
                options: [
                  "O(1)",
                  "O(n)",
                  "O(logn)",
                  "O(nlogn)"
                  ]
              },{
                numb: 19,
                question: "What is the average case time complexity for finding the height of the binary tree?",
                answer: "h = O(log n)",
                options: [
                  "h = O(loglogn)",
                  "h = O(nlogn)",
                  "h = O(n)",
                  "h = O(log n)"
                ]
              },{
                numb: 20,
                question: "In a full binary tree if there are L leaves, then total number of nodes N are?",
                answer: "N = 2*L - 1",
                options: [
                  "N = 2*L",
                  "N = L + 1",
                  "N = L - 1",
                  "N = 2*L - 1"
                ]
              },
            ];
    return questions;
}

function linkedlistQuizData() {
    var questions = [
        {
        numb: 1,
        question: "A linear collection of data elements where the linear node is given by means of pointer is called?",
        answer: "linked list",
        options: [
          "linked list",
          "node list",
          "primitive list",
          "None of these"
    
        ]
      },
    
      {
        numb: 2,
        question: "What is the time complexity to count the number of elements in the linked list?",
        answer: "O(n)",
        options: [
          "O(1)",
          "O(n)",
          "O(logn)",
          "None of the mentioned"
    
        ]
      },
    
      {
        numb: 3,
        question: "Which of these is an application of linked lists?",
        answer: "All of the mentioned",
        options: [
          "To implement file systems",
          "For separate chaining in hash-tables",
          "To implement non-binary trees",
          "All of the mentioned"
    
        ]
      },
    
      {
        numb: 4,
        question: "In circular linked list, insertion of node requires modification of?",
        answer: "Two pointer",
        options: [
          "One pointer",
          "Two pointer",
          "Three pointer",
          "None"
    
        ]
      },
    
      {
        numb: 5,
        question: "Consider an implementation of unsorted singly linked list. Suppose it has its representation with a head pointer only.Given the representation, which of the following operation can be implemented in O(1) time? i) Insertion at the front of the linked list ii) Insertion at the end of the linked list. iii) Deletion of the front node of the linked list. iv) Deletion of the last node of the linked list ",
        answer: "I and III",
        options: [
          "I and II",
          "I and III",
          "I, II and III",
          "I, II and IV"
    
        ]
      },
    
      {
        numb: 6,
        question: "What would be the asymptotic time complexity to find an element in the linked list?",
        answer: "O(n)",
        options: [
          "O(1)",
          "O(n)",
          "O(n2)",
          "None of the mentioned"
    
        ]
      },
    
      {
        numb: 7,
        question: "What kind of linked list is best to answer question like.What is the item at position n?",
        answer: "Array implementation of linked list",
        options: [
          "Singly linked list",
          "Doubly linked list",
          "Circular linked list",
          "Array implementation of linked list"
    
        ]
      },
    
      {
        numb: 8,
        question: "Linked list is considered as an example of ___________ type of memory allocation.",
        answer: "Dynamic",
        options: [
          "Dynamic",
          "Static",
          "Compile time",
          "None of the mentioned"
    
        ]
      },
    
      {
        numb: 9,
        question: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
        answer: "Merge Sort",
        options: [
          "Insertion Sort",
          "Quick Sort",
          "Heap Sort",
          "Merge Sort"
    
        ]
      },
    
      {
        numb: 10,
        question: "Which of the following points is/are true about Linked List data structure when it is compared with array",
        answer: "All of the mentioned",
        options: [
          "Arrays have better cache locality that can make them better in terms of performance",
          "It is easy to insert and delete elements in Linked List",
          "Random access is not allowed in a typical implementation of Linked Lists",
          "All of the mentioned"
    
        ]
      },
    ];
    return questions;
}

function queueQuizData() {
    var questions = [
        {
        numb: 1,
        question: "A linear list of elements in which deletion can be done from one end (front) and insertion can take place only at the other end (rear) is known as ___________",
        answer: "Queue",
        options: [
          "Queue",
          "Stack",
          "Tree",
          "Linked list"
        ]
      },
        {
        numb: 2,
        question: "In a Queue, if a user tries to remove an element from empty Queue it is called _________.",
        answer: "Underflow",
        options: [
          "Underflow",
          "Empty collection",
          "Overflow",
          "Garbage Collection"
        ]
      },
        {
        numb: 3,
        question: "How many stacks are needed to implement a queue? Consider the situation where no other data structure like arrays, linked list is available to you.",
        answer: "2",
        options: [
          "1",
          "2",
          "3",
          "4"
        ]
      },
        {
        numb: 4,
        question: "If the elements A, B, C and D are placed in a queue and are deleted one at a time, in what order will they be removed?",
        answer: "ABCD",
        options: [
          "ABCD",
          "DCBA",
          "DBAC",
          "ABDC"
        ]
      },
        {
        numb: 5,
        question: "Which of the following is not an advantage of a priority queue?",
        answer: "Easy to delete elements in any case",
        options: [
          "Easy to implement",
          "Processes with different priority can be efficiently handled",
          "Applications with differing requirements",
          "Easy to delete elements in any case"
        ]
      },
        {
        numb: 6,
        question: "Your Question is Here",
        answer: "Correct answer of the question is here",
        options: [
          "Option 1",
          "option 2",
          "option 3",
          "option 4"
        ]
      },
      {
        numb: 7,
        question: "In case of insertion into a linked queue, a node borrowed from the __________ list is inserted in the queue?",
        answer: "AVAIL",
        options: [
          "AVAIL",
          "FRONT",
          "REAR",
          "None of the above"
        ]
      },
      {
        numb: 8,
        question: "Which one of the following is an application of Queue Data Structure?",
        answer: "All of the above",
        options: [
          "When a resource is shared among multiple consumers.",
          "When data is transferred asynchronously between two processes",
          "Load Balancing",
          "All of the above"
        ]
      },
      {
        numb: 9,
        question: "What is the time complexity to insert a node based on key in a priority queue?",
        answer: "O(n)",
        options: [
          "O(nlogn)",
          "O(logn)",
          "O(n)",
          "O(n^2)"
        ]
      },
      {
        numb: 10,
        question: "Consider a standard Circular Queue q implementation whose size is 11 and the elements of the queue are q[0], q[1], q[2]…..,q[10].The front and rear pointers are initialized to point at q[2] . In which position will the ninth element be added?",
        answer: "q[0]",
        options: [
          "q[0]",
          "q[1]",
          "q[9]",
          "q[10]"
        ]
      },
    ];
    return questions;
}

//selecting all required elements
//const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
// if startQuiz button clicked
/*start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}*/
info_box.classList.add("activeInfo");
// if exitQuiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    // window.open('index.html', '_self');
}
// if continueQuiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}
let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
// if restartQuiz button clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}
// if quitQuiz button clicked
quit_quiz.onclick = () => {
    window.location.reload(); //reload the current window
}
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
// if Next Que button clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1) { //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    } else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}
// getting questions and options from array
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");
    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
//if user clicked on option
function optionSelected(answer) {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");
        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}
function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) { // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! , You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if (userScore > 1) { // if user scored more than 1
        let scoreTag = '<span>and nice , You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else { // if user scored less than 1
        let scoreTag = '<span>and sorry , You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if (time < 9) { //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if (time < 0) { //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}
function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if (time > 549) { //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}
function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

document.addEventListener('DOMContentLoaded', function () {
    var videoContainer = document.getElementById('videoContainer');
    var videoIndex = 0; // Initial video index
    var videos = ['array.mp4', 'heaps.mp4', 'Stack.mp4', 'binarysearch.mp4', 'graph.mp4', 'linkedlist.mp4', 'queue.mp4']; // List of video sources
    // var scriptFilePaths = ['TensionFlow_ACE\\frontend\\DSA-Quiz-App\\JS\\array.js', 'TensionFlow_ACE\\frontend\\DSA-Quiz-App\\JS\\heap.js', 'TensionFlow_ACE\\frontend\\DSA-Quiz-App\\JS\\Stack.js'];

    function showQuizInfo() {
        // Check if the quiz info already exists, if so, remove it
        // var existingInfoBox = document.querySelector('.info_box');
        // if (existingInfoBox) {
        //     existingInfoBox.remove();
        // }
        // var existingInfoBox = document.querySelector('.quiz_box');
        // if (existingInfoBox) {
        //     existingInfoBox.remove();
        // }
        // var existingInfoBox = document.querySelector('.result_box');
        // if (existingInfoBox) {
        //     existingInfoBox.remove();
        // }


        // Create and append the info box HTML
        var infoBoxHTML = `
        <div class="info_box">
            <i class="fa-solid fa-lock" style="position: absolute; right: 0; margin-right: 10px; margin-top: 10px;"></i>
            <div class="info-title"><span>Some Rules of this Quiz</span></div>
            <div class="info-list">
                <div class="info">1. You will have only <span>15 seconds</span> per question.</div>
                <div class="info">2. Once you select your answer, it can't be undone.</div>
                <div class="info">3. You can't select any option once the timer goes off.</div>
                <div class="info">4. You can't exit from the Quiz while you're attempting.</div>
                <div class="info">5. You'll get points on the basis of your correct answers.</div>
            </div>
            <div class="buttons">
                <button class="quit">Exit Quiz</button>
                <button class="restart">Continue</button>
            </div>
        </div>
        <div class="quiz_box">
            <header>
                <div class="title">Arrays Quiz</div>
                <div class="timer">
                    <div class="time_left_txt">Time Left</div>
                    <div class="timer_sec">15</div>
                </div>
                <div class="time_line"></div>
            </header>
            <section>
                <div class="que_text">
                    <!-- Here I've inserted question from JavaScript -->
                </div>
                <div class="option_list">
                    <!-- Here I've inserted options from JavaScript -->
                </div>
            </section>
            <!-- footer of Quiz Box -->
            <footer>
                <div class="total_que">
                    <!-- Here I've inserted Question Count Number from JavaScript -->
                </div>
                <button class="next_btn">Next</button>
            </footer>
        </div>
        <div class="result_box">
            <div class="icon">
                <i class="fas fa-crown"></i>
            </div>
            <div class="complete_text">You've completed the Quiz!</div>
            <div class="score_text">
                <!-- Here I've inserted Score Result from JavaScript -->
            </div>
            <div class="buttons">
                <button class="restart">Restart Quiz</button>
                <button class="quit">Quit Quiz</button>
            </div>
        </div>
        `;
        videoContainer.insertAdjacentHTML('afterend', infoBoxHTML);
    }

    // Function to change the video when scrolling up or down
    function changeVideo(event) {
        var delta = Math.sign(event.deltaY); // Get the scroll direction: -1 for up, 1 for down

        if (delta === 1) {
            // Scroll down: move to the next video
            // videoIndex = (videoIndex + 1) % videos.length;
            videoIndex ++;
            if (videoIndex >= videos.length) {
                videoIndex = 0;
            }
        } else {
            // Scroll up: move to the previous video
            // videoIndex = (videoIndex - 1 + videos.length) % videos.length;
            videoIndex --;
            if (videoIndex < 0) {
                videoIndex = videos.length - 1;
            }
        }
        // console.log(videoIndex);

        // Update video source
        var video = videoContainer.querySelector('video');
        video.src = videos[videoIndex];
        video.play();

        // Determine which quiz data function to call based on the video being played
        var quizDataFunction;
        switch (videoIndex) {
            case 0:
                quizDataFunction = arrayQuizData;
                break;
            case 1:
                quizDataFunction = heapQuizData;
                break;
            case 2:
                quizDataFunction = stackQuizData;
                break;
            case 3:
                quizDataFunction = binarysearchQuizData;
                break;
            case 4:
                quizDataFunction = graphsQuizData;
                break;
            case 5:
                quizDataFunction = linkedlistQuizData;
                break;
            case 6:
                quizDataFunction = queueQuizData;
                break;
        }

        // Call the respective quiz data function and assign the questions to the global 'questions' variable
        questions = quizDataFunction();

        // Update info data
        var info = infoSection.querySelector('.profile-info');
        info.querySelector('.profile-title').textContent = infoData[videoIndex].name;
        info.querySelector('.profile-name').textContent = infoData[videoIndex].title;

        var fromElement = document.getElementById('profile-img');
        fromElement.src = infoData[videoIndex].image;

        // showQuizInfo(); // Uncomment this line if needed
    }
    
    // get id get param from url
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    // handle undefined id
    if (id === null) {
        id = 1;
    }

    var video = videoContainer.querySelector('video');
    video.src = videos[parseInt(id)-1];
    video.play();

    questions = arrayQuizData();


    // Listen for wheel events and trigger video change accordingly
    videoContainer.addEventListener('wheel', changeVideo);

    // Listen for video metadata loaded event
    var video = videoContainer.querySelector('video');
    video.addEventListener('loadedmetadata', function () {
        // Calculate the duration of the video in milliseconds
        var duration = video.duration * 1000; // Convert duration to milliseconds

        // After the duration, remove the display: none style
        setTimeout(function () {
            var restartButton = document.querySelector('.restart');
            var colorChange = document.querySelector(".container");
            var lock = document.querySelector(".fa-lock")
            lock.style.display = "none";
            restartButton.style.display = 'block'; // Set display property back to default (block)
            // colorChange.style.background = "none"; // Remove background color property;
        }, duration);
    });
});

var infoData = [
  { name: 'Mike Johnson', title: 'Senior Manager', image: 'https://www.milkround.com/advice/wp-content/uploads/how-to-take-a-good-linkedin-photo-1024x576.jpg' },
  { name: 'Jane Smith', title: 'Software Engineer', image: 'https://cdn.openart.ai/uploads/image_Sg__ilLp_1698687691182_raw.jpg' },
  { name: 'Joe Doe', title: 'Product Designer', image: 'https://onlineprofilepros.com/wp-content/uploads/2017/12/profile-photo.jpeg' },
  { name: 'Meet Patel', title: 'Marketing Specialist', image: 'https://cdn.openart.ai/uploads/image_Sg__ilLp_1698687691182_raw.jpg' },
  { name: 'Heer Mehta', title: 'Financial Analyst', image: 'https://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-portrait.jpg' },
  { name: 'Danush Nadar', title: 'Graphic Designer', image: 'https://www.milkround.com/advice/wp-content/uploads/how-to-take-a-good-linkedin-photo-1024x576.jpg' },
  { name: 'Viir Phuria', title: 'Project Manager', image: 'https://cdn.openart.ai/uploads/image_Sg__ilLp_1698687691182_raw.jpg' }
];
