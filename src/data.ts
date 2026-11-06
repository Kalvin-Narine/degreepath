export type Status = 'completed' | 'in-progress' | 'planned';
export type Course = { id:string; name:string; semester:string; credits:number|null; grade:string; status:Status; prerequisites:string[]; campus:'Newark'|'New Brunswick'; };
export const semesters = ['Fall 2025','Spring 2026','Summer 2026','Fall 2026','Spring 2027','Summer 2027','Fall 2027','Spring 2028','Summer 2028','Fall 2028','Spring 2029'];
export const initialCourses: Course[] = [
 {id:'21:198:101',name:'Computers & Programming I',semester:'Fall 2025',credits:3,grade:'A',status:'completed',prerequisites:[],campus:'Newark'},
 {id:'21:220:101',name:'Microeconomics',semester:'Fall 2025',credits:3,grade:'C+',status:'completed',prerequisites:[],campus:'Newark'},
 {id:'21:355:101',name:'English Composition I',semester:'Fall 2025',credits:3,grade:'B',status:'completed',prerequisites:[],campus:'Newark'},
 {id:'21:510:202',name:'Western Civilization II',semester:'Fall 2025',credits:3,grade:'B',status:'completed',prerequisites:[],campus:'Newark'},
 {id:'21:512:371',name:'U.S. History Since 1945',semester:'Fall 2025',credits:3,grade:'B',status:'completed',prerequisites:[],campus:'Newark'},
 {id:'21:198:102',name:'Computers & Programming II',semester:'Spring 2026',credits:3,grade:'A',status:'completed',prerequisites:['21:198:101'],campus:'Newark'},
 {id:'21:355:102',name:'English Composition II',semester:'Spring 2026',credits:3,grade:'',status:'completed',prerequisites:['21:355:101'],campus:'Newark'},
 {id:'21:640:135',name:'Calculus I',semester:'Spring 2026',credits:4,grade:'C',status:'completed',prerequisites:[],campus:'Newark'},
 {id:'21:730:103',name:'Introduction to Philosophy',semester:'Spring 2026',credits:3,grade:'A-',status:'completed',prerequisites:[],campus:'Newark'},
 {id:'21:920:101',name:'Introduction to Sociology',semester:'Spring 2026',credits:3,grade:'',status:'completed',prerequisites:[],campus:'Newark'},
 {id:'01:198:112',name:'Data Structures',semester:'Fall 2026',credits:4,grade:'',status:'in-progress',prerequisites:['21:198:102'],campus:'New Brunswick'},
 {id:'01:640:152',name:'Calculus II',semester:'Fall 2026',credits:4,grade:'',status:'in-progress',prerequisites:['21:640:135'],campus:'New Brunswick'},
 {id:'01:640:250',name:'Discrete Structures I',semester:'Fall 2026',credits:4,grade:'',status:'in-progress',prerequisites:[],campus:'New Brunswick'},
 {id:'01:198:205',name:'Introduction to Discrete Structures II',semester:'Spring 2027',credits:4,grade:'',status:'planned',prerequisites:['01:640:250'],campus:'New Brunswick'},
 {id:'01:640:250-LA',name:'Linear Algebra (course number to confirm)',semester:'Spring 2027',credits:null,grade:'',status:'planned',prerequisites:[],campus:'New Brunswick'},
 {id:'01:198:211',name:'Computer Architecture',semester:'Fall 2027',credits:4,grade:'',status:'planned',prerequisites:['01:198:112'],campus:'New Brunswick'},
 {id:'01:198:344',name:'Design and Analysis of Computer Algorithms',semester:'Spring 2028',credits:4,grade:'',status:'planned',prerequisites:['01:198:112','01:198:205'],campus:'New Brunswick'}
];
