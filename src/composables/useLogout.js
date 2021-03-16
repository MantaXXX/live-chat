import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const logout = async () => {
  error.value = null
  try {
    // firebase method: signOut() to logout
    await projectAuth.signOut()
  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}


const useLogout = () => {
  return { error, logout }
}

export default useLogout