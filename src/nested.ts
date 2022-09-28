//import Q, { all } from "q";
//import { idText } from "typescript";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const pubQuestions = questions.filter(
        (question: Question): boolean => question.published
    );
    return pubQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const fullQ = questions.filter(
        (q: Question): boolean =>
            !(q.body === "" && q.expected === "" && q.options.length === 0)
    );
    return fullQ;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const found = questions.find((q: Question): boolean => q.id === id);
    if (found !== undefined) {
        return found;
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const noid = questions.filter((q: Question): boolean => !(q.id === id));
    return noid;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((q: Question): string => q.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const totalPoints = questions.reduce(
        (currentSum: number, q: Question) => currentSum + q.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const totalPubed = questions.reduce(
        (currentSum: number, q: Question) =>
            q.published === true ? currentSum + q.points : currentSum + 0,
        0
    );
    return totalPubed;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const qCSV = questions
        .map(
            (q: Question): string =>
                // Convenient String Interpolation; could have just used + operator too
                `${q.id},${q.name},${q.options.length},${q.points},${
                    q.published ? "true" : "false"
                }`
        )
        .join("\n");
    return "id,name,options,points,published\n" + qCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const a: Answer[] = questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return a;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const p: Question[] = questions.map(
        (q: Question): Question => ({
            id: q.id,
            name: q.name,
            body: q.body,
            expected: q.expected,
            options: q.options,
            type: q.type,
            points: q.points,
            published: true
        })
    );
    return p;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const allmc = questions.every(
        (q: Question): boolean => q.type === "multiple_choice_question"
    );
    if (allmc === true) {
        return true;
    }
    const allsa = questions.every(
        (q: Question): boolean => q.type === "short_answer_question"
    );
    if (allsa === true) {
        return true;
    }
    return false;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const addedBlank = [...questions, makeBlankQuestion(id, name, type)];
    return addedBlank;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const renamed = questions.map(
        (q: Question): Question => ({
            id: q.id,
            name: q.id === targetId ? newName : q.name,
            body: q.body,
            type: q.type,
            published: q.published,
            options: q.options,
            expected: q.expected,
            points: q.points
        })
    );
    return renamed;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const retyped = questions.map(
        (q: Question): Question => ({
            id: q.id,
            name: q.name,
            body: q.body,
            type: q.id === targetId ? newQuestionType : q.type,
            published: q.published,
            options:
                q.id === targetId &&
                q.type === "multiple_choice_question" &&
                newQuestionType === "short_answer_question"
                    ? []
                    : q.options,
            expected: q.expected,
            points: q.points
        })
    );
    return retyped;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const edited = questions.map(
        (q: Question): Question => ({
            id: q.id,
            name: q.name,
            body: q.body,
            type: q.type,
            published: q.published,
            options:
                q.id === targetId && targetOptionIndex === -1
                    ? [...q.options, newOption]
                    : q.id === targetId && targetOptionIndex !== -1
                    ? addSplice(q.options, targetOptionIndex, newOption)
                    : q.options,
            expected: q.expected,
            points: q.points
        })
    );
    return edited;
}

export function addSplice(options: string[], t: number, o: string): string[] {
    const helper = [...options];
    helper.splice(t, 1, o);
    return helper;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const inserted = [...questions];
    const i: number = inserted.findIndex(
        (q: Question): boolean => q.id === targetId
    );
    const oq = duplicateQuestion(newId, questions[i]);
    inserted.splice(1 + i, 0, oq);
    return inserted;
}
