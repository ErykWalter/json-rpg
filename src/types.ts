export type Action = {
    id: number,
    name: string,
    description: string,
    decision: Decision[], // decision that can be made
};

export type Decision = {
    id: number[], // ids of actions accessible after this decision
    probability: number[], // numbers which defines how probable is to move to given id
    prompt: string, // text shown on this decision
};
