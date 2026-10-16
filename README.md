# Student Management System

A simple React app to view, add, edit and delete student records. Students are shown as cards. Built with React and Vite using plain JavaScript.

## Features

- Student dashboard with cards and a count of total / enrolled / not enrolled students
- Add a student (popup form)
- Edit a student (popup form, already filled in)
- Delete a student (confirmation popup)
- Cancel button and X button close every popup without changing anything
- Form validation with clear messages (required fields, age 16 to 100, email format, unique student ID)
- Empty state message when there are no students
- Responsive layout for phone and desktop
- Data saved in localStorage, so it stays after a refresh

## Student record

| Field | Type | Why |
| --- | --- | --- |
| id | number | hidden number used by the code to find a student (`Date.now()`) |
| studentId | string | IDs like `STU001` contain letters, so a string is needed |
| name | string | text |
| age | number | stored as a number so it can be checked (16 to 100). The input gives text, so `Number()` converts it |
| email | string | text |
| course | string | one choice from the `courses` array |
| enrolled | boolean | only two answers: true or false |

The list of students is an **array of objects**. Each student is an **object**.

## Why const, let and var

- `const` is used for almost everything (arrays, objects, functions, state) because these are not reassigned. An array or object declared with `const` can still be changed through React state.
- `let` is used when a value must be reassigned. Add it where you need it, for example a counter in a loop.
- `var` is used once, in `getInitials()` in `src/helpers.js`, to show that it is function-scoped (it only exists inside that function). `let` and `const` are preferred in modern code.

## Project structure

```
src/
  App.jsx                    holds the state and the add / edit / delete functions
  main.jsx                   starts the app
  helpers.js                 getInitials() and validateStudent()
  styles.css                 black and white styling
  data/
    students.js              courses, empty student, sample students
  components/
    Header.jsx               banner at the top
    Stats.jsx                the three count boxes
    StudentCard.jsx          one student card
    Modal.jsx                the popup box
    StudentForm.jsx          add / edit form
    DeleteConfirm.jsx        "are you sure?" message
```

## How it works

1. `App.jsx` keeps three pieces of state: `students`, `modal` (which popup is open) and `selected` (the student being edited or deleted).
2. Buttons call `openModal("add" | "edit" | "delete")`, which changes `modal` and shows the right popup.
3. Saving calls `addStudent`, `editStudent` or `deleteStudent`. Each one builds a new array (using spread, `map` or `filter`) and passes it to `saveList`, which updates the screen and localStorage.

## Testing checklist

Tick each one after you test it in the browser (fill in the result column).

| Test | Expected | Result |
| --- | --- | --- |
| Add a valid student | Card appears straight away, counts go up | |
| Add with empty fields | Error messages show, nothing saved | |
| Add with age 5 or 150 | Age error shows | |
| Add with a bad email (`abc`) | Email error shows | |
| Add with a student ID that already exists | "already used" error shows | |
| Edit a student | Form is filled in, card updates after saving | |
| Edit and press Cancel | Nothing changes | |
| Delete a student | Confirmation popup, card disappears after confirming | |
| Delete and press Cancel | Student stays | |
| Delete all students | Empty message shows | |
| Refresh the page | Students are still there | |
| Resize to phone width | Cards stack, popup fits the screen | |

## Run it locally

```
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

## Build for deployment

```
npm run build
```

On Netlify or Vercel use build command `npm run build` and output folder `dist`.

## Links

- GitHub repository: add your link here
- Live site: add your Netlify or Vercel link here
