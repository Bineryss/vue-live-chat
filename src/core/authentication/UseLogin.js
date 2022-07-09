import { ref } from 'vue'
import { projectAuth } from '@/firebase/config'

const error = ref(null)

const login = async (email, password) => {
	error.value = null

	try {
		return await projectAuth.signInWithEmailAndPassword(email, password)
	} catch (err) {
		console.log(err)
		error.value = 'Incorrect login credentials'
	}
}

const useLogin = () => {
	return { error, login }
}

export default useLogin