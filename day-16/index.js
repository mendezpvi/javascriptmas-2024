import { workshopData } from './data.js'


// Function to find the elf who created more presents than they delivered
function findNaughtyElf(data) {

  // Array to store the names of naughty eles
  const naughtyElves = []

  // Iterate through each elf in the data
  data.forEach((elf) => {

    // Obj. to store the total count of toys shipped, grouped by toy type
    const totalShipped = {}

    // Recursive function to sum up toy shipments
    function sumToys(shipmentData) {
      for (const region in shipmentData) {
        const subRegion = shipmentData[region]

        if (Array.isArray(subRegion)) {

          // If it's an array, sum toy counts
          subRegion.forEach(({ toy, count }) => {

            // Add the count to the respective toy in totalShipped
            totalShipped[toy] = (totalShipped[toy] || 0) + count
          })
        } else {

          // If it's an object, recurse further
          sumToys(subRegion)
        }
      }
    }

    // Calculate total toys shipped for the current elf
    sumToys(elf.toysShipped)

    // Compare toysMade to totalShipped
    for (const toy in elf.toysMade) {

      if (elf.toysMade[toy] > (totalShipped[toy] || 0)) {

        // Add the elf's name to the naughtyElves list and stop checking further
        naughtyElves.push(elf.name)
        break
      }
    }
  })

  // Return a coma-separated string of naughty elves' names
  return naughtyElves.join(', ')
}

// Example usage
console.log(findNaughtyElf(workshopData))
// Output: Elf Kalvin Armadillo

