## Stacks are a linear data structure that stores items in a Last-In/First-Out (LIFO) 
# or First-In/Last-Out (FILO) manner. In stack, a new element is added at one end and 
# an element is removed from that end only. The insert and delete operations are often 
# called push and pop.


class Stack:
    def __init__(self):
        self.data = []

    def pop(self):
        self.data.pop()
        # todo

    def push(self, x):
        self.data.append(x)

    def empty(self):
        if (len(self.data) == 0):
            return True    
        else:
            return False
    
    def size(self):
        return len(self.data)     

    def top(self):
        return self.data[len(self.data)-1]
        
       
    


test = Stack()

print(test.empty())

test.push(3)
test.push(4)
test.push(5)
test.push(6)
print(test.data)
print(test.top())
print(test.size())

test.pop()
print(test.data)
