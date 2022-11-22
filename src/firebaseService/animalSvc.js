import { db } from "./firebase-config"
import { collection, getDocs, getDoc, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore"
import { ref, getStorage, getDownloadURL, listAll } from "firebase/storage"

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

    
    // async addAnimal(animal) {
    //     const docRef = await addDoc(animalCollectionRef, animal)
    //     console.log("Document written with ID: ", docRef.id)
    // }
    
    // async deleteAnimal(id) {
    //     const docRef = doc(animalCollectionRef, id)
    //     await deleteDoc(docRef)
    //     console.log("Document successfully deleted!")
    // }
    
    // async updateAnimal(id, animal) {
    //     const docRef = doc(animalCollectionRef, id)
    //     await updateDoc(docRef, animal)
    //     console.log("Document successfully updated!")
    // }
}

export default new AnimalDataSvc()