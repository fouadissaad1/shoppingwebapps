import "firebase/firestore";
import {firestoreDatabase} from "./firestore";
const COLLECTION_TEAMS = "teams";
export async function getTeamsFromDb() {
    if (!firestoreDatabase) return [];
    const result = await firestoreDatabase.collection(COLLECTION_TEAMS).get();
    if (result.empty) return [];
    return result.docs.map(doc => ({...doc.data(), id: doc.id}));
}
