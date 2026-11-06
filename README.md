# DegreePath 🎓

A personal, interactive college journey dashboard built with React + TypeScript. It follows a Rutgers–Newark → Rutgers–New Brunswick transfer student from Fall 2025 to a target Spring 2029 graduation.

## Features
- Interactive course prerequisite graph (React Flow)
- Four-year semester planner
- Editable grades, credits, statuses, semesters, and prerequisites
- Completed course records and estimated GPA
- Browser localStorage persistence and JSON export
- Responsive dark-mode UI

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Important data notes

This is a **personal planning project, not an official degree audit**. Starter data is based on known academic history, but some course credits, missing grades, course codes, future course selections, prerequisite relationships, and transfer equivalencies **must be verified** against Rutgers transcripts, Degree Navigator, and the current catalog. In particular, the Linear Algebra placeholder has an intentionally nonofficial ID; change it once verified. The GPA shown is an **estimate based only on entered graded courses**, not the university's official GPA. Completed credits shown are the sum of entered course credits and may not equal degree-applicable credits.

Course edits are saved in the browser's localStorage. Export JSON periodically to back up your records. Clearing browser data or using another device will not preserve edits. The Reset button restores starter data.

## Suggested next steps
- Verify the starter data against an unofficial transcript
- Add an import-JSON function
- Add full Rutgers SAS CS requirements and validated prerequisite mappings
- Add drag-and-drop semester scheduling and course requirement checks
- Add optional Supabase authentication and syncing

## License

MIT — adapt for your own academic journey.

Here is a demo video - [https://drive.google.com/file/d/1Z_9Lq4crjNg33744dXiDAl7SpjNFa85j/view?usp=sharing]([url](https://drive.google.com/file/d/1Z_9Lq4crjNg33744dXiDAl7SpjNFa85j/view?usp=sharing)) 
