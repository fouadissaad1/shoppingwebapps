import "firebase/firestore";
import {firestoreDatabase} from "./firestore";
const COLLECTION_TEAMS = "teams";
export async function getTeamsFromDb() {
    if (!firestoreDatabase) return [];
    const result = await firestoreDatabase.collection(COLLECTION_TEAMS).get();
    if (result.empty) return [];
    return result.docs.map(doc => ({...doc.data(), id: doc.id}));
}

const COLLECTION_MENS = "mens";
export async function getMensFromDb() {
    if (!firestoreDatabase) return [];
    const result = await firestoreDatabase.collection(COLLECTION_MENS).get();
    if (result.empty) return [];
    return result.docs.map(doc => ({...doc.data(), id: doc.id}));
}
