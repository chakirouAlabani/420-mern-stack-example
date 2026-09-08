# Week 3 Instructor Issue Map

> Instructor-only. Do not distribute with the student starter.

## Teaching objective
Students start from a functional MERN CRUD application. They use ESLint and manual code review to improve code quality without changing expected behaviour.

## Guided practice targets

1. **Loose equality** — `mern/client/src/components/RecordList.jsx`, `fix()` uses `==` for `intern`.
   - Detection: ESLint (`eqeqeq`).
   - Fix: use `===`.
   - Teaching point: automated rule violation; functionality may still appear correct.

2. **Development console statement** — `RecordList.jsx`, `console.log()` after fetching records.
   - Detection: ESLint (`no-console`).
   - Fix: remove it (or use an intentional logging strategy outside this exercise).
   - Teaching point: distinguish debugging output from intentional error/warning logging.

3. **Unused variable** — `RecordList.jsx`, `totalRecords`.
   - Detection: ESLint (`no-unused-vars`).
   - Fix: remove it or use it meaningfully. Preferred exercise fix: remove it.

4. **Poor function name** — `RecordList.jsx`, `fix(level)`.
   - Detection: human review.
   - Fix: rename to `normalizeLevel` / `formatLevel`.
   - Teaching point: code can pass lint and still be unclear.

5. **Duplicated level-normalization logic** — `RecordList.jsx` and `Record.jsx` contain equivalent normalization logic.
   - Detection: human review.
   - Fix: extract a shared utility, e.g. `src/utils/employee.js`, and import it in both components.
   - Teaching point: duplication is a code smell ESLint does not reliably identify.

6. **Baseline refactoring discussion** — `RecordList.jsx` combines fetching, deletion, mapping and rendering.
   - Detection: human review.
   - Guided action: discuss responsibility boundaries; do not necessarily split the component during the guided portion.
   - Teaching point: not every smell must be refactored immediately; scope/risk matter.

## Lab 2 targets

7. **Vague data name** — `mern/client/src/components/Record.jsx`, submission payload is called `data`.
   - Detection: human review.
   - Expected improvement: `employee`, `employeeData`, or similarly meaningful name.

8. **Duplicated POST/PATCH request construction** — `Record.jsx`, `onSubmit()` repeats headers/body and differs mainly by URL/method.
   - Detection: human review.
   - Expected improvement: derive URL/method and perform one fetch, or extract a request helper.

9. **Oversized/mixed-responsibility component** — `Record.jsx` performs data loading, normalization, submission and large form rendering.
   - Detection: human review.
   - Acceptable improvement: extract at least one meaningful helper/component without changing behaviour. Do not require a single exact architecture.

10. **Repeated database collection lookup** — `mern/server/routes/record.js` repeatedly calls `db.collection("records")`.
    - Detection: human review.
    - Expected improvement: define/reuse the collection cleanly where appropriate.

11. **Response status ordering** — backend uses patterns such as `res.send(result).status(200)`.
    - Detection: human review/runtime/API knowledge, not ordinary ESLint.
    - Expected improvement: `res.status(200).send(result)`; use suitable status codes for each operation.

12. **Repeated route error-handling structure** — POST/PATCH/DELETE contain very similar try/catch + 500 response logic.
    - Detection: human review.
    - Expected improvement: reduce duplication sensibly. Accept a helper or another clear refactor; do not require introducing a full controller/middleware architecture at this stage.

## Important grading principle
Do not grade only against exact source text. For manual refactoring targets, accept alternative solutions when they improve readability/maintainability, preserve CRUD behaviour, and the student can explain the reasoning.

## Checkpoint
Guided work stops after targets 1–6. Students should commit their guided changes before beginning graded targets 7–12.
