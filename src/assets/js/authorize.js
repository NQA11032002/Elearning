

// Your component file
import { getRole } from "./auth.js";
import { useRouter } from 'vue-router';

export default {
  mounted() {
    const router = useRouter();
    const role = getRole();

    if (role.toLowerCase().includes("user")) {
      console.log(role)
      router.push('/home');
    }
  }
};
