// Avoid this in shared/global files unless intentional
// If you do not use export in any file, TypeScript will treat the interface as global and try to merge it:

interface Person {
  name: string;
}
let u : Person = {
    name: "name",
};

console.log(u)