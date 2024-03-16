let questions = [
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
