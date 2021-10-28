import getConfig from "next/config";
const {publicRuntimeConfig } = getConfig()
function Img(props){
    // 获取基础路径
    const basePath = publicRuntimeConfig.basePath;
    // 图片路径
    const {src} = props;
    return <img {...props} src={basePath + (src || "")}/>
}
export default Img;