import "firebase/firestore";
import { firebaseConfig } from "./firestore";

const COLLECTION_TEAMS = "teams";

export async function getTeamsFromDb() {
    if (!firebaseConfig) return [];
    const result = await firebaseConfig.firestore().collection(COLLECTION_TEAMS).get();
    if (result.empty) return [];
    return result.docs.map(doc => ({...doc.data(), id: doc.id}));

}

const COLLECTION_MENS = "mens";

export async function getMensFromDb() {
    if (!firebaseConfig) return [];
    const result = await firebaseConfig.firestore().collection(COLLECTION_MENS).get();
    if (result.empty) return [];
    return result.docs.map(doc => ({...doc.data(), id: doc.id}));
}

const COLLECTION_WOMEN = "women's";

export async function getWomenFromDb() {
    if (!firebaseConfig) return [];
    const result = await firebaseConfig.firestore().collection(COLLECTION_WOMEN).get();
    if (result.empty) return [];
    return result.docs.map(doc => ({...doc.data(), id: doc.id}));
}

const COLLECTION_KIDS = "childeren";

export async function getChilderenFromDb() {
    if (!firebaseConfig) return [];
    const result = await firebaseConfig.firestore().collection(COLLECTION_KIDS).get();
    if (result.empty) return [];
    return result.docs.map(doc => ({...doc.data(), id: doc.id}));
}
