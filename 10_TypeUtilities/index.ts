// Type utilites are used to make the task easy 


// 1. Partial<Type>: used to make any type's property optional

type User1 = {
    name: string,
    email: string,
}

type User2 = Partial<User1>; // here, all the properties of User1 are optional in User2.




// 2. Required<Type>: opposite of Partial<type> which is basically used to invert the properties to optional to required and vice-versa
const requiredUser: Required<User1> = {
    name: "Deependra Parmar",
    email: "me@gmail.com"
}


// 3. Readonly<type>: used to make the all the properties of a specific type to readonly
const readonlyUser: Readonly<User1> = {
    name: "Deependra Parmar",
    email: "me@gmail.com"
}

// readonlyUser.email = "Hello World!";  can't change anything as it is made readonly by the type utility




// 4. Record<keys, type>:  we can create a type with ease using this

type Human = Record<"name" | "email" | "address" | "gender", string>;



// 5. Pick<Type, Keys>: used to pick few properties from one type while deriving another from it.
interface OrderInfo{
    readonly id: string,
    user: string,
    city: string,
    state: string,
    status: string,
    country: string,
}

type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country" >;



// 6. Omit<type, keys>: just opposite to pick which is used to omit few properties from the type while deriving other.
type UserProfile = Omit<OrderInfo, "city" | "state" | "country" | "status" >



// 7. Exclude<Type, ExcludedUnion>:  is similar to omit with just one difference that we are not using the keys of a type ine xlucde.
type MyUnion = string | boolean | number;
type NonBooleanType = Exclude<MyUnion, boolean>;
type NonNumeralType = Exclude<MyUnion, number>;
type NonStringType = Exclude<MyUnion, string>;



// 8. Extract<Type, Union>: used to extract a type of data from the union.
type BooleanType = Extract<MyUnion, boolean>;
type NumeralType = Extract<MyUnion, number>;
type StringType = Extract<MyUnion, string>;


// 9. NonNullable<Type>: return a type with all the type of data except null and undefined
type NonNullableType = string | number | boolean | null | undefined;
type DerivedNonNullableType = NonNullable<NonNullableType>;



// 10. Parameters<type> is used to get the type of the parameter of a function
const functionForParams = (a:number, b:string) => {
    console.log(a+b);
}

type ParamType = Parameters<typeof functionForParams>;


// 11. ContructorParameters<type>: used to get the type of the parameters of a constructors of a class
class Test{
    constructor(public a: number, public b: string){}
}
type ConstParam = ConstructorParameters<typeof Test>;


// 12. ReturnType<type> is used to get the type of the return type of the function
const returnOutput = (a: number, b: string) => {
    return a + b;
}
type ReturnTypeType = ReturnType<typeof returnOutput>;


// 13. InstanceType<type> is used to get the type of the properties of a already defined class.
type InstanceTypeType = InstanceType<typeof Test>;

const testObjectFromInstance: InstanceTypeType = {
    a: 20,
    b: "name",
}