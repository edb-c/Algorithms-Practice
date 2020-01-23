#ruby program that uses split, parses Integers

line = "100,200,300"

# Split on the comma char.
values = line.split(",")

# Parse each number in the result array.
values.each do |v|
    number = Integer(v)

    # Display number if it is greater than or equal to 200.
    if number >= 200
        puts number
    end
end

#Output

#200
#300