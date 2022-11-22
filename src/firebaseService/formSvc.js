import { db } from './firebase-config'
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore'
import { ref, getStorage, uploadBytes, deleteObject, getDownloadURL } from 'firebase/storage'

const adoptCollectionRef = collection(db, 'adoption')
const rehomeCollectionRef = collection(db, 'rehome')
class FormDataSvc {
    async getForms(type) {
        const forms = []
        if (type === 'adopt') {
            var querySnapshot = await getDocs(adoptCollectionRef)
        } else {
            var querySnapshot = await getDocs(rehomeCollectionRef)
        }
        querySnapshot.forEach((doc) => {
            forms.push(doc)
        })
        return forms
    }

    async addForm(form, type) {
        if (type === 'adopt') {
            await addDoc(adoptCollectionRef, form)
        } else {
            await addDoc(rehomeCollectionRef, form)
        }
    }
    async uploadAnimalImage(file, uid) {
        const storage = getStorage()
        const storageRef = ref(storage, `/pending/${uid}`)
        return await uploadBytes(storageRef, file)
    }
    async getAnimalImageURL(ref) {
        return await getDownloadURL(ref)
    }

    // If imgId is not supplied, it means the admin is deleting from adoption applications, as no images are uploaded there
    async deleteForm(id, imgId) {
        if (!imgId) {
            var docRef = doc(adoptCollectionRef, id)
        } else {
            var docRef = doc(rehomeCollectionRef, id)

            const storage = getStorage()
            const imgRef = ref(storage, `/pending/${imgId}`)
            await deleteObject(imgRef)
        }
        await deleteDoc(docRef)
    }
}

export default new FormDataSvc()