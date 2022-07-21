type ArrayValueType <X extends readonly unknown[]> = X extends readonly (infer Type)[]
    ? Type
    : never;

export default ArrayValueType;