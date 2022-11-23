import { db } from "./firebase-config"
import { collection, getDocs } from "firebase/firestore"

const animalCollectionRef = collection(db, "animals")
class AnimalDataSvc {
    async getAnimals() {
        const animals = []
        const querySnapshot = await getDocs(animalCollectionRef)
        querySnapshot.forEach((doc) => {
            animals.push(doc.data())
        })
        return animals
    }
}

export default new AnimalDataSvc()