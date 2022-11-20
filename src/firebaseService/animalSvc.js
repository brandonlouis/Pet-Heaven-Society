import { db } from "./firebase-config"
import { collection, getDocs, getDoc, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore"
import { ref, getStorage, getDownloadURL, listAll } from "firebase/storage"

const animalCollectionRef = collection(db, "animals")
class AnimalDataSvc {
    async getAnimalImages() {
        const images = []
        const storage = getStorage()
        const listRef = ref(storage, '/')
        listAll(listRef).then((res) => {
            res.items.forEach((itemRef) => {
                getDownloadURL(itemRef).then((url) => {
                    images.push(url)
                })
            })
        }).catch((error) => {
            console.log(error)
        })

        return images
    }

    async getAnimals() {
        const animals = []
        const querySnapshot = await getDocs(animalCollectionRef)
        querySnapshot.forEach((doc) => {
            animals.push(doc.data())
        })
        return animals
    }
    
    async getAnimal(id) {
        const docRef = doc(db, "animals", id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            console.log("No such document!")
        }
    }
    
    async addAnimal(animal) {
        const docRef = await addDoc(animalCollectionRef, animal)
        console.log("Document written with ID: ", docRef.id)
    }
    
    async deleteAnimal(id) {
        const docRef = doc(db, "animals", id)
        await deleteDoc(docRef)
        console.log("Document successfully deleted!")
    }
    
    async updateAnimal(id, animal) {
        const docRef = doc(db, "animals", id)
        await updateDoc(docRef, animal)
        console.log("Document successfully updated!")
    }
}

export default new AnimalDataSvc()