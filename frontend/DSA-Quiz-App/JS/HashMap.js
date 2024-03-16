// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "1)	Which of the below does not implement Map interface?",
    answer: "Vector",
    options: [
      "HashMap",
      "Hashtable",
      "EnumMap",
      "Vector"

    ]
  },

  {
    numb: 2,
    question: "What happens if we put a key object in a HashMap which exists?",
    answer: "The new object replaces the older object",
    options: [
      "The new object replaces the older object",
      "The new object is discarded",
      "The old object is removed from the map",
      "It throws an exception as the key already exists in the map"

    ]
  },

  {
    numb: 3,
    question: "What is the premise of equality for IdentityHashMap?",
    answer: "Reference equality",
    options: [
      "Reference equality",
      "Name equality",
      "Hashcode equality",
      "Length equality"

    ]
  },

  {
    numb: 4,
    question: "While finding the correct location for saving key value pair, how many times the key is hashed?",
    answer: "2",
    options: [
      "1",
      "2",
      "3",
      "unlimited till bucket is found"

    ]
  },

  {
    numb: 5,
    question: "If two threads access the same hashmap at the same time, what would happen?",
    answer: "ConcurrentModificationException",
    options: [
      "ConcurrentModificationException",
      "NullPointerException",
      "ClassNotFoundException",
      "RuntimeException"

    ]
  },

  {
    numb: 6,
    question: "If large number of items are stored in hash bucket, what happens to the internal structure?",
    answer: "The bucket will switch from LinkedList to BalancedTree",
    options: [
      "The bucket will switch from LinkedList to BalancedTree",
      "The bucket will increase its size by a factor of load size defined",
      "The LinkedList will be replaced by another hashmap",
      "Any further addition throws Overflow exception"

    ]
  },

  {
    numb: 7,
    question: "Hashing technique which allocates fixed number of buckets is classified as",
    answer: "external hashing",
    options: [
      "dynamic hashing",
      "static hashing",
      "external hashing",
      "static hashing"

    ]
  },

  {
    numb: 8,
    question: "If several elements are competing for the same bucket in the hash table, what is it called?",
    answer: "Collision",
    options: [
      "Diffusion",
      "Replication",
      "Collision",
      "None of the mentioned"

    ]
  },

  {
    numb: 9,
    question: "Given a hash table T with 25 slots that stores 2000 elements, the load factor α for T is __________",
    answer: "80",
    options: [
      "80",
      "0.0125",
      "8000",
      "1.25"

    ]
  },

  {
    numb: 10,
    question: "What is a hash function?",
    answer: "A function that computes the location of the key in the array",
    options: [
      "A function has allocated memory to keys",
      "A function that computes the location of the key in the array",
      "A function that creates an array",
      "None of the mentioned"

    ]
  },
];