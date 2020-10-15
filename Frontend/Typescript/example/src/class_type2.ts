interface IFullName {
    firstName: string,
    lastName: string
}
interface IFullNameConstructor {
    new(firstName: string): IFullName; // Construct signature
}


function makeSon(c: IFullNameConstructor, firstName: string) {
    return new c(firstName);
}
function getFullName(son: IFullName) {
    return `${son.firstName} ${son.lastName}`;
}


// Anderson family
class Anderson implements IFullName {
    public lastName: string;
    constructor (public firstName: string) {
        this.lastName = 'Anderson';
    }
}
const tomas = makeSon(Anderson, 'Tomas');
const jack = makeSon(Anderson, 'Jack');
getFullName(tomas); // Tomas Anderson
getFullName(jack); // Jack Anderson


// Smith family?
class Smith implements IFullName {
    public lastName: string;
    constructor (public firstName: string, agentCode: number) {
        this.lastName = `Smith ${agentCode}`;
    }
}
const smith = makeSon(Smith, 7); // Error - TS2345: Argument of type 'typeof Smith' is not assignable to parameter of type 'IFullNameConstructor'.
getFullName(smith);
