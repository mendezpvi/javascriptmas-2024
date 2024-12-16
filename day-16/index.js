import { workshopData } from '/data.js'


// Function to find the elf who created more presents than they delivered
function findNaughtyElf(data) {
  const naughtyElves = []

  data.forEach((elf) => {
    const totalShipped = {}

    // Recursive function to sum toy counts
    function sumToys(shipmentData) {
      for (const region in shipmentData) {
        const subRegion = shipmentData[region];
        if (Array.isArray(subRegion)) {
          // If it's an array, sum toy counts
          subRegion.forEach(({ toy, count }) => {
            totalShipped[toy] = (totalShipped[toy] || 0) + count
          })
        } else {
          // If it's an object, recurse further
          sumToys(region)
        }
      }
    }

    // Calculate total toys shipped
    sumToys(elf)

    // Compare toysMade to totalShipped
    for (const toy in elf.toysMade) {
      if (elf.toysMade[toy] > (totalShipped[toy] || 0)) {
        naughtyElves.push(elf.name)
        break
      }
    }
  })

  return naughtyElves.join(', ')
}

// Example usage
console.log(findNaughtyElf(workshopData)) //Elf Kalvin Armadillo

