/**
 * Table 3 — question templates and answer choices, verbatim from the paper.
 * [TIME], [OBJECT] and [REF] denote the query timestamp, target object and
 * visible reference object, as in the paper.
 */

export type QuestionType = {
  capability: string;
  name: string;
  template: string;
  choices: string;
};

export const CAPABILITIES = [
  "Visual grounding",
  "Temporal grounding",
  "Scene localization",
  "3D spatial perception",
];

export const QUESTION_TYPES: QuestionType[] = [
  {
    capability: "Visual grounding",
    name: "Visibility check",
    template:
      "At [TIME], is the previously moved [OBJECT] visible in the current frame?",
    choices: "No; Yes",
  },
  {
    capability: "Temporal grounding",
    name: "Last visible time",
    template:
      "Which timestamp is closest to when the [OBJECT] was last visible?",
    choices: "5 timestamps: HH:MM:SS — N seconds before the end",
  },
  {
    capability: "Temporal grounding",
    name: "Last placement time",
    template:
      "The [OBJECT] was moved earlier in the video. Which timestamp is closest to when it last stopped being moved?",
    choices: "5 timestamps: HH:MM:SS — N seconds before the end",
  },
  {
    capability: "Scene localization",
    name: "Nearest fixture",
    template:
      "At [TIME], based on the last known position of the [OBJECT] that was moved earlier, which fixture type is closest to it? / counter area is closest to it?",
    choices: "5 fixture types / 3–6 kitchen-dependent counter areas",
  },
  {
    capability: "3D spatial perception",
    name: "Object–camera direction",
    template:
      "At [TIME], assuming the previously moved [OBJECT] remains at its last known position, in which direction is the [OBJECT] from your viewpoint?",
    choices: "Front-right; Back-right; Front-left; Back-left",
  },
  {
    capability: "3D spatial perception",
    name: "Object–camera distance",
    template:
      "At [TIME], assuming the previously moved [OBJECT] remains at its last known position, what is the distance between the camera and where the [OBJECT] was left?",
    choices: "Under 1 m; 1 to under 1.5 m; 1.5 m or more",
  },
  {
    capability: "3D spatial perception",
    name: "Object–object direction",
    template:
      "At [TIME], assuming the previously moved [OBJECT] remains at its last known position, where is it relative to the [REF] (marked in red in the current frame) from your viewpoint?",
    choices: "12 to 4:30 o'clock; 4:30 to 7:30 o'clock; 7:30 to 12 o'clock",
  },
  {
    capability: "3D spatial perception",
    name: "Object–object distance",
    template:
      "At [TIME], assuming the previously moved [OBJECT] remains at its last known position, how far is it relative to the [REF] (marked in red in the current frame)?",
    choices: "Under 1 m; 1 to under 1.5 m; 1.5 m or more",
  },
];
