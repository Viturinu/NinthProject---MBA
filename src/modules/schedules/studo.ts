let numbers: number[];
numbers = [1,2,3,4,5,6];

let users: Array<string>;
users = ["Victor", "Thales"];

function showMessages(message: string): void{ //by default it is void return
    console.log(message);
    //return 10; it will return an error, because function return is void - if it were not set, it would infer by the type return (in this case it would be  a number return)
}

function printUserId(id: number | string){
    console.log(`O ID do usuário é: ${id}`);
}

printUserId("101");
/*
    CONVENÇÕES
    S => state
    T => type
    K => key
    V => value
    E => element
*/
function useState<T>(){ //Generic é utilizado pra deixar a tipagem flexivel (como union também deixa a tipagem flexivel (number | string)), mas a diferença é que o Generic também define a tipagem em execução, porém a tipagem será definida no momento da declaração e só aceita aquilo dali em diante;
    let state:T;
    //let state:number | string;

    function get(){
        return state;
    }
    //function set(newValue: number | string){}
    function set(newValue: T){
        state = newValue;
    }

    return {get, set};
}

let newState = useState<string>();
//let newState = useState();

newState.get();
//newState.set(123); se usar <T>, já não funciona mais porque declarei como string; mesmo se eu extender o T, ele não funciona intercalar tipos; Se eu estender o T com string e number, eu estou definindo que ele só poderá ser string ou number, mas como dito, uma vez declarado não pode ser alterado mais (como acontece no union normal (string || boolean)); 
newState.get();
newState.set("Victor Oliveira");
newState.get();

type idType = number | string | undefined;
type UserResponse = {
    ui: number;
    name: string;
    avatar: string;
    ativo?: boolean;
}

type UserBoss = {
    cargo: string;
}

type UserFull = UserResponse & UserBoss; //intersecção de tipos

interface User{ //outra forma de criar 'tipos' - diferenças irrelevantes
    id: number;
    name: string;
}

interface UserExtra extends User{ //posso estender de um tipo ao invés de uma interface
    cargo: string;
}

let usuarioInterface:UserExtra = {
    name: "Victor",
    cargo: "Analista",
    id: 10,
}

let userResponse = {} as UserResponse; //type assertion
let user:UserFull = {
    avatar: "teste",
    cargo: "teste",
    name: "teste",
    ui: 1,
    ativo: true,
}