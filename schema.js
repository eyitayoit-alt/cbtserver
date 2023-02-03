db = connect('mongodb://localhost/exams')


db.Question.insertMany([

    {  
        Passage: "",
        Instruction:"In each of the following sentences, there is one word in quotes and one gap. From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word in Quotes and that will at the same time  correctly fill the gap in the sentence.",
        Questions:[
            {question:"There isn't enough rice, so its importation is \"permitted\", whereas the importation of cement is.......…",
        option:["licensed","suspended","unacceptable","prohibited"],
        correct:"prohibited"},
        {
        question:"The cast consisted of many \"famous\" actors and a few.......ones",
        option:[   "humble","infamous","unknown","unpopular" ],
        correct:"unpopular"
        },
        {
        question:"My grandfather, rather being.........was often quite \"prejudiced\" ",
        option:["subjective","discriminating","impartial","strict"],
        correct:"impartial"
        },
        {
        question:"Both sides are very \"hopeful\" about the outcome of the peace talks, but observers are ,still very......…",
        option:["realistics","empathic","explicit","pessimistics"],
        correct:"pessimistics"
        },
        {
        question:"The clever lawyer exposed the facts that were \"obscure\"  in the case, making the judge sweet beyond the.........",
        option:["open","obvious","illustrated","reflected"],
        correct:"obvious"
        
        },
        {
        question:"It took me the whole day to summarise the lecturer's \"copious\" notes having been used to.........…",
        option:["scanty","illegible","inaccurate","coherent"],
        correct:"scanty",
        
        },
        {
        question:" The principal of that school was demoted for his \"incompetence\" while several others were commended for their.  ........  ",
        option:["puntuality","honesty","efficiency","sincerity"],
        correct:"efficiency"
        },
        {
        question:"The official who \"disclosed\" the information he was to ________was sacked",
        option:["cover","protect", "conceal","allow"],
        correct:"conceal"
        },
        {
        question:"The prosecutor argued his case \"vehemently\" but the defence lawyer responded.........",
        option:["constantly","feebly","roughly","hurriedly"],
        correct:"feebly"
        },
        {
        question:"While we expected it to be \"gradual\" the process to transition to civilian rule rule came to an _____ end",
        option:["abrupt","anticipated","unhappy","unpleasant"],
        correct:"abrupt"
        }]
    }
])