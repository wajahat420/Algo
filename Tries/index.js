class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the Trie
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  }

  // Search for a word in the Trie
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.isEndOfWord;
  }

  // Check if a prefix exists in the Trie
  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return true;
  }

  // Helper function for autocomplete
  _collectWords(node, prefix, result) {
    if (node.isEndOfWord) {
      result.push(prefix);
    }
    for (const [char, childNode] of node.children) {
      console.log({ char, childNode })
      this._collectWords(childNode, prefix + char, result);
    }
  }

  // Autocomplete: Suggest words based on a given prefix
  autocomplete(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return []; // No words match this prefix
      }
      node = node.children.get(char);
    }
    const results = [];
    this._collectWords(node, prefix, results);
    return results;
  }
}

// Example usage:
const trie = new Trie();
trie.insert("hello");
trie.insert("helium");
trie.insert("hero");
trie.insert("heritage");
trie.insert("hermit");


// console.log(trie.search("hero"));       // true
// console.log(trie.search("her"));        // false
// console.log(trie.startsWith("her"));    // true
console.log(trie.autocomplete("he"));   // ["hello", "helium", "hero", "heritage", "hermit"]
// console.log(trie.autocomplete("her"));  // ["hero", "heritage", "hermit"]
// console.log(trie.autocomplete("xyz"));  // []