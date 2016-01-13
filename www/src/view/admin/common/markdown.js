import marked from "marked";

export default {
    markdown(str){
        return marked(str);
    }
}