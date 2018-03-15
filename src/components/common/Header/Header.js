/**
 * Created by chenqi1 on 2018/3/5.
 */
export default {
    data() {
        return {
            name: ''
        }
    },
    computed:{
        username(){
//                let username = localStorage.getItem('ms_username');
            let username = this.$store.state.ms_username
            return username ? username : this.name;
        }
    },
    methods:{
        handleCommand(command) {
            if(command == 'loginout'){
                sessionStorage.removeItem('ms_username')
                this.$router.push('/login');
            }
        }
    }
}
