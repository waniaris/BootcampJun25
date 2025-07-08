# Python variables (Dynamic typing)
name = "Alice"   # String
age = 25        # Integer
height = 5.6    # Float
is_student = True  # Boolean

# JavaScript equivalent (for comparison)
# var name = "Alice";
# var age = 25;
# var height = 5.6;
# var isStudent = true;

print(name, age, height, is_student)

# Python list (similar to JavaScript arrays)
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Access first element

# Python dictionary (similar to JavaScript objects)
person = {"name": "Alice", "age": 25}
print(person["name"])  # Access value by key

# Python for loop (similar to JavaScript for loop)
for i in range(5):  # range(5) generates numbers 0 to 4
    print(f"Iteration {i}")

# JavaScript equivalent
# for (let i = 0; i < 5; i++) {
#     console.log(`Iteration ${i}`);
# }

# Python while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# JavaScript equivalent
# let count = 0;
# while (count < 5) {
#     console.log(`Count: ${count}`);
#     count++;
# }