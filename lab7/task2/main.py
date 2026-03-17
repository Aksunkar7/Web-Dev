from models import Cat, Animal, Dog

c = Cat('Murka', 2, 'white', True)
d = Dog('Rex', 1, 'Ala', 'Tobet')
print(c)
print('-' * 60)
print(d)
print('-' * 60)

print(d.make_sound())
print(c.make_sound())
print(d.get_breed())
print("is home cat?: ", c.is_home_cat())