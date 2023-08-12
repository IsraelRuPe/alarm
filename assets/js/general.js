//admin30@gmail.link // admin00000

const db = firebase.firestore();

export async function insert(item){
    try {
        const responce = await db.collection ("usuarios").add(item);
        return responce;
    } catch (error) {
        throw new  Error(error);
    }
}