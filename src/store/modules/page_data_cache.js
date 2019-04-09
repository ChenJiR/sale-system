export default {
    state: {
        //页面请求数据
        page_cache:{}
    },
    getters: {
        getPageCache: (state) => (page_name)=>{
            console.log(state.page_cache,'getPageCache')
            if(!state.page_cache[page_name]){
                return false;
            }
            return state.page_cache[page_name];
        }
    },
    mutations: {
        setPageCache(state,data_info){
            data_info.data['cache'] = true
            state.page_cache[data_info.page_name] = data_info.data
            console.log(state.page_cache,'setPageCache')
        },
        deletePageCache(state,page_name){
            delete state.page_cache[page_name]
            console.log(state.page_cache,'deletePageCache')
        },
        clearPageCache(state){
            state.page_cache = {}
        }
    },
    actions: {

    }
}
