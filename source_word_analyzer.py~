class Source:
    number_unique_words = 0
    average_word_length = 0
    longest_word_length = 0
    length = 0
    
    words = ""
    unique_word_list = []
    
    def __init__(self, a_file):
        self.words = a_file.read().split()
        self.length = len(self.words)
        self.unique_word_list = set(self.words)
        print(self.unique_word_list)
        self.number_unique_words = len(self.unique_word_list)
        self.average_word_length = sum(len(word) for word in self.unique_word_list)/self.number_unique_words
        self.longest_word_length = max(len(word) for word in self.unique_word_list)
        print(self.longest_word_length)
        print(self.average_word_length)
        
        
        
    def get_credibility(self):
        credibility = self.number_unique_words/self.length
        return (credibility*(self.longest_word_length+self.average_word_length)/2*5/10)

        
    
 
    
    
    
    
source1 = Source(open('filename.html', encoding='utf-8'))
print("CREDIBILITY: ", source1.get_credibility())

