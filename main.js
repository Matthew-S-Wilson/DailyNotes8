/*
    Define a variable named `notes` and assign a value of an empty array
*/


/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

const notes = [
    {
    id:1,
    text:"Beginner Notes",
    author:"Mark",
    date:"August 1st 2022",
    topics:["Introduction", "Note-taking", "Studying Tips", "Group Project", "Beginner Topics"]
    
    },
    
    {
    id:2,
    text:"Intermediate Notes",
    author:"Jane",
    date:"September 1st 2022",
    topics:["Intermediate Topics", "Group Project", "Final Project Guidlines", "Midterms"]
    },
    
    {
    id:3,
    text:"Final Notes",
    author:"Phillip",
    date:"November 1st 2022",
    topics:["Final Topics", "Final Progress Report", "Lab Time", "Final Presentation","Final Evaluation"]
    }
    ]
   
    const graduateBeginnerNotes = {
        id:4,
        text:"Graduate Notes Part 1",
        author:"Mark",
        date:"Janurary 15 2023",
        topics:["Introduction", "Graduate Beginner Notes", "Group Project"],
        
    }
    
    const graduateIntermediateNotes = {

    id:5,
    text:"Graduate Notes Part 2",
    author:"Mark",
    date:"February 15 2023",
    topics:["Intermediate Topics", "Midterm Project,", "Group Project"]
    }
    
    const graduateFinalNotes = {

    id:6,
    text:"Graduate Notes Part 3",
    author:"Mark",
    date:"March 30 2023",
    topics:["Final Grad Topics", "Final Project"],
    }
    notes.push(graduateBeginnerNotes)
    notes.push(graduateIntermediateNotes)
    notes.push(graduateFinalNotes)


//let totalTopics = 0
//for (const note of notes){
    //console.log(note.id)
   // console.log(note.topics.length)

 // totalTopics + note.length
 //   const avgTopicsPerNote = totalTopics / notes
 //   console.log(totalTopics)
//}
let filteredNotes = []

//let criteria = "put whatever topic you want here"

for (const note of notes){
   // if (note.topics.includes("Group Project")) {
     //   filteredNotes++
     const listNotes = note.topics.join("</article><article>")
     console.log(`<article>${listNotes}</article>`)

}
//console.log(filteredNotes)
