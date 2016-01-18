import marked from "marked";

function markdown(str) {
    return marked(str);
}

export {
    markdown
}