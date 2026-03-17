class Animal:
    total_animals = 0

    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color
        Animal.total_animals += 1

    def make_sound(self):
        return 'Making sound'

    def eat(self):
        return "Eating"

    def __str__(self):
        return f'Name: {self.name}\n Age: {self.age}\n Color: {self.color}'
    
    
    
    

class Cat(Animal):
    def __init__(self, name, age, color, home_cat):
        super().__init__(name, age, color)
        self.home_cat = home_cat

    def is_home_cat(self):
        return self.home_cat

    def make_sound(self):
        return 'Meoww'

    def __str__(self):
        return super().__str__() + f'\n Is home cat?: {self.home_cat}'
    


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def get_breed(self):
        return self.breed

    def make_sound(self):
        return 'Woof'

    def __str__(self):
        return super().__str__() + f'\n Breed: {self.breed}'